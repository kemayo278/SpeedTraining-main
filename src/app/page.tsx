import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Badge } from "@/components/Shared/ui/badge"
import { FeaturedCourses } from "@/components/featured-courses"
import { Specializations } from "@/components/specializations"
import { Categories } from "@/components/categories"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-10 lg:py-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="mb-2 bg-kokitech-blue text-white" variant="outline">
                  Formation en ligne & presentielle
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Développez vos compétences avec Speed-Training
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Des formations de qualité pour tous les niveaux. Apprenez à votre rythme et obtenez des certifications
                  reconnues.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                  <Link href="/courses">
                    Découvrir nos formations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-kokitech-red text-kokitech-red hover:bg-kokitech-red/10"
                >
                  <Link href="/specializations">Voir les spécialisations</Link>
                </Button>
              </div>
            </div>
            <div className="hidden sm:block mx-auto lg:ml-auto">
              <Image
              // src="/placeholder.svg?height=550&width=550"
              src={'/heroacademy1-removebg.png'}
              alt="Kokitech Group Academy"
              width={550}
              height={550}
              className="rounded-lg object-cover"
              priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* Specializations */}
      <Specializations />

      {/* Categories */}
      <Categories />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
