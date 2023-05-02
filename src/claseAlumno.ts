import Persona  from "./interfacePersona";
import Profesor from "./claseProfesor";
const { v4: uuidv4 } = require('uuid');
export default class Alumno implements Persona{
    public nombre: string;
    public apellido: string;
    public dni: number;
    public fechNacimiento: string;
    public sexo: string;
    public celular: number;
    public email: string;
    protected materias: string[];
    public notas: number;
    protected matricula: number;
    private profesores: Profesor[];
    constructor(nombre: string, apellido: string, dni: number, fechNacimiento: string, sexo: string, celular: number, email: string, materias:string[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechNacimiento = new Date(fechNacimiento).toLocaleDateString(); //YYYY/MM/DD;
        this.sexo = sexo;
        this.celular = celular;
        this.email = email; 
        this.materias = materias;
        this.notas=0;
        this.profesores=[];
        this.matricula = uuidv4().slice(0, 5);
    }
    anotarseAmaterias(dniProfesor: number, materiaQdicta: string) {
        let encontrarProf = this.profesores.find((profesor)=> profesor.dni === dniProfesor);
        if(encontrarProf){
            let traerMateria:any = this.profesores.find((materia) => materia.materiaAdictar === materiaQdicta);
            this.materias = traerMateria;
            console.log('salio');
            return traerMateria;
        } else console.log('cashi, error');
    }
}