import React from 'react'

const Btntop = () => {

const scroll =()=>{

    window.scrollTo({top:0,left:0 ,bihevior:"smooth"})
}

  return (

     
   
      <div className='button'>
    <button onClick={scroll} className='btntop'><i class="fa-solid fa-arrow-up-long"></i>



</button>
      </div>
   
  )
}
export default Btntop



