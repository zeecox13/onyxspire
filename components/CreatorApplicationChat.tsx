'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Question {
  id: string
  prompt: string
  fieldName: string
  inputType: 'text' | 'select' | 'number' | 'multiselect'
  options?: { value: string; label: string }[]
  required?: boolean
  placeholder?: string
}

const questions: Question[] = [
  {
    id: '1',
    prompt: "First question. What is your legal name?",
    fieldName: 'legal_name',
    inputType: 'text',
    required: true,
    placeholder: 'Your legal name'
  },
  {
    id: '2',
    prompt: "What is your stage/creator name?",
    fieldName: 'creator_name',
    inputType: 'text',
    required: true,
    placeholder: 'Your stage/creator name'
  },
  {
    id: '3',
    prompt: "What are your pronouns?",
    fieldName: 'pronouns',
    inputType: 'text',
    required: true,
    placeholder: 'e.g., they/them, she/her, he/him'
  },
  {
    id: '4',
    prompt: "What monetized platforms are you on?",
    fieldName: 'platform_links',
    inputType: 'text',
    required: true,
    placeholder: 'OnlyFans, Fansly, etc.'
  },
  {
    id: '5',
    prompt: "What's your current monthly income range on OnlyFans?",
    fieldName: 'monthly_income',
    inputType: 'select',
    required: true,
    options: [
      { value: '0-1k', label: '$0 - $1,000' },
      { value: '1k-5k', label: '$1,000 - $5,000' },
      { value: '5k-10k', label: '$5,000 - $10,000' },
      { value: '10k-25k', label: '$10,000 - $25,000' },
      { value: '25k-50k', label: '$25,000 - $50,000' },
      { value: '50k-100k', label: '$50,000 - $100,000' },
      { value: '100k+', label: '$100,000+' }
    ]
  },
  {
    id: '6',
    prompt: "What are your main goals with management?",
    fieldName: 'main_goals',
    inputType: 'text',
    required: true,
    placeholder: 'Tell us what you hope to achieve...'
  },
  {
    id: '7',
    prompt: "How would you describe your content niche and brand vibe?",
    fieldName: 'content_niche',
    inputType: 'text',
    required: true,
    placeholder: 'Describe your niche and brand...'
  },
  {
    id: '8',
    prompt: "Paint me a picture: what does your creator schedule actually look like week to week?",
    fieldName: 'time_commitment',
    inputType: 'text',
    required: true,
    placeholder: 'Describe your weekly schedule...'
  },
  {
    id: '9',
    prompt: "How many followers do you have on Instagram?",
    fieldName: 'instagram_followers',
    inputType: 'number',
    required: false,
    placeholder: 'Number of followers'
  },
  {
    id: '10',
    prompt: "What's your Instagram link?",
    fieldName: 'instagram_link',
    inputType: 'text',
    required: false,
    placeholder: 'https://instagram.com/yourhandle'
  },
  {
    id: '11',
    prompt: "How many followers do you have on TikTok?",
    fieldName: 'tiktok_followers',
    inputType: 'number',
    required: false,
    placeholder: 'Number of followers'
  },
  {
    id: '12',
    prompt: "What's your TikTok link?",
    fieldName: 'tiktok_link',
    inputType: 'text',
    required: false,
    placeholder: 'https://tiktok.com/@yourhandle'
  },
  {
    id: '13',
    prompt: "How often do you post?",
    fieldName: 'posting_frequency',
    inputType: 'select',
    required: true,
    options: [
      { value: 'daily', label: 'Daily' },
      { value: 'multiple-daily', label: 'Multiple times per day' },
      { value: 'few-week', label: 'A few times per week' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'few-month', label: 'A few times per month' },
      { value: 'irregular', label: 'Irregularly' }
    ]
  },
  {
    id: '14',
    prompt: "What is your email?",
    fieldName: 'email',
    inputType: 'text',
    required: true,
    placeholder: 'your.email@example.com'
  },
  {
    id: '15',
    prompt: "What is your birthday?",
    fieldName: 'birthday',
    inputType: 'text',
    required: true,
    placeholder: 'MM/DD/YYYY'
  },
  {
    id: '16',
    prompt: "What is your phone number?",
    fieldName: 'phone',
    inputType: 'text',
    required: false,
    placeholder: '+1 (555) 000-0000'
  },
  {
    id: '17',
    prompt: "Where are you located? (country and city/area)",
    fieldName: 'location',
    inputType: 'text',
    required: false,
    placeholder: 'e.g., United States, Los Angeles'
  },
  {
    id: '18',
    prompt: "How did you hear about us?",
    fieldName: 'referral_source',
    inputType: 'text',
    required: false,
    placeholder: 'Social media, friend, search, etc.'
  },
  {
    id: '19',
    prompt: "What else do you want us to know?",
    fieldName: 'additional_info',
    inputType: 'text',
    required: false,
    placeholder: 'Any additional information...'
  }
]

interface Message {
  id: string
  text: string
  sender: 'onyx' | 'user'
  timestamp: Date
}

export default function CreatorApplicationChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Are you ready to get started?",
      sender: 'onyx',
      timestamp: new Date()
    }
  ])
  const [currentStep, setCurrentStep] = useState(-1) // -1 means waiting for initial response
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to top on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Track if we've shown initial messages to prevent auto-scroll on first load
  const hasShownInitialMessages = useRef(false)

  // Scroll chat container to bottom when new messages are added (not page scroll)
  useEffect(() => {
    // On first load, keep chat container at top
    if (messages.length === 1 && !hasShownInitialMessages.current) {
      hasShownInitialMessages.current = true
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = 0
      }
      return
    }
    
    // Scroll chat container to bottom for new messages or when typing indicator appears
    if (messages.length > 1 || isTyping) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        setTimeout(() => scrollToBottom(), 50)
      })
    }
  }, [messages.length, isTyping])

  useEffect(() => {
    if (currentStep >= 0 && currentStep < questions.length && inputRef.current) {
      inputRef.current.focus()
    } else if (currentStep === -1 && inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentStep])

  const handleAnswer = () => {
    // Handle initial "ready to get started" response
    if (currentStep === -1) {
      if (!currentAnswer.trim()) {
        return
      }
      
      // Add user message
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        text: currentAnswer.trim(),
        sender: 'user',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      setCurrentAnswer('')

      // Show typing indicator
      setIsTyping(true)

      // Move to first question after typing animation
      setTimeout(() => {
        setIsTyping(false)
        const firstQuestion = questions[0]
        const onyxMessage: Message = {
          id: `onyx-${Date.now()}`,
          text: firstQuestion.prompt,
          sender: 'onyx',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, onyxMessage])
        setCurrentStep(0)
        setError('')
      }, 1500) // Typing duration
      return
    }

    // Handle regular questions
    if (!currentAnswer.trim() && questions[currentStep].required) {
      return
    }

    const question = questions[currentStep]
    
    // Save answer
    const newFormData = { ...formData, [question.fieldName]: currentAnswer }
    setFormData(newFormData)

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: currentAnswer.trim() || '(skipped)',
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setCurrentAnswer('')

    // Show typing indicator
    setIsTyping(true)

    // Move to next question after typing animation
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setIsTyping(false)
        const nextQuestion = questions[currentStep + 1]
        const onyxMessage: Message = {
          id: `onyx-${Date.now()}`,
          text: nextQuestion.prompt,
          sender: 'onyx',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, onyxMessage])
        setCurrentStep(currentStep + 1)
        setError('')
      }, 1500) // Typing duration
    } else {
      // Last question answered, show summary after typing
      setTimeout(() => {
        setIsTyping(false)
        setCurrentStep(questions.length)
      }, 1500)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData,
          conversation: messages
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && (currentStep === -1 || currentStep < questions.length)) {
      e.preventDefault()
      handleAnswer()
    }
  }

  const getCurrentQuestion = () => {
    if (currentStep >= 0 && currentStep < questions.length) {
      return questions[currentStep]
    }
    return null
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-6 lg:px-8 text-center"
        >
          <div className="bg-white/95 backdrop-blur-sm p-12 rounded-[20px] border-2 border-accent-pink/35 shadow-lg">
            <div className="text-6xl mb-6 text-accent-pink">✓</div>
            <h2 className="text-4xl font-serif font-bold text-black-espresso mb-4" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
              Application Submitted
            </h2>
            <p className="text-xl text-black-espresso/70 mb-4 font-sans">
              Thanks for applying, {formData.creator_name || 'there'}.
            </p>
            <p className="text-lg text-black-espresso/70 mb-8 font-sans">
              Our team will review your application and get back to you within 24-48 hours. We look forward to potentially working with you!
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentQuestion = getCurrentQuestion()

  return (
    <div className="pt-16 min-h-screen flex flex-col" style={{ backgroundImage: 'url(/photos/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-5 lg:px-6 py-6 flex flex-col">
        {/* Progress Indicator */}
        {currentStep >= 0 && currentStep < questions.length && (
          <div className="mb-4 text-center">
            <p className="text-sm text-black-espresso/60 font-sans">
              Question {currentStep + 1} of {questions.length}
            </p>
          </div>
        )}

        {/* Chat Messages */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2 scroll-smooth"
          style={{ maxHeight: 'calc(100vh - 280px)', minHeight: '350px', scrollBehavior: 'smooth' }}
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3 ${
                    message.sender === 'user'
                      ? 'bg-accent-pink text-white'
                      : 'bg-white/95 backdrop-blur-sm border border-black-espresso/10 text-black-espresso'
                  }`}
                >
                  <p className="text-sm md:text-base font-sans leading-relaxed whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-start"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-black-espresso/10 rounded-2xl px-5 py-3">
                  <div className="flex space-x-1.5">
                    <motion.div
                      className="w-2 h-2 bg-black-espresso/40 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-black-espresso/40 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-black-espresso/40 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Summary View */}
          {currentStep === questions.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-sm border border-black-espresso/10 rounded-2xl p-6 mb-4"
            >
              <h3 className="text-xl font-bold text-black-espresso mb-4 font-serif" style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}>
                Thanks for applying. Here is what happens next...
              </h3>
              <div className="space-y-3 text-sm md:text-base text-black-espresso/80 font-sans">
                <p>Our team will review your application and get back to you within 24-48 hours.</p>
                <p>We look forward to potentially working with you!</p>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {(currentStep === -1 || currentQuestion) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-sm border border-black-espresso/10 rounded-2xl p-4"
          >
            {currentStep === -1 ? (
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type="text"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your response..."
                className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans text-sm md:text-base"
              />
            ) : currentQuestion && (
              <>
                {currentQuestion.inputType === 'text' && (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans text-sm md:text-base"
                  />
                )}

                {currentQuestion.inputType === 'number' && (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type="number"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans text-sm md:text-base"
                  />
                )}

                {currentQuestion.inputType === 'select' && (
                  <select
                    ref={inputRef as React.RefObject<HTMLSelectElement>}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-accent-pink/35 text-black-espresso rounded-lg focus:outline-none focus:border-accent-pink transition-colors font-sans text-sm md:text-base"
                  >
                    <option value="">Select an option...</option>
                    {currentQuestion.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </>
            )}

            <button
              onClick={handleAnswer}
              disabled={!currentAnswer.trim() && currentQuestion?.required !== false}
              className="mt-4 w-full bg-accent-pink text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-sans text-sm md:text-base"
              style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              Continue
            </button>
          </motion.div>
        )}

        {/* Submit Button */}
        {currentStep === questions.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            {error && (
              <div className="mb-4 bg-red-500/20 border-2 border-red-500/50 text-red-600 px-4 py-3 rounded-lg text-sm font-sans">
                {error}
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-accent-pink text-white px-6 py-4 font-semibold uppercase tracking-wider hover:bg-accent-pink/90 transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed font-sans"
              style={{ fontFamily: "'Catchy Mager', 'Cormorant Garamond', 'Playfair Display', serif" }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

