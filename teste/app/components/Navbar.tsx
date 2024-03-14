
import Link from 'next/link';
export const Navbar = () => {
  return (
    <nav className="h-28
     flex items-center justify-between px-4 nav">
        <h2 className="text-2xl font-sans font-bold">TESTING</h2>

        <ul className="flex gap-4 text-white ">
            <li className="cursor-pointer hover:underline">
              <Link href="#clientes" scroll={true}>
              Clientes
              </Link>
              </li>
              
            <li className="cursor-pointer hover:underline"> <Link href="#cobranca" scroll={true}>
              Cobranca
              </Link></li>
            <li className="cursor-pointer hover:underline"><Link href="#comandos" scroll={true}>
              Comandos
              </Link></li>
            <li className="cursor-pointer hover:underline"><Link href="#footer" scroll={true}>
              Footer
              </Link></li>
        </ul>
    </nav>
  )
}
