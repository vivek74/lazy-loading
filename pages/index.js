import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Head from 'next/head'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'

function Home({scrollPosition}) {
  const [state, setState] = useState()

  useEffect(() => {
    (async()=> {
      const response =await Axios.get('https://picsum.photos/v2/list?page=2&limit=100');
      setState(response.data);
    })()
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home page</h1>
        {
          state?.map((data) =>
            <div style={{display: 'block'}}>
              <LazyLoadImage
                  key={data?.id}
                  alt="nature"
                  src={data?.download_url}
                  height={500}
                  width={500}
                  scrollPosition={scrollPosition}
                  placeholderSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYxuE9qu3OpxU5SW5h0Q4AqIpXBM1FojtH1Q&usqp=CAU"
              />
            </div>
          )
        }
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export default trackWindowScroll(Home);