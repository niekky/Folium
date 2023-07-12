import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop(){
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToProject(){
  if (!isBrowser()) return;
  window.scrollTo({ top: 1100, behavior: 'smooth' });
}

export default function Home() {
  return (
    <main>
      <div className='Parent'>
        
        <div className='w-full h-screen bg-[url("/img/mcbombpop.gif")] bg-cover bg-center'>
          <div className='flex-col w-full h-full justify-center items-center transition duration-700 ease-in-out backdrop-blur-lg backdrop-brightness-75 hover:backdrop-blur-none' id='background_blur'>
            <nav id="top_bar">
              <div className='justify-between px-24 py-4 hidden w-full md:block md:w-auto'>
                <ul className="flex justify-end font-normal text-2xl flex flex-col md:flex-row md:space-x-12">
                  <li>
                    <button onClick={scrollToTop} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</button>
                  </li>
                  <li>
                    <button onClick={scrollToProject} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</button>
                  </li>
                  <li>
                    <a href="contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className='flex-col w-full h-full px-32 py-96 transition translate-x-[-600px] hover:translate-x-0 ease-in-out duration-700' id='intro_caption'>
              <h1 className='text-left text-white text-4xl font-thin w-full'>Hi, my name is Nick Nguyen</h1>
              <p className='text-left text-white text-6xl font-medium'>This is my Folium</p>
            </div>
          </div>
        </div>
        

        <div className='flex h-fit w-full bg-gray-700 space-x-16 py-12 px-48' id="user_layout">
          
          <Link href={"/contact"} className='rounded-full h-64 w-64 bg-[url("/img/elephantmario.jpg")] bg-center transition ease-in-out duration-300 hover:scale-110' id="avatar"></Link>

          <div className='flex-col text-white min-w-screen m-10 space-y-5'>
            <p className='text-2xl font-medium'>Nick Nguyen</p>
            <p className='text-lg font-light '>
              A Sophomore majoring in Computer System Engineering at Arizona State University. Currently having an interest in and working on:  <br></br>
            - Deep Learning (currently LLM & Cross Modalities Learning)  <br></br>
            - Web Application Development <br></br>
            - Embedded Software for Rocket Avionics
            </p>
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
        
        <div className='flex-col h-fit w-full bg-gray-800 py-16 px-48 text-white' id="projects_layout">
          <p className='flex justify-left text-6xl font-medium pb-6'>Projects</p>
          <p className='flex justify-left text-lg font-thin pb-12 w-2/3'>Here are some of my finished/ongoing projects categorized in each field:</p>
          <div className='flex h-96 w-full justify-center py-6'>
            <Link href={"/sdr"} className='flex w-1/3 bg-[url("/img/flightcomputer.png")] bg-center bg-cover text-3xl font-thin items-center justify-center transition ease-in-out duration-300 hover:font-normal hover:shadow-inner-xl hover:scale-105 hover:-translate-x-3'>
              <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 items-center justify-center transition ease-in-out duration-300 hover:backdrop-blur-none'>
                Embedded & Rocketry
              </div>
            </Link>
            <Link href={"/application"} className='flex w-1/3 bg-[url("/img/softwaresample.jpeg")] bg-center bg-cover text-3xl font-thin items-center justify-center transition ease-in-out duration-300 hover:font-normal hover:shadow-inner-xl hover:scale-105 hover:-translate-y-1'>
              <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-75 items-center justify-center transition ease-in-out duration-300 hover:backdrop-blur-none'>
                Software Application
              </div>
            </Link>
            <Link href={"/research"} className='flex w-1/3 bg-[url("/img/AIsample.jpg")] bg-center bg-cover text-3xl font-thin items-center justify-center transition ease-in-out duration-300 hover:font-normal hover:shadow-inner-xl hover:scale-105 hover:translate-x-3'>
              <div className='flex w-full h-full backdrop-blur-sm backdrop-brightness-50 items-center justify-center transition ease-in-out duration-300 hover:backdrop-blur-none'>
                AI Research
              </div>
            </Link>
          </div>
        </div>

        <div className='flex h-fit w-full bg-gray-900 p-4 justify-center space-x-1 text-white'>
          <p className='font-thin'>🖥️ Created by niekky</p>
          <p>|</p>
          <Link href={"https://github.com/niekky/Folium"} className='font-medium hover:font-bold'>Folium GitHub 🚀</Link>
        </div>
      </div>
      
    </main>
    
  )
}
