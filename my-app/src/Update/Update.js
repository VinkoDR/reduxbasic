import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update,remove } from '../redux/userSlice';

const Update = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        //empeche la page entiere de se rafraichir
         e.preventDefault();
        dispatch(update({name,email}))

    }
    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(remove())
    }
    return (
        <div>
            <div>Update</div>
            <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='name' onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleClick}>submit</button>
            <button onClick={deleteClick}>delete</button>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
};

export default Update;