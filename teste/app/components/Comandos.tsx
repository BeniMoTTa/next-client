


import { FieldValues } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { Card } from './Card'
import { CgAdd } from "react-icons/cg";
import { useState } from 'react';
import ModalClienteCreate from './modal/CreateCliente';
import { api } from '../services/api';
import { clientData } from '../schemas/client.schema';



  

export const Comandos = () => {
    const [openModal, setOpenModal] = useState(false);

    const [loading, setLoading] = useState(false);
    const toggleModal = () => {
  
      setOpenModal(!openModal);
    };
    
    const clientRegister = async (data:clientData) =>{
        console.log("teste")
      try{
          setLoading(true);
  
          await api.post("/api/cliente", data);
      } catch (error) {
          console.log(error)
      } finally{
          setLoading(false);
      }
  }
  return (
    <section className='h-auto py-12' id='comandos' >
        <div className='flex
         w-full justify-center'>
        <h3 className='text-4xl'>Comandos</h3>
        </div>
        <div className='w-full flex justify-end pr-5 '>
            <button className='border-2 rounded-full hover:scale-110 ' onClick={()=> toggleModal()}>
                <CgAdd className='text-2xl'/>
            </button>
        </div>
        <ul className='mt-8 px-5'>
            <li className='my-2'>

            </li>
            <li className='my-2'>

            </li>
            <li className='my-2'>

            </li>
            <li className='my-2'>

            </li>
           
        </ul>
        {openModal && (
          <ModalClienteCreate toggleModal={toggleModal} clientRegister={clientRegister} />
        )}
    </section >
  )
}
