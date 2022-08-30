import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-600 p-4 mt-10'>
            <div className='text-center font-bold text-white'>
                Projeto desenvolvido por: Guilherme Teixeira / {}
                <a className='hover:underline' href='https://www.linkedin.com/in/guilherme-teixeira-448ab843/'>LinkedIn </a>/ {}
                <a className='hover:underline' href= 'https://github.com/GuiTeixeira191' >GitHub {}</a>
            </div>
            <small className='container'>
                <p className='text-center text-white mt-4'>All Rights Reserved</p>
            </small>
        </div>
    )
}

export default Footer


