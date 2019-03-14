const argv = require('./yargs/config').argv
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {

    case "crear":
        console.log("Crear por hacer");
        console.log(porHacer.crear(argv.descripcion));
        break;

    case "listar":
        let listado = porHacer.getListado();

        for (let registro of listado) {
            console.log("===========POR HACER==============".green);
            console.log(registro.descripcion);
            console.log(registro.completado);
            console.log("==================================".green);
        }

        break;

    case "actualizar":
        console.log(argv.descripcion);
        let result = porHacer.actualizar(argv.descripcion);
        console.log(`Actualizado: ${result}`);
        break;

    case "borrar":
        console.log(argv.descripcion);
        console.log(porHacer.borrar(argv.descripcion));
        break;
    default:
        console.log("Comando no reconocido");
}