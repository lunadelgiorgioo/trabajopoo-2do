import Alumno from "./claseAlumno";
import Persona from"./interfacePersona";
export default class Profesor implements Persona {
    nombre: string;
    apellido: string;
    dni: number;
    fechNacimiento: string;
    sexo: string;
    celular: number;
    email: string;
    materiaAdictar: string;
    protected alumnos : Alumno[];
    private contrato: boolean;
    constructor(nombre: string, apellido: string, dni: number, fechNacimiento: string, sexo: string, celular: number, email: string, materiaAdictar: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechNacimiento = new Date(fechNacimiento).toLocaleDateString(); //YYYY/MM/DD;
        this.sexo = sexo;
        this.celular = celular;
        this.email = email; 
        this.materiaAdictar = materiaAdictar;
        this.alumnos = [];
        this.contrato = true;
    }
    asignarNota(dniAlumno: number, nota: number){
        if(this.contrato) {
            const alumnoEncontrado = this.alumnos.find((alumno) => alumno.dni === dniAlumno);
            if(alumnoEncontrado){
                alumnoEncontrado.notas = nota;
                return console.log(nota, 'asignada a ', alumnoEncontrado)
            } else {
                console.log('Alumno con ', dniAlumno, 'no se encuentra registrado');
            }
        } else { console.log('contrato de profesor no esta vigente')
        }
    }
    matricularAlumnos(alumno: Alumno){
        if(alumno){
            this.alumnos.push(alumno);
        } return `alumno matriculado a la materia: ` + this.materiaAdictar;
    }
}