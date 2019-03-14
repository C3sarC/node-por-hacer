const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/db.json', data, (err) => {
        if (err)
            throw Error("Error en la funcion guardar", err);
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        return `Descripcion ${descripcion} ya existe`.red;
    } else {
        listadoPorHacer.push(porHacer);
        guardar();
        return porHacer;
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardar();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    let listadoAuxiliar = [];
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        /*for (let i = 0; i < listadoPorHacer.length; i++) {
            console.log(listadoPorHacer[i]);
            if (listadoPorHacer[i].descripcion !== descripcion)
                listadoAuxiliar.push(listadoPorHacer[i]);
        }
        listadoPorHacer = listadoAuxiliar;*/

        listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

        guardar();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}