'use client';

import { Heart, Shirt, Sparkles, BookMarked } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PoseCardProps {
    id: number;
    title: string;
    image: string;
    badge?: string;
    location?: string;
    outfitCount?: number;
    makeupCount?: number;
    likes?: number;
    /** Masonry height variant: 'tall' | 'medium' | 'short' */
    heightVariant?: 'tall' | 'medium' | 'short';
}

const heightMap = {
    tall: 'h-[480px]',
    medium: 'h-[360px]',
    short: 'h-[300px]',
};

export default function PoseCard({ title, image, badge = 'Trend 2026', outfitCount = 5, makeupCount = 3, likes = 156, heightVariant = 'medium' }: PoseCardProps) {
    return (
        <Card className="group overflow-hidden rounded-[24px] border-0 bg-white shadow-kawaii hover:shadow-kawaii-hover hover:scale-[1.02] transition-all duration-300">
            {/* Image */}
            <div className={cn('relative overflow-hidden', heightMap[heightVariant])}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Trend Badge */}
                <div className="absolute top-3 left-3 z-20">
                    <Badge className="bg-[#FFB6C1] text-white border-0 rounded-full px-3 py-1 text-xs font-semibold font-poppins shadow-sm">
                        ✨ {badge}
                    </Badge>
                </div>

                {/* Like button */}
                <button className="absolute top-3 right-3 z-20 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-sm">
                    <Heart className="w-4 h-4 text-[#FFB6C1] fill-[#FFB6C1]" />
                </button>

                {/* Likes count floating at bottom */}
                <div className="absolute bottom-3 right-3 z-20 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#FFB6C1] fill-[#FFB6C1]" />
                    <span className="text-xs font-poppins font-medium text-gray-700">{likes}</span>
                </div>
            </div>

            {/* Card Body */}
            <CardContent className="p-4">
                <h3 className="font-comic font-bold text-[15px] text-primary-dark mb-3 leading-tight">{title}</h3>

                {/* Icon Meta */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 bg-[#B5EAD7]/30 rounded-full px-2.5 py-1">
                        <Shirt className="w-3.5 h-3.5 text-[#4db899]" />
                        <span className="font-poppins text-xs text-gray-600">{outfitCount} outfit</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#E0BBE4]/30 rounded-full px-2.5 py-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#c07cd4]" />
                        <span className="font-poppins text-xs text-gray-600">{makeupCount} makeup</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button
                        className="flex-1 h-9 rounded-[14px] bg-[#FFB6C1] hover:bg-[#FF8FB1] text-white font-poppins font-semibold text-xs border-0 shadow-none transition-colors"
                    >
                        Thử pose này
                    </Button>
                    <Button
                        variant="outline"
                        className="h-9 px-3 rounded-[14px] border-[#E0BBE4] text-[#c07cd4] hover:bg-[#E0BBE4]/20 font-poppins text-xs gap-1.5"
                    >
                        <BookMarked className="w-3.5 h-3.5" />
                        Lưu
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
