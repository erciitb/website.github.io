import Layout from '../components/Layout'
import Title from "../components/Title"
import NavBar from '../components/NavBar'
import TeamDetails from '../components/Team'

export default function Info(props) {
  return (
    <>
    <Layout
      pathname="index"
      siteTitle={props.title}
      siteDescription={props.description}
      >
      {/* <NavBar /> */}
      <Title />
      <TeamDetails />
    </Layout>
    </>
  )
}


export async function getStaticProps({ ...ctx }) {
  const config = await import(`../data/config.json`)
  return {
    props: {
      title: config.title,
      description: config.description
    },
  }
}