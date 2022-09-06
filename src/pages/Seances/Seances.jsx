import React from 'react'

export const Seances = () => {
  return (
    <div className="container intro">

    <h1>Les séances</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <img src={require('../../assets/img/galerie/home4.jpg')} className="HeroImage Left" alt="img"/>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Séances</h6>
        <h3 className="_BgSubTitle Left">Séance type</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Le matériel</h6>
        <h3 className="_BgSubTitle Right">Le matériel</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Planification</h6>
        <h3 className="_BgSubTitle Left">Planification</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Horaires</h6>
        <h3 className="_BgSubTitle Right">Horaires</h3>
      </div>
  
  </div>
  )
}
