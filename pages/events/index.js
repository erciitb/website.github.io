import matter from 'gray-matter'
import Layout from '../../components/Layout'
import EventsPage from '../../components/EventsPage'

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
    >
      <section>
        <EventsPage allBlogs={props.allBlogs} />
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../../data/config.json`)
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]   
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      if ((typeof document.data.date) !== "string") document.data.date = document.data.date.toISOString();

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../../events', true, /\.md$/))

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.events.title,
      description: siteConfig.events.description,
    },
  }
}
