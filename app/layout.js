import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/AllComponent/Navbar";
import Footer from "./Component/Footer";
import Topbar from "./Component/Topbar";
import Providerfile from "./Component/Store/Providerfile";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { development } from "./Component/common";
import { redirect } from "next/navigation";
import Maintenance from "./Component/AllComponent/Maintenance"

import LayoutCompo from "./LayoutCompo"


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Next Gen",
  description: "Book online Trip",
};

export default async function RootLayout({ children }) {

  const locale = await getLocale();
 

  const messages = await getMessages();

  



  return (
    <html lang={locale} >
      <head>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7F46NND7PG"></script>
     






      <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5345864,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>




      </head>



      <body className={inter.className}>
     
     {development !="production"&& <NextIntlClientProvider messages={messages}>
        <Providerfile>
       <LayoutCompo >{children}</LayoutCompo>
        </Providerfile>
      </NextIntlClientProvider>
}
      {
        development=="production" && <Maintenance />
      }
      </body>
      
    </html>
  );
}
