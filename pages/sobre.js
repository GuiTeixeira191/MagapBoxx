import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'

const Sobre = () => {
    return (
        <>
            <div>
                <PageTitle title='Sobre nós' />
                <h1 className='text-center font-bold p-8 text-3xl'>Sobre Nós</h1>
            </div>
            <div className='text-center px-64 text-xl'>
                <p>A <strong>MAGAP</strong> foi fundada em 02 de julho de 1996. Estamos a mais de 26 anos no mercado de usinagem de peças metálicas e não metálicas de baixa, média e alta complexidade, sempre com alta qualidade. Atuamos em diversos setores como Aeroespacial, automobilístico, saúde entre outros.</p>
                <p>Após anos atuando no mercado contamos com clientes altamente fidelizados, estando plenamente satisfeitos com nosso atendimento. Isto mostra o grau de comprometimento que nossa equipe de colaboradores possuem.</p>
            </div>
            <div className='flex justify-center mt-10 mb-10'>
                <img className="drop-shadow-md hover:drop-shadow-xl mx-6" src="/certificado1.jpg" alt="certificado1"/>
                <img className="drop-shadow-md hover:drop-shadow-xl" src="/certificado2.jpg" alt="certificado1"/>
            </div>
        </>
    );
}

export default Sobre