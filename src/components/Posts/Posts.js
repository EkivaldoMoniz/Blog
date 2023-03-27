import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default  function Posts({ onUserClick }) {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments')
        .then(response => {
          setPosts(response.data);
        });
    }, []);

    return (
        <div>
          {posts.map(post => (
                <div className="card" key={post.id} >
                <h2>{post.title}</h2>
                <p style={{ marginTop: "50px", marginBottom: "20px"}}>{post.body}</p>
                <p style={{ height: "1px", backgroundColor: "gray"}}></p>
                <h3>Comments:</h3>
                {post.comments.map(comment => (
                  <div key={comment.id}>
                    <p style={{ marginLeft: "150px", fontSize: "12px" }}>{comment.body}</p>
                    <p style={{ marginTop: "-8px", marginBottom: "-8px",  marginLeft: "150px", height: "1px", width: "50px", backgroundColor: "gray"}}></p>
                  </div>
                ))}
                <div style={{ marginTop: "30px", fontWeight: "bold", fontSize: "12px" }}>
                  Posted by 
                  <Link to={`/users/${post.userId}`}>
                     {post.user.name}
                  </Link>
                </div>
              </div>
          ))}
        </div>
          
    );
  }