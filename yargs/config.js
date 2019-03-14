const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea"
}

const completado = {
    alias: 'c',
    defauld: true,
    desc: "Estatus de la tarea"
}

const argv = require('yargs')
    .command('crear', 'Crear por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}