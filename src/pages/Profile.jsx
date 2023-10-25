import React from 'react'

const Profile = () => {
  return (
    <div className='w-full mx-auto py-6  grid grid-cols-2 '>
            <div className='flex flex-col gap-3 items-center'>
                <h1 className='text-4xl font-bold'>HI MAHBUB</h1>
                <p className='text-xl'>overview</p>
                <p className='text-xl'>Personal Information</p>
                <p className='text-xl'>Address Book</p>
                <p className='text-xl'>Payment</p>
                <p className='text-xl'>Saved Itemst</p>
                <button className='text-white w-[200px] mx-auto rounded-md  my-6 font-medium py-3 px-6 bg-black'>Sign Out</button>

            </div>
            <div className='flex flex-col justify-between'>
                     <h1 className='text-4xl font-bold pb-4'>Overview</h1>
                     <h2 className='text-3xl font-bold pb-4'>Personal Information</h2>
                     <p className='text-3xl font-bold mb-7'>Sign IN Information</p> 
                     <div className='flex gap-10   mb-12'>
                        <div >
                        <p className=' text-gray-600 text-sm font-medium'>Email</p>
                        <p className=' text-gray-600 text-sm font-medium'>Pasword</p>
                        </div>
                        <div>
                        <p>mahbubalam@gmail.com</p>
                         <p>*******</p>
                        </div>
                    </div> 
                    <p className='font-bold text-3xl mb-8'>ABOUT ME</p> 
                    <div className='flex  gap-10 mb-12'>
                        <div>
                            <p>Id</p>
                            <p>Name</p>
                            <p>Phone Mumber</p>
                            <p>Gender</p>
                        </div>
                        <div>
                            <p>123456</p>
                            <p>Mahbub Alam</p>
                            <p>01537506184</p>
                            <p>Male</p>
                        </div>
                    
                     </div> 
                 <p className='mb-3'>Please contact Customer Service if you have questions about your account, or if you are not seeing transactions that should have been posted. </p> 
                 <h1 className='text-3xl font-bold mb-2'>Need Help?</h1>
                 <p className='pb-2'>Shipping</p>        
                 <p className='pb-2'>Return Policy</p>        
                 <p className='pb-2'>Contact us</p>        
            </div>
    </div>
  )
}

export default Profile