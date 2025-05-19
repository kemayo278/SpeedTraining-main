import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="mb-2 bg-kokitech-blue text-white">Support</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Foire Aux Questions</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trouvez rapidement des réponses à vos questions sur Kokitech Academy
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex w-full max-w-md items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Rechercher une question..." className="pl-8" />
                </div>
                <Button type="submit" className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                  Rechercher
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="general">Général</TabsTrigger>
                <TabsTrigger value="courses">Formations</TabsTrigger>
                <TabsTrigger value="account">Compte</TabsTrigger>
                <TabsTrigger value="payment">Paiement</TabsTrigger>
                <TabsTrigger value="technical">Technique</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="courses" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {coursesFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {accountFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="payment" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {paymentFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="technical" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {technicalFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Vous n'avez pas trouvé votre réponse ?</CardTitle>
                <CardDescription>
                  Notre équipe de support est disponible pour répondre à toutes vos questions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Contactez-nous par email ou téléphone et nous vous répondrons dans les plus brefs délais.
                </p>
                <Button asChild className="mt-4 bg-kokitech-blue hover:bg-kokitech-darkBlue">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Centre de ressources</CardTitle>
                <CardDescription>
                  Consultez nos guides et tutoriels pour en savoir plus sur nos formations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Nous avons rassemblé des ressources utiles pour vous aider à tirer le meilleur parti de votre
                  expérience d'apprentissage.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/resources">Accéder aux ressources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

const generalFAQs = [
  {
    question: "Qu'est-ce que Kokitech Academy ?",
    answer:
      "Kokitech Academy est une plateforme d'apprentissage en ligne qui propose des formations de qualité dans divers domaines tels que le développement web, le design, la data science, le marketing digital et bien plus encore. Notre mission est de vous aider à développer vos compétences et à accélérer votre carrière grâce à des cours conçus par des experts du domaine.",
  },
  {
    question: "Comment fonctionne l'apprentissage sur Kokitech Academy ?",
    answer:
      "Notre plateforme propose un apprentissage flexible et à votre rythme. Vous pouvez accéder aux cours à tout moment et depuis n'importe quel appareil. Les formations sont composées de vidéos, de quiz, de projets pratiques et de ressources complémentaires. Vous pouvez interagir avec les instructeurs et les autres apprenants via les forums de discussion.",
  },
  {
    question: "Quelle est la différence entre une formation et une spécialisation ?",
    answer:
      "Une formation est un cours individuel qui couvre un sujet spécifique, tandis qu'une spécialisation est un programme complet composé de plusieurs cours liés qui vous permettent de maîtriser un domaine particulier. Les spécialisations sont similaires à des cursus universitaires et mènent généralement à une certification reconnue.",
  },
  {
    question: "Puis-je obtenir un certificat après avoir terminé une formation ?",
    answer:
      "Oui, vous recevez un certificat d'achèvement pour chaque formation terminée avec succès. Pour les spécialisations, vous obtenez un certificat de spécialisation une fois que vous avez terminé tous les cours du programme et réussi l'évaluation finale.",
  },
  {
    question: "Combien de temps ai-je accès aux formations après l'achat ?",
    answer:
      "Une fois que vous avez acheté une formation ou une spécialisation, vous y avez accès à vie. Vous pouvez revenir consulter le contenu aussi souvent que vous le souhaitez, même après avoir terminé la formation.",
  },
]

const coursesFAQs = [
  {
    question: "Comment sont structurées les formations ?",
    answer:
      "Nos formations sont divisées en modules, chacun couvrant un aspect spécifique du sujet. Chaque module contient des leçons vidéo, des quiz pour tester vos connaissances, des exercices pratiques et des ressources complémentaires. Vous pouvez suivre les modules dans l'ordre ou accéder directement à ceux qui vous intéressent.",
  },
  {
    question: "Combien de temps faut-il pour terminer une formation ?",
    answer:
      "La durée varie selon la formation et votre rythme d'apprentissage. En moyenne, une formation individuelle peut être complétée en 4 à 8 semaines à raison de quelques heures par semaine. Les spécialisations, qui regroupent plusieurs formations, peuvent prendre de 3 à 8 mois.",
  },
  {
    question: "Les formations sont-elles à jour avec les dernières technologies ?",
    answer:
      "Oui, nous mettons régulièrement à jour nos formations pour qu'elles reflètent les dernières avancées technologiques et les meilleures pratiques de l'industrie. Lorsqu'une mise à jour importante est effectuée, vous en êtes informé et pouvez accéder au nouveau contenu sans frais supplémentaires.",
  },
  {
    question: "Puis-je télécharger les vidéos des cours pour les regarder hors ligne ?",
    answer:
      "Oui, notre application mobile vous permet de télécharger les vidéos des cours pour les regarder hors ligne. Cette fonctionnalité est particulièrement utile si vous voyagez ou si vous avez une connexion internet limitée.",
  },
  {
    question: "Y a-t-il des prérequis pour suivre les formations ?",
    answer:
      "Les prérequis varient selon les formations. Certaines sont accessibles aux débutants sans connaissances préalables, tandis que d'autres nécessitent des bases dans le domaine. Les prérequis sont clairement indiqués sur la page de description de chaque formation.",
  },
]

const accountFAQs = [
  {
    question: "Comment créer un compte sur Kokitech Academy ?",
    answer:
      "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil. Vous pouvez vous inscrire avec votre adresse e-mail ou utiliser vos comptes Google, Facebook ou GitHub. Remplissez ensuite le formulaire avec vos informations personnelles et validez votre inscription.",
  },
  {
    question: "Comment modifier mes informations personnelles ?",
    answer:
      "Connectez-vous à votre compte, puis accédez à votre tableau de bord. Cliquez sur 'Profil' dans le menu latéral, puis sur 'Modifier le profil'. Vous pourrez alors modifier vos informations personnelles, changer votre photo de profil et mettre à jour vos préférences de notification.",
  },
  {
    question: "Comment réinitialiser mon mot de passe ?",
    answer:
      "Si vous avez oublié votre mot de passe, cliquez sur 'Se connecter', puis sur 'Mot de passe oublié'. Entrez l'adresse e-mail associée à votre compte et suivez les instructions envoyées par e-mail pour réinitialiser votre mot de passe.",
  },
  {
    question: "Puis-je avoir plusieurs comptes avec la même adresse e-mail ?",
    answer:
      "Non, chaque adresse e-mail ne peut être associée qu'à un seul compte. Si vous souhaitez créer un nouveau compte, vous devrez utiliser une adresse e-mail différente.",
  },
  {
    question: "Comment supprimer mon compte ?",
    answer:
      "Pour supprimer votre compte, accédez à votre tableau de bord, puis à 'Paramètres' dans le menu latéral. Faites défiler jusqu'à la section 'Supprimer le compte' et suivez les instructions. Notez que cette action est irréversible et que vous perdrez l'accès à toutes vos formations et données.",
  },
]

const paymentFAQs = [
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par carte de crédit (Visa, Mastercard, American Express), PayPal, et virement bancaire pour certaines formations. Pour les entreprises, nous proposons également des factures avec paiement à 30 jours.",
  },
  {
    question: "Les prix affichés incluent-ils la TVA ?",
    answer:
      "Les prix affichés sur notre site sont hors taxes. La TVA applicable est ajoutée lors du processus de paiement en fonction de votre pays de résidence.",
  },
  {
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, pour les spécialisations et certaines formations premium, nous proposons un paiement en plusieurs fois sans frais. Les modalités sont indiquées sur la page de la formation concernée.",
  },
  {
    question: "Quelle est votre politique de remboursement ?",
    answer:
      "Nous offrons une garantie de remboursement de 14 jours à compter de la date d'achat. Si vous n'êtes pas satisfait de la formation, vous pouvez demander un remboursement complet dans ce délai, à condition de ne pas avoir terminé plus de 25% du contenu.",
  },
  {
    question: "Proposez-vous des réductions pour les étudiants ou les groupes ?",
    answer:
      "Oui, nous proposons des tarifs préférentiels pour les étudiants (sur présentation d'un justificatif) et des réductions pour les achats en groupe ou les entreprises. Contactez notre service commercial pour plus d'informations.",
  },
]

const technicalFAQs = [
  {
    question: "Quelles sont les exigences techniques pour suivre les formations ?",
    answer:
      "Pour une expérience optimale, nous recommandons d'utiliser un navigateur récent (Chrome, Firefox, Safari ou Edge), une connexion internet stable, et un ordinateur avec au moins 4 Go de RAM. Pour les formations en développement, certains logiciels spécifiques peuvent être nécessaires, ils sont indiqués dans les prérequis de chaque formation.",
  },
  {
    question: "Les formations sont-elles compatibles avec les appareils mobiles ?",
    answer:
      "Oui, notre plateforme est responsive et s'adapte à tous les appareils. Nous proposons également des applications mobiles pour iOS et Android qui vous permettent de suivre vos formations même hors ligne.",
  },
  {
    question: "Que faire si j'ai des problèmes techniques pendant une formation ?",
    answer:
      "En cas de problème technique, vous pouvez consulter notre centre d'aide accessible depuis votre tableau de bord. Si le problème persiste, contactez notre support technique via le formulaire de contact ou par e-mail à support@kokitech-academy.com. Nous nous efforçons de répondre dans les 24 heures ouvrables.",
  },
  {
    question: "Comment télécharger les ressources complémentaires des formations ?",
    answer:
      "Les ressources complémentaires (PDF, code source, exercices) sont disponibles dans la section 'Ressources' de chaque leçon. Cliquez sur le bouton de téléchargement à côté de chaque ressource pour la sauvegarder sur votre appareil.",
  },
  {
    question: "Les vidéos sont-elles disponibles en haute définition ?",
    answer:
      "Oui, toutes nos vidéos sont disponibles en haute définition (1080p). Vous pouvez ajuster la qualité en fonction de votre connexion internet. Sur l'application mobile, vous pouvez également choisir la qualité des vidéos téléchargées pour optimiser l'espace de stockage.",
  },
]
