import React, { useState } from 'react'
import { TextArea } from './TextArea'
import { Message } from './Message';
import { StrangeMessage } from './StrangeMessage';



export interface Mensagem {
  remetente: string;
  conteudo: string;
  timestamp: string;
}

export const Whatsapp = () => {
  const [destinatario, setDestinatario] = useState('Prins');
  const [mensagens, setMensagens] = useState<Mensagem[]>([]); 
  const [valorMensagem, setValorMensagem] = useState<string>('');
  
  const enviarMensagem = () => {
    if (!valorMensagem.trim()) return; 

    const novaMensagem = {
      remetente: destinatario, 
      conteudo: valorMensagem,
      timestamp: new Date().toLocaleString(), 
    };

    setMensagens([...mensagens, novaMensagem]);
  };

  return (
    <div className='h-fit py-7 flex-col w-full p-6 bg-slate-700 flex justify-center items-center'>
          <h2 className='text-2xl font-bold mb-5 text-white'>Simulação de Whatsapp</h2>
      <div className='border-2 h-full w-full rounded-xl'>
        <div className='bg-transparent h-[600px] overflow-auto w-full p-5  rounded-t-xl rounded-b-none'>
        {mensagens.map((mensagem, index) => (
  mensagem.remetente === destinatario ? (
    <StrangeMessage key={index} mensagem={mensagem} />
  ) : (
    <Message key={index} mensagem={mensagem} />
  )
))}

        </div>
        <TextArea valorMensagem={valorMensagem} setValorMensagem={setValorMensagem} enviar={enviarMensagem} />
      </div>
        <div className='flex items-center justify-center mb-5 mt-4'>
  <label htmlFor="remetente" className='mr-2 text-white'>Remetente:</label>
  <select
    id="remetente"
    name="remetente"
    value={destinatario}
    onChange={(e) => setDestinatario(e.target.value)}
    className='bg-white border-2 p-2 rounded text-black'
  >
    <option value="Prins">Prins</option>
    <option value="Usuario">Usuario</option>
  </select>
</div>
    </div>
  )
}
