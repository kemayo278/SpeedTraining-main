import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Calendar, Clock, Download, Globe, Play, Share2, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function CourseDetailPage() {
  // In a real application, you would fetch the course data based on the ID
  const course = {
    id: "1",
    title: "Développement Web Full Stack",
    description:
      "Apprenez à créer des applications web complètes avec les technologies modernes. Ce cours couvre HTML, CSS, JavaScript, React, Node.js, et les bases de données.",
    longDescription:
      "Ce cours complet de développement web full stack vous permettra d'acquérir toutes les compétences nécessaires pour créer des applications web modernes et performantes. Vous apprendrez les fondamentaux du développement front-end avec HTML, CSS et JavaScript, puis vous approfondirez vos connaissances avec des frameworks modernes comme React. Côté back-end, vous découvrirez Node.js, Express et les bases de données relationnelles et NoSQL. À la fin de cette formation, vous serez capable de concevoir, développer et déployer des applications web complètes.",
    price: "499€",
    image: "/images/code.jpeg?height=250&width=350",
    category: "Développement",
    level: "Intermédiaire",
    duration: "12 semaines",
    isNew: true,
    rating: 4.8,
    students: 1245,
    lastUpdated: "Avril 2023",
    language: "Français",
    instructor: {
      name: "Jean Dupont",
      title: "Développeur Senior & Formateur",
      bio: "Jean est développeur full stack depuis plus de 10 ans. Il a travaillé pour plusieurs startups et grandes entreprises avant de se consacrer à l'enseignement.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    modules: [
      {
        title: "Introduction au développement web",
        lessons: [
          { title: "Présentation du cours", duration: "10:15" },
          { title: "Configuration de l'environnement de développement", duration: "15:30" },
          { title: "Comprendre le fonctionnement du web", duration: "20:45" },
        ],
      },
      {
        title: "HTML & CSS Fondamentaux",
        lessons: [
          { title: "Structure HTML de base", duration: "18:20" },
          { title: "Sélecteurs CSS et propriétés", duration: "25:10" },
          { title: "Mise en page responsive", duration: "30:45" },
          { title: "Flexbox et Grid", duration: "28:15" },
        ],
      },
      {
        title: "JavaScript Moderne",
        lessons: [
          { title: "Variables, types et fonctions", duration: "22:30" },
          { title: "DOM Manipulation", duration: "26:15" },
          { title: "ES6+ Features", duration: "24:40" },
          { title: "Asynchronous JavaScript", duration: "35:20" },
        ],
      },
    ],
    requirements: [
      "Connaissances de base en informatique",
      "Ordinateur avec accès à Internet",
      "Aucune expérience préalable en programmation n'est requise, mais c'est un plus",
    ],
    objectives: [
      "Créer des sites web responsive avec HTML et CSS",
      "Développer des applications interactives avec JavaScript",
      "Construire des interfaces utilisateur avec React",
      "Créer des API RESTful avec Node.js et Express",
      "Travailler avec des bases de données SQL et NoSQL",
      "Déployer des applications web sur des services d'hébergement",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Course Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 mb-8">
            <Link href="/courses" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux formations
            </Link>
            <Badge className="w-fit">{course.category}</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{course.title}</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                  <span>
                    {course.rating} ({course.students} étudiants)
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>Mis à jour {course.lastUpdated}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span>{course.language}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{course.instructor.name}</p>
                  <p className="text-xs text-muted-foreground">{course.instructor.title}</p>
                </div>
              </div>
            </div>
            <div className="lg:ml-auto">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <p className="text-3xl font-bold">{course.price}</p>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full" size="lg">
                      S'inscrire à cette formation
                    </Button>
                    <Button variant="outline" className="w-full">
                      Essayer gratuitement
                    </Button>
                  </div>
                  <div className="mt-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Accès à vie</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificat de réussite</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projets pratiques</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support instructeur</span>
                      <span>✓</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Partager
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="content">Contenu du cours</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="instructor">Instructeur</TabsTrigger>
              <TabsTrigger value="reviews">Avis</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contenu du cours</h2>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>{course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} leçons</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>
                      {course.modules
                        .flatMap((module) => module.lessons)
                        .reduce((acc, lesson) => {
                          const [minutes, seconds] = lesson.duration.split(":")
                          return acc + Number.parseInt(minutes) + Number.parseInt(seconds) / 60
                        }, 0)
                        .toFixed(1)}{" "}
                      heures au total
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border rounded-lg overflow-hidden">
                      <div className="bg-muted p-4 flex justify-between items-center">
                        <h3 className="font-medium">
                          Module {moduleIndex + 1}: {module.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {module.lessons.length} leçons •{" "}
                          {module.lessons
                            .reduce((acc, lesson) => {
                              const [minutes, seconds] = lesson.duration.split(":")
                              return acc + Number.parseInt(minutes) + Number.parseInt(seconds) / 60
                            }, 0)
                            .toFixed(1)}{" "}
                          heures
                        </span>
                      </div>
                      <div className="divide-y">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 flex justify-between items-center">
                            <div className="flex items-center">
                              <Play className="mr-3 h-4 w-4 text-muted-foreground" />
                              <span>
                                {lessonIndex + 1}. {lesson.title}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="description" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">À propos de cette formation</h2>
                <p className="mb-6">{course.longDescription}</p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ce que vous allez apprendre</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                          </div>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Prérequis</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-muted">
                            <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                          </div>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="instructor" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">À propos de l'instructeur</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                      <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                    <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                        <span>Note de 4.8</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>3,245 étudiants</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>12 cours</span>
                      </div>
                    </div>
                    <p>{course.instructor.bio}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Avis des étudiants</h2>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-5xl font-bold">{course.rating}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(course.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Note du cours • {course.students} avis</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const percentage = rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 1 : 1
                      return (
                        <div key={rating} className="flex items-center gap-4">
                          <div className="flex items-center w-20">
                            <span className="mr-2">{rating}</span>
                            <Star className="h-4 w-4 fill-primary text-primary" />
                          </div>
                          <Progress value={percentage} className="h-2 flex-1" />
                          <div className="w-12 text-right text-sm text-muted-foreground">{percentage}%</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <Separator className="my-6" />
                <div className="space-y-6">
                  {/* Sample reviews */}
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={`Reviewer ${index}`} />
                            <AvatarFallback>U{index}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Utilisateur {index}</p>
                            <p className="text-xs text-muted-foreground">Il y a {index} mois</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < 5 - (index % 2) ? "fill-primary text-primary" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p>
                        {index === 1
                          ? "Cette formation est exactement ce dont j'avais besoin pour développer mes compétences en développement web. Le contenu est bien structuré et l'instructeur explique clairement les concepts complexes."
                          : index === 2
                            ? "J'ai beaucoup appris grâce à cette formation. Les projets pratiques sont particulièrement utiles pour mettre en pratique les connaissances acquises."
                            : "Excellente formation ! Les explications sont claires et le rythme est parfait. Je recommande vivement à tous ceux qui souhaitent se lancer dans le développement web."}
                      </p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Voir plus d'avis
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
