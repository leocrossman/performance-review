import React from 'react';
import { Link } from 'react-router-dom';
import { FcManager } from 'react-icons/fc';
export default function CreateYourAccountTextOrSignIn() {
  return (
    <>
      <div>
        <FcManager className='mx-auto h-16 w-auto' />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300'>Create your account</h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{' '}
          <Link to='/' className='font-medium text-emerald-600 hover:text-emerald-500'>
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
