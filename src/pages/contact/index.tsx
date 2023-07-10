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

  function showcase_pic(img_url: string){
    return (
      <div className="flex keen-slider__slide w-full bg-blue-600 items-end justify-center py-5">pic2</div>
    )
  }


  return (
    <div className='Parent'>
     <div className='flex-col w-full bg-[url("/img/contact.gif")] bg-cover bg-center'>
      <div className='flex-col w-full backdrop-brightness-50 backdrop-blur-sm'>
        <nav id="top_bar">
          <div className='justify-between px-24 py-6 hidden w-full md:block md:w-auto'>
            <ul className="flex justify-end font-normal text-2xl flex flex-col md:flex-row md:space-x-12">
              <li>
                <Link href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
              </li>
              <li>
                <Link href="contact" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">About Me</Link>
              </li>
            </ul>
          </div>
        </nav>
        <p className='flex text-6xl font-medium px-48 py-12'>About Me</p>
        <div className='flex w-full h-fit bg-gray-700 px-48 py-16' id="user_layout">
          <div className=' h-64 w-64 bg-[url("/img/elephantmario.jpg")] bg-center rounded-full shrink-0 grow-0' id="avatar"></div>
          <div className='flex-col min-w-screen m-10 space-y-5'>
            <p className='text-2xl font-medium'>Nick Nguyen</p>
            <p className='text-lg font-light w-4/5'>A Sophomore majoring in Computer System Engineering at Arizona State University. I am interested in various CS fields such as Deep Learning, Web Application Development, and Embedded Software Engineering. Currently, I am working with help from APG Research Faculty at ASU to conduct research on the Symbolic Text-to-Music generation model. Additionally, I recently got to lead the Avionics sub-team in Sun Devil Rocketry where we help enhance the avionics system for the organization’s high-power rockets as well as develop highly advanced rockets and mechanisms such as Thrust Vector Controlled and Liquid Powered Rockets.</p>
            
            <div className='flex w-full h-fit space-x-4' id='profiles'>
              <Link className='h-8 w-8' href={"https://www.linkedin.com/in/tnguy231/"} id='linkedin'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#0177b5"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
              </Link>
              
              <Link className='h-8 w-8' href={"https://github.com/niekky"} id='github'> 
                <svg className='h-12 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
        <div className='flex-col w-full h-screen bg-gray-800 px-48' id="showcase">
          <p className='flex w-full justify-center text-6xl font-thin p-10'> Me Momento!</p>
          <div ref={sliderRef} className='flex w-full h-4/5 keen-slider font-medium'>
            <div className="flex keen-slider__slide w-full bg-[url('/me_img/lday1.jpg')] bg-cover items-end justify-center  py-5">Sun Devil Rocketry October Launch Day</div>
            <div className="flex keen-slider__slide w-full bg-[url('/me_img/lday2.jpg')] bg-cover bg-bottom items-end justify-center py-5"></div>
            <div className="flex keen-slider__slide w-full bg-[url('/me_img/fctokyo.jpg')] bg-cover bg-center items-end justify-center py-5">SDR Flight Computer at Tokyo</div>
            <div className="flex keen-slider__slide w-full bg-[url('/me_img/liquid.jpg')] bg-cover bg-center items-end justify-center py-5">Setting up Liquid Hot-fire Test</div>
            <div className="flex keen-slider__slide w-full bg-[url('/me_img/conf.jpg')] bg-cover bg-center items-end justify-center py-5">Jiawei Han Talk Conference</div>
          </div>
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
