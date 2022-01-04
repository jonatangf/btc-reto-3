import React, {useLayoutEffect, useState} from "react";
import Task from "./Task";
import {Button} from "react-bootstrap";

const TaskList = ({id, tasks, addTask, removeTaskList, removeTask}) => {

    const [taskListData, setTaskListData] = useState({"name": "Task List"});
    const [editTitle, setEditTitle] = useState(false);
    const titleRef = React.createRef();

    useLayoutEffect(() => {
        if (editTitle) {
            titleRef.current.focus();
        }
    }, [editTitle])

    const removeLocalTaskList = () => {
        removeTaskList(id);
    }

    const addLocalTask = () => {
        const newTask = {
            id: tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1,
            name: tasks.length + 1,
            description: "New task " + tasks.length + 1
        };
        addTask(id, newTask);
    };

    const removeLocalTask = (taskId) => {
        removeTask(id, taskId);
    }

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
            <div className="row">
                <div className="col-sm-8">
                    {
                        editTitle ?
                            <input type="text" name="name" ref={titleRef} value={taskListData.name}
                                   onChange={handleChange}/> :
                            <h2 className="task-list-title" onClick={handleTitleClick}>{taskListData.name}</h2>
                    }
                </div>
                <div className="col-sm-4">
                    <Button variant="outline-primary" onClick={removeLocalTaskList}>Remove</Button>
                </div>
            </div>
            {
                tasks?.map(
                    task => <div key={task.id} className="row" draggable={true}>
                        <Task {...task} removeTask={removeLocalTask}/>
                    </div>
                )
            }
            <div className="row">
                <div className="col-sm-12">
                    <Button onClick={addLocalTask}>Add task</Button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
