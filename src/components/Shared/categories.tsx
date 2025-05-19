import Link from "next/link"
import { Code, PenTool, Stethoscope, Briefcase, LineChart, Database, Globe, Lightbulb } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Categories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Catégories de formations</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explorez nos différentes catégories de formations pour trouver celle qui correspond à vos besoins
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`} className="group">
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg group-hover:border-gray-300 dark:group-hover:border-gray-700">
                <CardHeader className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">{category.icon}</div>
                    <CardTitle className="line-clamp-1">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="line-clamp-2">{category.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 border-t bg-gray-50 dark:bg-gray-900">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.courseCount} formations</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const categories = [
  {
    id: "development",
    name: "Développement",
    description: "Programmation, développement web, mobile et logiciel",
    courseCount: 42,
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "design",
    name: "Design",
    description: "Design graphique, UX/UI, animation et modélisation 3D",
    courseCount: 24,
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    id: "health",
    name: "Santé",
    description: "Médecine, bien-être, nutrition et fitness",
    courseCount: 18,
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    id: "business",
    name: "Business",
    description: "Entrepreneuriat, marketing, finance et management",
    courseCount: 31,
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: "data",
    name: "Data Science",
    description: "Analyse de données, machine learning et intelligence artificielle",
    courseCount: 16,
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: "marketing",
    name: "Marketing Digital",
    description: "SEO, réseaux sociaux, publicité en ligne et stratégie de contenu",
    courseCount: 22,
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    id: "languages",
    name: "Langues",
    description: "Apprentissage des langues étrangères et communication interculturelle",
    courseCount: 14,
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "personal",
    name: "Développement Personnel",
    description: "Productivité, leadership, communication et gestion du stress",
    courseCount: 19,
    icon: <Lightbulb className="h-5 w-5" />,
  },
]
