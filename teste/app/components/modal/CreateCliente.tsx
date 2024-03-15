import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { Modal } from "./ModalGen";
import { clientData, clientSchema } from "@/app/schemas/client.schema";


interface ModalClienteProps{
  toggleModal: () => void;
  clientRegister:(data: clientData) => void;
  
}



const ModalClienteCreate = ({toggleModal, clientRegister}: ModalClienteProps) => {
  
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(clientSchema),
    mode: "onChange",
  });
  

 
  const onSubmit = () => {
    console.log("teste")
   
  };
  

  return (
    <Modal toggleModal={toggleModal}>
      <div className="bg-white w-screen max-w-[530px] h-fit rounded-2xl px-7 flex-col py-7 relative">
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
          <div className="flex w-full justify-center mt-4">
        <button className="w-32 flex justify-center rounded items-center text-xl font-semibold shadow-black shadow-md text-white bg-red-400  h-12">Enviar</button>
        </div>
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


