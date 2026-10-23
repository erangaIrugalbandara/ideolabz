import type { Metadata } from 'next';
import TBLNavbar from '@/components/techbaselk/TBLNavbar';
import './tbl.css';

export const metadata: Metadata = {
  title: 'Tech Base LK — AI Knowledge Hub',
  description:
    'Tech Base LK: Learn AI video creation, grow your Facebook page for high CPM audiences, and access free master prompts daily.',
  keywords: 'Tech Base LK, AI video, Facebook page growth, master prompts, free prompts, Sri Lanka tech',
  openGraph: {
    title: 'Tech Base LK — AI Knowledge Hub',
    description: 'Free master prompts, AI video creation tips, and Facebook growth strategies.',
    type: 'website',
    url: 'https://ideolabz.com/techbaselk',
  },
};

export default function TBLLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tbl-root">
      <TBLNavbar />
      <main className="tbl-main">{children}</main>
      <footer className="tbl-footer">
        <div className="tbl-footer-inner container">
          <div className="tbl-footer-brand">
            <span className="tbl-logo-icon">◈</span>
            <span className="tbl-logo-text">Tech Base LK</span>
          </div>
          <p className="tbl-footer-tagline">Empowering creators with AI knowledge & master prompts.</p>
          <div className="tbl-footer-links">
            <a href="/techbaselk">Home</a>
            <a href="/techbaselk/prompts">Prompt Library</a>
            <a href="/techbaselk/classes">Classes</a>
            <a href="/techbaselk/products">Products</a>
            <a href="/techbaselk/about">About</a>
            <a href="/">Ideolabz</a>
          </div>
          <div className="tbl-footer-bottom">
            <span>© 2024 Tech Base LK. All rights reserved.</span>
            <span>A brand under <a href="/" className="tbl-footer-idl-link">Ideolabz</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
