import { BookmarkIcon, DotsVerticalIcon, NewspaperIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HeaderInner from '../components/HeaderInner';
import logo from "../images/logo.png";

const Search = () => {
    const [result, setResult] = useState("");
    const [start, setStart] = useState(1);
    const router = useRouter();
    const { q } = router.query;
    const [query, setQuery] = useState(q);

    const handlePagination = (index) => {
      setStart(index);
    }

    const handleSearch = (input) => {
      if(input) {
        setQuery(input);
        setStart(1);
        Router.push({
            pathname: '/search',
            query: { q: input }
        });
      }
  }
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://www.googleapis.com/customsearch/v1?key= AIzaSyB0F30JZG2pUvusb52sb2Sv2FlNUWVqzjk&cx=c0b4dd601557c415d&q="+query+'&start='+start+'&num=10');
        const responseData = await response.json();
        setResult(responseData);
     }
     fetchData();
    },[query, start]);
    
    console.log(result);

    return (
    <div className="app">
      <Head>
        <title>Next.js Google - Search</title>
        <meta name="description" content="Next.js Google" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderInner data={query} handleSearch={handleSearch} />
      <main className="mb-16">
        <div className="max-w-6xl px-40">
            <ul className="flex items-center space-x-5">
                <li className="flex items-center space-x-1 border-b-4 border-blue-600 py-2 text-sm"><SearchIcon width="18" /> <span>All</span></li>
                <li className="flex items-center space-x-1 py-2 text-sm"><NewspaperIcon width="18" /> <span>News</span></li>
                <li className="flex items-center space-x-1 py-2 text-sm"><BookmarkIcon width="18" /> <span>Books</span></li>
                <li className="flex items-center space-x-1 py-2 text-sm"><VideoCameraIcon width="18" /> <span>Videos</span></li>
                <li className="flex items-center space-x-1 py-2 text-sm"><DotsVerticalIcon width="18" /> <span>More</span></li>
            </ul>
        </div>
        <hr />
        <div className="max-w-6xl px-40">
          <div className="text-gray-500 my-4">
            About {result?.searchInformation?.totalResults} results ({result?.searchInformation?.searchTime} seconds) 
          </div>

         {result?.items?.map((item, index) => (
           <div className="mb-5 break-words" key={index}>
            <Link href={item.link}>
              <a target="_blank">{item.link}</a>
            </Link>
            <Link href={item.link}>
              <a target="_blank">
                <h2 className="font-semibold text-2xl text-blue-500 hover:underline">{item.title}</h2>
              </a>
            </Link>
            <p>{item.snippet}</p>
          </div>
         ))}

         <div className="pagination text-center mt-10">
          <Image src={logo} alt="logo" height="50" objectFit="contain" />
          <ul className="flex items-center justify-center space-x-2">
            {result?.items?.map((item, i) => (
              <li key={i+1}><a onClick={() => handlePagination(i+1)} href="#" className={start === (i+1) ? "active" : ""}>{i+1}</a></li>
            ))}
          </ul>
         </div>
        </div>
      </main>
      <Footer />
    </div>
    )
}

export default Search