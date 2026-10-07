import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard against executing or modifying DOM inside Elementor, Divi, Gutenberg, or Customizer previews
const isPageBuilder =
  typeof window !== 'undefined' &&
  (window.location.search.includes('elementor-preview') ||
    window.location.search.includes('et_fb') ||
    window.location.search.includes('preview=true') ||
    document.body.classList.contains('elementor-editor-active') ||
    document.body.classList.contains('et-fb') ||
    document.body.classList.contains('wp-admin'));

if (!isPageBuilder) {
  const container = document.getElementById('online-mmj-card-root') || document.getElementById('root');
  if (container) {
    // Only eliminate static wrappers if on standalone SPA shell without custom builder canvas
    const hasBuilderCanvas = document.querySelector('.site-main.builder-fullwidth, .front-page-builder-canvas, .entry-location-page, .entry-state-page, .entry-page, .single-article');
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

    createRoot(container).render(<App />);
  }
}
