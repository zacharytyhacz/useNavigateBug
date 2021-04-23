import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>Welcome to the other page. you got here with the useNavigate hook.</h1>
            <h2> click this button to go back</h2>
            <button type="button" onClick={onButtonClick}>home</button>
        </div>
    )
}
