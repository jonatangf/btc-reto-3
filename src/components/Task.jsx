import React, {useState} from "react";
import {Card} from "react-bootstrap";

const Task = (props) => {

    const [title, setTitle] = useState(props.name);
    const [description, setDescription] = useState(props.description);
    const [editTitle, setEditTitle] = useState(false);
    const [editDescription, setEditDescription] = useState(false);

    const handleTitleClick = event => {
        console.log("Handling title click event");
        setEditTitle(true);
        setEditDescription(false);
    };

    const handleDescriptionClick = event => {
        console.log("Handling description click event");
        setEditTitle(false);
        setEditDescription(true);
    };

    const handleChange = event => {
        console.log("Handling on change event");
        if (event.target.name === "title") {
            setTitle(event.target.value);
        } else if (event.target.name === "description") {
            setDescription(event.target.value);
        }
    };

    return (
        <Card name="card" className="task">
            <Card.Body>
                {
                    editTitle ?
                        <Card.Title>
                            <input name="input" value={title} onChange={handleChange}/>
                        </Card.Title> :
                        <Card.Title name="title" onClick={handleTitleClick}>{title}</Card.Title>
                }
                {
                    editDescription ?
                        <Card.Text>
                            <input name="input" value={description} onChange={handleChange}/>
                        </Card.Text> :
                        <Card.Text name="description" onClick={handleDescriptionClick}>{description}</Card.Text>
                }
            </Card.Body>
        </Card>
    );
}

export default Task;
