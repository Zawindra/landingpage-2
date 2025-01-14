const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Furniture",
        description: "Discover furniture that blends comfort, functionality, and timeless design. Elevate your space with pieces that reflect your personality and enhance every room.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Interior",
        description: "Interior design brings style, comfort, and personality to your space. Transform your home into a reflection of your unique taste with thoughtful design solutions.",
        image: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: 3,
        title: "Decoration",
        description: "Beautiful decorations add charm, personality, and warmth to your home. Enhance your space with unique touches that create style and unforgettable ambiance.",
        image: "https://plus.unsplash.com/premium_photo-1681980018817-b36ab8848616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVjb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", 
      },
      {
        id: 4,
        title: "Renovation",
        description: "A renovation breathes new life into your home, combining modern style and improved functionality. Transform your vision into reality with thoughtful design and quality craftsmanship.",
        image: "https://images.unsplash.com/photo-1623161551727-54c918bdcec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D", 
      },
      {
        id: 5,
        title: "Architectur",
        description: "Great architecture blends form, function, and beauty. It creates spaces that inspire, enhance lives, and stand the test of time with innovative design and structural excellence.",
        image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFyY2hpdGVjdHVyfGVufDB8fDB8fHww", 
      },
      {
        id: 6,
        title: "3D Modeling",
        description: "3D modeling turns your home design ideas into realistic visualizations. Explore detailed layouts, materials, and finishes before construction begins, ensuring precision and clarity in every detail.",
        image: "https://images.unsplash.com/photo-1634382653568-8271aa4956fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8", 
      },
    ];
  
    return (
      <section className="py-16" id="projects">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-left mb-11 text-blacl ">Our Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a href="#" className="text-gray-400 justify-self-end mt-2">show more</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;