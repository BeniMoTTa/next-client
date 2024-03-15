import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { api } from '../services/api';
import { clientData } from '../schemas/client.schema';
import { Empty } from './Empty';

export const Clientes = () => {

    const [isEmpty, setIsEmpty] = useState(false)
    const [client, setClient] = useState<clientData[]>([])
    useEffect(() => {
      (async () => {
         {
          try {
            const { data } = await api.get("/api/clientes");
            setClient(data)
          } catch (error) {
            console.log(error);
            setIsEmpty(true)
          }
        }
      })();
    }, []);
  return (
    <section className='h-auto py-12 '  id='clientes'>
        <div className='flex
         w-full justify-center'>
        <h3 className='text-4xl'>Clientes</h3>
        </div>
        {isEmpty ? (
      <Empty />
    ) : (
      <ul className="mt-8 px-5">
        {client.map((cliente, index) => {
          return (
            <li className="my-2" key={index}>
              <Card
                nome={cliente.nome}
                cpf={cliente.cpf}
                email={cliente.email}
                endereco={cliente.endereco}
              />
            </li>
          );
        })}
      </ul>
    )}
    </section >
  )
}
