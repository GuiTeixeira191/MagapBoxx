import React, { useState} from 'react'
import Link from 'next/link'
import PageTitle from '../Components/PageTitle'

const Pesquisa = () => {
    const [form, setform] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 5 
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [sucess, setSucess ] = useState(false)
    const [retorno, setRetorno ] = useState({})
    const save = async () =>{
        try {
        const response = await fetch ('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSucess (true)
        setRetorno (data)
    } catch (err){

    }}

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setform(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div>
            <div className='text-center font-bold text-2xl m-6'>
                <PageTitle title='Pesquisa' />
                <h1>Críticas e Sugestões</h1>
            </div>

            <div className='text-center m-6'>
                <p>
                    A Magap Usinagem está em busca de entender os seus clientes. <br/>
                    Por isso, estamos sempre abertos a ouvir sua opinião.
                </p>
            </div>
            {!sucess && <div>
                <div className='w-1/6 mx-auto'>
                    <label className='font-bold '>Seu Nome</label>
                    <input type='text' className='bg-blue-100 p-2 block shadow my-2 rounded border-solid' placeholder='Nome' onChange={onChange} name= 'Nome' value={form.Nome}/>
                </div>

                <div className='w-1/6 mx-auto'>
                    <label className='font-bold'>E-mail</label>
                    <input type='email' className='bg-blue-100 p-2 block shadow my-2 rounded border-solid' placeholder='Email' onChange={onChange} name= 'Email' value={form.Email}/>
                </div>

                <div className='w-1/6 mx-auto'>
                    <label className='font-bold'>WhatsApp</label>
                    <input type='text' className='bg-blue-100 p-2 block shadow my-2 rounded border-solid' placeholder='Whatsapp' onChange={onChange} name= 'Whatsapp' value={form.Whatsapp}/>
                </div>

                <div className='mx-auto w-1/6'>
                    <label className='font-bold '>Críticas e Sugestões</label>
                    <input type='text' className='bg-blue-100 p-6 block shadow my-2 rounded border-solid grid-rows-4 columns-5' placeholder='Críticas e Sugestões'onChange={onChange} name= 'CriSug' value={form.CriSug}/>
                </div>
                <div className='w-1/6 mx-auto'>
                    <label className='font-bold '>Nota:</label>
                </div>
                <div className='mx-auto w-1/6'>
                    <div className='flex'>
                        {notas.map(nota => {
                            return (<label className=' block w-6 text-center'>
                                {nota}<br/>
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                                </label>
                            )
                            })
                        }
                    </div>
                </div>
                <div className='w-1/6 mx-auto'>
                    <button onClick={save} className='text-lg hover:underline bg-blue-500 px-9 py-4 font-bold rounded-lg shadow-lg mt-2'>SALVAR</button>
                </div>
            </div>}
            {sucess && <div className='w-1/2 mx-auto text-center'>
                <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado pela contribuição!</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        Seu Cupom: <br/>
                        <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                        </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                        <span className='font-bold block mb-2'>{retorno.Promo}</span>
                        <br/>
                        <span className='italic'> Tire um print e apresente no estabelecimento</span>
                        </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa