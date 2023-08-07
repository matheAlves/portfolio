'use client'

import Image from 'next/image'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import './page.css'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const lenis = useLenis(({ scroll }) => {
    console.log('hey')
  })
  
  gsap.to(".main-image", {
    x: -600,
    opacity: 0,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: ".nav-bar",
      start: "top top",
      scrub: 2,
    },
  })

  gsap.to(".nav-bar", {
    y: -400,
    scrollTrigger: {
      toggleClass: "sticky",
      trigger: ".nav-bar",
      start: "-1 top",
      end: "+=2000",
      scrub: 2,

    },
  })

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },)

  return (
    <ReactLenis
      options={{
        smoothTouch: true, // Enable smooth scrolling for touch events.
        syncTouch: true, //
        lerp: 0.1, // Lower values create a smoother scroll effect
        smoothWheel: true // Enables smooth scrolling for mouse wheel events
      }}
      root>
      <main
        className='flex min-h-screen flex-col fade-in-from-left justify-center switch'
      >
        <section
        className='bg-blue-400'
        >
          <div
            className='mg-80 nav-bar flex flex-col lg:flex-row items-center justify-around p-20 h-screen '>
            <div
              className='text-center mb-10 name'
            >
              <h1
                className='text-5xl mb-10 font-sans'>
                Matheus Alves
              </h1>
              <p className={`m-0 max-w-[30ch] text-base opacity-50`}>
                full stack developer.
              </p>
            </div>

            <Image
              className="main-image"
              src="/m.png"
              alt="matheus"
              width={450}
              height={0}
              priority
            />

            <div className="mb-32 text-center lg:grid lg:mb-0 lg:grid-cols-2 lg:text-left fade-in-from-left-delayed links">
              <a
                href="https://github.com/matheAlves"
                className="group px-5 py-9 hover:underline decoration-wavy decoration-4 underline-offset-8 decoration-lime-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  github{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none fade-in-from-left-delayed">
                    -&gt;
                  </span>
                </h2>
              </a>

              <a
                href="https://www.linkedin.com/in/mathealves/"
                className="group px-5 py-9 hover:underline decoration-solid decoration-4 underline-offset-8 decoration-cyan-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  linkedin{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none fade-in-from-left-delayed">
                    -&gt;
                  </span>
                </h2>
              </a>
            </div>
          </div>
        </section>

        <section
          className='h-screen bg-purple-400'
        >
          <p className={`m-0 max-w-[30ch] text-base opacity-50 self-center v-`}>
            2
          </p>
        </section>
        <section
          className='flex h-screen justify-center bg-emerald-400'
        >
          <p className={`m-0 max-w-[30ch] text-base opacity-50 self-center v-`}>
            3
          </p>
        </section>
        <section
          className='flex h-screen justify-center bg-blue-400 content-end'
        >
          <footer className={`m-0 max-w-[30ch] text-base opacity-50 self-center v- footer`}>
            em construção. © 2023
          </footer>
        </section>
      </main>
    </ReactLenis>
  )
}
