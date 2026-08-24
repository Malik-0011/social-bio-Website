import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [productlinks, setProductlinks] = useState([])

  useEffect(() => {
    {
          axios.get('/api/links')
          .then((response)=>{
            setProductlinks(response.data)   //not -> setProductlinks(response)
            console.log(response.data);
            
          })
          .catch((error)=>{
            console.log(error);
          })
        }
  },[])

  return (
    <>
      <div>
        <h1>hllw</h1>
      </div>
      {
      productlinks.map((link, index)=>(
        <div key={index}>
          <h2>{link.title}</h2>
          <h2>{link.link}</h2>
        </div>
      ))
      }
       
    </>
  )
}

export default App
