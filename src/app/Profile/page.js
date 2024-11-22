import MainPagelayOut from '@/components/MainPageLayOut'
import React, { memo } from 'react'

const Profile = memo((props) => {
  return (
    <MainPagelayOut>
      <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-4">We are a company committed to providing the best services.</p>
      </div>
    </MainPagelayOut>
  )
})


export default Profile