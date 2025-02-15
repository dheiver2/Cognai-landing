"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    price: "R$ 299/mês",
    features: [
      "100 diagnósticos/mês",
      "Suporte por e-mail",
      "Atualizações trimestrais",
      "Integração básica",
      "Relatórios mensais",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 799/mês",
    features: [
      "Diagnósticos ilimitados",
      "Suporte prioritário 24/7",
      "Atualizações mensais",
      "Integração avançada",
      "Relatórios semanais",
      "Personalização de IA",
    ],
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    features: [
      "Tudo do Profissional",
      "Suporte dedicado",
      "Atualizações personalizadas",
      "Integração total",
      "Relatórios em tempo real",
      "IA treinada para sua especialidade",
      "Consultoria estratégica",
    ],
  },
]

export function PricingComparison() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Compare Nossos Planos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg ${
                selectedPlan === plan.name ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contate-nos" : "Escolher Plano"}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

