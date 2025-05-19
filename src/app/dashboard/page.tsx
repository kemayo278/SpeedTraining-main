import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BookOpen, Calendar, Clock, Play, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur votre espace apprenant, Jean.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Formations en cours</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">sur 6 formations achetées</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progression globale</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <Progress value={68} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificats obtenus</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heures d'apprentissage</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42h</div>
            <p className="text-xs text-muted-foreground">+5h depuis la semaine dernière</p>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Continuer l'apprentissage</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/courses">
              Voir toutes mes formations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {continueLearningCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="relative aspect-video md:aspect-square overflow-hidden">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="h-10 w-10 rounded-full bg-kokitech-blue hover:bg-kokitech-darkBlue">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-2 p-4 flex flex-col">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-base line-clamp-1">{course.title}</CardTitle>
                    <CardDescription className="text-xs">{course.module}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 py-2 flex-grow">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progression</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1" />
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 pt-2 flex justify-between items-center">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{course.timeLeft} restant</span>
                    </div>
                    <Button asChild size="sm" className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                      <Link href={`/dashboard/courses/${course.id}`}>Continuer</Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Events and Recommendations */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Upcoming Events */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Événements à venir</CardTitle>
            <CardDescription>Vos prochains cours et événements planifiés</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-muted p-2 rounded-md">
                  <Calendar className="h-4 w-4 text-kokitech-blue" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">{event.title}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/calendar">Voir le calendrier</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Recommendations */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Recommandations</CardTitle>
            <CardDescription>Formations qui pourraient vous intéresser</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="flex items-start space-x-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm line-clamp-1">{course.title}</p>
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs">
                    <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>
                      {course.rating} ({course.reviews} avis)
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{course.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/courses">Explorer plus de formations</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Learning Path Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progression de ma spécialisation</CardTitle>
          <CardDescription>Développeur Full Stack JavaScript</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="modules">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="timeline">Chronologie</TabsTrigger>
            </TabsList>
            <TabsContent value="modules" className="space-y-4 pt-4">
              {specializationModules.map((module, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          module.completed ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {module.completed ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{module.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {module.lessons} leçons • {module.duration}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm">
                      {module.completed ? (
                        <Badge variant="outline" className="bg-green-100 text-green-700 hover:bg-green-100">
                          Terminé
                        </Badge>
                      ) : module.inProgress ? (
                        <Badge variant="outline" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          En cours
                        </Badge>
                      ) : (
                        <Badge variant="outline">À venir</Badge>
                      )}
                    </div>
                  </div>
                  <Progress value={module.progress} className="h-1" />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="timeline" className="pt-4">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
                <div className="space-y-8">
                  {specializationTimeline.map((item, index) => (
                    <div key={index} className="relative pl-10">
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          item.completed ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.completed ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <Clock className="h-4 w-4" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-kokitech-blue hover:bg-kokitech-darkBlue">
            <Link href="/dashboard/specializations/1">Voir ma spécialisation</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const continueLearningCourses = [
  {
    id: "1",
    title: "Développement Web Full Stack",
    module: "Module 3: JavaScript Moderne",
    progress: 68,
    timeLeft: "2h 15min",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "2",
    title: "Design UX/UI Avancé",
    module: "Module 2: Principes de design d'interface",
    progress: 42,
    timeLeft: "3h 30min",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const upcomingEvents = [
  {
    title: "Session live: Introduction à React",
    date: "Demain",
    time: "14:00 - 15:30",
    description: "Session interactive avec l'instructeur pour découvrir les fondamentaux de React.",
  },
  {
    title: "Date limite: Projet JavaScript",
    date: "Vendredi",
    time: "23:59",
    description: "N'oubliez pas de soumettre votre projet final pour le module JavaScript.",
  },
  {
    title: "Webinaire: Tendances du développement web",
    date: "12 Juin",
    time: "11:00 - 12:00",
    description: "Découvrez les dernières tendances et technologies du développement web.",
  },
]

const recommendedCourses = [
  {
    id: "4",
    title: "React Native pour les développeurs web",
    category: "Développement",
    rating: 4.8,
    reviews: 324,
    description: "Apprenez à créer des applications mobiles avec vos compétences web existantes.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "5",
    title: "TypeScript pour les développeurs JavaScript",
    category: "Développement",
    rating: 4.7,
    reviews: 215,
    description: "Maîtrisez TypeScript pour écrire du code JavaScript plus robuste et maintenable.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "6",
    title: "Design System: de la théorie à la pratique",
    category: "Design",
    rating: 4.9,
    reviews: 178,
    description: "Créez et implémentez un design system complet pour vos projets.",
    image: "/placeholder.svg?height=50&width=50",
  },
]

const specializationModules = [
  {
    title: "Introduction au développement web",
    lessons: 8,
    duration: "2h 30min",
    progress: 100,
    completed: true,
    inProgress: false,
  },
  {
    title: "HTML & CSS Fondamentaux",
    lessons: 12,
    duration: "4h 15min",
    progress: 100,
    completed: true,
    inProgress: false,
  },
  {
    title: "JavaScript Moderne",
    lessons: 15,
    duration: "6h 45min",
    progress: 68,
    completed: false,
    inProgress: true,
  },
  {
    title: "React.js",
    lessons: 18,
    duration: "8h 20min",
    progress: 0,
    completed: false,
    inProgress: false,
  },
  {
    title: "Node.js & Express",
    lessons: 14,
    duration: "5h 50min",
    progress: 0,
    completed: false,
    inProgress: false,
  },
]

const specializationTimeline = [
  {
    title: "Début de la spécialisation",
    date: "15 Mars 2023",
    description: "Vous avez commencé la spécialisation Développeur Full Stack JavaScript.",
    completed: true,
  },
  {
    title: "Module 1 terminé",
    date: "29 Mars 2023",
    description: "Vous avez terminé le module Introduction au développement web.",
    completed: true,
  },
  {
    title: "Module 2 terminé",
    date: "18 Avril 2023",
    description: "Vous avez terminé le module HTML & CSS Fondamentaux.",
    completed: true,
  },
  {
    title: "Module 3 en cours",
    date: "En cours",
    description: "Vous êtes en train de suivre le module JavaScript Moderne.",
    completed: false,
  },
  {
    title: "Date prévue de fin",
    date: "15 Septembre 2023",
    description: "Date estimée de fin de la spécialisation.",
    completed: false,
  },
]
