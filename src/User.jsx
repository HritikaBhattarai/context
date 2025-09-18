//default props
function User({name="New User"}){//the new user is default props passed in the name if the value is given then it takes the value but if it is null it takes default one
    return(
        <div>
            <h1>Hi, {name} </h1>
        </div>

    )
}
export default User;