// Referenciar
const express = require('express'); // Busca en node_modules el código de express
const router = express.Router();
const taskController = require('../controllers/taskController');


router.get('/', (req ,res) => {
    const tasks = taskController.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/', (req, res)=>{
    const { title, description } = req.body;
    /*Es lo mismo que:
    const title = req.body.title
    const description = req.body.description*/

    const newTask = taskController.createTask(title, description);
    res.status(200).json(newTask);
});

router.delete('/', (req, res)=>{
    //Definir el elemento que le será enviado
    const id = req.body;
    const task = taskController.deleteTask(id);
    res.status(200).json({message: task});
});

router.put('/', (req, res) => {
    const { id, title, description } = req.body;
    const task = taskController.updateTask(id, title, description);
    res.status(200).json({message: task});
})


module.exports = router;