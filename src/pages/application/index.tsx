import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='Parent'>
      <div className='flex-col w-full h-screen bg-gray-600'>
        <div className='flex-col w-full h-2/4 bg-yellow-500' id='intro_background'>
          <nav id="top_bar">
            <div className='justify-between px-20 py-6 hidden w-full md:block md:w-auto'>
              <ul className="flex justify-end font-normal text-2xl flex flex-col md:flex-row md:space-x-12">
                <li>
                  <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                  <a href='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Projects</a>
                </li>
                <li>
                  <a href="contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                </li>
              </ul>
            </div>
          </nav>
          <p className='flex px-24 font-normal text-6xl py-16'>Software Application</p>
        </div>
        
        <div className='flex-col w-full h-1/3 bg-yellow-700 px-24 py-12 space-y-4' id='detail'>
          <p className='flex font-normal text-2xl'>Overview</p>
          <p className='flex font-thin text-lg w-2/3'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
        </div>
       
        {/* <div className='flex-col w-full bg-gray-800 px-48' id='projects'>
          <div className='flex w-full h-1/2' id="project_layout">
            <div className='flex-col w-1/2 space-y-5' id='description'>
              <p className='flex font-normal text-5xl'>Title</p>
              <p className='flex font-thin text-xl'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            </div>
            <div className='flex-col w-1/2 bg-yellow-500' id="image">
              <p className='flex justify-center items-center'>Picture</p>
            </div>
          </div>
          
          <div className='flex w-full h-1/2' id="project_layout">
            <div className='flex-col w-1/2 space-y-5' id='description'>
              <p className='flex font-normal text-5xl'>Title</p>
              <p className='flex font-thin text-xl'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            </div>
            <div className='flex-col w-1/2 bg-yellow-500' id="image">
              <p className='flex justify-center items-center'>Picture</p>
            </div>
          </div>

          <div className='flex w-full h-1/2' id="project_layout">
            <div className='flex-col w-1/2 space-y-5' id='description'>
              <p className='flex font-normal text-5xl'>Title</p>
              <p className='flex font-thin text-xl'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            </div>
            <div className='flex-col w-1/2 bg-yellow-500' id="image">
              <p className='flex justify-center items-center'>Picture</p>
            </div>
          </div>
          
        </div> */}

        <div className='grid grid-cols-2 w-full bg-gray-800 px-48 py-24 gap-y-24 gap-x-24'>
          <div className='flex-col w-full h-fit col-span-1 space-y-8 p-12 '>
            <p className='flex font-normal text-3xl justify-center'>Title like this long</p>
            <p className='flex font-thin text-lg'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            <p className='flex justify-end text-xl font-normal'>GitHub</p>
          </div>
          <div className='flex-col w-full h-[480px] col-span-1 bg-yellow-500'>
            <p className='flex justify-center'>picture</p>
          </div>

          <div className='flex-col w-full h-[480px] col-span-1 bg-yellow-500'>
            <p className='flex justify-center'>picture</p>
          </div>
          <div className='flex-col w-full h-fit col-span-1 space-y-5 p-12'>
            <p className='flex font-normal text-3xl justify-center'>Title</p>
            <p className='flex font-thin text-lg'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            <p className='flex justify-end text-xl font-normal'>GitHub</p>
          </div>
          
          <div className='flex-col w-full h-fit col-span-1 space-y-8 p-12 '>
            <p className='flex font-normal text-3xl justify-center'>Title like this long</p>
            <p className='flex font-thin text-lg'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
            <p className='flex justify-end text-xl font-normal'>GitHub</p>
          </div>
          <div className='flex-col w-full h-[480px] col-span-1 bg-yellow-500'>
            <p className='flex justify-center'>picture</p>
          </div>

        </div>

        <div className='flex h-fit w-full bg-gray-900 p-4 justify-center space-x-1'>
          <p className='font-thin'>🖥️ Created by niekky</p>
          <p>|</p>
        <Link href={"https://github.com/niekky/Folium"} className='font-medium hover:font-bold'>Folium GitHub 🚀</Link>
        
      </div>
        
      </div>
      
      

    </div>
  )
}
