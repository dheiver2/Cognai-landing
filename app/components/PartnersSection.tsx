"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Hospital A", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Clínica B", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Laboratório C", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Universidade D", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Instituto E", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Centro Médico F", logo: "/placeholder.svg?height=80&width=80" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Nossos Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={80}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

