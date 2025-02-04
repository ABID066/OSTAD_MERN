'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ProgressBar
            height="2px"
            color="#000d00"
            options={{ showSpinner: false }}
        />
      </body>
    </html>
  );
}
