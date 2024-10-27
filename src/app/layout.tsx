import "./globals.css";
import "../styles/global.css"
import { AntdRegistry } from '@ant-design/nextjs-registry';

import Header from "../components/base/header/index"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <AntdRegistry>
      <body>
      <Header />
        {children}
      </body>
    </AntdRegistry>
    </html>
  );
}
