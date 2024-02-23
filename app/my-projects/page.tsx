import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'

import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
    className='w-screen overflow-scroll lg:overflow-hidden h-screen flex items-center justify-center bg-center bg-cover'
    >

      

      <div className='flex flex-wrap items-center justify-center pt-10 gap-5 max-w-[90%] max-h-[90%] '>
        {Projects.map((project) => (

          <ProjectCard
          key={project.title}
          image={project.src}
          title={project.title}
          text={project.text}
          link={project.link}
          />


        ))}

      </div>
      

    </div>
  )
}

export default page