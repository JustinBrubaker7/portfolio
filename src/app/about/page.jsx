import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait2.jpg' // Assuming this is your portrait

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Justin Brubaker, a seasoned Full Stack Developer and Team Lead. I live in the Greater Phoenix Area, where I innovate in the fields of distribution and aviation through technology.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Justin Brubaker"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 md:aspect-auto"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m Justin Brubaker. I live in the Greater Phoenix Area,
            dedicated to mastering software development and championing team
            advancement in the tech industry
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey began in a non-profit environment, sparking my interest
              in technology&apos;s power to drive positive change. This
              experience laid the foundation for my career in software
              engineering, where I specialize in fullstack development and have
              spent considerable time with integration technologies,
              particularly Salesforce and its ecosystem.
            </p>
            <p>
              As a Lead Engineer, my expertise lies in React.js, Node.js, and
              MySQL crafting robust applications that enhance connectivity,
              automation with AI and streamline business processes. My role
              transcends coding; I&apos;m now a mentor and leader, fostering
              innovation and guiding teams to exceed business objectives.
            </p>
            <p>
              My professional journey has evolved significantly over time,
              leading me from the role of Front End Developer at OneTrust Home
              Loans to my current position as Lead Software Engineer at Bytrek.
              In this pivotal role, I have grown from an individual contributor
              to leading a team of seven talented engineers. Our focus is on
              aviation and distribution, with a special emphasis on
              integrations, particularly within the Salesforce ecosystem. This
              experience has allowed me to further refine my skills in software
              engineering, team leadership, and strategic project management,
              continually driving innovation and excellence in our field.
            </p>
            <p>
              Today, my commitment to technology is unwavering, as I continue to
              adapt and solve complex challenges, leading projects that push the
              boundaries of what&apos;s possible in tech-driven environments.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink
              href="https://twitter.com/yourhandle"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/yourhandle"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/JustinBrubaker7"
              target="_blank"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/brubakerjustin/"
              target="_blank"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:justinbrubaker7@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              justinbrubaker7@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
