import React from 'react'

const ContactFormStyle = () => {
  return (
    <div>
        <form
            className="w-full max-w-xs mx-auto p-6 bg-white rounded shadow-md"

        >
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Register
            </h2>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500"
                    id="username"
                    type="text"

                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
                type="submit"
            >
                Register
            </button>
        </form>
    
    </div>
  )
}

export default ContactFormStyle