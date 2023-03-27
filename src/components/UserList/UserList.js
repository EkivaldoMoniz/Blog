import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Styles.css'

export default function UserList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setUsers(response.data);
        });
    }, []);
  
    return (
      <div className="users">
        <h2>Users</h2>
        <div> 
          {users.map(user => (
            <div className="card">
               <Link to={`/users/${user.id}`}>
                     {user.name}
                  </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

 