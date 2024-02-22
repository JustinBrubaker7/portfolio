import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectCard({ as = 'div', className, children }) {
  // Using 'as' prop to determine the component type, defaulting to 'div'
  let Component = as

  return (
    <Component
      className={clsx(
        'group relative flex flex-col items-start rounded-lg p-6',
        'ring-1 ring-zinc-900/5 transition-shadow hover:shadow-md',
        'dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0',
        'h-full justify-between', // Ensure content is spaced between and card takes full height
        className, // Allow custom styles passed through className prop
      )}
    >
      {children}
    </Component>
  )
}

ProjectCard.Link = function CardLink({ className, children, ...props }) {
  return (
    <Link {...props}>
      <div
        className={`inline-block text-zinc-800 hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-400 ${className}`}
      >
        {children}
      </div>
    </Link>
  )
}

ProjectCard.Title = function CardTitle({ as, href, children }) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? (
        <ProjectCard.Link href={href}>{children}</ProjectCard.Link>
      ) : (
        children
      )}
    </Component>
  )
}

ProjectCard.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

ProjectCard.TechStack = function CardTechStack({ children }) {
  return (
    <ul className="relative z-10 mt-2 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children?.map((tech, index) => (
        <li
          key={index}
          className="rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-700/50"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

ProjectCard.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-emerald-700"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

ProjectCard.Eyebrow = function CardEyebrow({
  as,
  decorate = false,
  className,
  children,
  ...props
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
