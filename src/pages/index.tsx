import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Next Template</h1>
      </main>
    </div>
  )
}
