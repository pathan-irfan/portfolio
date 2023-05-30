import React from 'react'
import About from './About'
import Resume from './Resume'
import Skill from './Skill'
import Btntop from './Btntop'
import Contact from './Contact'
const Home = () => {
 

  const down = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  
  return (
    
    <div>
       
   
      <header className='header'>
       
      <div id='new'>
         <div className='NAME ' id='home'>
         
        <center> <h1>I'm irfan pathan .</h1></center> 
        <center> <p>I'm <span className='whitecolor'>irfan pathan</span>  i am web developer i am <span className='whitecolor'>certified</span> mern full stack developer <br/>  now i 
          am serching <span className='whitecolor'>chalenging job</span> for built  my career <br/>and i have done gradution  in B.A </p></center>
        </div>
        <div className="icon">
              <center>
               
                     <a href='https://github.com/pathan-irfan'><i class="fa-brands fa-github"></i></a>
                <a href='https://twitter.com/IrfanPa72868764 '>   <i className="fa-brands fa-twitter"></i></a>  
                <a href='https://www.linkedin.com/in/irfan-pathan-8813a026a/'>    <i className="fa-brands fa-linkedin"></i></a>
                    <i className="fa-brands fa-instagram"></i>
                   
              </center>
          </div>

          <div class="arrow">
     <center>   <button onClick={down}> <i class="fa-sharp fa-regular fa-circle-down"> scroll Down </i> </button></center>   
                 </div>
               
                 <Btntop/>
                 </div>
                
           </header>
          
      <About/>
      <Resume/>
      <Skill/>
      <Contact/>
    </div>
    
    

  )
}

export default Home
