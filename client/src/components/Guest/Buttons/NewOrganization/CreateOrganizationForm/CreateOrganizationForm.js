import React from 'react';
import CreateYourOrgTextOrSignIn from './CreateYourOrgTextOrSignIn/CreateYourOrgTextOrSignIn';
import NewOrgForm from './NewOrgForm/NewOrgForm';
export default function CreateOrganizationForm() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <CreateYourOrgTextOrSignIn />
          <NewOrgForm />
        </div>
      </div>
    </>
  );
}
