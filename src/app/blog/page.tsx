import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Shared/ui/card"
import { Badge } from "@/components/Shared/ui/badge"
import { Input } from "@/components/Shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Shared/ui/select"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog Speed-Training</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Découvrez nos derniers articles, tutoriels et actualités sur le monde de la tech et de la formation
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex w-full max-w-md items-center space-x-2">
                <Input type="search" placeholder="Rechercher un article..." className="flex-1" />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Rechercher
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Catégories</h3>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    Toutes les catégories
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Développement
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Design
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Santé
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Business
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Data Science
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Articles populaires</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex gap-2">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt={`Popular article ${index}`}
                        width={60}
                        height={60}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2">
                          <Link href={`/blog/${index}`} className="hover:underline">
                            Les tendances du développement web en 2023
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground">Il y a {index} jours</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Design", "UX/UI", "Python", "Data", "Mobile", "Web", "AI"].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog List */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Articles récents</h2>
                <Select defaultValue="recent">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Plus récent</SelectItem>
                    <SelectItem value="popular">Plus populaire</SelectItem>
                    <SelectItem value="trending">Tendance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 mt-2">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="border-t p-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{post.readTime} min de lecture</span>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/blog/detail`}>
                            Lire plus <ArrowRight className="ml-1 h-4 w-4" />
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

const blogPosts = [
  {
    id: "1",
    title: "Les tendances du développement web en 2023",
    excerpt:
      "Découvrez les technologies et frameworks qui dominent le paysage du développement web cette année et comment les intégrer dans vos projets.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    date: "12 Mai 2023",
    readTime: 8,
  },
  {
    id: "2",
    title: "Comment créer une interface utilisateur intuitive",
    excerpt:
      "Les principes fondamentaux de l'UX/UI design pour créer des interfaces utilisateur qui offrent une expérience fluide et agréable.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Design",
    date: "5 Mai 2023",
    readTime: 6,
  },
  {
    id: "3",
    title: "L'intelligence artificielle au service de la santé",
    excerpt:
      "Comment l'IA révolutionne le secteur de la santé, de la détection précoce des maladies à l'optimisation des traitements personnalisés.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Santé",
    date: "28 Avril 2023",
    readTime: 10,
  },
  {
    id: "4",
    title: "Les bases de données NoSQL vs SQL : quand utiliser l'une ou l'autre ?",
    excerpt:
      "Une analyse comparative des bases de données relationnelles et non relationnelles pour vous aider à choisir la solution adaptée à votre projet.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    date: "20 Avril 2023",
    readTime: 7,
  },
  {
    id: "5",
    title: "Comment lancer sa startup tech avec un budget limité",
    excerpt:
      "Stratégies et conseils pratiques pour les entrepreneurs qui souhaitent lancer leur startup technologique avec des ressources financières limitées.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Business",
    date: "15 Avril 2023",
    readTime: 9,
  },
  {
    id: "6",
    title: "Python pour l'analyse de données : guide du débutant",
    excerpt:
      "Apprenez à utiliser Python et ses bibliothèques pour analyser des données, créer des visualisations et extraire des insights précieux.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Data Science",
    date: "8 Avril 2023",
    readTime: 12,
  },
]
