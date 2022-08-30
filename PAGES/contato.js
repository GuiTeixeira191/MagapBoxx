import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Fale conosco' />
            <h1>Contato</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Contato