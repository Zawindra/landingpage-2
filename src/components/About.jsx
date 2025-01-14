const About = () => {
    return (
      <section className="py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10" id="about">
            <img className="w-full md:w-1/2 rounded-md shadow-lg " src="/about.jpg" alt="" />

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-black">About Us</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
            We are a passionate team dedicated to transforming spaces with innovative design solutions. Specializing in interior design, architecture, and 3D modeling, we blend creativity, functionality, and quality craftsmanship to bring your vision to life. Our mission is to create beautiful, comfortable, and inspiring environments tailored to your unique style and needs.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;