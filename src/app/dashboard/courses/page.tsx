import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Clock, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MyCourses() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mes formations</h1>
          <p className="text-muted-foreground">Gérez et suivez vos formations en cours</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher..." className="pl-8 w-[200px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrer par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les formations</SelectItem>
              <SelectItem value="in-progress">En cours</SelectItem>
              <SelectItem value="completed">Terminées</SelectItem>
              <SelectItem value="not-started">Non commencées</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="courses">Formations</TabsTrigger>
          <TabsTrigger value="specializations">Spécialisations</TabsTrigger>
          <TabsTrigger value="saved">Sauvegardées</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <Badge
                      className={`${
                        course.status === "completed"
                          ? "bg-green-500"
                          : course.status === "in-progress"
                            ? "bg-kokitech-blue"
                            : "bg-gray-500"
                      } text-white`}
                    >
                      {course.status === "completed"
                        ? "Terminé"
                        : course.status === "in-progress"
                          ? "En cours"
                          : "Non commencé"}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{course.timeLeft} restant</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        <span>
                          {course.completedLessons}/{course.totalLessons} leçons
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full bg-kokitech-blue hover:bg-kokitech-darkBlue">
                    <Link href={`/dashboard/courses/${course.id}`}>
                      {course.status === "completed" ? "Revoir" : "Continuer"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specializations" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {specializations.map((specialization) => (
              <Card key={specialization.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                    <Image
                      src={specialization.image || "/placeholder.svg"}
                      alt={specialization.title}
                      fill
                      className="object-cover"
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
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progression globale</span>
                          <span className="font-medium">{specialization.progress}%</span>
                        </div>
                        <Progress value={specialization.progress} className="h-2" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4 text-kokitech-blue" />
                            <span className="text-sm">
                              {specialization.completedCourses}/{specialization.totalCourses} cours terminés
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-kokitech-blue" />
                            <span className="text-sm">{specialization.timeLeft} restant</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="mr-2 h-4 w-4 text-kokitech-blue" />
                            <span className="text-sm">{specialization.rating} (Note moyenne)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4 flex justify-between items-center border-t">
                      <p className="font-medium">Prochaine étape: {specialization.nextStep}</p>
                      <Button asChild className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                        <Link href={`/dashboard/specializations/${specialization.id}`}>
                          Continuer <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <Badge variant="outline" className="bg-white/20 backdrop-blur-sm">
                      {course.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        {course.rating} ({course.reviews} avis)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <p className="font-bold">{course.price}</p>
                  <Button asChild variant="outline">
                    <Link href={`/courses/${course.id}`}>
                      Voir le détail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const courses = [
  {
    id: "1",
    title: "Développement Web Full Stack",
    description: "Apprenez à créer des applications web complètes avec les technologies modernes.",
    image: "/placeholder.svg?height=250&width=350",
    progress: 68,
    status: "in-progress",
    timeLeft: "12h 30min",
    completedLessons: 24,
    totalLessons: 35,
  },
  {
    id: "2",
    title: "Design UX/UI Avancé",
    description: "Maîtrisez les principes de conception d'interfaces utilisateur et d'expérience utilisateur.",
    image: "/placeholder.svg?height=250&width=350",
    progress: 42,
    status: "in-progress",
    timeLeft: "18h 45min",
    completedLessons: 10,
    totalLessons: 24,
  },
  {
    id: "3",
    title: "Introduction à Python",
    description: "Découvrez les bases de la programmation avec Python, un langage polyvalent et puissant.",
    image: "/placeholder.svg?height=250&width=350",
    progress: 100,
    status: "completed",
    timeLeft: "0h",
    completedLessons: 20,
    totalLessons: 20,
  },
  {
    id: "4",
    title: "Marketing Digital",
    description: "Apprenez les stratégies et techniques du marketing digital pour promouvoir vos produits et services.",
    image: "/placeholder.svg?height=250&width=350",
    progress: 0,
    status: "not-started",
    timeLeft: "24h 15min",
    completedLessons: 0,
    totalLessons: 28,
  },
  {
    id: "5",
    title: "Intelligence Artificielle pour la Santé",
    description: "Découvrez comment l'IA révolutionne le secteur de la santé et ses applications pratiques.",
    image: "/placeholder.svg?height=250&width=350",
    progress: 15,
    status: "in-progress",
    timeLeft: "22h 10min",
    completedLessons: 3,
    totalLessons: 18,
  },
]

const specializations = [
  {
    id: "1",
    title: "Développeur Full Stack JavaScript",
    description:
      "Maîtrisez le développement web moderne avec JavaScript, de la conception d'interfaces utilisateur réactives à la création d'API robustes et de bases de données évolutives.",
    image: "/placeholder.svg?height=400&width=400",
    level: "Intermédiaire",
    progress: 45,
    completedCourses: 2,
    totalCourses: 5,
    timeLeft: "3 mois",
    rating: 4.8,
    nextStep: "Module React.js",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    title: "UX/UI Design & Product Management",
    description:
      "Apprenez à concevoir des produits numériques centrés sur l'utilisateur, de la recherche utilisateur à la conception d'interfaces, en passant par la gestion de produit et le prototypage.",
    image: "/placeholder.svg?height=400&width=400",
    level: "Tous niveaux",
    progress: 20,
    completedCourses: 1,
    totalCourses: 4,
    timeLeft: "4 mois",
    rating: 4.9,
    nextStep: "Module Recherche Utilisateur",
    tags: ["UX Research", "UI Design", "Figma", "Product Management"],
  },
]

const savedCourses = [
  {
    id: "6",
    title: "React Native pour les développeurs web",
    description: "Apprenez à créer des applications mobiles avec vos compétences web existantes.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    rating: 4.8,
    reviews: 324,
    duration: "8 semaines",
    price: "449€",
  },
  {
    id: "7",
    title: "Data Science et Machine Learning",
    description: "Maîtrisez les techniques d'analyse de données et les algorithmes de machine learning.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Data Science",
    rating: 4.9,
    reviews: 512,
    duration: "12 semaines",
    price: "599€",
  },
  {
    id: "8",
    title: "Cybersécurité: Fondamentaux et Pratiques",
    description: "Apprenez à sécuriser vos applications et à protéger vos données contre les cyberattaques.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Sécurité",
    rating: 4.7,
    reviews: 289,
    duration: "10 semaines",
    price: "499€",
  },
]
