import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { CardCobranca } from './CardCobranca';
import { cobrancaData } from '../schemas/cobranca.schema';
import { api } from '../services/api';

export const Cobrancas = () => {

  const [cobranca, setCobranca] = useState<cobrancaData[]>([])
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
    <div className='h-[500px] overflow-auto bg-sky-950 pt-6' id='cobranca'>
        <div className='w-full flex justify-center text-4xl text-white'><h3>Cobrancas</h3></div>
        
        <ul className='mt-8 px-5'>

            {cobranca.map((cobranca, index) =>{
                return(
                  <li className='my-2 bg-slate-400' key={index}>
            <CardCobranca 
      valor={cobranca.valor}
      data={cobranca.data_vencimento}
      status={cobranca.status}
      descricao={cobranca.descricao}
      created_at={cobranca.create_at}
      />
        </li>
        );
            })}
           
        </ul>
    </div>
  )
}
