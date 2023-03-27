import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

export default function UserDetail() {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

    return (
      <div  className="card">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company?.name}</p>
      </div>
    );
  }

  