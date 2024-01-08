import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${inter.className} bg-background h-[100vh] flex flex-col justify-between`} >
       <Navbar/>
       {children}
       <Footer/>
      </body>
    </html>
  )
}
