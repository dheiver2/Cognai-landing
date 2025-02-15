"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Como a CognAi utiliza IA para diagnósticos médicos?",
    answer:
      "A CognAi utiliza algoritmos avançados de aprendizado de máquina treinados em vastos conjuntos de dados médicos. Esses algoritmos analisam sintomas, histórico médico e outros fatores relevantes para sugerir possíveis diagnósticos e auxiliar os profissionais de saúde em suas decisões.",
  },
  {
    question: "A CognAi substitui a consulta com um médico?",
    answer:
      "Não, a CognAi não substitui a consulta médica. Nossa plataforma é uma ferramenta de suporte que auxilia os profissionais de saúde, fornecendo insights baseados em IA para complementar sua expertise clínica. Sempre recomendamos a consulta com um médico para diagnósticos e tratamentos adequados.",
  },
  {
    question: "Quão precisa é a tecnologia de diagnóstico da CognAi?",
    answer:
      "A precisão da CognAi é alta, com uma taxa de acerto superior a 90% em muitos casos. No entanto, é importante lembrar que a IA é uma ferramenta de suporte e não um substituto para o julgamento clínico de um médico treinado.",
  },
  {
    question: "Como a CognAi protege a privacidade dos dados dos pacientes?",
    answer:
      "A CognAi leva a privacidade dos dados muito a sério. Utilizamos criptografia de ponta a ponta, armazenamento seguro em nuvem e seguimos rigorosamente as regulamentações de proteção de dados, como GDPR e HIPAA. Todos os dados são anonimizados e nunca são compartilhados com terceiros sem consentimento explícito.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-100 dark:bg-gray-700 p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

