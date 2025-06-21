import MainHeader from '@/components/main-header';
import '../globals.css';

export const metadata = {
  title: 'News',
  description: 'Routing and Page Rendering in Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
        {children}
        </div>
      </body>
    </html>
  );
}
