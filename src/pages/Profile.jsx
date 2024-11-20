'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Mail, MapPin, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MotionCard = motion(Card)

const AboutSection = ({ icon: Icon, title, content }) => (
  <motion.div
    className="flex items-start space-x-4 mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </motion.div>
)

const TimelineItem = ({ year, title, description, isLeft }) => (
  <motion.div 
    className="mb-8 flex justify-between items-center w-full"
    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`order-1 w-5/12 ${isLeft ? 'hidden md:block' : 'md:hidden'}`}></div>
    <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white">{year}</h1>
    </div>
    <div className={`order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
      <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{title}</h3>
      <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
)

function Profile () {
  const [activeTab, setActiveTab] = useState("profile")

  return (
      <MotionCard 
        className="max-w-4xl mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Full Stack Developer</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span>Portfolio</span>
                </Button>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <TabsContent value="profile" className="mt-6">
                <AboutSection 
                  icon={User} 
                  title="About Me" 
                  content="I'm a passionate Full Stack Developer with 5 years of experience in building web applications."
                />
                <AboutSection 
                  icon={MapPin} 
                  title="Location" 
                  content="San Francisco, CA"
                />
                <AboutSection 
                  icon={Briefcase} 
                  title="Work" 
                  content="Senior Developer at TechCorp Inc."
                />
                <AboutSection 
                  icon={GraduationCap} 
                  title="Education" 
                  content="BS in Computer Science, Stanford University"
                />
              </TabsContent>
              <TabsContent value="skills" className="mt-6">
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {["React", "Node.js", "JavaScript", "TypeScript", "Python", "GraphQL", "MongoDB", "Docker", "AWS"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h3 className="font-semibold text-lg mb-2">{skill}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </MotionCard>
  )
}

export default Profile