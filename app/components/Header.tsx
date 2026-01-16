'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="absolute top-2 left-0 right-0 z-40 p-4 sm:p-6 pointer-events-none">
            <div className="w-full h-full flex justify-between items-center max-w-[1600px] mx-auto">
                {/* VVCE Logo */}
                <div className="pointer-events-auto">
                    <div className="relative group">
                        <Image
                            src="/vvce-logo.png"
                            alt="VVCE Logo"
                            width={100}
                            height={100}
                            className="relative object-contain brightness-110 contrast-125 drop-shadow-md grayscale hover:grayscale-0 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Inunity Logo */}
                <div className="pointer-events-auto">
                    <Image
                        src="/inunity-logo.png"
                        alt="Inunity Logo"
                        width={200}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
