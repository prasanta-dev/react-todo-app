import React from 'react'
import { useEffect, useState } from 'react';


function HeadSection() {

  const [getTime, setGetTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setGetTime(now.toLocaleTimeString())
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <section className='w-80 sm:w-auto flex items-center sm:block sm:px-0 px-2'>
      <h1 className='sm:text-4xl px-7 bg-red-500 inline-block rounded-t-3xl rounded-r-3xl py-2 font-serif'>Todo</h1>
      <span className='mx-4 sm:text-2xl bg-gray-600 p-2 rounded-2xl rounded-b-none'>
        {getTime}
      </span>
      <h1 className='text-sm underline underline-offset-4 my-1'>
        {new Date().toDateString()}
      </h1>
    </section>
  )
}

export default HeadSection