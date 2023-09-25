import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constences/constences'
import './Banner.css'
import axios from '../../axios'


function Banner() {
    const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      // console.log(results[randomIndex])
      setMovie(results[randomIndex])
    })
  }, [])
  

  return (
    <div className='banner banner-resized'
     style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}} loading="lazy" >
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ''}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview: ""}</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
    </div>
  )
}

export default Banner
