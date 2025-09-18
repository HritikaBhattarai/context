function User({obj}){ //props is an object which contains all the attributes that are passed to the component  as key value pairs
  return (
    <div>
      <hr/>
    <h2>Name: {obj.name}</h2>
    <h2>Age: {obj.age}</h2>
    <h2>Email: {obj.email}</h2>
    </div>
  ) 
}

export default User; //this is a user defined component which is imported in app.jsx
