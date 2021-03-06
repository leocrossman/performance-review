import React from 'react';
import { Link } from 'react-router-dom';
export default function NewOrganization() {
  return (
    <div className='inline-flex rounded-md shadow'>
      <Link
        to='/new+organization'
        className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:md:hover:bg-emerald-900'
      >
        New Organization
      </Link>
    </div>
  );
}
