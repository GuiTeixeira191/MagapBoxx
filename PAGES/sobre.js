import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre nós' />
            <h1>Sobre</h1>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    );
}

export default Sobre