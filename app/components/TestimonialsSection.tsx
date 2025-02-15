"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Ana Silva",
    role: "Clínica Geral",
    content:
      "A CognAi revolucionou minha prática médica. Os diagnósticos precisos e rápidos me permitem atender mais pacientes com maior confiança.",
  },
  {
    id: 2,
    name: "Dr. Carlos Mendes",
    role: "Cardiologista",
    content:
      "Como cardiologista, a precisão é crucial. A CognAi fornece insights valiosos que complementam minha experiência clínica.",
  },
  {
    id: 3,
    name: "Dra. Mariana Costa",
    role: "Pediatra",
    content:
      "A interface amigável e os resultados rápidos da CognAi são perfeitos para minha prática pediátrica agitada. Uma ferramenta indispensável!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">O Que Dizem Nossos Usuários</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
              <div className="font-bold">{testimonials[currentIndex].name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

