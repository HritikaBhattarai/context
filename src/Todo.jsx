function Todo(){
    function callFun(){
            alert("Button Clicked")
        }
    return(
        <div>
        <h1>Todo</h1>
        <img src="" alt="home" />
    <ul>
        <li>Invent</li>
        <li>Rehearse</li>
        <li>Improve</li>
    </ul>
    <button onClick={callFun}>Click Me</button>
    </div>
    )
}
export default Todo