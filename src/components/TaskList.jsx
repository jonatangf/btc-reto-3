import React, {useLayoutEffect, useState} from "react";
import Task from "./Task";
import {Button} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import {Draggable} from 'react-beautiful-dnd';

const TaskList = ({id, tasks, addTask, removeTaskList, removeTask, placeholder}) => {

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
            id: uuidv4().toString(),
            name: "Task",
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
        <div className="container-fluid" onBlur={onBlur}>
            <div className="row">
                <div className="col-sm-7">
                    {
                        editTitle ?
                            <input type="text" name="name" ref={titleRef} value={taskListData.name}
                                   onChange={handleChange}/> :
                            <h2 className="task-list-title" onClick={handleTitleClick}>{taskListData.name}</h2>
                    }
                </div>
                <div className="col-sm-5">
                    <Button variant="outlined" color="error" onClick={removeLocalTaskList}>Remove</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {
                        tasks?.map(
                            (task, index) =>
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) =>
                                        <div className="row" {...provided.draggableProps} ref={provided.innerRef}
                                             {...provided.dragHandleProps}>
                                            <Task {...task} removeTask={removeLocalTask}/>
                                        </div>
                                    }
                                </Draggable>
                        )
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    {placeholder}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Button variant="contained" onClick={addLocalTask}>Add task</Button>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
