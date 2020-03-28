import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './Style.css';

const AddNewFriend = (props) => {

    const [user, setUser] = useState({ name: "", age: "", email: "" });

    const handleChange = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    // useEffect(() => {

    //     return () => {

    //     }
    // }, [input])
    const AddFriend = (object) => {
        axiosWithAuth()
            .post("/friends", object)
            .then(res => {
                console.log('response:', res);
            props.history.push("/friendsList");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
     
        <div className="add-and-retrieve">
      
            <div>
                <form>
       
                    <input className="input-form"
                        type="text" name="name"
                        placeholder="NAME"
                        value={user.name}
                        onChange={handleChange} />
           
                
       
         
                    <input className="input-form"
                        type="text" name="age" value={user.age}
                        placeholder="AGE"
                        onChange={handleChange} />
            
            
      
                    <input className="input-form" type="text"
                        name="email" value={user.email}
                        placeholder="EMAIL"
                        onChange={handleChange} />
                    
                </form>
            </div>
            <button className="add-button" onClick={() => AddFriend(user)}>Add New Friend </button>
        </div>
       
    );
}

export default AddNewFriend
