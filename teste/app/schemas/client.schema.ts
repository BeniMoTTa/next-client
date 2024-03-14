import {z} from "zod";


export const clientSchema = z.object({
    id: z.number(),
    nome: z.string().max(127),
    email: z.string().email().max(127),
    endereco:z.string(),
    cpf:z.string().min(9)
})

export type clientData = z.infer<typeof clientSchema>