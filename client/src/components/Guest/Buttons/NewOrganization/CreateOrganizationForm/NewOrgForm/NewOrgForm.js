import React, { useState, useEffect } from 'react';
export default function NewOrgForm() {
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');
  // useEffect(() => {
  //   // addOrganization(name);
  //   return () => {
  //     // cleanup
  //   };
  // }, []);

  const addOrganization = async (name) => {
    try {
      const res = await fetch('/api/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post }),
      });

      if (res.status !== 200) throw new Error(res.status);
      return res;
    } catch (error) {
      throw new Error(`There was an issue adding the organization to the server. ${error}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addOrganization(e.target.value);
    console.log(res);
    const body = await res.text();
    setResponseToPost(body);
  };

  return (
    <>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
        <input type='hidden' name='remember' defaultValue='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='organization-name' className='sr-only'>
              Organization name
            </label>
            <input
              id='organization-name'
              name='organization-name'
              type='text'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 rounded-t-md rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm'
              placeholder='Organization name'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
