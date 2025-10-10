import clsx from 'clsx'
import React from 'react'

export default function CustomContainer({children, customClass}) {
  return (
    <div className={clsx("custom-container 2xl:max-w-[1440px] mx-auto xl:px-16 md:px-10 px-6", customClass)}>
      {children}
    </div>
  )
} 
