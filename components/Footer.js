import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import leaf from "../images/icon_leaf.png"

const Footer = () => {
    return (
        <div className="footer flex items-center justify-between px-4 py-2 bg-gray-100">
            <div className="flex items-center space-x-5 flex-grow">
                <Link href="#"><a className="hover:underline">Advertising</a></Link>
                <Link href="#"><a className="hover:underline">Business</a></Link>
                <Link href="#"><a className="hover:underline">How Search works</a></Link>
            </div>
            <div className="flex items-center space-x-5 flex-grow flex-1">
                <Link href="#"><a className="relative hover:underline"><Image src={leaf} alt="leaf" width="13" height="16" /> Carbon neutral since 2007</a></Link>
            </div>
            <div className="flex items-center space-x-5 flex-grow justify-end">
                <Link href="#"><a className="hover:underline">Privacy</a></Link>
                <Link href="#"><a className="hover:underline">Terms</a></Link>
                <Link href="#"><a className="hover:underline">Settings</a></Link>
            </div>
        </div>
    )
}

export default Footer
