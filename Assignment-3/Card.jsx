import React from 'react'
import data from './assets/newData.json'

const Card = () => {
  return (
    
<div className='bg'>
<div className='d-flex flex-wrap justify-content-around'>
{data.map((d,i)=>{return(
<div className='card m-5' key={i} style={{width:"300px"}}>
  <img className='card-img-top' src={d.picture} alt='This is an image'></img>


      <div className='card-body'>
      <h1 className='card-title'>{d.name.title} {d.name.first}</h1>
      <p className='card-text mb-0'>{d.cell}</p>
      <p className='card-text mb-0'>{d.location.city},{d.location.state}</p>
      <p className='card-text'>{d.location.country}</p>
      <a href='#'className='card-text'>{d.email}</a>
</div>


    </div>
)

})}
</div>
</div>


  )
}

export default Card


