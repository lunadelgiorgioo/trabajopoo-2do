import Alumno from "./claseAlumno";
import Profesor from "./claseProfesor";

export default class Curso {
    public nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];
    constructor(nombre: string){
        this.nombre = nombre,
        this.alumnos = [];
        this.profesores = [];
    }
    infoAlumnos(){
        return this.alumnos
    }
    infoProfesor(){
        return this.profesores
    }
}