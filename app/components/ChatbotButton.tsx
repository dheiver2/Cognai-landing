"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 rounded-full p-0 bg-blue-500 hover:bg-blue-600">
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <div className="p-4 bg-blue-500 text-white">
              <h3 className="font-bold">Assistente CognAi</h3>
            </div>
            <div className="p-4 h-[calc(100%-4rem)] overflow-y-auto">
              <p className="mb-4">Olá! Como posso ajudar você hoje?</p>
              {/* Aqui você pode adicionar a lógica do chatbot */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

