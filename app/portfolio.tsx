"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Moon, Sun, Mail, MapPin, Calendar, Download } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-[#A3B8AB] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50`}>
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#A3B8AB]/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-[#A3B8AB]/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-serif">
            Olexiy Sokurenko
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-black/10 dark:hover:bg-white/10">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <aside className="space-y-6">
            <Card className="overflow-hidden border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-800/80">
              <CardHeader className="p-0">
                <div className="relative h-32 bg-gradient-to-b from-[#A3B8AB] to-white dark:from-zinc-900 dark:to-zinc-700">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <Image
                      src="/img/cv.png"
                      alt="Olexiy Sokurenko - Professional headshot"
                      width={128}
                      height={128}
                      className="rounded-full border-4 border-[#A3B8AB] dark:border-zinc-900"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-16 pb-4">
                <div className="text-center">
                  <h2 className="text-xl font-serif">Olexiy Sokurenko</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">Senior Java Developer</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span className="font-light">Germany</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="font-light">Available for immediate start</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button variant="outline" size="icon" asChild className="border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                    <a href="mailto:olexiy.sokurenko@gmail.com" aria-label="Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                    <a href="https://github.com/olexiy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                    <a href="https://www.linkedin.com/in/olexiy-sokurenko/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button asChild className="bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90">
                    <a href="/path-to-your-cv.pdf" download="Olexiy_Sokurenko_CV.pdf">
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-800/80">
              <CardHeader>
                <CardTitle className="font-serif">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 font-light">
                  <li className="flex justify-between">
                    <span>German</span>
                    <span className="text-black dark:text-white">Fluent</span>
                  </li>
                  <li className="flex justify-between">
                    <span>English</span>
                    <span className="text-black dark:text-white">Professional</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ukrainian</span>
                    <span className="text-black dark:text-white">Native</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Russian</span>
                    <span className="text-black dark:text-white">Native</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-8">
            <Card className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-800/80">
              <CardHeader>
                <CardTitle className="font-serif">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  Senior Java Developer with 15+ years of experience specializing in microservices architecture, Spring
                  ecosystem, and DevOps practices. Proven track record in designing and implementing cloud-native applications,
                  CI/CD pipelines, and comprehensive test automation frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-800/80">
              <CardHeader>
                <CardTitle className="font-serif">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-serif mb-2">Microservices & Cloud</h3>
                    <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                      <li>Microservices Design Patterns</li>
                      <li>Event-Driven Architecture</li>
                      <li>Docker & Kubernetes</li>
                      <li>AWS Cloud Services (Certified)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif mb-2">Java & Spring Ecosystem</h3>
                    <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                      <li>Java (8, 11, 17)</li>
                      <li>Spring Boot, Spring Cloud</li>
                      <li>Spring WebFlux</li>
                      <li>Spring Security, OAuth2</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-800/80">
              <CardHeader>
                <CardTitle className="font-serif">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    title: "Senior Java Developer & DevOps Engineer",
                    company: "Healthcare Insurance Platform",
                    period: "01/2023 - Present",
                    responsibilities: [
                      "Architected and implemented a microservices ecosystem using Spring Boot and Spring Cloud",
                      "Designed and implemented comprehensive CI/CD pipelines using GitLab CI and Kubernetes",
                      "Established automated testing strategy covering UI, API, and performance testing",
                    ],
                  },
                  {
                    title: "Lead Microservices Developer",
                    company: "Digital Rights Management Platform",
                    period: "09/2022 - 01/2023",
                    responsibilities: [
                      "Led the migration from monolithic to microservices architecture",
                      "Implemented reactive microservices using Spring WebFlux",
                      "Designed event-driven architecture using RabbitMQ",
                    ],
                  },
                  {
                    title: "Senior Developer & DevOps Specialist",
                    company: "Fashion E-commerce Platform",
                    period: "03/2021 - 08/2021",
                    responsibilities: [
                      "Developed cloud-native payment processing microservices",
                      "Implemented OAuth2 authentication and authorization",
                      "Set up automated UI testing with Selenium and Cucumber",
                      "Created performance testing suite using Gatling",
                    ],
                    technologies: "Java 11, Spring Cloud, Cloud Foundry, Selenium, Cucumber",
                  },
                  {
                    title: "Java Developer",
                    company: "B2B E-commerce Platform for Construction Tools",
                    period: "08/2016 - 08/2017",
                    responsibilities: [
                      "Developed new storefront layer and business features",
                      "Implemented secure authentication and authorization system",
                      "Created automated test suites with JUnit and Mockito",
                    ],
                    technologies: "Java 8, Spring MVC, Spring Security, PostgreSQL, JUnit, Mockito",
                  },
                  {
                    title: "Technical Lead",
                    company: "B2B/B2C E-commerce Platform for Agriculture",
                    period: "03/2015 - 07/2016",
                    responsibilities: [
                      "Led development team and managed technical architecture",
                      "Implemented CI/CD automation and infrastructure",
                      "Integrated PIM and ERP systems",
                      "Conducted \"Provision Automation Tools\" training sessions",
                    ],
                    achievements: [
                      "Successfully delivered multiple internal projects",
                      "Established automated deployment pipeline",
                      "Reduced system integration issues by 40%",
                    ],
                    technologies: "Java 8, Spring Framework, JavaEE, Wildfly, PostgreSQL, Angular, Docker, Ansible",
                  },
                  {
                    title: "Senior Developer",
                    company: "B2C E-commerce Platform for Home Appliances",
                    period: "02/2014 - 02/2015",
                    responsibilities: [
                      "Implemented test-driven development practices",
                      "Developed RESTful services and frontend components",
                      "Created automated testing framework",
                    ],
                    technologies: "SAP Hybris 5, Java 8, Spring MVC, Spring Security, PostgreSQL, MS SQL, JUnit",
                  },
                  {
                    title: "Software Engineer",
                    company: "Environmental, Safety, and Quality Management Software",
                    period: "08/2010 - 02/2014",
                    responsibilities: [
                      "Developed database solutions and reporting systems",
                      "Created internal development tools",
                      "Conducted Java training for team members",
                      "Led Atlassian tools implementation",
                    ],
                    achievements: [
                      "Successfully migrated legacy systems to new architecture",
                      "Improved reporting performance by 60%",
                      "Established development best practices",
                    ],
                    technologies: "Java, JavaEE, Spring Framework, Oracle PL/SQL, Hibernate, JPA, REST",
                  },
                ].map((job, index) => (
                  <div key={index} className="border-t border-black/10 dark:border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-serif">{job.title}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">{job.company}</p>
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 font-light">{job.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    {job.achievements && (
                      <>
                        <h4 className="font-serif mt-2 mb-1 text-sm">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-1 font-light">
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {job.technologies && (
                      <p className="mt-2 text-sm font-light">
                        <span className="font-serif">Technologies:</span>{" "}
                        <span className="text-zinc-600 dark:text-zinc-400">{job.technologies}</span>
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10 mt-12">
        <div className="container py-6 text-center text-sm text-zinc-600 dark:text-zinc-400 font-light">
          © {new Date().getFullYear()} Olexiy Sokurenko. All rights reserved.
        </div>
      </footer>
    </div>
  )
}