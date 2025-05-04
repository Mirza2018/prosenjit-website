"use client"
import { motion } from "framer-motion"
import { Button } from "antd"
import { FiDownload, FiArrowRight } from "react-icons/fi"
import Image from "next/image"
import Link from "next/link"
import { AllImage } from "./../public/Allimage";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Prosenjit Banik</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            UI/UX Designer at SparkTech Agency
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I create intuitive, user-centered designs that balance aesthetics
            and functionality, focusing on building seamless digital
            experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              type="primary"
              size="large"
              className="bg-indigo-600 hover:bg-indigo-700"
              icon={<FiDownload />}
              href="/prosenjit-cv.pdf"
              download
            >
              Download CV
            </Button>
            <Link href="/work">
              <Button size="large" className="flex items-center">
                View My Work <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
            <Image
              src={AllImage.profilePic}
              alt="Prosenjit Banik"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 gradient-text inline-block"
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={fadeIn}>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md card-hover">
            <h3 className="text-xl font-semibold mb-4">Background</h3>
            <p>
              I'm currently working as a UI/UX Designer at SparkTech Agency.
              With a passion for creating intuitive, user-centered designs, I
              focus on building seamless digital experiences.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md card-hover">
            <h3 className="text-xl font-semibold mb-4">Hobbies</h3>
            <p>
              Design is more than just a profession for me—it's my passion and
              my hobby. In my free time, I love exploring new design trends,
              sketching UI concepts, and experimenting with color schemes.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md card-hover">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p>
              I'm proficient with tools like Figma and Framer, and I'm
              constantly pushing myself to learn new tools and techniques to
              stay ahead in this dynamic field.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center py-16 px-4 bg-indigo-50 dark:bg-slate-800 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Interested in working together?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <Link href="/contact">
          <Button
            type="primary"
            size="large"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Get In Touch
          </Button>
        </Link>
      </motion.section>
    </div>
  );
}
