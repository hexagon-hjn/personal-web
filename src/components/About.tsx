import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Download, Code, Database, Smartphone, Brain, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML/CSS', icon: Globe, level: 90 },
    { name: 'JavaScript', icon: Code, level: 85 },
    { name: 'React', icon: Smartphone, level: 80 },
    { name: 'Node.js', icon: Database, level: 75 },
    { name: 'Python', icon: Brain, level: 70 },
    { name: 'Git', icon: Cpu, level: 85 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Started Computer Science at KTU',
      description: 'Began my journey in Computer Science Engineering, focusing on modern web technologies and AI.'
    },
    {
      year: '2023',
      title: 'Self-Taught Programming',
      description: 'Started learning web development through online courses and building personal projects.'
    },
    {
      year: '2022',
      title: 'First Line of Code',
      description: 'Wrote my first "Hello World" program and discovered my passion for programming.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  Hi! I'm Harinath Jayan, a passionate Computer Science student at KTU with a 
                  deep interest in web development, artificial intelligence, and robotics. My journey 
                  into tech began with curiosity and has evolved into a genuine passion for creating 
                  innovative solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  I believe in the power of technology to solve real-world problems and am constantly 
                  learning new skills to stay at the forefront of innovation. When I'm not coding, 
                  you can find me exploring the latest tech trends or working on personal projects.
                </p>
                <p className="text-gray-600 mb-6">
                  My goal is to become a full-stack developer and eventually contribute to cutting-edge 
                  AI and robotics projects that can make a positive impact on society.
                </p>
              </div>

              <button className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-32">
                      <skill.icon className="text-primary-500" size={20} />
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-700"
                          style={{ width: inView ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 w-10">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">My Journey</h3>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index !== timeline.length - 1 && <div className="w-px h-16 bg-gray-200 mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;