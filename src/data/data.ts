import { Code, Layout, Server, Wrench } from "lucide-react"
import type { FC } from "react"

export type Project = {
    title: string
    description: string
    stack: string[]
    github: string
    live?: string
    images?: string[]
}

export type SkillGroup = {
    category: string
    items: string[]
    icon: FC<{ className?: string }>
}

export const personal = {
    name: "Alexandru Cazacu",
    title: "Front-End Development",
    bio: "Detail-oriented frontend developer focused on crafting clean, responsive, and user-friendly interfaces.",
    location: "London, UK",
    email: "..",
    github: "https://github.com/yegost",
    linkedin: "https://www.linkedin.com/in/alexcazacu1/",
}

export const skills: SkillGroup[] = [
    {
        category: "Languages",
        icon: Code,
        items: ["TypeScript", "JavaScript"]
    },
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "HTML", "CSS", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "MySQL"]
    },
    {
        category: "Tools",
        icon: Wrench,
        items: ["Git", "GitHub", "VS Code"]
    }
]

export const projects: Project[] = [
  {
    title: "Movie Search App",
    description: "A dark, cinematic movie discovery app built with React and the TMDB API. Search for movies, explore details, discover cast members, and save your favourites.",
    stack: ["React", "Tailwind CSS"],
    github: "https://github.com/yegost/movie-search-app",
    live: "https://yegost.github.io/movie-search-app/",
    images: [
        "./moviesearch.png", 
        "./moviesearch1.png", 
        "./moviesearch2.png",
        "./moviesearch3.png",
        "./moviesearch4.png",
    ],
  },
  {
    title: "Artist Search App",
    description: "A music discovery app built with Node.js and the Spotify API. Search for any artist and explore their profile, albums, and tracklists.",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    github: "https://github.com/yegost/artist-search-app",
    live: "https://artist-search-app-3dev.onrender.com/",
    images: [
        "./artistsearch.png", 
        "./artistsearch1.png", 
        "./artistsearch2.png"
    ],
  },
  {
    title: "Weather App",
    description: "A React weather app built with Vite that shows current weather and a 5-day forecast for any city.",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    github: "https://github.com/yegost/artist-search-app",
    live: "https://weather-app-phi-ten-60.vercel.app/",
    images: [
        "./weatherapp.png", 
        "./weatherapp1.png", 
    ],
  }
]