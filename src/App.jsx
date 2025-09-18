//controlled component example using input field (is a form whose input field value is controlled by react state)
import { useState } from "react"
function App(){

  return(
    <div></div>
  )
}
export default App


/*import { useState } from "react"

function App(){
  const [val, setVal]=useState("");
  return( 
    <div>
      <h1>Get Input field Value</h1>
      <input type= "text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name"/> */
      {/*onchange event is use to get the value of input field so here the onchange helps to get the value and setval to  update the value  to clear the value after clicking on clear 
      value then set the value as val because anything under the state will be inside it state is updated then value also and if it
      is cleared the val is also cleared from both iutside and inside the box*/ }
      /*<h2>{val}</h2>
      <button onClick={()=>setVal("")}>Clear Value</button>
      {/*so here theonclick event is taken and  the setVal is given empty to clear the value from outside the box  }
    </div>
  )
} 
export default App*/

//import User from "./User"
//import Wrapper from "./Wrapper"

//function App() {
  //return (
    //<div>
      //  <h1>Default Props in React</h1>
    {/*<User name = "Rit"/> 
      <User/> {/*if no value is given then it takes the default one which is passed in user component*/}
     //<Wrapper color="orange" > {/*here color is passed as props in this part */}
      // <h1>Hello </h1> {/*the value inside wrapper is passed to the wrapper components in the form of children*/}
     //</Wrapper>
     //<Wrapper >
      // <h1>Welcome </h1> {/*the value inside wrapper is passed to the wrapper components in the form of children*/}
     //</Wrapper>
     //<Wrapper >
       //<h1>Hi </h1>
       //<h2>Please Login</h2> {/*the value inside wrapper is passed to the wrapper components in the form of children*/}
       //<h3>Logout</h3>
     //</Wrapper>/
    //</div>
//  )
//}
//export default App



// import User from "./UserComponent"
// import Arr from "./Arr"
// import Student from "./Student"
// import { useState } from "react"

// function App() {
//   // let userName="hari";
//   // let userAge=12; //these are props which are passed to the user component as attributes

//   // let userObject={ //passing an object as prop
//   //   name:"hari",
//   //   age:12,
//   //   email:"hari@Gam.com"
//   // }
//   // let userObject1={ //passing an object as prop
//   //   name:"har", 
//   //   age:17,
//   //   email:"har@am.com"
//   // }
//   // let userObject2={ //passing an object as prop
//   //   name:"ha",
//   //   age:27,
//   //   email:"ha@am.com"
//   // }

//   // let collNames=['Alice', 'Bob', 'Charlie'];
//   // const [student, setStudent] = useState("sam"); //you can change the name here and see the changes in the student component

//   // return ( 
//   //   <div>
//   //     <h1>Props in React</h1>
//   //     <Arr name={ collNames[0] }/>
//   //     {student && <Student name = {student}/>} // condition added so that if student value is empty then it won't show anything
//   //     <button onClick={()=> setStudent("bhat")}>Update Student Name</button>
//   //     <User obj={userObject} /> // passing the object as a single prop
//   //     <User obj={userObject1} /> // passing the object as a single prop
//   //     <User obj={userObject2} /> // passing the object as a single prop

//   //     {/* <User name ={userName} age={userAge} /> // props can be passed as attributes */}
//   //   </div>
//   // )
// }

// // export default App;


/*import { useState } from "react";
function App() {
  const[count,setCount]= useState(0);
  return(
    <div>
<h1>Multiple condition in React js</h1>
<h3>{count}</h3>
<button onClick={()=> setCount(count+1)}>Counter</button>
{
  count==0?<h1>Condition 0</h1>
  :count==1?<h1>Condition 1</h1>
  :count==2?<h1>Condition 2</h1>
  :count==3?<h1>Condition 3</h1>
  :count==4?<h1>Condition 4</h1>
  :<h1>other condition</h1>
}
</div> 
  )
}
export default App  */


/*import { useState }  from "react"
import User from "./UserComponent";
function App() {
  const [display, setDisplay] = useState(true);
  return(
<>
<button onClick={()=> setDisplay(!display)}>Toggle</button>
{
  display?<h1>Toggle in Js</h1>:null//or display?<h1><User/> </h1>:null //where the user comp is imported from another file usercomponent.jsx
} 
</>
  )
}
export default App  */


/*
import Counter from "./Counter";
import { useState }  from "react"
function App() {
  const [fruit, setFruit] = useState("Apple");
     const handleFruit =() =>{
      setFruit ("Orange")
     }
  return (
    <div> 
      <h1>State in React</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change State</button>
      <Counter />
    </div>
  )
}
   export default App*/