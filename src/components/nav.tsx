import { useGSAP } from "@gsap/react"
import gsap from "gsap/all"
import { useState } from "react"

type Props = {}

const Nav = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)


  useGSAP(() => {
    const navTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.nav',
        start: '5% top',
        end: 'bottom top',
        scrub: true,
      },
    })

    navTl.fromTo('.nav', {
      opacity: 0,
    }, {
      position: 'fixed',
      opacity: 1,
      duration: 1,
      ease: 'power2.in',
      
      
      
     
    })
    navTl.fromTo('#nav-container', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.in',
    })
    

  })

  return (
     <header className="absolute top-0 left-0 w-full z-10 p-6 md:p-8  bg-blend-overlay  opacity-0 nav">
        <div id="nav-container" className="flex  justify-between items-center ">
        
            {/* Logo */}
            <div className="text-black font-bold text-2xl  md:text-4xl tracking-tight">
                S-R
            </div>
            
            {/* Hamburger Menu */}
            <div className="hamburger cursor-pointer">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
        </div>
    </header>
  )
}

export default Nav