import React from 'react'
import { Card } from './Card'

export const Cobrancas = () => {
  return (
    <div className='h-[600px] bg-sky-950 pt-6' id='cobranca'>
        <div className='w-full flex justify-center text-4xl text-white'><h3>Cobrancas</h3></div>
        
        <ul className='mt-8 px-5'>
            <li className='my-2 bg-slate-400'>
                <Card/>
            </li>
            <li className='my-2 bg-slate-400'>
                <Card/>
            </li>
            <li className='my-2 bg-slate-400'>
                <Card/>
            </li>
            <li className='my-2 bg-slate-400'>
                <Card/>
            </li>
        </ul>
    </div>
  )
}
