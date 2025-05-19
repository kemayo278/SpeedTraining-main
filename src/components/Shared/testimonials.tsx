import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce que disent nos apprenants</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez les témoignages de nos étudiants qui ont transformé leur carrière grâce à nos formations
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{testimonial.content}</CardDescription>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.course}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Développeuse Web",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "La formation en développement web de Kokitech m'a permis de changer complètement de carrière. Les cours sont clairs, pratiques et les instructeurs sont toujours disponibles pour répondre aux questions.",
    course: "Développement Web Full Stack",
  },
  {
    name: "Thomas Dubois",
    role: "UX Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "J'ai suivi la formation en Design UX/UI et j'ai pu immédiatement appliquer les connaissances acquises dans mon travail. Le contenu est à jour avec les dernières tendances du marché.",
    course: "Design UX/UI Avancé",
  },
  {
    name: "Amina Ndiaye",
    role: "Data Scientist",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "La qualité pédagogique est exceptionnelle. Les projets pratiques m'ont permis de construire un portfolio solide qui a impressionné mes recruteurs. Je recommande vivement Kokitech Academy.",
    course: "Data Science et Machine Learning",
  },
]
