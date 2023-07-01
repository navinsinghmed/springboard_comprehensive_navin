import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './ItemForm.css';
import isIdValid from './useCheckId';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import SnackOrBoozeApi from "./Api";

const ItemForm = ({updateState, snacks, drinks}) => {
    const history = useHistory();
    let initialState = {
        description: "",
        name: "",
        recipe: "",
        serve: "",
        type: "snack"
    }
    const [formData, setFormData] = useState(initialState);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {type} = formData;
        const id = formData.name.toLowerCase().replace(" ", "-");
        if (isIdValid(id, type, snacks, drinks) === true) {
            updateState(formData)
            await SnackOrBoozeApi.addItem(type, formData);
            alert(`${formData.name} was added!`);
            setFormData(initialState);
            history.push(`${type}s/${id}`)
        } else {
            alert(`Name of ${formData.name} is taken, please use another`);
        }
    }
    return (
        <div className="ItemForm">
            <Form className="form">
                <FormGroup>
                    <Label for="examplePassword">Type:</Label>
                    <Input type="select"
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="snack">Snack</option>
                        <option value="drink">Drink</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="type">Name:</Label>
                    <Input name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">Description:</Label>
                    <Input name="description"
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">Recipe</Label>
                    <Input name="recipe"
                        type="text"
                        placeholder="Recipe"
                        value={formData.recipe}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">Serve:</Label>
                    <Input name="serve"
                        type="text"
                        placeholder="Serve"
                        value={formData.serve}
                        onChange={handleChange}
                    />
                </FormGroup>
                
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    )
}

export default ItemForm;