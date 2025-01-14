const Services = () => {
    const services = [
      { name: "Planning", color: "text-black", icon: "📃",},
      { name: "Interior", color: "text-black", icon: "🏚️" },
      { name: "Exterior", color: "text-black", icon: "✒️" },
    ];
  
    return (
      <section className="py-10 bg-gray-700" id="services">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" p-6 text-center hover:scale-105 transition-transform duration-300 text-white"
            >
              <div className="text-4xl mb-4 ">{service.icon}</div>
              <h3 className={"text-2xl font-semibold text-white" + service.color }>{service.name}</h3>
              <p className="mt-2">Effective planning is the foundation of success. It turns ideas into actionable steps, maximizes resources, and ensures goals are achieved efficiently</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;