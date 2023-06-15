import React from 'react';
import { auth } from './firebase';
  
const Mainpage = () => {
  
    const logout = () => {
        auth.signOut();
    }
  
    return (
        <div style={{ marginTop: 250 }}>
            <center>
            <input type="text" placeholder={"Enter you Name"}></input>
                <h3>Thanks for logging to our service {auth.currentUser.phoneNumber}</h3>
                <button style={{ "marginLeft": "20px" }} 
                  onClick={logout}>Logout</button>
            </center>
        </div>
    );
}
  
export default Mainpage;