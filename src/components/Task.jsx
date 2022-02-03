import React, {useLayoutEffect, useState} from "react";
import {Button, Card, CardContent, CardHeader} from "@mui/material";

const Task = (props) => {

    const [cardData, setCardData] = useState({'title': props.name, 'description': props.description});
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const titleRef = React.createRef();
    const descriptionRef = React.createRef();

    useLayoutEffect(() => {
        if (editTitle && titleRef.current) {
            titleRef.current.focus();
        }

        if (editDescription) {
            descriptionRef.current.focus();
        }
    }, [editTitle, editDescription]);

    const handleTitleClick = event => {
        console.log("Handling title click event");
        setEditTitle(true);
        setEditDescription(false);
        if (titleRef.current) {
            titleRef.current.focus();
        }
    };

    const handleDescriptionClick = event => {
        console.log("Handling description click event");
        setEditTitle(false);
        setEditDescription(true);
    };

    const handleChange = event => {
        console.log("Handling on change event");
        setCardData({...cardData, [event.target.name]: event.target.value});
    };

    const onBlurTitle = event => {
        setEditTitle(false);
    };

    const onBlurDescription = event => {
        setEditDescription(false);
    };

    const removeMe = () => {
        props.removeTask(props.id);
    };

    return (
        <div className="container-fluid">
            <Card className="task">
                {
                    editTitle ?
                        <div onBlur={onBlurTitle}>
                            <input name="title" ref={titleRef} value={cardData.title}
                                   onChange={handleChange}/>
                        </div>
                        :
                        <div className="row">
                            <div className="col-sm-8">
                                <CardHeader title={cardData.title} onClick={handleTitleClick}/>
                            </div>
                            <div className="col-sm-4 remove-task-button">
                                <Button variant="danger outlined" onClick={removeMe}>X</Button>
                            </div>
                        </div>
                }
                <CardContent>
                    {
                        editDescription ?
                            <div onBlur={onBlurDescription}>
                                <input name="description" ref={descriptionRef} value={cardData.description}
                                       onChange={handleChange}/>
                            </div>
                            :
                            <div onClick={handleDescriptionClick}>{cardData.description}</div>
                    }
                </CardContent>
            </Card>
        </div>
    );
}

export default Task;
