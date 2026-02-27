import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gururaj Hegde | Lead QA Engineer & Automation Expert',
  description: 'Portfolio of Gururaj Hegde, a QA Professional with a decade of experience in Software Quality Assurance, Automation Frameworks, and CI/CD.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* We will add Navbar here later */}
        <main>{children}</main>
        {/* We will add Footer here later */}
      </body>
    </html>
  )
}
