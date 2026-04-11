export type Project = {
    title: string
    description: string
    stack: string[]
    github: string
    live?: string
}

export type SkillGroup = {
    category: string
    items: string[]
}

export const personal = {
    name: "Alexandru Cazacu",
    title: "Front-End Developer",
    bio: "..",
    location: "London, UK",
    email: "..",
    github: "..",
    linkedin: "..",
}

export const skills: SkillGroup[] = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript"]
    },
    {
        category: "Frontend",
        items: ["React", "HTML", "CSS", "Tailwind CSS"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MySQL"]
    },
    {
        category: "Tools",
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
  },
  {
    title: "Artist Search App",
    description: "A music discovery app built with Node.js and the Spotify API. Search for any artist and explore their profile, albums, and tracklists.",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    github: "https://github.com/yegost/artist-search-app",
    live: "https://artist-search-app-3dev.onrender.com/",
  },
  {
    title: "Weather App",
    description: "A React weather app built with Vite that shows current weather and a 5-day forecast for any city.",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express"],
    github: "https://github.com/yegost/artist-search-app",
    live: "https://weather-app-phi-ten-60.vercel.app/",
  }
]