"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DemoSection() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")

  const handleDiagnosis = () => {
    // Simular um diagnóstico baseado em IA
    setTimeout(() => {
      setDiagnosis(
        "Com base nos sintomas fornecidos, nossa IA sugere a possibilidade de uma infecção viral respiratória. Recomendamos consultar um médico para uma avaliação completa.",
      )
    }, 2000)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experimente Nosso Diagnóstico IA</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <Label htmlFor="symptoms">Descreva seus sintomas:</Label>
            <Input
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Ex: febre, tosse, dor de cabeça"
              className="mt-2"
            />
          </div>
          <Button onClick={handleDiagnosis} className="w-full mb-6">
            Analisar Sintomas
          </Button>
          {diagnosis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg"
            >
              <h3 className="font-bold mb-2">Diagnóstico Preliminar:</h3>
              <p>{diagnosis}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

