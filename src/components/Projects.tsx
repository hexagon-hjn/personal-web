import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Smartphone, Database, Brain } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'hey.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web'
    },
    {
      id: 2,
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'OpenWeather API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web'
    },
    {
      id: 4,
      title: 'AI Chatbot',
      description: 'An intelligent chatbot using natural language processing for customer support automation.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      githubUrl: 'https://github.com',
      category: 'ai'
    },
    {
      id: 5,
      title: 'Mobile Expense Tracker',
      description: 'A React Native mobile app for tracking personal expenses with data visualization.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'SQLite', 'Chart.js'],
      githubUrl: 'https://github.com',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'Smart Home IoT System',
      description: 'An IoT-based home automation system with sensor integration and mobile control.',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'Raspberry Pi', 'Node.js', 'MQTT'],
      githubUrl: 'https://github.com',
      category: 'iot'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'web', label: 'Web Development', icon: Database },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai', label: 'AI & ML', icon: Brain },
    { key: 'iot', label: 'IoT & Robotics', icon: Code },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development, 
            mobile apps, AI, and IoT systems.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                <filter.icon size={16} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="flex gap-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-700 hover:text-primary-500 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-gray-700 hover:text-primary-500 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary-50 text-primary-600 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;