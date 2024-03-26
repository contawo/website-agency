import Head from 'next/head'
import MainLayout from '../layout/MainLayout'
import Intro from '../components/utils/Intro'
import Process from '../components/utils/Process'
import Quality from '../components/utils/Quality'
import Progress from '../components/utils/Progress'
import Maintain from '../components/utils/Maintain'
import Prompt from '../components/utils/Prompt'
import Footer from '../components/utils/Footer'
import { GetServerSideProps } from 'next'

export default function Home({width}: {width: string}) {
  return (
    <MainLayout>
      <Head> 
        <title>Online Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={{width: width, zIndex: -1}}>
          <Intro />
          <Process />
          <Quality />
          <Progress />
          <Maintain />
          <Prompt />
          <Footer />
        </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const width = "100%";
  return {
    props: {
      width
    }
  }
}