"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
    {
        name: "Starter",
        price: "$49",
        description: "Perfect for small teams and startups",
        features: ["1 AI Agent", "5,000 queries/month", "Basic analytics", "Email support", "99.9% uptime SLA"],
    },
    {
        name: "Professional",
        price: "$149",
        description: "Ideal for growing businesses",
        features: [
            "5 AI Agents",
            "50,000 queries/month",
            "Advanced analytics",
            "Priority support",
            "Custom integrations",
            "99.99% uptime SLA",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: [
            "Unlimited AI Agents",
            "Custom query limit",
            "Enterprise analytics",
            "24/7 dedicated support",
            "Custom development",
            "99.999% uptime SLA",
            "Custom SLA",
        ],
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-black">
            <div className="hidden md:block absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3B0764,transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border ${plan.popular ? "border-purple-500" : "border-white/10"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                                <p className="text-gray-400">{plan.description}</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-purple-500" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className={`w-full ${plan.popular
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                    : "bg-white/10 hover:bg-white/20"
                                    }`}
                            >
                                Get Started
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

