import { Manrope } from 'next/font/google';
import '@/app/_styles/globals.css';
import Headers from './_components/Header/Headers';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'audiophile | Home',
  description:
    'Shop Audiphile for premium headphones, earphones, and speakers. Enjoy top sound quality and great deals. Fast shipping available.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-primary-50 text-black min-h-screen flex flex-col relative`}
      >
        <Headers />
        {children}
      </body>
    </html>
  );
}
