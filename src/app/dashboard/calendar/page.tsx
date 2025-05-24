import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ChevronLeft, ChevronRight, Clock, Plus, Video } from "lucide-react"

export default function CalendarPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendrier</h1>
          <p className="text-muted-foreground">Gérez vos cours et événements à venir</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Vue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Jour</SelectItem>
              <SelectItem value="week">Semaine</SelectItem>
              <SelectItem value="month">Mois</SelectItem>
              <SelectItem value="agenda">Agenda</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-kokitech-blue hover:bg-kokitech-darkBlue">
            <Plus className="mr-2 h-4 w-4" /> Ajouter un événement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* Calendar Navigation */}
        <Card className="md:col-span-7">
          <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-bold">Juin 2023</h2>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline">Aujourd'hui</Button>
          </CardHeader>
        </Card>

        {/* Calendar Days Header */}
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
          <Card key={day} className="p-2 text-center font-medium">
            {day}
          </Card>
        ))}

        {/* Calendar Days */}
        {Array.from({ length: 35 }, (_, i) => {
          const dayNumber = i - 2 // Adjust to start from Monday, May 29
          const isCurrentMonth = dayNumber > 0 && dayNumber <= 30
          const isToday = dayNumber === 12 // Assuming today is June 12
          const hasEvents = [1, 5, 12, 15, 20, 25].includes(dayNumber)

          return (
            <Card
              key={i}
              className={`min-h-[120px] ${isToday ? "border-kokitech-blue" : ""} ${
                !isCurrentMonth ? "opacity-50" : ""
              }`}
            >
              <CardHeader className="p-2 flex flex-row items-start justify-between space-y-0">
                <span
                  className={`text-sm ${isToday ? "bg-kokitech-blue text-white rounded-full w-6 h-6 flex items-center justify-center" : ""}`}
                >
                  {dayNumber <= 0 ? 31 + dayNumber : dayNumber > 30 ? dayNumber - 30 : dayNumber}
                </span>
              </CardHeader>
              <CardContent className="p-2">
                {hasEvents && (
                  <div className="space-y-1">
                    {dayNumber === 5 && (
                      <div className="flex items-center gap-1 text-xs p-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        <Video className="h-3 w-3" />
                        <span className="truncate">Session live: React</span>
                      </div>
                    )}
                    {dayNumber === 12 && (
                      <div className="flex items-center gap-1 text-xs p-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        <Clock className="h-3 w-3" />
                        <span className="truncate">Deadline: Projet JS</span>
                      </div>
                    )}
                    {dayNumber === 15 && (
                      <div className="flex items-center gap-1 text-xs p-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                        <Video className="h-3 w-3" />
                        <span className="truncate">Webinaire: UX/UI</span>
                      </div>
                    )}
                    {dayNumber === 20 && (
                      <div className="flex items-center gap-1 text-xs p-1 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                        <Clock className="h-3 w-3" />
                        <span className="truncate">Quiz: Node.js</span>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Événements à venir</CardTitle>
          <CardDescription>Vos prochains cours et événements planifiés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`p-2 rounded-full ${event.colorClass}`}>
                  <event.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                    <Badge variant={event.badgeVariant}>{event.type}</Badge>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {event.actionText}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Voir tous les événements
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const upcomingEvents = [
  {
    title: "Session live: Introduction à React",
    description: "Session interactive avec l'instructeur pour découvrir les fondamentaux de React",
    date: "15 Juin 2023",
    time: "14:00 - 15:30",
    type: "Cours",
    icon: Video,
    colorClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    badgeVariant: "default",
    actionText: "Rejoindre",
  },
  {
    title: "Date limite: Projet JavaScript",
    description: "N'oubliez pas de soumettre votre projet final pour le module JavaScript",
    date: "20 Juin 2023",
    time: "23:59",
    type: "Deadline",
    icon: Clock,
    colorClass: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    badgeVariant: "outline",
    actionText: "Soumettre",
  },
  {
    title: "Webinaire: Tendances du développement web",
    description: "Découvrez les dernières tendances et technologies du développement web",
    date: "25 Juin 2023",
    time: "11:00 - 12:00",
    type: "Webinaire",
    icon: Video,
    colorClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    badgeVariant: "secondary",
    actionText: "S'inscrire",
  },
  {
    title: "Quiz: Node.js et Express",
    description: "Testez vos connaissances sur Node.js et Express",
    date: "30 Juin 2023",
    time: "Toute la journée",
    type: "Évaluation",
    icon: Clock,
    colorClass: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
    badgeVariant: "outline",
    actionText: "Commencer",
  },
]
