import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main className="p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
