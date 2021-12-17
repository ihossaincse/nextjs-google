import { ViewGridIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-5">
                <Link href="#"><a className="hover:underline">About</a></Link>
                <Link href="#"><a className="hover:underline">Store</a></Link>
            </div>
            <div className="flex items-center space-x-5">
                <Link href="#"><a className="hover:underline">Gmail</a></Link>
                <Link href="#"><a className="hover:underline">Images</a></Link>
                <ViewGridIcon className="w-7" />
                <UserCircleIcon className="w-7" />
            </div>
        </div>
    )
}

export default Header
