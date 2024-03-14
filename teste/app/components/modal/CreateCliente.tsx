
import { Modal } from "./ModalGen";

import { clientData, clientSchema } from "@/app/schemas/client.schema";

import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";


interface ModalClienteProps{
  toggleModal: () => void;
  clientRegister:(data: clientData) => void;
  
}



const ModalClienteCreate = ({toggleModal, clientRegister}: ModalClienteProps) => {
  
  const {
    register,
    handleSubmit,
  } = useForm<clientData>({
    resolver: zodResolver(clientSchema),
    mode: "onChange",
  });
  

 
  const onSubmit = (data: clientData) => {
    console.log("teste")
    const formData = {
      id: data.id || 0, 
      nome: data.nome,
      email: data.email,
      endereco: data.endereco,
      cpf: data.cpf,
    };
    clientRegister(formData);
  };
  

  return (
    <Modal toggleModal={toggleModal}>
      <div className="bg-white  w-screen max-w-[530px] h-full rounded-2xl p-[25px] flex-col overflow-auto pb-[100px] relative">
        <h3 className="text-grey1 font-lexend text-[18px] mb-[30px]">
          Criar cliente
        </h3>
        <form className="p-[5px]" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="text-[14px] font-medium mb-[24px]">
            Informações do Cliente
          </h4>
          <div className="flex flex-col">
          <Input
            id="nome"
            label="Nome"
            placeholder="Digitar nome"
            type="text"
            register={register("nome")}
          />
          <Input
            id="cpf"
            label="CPF"
            placeholder="Digitar cpf"
            type="text"
            register={register("cpf")}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Digitar email"
            type="email"
            register={register("email")}
          />
          <Input
            id="endereco"
            label="Endereco"
            placeholder="Digitar Endereco"
            type="text"
            register={register("endereco")}
          />

          </div>
    
        <button type="submit">Enviar</button>
        </form>
        <button
          className="absolute top-[22px] right-[22px] text-whiteFixed "
          onClick={toggleModal}
        >x
          </button>
      </div>
    </Modal>
  );
};

export default ModalClienteCreate;

