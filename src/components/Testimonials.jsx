const Testimonials = () => {
    const reviews = [
      {
        name: "Chima Tyson",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis assumenda eveniet dicta minus debitis necessitatibus.",
        image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww", 
      },
      {
        name: "Jake Calim",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis assumenda eveniet dicta minus debitis necessitatibus.",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", 
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50" id="testimonials">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Testimonial</h2>
        <div className="container mx-auto px-6  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-8 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis assumenda eveniet dicta minus debitis necessitatibus.</p>
  export default Testimonials;