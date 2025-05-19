import { Award, Calendar, Download, Eye, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mes certificats</h1>
        <p className="text-muted-foreground">Consultez et téléchargez vos certificats de réussite</p>
      </div>

      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="completed">Obtenus</TabsTrigger>
          <TabsTrigger value="in-progress">En cours</TabsTrigger>
        </TabsList>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCertificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-kokitech-blue to-kokitech-lightBlue p-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-center opacity-10"></div>
                  <div className="relative z-10 text-center text-white">
                    <Award className="h-16 w-16 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">{certificate.title}</h3>
                    <p className="text-sm text-white/80">Certificat d'achèvement</p>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    >
                      {certificate.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-base">{certificate.course}</CardTitle>
                  <CardDescription>{certificate.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground">{certificate.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" /> Voir
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" /> Partager
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Télécharger
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCertificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-400 to-gray-600 p-4 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-center opacity-10"></div>
                  <div className="relative z-10 text-center text-white">
                    <Award className="h-16 w-16 mx-auto mb-2 opacity-50" />
                    <h3 className="text-xl font-bold">{certificate.title}</h3>
                    <p className="text-sm text-white/80">En cours d'obtention</p>
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-center">
                    <Badge
                      variant="outline"
                      className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    >
                      {certificate.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>Estimation: {certificate.estimatedCompletion}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 text-base">{certificate.course}</CardTitle>
                  <CardDescription>{certificate.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span className="font-medium">{certificate.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-kokitech-blue rounded-full"
                        style={{ width: `${certificate.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{certificate.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-kokitech-blue hover:bg-kokitech-darkBlue">Continuer la formation</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Certificate Information */}
      <Card>
        <CardHeader>
          <CardTitle>À propos des certificats</CardTitle>
          <CardDescription>Informations sur les certificats de Kokitech Academy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Certificats de formation</h3>
              <p className="text-sm text-muted-foreground">
                Les certificats de formation sont délivrés lorsque vous terminez avec succès une formation individuelle.
                Ils attestent de vos compétences dans un domaine spécifique.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Certificats de spécialisation</h3>
              <p className="text-sm text-muted-foreground">
                Les certificats de spécialisation sont délivrés lorsque vous terminez un programme complet de
                spécialisation, comprenant plusieurs formations et une évaluation finale.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Validité et reconnaissance</h3>
              <p className="text-sm text-muted-foreground">
                Tous nos certificats sont valables à vie et reconnus par de nombreuses entreprises partenaires. Ils
                peuvent être vérifiés en ligne grâce à un QR code unique.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Partage et valorisation</h3>
              <p className="text-sm text-muted-foreground">
                Vous pouvez partager vos certificats sur LinkedIn et autres réseaux professionnels pour valoriser vos
                compétences auprès des recruteurs et de votre réseau.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const completedCertificates = [
  {
    id: "1",
    title: "Introduction à Python",
    course: "Introduction à Python",
    instructor: "Jean Konan",
    type: "Formation",
    date: "15 Mai 2023",
    description:
      "Ce certificat atteste que vous avez terminé avec succès la formation Introduction à Python, couvrant les fondamentaux du langage, les structures de données et la programmation orientée objet.",
  },
  {
    id: "2",
    title: "HTML & CSS Fondamentaux",
    course: "Développeur Full Stack JavaScript",
    instructor: "Sophie Martin",
    type: "Module",
    date: "28 Avril 2023",
    description:
      "Ce certificat atteste que vous avez terminé avec succès le module HTML & CSS Fondamentaux de la spécialisation Développeur Full Stack JavaScript.",
  },
]

const inProgressCertificates = [
  {
    id: "3",
    title: "Développement Web Full Stack",
    course: "Développement Web Full Stack",
    instructor: "Sophie Martin",
    type: "Formation",
    estimatedCompletion: "Juillet 2023",
    progress: 68,
    description:
      "Terminez cette formation pour obtenir votre certificat en Développement Web Full Stack, attestant de vos compétences en HTML, CSS, JavaScript, React, Node.js et MongoDB.",
  },
  {
    id: "4",
    title: "Développeur Full Stack JavaScript",
    course: "Développeur Full Stack JavaScript",
    instructor: "Équipe Kokitech",
    type: "Spécialisation",
    estimatedCompletion: "Septembre 2023",
    progress: 45,
    description:
      "Terminez cette spécialisation pour obtenir votre certificat de Développeur Full Stack JavaScript, attestant de vos compétences complètes en développement web moderne.",
  },
  {
    id: "5",
    title: "Design UX/UI Avancé",
    course: "Design UX/UI Avancé",
    instructor: "Thomas Dubois",
    type: "Formation",
    estimatedCompletion: "Août 2023",
    progress: 42,
    description:
      "Terminez cette formation pour obtenir votre certificat en Design UX/UI Avancé, attestant de vos compétences en conception d'interfaces utilisateur et d'expérience utilisateur.",
  },
]
