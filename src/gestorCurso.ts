import Alumno from "./claseAlumno";
import Curso from "./curso";
import Profesor from "./claseProfesor";
const fs = require("fs");
const readlineSync = require("readline-sync");

export default class GestorLegajo {
    constructor(){
        if (fs.existsSync("./alumnos.json")) {
            //verifica si existe
            console.log("Archivo existente");
        
        } else {
            //sino lo crea
            fs.writeFileSync("./alumnos.json", "utf-8");
        }
        if (fs.existsSync("./profesores.json")) {
            console.log("Archivo existente");
        } else {
            fs.writeFileSync("./profesores.json", "utf-8");
        } 
    }
    read() { return fs.readlineSync("./alumnos.json");}
    data() { return JSON.parse(fs.readlineSync("./alumnos.json"));}
    read2() { return fs.readlineSync("./profesores.json");}
    data2() { return JSON.parse(fs.readlineSync("./profesores.json"));}
    //ALUMNOS------------------------------------------------------------------------------------
    agregarAlumno(){
        const nombre = readlineSync.question('Ingresar nombre del estudiante: ').toLowerCase();
        const apellido = readlineSync.question('Ingresar apellido del estudiante: ').toLowerCase();
        const dni = Number(readlineSync.question('Ingresar dni del estudiante: '));
        const fechNacimiento = readlineSync.question('Ingresar fecha de nacimiento del estudiante(formato YYYY/MM/DD): ');
        const celular = Number(readlineSync.question('Ingresar celular del estudiante: '));
        const email = readlineSync.question('Ingresar email del estudiante: ').toLowerCase();
        const sexo = readlineSync.question('Ingresar sexo del estudiante: ').toLowerCase();
        const orientacion = Object(anotarseAmaterias);//BERRR
        function anotarseAmaterias() {
            
        }

        let nuevoAlumno = new Alumno(nombre, apellido, dni, fechNacimiento, sexo, celular, email, orientacion)
        let alumnos = [...this.data(), nuevoAlumno]
        fs.writeFileSync('./alumnos.json', JSON.stringify(alumnos, null, 2));
    }
    eliminarAlumnoXDni(){
        const dni = Number(readlineSync.question('escriba el D.N.I del alumno que desea eliminar:'))
        const alumnos = this.data();
        let buscarDni = alumnos.filter((alumno: Alumno) => alumno.dni === dni);
        if(buscarDni.length === 1){
            const i = alumnos.indexOf(buscarDni[0]);
            alumnos.splice(i, 1);
            console.log('El alumno con DNI:', dni, 'ha sido eliminado con exito.');
            fs.writeFileSync('./alumnos.json', JSON.stringify(alumnos, null, 2));
        } else {
            console.log('No se encontro el alumno este D.N.I: ', dni)
        }
    }
    buscarNombreAlumno(){
        const nombre = readlineSync.question('Ingresar nombre del estudiante para recopilar sus datos: ').toLowerCase();
        let buscarNombre = this.data().find((alumno: { nombre: string; }) => alumno.nombre === nombre);
        if(buscarNombre){
            console.log(`Alumno encontrado: ${buscarNombre}`);
        } else {
            console.log(`No se encontro el alumno con el nombre ${buscarNombre}`);
        }
        this.menuPrincipal
    }
    buscarApellidoAlumno(){
        const apellido = readlineSync.question('Ingresar apellido del estudiante: ').toLowerCase();
        let buscarApellido = this.data().find((alumno: { apellido: string; }) => alumno.apellido === apellido);
        if(buscarApellido){ 
            console.log('Alumno encontrado: ',buscarApellido);
            return buscarApellido
        } else console.log('No se encontro el alumno con el apellido ', buscarApellido);
        this.menuPrincipal;
    }
    listarAlumnos(this:any){

        console.log(...this.data());
        this.menuPrincipal;
    }
    //PROFESORES --------------------------------------------------------------------
    agregarProfesor(){
        const nombre = readlineSync.question('Ingresar nombre del profesor/a: ').toLowerCase();
        const apellido = readlineSync.question('Ingresar apellido del profesor/a: ').toLowerCase();
        const dni = Number(readlineSync.question('Ingresar dni del profesor/a: '));
        const fechNacimiento = readlineSync.question('Ingresar fecha de nacimiento del profesor/a(formato YYYY/MM/DD): ');
        const celular = Number(readlineSync.question('Ingresar celular del profesor/a: '));
        const email = readlineSync.question('Ingresar email del profesor/a: ').toLowerCase();
        const sexo = readlineSync.question('Ingresar sexo del profesor/a: ').toLowerCase();
        const materiaQdictar = readlineSync.question('Ingresar la materia que dicta: ').toLowerCase();
        let nuevoProfesor = new Profesor(nombre, apellido, dni, fechNacimiento, sexo, celular, email, materiaQdictar);
        let profesores = [...this.data2(), nuevoProfesor];
        fs.writeFileSync('./profesores.json', JSON.stringify(profesores, null, 2));
    }
    buscarApellidoProfesor(){
        const apellido = readlineSync.question('Ingresar el apellido del profesor:').toLowerCase();
        let buscarApellido = this.data2().find((profesor: { apellido: string; }) => profesor.apellido === apellido);
        if(buscarApellido) {
            console.log('apellido del profesor encontrado:',buscarApellido);
            return buscarApellido
        } else console.log('No se encontro profesor con el apellido ', buscarApellido);
        this.menuPrincipal();
    } 
    eliminarProfesorXDni(){
        const dni = Number(readlineSync.question('escriba el D.N.I del profesor que desea eliminar:'))
        const profesor = this.data2();
        let buscarDni = profesor.filter((profesor: Profesor) => profesor.dni === dni);
        if(buscarDni.length === 1){
            const i = profesor.indexOf(buscarDni[0]);
            profesor.splice(i, 1);
            console.log('El profesor con DNI:', dni, 'ha sido eliminado con exito.');
            fs.writeFileSync('./profesores.json', JSON.stringify(profesor, null, 2));
        } else {
            console.log('no se ha encontrado este D.N.I:', dni)
        }
    }
    listarProfesor(this: any) {
        console.log(...this.data2());
        this.menuPrincipal;
    }
    menuPrincipal(this: any) {
        console.log('Bienvendido al sistema de gestion de legajos');
        while(true){
            console.log('');
            console.log('¿Qué acción desea realizar?');
            console.log('1. Agregar un alumno');
            console.log('2. Agregar un profesor');
            console.log('3. Listar alumnos');
            console.log('4. Listar profesores');
            console.log('5. Eliminar un alumno');
            console.log('6. Eliminar un profesor');
            console.log('7. Buscar alumno con el apellido');
            console.log('8. Buscar profesor con el apellido');
            console.log('9. Agregar materia');
            console.log('10. Salir');
            const opcion = readlineSync.questionInt('Ingrese el numero de la accion');
            switch (opcion) {
                case 1: 
                    this.agregarAlumno();
                    break;
                case 2: 
                    this.agregarProfesor();
                    break;
                case 3:
                    this.listarAlumnos();
                    break;
                case 4:
                    this.listarProfesor();
                    break;
                case 5:
                    this.eliminarAlumnoXDni();
                case 6: 
                    this.eliminarProfesorXDni();
                    break;
                case 7: 
                   this.buscarApellidoAlumno(); 
                   break;
                case 8:
                    this.buscarApellidoProfesor();
                    break;
                case 9:
                    this.agregarMateria();
                    break;
                case 10:
                    console.log('Saliendo del programa...');
                    return;
                default:
                    console.log('Opción inválida');
                    break;
            }
        }
    }
}