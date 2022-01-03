import React, {useState} from "react";
import Task from "./Task";
import {Button} from "react-bootstrap";

const TaskList = ({id, tasks, addTask}) => {

    const [taskListData, setTaskListData] = useState({"name": "Task List"});
    const [editTitle, setEditTitle] = useState(false);

    const addLocalTask = () => {
        const newTask = {
            id: tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
            name: tasks.length + 1,
            description: "New task " + tasks.length + 1
        };
        addTask(id, newTask);
    };

    const handleChange = event => {
        setTaskListData({...taskListData, [event.target.name]: event.target.value});
    };

    const handleTitleClick = event => {
        setEditTitle(true);
    }

    const onBlur = event => {
        setEditTitle(false);
    }

    return (
        <div className="task-list col-sm-2" onBlur={onBlur}>
            {
                editTitle ?
                    <input type="text" name="name" value={taskListData.name} onChange={handleChange}/> :
                    <h2 className="task-list-title" onClick={handleTitleClick}>{taskListData.name}</h2>
            }
            {
                tasks?.map(task => <div key={task.id} className="row" draggable={true}><Task {...task}/></div>)
            }
            <div className="row">
                <Button className="col-sm-12" onClick={addLocalTask}>Add task</Button>
            </div>
        </div>
    );
};

export default TaskList;
