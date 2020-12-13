import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import CoverImagePage from '../components/cover-image-page';
// import img from '../public/assets/image.jpg'

const img = '/assets/blog/hello-world/cover.jpg'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About me</title>
        </Head>
        <Container>
          <Intro />
            <CoverImagePage
              title="About"
              src={img}
              slug="about"
            />
            <img
              src='/assets/blog/image.jpg'
              alt={`Cover Image for`}
            />
        </Container>
      </Layout>
    </>
  )
}

