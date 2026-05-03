'use client'
import { ModalPage } from '@/component/ModalPage';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {
   const userData=authClient.useSession()
    const user=userData.data?.user
  
  return (
    <div className='flex flex-col justify-center items-center min-h-[60vh]'>
  <Card className='max-w-200 mx-auto p-20 flex flex-col justify-center items-center mt-6 mb-6 shadow border'>
    <Avatar className='h-20 w-20'>
            <Avatar.Image alt={user?.name} src={user?.image} 
            referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
          </Avatar>
          <p className='font-bold'>{user?.name}</p>
          <p className='text-muted'>{user?.email}</p>
          <ModalPage></ModalPage>
  </Card>
    </div>
  );
};

export default ProfilePage;