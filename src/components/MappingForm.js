import React, { useState } from 'react';

export default function MappingForm() {

    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', });
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
        if (formData.name.length < 3 || formData.email === '' || formData.password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ||
            formData.password !== formData.confirmPassword
        ) {
            setError('Invalid input. Please check your data.');
        } else {
            alert('Account created successfully');
        }
    };

    const data = [
        { title: 'name', placeholder: 'Enter your name', className: 'border border-black px-2 py-1 w-full rounded', type: 'text', Name: 'name', value: formData.name },
        { title: 'email', placeholder: 'Enter your email', className: 'border border-black px-2 py-1 w-full rounded', type: 'email', Name: 'email', value: formData.email },
        { title: 'Password', placeholder: 'Enter your password', className: 'border border-black px-2 py-1 w-full rounded', type: 'password', Name: 'password', value: formData.password },
        { title: 'Confirm Password', placeholder: 'Confirm your Password', className: 'border border-black px-2 py-1 w-full rounded', type: 'password', Name: 'confirmPassword', value: formData.confirmPassword }
    ]

    return (
        <div className='max-w-md mx-auto p-4'>

            <h1>Validation Form</h1>
            <form onSubmit={handleSubmit}>
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <InputComponent
                                id={index}
                                individualData={item}
                                onInputChange={handleInputChange}
                            />
                        </React.Fragment>
                    )
                })}
                <div className='pt-4'>
                    <button type='submit' className='border border-black rounded hover:bg-blue-400'>
                        Submit
                    </button>
                </div>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
        </div>
    )
}

function InputComponent({ id = '', individualData, onInputChange }) {

    return (
        <div className='pt-4'>
            <label>{individualData.title}: </label>
            <input
                id={'input_id_' + id}
                name={individualData.Name}
                placeholder={individualData.placeholder}
                className={individualData.className}
                type={individualData.type}
                value={individualData.value}
                onChange={onInputChange}
            />
        </div>
    )
}

