'use client';

import { Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import animeGirl from '../image/image.png';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] kawaii-gradient overflow-hidden">
            {/* Sparkle Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="sparkle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="heart text-primary-pink/30" style={{ left: '10%', top: '20%', animationDelay: '0s' }}>
                    💕
                </div>
                <div className="heart text-primary-mint/30" style={{ left: '85%', top: '15%', animationDelay: '0.5s' }}>
                    💖
                </div>
                <div className="heart text-primary-lavender/30" style={{ left: '15%', top: '70%', animationDelay: '1s' }}>
                    💗
                </div>
                <div className="heart text-primary-sparkle/30" style={{ left: '80%', top: '65%', animationDelay: '1.5s' }}>
                    💝
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <h1 className="font-comic font-bold text-5xl sm:text-6xl lg:text-7xl text-primary-pink mb-6 leading-tight">Hôm nay pose gì để xinh?</h1>
                        <p className="font-poppins text-xl sm:text-2xl text-primary-dark mb-8 max-w-xl">300+ pose + outfit + makeup có link mua ngay 💸</p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group relative px-8 py-4 bg-primary-pink text-white font-poppins font-semibold text-lg rounded-3xl shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">
                                <span className="flex items-center gap-2">
                                    Khám phá Pose ngay
                                    <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                                </span>
                            </button>
                            <button className="px-8 py-4 bg-primary-mint text-primary-dark font-poppins font-semibold text-lg rounded-3xl shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">Xem Lookbook hot</button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                            <div className="text-center">
                                <div className="font-comic font-bold text-3xl text-primary-pink">300+</div>
                                <div className="font-poppins text-sm text-gray-600">Poses</div>
                            </div>
                            <div className="text-center">
                                <div className="font-comic font-bold text-3xl text-primary-mint">500+</div>
                                <div className="font-poppins text-sm text-gray-600">Outfits</div>
                            </div>
                            <div className="text-center">
                                <div className="font-comic font-bold text-3xl text-primary-lavender">200+</div>
                                <div className="font-poppins text-sm text-gray-600">Makeup</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Anime Illustration */}
                    <div className="flex-1 relative z-10">
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Decorative circles */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-pink/20 to-primary-mint/20 rounded-full blur-3xl animate-pulse-slow" />

                            {/* Main illustration container */}
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-[40px] p-8 shadow-kawaii">
                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-pink/10 to-primary-mint/10">
                                    <Image
                                        src={animeGirl}
                                        alt="Anime girl illustration"
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Floating stars around illustration */}
                                    <Star className="absolute top-8 right-8 w-8 h-8 text-primary-sparkle animate-sparkle" />
                                    <Star className="absolute bottom-12 left-8 w-6 h-6 text-primary-mint animate-sparkle" style={{ animationDelay: '0.5s' }} />
                                    <Star className="absolute top-1/3 right-4 w-5 h-5 text-primary-lavender animate-sparkle" style={{ animationDelay: '1s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF9F5" />
                </svg>
            </div>
        </section>
    );
}
