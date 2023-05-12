import Persona  from "./interfacePersona";
const { v4: uuidv4 } = require('uuid');
export default class Alumno implements Persona{
    public nombre: string;
    public apellido: string;
    public dni: number;
    public fechNacimiento: string;
    public sexo: string;
    public celular: number;
    public email: string;
    protected materias: {};
    protected matricula: number;
    constructor(nombre: string, apellido: string, dni: number, fechNacimiento: Date, sexo: string, celular: number, email: string, materias:{}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechNacimiento = new Date(fechNacimiento).toLocaleDateString(); //YYYY/MM/DD;
        this.sexo = sexo;
        this.celular = celular;
        this.email = email; 
        this.materias = materias;
        this.matricula = uuidv4().slice(0, 5);
    }
}