import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../Components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = useSWR ('/api/get-promo' , fetcher )
   // return (<pre>{JSON.stringify(data)}</pre>)//
    return (
        <div>
            <PageTitle title='Seja bem-vindo!' />
            <p className='mt-6 text-center'>
                A Magap Usinagem sempre busca atender melhor os seus clientes!<br/>
                Por isso, estamos dispostos a ouvir sua opinião.
            </p>
            <div className='text-center m-12'>
                <Link href= '/pesquisa'>
                    <a className='hover:underline bg-blue-500 px-6 py-4 font-bold rounded-lg shadow-lg'>Dar opinião ou sugestão!</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p>}
            { !error && data && data.showCoupon &&
            <p className='m-6 text-center'>
                {data.message}
            </p>
            }
        </div>
    )
}

export default Index