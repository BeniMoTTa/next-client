


import { FieldValues } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { Card } from './Card'
import { CgAdd } from "react-icons/cg";
import { useEffect, useState } from 'react';
import ModalClienteCreate from './modal/CreateCliente';
import { api } from '../services/api';
import { clientData } from '../schemas/client.schema';
import { cobrancaFullData } from '../schemas/cobranca.schema';
import { CardCommands } from './CardCommands';
import { DeleteModal } from './modal/DeleteModal';



  

export const Comandos = () => {
    const [openModal, setOpenModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
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

  const [cobranca, setCobranca] = useState<cobrancaFullData[]>([])
  useEffect(() => {
    (async () => {
     
       {
        try {
          
          const { data } = await api.get("/api/cobrancas");
          setCobranca(data)

        } catch (error) {
          console.log(error);
          
        }
      }
    })();
  }, []);


  return (
    <section className='h-auto py-5' id='comandos' >
        <div className='flex
         w-full justify-center'>
        <h3 className='text-4xl'>Comandos</h3>
        </div>
        <div className='w-full flex justify-end pr-5 '>
            <button className='border-2 rounded-full hover:scale-110 ' onClick={()=> toggleModal()}>
                <CgAdd className='text-2xl'/>
            </button>
        </div>
        
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-5 flex-wrap'>
        {cobranca.map((cobranca, index) =>{
                return(
            <li className='my-2' key={index}>
            <CardCommands 
                nome={cobranca.cliente.nome}
                valor={cobranca.valor}
                status={cobranca.status}
                descricao={cobranca.descricao}
                id={cobranca.id}
                />
        </li>
        );
    

           
    })}       
        </ul>

        {openModal && (
          <ModalClienteCreate toggleModal={toggleModal} clientRegister={clientRegister} />
        )}
    </section >
  )
}
