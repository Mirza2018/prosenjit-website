"use client"
import { motion } from "framer-motion"
import { Card, Tag } from "antd"
import { FiExternalLink } from "react-icons/fi"
import Image from "next/image"

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-commerce App Redesign",
      description:
        "Complete redesign of a mobile e-commerce application focusing on improving user experience and conversion rates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["UI/UX", "Mobile", "E-commerce"],
      link: "#",
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description:
        "Designed an intuitive dashboard for a financial services company that simplifies complex data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Dashboard", "Data Visualization", "Fintech"],
      link: "#",
    },
    {
      id: 3,
      title: "Travel Booking Platform",
      description:
        "Created a seamless booking experience for a travel platform, focusing on simplifying the reservation process.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Web Design", "Travel", "Booking"],
      link: "#",
    },
    {
      id: 4,
      title: "Health & Fitness App",
      description:
        "Designed a user-friendly fitness tracking application with personalized workout plans and progress monitoring.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile", "Health", "Fitness"],
      link: "#",
    },
  ]

  const experiences = [
    {
      id: 1,
      company: "SparkTech Agency",
      position: "Senior UI/UX Designer",
      period: "2021 - Present",
      description: "Leading design projects for various clients, creating wireframes, prototypes, and final designs.",
    },
    {
      id: 2,
      company: "DigitalCraft Studios",
      position: "UI Designer",
      period: "2018 - 2021",
      description: "Collaborated with development teams to create visually appealing and functional user interfaces.",
    },
    {
      id: 3,
      company: "WebVision",
      position: "Junior Designer",
      period: "2016 - 2018",
      description: "Assisted senior designers in creating visual elements and learning the fundamentals of UX design.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 gradient-text inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h1>

      {/* Projects Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div className="grid md:grid-cols-2 gap-8" variants={container} initial="hidden" animate="show">
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                hoverable
                className="overflow-hidden card-hover"
                cover={
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
                actions={[
                  <a href={project.link} key="link" className="flex items-center justify-center gap-2">
                    View Project <FiExternalLink />
                  </a>,
                ]}
              >
                <Card.Meta title={project.title} description={project.description} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Tag key={index} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section>
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={item} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-medium">{exp.company}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
