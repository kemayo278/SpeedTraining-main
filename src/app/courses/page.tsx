import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Shared/ui/card"
import { Badge } from "@/components/Shared/ui/badge"
import { Input } from "@/components/Shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Shared/ui/select"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos formations</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez toutes nos formations pour développer vos compétences et accélérer votre carrière
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Filters */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Filtres</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="search" className="text-sm font-medium">
                      Recherche
                    </label>
                    <div className="relative">
                      <Input id="search" placeholder="Rechercher une formation..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Catégorie
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Toutes les catégories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes les catégories</SelectItem>
                        <SelectItem value="development">Développement</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="health">Santé</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="level" className="text-sm font-medium">
                      Niveau
                    </label>
                    <Select>
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Tous les niveaux" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les niveaux</SelectItem>
                        <SelectItem value="beginner">Débutant</SelectItem>
                        <SelectItem value="intermediate">Intermédiaire</SelectItem>
                        <SelectItem value="advanced">Avancé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Prix
                    </label>
                    <Select>
                      <SelectTrigger id="price">
                        <SelectValue placeholder="Tous les prix" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les prix</SelectItem>
                        <SelectItem value="free">Gratuit</SelectItem>
                        <SelectItem value="paid">Payant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" /> Appliquer les filtres
                  </Button>
                </div>
              </div>
            </div>

            {/* Course List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Toutes les formations</h2>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popularité</SelectItem>
                    <SelectItem value="recent">Plus récent</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Badge className="absolute top-2 right-2 z-10">{course.isNew ? "Nouveau" : course.level}</Badge>
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{course.category}</Badge>
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <CardTitle className="line-clamp-1 mt-2">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t p-4 bg-gray-50 dark:bg-gray-900">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-medium">{course.price}</p>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/courses/detail`}>
                            Voir <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm">
                    8
                  </Button>
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const courses = [
  {
    id: "1",
    title: "Développement Web Php Full Stack",
    description: "Apprenez à créer des applications web complètes avec les technologies modernes.",
    price: "93000XAF",
    image: "/placeholder.svg?height=250&width=350",
    // image: "/images/code.jpeg?height=250&width=350",
    category: "Développement",
    level: "Intermédiaire",
    duration: "12 semaines",
    isNew: true,
  },
  {
    id: "2",
    title: "Design UX/UI Avancé",
    description: "Maîtrisez les principes de conception d'interfaces utilisateur et d'expérience utilisateur.",
    price: "70000XAF",
    image: "/placeholder.svg?height=250&width=350",
    // image: "/images/sage-saari.webp?height=250&width=350",
    category: "Design",
    level: "Avancé",
    duration: "8 semaines",
    isNew: false,
  },
  {
    id: "3",
    title: "Intelligence Artificielle pour la Santé",
    description: "Découvrez comment l'IA révolutionne le secteur de la santé et ses applications pratiques.",
    price: "80000XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Santé",
    level: "Intermédiaire",
    duration: "10 semaines",
    isNew: true,
  },
  {
    id: "4",
    title: "Marketing Digital et Réseaux Sociaux",
    description: "Apprenez à créer et gérer des campagnes marketing efficaces sur les réseaux sociaux.",
    price: "34900XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Business",
    level: "Débutant",
    duration: "6 semaines",
    isNew: false,
  },
  {
    id: "5",
    title: "Développement Mobile avec React Native",
    description: "Créez des applications mobiles cross-platform avec React Native.",
    price: "44900XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    level: "Intermédiaire",
    duration: "8 semaines",
    isNew: false,
  },
  {
    id: "6",
    title: "Data Science et Analyse de Données",
    description:
      "Maîtrisez les techniques d'analyse de données et de visualisation pour prendre des décisions basées sur les données.",
    price: "54900XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Data Science",
    level: "Avancé",
    duration: "12 semaines",
    isNew: true,
  },
]
