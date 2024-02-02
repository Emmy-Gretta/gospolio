import React from 'react'

interface ButtonProps {
    title: string,
    action?: () => void
}

const MainButton: React.FC<ButtonProps> = ({ title , action}) => {
  return (
    <button onClick = {action} type='submit' className='main-button text-[14px] text-[#fff]'>{title}</button>
  )
}

export default MainButton