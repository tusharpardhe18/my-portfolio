

const projects = [
    {
        id: 1,
        title: "Prescripto",
        description: "Prescripto is a comprehensive healthcare appointment booking system that connects patients with trusted doctors.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JSON Web Token(JWT)", "Cloudinary", "Razorpay"],
        demo: "https://prescripto-doc.vercel.app/",
        repository: "https://github.com/tusharpardhe18/Doctor-Patient-Portal",
    },
    {
        id: 2,
        title: "Weather App",
        description: "This is a simple weather application that allows users to check the current weather conditions for a specified city.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        demo: "https://weatherkaisahai.netlify.app/",
        repository: "https://github.com/tusharpardhe18/Weather-App",
    },
    {
        id: 3,
        title: "Snake-o-Mania",
        description: "Snake-o-Mania is a responsive and animated web-based snake game with sound effects and high score tracking.",
        image: "/projects/project3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "https://snakeomania.netlify.app/",
        repository: "https://github.com/tusharpardhe18/Snake-O-Mania",
    },
]

export const Projects = () => {
    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl m-auto">
                    Here are some of my recent projects. Each Project was carefully crafted with attention to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden border">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-full"> {tag} </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};