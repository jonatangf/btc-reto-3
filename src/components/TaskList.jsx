import React from "react";
import Task from "./Task";
import {Button} from "react-bootstrap";

const TaskList = () => {

    const [tasks, setTasks] = React.useState([]);

    const addTask = () => {
        const newTask = {
            id: tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
            name: tasks.length + 1,
            description: "New task " + tasks.length + 1
        };
        setTasks([...tasks, newTask]);
        console.log(tasks);
    };

    return (
        <div className="task-list col-sm-2">
            <h2>Task List</h2>
            {
                tasks.map(
                    task => <div className="row"><Task key={task.id} {...task}/></div>
                )
            }
            <div className="row">
                <Button className="col-sm-12" onClick={addTask}>Add task</Button>
            </div>
        </div>
    );
};

export default TaskList;
