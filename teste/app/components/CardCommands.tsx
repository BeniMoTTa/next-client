import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { clientData } from '../schemas/client.schema';
import { MdDeleteOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import { DeleteModal } from './modal/DeleteModal';
interface CardCommandsProps {
 nome: string;
 valor: string;
 status:string;
 descricao:string
 id:number
}

export const CardCommands = ({ nome, valor, status, descricao,id }:CardCommandsProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true); 
  };

  
  return (
    <div className='h-36 border-2 px-4 flex items-center'>
        <div className='h-4/5 flex items-center justify-center w-1/4 border-r-2 '>
            <h5 className='text-2xl'>{nome}</h5>
        </div>

        <ul className='pl-6 flex maxsm:text-[15px] justify-between w-3/4'>
            <li>{valor}</li>
            <li>{descricao}</li>
            <li>{status}</li>
        </ul>
        <div className='flex flex-col gap-2 px-1'>
          <button className='w-[15px] h-auto  flex items-center' onClick={handleDeleteClick}><MdDeleteOutline /></button>
          <button className='w-[15px] h-auto flex items-center'><FaPen /></button>
        
        </div>
        {showModal && (
        <DeleteModal id={id} nome={nome} toggleModal={() => setShowModal(false)} />
      )}
    </div>
  )
}
