import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../presentation/common/providers/theme-provider'
import Nav from '@/presentation/common/ui/Nav'

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  weight: ['300', '600', '800'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'Country App',
  description: 'A beautiful country information app with dark/light theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunitoSans.variable} font-nunito bg-grey-50 dark:bg-blue-950 text-grey-950 dark:text-white min-h-dvh min-w-dvw transition-colors duration-200`}>
      <body>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
