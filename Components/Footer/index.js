import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-600 p-4 mt-10'>
            <div className='flex justify-center p-8'>
                <a href="https://www.linkedin.com/">
                <img className='m-1'src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"/>
                </a>

                <a href="https://www.youtube.com/">
                <img className='m-1' src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
                </a>

                <a href="https://instagram.com/">
                <img className='m-1' src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
                </a>
            </div>

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


