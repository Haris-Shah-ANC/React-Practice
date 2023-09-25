import { useState } from "react";

export default function FormUsingCompoents() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFromSubmit = (e) => {
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

    const inputData = {name : 'Name', placeholder: 'Enter your name', className :'border border-black px-2 py-1 w-full rounded'}
    return (
        <div className="max-w-md mx-auto p-4">
            <h1>Validation Form</h1>
            <form onSubmit={handleFromSubmit}>
                <div className="pt-2">
                    <InputComponent 
                    onInputChange={handleInputChange} 
                    data={formData} 
                    error={error} 
                    title={inputData.name} 
                    placeholder={inputData.placeholder} 
                    className={inputData.className} 
                    />
                </div>
            </form>
        </div>
    )
}

function InputComponent({ onInputChange, data, error,title,placeholder,className }) {

    return (
        <>
            <label >{title}:</label>
            <input
                placeholder={placeholder}
                className={className}
                type="text"
                value={data.name}
                onChange={onInputChange} 
                name="name"
            />
            <div className="pt-2">
            <button type="submit" className='border border-black rounded hover:bg-blue-400 ' >Submit</button>
            </div>
            { error && <p>{error}</p> }
        </>
    )
}