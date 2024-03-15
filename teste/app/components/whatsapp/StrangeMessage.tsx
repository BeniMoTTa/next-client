import React from 'react'
import { MessageProps } from './Message'


export const StrangeMessage = ({mensagem}:MessageProps) => {
  return (
    <div className={`w-5/6 mt-2 h-auto max-w-[800px] px-5 rounded-xl py-2 `} key={mensagem.remetente}>
      <div className='w-full flex text-blue-500'>{mensagem.remetente}</div>
      <div className='mt-2 text-[#fff]'>
        {mensagem.conteudo}
      </div>
      <div className='text-gray-500 text-right text-xs'>{mensagem.timestamp}</div>
    </div>
  )
}
