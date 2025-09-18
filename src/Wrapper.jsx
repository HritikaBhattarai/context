//function Wrapper({name="New User"}){//the new user is default props passed in the name if the value is given then it takes the value but if it is null it takes default one
function Wrapper({children, color="green"}){  // here children is used so that the value passed in wrapper can be rendered here  
return(                                       //if not any color is passed as props then the part where it is not passed will take default value which is green in this context
        <div style={{color:color, border:"5px solid lightpink", width:"300px", margin:"10px"}}>
           {children}
        </div>
    )
}
export default Wrapper;