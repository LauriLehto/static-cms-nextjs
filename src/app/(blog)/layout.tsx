import "./globals.css";
import { Ubuntu } from "next/font/google";


const inter = Ubuntu({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Next.js Static CMS Blog",
  description: "Next.js blog template for Static CMS on Netlify",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
