import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-around p-24">

      <header
        className='text-center  mb-10'
      >
        <h1
          className='text-4xl mb-10 font-sans'>
          Matheus Alves
        </h1>
        <p className={`m-0 max-w-[30ch] text-base opacity-50`}>
          Full Stack Developer.
        </p>

      </header>


      <Image
        className="relative"
        src="/m.png"
        alt="matheus"
        width={450}
        height={0}
        priority
      />



      <div className="mb-32  text-center lg:grid lg:mb-0 lg:grid-cols-2 lg:text-left underline decoration-wavy decoration-4 underline-offset-8 decoration-cyan-400">
        <a
          href="https://github.com/matheAlves"
          className="group px-5 py-9 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github{' '}
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
            Linkedin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  )
}
