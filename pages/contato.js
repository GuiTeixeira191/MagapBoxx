import React from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contato = () => {
    return (
        <>
            <div>
            <PageTitle title='Fale conosco' />
            </div>
            <div className='text-center'>
                <h1 className='font-bold text-2xl pt-10'>Magap Usinagem e Ferramentaria</h1>
                <p className=' pt-4'>Rua Guaianésia, 275, Chácaras Reunidas</p>
                <p>São José dos Campos - SP</p>
                <h1 className='font-bold text-lg pt-10'>Telefones para Contato</h1>
                (12) 3934-5554
                (12) 3934-3365
                (12) 3933-7835
                <p className='text-sky-900 font-bold'>magap@magap.com.br</p>
            </div>
        </>
    )
}

export default Contato