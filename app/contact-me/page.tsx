import React from 'react'

const page = () => {
  return (
    <div style={{backgroundImage: "url(bg-3.jpg)"}}
    className='flex flex-col h-screen w-full items-center justify-center bg-cover bg-center'
    >

<div style={{backgroundImage: "url(atombg-comp.webp)"}} className='h-[60%] w-full relative bg-cover bg-center border border-transparent'>
    <div className='absolute left-20 bottom-0 w-[70%] md:w-[30%]'>
        <form action="" className='flex flex-col justify-start items-center gap-3'>
            <h2 className="pl-10 w-full text-2xl font-bold mb-5 text-white ">Contact Me</h2>
            <input className='px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none' type="text" name="name" placeholder='Name' />
            <input className='px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none' type="email" name="email" placeholder='Email' />
            <input className='px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow h-[100px] pb-[75px] outline-none' type="text" name="message" placeholder='Message' />
            <button className='px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400'>Send message</button>
        </form>
    </div>
</div>





    </div>
  )
}

export default page