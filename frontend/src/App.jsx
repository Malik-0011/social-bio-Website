import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../public/components/Card'
import { Camera, Cpu, FolderGit2, Info, LayoutGrid, Pen, ShoppingCart, Wrench } from 'lucide-react';

function App() {
  const [productlinks, setProductlinks] = useState([])

  const cardData = [
    {
      title: "Products I Use",
      icon: <ShoppingCart />,
      link: "www.instagram.com"

    },
    {
      title: "Useful Apps",
      icon: <LayoutGrid />,
      link: "www.instagram.com"

    },
    {
      title: "Useful Tools",
      icon: <Wrench />,
      link: "www.instagram.com"

    }
  ];

  useEffect(() => {
    {
      axios.get('/api/links')
        .then((response) => {
          setProductlinks(response.data)   //not -> setProductlinks(response)
          // console.log(response.data);

        })
        .catch((error) => {
          console.log(error);
        })
    }
  }, [])

  return (
    <div className='bg-black min-h-screen flex flex-col items-center p-10'>
      <div className=''>
        <img
          src="/profile.jpg" alt=""
          className='w-50 h-50 rounded-full object-cover'
        />
      </div>
      <h1 className='text-white mt-2 font-semibold '>@junaid_malik0011</h1>
      <h2 className='text-white/60 mt-1'>Building things | Learinig | Exploring</h2>
      <div className='mt-4 flex gap-3 w-full'>
        {/* <a href="" className='px-4 py-2 flex font-medium bg-gray-900 rounded-lg text-white justify-center items-center gap-1'>
          <img src="/instagram.png" alt="Instagram" className='h-5 w-5 bg-white rounded-full object-cover p-[1px]' />
          Insta
        </a> */}
        <a href="" className='px-4 py-2 flex flex-1 font-medium bg-gray-900 rounded-lg text-white justify-center items-center gap-1 '>
          <img src="/github.png" alt="Github" className='h-5 w-5 bg-white rounded-full p-[1px]' />
          Github
        </a>
        <a href="" className='px-4 py-2 flex flex-1 font-medium bg-gray-900 rounded-lg text-white justify-center items-center gap-1 '>
          <Info className='h-5 w-5' />
          About
        </a>
      </div>
      <div className='w-full mt-2'>
        <a href="/api/projects">
          <Card
            title={"My Work"}
            icon={<Cpu />}
          />
        </a>
      </div>

      <h2 className='text-white mt-10'>--Recommendations--</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto mt-3 cursor-pointer">
        {
          cardData.map((item, index) => (
            <a href={item.link} key={index}>
              <Card
                title={item.title}
                icon={item.icon}
              />
            </a>
          ))
        }
      </div>


      {/* {
      productlinks.map((link, index)=>(
        <div key={index}>
          <h2>{link.title}</h2>
          <h2>{link.link}</h2>
        </div>
      ))
      } */}

    </div>
  )
}

export default App
