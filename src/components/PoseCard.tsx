'use client';

import { Heart, MapPin, Shirt, Sparkles } from 'lucide-react';

interface PoseCardProps {
    id: number;
    title: string;
    image: string;
    badge?: string;
    location?: string;
    outfitCount?: number;
    makeupCount?: number;
    likes?: number;
}

export default function PoseCard({ id, title, image, badge = 'Trend 2026', location = 'Đà Lạt', outfitCount = 5, makeupCount = 3, likes = 156 }: PoseCardProps) {
    return (
        <div className="group">
            <div className="bg-white rounded-3xl shadow-kawaii overflow-hidden hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-[420px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    {/* Trend Badge */}
                    {badge && (
                        <div className="absolute top-4 left-4 z-20">
                            <span className="inline-block px-4 py-2 bg-primary-pink text-white font-poppins font-semibold rounded-full text-sm">{badge}</span>
                        </div>
                    )}

                    {/* Heart Icon */}
                    <button className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Heart className="w-5 h-5 text-primary-pink fill-primary-pink" />
                    </button>
                </div>

                {/* Card Content */}
                <div className="p-5">
                    {/* Title */}
                    <h3 className="font-comic font-bold text-xl text-primary-dark mb-3">{title}</h3>

                    {/* Info Icons */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1 text-gray-600">
                            <Shirt className="w-4 h-4 text-primary-mint" />
                            <span className="font-poppins text-sm">{outfitCount} outfit</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <Sparkles className="w-4 h-4 text-primary-lavender" />
                            <span className="font-poppins text-sm">{makeupCount} makeup</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <MapPin className="w-4 h-4 text-primary-pink" />
                            <span className="font-poppins text-sm">{location}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 px-4 py-3 bg-primary-pink text-white font-poppins font-semibold rounded-2xl hover:bg-primary-sparkle transition-colors">Thử pose này</button>
                        <button className="px-4 py-3 bg-primary-cream border-2 border-primary-pink/30 text-primary-pink font-poppins font-semibold rounded-2xl hover:bg-primary-pink/10 transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
