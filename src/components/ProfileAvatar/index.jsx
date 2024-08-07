import React from "react"
import avatarIcon from '/profile-avatar.png'

const ProfileAvatar = ({ user }) => {
    return (
                <div className="flex flex-row ml-2 my-2">
                    <img src={avatarIcon} alt="profileavatar" />
                    <div className='flex-1 mx-4'>
                <p className='font-bold text-sm text-white'>{user?.id}</p>
                        <p className='text-xs text-white'>Beginner</p>
                    </div>
                </div> 
    )
}
export default ProfileAvatar    