const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completad o pendiente la tarea, Valor de true o false'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hace', {
        descripcion
    })
    .command('borrar', 'Borra un elemento por hace', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}