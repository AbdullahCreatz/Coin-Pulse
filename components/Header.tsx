'use client'

import { cn } from '../lib/utils'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'


export const Header = () => {

    const pathName = usePathname()


    return (
        <header >

            <div className='main-container inner  '>
                <Link href='/'>
                    <div className=' border-green-900 p-4 justify-center items-center'>
                        <Image src="/logo.svg" alt="coin pulse logo" width={140} height={80} />
                    </div>

                </Link>


                <nav>

                    <Link href='/' className={cn('nav-link', {
                        'is-active': pathName == '/',
                        'is-home': true
                    })} >
                        Home
                    </Link>

                    <p className='nav-link'> Search Model </p>

                    <Link href='/coins' className={cn('nav-link', {
                        'is-active': pathName == '/coins',
                    })}>
                        All Coins
                    </Link>

                </nav>


            </div>

        </header>
    )
}

