import React from 'react';
import axios from 'axios';

const Register = () => {
    const handleregister = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Accessing form values correctly
        const name = e.target.elements.name.value;
        const age = e.target.elements.age.value;

        const users = { name, age }; // Correct object creation

        try {
            await axios.post('http://localhost:9000/users', users);
            alert('User Registered Successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Registration failed');
        }
    };

    return (
        <div>
            <form onSubmit={handleregister}>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" name="age" required />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
