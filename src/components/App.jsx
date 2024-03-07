import React from "react";
import Emoji from "./Emoji";
import emojis from "../data/emojis";

function createEmoji (emoji) {
    return <Emoji key={emoji.id} emoji={emoji.emoji} name={emoji.name} desc={emoji.meaning}/>
}

function App () {
    return <div className="flex-container-centered">
        {emojis.map(createEmoji)}
    </div>
}

export default App;