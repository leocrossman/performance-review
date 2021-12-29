import React from 'react';
import { Link } from 'react-router-dom';
import { FcOrganization } from 'react-icons/fc';
export default function CreateYourOrgTextOrSignIn() {
  return (
    <>
      <div>
        <FcOrganization className='mx-auto h-16 w-auto' />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300'>Create your organization</h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{' '}
          <Link to='/' className='font-medium text-emerald-600 hover:text-emerald-500'>
            sign into an organization
          </Link>
        </p>
      </div>
    </>
  );
}
