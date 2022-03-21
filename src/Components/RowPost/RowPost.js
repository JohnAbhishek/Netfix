import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube' 
import { API_KEY, imageUrl } from '../../Constants/Constant'
import './RowPost.css'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,seturlId]=useState([])
  useEffect(()=>{
axios.get(props.url).then((response)=>{
  console.log(response.data)
  setMovies(response.data.results)
})
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
  },
};

const handleMovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!==0){
seturlId(response.data.results[0])
    }else{
      alert("trailer illaaaa")
    }
  })
}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((film,k)=>
              <img onClick={()=> handleMovie(film.id)} className={props.isSmall?'smallPosters':'poster'} src= {`${imageUrl+film.backdrop_path}`} alt='rowposters'></img>

            )
          }
           
        </div>
      { urlId  && <Youtube opts={opts} videoId={urlId.key} />}

        </div>
  )
}

export default RowPost