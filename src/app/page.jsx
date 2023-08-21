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

  // const lenis = useLenis(({ scroll }) => {
  //   console.log('hey')
  // })

  useEffect(() => {
    window.scrollTo(0, 0)
    const keywords = document.querySelectorAll(".keyword")
    keywords.forEach(el => {
      // el.style.marginLeft = `${Math.floor(Math.random() * 5)}rem`
      // el.style.marginTop = `${Math.floor(Math.random() * 5)}rem`
      // el.style.marginBottom = `${Math.floor(Math.random() * 2)}rem`
      return gsap.fromTo(el,
        {
          y: Math.floor(Math.random() * (1000 - 1000) + 1000),
        },
        {
          y: Math.floor(Math.random() * (-1000 - -7000 + 1)) + -7000,
          scrollTrigger: {
            endTrigger: ".screen-4",
            trigger: ".links",
            start: "bottom center",
            end: "top center",
            scrub: true,
          }
        })

    })

    gsap.to(".main-image", {
      x: -600,
      opacity: 0,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".main-image",
        start: "top top",
        scrub: 2,
      },
    })

    gsap.to(".nav-bar", {
      y: -400,
      scrollTrigger: {
        trigger: ".nav-bar",
        start: "top top",
        scrub: 2,
      },
    })

    gsap.to(".screen-4",
      {
        backgroundColor: "#7dd3fc",
        scrollTrigger: {
          trigger: ".screen-4",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
        }
      })


    gsap.fromTo(".text",
      { y: 1000 },
      {
        y: -1500,
        opacity: 0,
        scrollTrigger: {
          trigger: ".screen-2",
          start: "center center",
          pin: ".screen-2",
          pinSpacing: false,
          scrub: true,
        }
      })

    gsap.fromTo(".text-2",
      { y: 1000 },
      {
        y: -2000,
        opacity: 1,
        scrollTrigger: {
          endTrigger: ".screen-3",
          trigger: ".links",
          start: "bottom center",
          scrub: true,
        }
      })

    gsap.fromTo(".text-3",
      { y: 1000 },
      {
        y: -1000,
        opacity: 0,
        scrollTrigger: {
          endTrigger: ".screen-3",
          trigger: ".screen-2",
          start: "center center",
          scrub: true,
        }
      })
  })

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
        className='fade-in-from-left'
      >
        <section
          className='mg-80 nav-bar flex flex-col lg:flex-row items-center justify-around p-20 h-screen sticky text-white z-30'>
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
              className="group px-5 py-9 hover:underline decoration-wavy decoration-4 underline-offset-8 decoration-lime-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold links`}>
                github{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none fade-in-from-left-delayed">
                  -&gt;
                </span>
              </h2>
            </a>

            <a
              href="https://www.linkedin.com/in/mathealves/"
              className="group px-5 py-9 hover:underline decoration-solid decoration-4 underline-offset-8 decoration-fuchsia-300"
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
          className='h-screen bg-blue-300'
        >
        </section>
        <section
          className='flex flex-wrap  justify-around h-screen bg-purple-400 screen-2  z-40'
        >
          <p className={`  opacity-50  v-  text-white  keyword font-bold`} style={{ fontSize: '13rem' }} >
            CSS &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            Docker &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            Express &
          </p>

          <p className={`  opacity-50  v-  text-white  keyword`} style={{ fontSize: '13rem' }} >
            Git &
          </p>

          <p className={`  opacity-50  v-  text-white font-bold keyword`} style={{ fontSize: '13rem' }} >
            Javascript &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            SQL &
          </p>

          <p className={`  opacity-50  v-  text-white  keyword`} style={{ fontSize: '13rem' }} >
            Node &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            REST &
          </p>

          <p className={`  opacity-50  v-  text-white font-bold keyword`} style={{ fontSize: '13rem' }} >
            React &
          </p>

          <p className={`  opacity-50  v- text-white font-bold keyword`} style={{ fontSize: '13rem' }} >
            Web &
          </p>

          <p className={`  opacity-50  v-  text-white  keyword`} style={{ fontSize: '13rem' }} >
            Mobile &
          </p>

          <p className={`  opacity-50  v- text-white font-bold keyword`} style={{ fontSize: '13rem' }} >
            Fullstack &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            Agile &
          </p>

          <p className={`  opacity-50  v-  text-white  keyword`} style={{ fontSize: '13rem' }} >
            Python &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            Tests &
          </p>
          <p className={`  opacity-50  v-  text-white  keyword`} style={{ fontSize: '13rem' }} >
            Typescript &
          </p>

          <p className={`  opacity-50  v- text-white  font-bold keyword`} style={{ fontSize: '13rem' }} >
            APIs &
          </p>

          <p className={`  opacity-50  v- text-white  keyword`} style={{ fontSize: '13rem' }} >
            Databases &
          </p>

        </section>

        <section
          className='flex h-screen justify-center bg-emerald-300 screen-3'
        >
        </section>

        <section
          className='flex h-screen justify-center bg-emerald-300 screen-4 z-20'
        >
        </section>
        {/* <section
          className='flex h-screen justify-center bg-emerald-300 content-end '
        >
        </section> */}

        <section
          className='flex h-screen justify-center bg-sky-300 content-end'
        >
          <footer className={`m-0 max-w-[30ch] text-base opacity-50 self-center v- footer`}>
            em construção. © 2023
          </footer>
        </section>
      </main>
    </ReactLenis>
  )
}
