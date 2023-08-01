import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <header
        className='text-center  mb-10'
      >
        <h1
          className='text-4xl mb-10 font-sans'>
          Matheus Alves
        </h1>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Web Developer.
        </p>

      </header>

      <Image
        className="relative"
        src="/m.png"
        alt="matheus"
        width={500}
        height={37}
        priority
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
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
