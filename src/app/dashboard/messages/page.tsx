import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, ImageIcon, Paperclip, Send, Smile } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Communiquez avec vos instructeurs et autres apprenants</p>
      </div>

      <Tabs defaultValue="inbox" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="inbox">Boîte de réception</TabsTrigger>
          <TabsTrigger value="sent">Envoyés</TabsTrigger>
          <TabsTrigger value="archived">Archivés</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Messages List */}
            <Card className="md:col-span-1 h-[600px] flex flex-col">
              <CardHeader className="px-4 py-3 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <Button variant="outline" size="sm">
                    Nouveau message
                  </Button>
                </div>
                <div className="mt-2">
                  <Input placeholder="Rechercher..." className="h-8" />
                </div>
              </CardHeader>
              <CardContent className="p-0 overflow-auto flex-grow">
                <div className="divide-y">
                  {conversations.map((conversation, index) => (
                    <div
                      key={index}
                      className={`p-4 hover:bg-muted cursor-pointer ${index === 0 ? "bg-muted" : ""} transition-colors`}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{conversation.name}</p>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread && (
                          <Badge className="bg-kokitech-red text-white">{conversation.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Message Content */}
            <Card className="md:col-span-2 h-[600px] flex flex-col">
              <CardHeader className="px-4 py-3 border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="Sophie Martin" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Sophie Martin</CardTitle>
                    <CardDescription>Formatrice - Développement Web Full Stack</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 overflow-auto flex-grow">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sent ? "bg-kokitech-blue text-white" : "bg-muted"
                        }`}
                      >
                        {message.content}
                        <div className={`text-xs mt-1 ${message.sent ? "text-white/70" : "text-muted-foreground"}`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <div className="flex items-center w-full gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Input placeholder="Écrivez votre message..." className="flex-1" />
                  <Button variant="ghost" size="icon">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages envoyés</CardTitle>
              <CardDescription>Historique de vos messages envoyés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentMessages.map((message, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={message.recipientAvatar || "/placeholder.svg"} alt={message.recipient} />
                      <AvatarFallback>{message.recipient.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">À: {message.recipient}</p>
                        <span className="text-xs text-muted-foreground">{message.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{message.subject}</p>
                      <p className="text-sm mt-2">{message.preview}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Voir <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages archivés</CardTitle>
              <CardDescription>Messages que vous avez archivés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {archivedMessages.map((message, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={message.senderAvatar || "/placeholder.svg"} alt={message.sender} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">De: {message.sender}</p>
                        <span className="text-xs text-muted-foreground">{message.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{message.subject}</p>
                      <p className="text-sm mt-2">{message.preview}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Restaurer
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const conversations = [
  {
    name: "Sophie Martin",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Bonjour ! Comment avancez-vous sur le projet final ?",
    time: "10:23",
    unread: 2,
  },
  {
    name: "Thomas Dubois",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "J'ai partagé quelques ressources supplémentaires pour le module UX/UI.",
    time: "Hier",
    unread: 0,
  },
  {
    name: "Amina Ndiaye",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Merci pour votre participation au webinaire de la semaine dernière !",
    time: "Lun",
    unread: 0,
  },
  {
    name: "Jean Konan",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Votre solution pour l'exercice 3 était excellente. Continuez comme ça !",
    time: "28 Mai",
    unread: 0,
  },
  {
    name: "Marie Dupont",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Nous avons mis à jour le contenu du module 4. N'hésitez pas à le consulter.",
    time: "25 Mai",
    unread: 0,
  },
]

const messages = [
  {
    content: "Bonjour Jean ! J'espère que vous allez bien.",
    time: "10:15",
    sent: true,
  },
  {
    content: "Bonjour Sophie ! Oui, tout va bien, merci. Comment puis-je vous aider aujourd'hui ?",
    time: "10:17",
    sent: false,
  },
  {
    content:
      "J'ai une question concernant le projet final du module JavaScript. Est-ce que je peux utiliser une API externe pour récupérer les données ?",
    time: "10:20",
    sent: true,
  },
  {
    content:
      "Absolument ! C'est même encouragé. Vous pouvez utiliser des API comme JSONPlaceholder, OpenWeather ou toute autre API publique qui correspond à votre projet.",
    time: "10:22",
    sent: false,
  },
  {
    content:
      "Super, merci ! J'ai aussi remarqué qu'il y a un délai supplémentaire pour la soumission du projet. Est-ce correct ?",
    time: "10:23",
    sent: true,
  },
  {
    content:
      "Oui, nous avons prolongé la date limite jusqu'au 15 juin pour donner à tout le monde plus de temps pour travailler sur leurs projets. N'hésitez pas si vous avez d'autres questions !",
    time: "10:25",
    sent: false,
  },
]

const sentMessages = [
  {
    recipient: "Thomas Dubois",
    recipientAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Question sur le module Design UX/UI",
    preview: "Bonjour Thomas, J'aurais besoin de précisions concernant l'exercice sur les wireframes...",
    date: "Hier, 14:30",
  },
  {
    recipient: "Support Technique",
    recipientAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Problème d'accès au cours",
    preview: "Bonjour, Je n'arrive pas à accéder au module 3 de la formation JavaScript. Pouvez-vous m'aider ?",
    date: "27 Mai, 09:15",
  },
  {
    recipient: "Jean Konan",
    recipientAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Retour sur l'évaluation du projet",
    preview: "Bonjour Jean, Merci pour vos commentaires détaillés sur mon projet. J'ai quelques questions...",
    date: "20 Mai, 16:45",
  },
]

const archivedMessages = [
  {
    sender: "Équipe Kokitech",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Bienvenue sur Kokitech Academy",
    preview:
      "Bienvenue dans notre communauté d'apprentissage ! Nous sommes ravis de vous compter parmi nos apprenants...",
    date: "15 Avr, 10:00",
  },
  {
    sender: "Service Administratif",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Confirmation de paiement",
    preview: "Nous confirmons la réception de votre paiement pour la formation Développement Web Full Stack...",
    date: "10 Avr, 14:22",
  },
  {
    sender: "Newsletter Kokitech",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Nouvelles formations disponibles",
    preview:
      "Découvrez nos nouvelles formations dans les domaines de l'intelligence artificielle et de la cybersécurité...",
    date: "1 Avr, 09:30",
  },
]
