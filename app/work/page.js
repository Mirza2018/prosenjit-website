"use client";
import { motion } from "framer-motion";
import { Card, Tag } from "antd";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { BasicImage } from "../../public/BasicImage";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Dog lovers website",
      description:
        "Built a platform for dog lovers to explore pet-friendly places and connect with the community.",
      image: BasicImage.woofspot,
      tags: ["UI/UX", "Website", "E-commerce"],
      link: "https://woofspot.net/",
    },
    {
      id: 2,
      title: "Digital Avater Website",
      description:
        "Designed a solution for brands to create camera-free content using custom avatars.",
      image: BasicImage.blutomatic,
      tags: ["UI/UX", "Website", "Avatars"],
      link: "https://www.blutomatic.com/",
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "SparkTech Agency",
      position: "Jr.UI/UX Designer",
      period: "October 2024- Present",
      description:
        "Focused on designing user interfaces for both mobile applications and responsive web platforms.",
    },
    {
      id: 2,
      company: "Softriple",
      position: "Jr UI/UX Designer",
      period: "July 2024 - October 2024",
      description:
        "Worked closely with developers to ensure seamless integration of designs into functional e commerce solutions.",
    },
    {
      id: 3,
      company: "Esscre",
      position: "UI/UX Design Intern",
      period: "April 2024 - July 2024",
      description:
        "Conducting user research, surveys, and usability testing, Designing the visuals and interactions for cross platforms",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
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
                      className="object-cover object-top"
                    />
                  </div>
                }
                actions={[
                  <a
                    href={project.link}
                    key="link"
                    className="flex items-center justify-center gap-2"
                  >
                    View Project <FiExternalLink />
                  </a>,
                ]}
              >
                <Card.Meta
                  title={project.title}
                  description={project.description}
                />
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
            <motion.div
              key={exp.id}
              variants={item}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-medium">
                    {exp.company}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
