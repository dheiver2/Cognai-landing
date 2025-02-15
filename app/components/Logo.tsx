"use client"

import { motion } from "framer-motion"
import { Brain } from "lucide-react"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme()

  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="relative w-10 h-10" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
        <Brain className="w-10 h-10 text-gray-900 dark:text-gray-100" />
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-300 dark:from-gray-300 dark:to-gray-700 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>
      <div className="flex flex-col">
        <motion.span
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          CognAi
        </motion.span>
        <motion.span
          className="text-xs text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Diagnósticos Inteligentes
        </motion.span>
      </div>
    </motion.div>
  )
}

export function LogoIcon() {
  return (
    <div className="relative w-8 h-8">
      <Brain className="w-8 h-8 text-gray-900 dark:text-gray-100" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-300 dark:from-gray-300 dark:to-gray-700 opacity-20" />
    </div>
  )
}

