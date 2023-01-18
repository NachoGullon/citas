export interface Usuario{
    id ?: number,
    email: string
    nombre: string,
    password: string,
    password2: string,
    rol: string,
    
    //Propiedad opcional: ?
    tieneCoche?: boolean
}