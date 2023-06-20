import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )
  return (
    <div className='Parent'>
     <div className='flex-col w-full bg-gray-600'>
      
      <nav id="top_bar">
        <div className='justify-between px-20 py-6 hidden w-full md:block md:w-auto'>
          <ul className="flex justify-end font-normal text-2xl flex flex-col md:flex-row md:space-x-12">
            <li>
              <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
            </li>
            <li>
              <a href="contact" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
      <p className='flex text-6xl font-medium px-24 py-12'>About Me</p>
      <div className='flex w-full h-fit bg-gray-700 px-24 py-12' id="user_layout">
        <div className='rounded-full h-64 w-64 bg-gray-100' id="avatar"></div>
          <div className='flex-col min-w-screen m-10 space-y-5'>
            <p className='text-2xl font-medium'>Mr.AvionicsSkunk</p>
            <p className='text-lg font-light w-2/3'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem sdasdasd asda sda sda sda sda sda sda sd</p>
          </div>
        </div>
      <div className='flex-col w-full h-screen bg-gray-800 px-80' id="me_momento">
        <p className='flex w-full justify-center text-4xl font-thin py-6'> Me Momento!</p>
        <div ref={sliderRef} className='flex w-full h-4/5 keen-slider'>
          <div className="flex keen-slider__slide w-full bg-red-600 items-end justify-center py-5">pic1</div>
          <div className="flex keen-slider__slide w-full bg-blue-600 items-end justify-center py-5">pic2</div>
          <div className="flex keen-slider__slide w-full bg-yellow-600 items-end justify-center py-5">pic3</div>
        </div>
      </div>

     </div>
     <div className='flex h-fit w-full bg-gray-900 p-4 justify-center space-x-1'>
        <p className='font-thin'>🖥️ Created by niekky</p>
        <p>|</p>
        <Link href={"https://github.com/niekky/Folium"} className='font-medium hover:font-bold'>Folium GitHub 🚀</Link>
        
      </div>
    </div>
  )
}
