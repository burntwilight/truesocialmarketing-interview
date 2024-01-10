'use client';

import { useState } from 'react';

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e: Event) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const info = await response.json();
            console.log(info);

            if (info.error) {
                return setError(info.error);
            }

            setUsername('');
            setPassword('');

        } catch (error) {
            console.log('Error submitting user form: ', error.message);
            return setError(error.message);
        }
    };

    return (
        <form
            className='w-full max-w-xs mx-auto p-6 bg-white rounded shadow-md'
            onSubmit={submitForm}
        >
            <h2 className='text-2xl font-semibold mb-6 text-center'>
                Register
            </h2>
            <div className='mb-4'>
                <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='username'
                >
                    Username
                </label>
                <input
                    className='w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500'
                    id='username'
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder='Enter your username'
                />
            </div>
            <div className='mb-4'>
                <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='password'
                >
                    Password
                </label>
                <input
                    className='w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500'
                    id='password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='Enter your password'
                />
            </div>
            <button
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none'
                type='submit'
            >
                Register
            </button>
            <p className='text-red-500 text-sm mt-4 whitespace-nowrap overflow-ellipsis'>
                {error}
            </p>
        </form>
    );
};

export default SignInForm;
