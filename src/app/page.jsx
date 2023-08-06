'use client'

import Image from 'next/image'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import './page.css'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const lenis = useLenis(({ scroll }) => {
    console.log('hey')
  })

  gsap.to(".main-image", {
    x: -600,
    // y: -500,
    ease: "power4.in",
    scrollTrigger: {
      trigger: ".main-image",
      start: "center center",
      // stop: "top top",
      pin: true,
      scrub: 1,
    },
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, )

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
          className="flex flex-col lg:flex-row items-center justify-around p-20 section-1 h-screen"
        >
          <div
            className='text-center  mb-10'
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
            className="relative main-image ml-20"
            src="/m.png"
            alt="matheus"
            width={450}
            height={0}
            priority
          />

          <div className="mb-32 text-center lg:grid lg:mb-0 lg:grid-cols-2 lg:text-left fade-in-from-left-delayed">
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
        </section>

        <section
          className='h-screen'
        >



        </section>
        <section
          className='flex h-screen justify-center content-end'
        >


          <p className={`m-0 max-w-[30ch] text-base opacity-50 self-center v-`}>
            em construção. © 2023
          </p>
        </section>

      </main>

    </ReactLenis>

  )
}
