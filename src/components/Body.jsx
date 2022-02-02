import React, {useState} from "react";
import {Button} from "@mui/material";
import TaskList from "./TaskList";
import {v4 as uuidv4} from 'uuid';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

const Body = () => {
    const [taskList, setTaskList] = useState([])
    const [taskNumber, setTaskNumber] = useState(1)

    const addTaskList = () => {
        const tl = {
            id: uuidv4().toString(),
            tasks: []
        }
        setTaskList([...taskList, tl])
    }

    const removeTaskList = id => {
        setTaskList(taskList.filter(tl => tl.id !== id))
    }

    const addTask = (taskListId, task) => {
        setTaskList(taskList.map(tl => tl.id === taskListId ? {
            ...tl,
            tasks: [...tl.tasks, {...task, name: `Task ${taskNumber}`}]
        } : tl))
        setTaskNumber(taskNumber + 1);
    }

    const removeTask = (taskListId, taskId) => {
        setTaskList(taskList.map(tl => tl.id === taskListId ? {
            ...tl,
            tasks: tl.tasks.filter(task => task.id !== taskId)
        } : tl))
    }

    const reorderTasks = (taskList, startIndex, endIndex) => {
        const result = Array.from(taskList);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const handleOnDragEnd = (result) => {
        const {destination, source} = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        } else if (destination.droppableId === source.droppableId) {
            let filteredTaskList = taskList.filter(tl => tl.id === destination.droppableId)[0];
            let tasks = filteredTaskList.tasks;
            filteredTaskList.tasks = reorderTasks(tasks, source.index, destination.index)
        } else {
            let sourceTaskList = taskList.filter(tl => tl.id === source.droppableId)[0];
            let destinationTaskList = taskList.filter(tl => tl.id === destination.droppableId)[0];
            let sourceTasks = sourceTaskList.tasks;
            let destinationTasks = destinationTaskList.tasks;
            let [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);
            sourceTaskList.tasks = sourceTasks;
            destinationTaskList.tasks = destinationTasks;
        }
    }

    return (
        <div className="container-fluid">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className="infinite-scroll">
                    {
                        taskList.map(
                            tl => (
                                <Droppable key={tl.id} droppableId={tl.id} >
                                    {(provided) =>
                                        <div {...provided.droppableProps} ref={provided.innerRef} className="col-sm-2">
                                            <TaskList
                                                key={tl.id} {...tl}
                                                addTask={addTask}
                                                removeTaskList={removeTaskList}
                                                removeTask={removeTask}
                                                placeholder={provided.placeholder}/>
                                        </div>
                                    }
                                </Droppable>
                            )
                        )
                    }
                    <div className="col-md-2">
                        <Button onClick={addTaskList} className="col-sm-12">Create new task list</Button>
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}

export default Body;
