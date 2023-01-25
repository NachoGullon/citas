export interface Doctor{
    id ?: number,
    nombre: string,
    apellidos: string,
    especialidad: string,
    turno: string,
    hospital: string,
    //Propiedad opcional: ?, != no es igual , || Or , == es igual., & junta los tipos 
    tieneCoche?: boolean
}