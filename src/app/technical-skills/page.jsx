import dynamic from 'next/dynamic'
import React from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

const SearchBox = dynamic(() => import('./SearchBox.client.jsx'), {
  ssr: false,
})

export const metadata = {
  title: 'Technical Skills',
  description:
    'I have experience with a wide range of technologies and tools with a focus on the Javascript ecosystem but continuing to grow in new ways. Here are a few of the ones I have used recently.',
}

const categories = {
  Languages: ['Javascript', 'Typescript', 'CSS', 'HTML', 'PHP', 'SQL'],
  'Frameworks and Libraries': [
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Vite',
    'Styled Components',
    'HTMX',
    'Express',
    'GraphQL',
    'Apollo',
    'Prisma',
    'Redux',
    'Laravel',
    'React Router',
    'React Query',
    'React Hook Form',
    'Shopify Liquid',
    'Shopify Hydrogen',
    'SASS',
  ],
  Databases: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Pinecone DB'],
  'DevOps and Deployment': [
    'Docker',
    'AWS',
    'Azure',
    'Netlify',
    'Vercel',
    'Digital Ocean',
    'Github',
    'Git',
    'Bitbucket',
  ],
  'Testing Tools': [
    'Jest',
    'Cypress',
    'React Testing Library',
    'Puppeteer',
    'Insomnia (API Testing)',
  ],
  'Project Management and Collaboration': ['Jira', 'Notion'],
  'Other Technologies and Tools': [
    'Embedding Models',
    'Webhooks',
    'OpenAI API',
    'Web Sockets',
    'Authentication',
    'Custom Wordpress Theme',
    'Shopify',
    'JWT (JSON Web Tokens)',
    'i18next',
    'OAuth',
    'Stripe',
    'Twilio/Plivo',
    'Salesforce',
    "Salesforce API's",
    'Supabase',
    'Server Side Rendering (SSR)',
    'Remix',
    'SOQL (Salesforce Object Query Language)',
  ],
}

export default function TechnicalSkills() {
  return (
    <SimpleLayout
      title="Technical Skills"
      intro="I have experience with a wide range of technologies and tools with a focus on the Javascript ecosystem but continuing to grow in new ways. Here is an exhaustive list of the languages, frameworks, tools, and tech I've used."
    >
      <SearchBox allTerms={Object.values(categories).flat()} />
      <div>
        {Object.entries(categories).map(([category, technologies]) => (
          <div key={category} className="mb-12 flex flex-col gap-2">
            <h2 className="tracking-tigh mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl lg:text-3xl">
              {category}
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
            >
              {technologies.map((technology) => (
                <li
                  className="text-gray-600 dark:text-gray-300 "
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
