import React, {useState} from "react";
import {Card} from "react-bootstrap";

const Task = (props) => {

    const [cardData, setCardData] = useState({'title': props.name, 'description': props.description});
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
        setCardData({...cardData, [event.target.name]: event.target.value});
    };

    const onBlurTitle = event => {
        setEditTitle(false);
    };

    const onBlurDescription = event => {
        setEditDescription(false);
    };

    return (
        <Card name="card" className="task">
            <Card.Body>
                {
                    editTitle ?
                        <Card.Title>
                            <div onBlur={onBlurTitle}>
                                <input name="title" value={cardData.title} onChange={handleChange}/>
                            </div>
                        </Card.Title> :
                        <Card.Title onClick={handleTitleClick}>{cardData.title}</Card.Title>
                }
                {
                    editDescription ?
                        <Card.Text>
                            <div onBlur={onBlurDescription}>
                                <input name="description" value={cardData.description} onChange={handleChange}/>
                            </div>
                        </Card.Text> :
                        <Card.Text onClick={handleDescriptionClick}>{cardData.description}</Card.Text>
                }
            </Card.Body>
        </Card>
    );
}

export default Task;
