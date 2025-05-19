import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, MessageCircle, Share2, Twitter } from "lucide-react"

import { Button } from "@/components/Shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Shared/ui/avatar"
import { Badge } from "@/components/Shared/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Shared/ui/card"

export default function BlogPostPage() {
  // Dans une application réelle, vous récupéreriez les données du blog en fonction de l'ID
  const post = blogPosts[0]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/blog-hero-bg.png" alt="Blog hero background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background dark:from-black/80 dark:via-black/60 dark:to-background"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col max-w-3xl mx-auto">
            <Link href="/blog" className="flex items-center text-sm text-white hover:text-white/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
            <div className="space-y-2 text-center">
              <div className="flex justify-center gap-2 mb-4">
                {post.categories.map((category) => (
                  <Badge key={category} className="bg-kokitech-blue text-white">
                    {category}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">{post.title}</h1>
              <p className="text-white/80 md:text-xl max-w-[700px] mx-auto">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Avatar>
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-white font-medium">{post.author.name}</div>
                <div className="text-white/70 text-sm flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{post.readTime} min de lecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-3">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">{post.content.introduction}</p>

                <h2>{post.content.sections[0].title}</h2>
                <p>{post.content.sections[0].content}</p>

                {post.content.image && (
                  <figure>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={post.content.image.url || "/placeholder.svg"}
                        alt={post.content.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="text-center text-sm text-muted-foreground mt-2">
                      {post.content.image.caption}
                    </figcaption>
                  </figure>
                )}

                <h2>{post.content.sections[1].title}</h2>
                <p>{post.content.sections[1].content}</p>

                <blockquote>
                  <p>{post.content.quote.text}</p>
                  <footer>— {post.content.quote.author}</footer>
                </blockquote>

                <h2>{post.content.sections[2].title}</h2>
                <p>{post.content.sections[2].content}</p>

                <h3>Points clés à retenir</h3>
                <ul>
                  {post.content.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <h2>Conclusion</h2>
                <p>{post.content.conclusion}</p>
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t">
                <div className="text-sm font-medium">Partager cet article:</div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Partager sur Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Partager sur Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Partager sur LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Copier le lien</span>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="font-medium">À propos de l'auteur</h3>
                    <h4 className="font-bold">{post.author.name}</h4>
                    <p className="text-sm text-muted-foreground">{post.author.bio}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Voir tous ses articles
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Commentaires ({post.comments.length})</h3>
                <div className="space-y-6">
                  {post.comments.map((comment, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.name} />
                          <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{comment.name}</h4>
                            <span className="text-xs text-muted-foreground">{comment.date}</span>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Répondre
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8 p-6 border rounded-lg">
                  <h4 className="text-lg font-medium mb-4">Laisser un commentaire</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nom
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Votre email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="comment" className="text-sm font-medium">
                        Commentaire
                      </label>
                      <textarea
                        id="comment"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre commentaire"
                      />
                    </div>
                    <Button className="bg-kokitech-blue hover:bg-kokitech-darkBlue">Publier le commentaire</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 mt-2">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">{post.author}</div>
                  </div>
                  <div className="ml-auto">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${post.id}`}>Lire plus</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
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
    coverImage: "/placeholder.svg?height=1080&width=1920",
    date: "12 Mai 2023",
    readTime: 8,
    categories: ["Développement", "Technologie"],
    tags: ["JavaScript", "React", "Web Development", "Frameworks", "Tendances"],
    author: {
      name: "Sophie Martin",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Sophie est développeuse web senior et formatrice chez Kokitech Academy. Elle se passionne pour les nouvelles technologies web et partage régulièrement ses connaissances à travers des articles et des conférences.",
    },
    content: {
      introduction:
        "Le monde du développement web évolue à une vitesse fulgurante. Chaque année apporte son lot de nouvelles technologies, frameworks et méthodologies qui redéfinissent la façon dont nous concevons et construisons des applications web. En 2023, plusieurs tendances majeures se démarquent et façonnent l'avenir du développement web. Dans cet article, nous explorerons ces tendances et verrons comment les intégrer dans vos projets pour rester à la pointe de l'innovation.",
      sections: [
        {
          title: "L'essor des architectures Jamstack",
          content:
            "La Jamstack (JavaScript, APIs, et Markup) continue sa progression comme architecture de choix pour de nombreux développeurs. Cette approche, qui sépare le frontend du backend via des APIs, offre des avantages significatifs en termes de performance, de sécurité et d'expérience développeur. Des outils comme Next.js, Gatsby et Astro gagnent en popularité, permettant de créer des sites statiques avec des fonctionnalités dynamiques. La génération de sites statiques (SSG) et le rendu côté serveur (SSR) sont devenus des techniques standard pour optimiser les performances et le SEO.",
        },
        {
          title: "Les frameworks JavaScript nouvelle génération",
          content:
            "React maintient sa position dominante, mais des frameworks comme Svelte et Solid.js gagnent rapidement du terrain grâce à leur approche compilée qui offre des performances exceptionnelles. Vue.js 3 avec son système de composition API apporte une flexibilité accrue, tandis qu'Angular continue d'évoluer pour les applications d'entreprise complexes. La tendance est clairement aux frameworks qui privilégient la performance et l'expérience développeur, avec des API plus intuitives et des outils de développement améliorés.",
        },
        {
          title: "WebAssembly et les applications haute performance",
          content:
            "WebAssembly (Wasm) transforme ce qui est possible dans le navigateur. Cette technologie permet d'exécuter du code compilé à partir de langages comme C, C++ et Rust directement dans le navigateur, avec des performances proches du natif. Nous voyons de plus en plus d'applications complexes, comme des éditeurs de photos et de vidéos, des jeux 3D, et des outils de CAO, fonctionner directement dans le navigateur grâce à WebAssembly. Cette technologie ouvre la voie à une nouvelle génération d'applications web sophistiquées qui rivalisent avec les applications de bureau.",
        },
      ],
      image: {
        url: "/placeholder.svg?height=600&width=1200",
        alt: "Développement web moderne avec différents frameworks et outils",
        caption: "Les frameworks et outils modernes transforment l'écosystème du développement web en 2023.",
      },
      quote: {
        text: "Le développement web ne consiste plus seulement à créer des sites, mais à construire des expériences numériques complètes qui fonctionnent parfaitement sur tous les appareils.",
        author: "Sarah Johnson, CTO de TechFront",
      },
      keyPoints: [
        "L'architecture Jamstack continue de gagner en popularité pour sa performance et sa sécurité",
        "Les frameworks compilés comme Svelte et Solid.js offrent des performances exceptionnelles",
        "WebAssembly permet des applications web haute performance rivalisant avec le natif",
        "Les micro-frontends deviennent une approche viable pour les grandes équipes",
        "L'accessibilité et la performance sont désormais des considérations essentielles",
      ],
      conclusion:
        "Le développement web en 2023 est marqué par une quête constante de meilleures performances, d'expériences utilisateur plus riches et de workflows de développement plus efficaces. Les technologies comme Jamstack, les frameworks compilés et WebAssembly redéfinissent ce qui est possible sur le web. Pour rester compétitif dans ce paysage en évolution rapide, il est essentiel de se tenir informé des dernières tendances et d'adopter les outils et méthodologies qui correspondent le mieux à vos besoins spécifiques. Chez Kokitech Academy, nous intégrons constamment ces nouvelles technologies dans nos formations pour préparer nos étudiants aux défis du développement web moderne.",
    },
    comments: [
      {
        name: "Jean Dupont",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "13 Mai 2023",
        content:
          "Article très instructif ! J'utilise Next.js depuis quelques mois et je suis impressionné par sa flexibilité. Avez-vous des ressources à recommander pour approfondir Svelte ?",
      },
      {
        name: "Marie Leroy",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "14 Mai 2023",
        content:
          "Merci pour cet aperçu complet. Je suis particulièrement intéressée par WebAssembly. Est-ce que vous pensez qu'il est nécessaire d'apprendre Rust ou C++ pour l'utiliser efficacement ?",
      },
      {
        name: "Ahmed Benali",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "15 Mai 2023",
        content:
          "Excellent article ! Je travaille actuellement sur une migration vers une architecture micro-frontends et je peux confirmer que c'est un défi, mais les bénéfices en valent la peine pour les grandes équipes.",
      },
    ],
  },
]

const relatedPosts = [
  {
    id: "2",
    title: "Comment créer une interface utilisateur intuitive",
    excerpt:
      "Les principes fondamentaux de l'UX/UI design pour créer des interfaces utilisateur qui offrent une expérience fluide.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Design",
    readTime: 6,
    author: "Thomas Dubois",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    title: "L'intelligence artificielle au service de la santé",
    excerpt:
      "Comment l'IA révolutionne le secteur de la santé, de la détection précoce des maladies à l'optimisation des traitements.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Santé",
    readTime: 10,
    author: "Amina Ndiaye",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    title: "Les bases de données NoSQL vs SQL : quand utiliser l'une ou l'autre ?",
    excerpt: "Une analyse comparative des bases de données relationnelles et non relationnelles pour vos projets.",
    image: "/placeholder.svg?height=250&width=350",
    category: "Développement",
    readTime: 7,
    author: "Lucas Martin",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
]
