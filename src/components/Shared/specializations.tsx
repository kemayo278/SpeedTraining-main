import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Specializations() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2 bg-kokitech-red text-white">Programmes Complets</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos spécialisations</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Des programmes complets pour maîtriser un domaine et obtenir une certification reconnue
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 mt-12">
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
                    <Button asChild>
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
          <Button asChild variant="outline" size="lg">
            <Link href="/specializations">
              Voir toutes les spécialisations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const specializations = [
  {
    id: "1",
    title: "Développeur Full Stack JavaScript",
    description:
      "Maîtrisez le développement web moderne avec JavaScript, de la conception d'interfaces utilisateur réactives à la création d'API robustes et de bases de données évolutives.",
    price: "1499€",
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
    price: "1899€",
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
    price: "1299€",
    image: "/placeholder.svg?height=400&width=400",
    level: "Tous niveaux",
    duration: "5 mois",
    courses: 10,
    students: 512,
    completion: 82,
    tags: ["UX Research", "UI Design", "Figma", "Product Management"],
  },
]
