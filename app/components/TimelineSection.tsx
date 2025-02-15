"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const steps = [
  { title: "Entrada de Sintomas", description: "O paciente ou médico insere os sintomas na plataforma." },
  { title: "Análise de IA", description: "Nossos algoritmos avançados analisam os dados fornecidos." },
  { title: "Geração de Hipóteses", description: "A IA gera possíveis diagnósticos baseados na análise." },
  { title: "Revisão Médica", description: "Um profissional de saúde revisa as sugestões da IA." },
  { title: "Diagnóstico Final", description: "O médico determina o diagnóstico final com o suporte da IA." },
]

export function TimelineSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Processo de Diagnóstico</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                {index !== steps.length - 1 && <div className="w-px h-full bg-blue-500 mt-2"></div>}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

