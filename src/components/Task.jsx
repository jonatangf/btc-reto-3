import React, {useLayoutEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";

const Task = (props) => {

    const [cardData, setCardData] = useState({'title': props.name, 'description': props.description});
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const titleRef = React.createRef();
    const descriptionRef = React.createRef();

    useLayoutEffect(() => {
        if (editTitle) {
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
        titleRef.current.focus();
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
        <div className="row">
            <Card name="card" className="col-sm-12 task">
                <Card.Body>
                    {
                        editTitle ?
                            <Card.Title>
                                <div onBlur={onBlurTitle}>
                                    <input name="title" ref={titleRef} value={cardData.title}
                                           onChange={handleChange}/>
                                </div>
                            </Card.Title> :
                            <Card.Title onClick={handleTitleClick}>
                                <div className="row">
                                    <div className="col-sm-10">{cardData.title}</div>
                                    <div className="col-sm-2">
                                        <Button variant="danger" onClick={removeMe}>X</Button>
                                    </div>
                                </div>
                            </Card.Title>
                    }
                    {
                        editDescription ?
                            <Card.Text>
                                <div onBlur={onBlurDescription}>
                                    <input name="description" ref={descriptionRef} value={cardData.description}
                                           onChange={handleChange}/>
                                </div>
                            </Card.Text> :
                            <Card.Text onClick={handleDescriptionClick}>{cardData.description}</Card.Text>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default Task;
