import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

export default function HeroSection() {
  const containerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  // GSAP animation setup
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 1,
    })
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
      .fromTo(
        'img',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.3',
      )
      .fromTo(
        '#line-text',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.2 },
        '-=0.5',
      )
      .fromTo(
        'h1',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
        '-=0.5',
      )
      .fromTo(
        'nav p',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.2 },

        '-=0.5',
      )
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'clamp(1% center)',
        end: 'bottom -80%',
        scrub: true,
        pin: true,
        pinSpacing: false,
        pinType: 'fixed',
      },
    })
    heroTl.fromTo(
      '.shade',
      { opacity: 0 },
      { opacity: 0.6, duration: 1, ease: 'power3.out' },
    )
    heroTl.to(
      containerRef.current,
      {
        yPercent: -80 ,
        duration: 1,
     
      },
      '0',
    )
    return () => {
      tl.kill()
      heroTl.kill()
    }
  })

  return (
    <main
      ref={containerRef}
      className=" flex flex-col md:flex-row h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-10   shade opacity-0 w-full h-full bg-[#141414] " />
      {/* Left Panel */}
      <div className="w-1/2 flex flex-col-reverse basis-full mb-36 p-8  text-base">
        <p id="line-text" className=" max-w-xs leading-tight">
          I help designers and agencies elevate their branding with creative
          development support.
        </p>
        <p id="line-text" className=" font-semibold text-accent ">
          Digital Designer
        </p>
        <div
          id="line-text  "
          className="absolute -bottom-0 big-text
           text-[228.096px] z-10  w-full text-center leading-[164.5px] text-accent uppercase"
        >
          <h1>sire ralph</h1>
        </div>
      </div>

      <div className="w-1/2 basis-full relative flex flex-col-reverse px-4">
        <nav className="absolute top-12 tracking-tight left-10 text-left text-accent font-extrabold  text-xl">
          <p>Home</p>
          <p>About</p>
          <p>
            Work<span className="text-sm align-top">(6)</span>
          </p>
          <p>Contact</p>
        </nav>

        <div className="absolute inset-0  justify-center items-center">
          <img
            src="/assets/monye1.jpg"
            alt="Image by Ugo Monye"
            className="h-full  object-cover object-[40%_center] "
          />
        </div>

        {/* Optional: Decorative Flower Overlay */}
        {/* Add a positioned flower element here if needed */}
      </div>
    </main>
  )
}
