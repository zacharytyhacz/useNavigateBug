import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate("/otherpage");
    }

    return (
        <div>
            <h1>Press this button to navigate to the other page</h1>
            <button type="button" onClick={onButtonClick}>Navigate</button>
        </div>
    )
}
