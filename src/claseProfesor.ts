import Persona from"./interfacePersona";
export default class Profesor implements Persona {
    nombre: string;
    apellido: string;
    dni: number;
    fechNacimiento: string;
    sexo: string;
    celular: number;
    email: string;
    materiaAdictar: string[];
    alumnos: {};
    private contrato: boolean;
    constructor(nombre: string, apellido: string, dni: number, fechNacimiento: Date, sexo: string, celular: number, email: string, materiaAdictar: string[], alumnos: {}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechNacimiento = new Date(fechNacimiento).toLocaleDateString(); //YYYY/MM/DD;
        this.sexo = sexo;
        this.celular = celular;
        this.email = email; 
        this.materiaAdictar = materiaAdictar;
        this.contrato = true;
        this.alumnos = alumnos;
    }
}