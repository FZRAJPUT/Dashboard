import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Building, Globe, Users, Zap, ChevronDown, ChevronUp } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MotionCard = motion(Card)

const CompanySection = ({ icon: Icon, title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 ml-auto" />
        ) : (
          <ChevronDown className="h-5 w-5 ml-auto" />
        )}
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 ml-14"
          >
            <p className="text-gray-600 dark:text-gray-300">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const TeamMember = ({ name, role, image }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Avatar className="w-24 h-24 mb-4">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    </Avatar>
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
  </motion.div>
)

const Milestone = ({ year, title, description }) => (
  <motion.div 
    className="flex flex-col md:flex-row md:items-center mb-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
      <span className="text-2xl font-bold text-white">{year}</span>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
)

function CompanyAbout() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
      <MotionCard 
        className="max-w-4xl mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardContent className="p-6">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">TechInnovate Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Empowering businesses through cutting-edge technology</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="history">Our History</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <TabsContent value="overview" className="mt-6">
                <CompanySection 
                  icon={Building} 
                  title="Who We Are" 
                  content="TechInnovate Solutions is a leading technology company specializing in AI-driven software solutions. We combine cutting-edge technology with human expertise to solve complex business challenges."
                />
                <CompanySection 
                  icon={Zap} 
                  title="Our Mission" 
                  content="Our mission is to empower businesses of all sizes with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age."
                />
                <CompanySection 
                  icon={Globe} 
                  title="Global Presence" 
                  content="With offices in San Francisco, London, and Tokyo, we serve clients worldwide, bringing a global perspective to local challenges."
                />
              </TabsContent>
              <TabsContent value="team" className="mt-6">
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <TeamMember name="Sarah Johnson" role="CEO" image="https://i.pravatar.cc/150?img=1" />
                  <TeamMember name="Michael Chen" role="CTO" image="https://i.pravatar.cc/150?img=3" />
                  <TeamMember name="Emily Rodriguez" role="COO" image="https://i.pravatar.cc/150?img=5" />
                  <TeamMember name="David Kim" role="Head of AI" image="https://i.pravatar.cc/150?img=7" />
                  <TeamMember name="Olivia Patel" role="Head of Design" image="https://i.pravatar.cc/150?img=9" />
                  <TeamMember name="Alex Novak" role="Head of Sales" image="https://i.pravatar.cc/150?img=11" />
                </motion.div>
              </TabsContent>
              <TabsContent value="history" className="mt-6">
                <Milestone 
                  year="2010"
                  title="Company Founded"
                  description="TechInnovate Solutions was founded by a group of visionary tech entrepreneurs in Silicon Valley."
                />
                <Milestone 
                  year="2015"
                  title="Global Expansion"
                  description="Opened offices in London and Tokyo, marking the beginning of our global operations."
                />
                <Milestone 
                  year="2018"
                  title="AI Division Launch"
                  description="Launched our dedicated AI division, focusing on machine learning and natural language processing solutions."
                />
                <Milestone 
                  year="2023"
                  title="Fortune 500 Recognition"
                  description="Recognized as one of the fastest-growing tech companies by Fortune magazine."
                />
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </MotionCard>
  )
}

export default CompanyAbout