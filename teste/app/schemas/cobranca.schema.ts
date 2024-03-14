import {z} from "zod";


export const cobrancaSchema = z.object({
    id: z.number(),
    cliente_id:z.number(),
    valor:z.string(),
    data_vencimento:z.string(),
    status:z.enum(['pendente', 'pago', 'cancelado']),
    descricao:z.string(),
    create_at:z.string(),
    update_at:z.string()    
})

export const cobrancaFullSchema = z.object({
    id: z.number(),
    cliente_id: z.number(),
    valor:z.string(),
    data_vencimento:z.string(),
    status:z.enum(['pendente', 'pago', 'cancelado']),
    descricao:z.string(),
    create_at:z.string(),
    update_at:z.string(),
    cliente:z.object({
        id: z.number(),
        nome: z.string().max(127),
        email: z.string().email().max(127),
        endereco:z.string(),
        cpf:z.string().min(9)
    })   
})





export type cobrancaData = z.infer<typeof cobrancaSchema>
export type cobrancaFullData = z.infer<typeof cobrancaFullSchema>