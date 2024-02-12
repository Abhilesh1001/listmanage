import React from 'react'

const Page = () => {

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, lectus ac sollicitudin varius, ex metus tempus sapien, sit amet vulputate lacus elit eget elit.'
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-500">
    <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-gray-600 mb-4">{user.email}</p>
      <p className="text-gray-700">{user.description}</p>
    </div>
  </div>
  )
}

export default Page