import { useEffect } from 'react';
import BackToTop from '../app/BackToTop';

export default { title: 'Components/BackToTop' };

export const Visible = () => {
  useEffect(() => {
    try { window.scrollTo({ top: 500 }); } catch {}
  }, []);
  return (
    <div style={{ height: '150vh', padding: 24 }}>
      <p>Scroll down to see the button appear (auto-scrolled in story).</p>
      <BackToTop />
    </div>
  );
};
