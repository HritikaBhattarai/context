import { useState } from "react";

function Checkboxes(){
    const[hobby, setHobby]=useState([]);
    const handleHobby=(event)=>{//this handle event is use to get the value which is later used in the input field
       console.log(event.target.value, event.target.checked);
       if(event.target.checked){
        setHobby([...hobby, event.target.value])//here spread operator is used to give all the values under hobby and new value which are checked
       }else{
         setHobby([...hobby.filter((item)=> item !=event.target.value)])/*here filter is used  to filter the value that is 
                    only give the value ehich is checked if the value is unchecked remove it i.e if the item is not equal to
                    current value then keep it(i.e.event.target.value) otherwise remove it simply it means if everything is selected 
                    then you unselect running the current value selected is in it so it shouldnt match thats why give the value except 
                    the unselected one*/
       }
    } 
    return (
        <div>
            <h2>Select Your Hobby</h2>
            <input onChange={handleHobby} type="checkbox" id="read" value="read" />
            <label htmlFor="read">Reading</label> <br/><br/>{/*htmlFor bind the label to the inputfield i.e. if we click inthe defined htmlfor 
                                     then it takes as clicking on the checkbox   */}
            <input onChange={handleHobby} type="checkbox" id="run" value="run" />
            <label htmlFor="run">Running</label> <br/><br/>
            <input onChange={handleHobby} type="checkbox" id="eat" value="eat" />
            <label htmlFor="eat">Eating</label>
            <h1>{hobby.toString()}</h1>{/*toString returns the content of the string declared*/}
        </div>
    )
}

export default Checkboxes;