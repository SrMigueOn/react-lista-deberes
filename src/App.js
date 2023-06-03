import React, {useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const HandleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const HandleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const HandleDeleteTask = () => {
        if (selectedTask !== null) {
            const updatedTasks = tasks.filter((_, index) => index !== selectedTask);
            setTasks(updatedTasks);
            setSelectedTask(null);
        }
    };

    const HandleTaskSelected = (index) => {
        setSelectedTask(index);
    }

    return (
        <div>
          <div className='contenedor-1'>
            <h1>To-Do list</h1>
            <h2>Drag & Drops</h2>
          </div>
          <div className="contenedor-2">
            <input
              type="text"
              value={task}
              onChange={HandleTaskChange}
              className="Campo-texto"
            />
          </div>
          <div className="contenedor-3">
            <button onClick={HandleAddTask} className="agregar-button">Agregar</button>
            <button onClick={HandleDeleteTask} className="eliminar-button">Eliminar</button>
          </div>
          <div className="contenedor-4">
            <ul className="lista">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  onClick={() => HandleTaskSelected(index)}
                  className={
                    selectedTask === index
                    ? 'tarea-seleccionada lista-item'
                    : 'lista-item'
                  }
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );      
}

export default TodoList;