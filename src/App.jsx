import { useState, useEffect } from 'react'
import {FaQuoteLeft, FaTwitter, FaWhatsapp} from 'react-icons/fa'

function App() {  
  let colors = ['#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857','#C9F3AB','#0059A5','#173F01','#d1c691','#FF84A1', '#16a085']
  
  
  const [quotes, setQuotes] = useState([]);
  const [current, setCurrent] = useState("Whatever the mind of man can conceive and believe, it can achieve.")
  const [author, setAuthor] = useState("Napoleon Hill")
  const [bgColor, setBgColor] = useState(colors[Math.floor(colors.length * Math.random())])
  
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then(data => setQuotes(data.quotes))
  }, [])
  
  //Varibles
  //let quoteLength = quotes.length
  let index = Math.floor(102* Math.random())
  
  function newQuote(e) {
    e.preventDefault
    setBgColor(prev => colors[Math.floor(colors.length * Math.random())])
    
    setCurrent(quotes[index].quote)
    setAuthor(quotes[index].author)
  }
  const styles = {backgroundColor: `${bgColor}`}
  const textstyle = {color: `${bgColor}`}//*/}
  return (
    <section className='grid place-content-center h-screen' style={styles}>
      <div className="py-7 px-6 md:p-12 bg-white md:rounded-lg md:w-[500px] shadow-lg" style={textstyle}>
        <h1 className='md:text-2xl text-3xl flex'><FaQuoteLeft  className='text-4xl mt-[-7px] pr-1'/>{current}</h1>
        <p className='text-right text-xl md:text-lg p-1 font-semibold'>-{author}</p> 
        <div className=" flex flex-row justify-between md:mt-[25px] mt-[15px]">
          <div className='flex flex-row space-x-3'>
          <a title="Tweet this quote!" className='text-lg text-white w-[40px] p-3 rounded-lg hover:opacity-80' href={`https://twitter.com/intent/tweet?text=${current}%20%20%2D${author}`} style={styles}><FaTwitter /></a>
          <a title="Share on Whatapp" className='text-white w-[40px] text-lg p-3 rounded-lg hover:opacity-80' href={`//api.whatsapp.com/send?text=${current}%20%20%2D${author}`} style={styles} ><FaWhatsapp /></a>
          </div>
          <button onClick={newQuote} className='text-white py-2 px-3 rounded-lg focus:outline-none hover:opacity-80' style={styles}>New Quote</button>
        </div>
      </div>
    </section>
  )
}

export default App
