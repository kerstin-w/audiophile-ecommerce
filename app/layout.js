import { Manrope } from 'next/font/google';
import '@/app/_styles/globals.css';
import Header from './_components/Layout/Header/Header';
import Footer from './_components/Layout/Footer/Footer';
import { ShoppingCartProvider } from './_context/ShoppingCartContext';

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-565RWJ2D');
            `,
          }}
        />
      </head>
      <body
        className={`${manrope.className} antialiased bg-primary-50 text-black min-h-screen flex flex-col relative`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-565RWJ2D"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>{' '}
        <ShoppingCartProvider>
          <Header />
          {children}
          <Footer />
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
