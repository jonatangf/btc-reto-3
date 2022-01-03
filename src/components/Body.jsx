import React, {useState} from "react";
import {Button} from "react-bootstrap";
import TaskList from "./TaskList";

const Body = () => {
    const [taskList, setTaskList] = useState([])

    const addTaskList = () => {
        const tl = {
            id: taskList.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
            tasks: []
        }
        setTaskList([...taskList, tl])
    }

    const addTask = (taskListId, task) => {
        setTaskList(taskList.map(tl => tl.id === taskListId ? {...tl, tasks: [...tl.tasks, task]} : tl))
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {taskList.map(tl => <TaskList key={tl.id} {...tl} addTask={addTask}/>)}
                <div className="col-md-2">
                    <Button onClick={addTaskList}>Create new task list</Button>
                </div>
            </div>
        </div>
    );
}

export default Body;
