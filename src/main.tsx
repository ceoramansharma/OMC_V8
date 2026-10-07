import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ---------------------------------------------------------------------------
// WordPress Page Builder & Headless Integration Guard
// ---------------------------------------------------------------------------
// When Elementor or Divi editor canvases are active, or when running in WordPress
// 'headless-mode', the React SPA yields so page builders can render, drag-and-drop,
// and edit the native post content without any DOM clashing or iframe script collisions.
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

  // 2. Elementor Editor Canvas Detection (Active editor mode only - never standard preview)
  const isElementor =
    searchStr.includes('elementor-preview') ||
    urlParams.get('action') === 'elementor' ||
    document.body.classList.contains('elementor-editor-active') ||
    document.body.classList.contains('elementor-editor-preview');

  // 3. Divi Builder Visual Canvas Detection
  const isDivi =
    searchStr.includes('et_fb=1') ||
    document.body.classList.contains('et-fb') ||
    document.body.classList.contains('et_pb_builder_active');

  // 4. Beaver Builder or WordPress Admin Screen
  const isOtherEditorCanvas =
    searchStr.includes('fl_builder') ||
    document.body.classList.contains('wp-admin') ||
    document.body.classList.contains('block-editor-page');

  return Boolean(isElementor || isDivi || isOtherEditorCanvas);
}

const isHeadlessOrBuilder = checkIsPageBuilderOrHeadlessMode();

if (!isHeadlessOrBuilder) {
  const container = document.getElementById('online-mmj-card-root') || document.getElementById('root');
  if (container) {
    // When React mounts, add marker class to body so fallback PHP header/footer are cleanly suppressed via CSS
    document.body.classList.add('online-mmj-spa-active');

    createRoot(container).render(<App isHeadlessMode={false} />);
  }
}

