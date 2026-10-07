import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ---------------------------------------------------------------------------
// WordPress Page Builder & Headless Integration Guard
// ---------------------------------------------------------------------------
// When Elementor, Divi, Beaver Builder, Gutenberg, or custom editor canvases are active,
// or when running in WordPress 'headless-mode' / page-builder edit mode, the React SPA
// must yield completely so page builders can render, drag-and-drop, and edit the native
// post content and layouts without any DOM clashing or iframe script collisions.
export function checkIsPageBuilderOrHeadlessMode(): boolean {
  if (typeof window === 'undefined') return false;

  const urlParams = new URLSearchParams(window.location.search);
  const searchStr = window.location.search.toLowerCase();

  // 1. Explicit Headless Mode Query Flag or Setting
  const hasHeadlessFlag =
    urlParams.get('headless-mode') === '1' ||
    urlParams.get('headless-mode') === 'true' ||
    urlParams.get('headless') === '1' ||
    urlParams.get('headless') === 'true' ||
    (window as unknown as { onlineMMJCardSettings?: { headlessMode?: boolean } })?.onlineMMJCardSettings?.headlessMode === true;

  if (hasHeadlessFlag) {
    return true;
  }

  // 2. Elementor Editor & Preview Detection
  const isElementor =
    searchStr.includes('elementor-preview') ||
    urlParams.get('action') === 'elementor' ||
    document.body.classList.contains('elementor-editor-active') ||
    document.body.classList.contains('elementor-editor-preview') ||
    document.body.classList.contains('elementor-page') && searchStr.includes('preview=true') ||
    Boolean((window as unknown as { elementorFrontend?: unknown })?.elementorFrontend && (window as unknown as { elementor?: unknown })?.elementor);

  // 3. Divi Builder (Visual Builder & Theme Builder) Detection
  const isDivi =
    searchStr.includes('et_fb=1') ||
    searchStr.includes('et_pb_preview=true') ||
    document.body.classList.contains('et-fb') ||
    document.body.classList.contains('et_pb_builder_active') ||
    document.body.classList.contains('et_fb_preview_active');

  // 4. WordPress Admin, Gutenberg, Beaver Builder, SiteOrigin, Oxygen & Customizer
  const isOtherBuilder =
    searchStr.includes('preview=true') ||
    searchStr.includes('fl_builder') || // Beaver Builder
    searchStr.includes('ct_builder=true') || // Oxygen
    searchStr.includes('siteorigin_panels_live_editor=true') ||
    document.body.classList.contains('wp-admin') ||
    document.body.classList.contains('block-editor-page') ||
    document.body.classList.contains('wp-customizer');

  return Boolean(isElementor || isDivi || isOtherBuilder);
}

const isHeadlessOrBuilder = checkIsPageBuilderOrHeadlessMode();

if (!isHeadlessOrBuilder) {
  const container = document.getElementById('online-mmj-card-root') || document.getElementById('root');
  if (container) {
    // Only eliminate static wrappers if on standalone SPA shell without custom builder canvas
    const hasBuilderCanvas = document.querySelector(
      '.site-main.builder-fullwidth, .front-page-builder-canvas, .entry-location-page, .entry-state-page, .entry-page, .single-article, .builder-evaluation-template'
    );
    if (!hasBuilderCanvas) {
      try {
        const staticElements = document.querySelectorAll(
          '.online-mmj-static-banner, .online-mmj-static-header, .online-mmj-static-footer, .mmj-breadcrumbs, body > header.site-header, body > footer.site-footer, body > div.bg-\\[\\#15803d\\]'
        );
        staticElements.forEach((el) => {
          if (!container.contains(el)) {
            el.remove();
          }
        });
      } catch (e) {
        // ignore
      }
    }

    createRoot(container).render(<App isHeadlessMode={false} />);
  }
}

