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

        <div className='flex-col h-fit w-full bg-gray-700 p-5' id="user_layout">
          <p>
            TODO: USER LAYOUT
          </p>
          
        </div>
        
        <div className='relative h-fit w-full bg-gray-500 p-5' id="projects_layout">
          <p>
            TODO: PROJECTS LAYOUT
          </p>
        </div>

      </div>
      
    </main>
    
  )
}
