import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre nós' />
            <h1 className='text-center'>Sobre Nós</h1>
            <div className='text-center'>
                <p>A MAGAP foi fundada em 02 de julho de 1996. Estamos a mais de 17 anos no mercado de usinagem de peças metálicas e não metálicas de baixa, média e alta complexidade, sempre com alta qualidade. Atuamos em diversos setores como Aeroespacial, automobilístico, saúde entre outros.</p>
                <p>Após 17 anos atuando no mercado contamos com clientes altamente fidelizados, estando plenamente satisfeitos com nosso atendimento. Isto mostra o grau de comprometimento que nossa equipe de colaboradores possuem.</p>
            </div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    );
}

export default Sobre