import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {watchImg, rightImg} from "../utils";
import VideoCaroisel from '../components/VideoCarousel'

const Highlights=() => {
useGSAP(()=>{
  gsap.to('#title',{
    opacity: 1, y: 0}),
  gsap.to('.link', {
    opacity: 1, y: 0, duration: 1, stagger: 0.25  })
},[])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
      <div className="mb-12 w-full md:flex items-end justify-between">
        <h1 id="title" className="section-heading">
        Get the highlights.</h1>
        <div className=' flex flex-wrap items-end gap-5'>
          <p className="link">Watch the Movie</p>
          <img className='ml-2' src={watchImg} alt='watch'>
          </img>
          <p className="link">Watch the Event</p>
          <img className='ml-2' src={rightImg} alt='right'>
          </img>
        </div>
      </div>
      <VideoCaroisel>

      </VideoCaroisel>
      </div>
    </section>
  )
}

export default Highlights