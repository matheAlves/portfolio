import Image from 'next/image'

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col fade-in-from-left justify-center'
    >
      <section
        className="flex flex-col lg:flex-row items-center justify-around p-20"
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
          className="relative"
          src="/m.png"
          alt="matheus"
          width={450}
          height={0}
          priority
        />



        <div className="mb-32 text-center lg:grid lg:mb-0 lg:grid-cols-2 lg:text-left underline decoration-wavy decoration-4 underline-offset-8 decoration-cyan-400 fade-in-from-left-delayed">
          <a
            href="https://github.com/matheAlves"
            className="group px-5 py-9 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              github{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="https://www.linkedin.com/in/mathealves/"
            className="group px-5 py-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              linkedin{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>

      </section>


      <p className={`m-0 max-w-[30ch] text-base opacity-50 self-center`}>
        em construção. ©2023
      </p>
    </main>
  )
}
