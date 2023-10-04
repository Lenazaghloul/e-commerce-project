import React from 'react'
import { useState } from 'react'

export default function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert (`register in with ${username} and ${password} and ${email}`);
  }

  function updateUsername(event) {
    setUsername(event.target.value);
  }
  function updatePassword(event){
    setPassword(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value)
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <table className='table border border-3'>
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
      <th scope="col">Email</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" className='m-5' onChange={updateUsername}></input></td>
      <td><input type="password" className='m-5' onChange={updatePassword}></input></td>
      <td><input type="email" className='m-5' onChange={updateEmail}></input></td>
    </tr>
    <input type="submit" className='m-5 d-flex justify-content-center btn btn-outline-secondary' value="Register"></input>
    </tbody>


    </table>



    </form>
    </div>
  )
}
