import { Link } from '@tanstack/react-router'



export default function HeroSection() {
  return (
    <main>
      {/* Left Panel */}
      <div className="w-1/2 bg-white flex flex-col justify-between p-12">
        <div>
          <p className="text-sm font-semibold text-gray-800">Digital Designer</p>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            I help designers and agencies elevate their branding with creative
            development support.
          </p>
        </div>
        <h1 className="text-[12vw] w-full leading-none font-black text-black">
          JOHN TAYLOR
        </h1>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 bg-gradient-to-b from-gray-100 to-gray-200 relative ">
        {/* Nav Menu */}
        <nav className="absolute top-12 left-10 text-left space-y-2 text-black font-bold  text-lg">
          <p>Home</p>
          <p>About</p>
          <p>
            Work<span className="text-sm align-top">(6)</span>
          </p>
          <p>Contact</p>
        </nav>

        {/* Profile Image */}
        <div className="absolute   inset-0  justify-center items-center">
          <img
            src="/assets/monye1.jpg"
            alt="Image by Ugo Monye"
            className="h-full object-cover object-center"
            
          />
        </div>

        {/* Optional: Decorative Flower Overlay */}
        {/* Add a positioned flower element here if needed */}
      </div>
    </main>
  );
}

  