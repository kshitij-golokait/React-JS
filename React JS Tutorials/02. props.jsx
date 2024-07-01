import React from 'react';

function UserCard(props) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Address: {props.address}</p>
      <p>Phone: {props.phone}</p>
      <div>
        <h3>Hobbies:</h3>
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;

// Usage:
// <UserCard 
//   name="John Doe" 
//   age={30} 
//   email="john.doe@example.com" 
//   address="123 Main St, Anytown, USA" 
//   phone="(123) 456-7890" 
//   hobbies={['Reading', 'Gaming', 'Hiking']} 
// />
