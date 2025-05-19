"use client"

import type React from "react"

import { useState } from "react"
import { Check, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Shared/ui/card"
import { Input } from "@/components/Shared/ui/input"
import { Label } from "@/components/Shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/Shared/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Shared/ui/select"
import { Textarea } from "@/components/Shared/ui/textarea"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-nous</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nous sommes là pour répondre à vos questions et vous aider dans votre parcours d'apprentissage
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Restons en contact</h2>
                <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Nos coordonnées</CardTitle>
                    <CardDescription>Plusieurs façons de nous contacter</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div className="grid gap-1">
                        <h3 className="text-base font-medium">Email</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">contact@kokitech-academy.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div className="grid gap-1">
                        <h3 className="text-base font-medium">Téléphone</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div className="grid gap-1">
                        <h3 className="text-base font-medium">Adresse</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          123 Avenue de la Tech
                          <br />
                          75001 Paris, France
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Horaires d'ouverture</CardTitle>
                    <CardDescription>Notre équipe est disponible aux horaires suivants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Lundi - Vendredi</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">9h00 - 18h00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Samedi</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">10h00 - 15h00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Dimanche</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Fermé</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              {isSubmitted ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
                    <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-bold">Message envoyé avec succès</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                      </p>
                    </div>
                    <Button onClick={() => setIsSubmitted(false)}>Envoyer un autre message</Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" placeholder="Entrez votre nom" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Entrez votre email" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="Entrez votre numéro de téléphone" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Renseignement général</SelectItem>
                        <SelectItem value="support">Support technique</SelectItem>
                        <SelectItem value="billing">Facturation</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Vous êtes</Label>
                    <RadioGroup defaultValue="student" className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student" className="font-normal">
                          Étudiant
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional" className="font-normal">
                          Professionnel
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company" className="font-normal">
                          Entreprise
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal">
                          Autre
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Entrez votre message" className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
