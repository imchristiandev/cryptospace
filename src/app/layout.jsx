import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cryptospace',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
