import React from 'react';
export default function Guest() {
  return (
    <div className='flex h-screen w-screen bg-gray-50 dark:bg-gray-900'>
      <div className='grow m-60 py-12 px-8 sm:px-10 lg:py-18 lg:px-8 lg:flex lg:items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100'>
          <span className='block'>LEO! ARE THESE WORDS?</span>
          <span className='block text-emerald-600 dark:text-emerald-500'>THESE ARE WORDS THAT TAKE UP SPACE</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:md:hover:bg-emerald-900'
            >
              New Organization
            </a>
          </div>
          <div className='ml-3 inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 dark:text-emerald-500 bg-white dark:bg-black hover:bg-emerald-50 dark:md:hover:bg-emerald-900'
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
