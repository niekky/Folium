import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='relative w-full h-full'>
        
        <div className='w-full h-full bg-[url("/P3253047_DxO.jpg")] bg-cover bg-center]'>
        <nav>
          <div className='justify-between px-20 py-6 hidden w-full md:block md:w-auto' id="top_bar">
            <ul className="flex justify-end font-normal text-2xl flex flex-col md:flex-row md:space-x-12">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
              <li>
                <a href="contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
              </li>
            </ul>
          </div>
        </nav>
          <div className='grid grid-cols-2 gap-2 backdrop-blur-sm'>
              <div className='flex justify-center items-center h-screen'>
                <div>
                  <h1 className='text-left text-6xl px-20 font-thin'>Hi, my name is ipsum lorem</h1>
                  <p className='text-left text-8xl px-20 font-normal'>This is my Folium</p>
                </div>
                
              </div>
          </div>
        </div>

        <div className='flex h-fit w-full bg-gray-700 space-x-16 py-12 px-48' id="user_layout">
          
          <div className='rounded-full h-64 w-64 bg-gray-100' id="avatar"></div>

          <div className='flex-col min-w-screen m-10 space-y-5'>
            <p className='text-2xl font-medium'>Mr.AvionicsSkunk</p>
            <p className='text-lg font-light w-2/3'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem sdasdasd asda sda sda sda sda sda sda sd</p>
          </div>
          
        </div>
        
        <div className='flex-col h-fit w-full bg-gray-800 py-16' id="projects_layout">
          <p className='flex justify-left text-6xl font-medium pb-6 px-24'>Projects</p>
          <p className='flex justify-left text-lg font-thin pb-12 px-24 w-2/3'>Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem </p>
          <div className='flex h-96 w-full justify-center px-24 py-6'>
            <button className='w-1/3 bg-blue-500 hover:bg-blue-700 hover:shadow-inner-xl text-3xl font-thin hover:font-normal'>Embedded & Rocketry</button>
            <button className='w-1/3 bg-yellow-500 hover:bg-yellow-700 text-3xl font-thin hover:font-normal'>Software Application</button>
            <button className='w-1/3 bg-red-500 hover:bg-red-700 text-3xl font-thin hover:font-normal'>AI Research</button>
          </div>
        </div>

        <div className='flex h-fit w-full bg-gray-900 p-4 justify-center space-x-1'>
          <p className='font-thin'>🖥️ Created by niekky</p>
          <p>|</p>
          <button className='font-medium hover:font-bold'>Folium GitHub 🚀</button>
        </div>
      </div>
      
    </main>
    
  )
}
