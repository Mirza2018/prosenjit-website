"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Form, Input, Button, message } from "antd"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi"
import { ImBehance2 } from "react-icons/im";
import { FaSquareDribbble } from "react-icons/fa6";
export default function Contact() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      message.success("Message sent successfully!")
      form.resetFields()
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 gradient-text inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out to me for any inquiries, collaboration
            opportunities, or just to say hello!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiMail size={20} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  pbanik856@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiPhone size={20} />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +880 1912242639
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiMapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/prosenjit.banik.376"
                target="_blank"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/prosenjit-banik-887413282/"
                target="_blank"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="https://www.behance.net/prosenjitbanik7576"
                target="_blank"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ImBehance2 className=" text-xl" />
              </a>
              <a
                href="https://dribbble.com/kreva7576"
                target="_blank"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <FaSquareDribbble className=" text-xl" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
          >
            <Form.Item
              name="name"
              label={<p className="text-indigo-500">Your Name</p>}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              name="email"
              label={<p className="text-indigo-500">Your Email</p>}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input size="large" placeholder="john@example.com" />
            </Form.Item>

            <Form.Item
              name="subject"
              label={<p className="text-indigo-500">Subject</p>}
              rules={[{ required: true, message: "Please enter a subject" }]}
            >
              <Input size="large" placeholder="Project Inquiry" />
            </Form.Item>

            <Form.Item
              name="message"
              label={<p className="text-indigo-500">Message</p>}
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                rows={5}
                placeholder="Tell me about your project, request, or inquiry..."
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<FiSend />}
                className="bg-indigo-600 hover:bg-indigo-700"
                size="large"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
