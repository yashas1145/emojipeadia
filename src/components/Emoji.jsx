import React from "react";

const emoji_style = {
    "fontSize": "5rem"
}

const desc_style = {
    "textAlign": "center",
    "fontSize": "0.75rem"
}

function Emoji (props) {
    return <div className="emoji flex-container-centered">
        <span style={emoji_style}>{props.emoji}</span>
        <h2>{props.name}</h2>
        <p style={desc_style}>{ props.desc}</p>
    </div>
}

export default Emoji;