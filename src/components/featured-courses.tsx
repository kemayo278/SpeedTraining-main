import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedCourses() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2 bg-kokitech-blue text-white">Nouveautés</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nos formations à la une</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez nos formations les plus populaires et les dernières nouveautés
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <div className="relative aspect-video overflow-hidden">
                <Badge className={`absolute top-2 right-2 z-10 ${course.isNew ? "bg-kokitech-red text-white" : ""}`}>
                  {course.isNew ? "Nouveau" : course.category}
                </Badge>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardFooter className="border-t p-4 bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between w-full">
                  <p className="font-medium">{course.price}</p>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/courses/${course.id}`}>
                      Voir le détail <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">
              Voir toutes les formations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const featuredCourses = [
  {
    id: "1",
    title: "Développement Web Full Stack",
    description: "Apprenez à créer des applications web complètes avec les technologies modernes.",
    price: "49900 XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    isNew: true,
  },
  {
    id: "2",
    title: "Design UX/UI Avancé",
    description: "Maîtrisez les principes de conception d'interfaces utilisateur et d'expérience utilisateur.",
    price: "39900 XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Design",
    isNew: false,
  },
  {
    id: "3",
    title: "Intelligence Artificielle pour la Santé",
    description: "Découvrez comment l'IA révolutionne le secteur de la santé et ses applications pratiques.",
    price: "59900 XAF",
    image: "/placeholder.svg?height=250&width=350",
    category: "Santé",
    isNew: true,
  },
]
