import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Filter, Search, Users } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Shared/ui/card"
import { Badge } from "@/components/Shared/ui/badge"
import { Input } from "@/components/Shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Shared/ui/select"
import { Progress } from "@/components/Shared/ui/progress"

export default function SpecializationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2 bg-kokitech-red text-white">Programmes Complets</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos spécialisations</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Des programmes complets pour maîtriser un domaine et obtenir une certification reconnue
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
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="search" placeholder="Rechercher..." className="pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Domaine
                    </label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Tous les domaines" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Tous les domaines</SelectItem>
                        <SelectItem value="development">Développement</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="data">Data Science</SelectItem>
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
                    <label htmlFor="duration" className="text-sm font-medium">
                      Durée
                    </label>
                    <Select>
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Toutes les durées" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes les durées</SelectItem>
                        <SelectItem value="short">1-3 mois</SelectItem>
                        <SelectItem value="medium">3-6 mois</SelectItem>
                        <SelectItem value="long">6+ mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" /> Appliquer les filtres
                  </Button>
                </div>
              </div>
            </div>

            {/* Specializations List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Toutes les spécialisations</h2>
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

              <div className="space-y-6">
                {specializations.map((specialization) => (
                  <Card key={specialization.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                        <Image
                          src={specialization.image || "/placeholder.svg"}
                          alt={specialization.title}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                          <Badge className="bg-kokitech-blue text-white">{specialization.level}</Badge>
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col">
                        <CardHeader className="p-0 pb-4">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {specialization.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="text-2xl mb-2">{specialization.title}</CardTitle>
                          <CardDescription className="text-base">{specialization.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 py-4 flex-grow">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-kokitech-blue" />
                              <span className="text-sm">{specialization.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-kokitech-blue" />
                              <span className="text-sm">{specialization.courses} cours</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4 text-kokitech-blue" />
                              <span className="text-sm">{specialization.students} étudiants</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progression moyenne</span>
                              <span className="font-medium">{specialization.completion}%</span>
                            </div>
                            <Progress value={specialization.completion} className="h-2" />
                          </div>
                        </CardContent>
                        <CardFooter className="p-0 pt-4 flex justify-between items-center border-t">
                          <p className="font-bold text-lg">{specialization.price}</p>
                          <Button asChild className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                            <Link href={`/specializations/${specialization.id}`}>
                              Voir le programme <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
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
                  <span>...</span>
                  <Button variant="outline" size="sm">
                    4
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

const specializations = [
  {
    id: "1",
    title: "Développeur Full Stack JavaScript",
    description:
      "Maîtrisez le développement web moderne avec JavaScript, de la conception d'interfaces utilisateur réactives à la création d'API robustes et de bases de données évolutives.",
    price: "149900 XAF",
    image: "/placeholder.svg?height=400&width=400",
    level: "Intermédiaire",
    duration: "6 mois",
    courses: 12,
    students: 845,
    completion: 78,
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    title: "Data Science & Intelligence Artificielle",
    description:
      "Plongez dans le monde de la data science et de l'IA en apprenant à collecter, analyser et interpréter des données pour créer des modèles prédictifs et des solutions d'intelligence artificielle.",
    price: "189900 XAF",
    image: "/placeholder.svg?height=400&width=400",
    level: "Avancé",
    duration: "8 mois",
    courses: 15,
    students: 623,
    completion: 65,
    tags: ["Python", "Machine Learning", "Deep Learning", "Data Visualization"],
  },
  {
    id: "3",
    title: "UX/UI Design & Product Management",
    description:
      "Apprenez à concevoir des produits numériques centrés sur l'utilisateur, de la recherche utilisateur à la conception d'interfaces, en passant par la gestion de produit et le prototypage.",
    price: "129900 XAF",
    image: "/placeholder.svg?height=400&width=400",
    level: "Tous niveaux",
    duration: "5 mois",
    courses: 10,
    students: 512,
    completion: 82,
    tags: ["UX Research", "UI Design", "Figma", "Product Management"],
  },
  {
    id: "4",
    title: "Marketing Digital & Growth Hacking",
    description:
      "Développez des compétences avancées en marketing digital et growth hacking pour acquérir, convertir et fidéliser des clients à grande échelle avec des ressources limitées.",
    price: "119900 XAF",
    image: "/placeholder.svg?height=400&width=400",
    level: "Intermédiaire",
    duration: "4 mois",
    courses: 8,
    students: 478,
    completion: 75,
    tags: ["SEO", "SEM", "Content Marketing", "Analytics"],
  },
  {
    id: "5",
    title: "Cybersécurité & Ethical Hacking",
    description:
      "Apprenez à protéger les systèmes informatiques contre les menaces et vulnérabilités en maîtrisant les techniques de cybersécurité et de piratage éthique.",
    price: "169900 XAF",
    image: "/placeholder.svg?height=400&width=400",
    level: "Avancé",
    duration: "7 mois",
    courses: 14,
    students: 356,
    completion: 70,
    tags: ["Network Security", "Penetration Testing", "Cryptography", "Risk Management"],
  },
]
