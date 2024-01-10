import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '@/constants';

type FormData = {
    name: string;
    email: string;
};

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
});

const ContactInner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, SetShowSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        try {
            const { name, email } = data;

            const formData = new FormData();

            formData.set('your-name', name);
            formData.set('your-email', email);

            const response = await axios.post(API_URL.contactForm, formData);

            if (response.status === 200) {
                showMessage();
                reset();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const showMessage = () => {
        SetShowSuccess(true);

        setTimeout(() => {
            SetShowSuccess(false);
        }, 5000);
    };

    return (
        <section
            id='contact-form'
            className='container w-full max-w-xs mx-auto p-6'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Name
                </label>
                <input
                    type='text'
                    {...register('name')}
                    className='w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500'
                />
                <p className='text-red-600'>{errors.name?.message}</p>

                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Email
                </label>
                <input
                    type='text'
                    {...register('email')}
                    className='w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500'
                />
                <p className='text-red-600'>{errors.email?.message}</p>

                <button
                    type='submit'
                    className='w-full text-black hover:text-gray-600 px-4 py-2 rounded-md focus:outline-none mt-4'
                >
                    {isLoading ? 'Sending...' : 'Submit'}
                </button>

                {showSuccess && (
                    <p className='mt-4 text-green-600'>
                        Message sent successfully!
                    </p>
                )}
            </form>
        </section>
    );
};

export default ContactInner;
