import { createRoot } from 'react-dom/client';
import App from './app';
import './styles.scss';

let container = null;

document.addEventListener('DOMContentLoaded', event => {
  if (!container) {
    container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App />);
  }
});
