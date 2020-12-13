import cn from 'classnames'
import Link from 'next/link'

export default function CoverImagePage({ title, src, slug }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )

  
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>nada</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
