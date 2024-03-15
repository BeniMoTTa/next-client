import React, { useState } from 'react'
import { TextArea } from './TextArea'
import { Message } from './Message';



export interface Mensagem {
  remetente: string;
  conteudo: string;
  timestamp: string;
}

export const Whatsapp = () => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]); 
  const [valorMensagem, setValorMensagem] = useState<string>('');
  
  const enviarMensagem = () => {
    if (!valorMensagem.trim()) return; 

    const novaMensagem = {
      remetente: 'Prins', 
      conteudo: valorMensagem,
      timestamp: new Date().toLocaleString(), 
    };

    setMensagens([...mensagens, novaMensagem]);
  };

  return (
    <div className='h-[800px] w-full p-6 bg-slate-700 flex justify-center items-center'>
      <div className='border-2 h-full w-full rounded-xl'>
        <div className='bg-black w-full p-5 h-[75%] rounded-t-xl rounded-b-none'>
      {mensagens.map((mensagem, index) => (
        <Message key={index} mensagem={mensagem} />
      ))}

        </div>
        <TextArea valorMensagem={valorMensagem} setValorMensagem={setValorMensagem} enviar={enviarMensagem} />
      </div>
    </div>
  )
}
