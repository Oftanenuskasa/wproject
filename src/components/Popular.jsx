const Popular = () => {
  const projects = [
    {
      title: "Modern Tech Hub",
      description: "A contemporary office space designed for technology companies",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3C/svg%3E",
      category: "Office Space"
    },
    {
      title: "Creative Studio",
      description: "An inspiring workspace for creative professionals",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3C/svg%3E",
      category: "Studio"
    },
    {
      title: "Collaborative Hub",
      description: "Open-plan office promoting team collaboration",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3C/svg%3E",
      category: "Co-working"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Projects
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our most celebrated architectural works
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-100 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 group-hover:opacity-90 transition-opacity duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-500 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-2">
                    <button className="inline-flex items-center text-sm md:text-base text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      Learn more
                      <svg 
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;