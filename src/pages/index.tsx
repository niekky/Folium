import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const background_pic = "C:/Users/tnguy/Downloads/230209161313-01-spacex-full-static-test-fire-0209-screenshot.jpg;base64"
  return (
    <main>
      <div className='relative w-full h-screen'>
        <div className='w-full h-full bg-[url("/P3253047_DxO.jpg")] bg-cover bg-center]'>
          <div className='grid grid-cols-2 gap-2 backdrop-blur-sm'>
              <div className='flex justify-center items-center h-screen'>
                <div>
                  <h1 className='text-left text-6xl px-20 font-thin'>Hi, my name is ipsum lorem</h1>
                  <p className='text-left text-8xl px-20 font-normal'>This is my Folium</p>
                </div>
                

              </div>
          </div>
        </div>
      </div>
      
    </main>
    
  )
}
