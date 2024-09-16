// Por cada archivo modelo que se crea en la carpeta controllers se crea uno donde
// se deberán programar las acciones que puede ejecutar el modelo.

let tasks = [
    {
        id: 1, 
        title: "Tarea_uno",
        description: "Descripción de la tarea AÑA"
    },
    {
        id: 2, 
        title: "Tarea_dos",
        description: "Descripción de la tarea AÑA"
    },
    {
        id: 3, 
        title: "Tarea_tres",
        description: "Descripción de la tarea AÑA"
    },
];


function getAllTasks() {
    return tasks;
}

function createTask(title, description){
    const newTask = { 
        id: tasks.length + 1,
        title,
        description,
    };
    tasks.push(newTask);
    return newTask;
}

function deleteTask(id){

    /*findIndex es una función callback, quiere decir
      que recibe como argumento/parámetro otra función.
      Dicha funcion se le aplica a todos los elementos 
      de una arreglo y retorna true/false */

    let indice = tasks.findIndex(task => task.id == id );
    if (indice !== -1){
        tasks.splice(indice, 1);
    }
    return `Se ha eliminado del arreglo el índice: ${indice+1}`;
}

function updateTask(id, title, description) {
    let taskIndex = tasks.findIndex(task => task.id == id);

    if (taskIndex !== -1) {
        // Accede al objeto de la tarea en base al índice
        let taskMod = tasks[taskIndex];

        // Actualiza el título si no es null
        if (title !== null) {
            taskMod.title = title;
        }

        // Actualiza la descripción si no es null
        if (description !== null) {
            taskMod.description = description;
        }
        tasks[taskIndex] = taskMod;
        return `Se ha modificado de manera exitosa la tarea: ${taskIndex + 1}`;
    } else {
        return 'Tarea no encontrada';
    }
}



module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
}