import React from 'react'
import "./Main.scss"
import { Link} from 'react-router-dom'
import { useState } from 'react'

function Main() {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
    const quotedata = [
        {
            "quote": "The way to get started is to quit talking and begin doing. -Walt Disney",  
        },
        {
            "quote":"Imagination is more important than knowledge. -Albert Einstein"
        },
        {
            "quote":"If you know pain and hardship, it’s easier to be kind to others. -Ryoji Kaji"
        },
        {
           "quote":"It isn't the mountains ahead that wear you down. It's the pebble in your shoe. -Muhammed Ali"
        },
        {
          "quote":"Have patience. Go where you must go, and hope! -Gandalf"
        },
        {
          "quote":"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. -Steve Jobs"
        }
    ]
    const[quotes]=useState(quotedata)
    const[number]=useState(randomNumberInRange(0, quotes.length-1))
  return (
    
    <div className='Main' >
      <div className='Header'>
        <h1>HOW LONG TO DO</h1> 
        <p className='quotes'>Find Out How Much Do You Work</p>
        <p className='quotes'>{quotes[number].quote}</p>
        <p className='quotes'>Select Your Theme:</p>
        <div className='Theme'>
            <li><Link className=' Link' to={"/Gow"}> <p className='theme'>Gow Ragnarok</p></Link></li>
            <li><Link className='Link' to={"/ClassicMusic"}> <p className='theme'>Classic Music</p> </Link></li>
            <li><Link className='Link' to={"/LordofTheRings"}> <p className='theme'>Lord of The Rings</p></Link></li>
            <li><Link className='Link'to={"/StarWars"}> <p className='theme'>StarWars</p></Link></li>
            <li><Link className='Link'to={"/Berserk"}> <p className='theme'>Berserk</p></Link></li>
            <li><Link className='Link' to={"/Evangelion"}><p className='theme'>Evangelion</p></Link></li> 
        </div>
      </div>
      
    </div>
  )
}

export default Main