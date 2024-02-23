"use client"

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {SkillData, SkillData2} from '@/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'


const page = () => {
  return (
    <div
    style={{background: "url(/bg-2.jpg)"}}
    className='flex flex-col gap-20 h-screen w-screen items-center justify-center bg-cover bg-center'
   >

    <div className='flex gap-5 flex-col max-w-[80%] items-center'>
      <h1 className='font-semibold text-white text-[40px]'>
          Skills{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
          {" "}
          &{" "}
          </span>

    Technologies


      </h1>

      <p className='text-gray-400 text-[20px]'>
        This is my stack of technologies
        </p>
      
    </div>

    <Swiper
    slidesPerView={5}
    loop={true}
    autoplay={{
      delay:0,
      disableOnInteraction: false
    }}
    speed={5000}
    modules={[Autoplay]}
    className='max-w-[80%]'

    >

      {SkillData.map((skill,index) => (
        <SwiperSlide key={index}>
          <Image
          src={skill.Image}
          alt={skill.name}
          width={skill.width}
          height={skill.height}
          
          />


        </SwiperSlide>


      ))}



    </Swiper>


    <Swiper
    slidesPerView={5}
    loop={true}
    autoplay={{
      delay:0,
      disableOnInteraction: false,
      reverseDirection: true
    }}
    speed={5000}
    modules={[Autoplay]}
    className='max-w-[80%]'

    >
    
      {SkillData2.map((skill,index) => (
        <SwiperSlide key={index}>
          <Image
          src={skill.Image}
          alt={skill.name}
          width={skill.width}
          height={skill.height}
          
          />


        </SwiperSlide>


      ))}



    </Swiper>





    </div>
  )
}

export default page