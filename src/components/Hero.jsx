

const Hero = () => {
    return (
      <section
        id="hero"
      >
        <img className="flex absolute -z-10 w-full h-[1000px] object-cover" src="/hero.jpg" alt="" />
        <div className="flex h-screen items-center">
            <div className="relative text-white max-w-4xl px-6 md:px-20 py-20 bg-zinc-100/70 ">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Best Solution For Your Home</h1>
                <p className="text-lg md:text-xl text-gray-700">
                Looking to refresh your living space? We offer tailored interior design services that bring elegance, comfort, and functionality into your home. From modern minimalism to classic luxury, we craft spaces that reflect your style and personality.
                </p>
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;