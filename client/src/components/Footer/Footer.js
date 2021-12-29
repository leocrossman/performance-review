import React from 'react';

function Footer() {
  return (
    <footer className=' text-gray-500 dark:text-gray-400'>
      <div className='text-center text-xs p-2'>
        Made with React, PostgreSQL, and Express by{' '}
        <a target='_blank' rel='noreferrer' href='https://github.com/leocrossman'>
          Leo Crossman.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
