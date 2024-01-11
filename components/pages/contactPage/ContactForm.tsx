'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '@/constants';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    phoneNumber: string;
};

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .test(
            'phone-number-length',
            'Phone number should be 10 digits',
            (value) => {
                return value?.replace(/\D/g, '').length === 10;
            }
        ),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});
const ContactInner = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
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
            const { name, email, subject, message, phoneNumber } = data;

            const formData = new FormData();

            formData.set('your-subject', subject);
            formData.set('your-name', name);
            formData.set('your-email', email);
            formData.set('phoneNumber', phoneNumber);
            formData.append('your-message', message);

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
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <section id='contact-form' className='container flex flex-col'>
            <h1>Contact Us</h1>
            <form
                className='w-full max-w-lg mx-auto p-6 bg-white rounded shadow-md'
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Name
                </label>
                <input
                    type='text'
                    {...register('name')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-600 rounded-md focus:border-black'
                />
                <p className='text-red-600'>{errors.name?.message}</p>

                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Email
                </label>
                <input
                    type='text'
                    {...register('email')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-600 rounded-md focus:border-black'
                />
                <p className='text-red-600'>{errors.email?.message}</p>

                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Phone Number
                </label>
                <input
                    type='text'
                    {...register('phoneNumber')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-600 rounded-md focus:border-black'
                />
                <p className='text-red-600'>{errors.phoneNumber?.message}</p>

                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Subject
                </label>
                <input
                    type='text'
                    {...register('subject')}
                    className='form-input-field w-full px-4 py-2 mb-4 border border-gray-600 rounded-md focus:border-black'
                />
                <p className='text-red-600'>{errors.subject?.message}</p>

                <label className='block mb-2 text-lg font-semibold text-gray-800'>
                    Message
                </label>
                <textarea
                    {...register('message')}
                    className='w-full px-4 py-2 mb-4 border border-gray-600 rounded-md focus:border-black'
                ></textarea>
                <p className='text-red-600'>{errors.message?.message}</p>

                <button type='submit' className='w-full text-black mt-4'>
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
