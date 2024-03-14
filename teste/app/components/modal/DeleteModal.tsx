import { api } from '@/app/services/api';
import React from 'react'

interface DeleteModalProps {
    id:number,
    nome:string
    toggleModal: () => void;
   }

export const DeleteModal = ({id, nome, toggleModal}:DeleteModalProps) => {
    const deleteCommand = async (id:number) =>{

      try{
          await api.delete(`/api/cobrancas/${id}`);
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center  justify-center overflow-hidden">
    <div className="bg-white rounded-4 rounded-xl p-4 w-full max-w-sm flex flex-col gap-4">
      <h2 className="text-black text-[20px] font-semibold">Tem certeza que quer excluir a cobrança de {nome}?</h2>
      <p className="text-black text-[14px]">
        Não é possivel reverter essa ação!
      </p>
      <div className="w-full flex gap-4 justify-end">
        <button onClick={toggleModal}>
          Cancelar
          </button>
        <button onClick={()=> deleteCommand(id)}>
          Sim, tenho!
          </button>
      </div>
    </div>
  </div>
  )
}

