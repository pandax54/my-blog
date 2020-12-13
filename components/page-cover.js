import Avatar from '../components/avatar'
import CoverImage from '../components/cover-image'


export default function HeroPost({
  title,
  coverImage,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
    </section>
  )
}
