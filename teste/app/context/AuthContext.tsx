"use client";


import { ReactNode, createContext, useState } from "react";
import { clientData } from "../schemas/client.schema";
import { api } from "../services/api";
import { FieldValues } from "react-hook-form";


interface AuthContextValues {
    clientRegister:(data: FieldValues) => void;
    deleteCliente:(id:number) => void;
    toggleModal: () => void;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthContext = createContext<AuthContextValues>(
    {} as AuthContextValues
  );


  export const AuthProvider = ({children}: AuthProviderProps) =>{
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
      console.log("teste")
      setOpenModal(!openModal);
    };


    const clientRegister = async (data:FieldValues) =>{
        try{
            setLoading(true);

            await api.post("/api/cliente", data);
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false);
        }
    }
    const createAd = async (data: object) => {
      try {
        await api.post("/api/cliente", data);
            
        // toggleModal();
      } catch (err) {
        console.log(err);
      }
    };
  

      const deleteCliente = async (id:number) =>{
        try{
          await api.delete(`/api/cliente/${id}`)
        } catch (error){
          console.error(error);
        }
      }





    return (
        <AuthContext.Provider
          value={{
            clientRegister,
            deleteCliente,
            toggleModal
          }}
        >
          {children}
        </AuthContext.Provider>
      );
    };

