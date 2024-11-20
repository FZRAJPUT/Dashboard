import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bell, ChevronDown, Globe, Lock, Moon, Sun, User, HelpCircle } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const MotionCard = motion(Card)

function SettingsComponent() {

  const [darkMode, setDarkMode] = useState(false)
  const [fontSize, setFontSize] = useState(16)

  return (
    <div className={`min-h-fit dark:bg-transparent bg-transparent ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-4">
        <MotionCard 
          className="w-full max-w-3xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              <AnimatePresence>
                {['account', 'appearance', 'notifications', 'privacy', 'language'].map((section) => (
                  <AccordionItem value={section} key={section}>
                    <AccordionTrigger className="text-lg font-medium">
                      <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
                        {section === 'account' && <User className="mr-2 h-5 w-5" />}
                        {section === 'appearance' && <Sun className="mr-2 h-5 w-5" />}
                        {section === 'notifications' && <Bell className="mr-2 h-5 w-5" />}
                        {section === 'privacy' && <Lock className="mr-2 h-5 w-5" />}
                        {section === 'language' && <Globe className="mr-2 h-5 w-5" />}
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </motion.div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {section === 'account' && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="john@example.com" type="email" className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" />
                              </div>
                            </div>
                            <Button className="w-full sm:w-auto transition-all duration-200">
                              Update Account
                            </Button>
                          </div>
                        )}
                        {section === 'appearance' && (
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <Label className="text-lg">Theme Color</Label>
                              <RadioGroup defaultValue="blue" className="flex space-x-2">
                                <TooltipProvider>
                                  {['blue', 'green', 'red', 'purple'].map((color) => (
                                    <Tooltip key={color}>
                                      <TooltipTrigger>
                                        <RadioGroupItem 
                                          value={color} 
                                          id={color} 
                                          className={`w-8 h-8 rounded-full bg-${color}-500 cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-offset-2 hover:ring-${color}-400`} 
                                        />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="capitalize">{color}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))}
                                </TooltipProvider>
                              </RadioGroup>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="font-size" className="text-lg">Font Size</Label>
                              <div className="flex items-center space-x-4">
                                <Slider
                                  id="font-size"
                                  min={12}
                                  max={24}
                                  step={1}
                                  value={[fontSize]}
                                  onValueChange={(value) => setFontSize(value[0])}
                                  className="w-full"
                                />
                                <span className="text-lg font-medium">{fontSize}px</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {section === 'notifications' && (
                          <div className="space-y-4">
                            {['email', 'push', 'in-app'].map((type) => (
                              <div key={type} className="flex items-center justify-between">
                                <Label htmlFor={`${type}-notifications`} className="text-lg capitalize">{type} Notifications</Label>
                                <Switch id={`${type}-notifications`} className="data-[state=checked]:bg-green-500" />
                              </div>
                            ))}
                          </div>
                        )}
                        {section === 'privacy' && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="profile-visibility" className="text-lg">Profile Visibility</Label>
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Select visibility" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="public">Public</SelectItem>
                                  <SelectItem value="private">Private</SelectItem>
                                  <SelectItem value="friends">Friends Only</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="data-sharing" className="text-lg">Data Sharing</Label>
                              <Switch id="data-sharing" className="data-[state=checked]:bg-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                              <Label htmlFor="two-factor" className="text-lg">Two-Factor Authentication</Label>
                              <Switch id="two-factor" className="data-[state=checked]:bg-yellow-500" />
                            </div>
                          </div>
                        )}
                        {section === 'language' && (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="language-select" className="text-lg">Select Language</Label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="es">Español</SelectItem>
                                  <SelectItem value="fr">Français</SelectItem>
                                  <SelectItem value="de">Deutsch</SelectItem>
                                  <SelectItem value="ja">日本語</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-center space-x-2">
                              <HelpCircle className="h-5 w-5 text-blue-500" />
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Changing the language will translate the user interface.
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </AnimatePresence>
            </Accordion>
          </CardContent>
        </MotionCard>
      </div>
    </div>
  )
}

export default SettingsComponent