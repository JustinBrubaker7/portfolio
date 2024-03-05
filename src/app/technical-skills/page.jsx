import React, { useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

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
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const filteredCategories = Object.entries(categories).reduce(
    (acc, [category, technologies]) => {
      const filteredTechnologies = technologies.filter((technology) =>
        technology.toLowerCase().includes(searchTerm),
      )
      if (filteredTechnologies.length > 0) {
        acc[category] = filteredTechnologies
      }
      return acc
    },
    {},
  )
  return (
    <SimpleLayout
      title="Technical Skills"
      intro="I have experience with a wide range of technologies and tools with a focus on the Javascript ecosystem but continuing to grow in new ways. Here is an exhaustive list of the languages, frameworks, tools, and tech I've used."
    >
      <input
        type="text"
        placeholder="Search technologies..."
        className="mb-6 w-full rounded-md border-gray-300 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
        onChange={handleSearchChange}
      />
      <div>
        {Object.entries(categories).map(([category, technologies]) => (
          <div key={category} className="mb-12 flex flex-col gap-2">
            <h2 className="my-4 text-2xl font-bold tracking-tight text-gray-200 sm:text-3xl lg:text-4xl">
              {category}
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
            >
              {technologies.map((technology) => (
                <li className="text-gray-300" key={technology}>
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
