import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NewOrgForm() {
  const [name, setName] = useState('');

  const addOrganization = async (name) => {
    try {
      const res = await fetch('/api/organizations/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (res.status !== 200) throw new Error(res.status);
      return res;
    } catch (error) {
      throw new Error(`There was an issue adding the organization to the database. ${error}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrganization(e.target[1].value);
  };

  return (
    <>
      <form className='mt-8 space-y-10' onSubmit={handleSubmit}>
        <input type='hidden' name='remember' />
        <div className='rounded-md shadow-sm -space-y-px'>
          {/* <Tooltip tooltipText='This is the tooltip'> */}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* </Tooltip> */}
        </div>

        <div>
          {name ? (
            <Link
              to={{
                pathname: '/new+member',
                state: { organizationName: name },
              }}
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
            >
              Submit
            </Link>
          ) : (
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
