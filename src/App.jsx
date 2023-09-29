import React from 'react'
import './App.css'
import profile from './images/profile.jpeg'
import data from './data'
const App = () => {
  return (
    <div>
      <>
      <div id="loader-wrapper" class="loader-wrapper">
    <div id="loader" class="loader box-loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
  <a href='https://scalant.in' target='_blank' className="container">
    <img style={{zIndex:'100', height:'9.5rem'}}  className="profile" src={profile} />
  </a>
  <div style={{marginTop:'2.5rem', marginBottom:'0px'}} className="text">
    <p style={{color:'#fff', fontSize:'2rem', fontWeight:'600', marginBottom:'0px'}}>SCALANT</p>
  </div>
  <div className="box">
    <div className="links">
     
    <a
        className="button"
        target="_blank"
        href= {data.discord}
      >
        <div className="link2  link_profile">
          <i className="icons uil uil-discord" />
          <p className="info">Discord</p>
        </div>
      </a>

      
      <a
        className="button"
        target="_blank"
        href= {data.github}
      >
        <div className="link1  link_profile">
          <i className="icons uil uil-github" />
          <p className="info">Github</p>
        </div>
      </a>

     
      <a
        className="button"
        target="_blank"
        href= {data.linkedln}
      >
        <div className="link2  link_profile">
          <i className="icons uil uil-linkedin" />
          <p className="info">LinkedIn</p>
        </div>
      </a>

     
      <a
        className="button"
        target="_blank"
        href= {data.instagram}
      >
        <div className="link5  link_profile">
          <i className="icons uil uil-instagram" />
          <p className="info">Instagram</p>
        </div>
      </a>
      
     
      <a
        className="button"
        target="_blank"
        href={data.twitter}
      >
        <div className="link6  link_profile">
          <i className="icons uil uil-twitter" />
          <p className="info">Twitter</p>
        </div>
      </a>
    </div>
  </div>
</>

    </div>
  )
}

export default App