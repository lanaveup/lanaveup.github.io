
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Ana García",
      role: "Fundadora & CEO",
      description: "Experta en innovación y ecosistemas startup con más de 10 años de experiencia.",
      emoji: "🚀"
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Contenido",
      description: "Especialista en comunicación digital y estrategias de crecimiento empresarial.",
      emoji: "✍️"
    },
    {
      name: "María López",
      role: "Editora Principal",
      description: "Periodista especializada en tecnología e innovación con amplia experiencia editorial.",
      emoji: "📝"
    },
    {
      name: "David Silva",
      role: "Analista de Tendencias",
      description: "Investigador de mercados emergentes y tendencias en el ecosistema emprendedor.",
      emoji: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-main-vertical">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container px-0 mx-[130px]">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 mb-4 rounded-full bg-gradient-to-r from-nave-blue/10 to-nave-green/10 text-nave-blue font-medium text-sm">
                Conoce a La Nave
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Acerca de Nosotros
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Somos una comunidad apasionada por el emprendimiento y la innovación, 
                comprometida con impulsar el ecosistema startup en América Latina.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16">
          <div className="container px-0 mx-[130px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="text-4xl mb-4">🎯</div>
                    <CardTitle className="text-2xl gradient-text">Nuestra Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-white/80">
                      Democratizar el acceso al conocimiento empresarial y crear una plataforma 
                      donde emprendedores, inversionistas y profesionales puedan conectar, 
                      aprender y crecer juntos. Nos dedicamos a ser el puente entre las ideas 
                      innovadoras y su materialización exitosa en el mercado.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <div className="text-4xl mb-4">🌟</div>
                    <CardTitle className="text-2xl gradient-text">Nuestra Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-white/80">
                      Ser la revista digital líder en América Latina para el ecosistema 
                      emprendedor, reconocida por la calidad de nuestro contenido, la 
                      relevancia de nuestros análisis y nuestro impacto positivo en el 
                      crecimiento de startups y empresas innovadoras en la región.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16">
          <div className="container px-0 mx-[130px]">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Nuestras Alianzas</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Trabajamos con organizaciones líderes para fortalecer el ecosistema emprendedor
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center p-8 bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-6xl mb-4">🤝</div>
                  <CardTitle className="text-2xl gradient-text">Alianza con Emprende UP</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-white/80">
                    Nos enorgullece nuestra alianza estratégica con <strong className="text-white">Emprende UP</strong>, 
                    una plataforma líder en educación emprendedora. Juntos ofrecemos contenido 
                    especializado, programas de mentorías y recursos exclusivos para emprendedores 
                    en todas las etapas de su journey empresarial. Esta colaboración nos permite 
                    amplificar nuestro impacto y llegar a más emprendedores con herramientas 
                    prácticas y conocimiento valioso.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container px-0 mx-[130px]">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Nuestro Equipo</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Conoce a las personas apasionadas que hacen posible La Nave
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10">
                    <CardHeader>
                      <div className="text-4xl mb-4">{member.emoji}</div>
                      <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                      <CardDescription className="text-nave-subtitle font-medium">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-white/80">
                        {member.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container px-0 mx-[130px]">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Nuestros Valores</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo y nuestra comunidad
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "💡",
                  title: "Innovación",
                  description: "Buscamos constantemente nuevas formas de aportar valor al ecosistema emprendedor."
                },
                {
                  emoji: "🌱",
                  title: "Crecimiento",
                  description: "Creemos en el potencial de cada emprendedor y en su capacidad de transformar ideas en realidad."
                },
                {
                  emoji: "🤲",
                  title: "Comunidad",
                  description: "Fomentamos la colaboración y el intercambio de conocimientos entre emprendedores."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="text-4xl mb-4">{value.emoji}</div>
                      <CardTitle className="text-xl gradient-text">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed text-white/80">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
