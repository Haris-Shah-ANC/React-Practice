import React, { useState } from 'react';

export default function ValidationForm(){
  const [formData, setFormData] = useState({name: '',email: '',password: '',confirmPassword: '',});
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.name.length < 3 || formData.email === '' ||formData.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ||
      formData.password !== formData.confirmPassword
    ) {
      setError('Invalid input. Please check your data.');
    } else {
      alert('Account created successfully');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1>Validation Form</h1>
        <br/> <br/>
      <form onSubmit={handleSubmit}>

        <div >
          <label >Name:</label>
          <input
            placeholder='Enter your name'
            className='border border-black px-2 py-1 w-full rounded'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='pt-4'>
          <label >Email:</label>
          <input
            placeholder='Enter your email'
            className='border border-black px-2 py-1 w-full rounded'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className='pt-4'>
          <label>Password:</label>
          <input
            placeholder='Enter your password'
            className='border border-black px-2 py-1 w-full rounded'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className='pt-4'>
          <label>Confirm Password:</label>
          <input
            placeholder='Confirm your password'
            className='border border-black px-2 py-1 w-full rounded'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
            <br/> <br/>
        </div>
        <div>
          <button type="submit" className='border border-black rounded hover:bg-blue-400' >Submit</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
