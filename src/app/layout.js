import './globals.css';
import Navbar from '@/components/shared/NavBar';

export const metadata = {
  title: 'Tikalyzer | Home',
  description: 'Analyze your TikTok account and get insights on your audience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
