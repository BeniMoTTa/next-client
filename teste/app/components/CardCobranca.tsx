import React, { useEffect, useState } from 'react'


interface CardProps {
 valor: string;
 status:string;
 data:string;
 descricao:string
 created_at:string
}

export const CardCobranca = ({ valor, status, data, descricao, created_at }:CardProps) => {

  return (
    <div className='h-24 border-2 px-4 flex items-center'>
        <div className='h-4/5 flex items-center justify-center w-1/4 border-r-2 '>
            <h5 className='text-2xl'>{valor}</h5>
        </div>

        <ul className='pl-6 flex justify-between w-3/4'>
            <li>{status}</li>
            <li>{data}</li>
            <li>{descricao}</li>
            <li>{created_at}</li>
        </ul>
    </div>
  )
}
