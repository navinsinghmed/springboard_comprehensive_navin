import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

/** Routes for color factory app.
 *
 * Properties:
 *
 * - None
 *
 * State:
 *
 * - None
 *
 **/

const DEFAULT_COLORS = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}

function Routes() {
    
    const initialColors = JSON.parse(localStorage.getItem("colors")) || DEFAULT_COLORS;
    const [colors, setColors] = useState(initialColors);
    
    //Save colors to localStorage upon any change in the colors array
    useEffect(
        function syncColorsToLocalStorage() {
            return localStorage.setItem("colors", JSON.stringify(colors));
        }, [colors]
    );
    
    function handleAdd(newColorObj) {
        setColors(prevColors => ({ ...prevColors, ...newColorObj }));
    }
    
    return (
        <Switch>
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            <Route exact path="/colors/new">
                <NewColorForm addColor={handleAdd} />
            </Route>
            <Route path="/colors/:color">
                <Color colors={colors} />;
            </Route>
            <Redirect to="/colors" />
        </Switch>
    );
}

export default Routes;