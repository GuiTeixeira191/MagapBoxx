import React from "react"
import Link from "next/link"

const Header = () => {
    return(
        <div className='bg-gray-200 p-4 shadow-lg '>
            <div  className= 'container mx-auto'>
                <Link href='/'>
                    <img className="mx-auto" src="/logo_magap.png" alt="Logo Magap"/>
                </Link>
            </div>
            <div className="text-center mt-5">
                <Link href= '/'>
                    <a className="hover:underline px-2 text-2xl font-bold">Home</a>
                </Link>
                <Link href= '/sobre'>
                    <a className="hover:underline px-2 text-2xl font-bold">Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className="hover:underline px-2 text-2xl font-bold">Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className="hover:underline px-2 text-2xl font-bold">Pesquisa</a>
                </Link>
            </div>
        </div>
    )
}

export default Header

