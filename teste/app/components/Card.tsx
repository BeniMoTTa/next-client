import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { clientData } from '../schemas/client.schema';


interface CardProps {
 nome: string;
 cpf:string;
 email:string;
 endereco:string
}

export const Card = ({ nome, cpf, email, endereco }:CardProps) => {

  return (
    <div className='h-24 border-2 px-4 flex items-center'>
        <div className='h-4/5 flex items-center justify-center w-1/4 border-r-2 '>
            <h5 className='text-2xl'>{nome}</h5>
        </div>

        <ul className='pl-6 flex justify-between w-3/4'>
            <li>{cpf}</li>
            <li>{email}</li>
            <li>{endereco}</li>
        </ul>
    </div>
  )
}
