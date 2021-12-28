import React from 'react';
import NewOrganization from './NewOrganization/NewOrganization';
import SignIn from './SignIn/SignIn';
export default function Buttons() {
  return (
    <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
      <NewOrganization />
      <SignIn />
    </div>
  );
}
