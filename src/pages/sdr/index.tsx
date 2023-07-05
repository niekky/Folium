import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const isBrowser = () => typeof window !== 'undefined';


function scrollToProject(){
  if (!isBrowser()) return;
  window.scrollTo({ top: 730, behavior: 'smooth' });
}

function display_project(desc: string, img: string){
  return (
    <div className='flex-col h-[420px]'>
      <div className='flex bg-blue-500 w-full h-5/6 transition ease-in-out duration-300 hover:scale-110 hover:bg-opacity-50' id='project_img'>
        <div className='flex-col w-full h-full p-12 space-y-3 opacity-0 hover:opacity-100' id='project_desc'>
          <p className='text-2xl font-normal'>DescriptionName:</p>
          <p className='font-thin'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
          {/* <Link href={""} className='hover:font-medium'>Status: Null</Link> */}
        </div>
      </div>
      <p className='flex h-1/6 w-full text-center justify-center text-xl items-center' id='project_name'>Description</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className='Parent'>
      <div className='flex-col w-full bg-gray-600'>
        
        <div className='flex-col w-full bg-[url("/img/flightcomputer.png")] bg-center bg-cover' id='intro_background'>
          <div className='flex-col w-full h-full backdrop-brightness-50'>
            <nav id="top_bar">
              <div className='justify-between px-24 py-6 hidden w-full md:block md:w-auto'>
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
            <p className='flex font-medium text-6xl px-48 py-36'>Embedded Software & Rocketry</p>
          </div>
          
        </div>
        
        <div className='flex-col w-full h-fit bg-gray-700 px-48 py-24 space-y-4' id='detail'>
          <p className='flex font-medium text-3xl'>Overview</p>
          <p className='flex font-thin text-lg w-2/3'>ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
        </div>
       
        <div className='flex-col w-full h-fit bg-gray-800'>
          <button onClick={scrollToProject} className='flex w-full font-thin justify-center text-3xl p-12 hover:font-normal'>Projects ↓</button>
          <div className='flex w-full h-fit'>
            <div className='grid grid-cols-2 w-full bg-gray-900 mx-48 mt-12 mb-32 py-24 px-32 gap-x-16 gap-y-24'>
             {display_project("","")}
             {display_project("","")}
             {display_project("","")}
             {display_project("","")} 
            </div>
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
