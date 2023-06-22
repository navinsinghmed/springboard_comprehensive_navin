import React, {useState} from "react";

const MadlibForm = ({add, setSentence})=> {
    const initialState = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: "",
        story: "fantasy",
    }
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const{noun, noun2, adjective, color, story} = formData;
        add(formData);
        setSentence(formData);
        setFormData(initialState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="noun">Noun</label>
                <input
                    name="noun"
                    id="noun"
                    type="text"
                    placeholder="noun"
                    value={formData.noun}
                    onChange={handleChange}
                />
            <label htmlFor="noun2">Noun2</label>
                <input 
                    name="noun2"
                    id="noun2"
                    type="text"
                    placeholder="noun"
                    value={formData.noun2}
                    onChange={handleChange}
                />
            <label htmlFor="adjective">Adjective</label>
                <input 
                    name="adjective"
                    id="adjective"
                    type="text"
                    placeholder="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                />
            <label htmlFor="color">Color</label>
                <input 
                    name="color"
                    type="text"
                    placeholder="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            <label htmlFor="story">Story</label>
                <select 
                    name="story"
                    id="story"
                    value={formData.story}
                    onChange={handleChange}
                >
                    <option value="fantasy">Fantasy</option>
                    <option value="comedy">Comedy</option>
                    <option value="romance">Romance</option>
                    <option value="horror">Horror</option>
                </select>
            
            <div className="buttons">
                {(formData.noun != "" && formData.noun2 != "" && formData.color != "" && formData.adjective != "") && <button>Create Story!</button>}
            </div>
        </form>
    )   
}

<select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select>

export default MadlibForm;