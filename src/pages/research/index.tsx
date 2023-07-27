import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const isBrowser = () => typeof window !== 'undefined';

function display_project(name: string, desc: string, img: string){
  return (
    <div className='flex-col h-[420px]'>
      <div className='flex bg-red-500 w-full h-5/6 transition ease-in-out duration-300 hover:scale-110 hover:bg-opacity-50' id='project_img'>
        <div className='flex-col w-full h-full p-12 space-y-3 opacity-0 hover:opacity-100' id='project_desc'>
          <p className='text-2xl font-normal'>{name}:</p>
          <p className='font-thin text-sm'>{desc}</p>
          {/* <Link href={""} className='hover:font-medium'>Status: Null</Link> */}
        </div>
      </div>
      <p className='flex h-1/6 w-full text-center justify-center text-xl items-center' id='project_name'>{name}</p>
    </div>
  )
}

function scrollToProject(){
  if (!isBrowser()) return;
  window.scrollTo({ top: 730, behavior: 'smooth' });
}

export default function Home() {
  return (
    <div className='Parent'>
      <div className='flex-col w-full bg-gray-600 text-white'>
        
        <div className='flex-col w-full bg-[url("/img/AIsample.jpg")] bg-cover bg-center' id='intro_background'>
          <div className='flex-col w-full h-full backdrop-brightness-50'>
            <nav className='bg-gray-900 bg-opacity-25' id="top_bar">
              <div className='justify-between px-24 py-2 hidden w-full md:block md:w-auto'>
                <ul className="flex justify-end font-normal text-xl flex flex-col md:flex-row md:space-x-12">
                  <li>
                    <Link href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
                  </li>
                  <li>
                    <Link href='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Projects</Link>
                  </li>
                  <li>
                    <Link href="contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <p className='flex font-medium text-3xl md:text-4xl xl:text-6xl px-12 md:px-24 xl:px-48 py-36'>AI Works and Research</p>
          </div>
        </div>
        
        <div className='flex-col w-full h-fit bg-gray-700 px-12 md:px-24 xl:px-48 py-24 space-y-4' id='detail'>
          <p className='flex font-medium text-xl md:text-3xl'>Overview</p>
          <p className='flex font-thin text-sm md:text-lg w-2/3'>This cover basic Data Science and Machine Learning, Natural Language Processing, and Large Language Modelling. These projects are often made for research and competition purposes.</p>
        </div>
       
        <div className='flex-col w-full h-fit bg-gray-800'>
          <button onClick={scrollToProject} className='flex w-full font-thin justify-center text-3xl p-12 hover:font-normal'>Projects ↓</button>
          <div className='flex w-full h-fit'>
            <div className='grid grid-cols-2 w-full bg-gray-900 xl:mx-48 mt-12 mb-32 py-24 px-16 xl:px-32 gap-x-16 gap-y-24'>
              <div className='flex-col h-[240px] sm:h-[420px] transition ease-in-out duration-300 hover:scale-110'>
                <div className='flex bg-[url("/pr_img/vivy.png")] bg-cover bg-center w-full h-5/6 transition ease-in-out duration-300 hover:bg-opacity-50' id='project_img'>
                  <div className='flex-col w-full h-full p-3 md:p-12 backdrop-brightness-50 backdrop-blur-sm space-y-3 opacity-0 hover:opacity-100 overflow-auto' id='project_desc'>
                    <p className='text-xs sm:text-xl xl:text-2xl font-normal'>VIVYNet, Text-to-Music Generative AI Model</p>
                    <p className='text-xs xl:text-base font-thin'>Researching on leveraging Transformers Encoder-Decoder and Large Language Model architectures to create a multimodal text to music generative AI model. Specifically, we are examining our concept performance when text-based AI encoder is merged with music-based AI decoder. This project currently involves the use of many research Python libraries such as Fairseq, FastTransformer, and PyTorch, and will be trained on a dataset with more than 100,000 samples.</p>
                  </div>
                </div>
                <p className='flex w-full text-center justify-center text-xs sm:text-xl items-center p-2' id='project_name'>VIVYNet, Text-to-Music Generative AI Model</p>
              </div>
              <div className='flex-col h-[240px] sm:h-[420px] transition ease-in-out duration-300 hover:scale-110'>
                <div className='flex bg-[url("/pr_img/air.webp")] bg-center bg-cover w-full h-5/6 transition ease-in-out duration-300 hover:bg-opacity-50' id='project_img'>
                  <div className='flex-col w-full h-full p-3 md:p-12 backdrop-brightness-50 backdrop-blur-sm space-y-3 opacity-0 hover:opacity-100 overflow-auto' id='project_desc'>
                    <p className='text-xs sm:text-xl xl:text-2xl font-normal'>Layer.ai Air Quality Prediction</p>
                    <p className='text-xs xl:text-base font-thin'>
                      * Investigated and predicted air quality for Uganda in the Layer.ai contest.<br></br>
                      * Processed the tabular dataset by filling in missing values, scaling data, converting categorical values, dropping overfitting features, which helped reduce Mean Absolute Error score from 20 to 17. <br></br>
                      * Trained and tuned the neural network to fit the dataset, which improved our score from 17 to 16.69</p>
                  </div>
                </div>
                <p className='flex  w-full text-center justify-center text-sm sm:text-xl items-center p-2' id='project_name'>Layer.ai Air Quality Prediction</p>
              </div>
              <div className='flex-col h-[240px] sm:h-[420px] transition ease-in-out duration-300 hover:scale-110'>
                <div className='flex bg-[url("/pr_img/maplebot.png")] bg-cover bg-left w-full h-5/6 transition ease-in-out duration-300 hover:bg-opacity-50' id='project_img'>
                  <div className='flex-col w-full h-full p-3 md:p-12 backdrop-brightness-50 backdrop-blur-sm space-y-3 opacity-0 hover:opacity-100 overflow-auto' id='project_desc'>
                    <p className='text-xs sm:text-xl xl:text-2xl font-normal'>MapleBot</p>
                    <p className='text-xs xl:text-base font-thin'>Developed the Vietnamese chat bot in Python using TensorFlow, Firebase, and Neo4j that could help students cope better with stress, loneliness during COVID quarantine, and study better with less procrastination. Designed a custom Bi-gram algorithm and Word2Vec embedding layer to specifically process Vietnamese text dataset, which increased language comprehension more than 25%. Implemented a multi-task model that performs Intent Classification, POS Tagging, and Knowledge Reasoning with BiLSTM and Neo4j graph database, which achieved 80% in accuracy.</p>
                  </div>
                </div>
                <p className='flex w-full text-center justify-center text-sm sm:text-xl items-center p-2' id='project_name'>MapleBot</p>
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
      
      

    </div>
  )
}
