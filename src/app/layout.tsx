 import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          {children}
        </ViewTransitions>
      </body>
    </html>
  );
}