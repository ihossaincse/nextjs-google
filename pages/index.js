import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import logo from "../images/logo.png"

export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if(input) {
      router.push({
        pathname: '/search',
        query: { q: input }
      });
    }
  }
  
  return (
    <div className="homepage">
      <Head>
        <title>Next.js Google</title>
        <meta name="description" content="Next.js Google" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="my-16">
        <div className="relative text-center">
          <Image src={logo} alt="logo" height="100" objectFit="contain" />
        </div>
        <div className="relative flex items-center border-2 rounded-full px-4 py-2 max-w-lg m-auto my-5 hover:shadow-md">
          <SearchIcon height="20" />
          <input onChange={(e) => setInput(e.target.value)} type="text" className="outline-0 px-3 flex-grow text-lg" />
          <MicrophoneIcon height="20" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <button onClick={() => handleSearch()} className="bg-gray-100 px-4 py-2 rounded-md border-2 border-gray-100 hover:border-2 hover:border-gray-200">Google Search</button>
          <button className="bg-gray-100 px-4 py-2 rounded-md border-2 border-gray-100 hover:border-2 hover:border-gray-200">I&apos;m Feeling Lucky</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
