import { CogIcon, MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../images/logo.png"

const HeaderInner = ({ data, handleSearch }) => {
    const [input, setInput] = useState(data);
    
    return (
        <div className="flex items-center justify-between px-4 py-0">
            <div className="relative flex items-center w-36">
                <Link href="/" passHref={true}>
                    <a>
                        <Image src={logo} alt="logo" height="100" objectFit="contain" />
                    </a>
                </Link>
            </div>
            <div className="relative flex items-center border-2 rounded-full px-4 py-2 w-full mx-5 my-5 max-w-full hover:shadow-md">
                <input onChange={(e) => setInput(e.target.value)} type="text" className="outline-0 px-3 flex-grow text-lg" value={input} />
                <XIcon height="20" className="border-r-2 pr-3 cursor-pointer" />
                <MicrophoneIcon height="20" className="mx-3" />
                <SearchIcon height="20" className="cursor-pointer" onClick={() => handleSearch(input)} />
            </div>
            <div className="flex items-center space-x-5">
                <CogIcon className="w-7" />
                <ViewGridIcon className="w-7" />
                <UserCircleIcon className="w-7" />
            </div>
        </div>
    )
}

export default HeaderInner
