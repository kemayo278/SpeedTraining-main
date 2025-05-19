import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, CheckCircle, Globe, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="mb-2 bg-kokitech-blue text-white">Notre Histoire</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  À propos de Kokitech Group Academy
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Découvrez notre mission, notre vision et les valeurs qui nous animent pour transformer l'éducation
                  numérique.
                </p>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="L'équipe Kokitech Academy"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Notre histoire"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter">Notre histoire</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Fondée en 2018, Kokitech Group Academy est née de la vision de trois passionnés de technologie et
                d'éducation : Marie Dupont, Jean Konan et Ahmed Benali. Face au constat d'un écart grandissant entre les
                compétences enseignées dans les cursus traditionnels et les besoins réels du marché du travail, ils ont
                décidé de créer une plateforme d'apprentissage innovante.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Ce qui a commencé comme une petite collection de cours en ligne s'est rapidement transformé en une
                plateforme complète offrant des formations de qualité dans divers domaines technologiques. Aujourd'hui,
                Kokitech Academy compte plus de 50 000 apprenants dans 30 pays et continue de croître avec la mission de
                rendre l'éducation de qualité accessible à tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Notre mission et nos valeurs</h2>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-3xl mx-auto">
              Chez Kokitech Academy, nous sommes guidés par des principes forts qui définissent notre approche de
              l'éducation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="bg-white dark:bg-gray-950">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-kokitech-blue/10">
                      <value.icon className="h-6 w-6 text-kokitech-blue" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Notre équipe</h2>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-3xl mx-auto">
              Rencontrez les personnes passionnées qui rendent possible l'expérience Kokitech Academy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                  <div className="flex mt-4 space-x-2">
                    {member.social.map((social, idx) => (
                      <Button key={idx} variant="ghost" size="icon" asChild>
                        <Link href={social.url} target="_blank" rel="noopener noreferrer">
                          <social.icon className="h-4 w-4" />
                          <span className="sr-only">{social.name}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Kokitech Academy en chiffres</h2>
            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-3xl mx-auto">
              Quelques statistiques qui témoignent de notre impact dans le domaine de l'éducation numérique.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 rounded-full bg-kokitech-blue/10">
                    <stat.icon className="h-6 w-6 text-kokitech-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-kokitech-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rejoignez l'aventure Kokitech Academy</h2>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Développez vos compétences, accélérez votre carrière et rejoignez notre communauté d'apprenants
                passionnés.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-kokitech-blue hover:bg-white/90">
                <Link href="/courses">
                  Découvrir nos formations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Excellence pédagogique",
    description:
      "Nous nous engageons à offrir des formations de la plus haute qualité, conçues par des experts reconnus dans leur domaine et constamment mises à jour pour refléter les dernières avancées.",
    icon: Award,
  },
  {
    title: "Accessibilité",
    description:
      "Nous croyons que l'éducation de qualité devrait être accessible à tous, indépendamment de leur situation géographique ou financière. Nous proposons des options flexibles pour répondre aux besoins de chacun.",
    icon: Globe,
  },
  {
    title: "Apprentissage pratique",
    description:
      "Nous privilégions l'apprentissage par la pratique avec des projets concrets et des exercices qui reflètent les défis du monde réel, permettant aux apprenants d'acquérir des compétences immédiatement applicables.",
    icon: CheckCircle,
  },
  {
    title: "Innovation continue",
    description:
      "Nous explorons constamment de nouvelles méthodes pédagogiques et technologies pour améliorer l'expérience d'apprentissage et préparer nos étudiants aux métiers de demain.",
    icon: BookOpen,
  },
  {
    title: "Communauté collaborative",
    description:
      "Nous favorisons un environnement d'apprentissage collaboratif où les apprenants peuvent échanger, s'entraider et créer des connexions professionnelles durables.",
    icon: Users,
  },
  {
    title: "Développement personnel",
    description:
      "Au-delà des compétences techniques, nous encourageons le développement de compétences transversales essentielles comme la résolution de problèmes, la communication et l'adaptabilité.",
    icon: GraduationCap,
  },
]

const team = [
  {
    name: "Marie Dupont",
    role: "Co-fondatrice & CEO",
    bio: "Ancienne directrice de l'innovation chez TechEdu, Marie a plus de 15 ans d'expérience dans l'éducation numérique. Elle est passionnée par l'accessibilité de l'éducation et l'apprentissage tout au long de la vie.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Jean Konan",
    role: "Co-fondateur & CTO",
    bio: "Développeur full-stack et architecte système, Jean a travaillé pour plusieurs startups avant de co-fonder Kokitech Academy. Il supervise le développement de la plateforme et l'infrastructure technique.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "GitHub", icon: Github, url: "#" },
    ],
  },
  {
    name: "Ahmed Benali",
    role: "Co-fondateur & Directeur Pédagogique",
    bio: "Ancien professeur d'université et consultant en formation professionnelle, Ahmed apporte son expertise en conception pédagogique et en développement de curriculum pour garantir la qualité des formations.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing",
    bio: "Avec une expérience en marketing digital et en stratégie de contenu, Sophie dirige les initiatives marketing de Kokitech Academy pour atteindre et engager de nouveaux apprenants.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Thomas Dubois",
    role: "Responsable UX/UI",
    bio: "Designer expérimenté spécialisé dans l'expérience utilisateur, Thomas travaille à rendre la plateforme Kokitech Academy intuitive, accessible et agréable à utiliser pour tous les apprenants.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
      { name: "Dribbble", icon: Dribbble, url: "#" },
    ],
  },
  {
    name: "Amina Ndiaye",
    role: "Responsable des Partenariats",
    bio: "Amina développe et gère les relations avec les entreprises, les universités et les organisations professionnelles pour créer des opportunités de collaboration et d'expansion.",
    image: "/placeholder.svg?height=400&width=400",
    social: [
      { name: "Twitter", icon: Twitter, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" },
    ],
  },
]

const stats = [
  {
    value: "50,000+",
    label: "Apprenants",
    icon: Users,
  },
  {
    value: "200+",
    label: "Formations",
    icon: BookOpen,
  },
  {
    value: "30+",
    label: "Pays",
    icon: Globe,
  },
  {
    value: "95%",
    label: "Taux de satisfaction",
    icon: Award,
  },
]

function Twitter(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function Linkedin(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Github(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function Dribbble(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}
