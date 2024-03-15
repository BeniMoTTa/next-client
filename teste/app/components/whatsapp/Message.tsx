import React from 'react'
import { Mensagem } from './Whatsapp'


export interface MessageProps{
mensagem:Mensagem
}

export const Message = ({ mensagem }:MessageProps) => {
  return (
    <div className={`w-5/6 mt-2 h-auto max-w-[800px] px-5 rounded-xl py-2 bg-[#2e2e2e]`}>
      <div className='w-full flex text-blue-500 font-bold'>{mensagem.remetente}</div>
        <div className='mt-2 text-[#fff]'>
          {mensagem.conteudo}
        </div>
        <div className='text-gray-500 text-right text-xs'>{mensagem.timestamp}</div>
    </div>
  )
}
