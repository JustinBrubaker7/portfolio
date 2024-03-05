import React from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Technical Skills',
  description:
    'I have experience with a wide range of technologies and tools with a focus on the Javascript ecosystem but continuing to grow in new ways. Here are a few of the ones I have used recently.',
}

const categories = {
  Languages: ['Javascript', 'Typescript', 'CSS', 'HTML', 'SASS', 'PHP', 'SQL'],
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
  ],
  Databases: ['Pinecone DB', 'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'],
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
    'Salesforce Commerce Cloud',
    'SOQL (Salesforce Object Query Language)',
    'Supabase',
    'Server Side Rendering (SSR)',
    'Remix',
  ],
}

export default function TechnicalSkills() {
  return (
    <SimpleLayout
      title="Technical Skills"
      intro="I have experience with a wide range of technologies and tools with a focus on the Javascript ecosystem but continuing to grow in new ways. Here is an exhaustive list of the languages, frameworks, tools, and tech I've used."
    >
      <div>
        {Object.entries(categories).map(([category, technologies]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul role="list" className="list-disc pl-5">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
