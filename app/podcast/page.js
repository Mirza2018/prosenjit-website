"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "antd"
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi"

export default function Thoughts() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Handle progress bar click
  const handleProgressChange = (e) => {
    const progressBar = progressRef.current
    const percent = e.nativeEvent.offsetX / progressBar.offsetWidth
    audioRef.current.currentTime = percent * duration
  }

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)
    audioRef.current.volume = newVolume
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  // Toggle mute
  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current.volume = 0
      setIsMuted(true)
    }
  }

  // Format time
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of UI Design",
      date: "March 15, 2023",
      excerpt: "Exploring how UI design has evolved over the past decade and what trends we might see in the future.",
    },
    {
      id: 2,
      title: "User-Centered Design Principles",
      date: "January 22, 2023",
      excerpt:
        "A deep dive into the core principles that make user-centered design effective and how to implement them.",
    },
    {
      id: 3,
      title: "Color Psychology in Digital Interfaces",
      date: "November 5, 2022",
      excerpt: "How different colors affect user behavior and emotions, and how to leverage this in your designs.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* <motion.h1
        className="text-4xl font-bold mb-12 gradient-text inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Thoughts & Insights
      </motion.h1> */}

      {/* Podcast Section */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">My Podcast</h2>

        <Card className="mb-8">
          <h3 className="text-2xl font-bold mb-2">
            Changes in Social Values in Bangladesh
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            In this episode, I share my views on the significant changes in
            social values that Bangladesh has experienced over the last decade,
            exploring both the positive developments and challenges.
          </p>

          {/* Audio Player */}
          <div className="audio-player bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <audio
              ref={audioRef}
              src="/videoplayback.m4a"
              preload="metadata"
            ></audio>

            {/* Progress Bar */}
            <div
              ref={progressRef}
              className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full mb-4 cursor-pointer"
              onClick={handleProgressChange}
            >
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full"
                >
                  {isPlaying ? <FiPause /> : <FiPlay className="ml-1" />}
                </button>

                <div className="text-sm">
                  <span>{formatTime(currentTime)}</span>
                  <span> / </span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-gray-600 dark:text-gray-300"
                >
                  {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume * 100}
                  onChange={handleVolumeChange}
                  className="w-20 accent-indigo-600"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.section>
    </div>
  );
}
