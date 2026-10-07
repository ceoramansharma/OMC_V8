import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('online-mmj-card-root') || document.getElementById('root');
if (container) {
  // If running inside WordPress, eliminate duplicate static PHP headers, banners, or footers
  try {
    const staticElements = document.querySelectorAll(
      '.online-mmj-static-banner, .online-mmj-static-header, .online-mmj-static-footer, .mmj-breadcrumbs, body > header, body > footer, body > div.bg-\\[\\#15803d\\]'
    );
    staticElements.forEach((el) => {
      if (!container.contains(el)) {
        el.remove();
      }
    });
  } catch (e) {
    // ignore
  }

  createRoot(container).render(<App />);
}
