import React from "react";
import {HelloTypes} from "./Hello.types";

const Hello = ({input}: HelloTypes) => {
    return(
        <h3 className="hello">Hello, {input}</h3>
    )
}

export default Hello;
