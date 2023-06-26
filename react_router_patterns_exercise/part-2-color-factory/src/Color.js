import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import "./Color.css";

/** Single color view, uses :color param from URL to display the background color, redirects to /colors if the color is not found
 *
 * Properties:
 *
 * - colors: {red: "#FF0000", ...}
 *
 * State:
 *
 * - None
 *
 * Routes -> Color
 **/
 
function Color({ colors }) {
    
    const { color } = useParams();
    const hex = colors[color];
    
    if (!hex) {
        return <Redirect to="/colors"/>
    }
    
    return (
        <div className="color" style={{ backgroundColor: hex }}>
            <p>this is {color}</p>
            <p>Isn't it beautiful?</p>
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    );
}

export default Color;