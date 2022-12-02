export interface Doctor{
    id ?: number,
    nombre: string,
    apellidos: string,
    especialidad: string,
    turno: string,
    hospital: string,
    //Propiedad opcional: ?
    tieneCoche?: boolean
}