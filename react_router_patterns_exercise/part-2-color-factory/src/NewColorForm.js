import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./NewColorForm.css";

/** Form to add a new color, redirect to /colors upon submit
 *
 * Properties:
 *
 * - addColor: fn to add to the colors object in the Routes component
 *
 * State:
 *
 * - formData: {name: string, hex: string}
 *
 * Routes -> NewColorForm
 **/

function NewColorForm({ addColor }) {
    
    const [formData, setFormData] = useState({ name: "", hex: "#ffffff" });
    const history = useHistory();
    
    function handleChange(e) {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex });
        history.push("/colors");
    }
    
    const { hex, name } = formData;
    
    return (
        <div className="NewColor">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input 
                        name="name"
                        id="name"
                        placeholder="Enter color name"
                        onChange={handleChange}
                        value={name}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color value</label>
                    <input 
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly />
                <div>
                    <Link to="/">Go back</Link>
                </div>
            </form>
        </div>
    );
}

export default NewColorForm;