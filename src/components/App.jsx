import React from "react";
import Emoji from "./Emoji";
import emojis from "../data/emojis";
function App () {
    return <div className="flex-container-centered">
        {emojis.map(e => <Emoji key={e.id} emoji={e.emoji} name={e.name} desc={e.meaning}/>)}
    </div>
}

export default App;