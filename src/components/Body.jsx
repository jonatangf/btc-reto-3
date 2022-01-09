import React, {useState} from "react";
import {Button} from "react-bootstrap";
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
            tasks: [...tl.tasks, {...task, draggableId: taskNumber}]
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
        const {destination, source, draggableId} = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        // TODO: order task in new position and/or task list
    }

    return (
        <div className="container-fluid">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className="row">
                    {
                        taskList.map(
                            tl => (
                                <Droppable key={tl.id} droppableId={tl.id}>
                                    {(provided, snapshot) =>
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
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
                        <Button onClick={addTaskList}>Create new task list</Button>
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}

export default Body;
