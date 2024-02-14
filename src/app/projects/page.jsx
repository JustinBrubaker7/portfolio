import Image from 'next/image'

import { ProjectCard } from '@/components/ProjectCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import SparkLogo from '@/images/logos/Spark.jpg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import PowerGPTLogo from '@/images/logos/PowerGPT.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Power GPT',
    description:
      'A new interface for the GPT tool suite with a focus on the power users.',
    links: [
      {
        href: 'https://github.com/JustinBrubaker7/gpt-power-user',
        label: 'GitHub',
      },
      {
        href: 'https://gptpower.netlify.app/',
        label: 'Live Site',
      },
    ],
    logo: PowerGPTLogo,
  },
  {
    name: 'Vector Database Semantic Search',
    description:
      'Creating a semantic search engine for a Vector Database, a database of the bible. This is coming soon.',
    links: [
      {
        href: 'https://github.com/JustinBrubaker7/vector-search',
        label: 'Github',
      },
      {
        href: 'https://vector.justinbrubaker.dev/',
        label: 'Live Site',
      },
    ],
    logo: logoHelioStream,
  },
  {
    name: 'Spark Texts ',
    description:
      "Simplify Your Relationship One message at a time We send you text messages (or 'sparks'), that rekindle those early relationship moments, capturing the magic and reigniting the romance",

    links: [
      {
        href: 'https://sparktexts.co/',
        label: 'SparkTexts.co',
      },
    ],
    logo: SparkLogo,
  },
  {
    name: 'Auth and Portal Template',
    description:
      "A template for a full stack auth and portal system. It's built with React.js, Node,js, MySQL, JWT and Tailwind css.",

    links: [
      {
        href: 'https://github.com/JustinBrubaker7/fullstack-auth-portal-template',
        label: 'Github',
      },
    ],
    logo: logoAnimaginary,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent on the world.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made to put my dent on the world."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 bg-white"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <ProjectCard.Description>
              {project.description}
            </ProjectCard.Description>
            <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition  dark:text-zinc-200">
              {project.links.map((link, index) => (
                <div
                  key={index}
                  className="mr-4 flex items-center hover:text-teal-500 hover:underline dark:hover:text-teal-400"
                >
                  <LinkIcon className="-mr-2 h-6 w-6 flex-none" />
                  <ProjectCard.Link
                    href={link.href}
                    target="_blank"
                    className="ml-2"
                  >
                    {link.label}
                  </ProjectCard.Link>
                </div>
              ))}
            </div>
          </ProjectCard>
        ))}
      </ul>
    </SimpleLayout>
  )
}
