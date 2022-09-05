import React from 'react'
import { Baseline } from '../../components/baseline/Baseline'
import { ButtonCTA } from '../../components/btn/Btn'
import { ColourSeparator } from '../../components/ColourSeparator/ColourSeparator'
import { PhotoSelf } from '../../components/PhotoSelf/PhotoSelf'
import '../../index.scss'

export const Home = () => {
  return (
    <div className="container intro">
      <h1>Bienvenue à la Roazhon Goal Academy !</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <ButtonCTA/>
      <Baseline/>
      <PhotoSelf/>
      <ColourSeparator/>
    </div>
  )
}
