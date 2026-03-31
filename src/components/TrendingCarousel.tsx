'use client';

import { Heart, ShoppingCart } from 'lucide-react';

interface TrendingItem {
    id: number;
    title: string;
    price: string;
    image: string;
    likes: number;
}

const trendingItems: TrendingItem[] = [
    {
        id: 1,
        title: 'Váy pastel xinh xắn',
        price: '189k',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
        likes: 234,
    },
    {
        id: 2,
        title: 'Áo sơ mi kawaii',
        price: '259k',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        likes: 189,
    },
    {
        id: 3,
        title: 'Chân váy bồng bềnh',
        price: '199k',
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj9e?w=400&h=500&fit=crop',
        likes: 312,
    },
    {
        id: 4,
        title: 'Set đồ công chúa',
        price: '399k',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
        likes: 456,
    },
    {
        id: 5,
        title: 'Áo hoodie dễ thương',
        price: '299k',
        image: 'https://images.unsplash.com/photo-1551488852-080175d26531?w=400&h=500&fit=crop',
        likes: 278,
    },
    {
        id: 6,
        title: 'Quần jeans cạp cao',
        price: '349k',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
        likes: 167,
    },
];

export default function TrendingCarousel() {
    return (
        <section className="py-16 bg-primary-cream">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="font-comic font-bold text-3xl sm:text-4xl text-primary-dark mb-4">Trending tuần này</h2>
                    <p className="font-poppins text-gray-600">Những outfit hot nhất được các bạn yêu thích 💕</p>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                    {trendingItems.map((item) => (
                        <div key={item.id} className="flex-shrink-0 w-[280px] snap-start group">
                            <div className="bg-white rounded-3xl shadow-kawaii overflow-hidden hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">
                                {/* Image Container */}
                                <div className="relative h-[380px] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                                    {/* Heart Icon */}
                                    <button className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                                        <Heart className="w-5 h-5 text-primary-pink fill-primary-pink" />
                                    </button>

                                    {/* Price Badge */}
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="inline-block px-4 py-2 bg-primary-pink text-white font-poppins font-semibold rounded-full text-sm">Từ {item.price}</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    <h3 className="font-poppins font-semibold text-primary-dark mb-2 line-clamp-2">{item.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-gray-500">
                                            <Heart className="w-4 h-4 fill-primary-pink text-primary-pink" />
                                            <span className="font-poppins text-sm">{item.likes}</span>
                                        </div>
                                        <button className="p-2 bg-primary-mint/20 rounded-full hover:bg-primary-mint/40 transition-colors">
                                            <ShoppingCart className="w-5 h-5 text-primary-mint" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-8 gap-2">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-primary-pink' : 'bg-gray-300'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
