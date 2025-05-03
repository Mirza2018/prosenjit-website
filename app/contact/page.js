"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Form, Input, Button, message } from "antd"
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi"

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
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiMail size={20} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">prosenjit.banik@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiPhone size={20} />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+880 1234 567890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                <FiMapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                </svg>
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
            <Form.Item name="name" label="Your Name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input size="large" placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Your Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input size="large" placeholder="john@example.com" />
            </Form.Item>

            <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
              <Input size="large" placeholder="Project Inquiry" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={5} placeholder="Tell me about your project, request, or inquiry..." />
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
  )
}
