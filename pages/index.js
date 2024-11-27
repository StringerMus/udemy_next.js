import {useState} from 'react';

export default function Homepage(){ //Homepage component

    const[likes, setLikes] = useState(0) //'0' is the initial number of likes

    return (
    //Button triggers an onClick event when clicked.
    //The onClick event handler calls setLikes(likes + 1), which updates the likes state by increasing it by 1 each time the button is clicked.
        <div>
            <h1>Like Counter {likes}</h1>
            <button onClick={()=> setLikes(likes + 1)}>Likes</button> 
        </div>
    )
}