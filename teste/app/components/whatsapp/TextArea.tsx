import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


interface TextAreaProps {
  valorMensagem: string;
  setValorMensagem: (valor: string) => void;
  enviar: () => void;
}

export const TextArea = ({ valorMensagem, setValorMensagem, enviar}:TextAreaProps) => {
  const handleClick = () => {
    enviar(); 
    setValorMensagem(''); 
  };
  return (
    <div className='bg-blue-800 h-[150px] w-full rounded-b-xl'>
      <div className='h-5/6 flex pl-4 pt-4'>
        <textarea
          name="message"
          placeholder='Digite a sua mensagem aqui'
          id="text"
          className='resize-none p-3 border-2 rounded w-full bg-transparent text-white h-full'
          value={valorMensagem}
          onChange={(e) => setValorMensagem(e.target.value)}
        />
        <div className='w-[20%] h-full flex items-center justify-center maxsm:text-2xl md:text-4xl text-white cursor-pointer' onClick={handleClick}>
          <FaRegArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};
