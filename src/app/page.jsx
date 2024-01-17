import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import othlLogo from '@/images/logos/othl.png'
import logoReact from '@/images/logos/icons/React.png'
import logoNode from '@/images/logos/icons/nodeJS2.png'
import TCLogo from '@/images/logos/TC.jpg'
import logoBytrek from '@/images/logos/bytrek.png'
import MYSQLLogo from '@/images/logos/icons/MYSQL.png'
import JavaScript from '@/images/logos/icons/Javascript.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/andras-vas-Bd7gNnWJBkU-unsplash.jpg'
import image7 from '@/images/photos/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import image8 from '@/images/photos/ben-kolde-bs2Ba7t69mM-unsplash.jpg'
import image9 from '@/images/photos/christopher-gower-vjMgqUkS8q8-unsplash.jpg'
import image10 from '@/images/photos/diego-ph-fIq0tET6llw-unsplash.jpg'
import image11 from '@/images/photos/ilya-pavlov-OqtafYT5kTw-unsplash.jpg'

import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CodeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      data-slot="icon"
      class="h-6 w-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="text" decorate>
        {article.projectType}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Reach Out</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Want to get in touch? I&apos;d love to hear from you. Send me a message
        and I&apos;ll respond as soon as possible.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Email
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role?.start === 'string' ? role?.start : role?.start?.label
  let startDate =
    typeof role?.start === 'string' ? role?.start : role?.start?.dateTime

  let endLabel = typeof role?.end === 'string' ? role?.end : role?.end?.label
  let endDate = typeof role?.end === 'string' ? role?.end : role?.end?.dateTime

  return (
    <li className="flex gap-4">
      {role.logo && (
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50  dark:ring-0">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
      )}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        {role.link ? (
          <a
            href={role.link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 underline dark:text-zinc-100">
              {role.company}
            </dd>
          </a>
        ) : (
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
        )}

        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        {role?.start || role?.end ? (
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        ) : null}
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Bytrek LLC',
      title: 'Tech Lead and Senior Engineer',
      logo: logoBytrek,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'OneTrust Home Loans',
      title: 'Front End Developer',
      logo: othlLogo,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Teen Challenge of Southern Cal',
      title: 'Web Developer and IT Generalist',
      logo: TCLogo,
      start: '2017',
      end: '2021',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1Ef8hV1Aljk107v6iTU4BtWnayJAp9pBO/view?usp=drive_link"
        variant="secondary"
        className="group mt-6 w-full"
        target="_blank"
        rel="noopener"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Skillz() {
  let resume = [
    {
      company: 'Javascript',
      title: '',
      logo: JavaScript,
    },
    {
      company: 'React.js',
      title: '',
      logo: logoReact,
    },
    {
      company: 'Node.js',
      title: '',
      logo: logoNode,
    },
    {
      company: 'MYSQL',
      title: 'Web Developer and IT Generalist',
      logo: MYSQLLogo,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6  dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Featured Technical Skills</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            {role.logo && (
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50  dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
            )}
            <dl className="flex flex-auto flex-wrap items-center gap-x-2">
              <dt className="sr-only">Company</dt>

              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm italic text-zinc-400 dark:text-zinc-400 ">
        For a full list view my resume
      </p>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative hidden aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:block dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
        {[image7, image10, image9, image8, image11].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:hidden  dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Interests() {
  let resume = [
    {
      company: 'Software Developers of the East Valley',
      title: 'Organizer and Host',
      link: 'https://www.meetup.com/software-developers-of-the-east-valley-gilbert-queen-creek/',
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Temecula Web Techies',
      title: 'Member',
      start: '2021',
      end: '2022',
    },
    {
      company: 'Mentor and Tutor',
      title: 'Taught and mentored students and friends development',
      start: '2017',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className=" rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Interests</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:hidden dark:text-zinc-100 sm:text-5xl">
            Software Developer, Leader, Advocate for Team Growth.
          </h1>
          <h1 className="hidden text-4xl font-bold tracking-tight text-zinc-800 dark:block dark:text-zinc-100 sm:text-5xl">
            Husband, Father, Explorer, Coffee Lover.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:hidden dark:text-zinc-400">
            As a seasoned software developer with experience stretching back to
            2017, I specialize in creating dynamic and efficient solutions using
            a robust skill set that includes React, JavaScript, Node.js, MySQL,
            and Salesforce. My expertise extends beyond technical acumen to
            encompass integrations and leadership, underscoring my ability to
            guide projects and teams towards success. At the core of my
            professional journey is a deep passion for contributing to
            meaningful causes and nurturing the growth of new developers. This
            dedication not only drives my continual learning but also enriches
            the teams and projects I am privileged to lead.
          </p>
          <p className="mt-6 hidden text-base text-zinc-600 dark:block dark:text-zinc-400">
            Balancing a fulfilling personal life, I cherish quality time with my
            wife and daughter, fostering strong family bonds. Actively involved
            in our church, I find joy and purpose in serving the community. My
            enthusiasm extends to the tech world, where I enjoy both attending
            and hosting local developer groups, sharing knowledge and
            experiences. As an Arizona resident, I embrace the spirit of
            adventure, often exploring new horizons with my two weiner dogs in
            tow. Whether it&apos;s traversing the landscapes in our RV or
            delving into new learning experiences, I&apos;m constantly seeking
            growth and adventure in every aspect of life.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            /> */}
            <SocialLink
              href="https://github.com/JustinBrubaker7"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/brubakerjustin/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            <h3 className="pb-8 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Projects
            </h3>
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
            <Skillz />
            <Interests />
          </div>
        </div>
      </Container>
    </>
  )
}
