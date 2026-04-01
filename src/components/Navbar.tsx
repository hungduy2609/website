'use client';

import { Flower2, Heart, Search, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 20);
        });
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-kawaii' : 'bg-transparent'}`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Flower2 className="w-8 h-8 text-primary-pink" />
                        <span className="font-comic font-bold text-2xl text-primary-dark">PoseKute.vn</span>
                    </div>

                    {/* Center Menu - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="font-poppins font-medium text-primary-dark hover:text-primary-pink transition-colors">
                            Home
                        </a>
                        <a href="/pose" className="font-poppins font-medium text-primary-dark hover:text-primary-pink transition-colors">
                            Pose
                        </a>
                        <a href="#outfits" className="font-poppins font-medium text-primary-dark hover:text-primary-pink transition-colors">
                            Outfit
                        </a>
                        <a href="#makeup" className="font-poppins font-medium text-primary-dark hover:text-primary-pink transition-colors">
                            Makeup
                        </a>
                        <a href="#lookbook" className="font-poppins font-medium text-primary-dark hover:text-primary-pink transition-colors">
                            Lookbook
                        </a>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Search Bar */}
                        <div className="hidden sm:flex items-center bg-primary-cream rounded-full px-4 py-2 border-2 border-primary-pink/30">
                            <Search className="w-4 h-4 text-primary-pink mr-2" />
                            <input type="text" placeholder="Tìm pose..." className="bg-transparent outline-none text-sm font-poppins text-primary-dark placeholder-gray-400 w-32" />
                        </div>

                        {/* Icons */}
                        <button className="p-2 hover:bg-primary-pink/10 rounded-full transition-colors">
                            <Heart className="w-6 h-6 text-primary-pink" />
                        </button>
                        <button className="p-2 hover:bg-primary-pink/10 rounded-full transition-colors relative">
                            <ShoppingBag className="w-6 h-6 text-primary-pink" />
                            <span className="absolute -top-1 -right-1 bg-primary-sparkle text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
                        </button>
                        <button className="p-2 hover:bg-primary-pink/10 rounded-full transition-colors">
                            <User className="w-6 h-6 text-primary-pink" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
