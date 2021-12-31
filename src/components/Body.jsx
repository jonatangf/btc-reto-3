import React, {useState} from "react";
import {Button} from "react-bootstrap";
import TaskList from "./TaskList";

const Body = () => {
    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        const tl = {
            id: taskList.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
        }
        setTaskList([...taskList, tl])
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {taskList.map(tl => <TaskList key={tl.id}/>)}
                <div className="col-md-2">
                    <Button onClick={addTask}>Create new task list</Button>
                </div>
            </div>
        </div>
    );
}

export default Body;
