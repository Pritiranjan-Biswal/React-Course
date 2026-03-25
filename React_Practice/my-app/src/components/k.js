import { useState } from "react";


function P() {
    const user={
        name:"kuna",
        number:6370042753,
        address:"dkl"
    };


    const [count, setcount]=useState(0)
    function handleClicker() {
        setcount(count+1)
    }


    return (    
        <div>
            <h4>My Regd. No. is 230301120342</h4>

            <p>My name is {user.name}  and my phone number is {user.number}. I live at {user.address}</p>
            <button onClick={handleClicker}>clicked{count} times</button>
        </div>
        
    )
};
export default P;