import React, { useState } from 'react';
import Card from './Card';
import './App.scss';
const App = () => {
  const [data, setdata] = useState([]);

  const [formInput, setformInput] = useState({
    firstname: '',
    lastname: '',
    message: '',
    email: '',
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onButtonClick = () => {
    setdata([...data, formInput]);
  };

  const handleFormInput = (event) => {
    setformInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          name="firstname"
          type="text"
          placeholder="FirstName"
          value={formInput.firstname}
          onChange={handleFormInput}
        />
        <input
          name="lastname"
          type="text"
          placeholder="LastName"
          value={formInput.lastname}
          onChange={handleFormInput}
        />
        <input
          name="message"
          type="text"
          placeholder="Message"
          value={formInput.message}
          onChange={handleFormInput}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={formInput.email}
          onChange={handleFormInput}
        />
        <button onClick={onButtonClick}>Submit</button>
      </form>
      <hr />
      {data.map((user, index) => {
        return <Card user={user} key={index} />;
      })}
    </>
  );
};
export default App;
