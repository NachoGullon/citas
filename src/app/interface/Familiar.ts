export interface Familiar{
    id?: number,
    nombre: string,
    paciente: string,
    hospital: string,
    email: string
    //Propiedad opcional: ?
    tieneCoche?: boolean
}