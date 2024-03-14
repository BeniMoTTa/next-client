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

export type cobrancaData = z.infer<typeof cobrancaSchema>