
import './globals.css'
import "../style/index.scss"
import AppProvider from '@/contextApi/AppProvider'
import MouseCursor from '@/utils/MouseCursor'
export const metadata = {
  title: 'Royel - Luxury Hotel Booking React NextJs Template',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.png" />
          <link href="./globals.css" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Barlow:wght@300;400;500;600;700;800&family=Gilda+Display&display=swap" rel="stylesheet"></link>
        </head>

        <body>

          <AppProvider>
            <MouseCursor />
            {children}
          </AppProvider>
        </body>
      </html>

    </>
  )
}

