"use client";

import { useState } from "react";
import { Clientes } from "./components/Clientes";
import { Cobrancas } from "./components/Cobrancas";
import { Comandos } from "./components/Comandos";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useAuth } from "./hooks/useAuth";
import ModalClienteCreate from "./components/modal/CreateCliente";
import { FieldValues } from "react-hook-form";
import { api } from "./services/api";
import { AuthProvider } from "./context/AuthContext";



export default function Home() {
  const [loading, setLoading] = useState(false);
  
  return (
<>
<AuthProvider>
    <Navbar/>
    <main className="">
      <div className="flex justify-center items-center border-t-2 border-b-2 bg-black w-full h-auto min-h-[400px]"> <h2 className="text-8xl text-red-500">TESTANDO</h2>
      </div>
    </main>
    <Clientes/>
    <Cobrancas/>
    <Comandos/>
    <Footer/>
    </AuthProvider>



</>
  );
}
