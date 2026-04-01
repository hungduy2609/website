'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, TrendingUp, Leaf, Sun, Snowflake, CloudRain, Flower2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import PoseCard from '@/components/PoseCard';
import Navbar from '@/components/Navbar';

/* ─── Data ─────────────────────────────────────────────────── */

const TABS = [
    { value: 'selfie',   label: 'Selfie',   emoji: '🤳', color: 'bg-[#FFB6C1]/20 text-[#e07a90] data-[state=active]:bg-[#FFB6C1] data-[state=active]:text-white' },
    { value: 'dulich',   label: 'Du lịch',  emoji: '✈️', color: 'bg-[#B5EAD7]/20 text-[#3ba87c] data-[state=active]:bg-[#B5EAD7] data-[state=active]:text-[#1d6b4f]' },
    { value: 'party',    label: 'Party',    emoji: '🎉', color: 'bg-[#FFDAC1]/20 text-[#d4825a] data-[state=active]:bg-[#FFDAC1] data-[state=active]:text-[#a0502c]' },
    { value: 'congso',   label: 'Công sở',  emoji: '💼', color: 'bg-[#E0BBE4]/20 text-[#9c5fb5] data-[state=active]:bg-[#E0BBE4] data-[state=active]:text-[#6d3680]' },
    { value: 'street',   label: 'Street',   emoji: '🛹', color: 'bg-[#C7CEEA]/20 text-[#5c6dbf] data-[state=active]:bg-[#C7CEEA] data-[state=active]:text-[#3c4d9e]' },
    { value: 'couple',   label: 'Couple',   emoji: '💑', color: 'bg-[#FFB6C1]/20 text-[#e07a90] data-[state=active]:bg-[#FF8FB1] data-[state=active]:text-white' },
    { value: 'studio',   label: 'Studio',   emoji: '📸', color: 'bg-[#F2C4CE]/20 text-[#c0607d] data-[state=active]:bg-[#F2C4CE] data-[state=active]:text-[#8c3150]' },
    { value: 'seasonal', label: 'Seasonal', emoji: '🌸', color: 'bg-[#B5EAD7]/20 text-[#3ba87c] data-[state=active]:bg-[#B5EAD7] data-[state=active]:text-[#1d6b4f]' },
];

const POSES: Record<string, Array<{ id: number; title: string; image: string; badge: string; outfitCount: number; makeupCount: number; likes: number; heightVariant: 'tall' | 'medium' | 'short' }>> = {
    selfie: [
        { id: 1,  title: 'Peace Sign Nhẹ Nhàng',     image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop', badge: 'Trend 2026', outfitCount: 5, makeupCount: 3, likes: 234, heightVariant: 'tall' },
        { id: 2,  title: 'Tay Chống Má Xinh',         image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop', badge: 'Hot 🔥',       outfitCount: 4, makeupCount: 2, likes: 189, heightVariant: 'short' },
        { id: 3,  title: 'Nhìn Nghiêng Đẹp Xuất',    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=520&fit=crop', badge: 'Viral',       outfitCount: 6, makeupCount: 4, likes: 312, heightVariant: 'medium' },
        { id: 4,  title: 'Cười Tươi Tự Nhiên',        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=480&fit=crop', badge: 'Trend 2026', outfitCount: 3, makeupCount: 2, likes: 456, heightVariant: 'medium' },
        { id: 5,  title: 'Mắt Nhìn Xa Xôi',           image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=560&fit=crop', badge: 'Aesthetic',  outfitCount: 5, makeupCount: 5, likes: 178, heightVariant: 'tall' },
        { id: 6,  title: 'Bàn Tay Che Miệng',         image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=380&fit=crop', badge: 'Cute 🐣',     outfitCount: 4, makeupCount: 3, likes: 267, heightVariant: 'short' },
    ],
    dulich: [
        { id: 7,  title: 'Bay Giữa Đồng Lúa Đà Lạt', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=560&fit=crop', badge: 'Trend 2026', outfitCount: 6, makeupCount: 3, likes: 521, heightVariant: 'tall' },
        { id: 8,  title: 'Cầm Váy Bay Hội An',        image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop', badge: 'Viral',       outfitCount: 4, makeupCount: 2, likes: 389, heightVariant: 'short' },
        { id: 9,  title: 'Ngồi Trước Biển Xanh',      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=480&fit=crop', badge: 'Hot 🔥',       outfitCount: 5, makeupCount: 3, likes: 445, heightVariant: 'medium' },
        { id: 10, title: 'Đứng Ở Cửa Phố Cổ',        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=520&fit=crop', badge: 'Aesthetic',  outfitCount: 3, makeupCount: 4, likes: 298, heightVariant: 'medium' },
        { id: 11, title: 'Tạo Dáng Trên Cầu Rồng',   image: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=400&h=360&fit=crop', badge: 'Trend 2026', outfitCount: 7, makeupCount: 2, likes: 167, heightVariant: 'short' },
        { id: 12, title: 'Nhảy Múa Trên Bãi Cát',    image: 'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=400&h=600&fit=crop', badge: 'Viral',       outfitCount: 4, makeupCount: 3, likes: 612, heightVariant: 'tall' },
    ],
    party: [
        { id: 13, title: 'Nâng Ly Dáng Sang',         image: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=400&h=480&fit=crop', badge: 'Party Queen', outfitCount: 5, makeupCount: 5, likes: 344, heightVariant: 'medium' },
        { id: 14, title: 'Tung Confetti Cực Cute',     image: 'https://images.unsplash.com/photo-1516486392848-8b67ef89f113?w=400&h=560&fit=crop', badge: 'Trend 2026', outfitCount: 4, makeupCount: 6, likes: 489, heightVariant: 'tall' },
        { id: 15, title: 'Nhún Vai Vui Tính',          image: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?w=400&h=380&fit=crop', badge: 'Hot 🔥',       outfitCount: 3, makeupCount: 4, likes: 231, heightVariant: 'short' },
        { id: 16, title: 'Dance Floor Vibes',          image: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=400&h=480&fit=crop', badge: 'Viral',       outfitCount: 6, makeupCount: 5, likes: 567, heightVariant: 'medium' },
    ],
    congso: [
        { id: 17, title: 'Tay Cầm Cốc Cà Phê Pro',   image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=560&fit=crop', badge: 'Boss Vibes',  outfitCount: 7, makeupCount: 3, likes: 423, heightVariant: 'tall' },
        { id: 18, title: 'Ngồi Trước Laptop Đẹp',    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop', badge: 'Trend 2026', outfitCount: 5, makeupCount: 4, likes: 312, heightVariant: 'short' },
        { id: 19, title: 'Meeting Room Confidence',   image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=480&fit=crop', badge: 'Career Girl', outfitCount: 4, makeupCount: 3, likes: 278, heightVariant: 'medium' },
        { id: 20, title: 'Đứng Cửa Văn Phòng Kính',  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=520&fit=crop', badge: 'Aesthetic',  outfitCount: 6, makeupCount: 5, likes: 394, heightVariant: 'medium' },
    ],
    street: [
        { id: 21, title: 'Lean Against Graffiti Wall', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=540&fit=crop', badge: 'Street King', outfitCount: 5, makeupCount: 2, likes: 512, heightVariant: 'tall' },
        { id: 22, title: 'Bước Đi Tự Tin',            image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=380&fit=crop', badge: 'Trend 2026', outfitCount: 4, makeupCount: 3, likes: 289, heightVariant: 'short' },
        { id: 23, title: 'Café Vỉa Hè Aesthetic',     image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=480&fit=crop', badge: 'Viral',       outfitCount: 6, makeupCount: 4, likes: 401, heightVariant: 'medium' },
        { id: 24, title: 'Ngồi Bậc Thềm Phố',        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=520&fit=crop', badge: 'Hot 🔥',       outfitCount: 3, makeupCount: 2, likes: 334, heightVariant: 'medium' },
    ],
    couple: [
        { id: 25, title: 'Nắm Tay Đi Dạo',           image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=560&fit=crop', badge: 'Couple Goals', outfitCount: 4, makeupCount: 3, likes: 678, heightVariant: 'tall' },
        { id: 26, title: 'Nhìn Nhau Mỉm Cười',       image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=380&fit=crop', badge: 'Trend 2026', outfitCount: 3, makeupCount: 2, likes: 534, heightVariant: 'short' },
        { id: 27, title: 'Ôm Từ Phía Sau',            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop', badge: 'Viral',       outfitCount: 5, makeupCount: 4, likes: 712, heightVariant: 'medium' },
        { id: 28, title: 'Chụp Bóng Đổ Trên Cát',    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=480&fit=crop', badge: 'Aesthetic',  outfitCount: 2, makeupCount: 3, likes: 445, heightVariant: 'medium' },
    ],
    studio: [
        { id: 29, title: 'Nền Trắng Minimalist',      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop', badge: 'Studio Pro', outfitCount: 8, makeupCount: 6, likes: 567, heightVariant: 'tall' },
        { id: 30, title: 'Soft Light Dreamy',          image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=380&fit=crop', badge: 'Trend 2026', outfitCount: 6, makeupCount: 7, likes: 423, heightVariant: 'short' },
        { id: 31, title: 'Với Hoa Khổng Lồ',          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop', badge: 'Hot 🔥',       outfitCount: 5, makeupCount: 5, likes: 389, heightVariant: 'medium' },
        { id: 32, title: 'Nền Màu Pastel Tone',        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=460&fit=crop', badge: 'Aesthetic',  outfitCount: 7, makeupCount: 6, likes: 634, heightVariant: 'medium' },
    ],
    seasonal: [
        { id: 33, title: 'Hoa Anh Đào Mùa Xuân',      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=560&fit=crop', badge: 'Spring 🌸',    outfitCount: 5, makeupCount: 4, likes: 789, heightVariant: 'tall' },
        { id: 34, title: 'Biển Hè Rực Rỡ',            image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=360&fit=crop', badge: 'Summer ☀️',   outfitCount: 4, makeupCount: 3, likes: 612, heightVariant: 'short' },
        { id: 35, title: 'Lá Thu Vàng Rơi',           image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop', badge: 'Autumn 🍂',   outfitCount: 6, makeupCount: 4, likes: 534, heightVariant: 'medium' },
        { id: 36, title: 'Tuyết Mùa Đông Trắng Xoá', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=480&fit=crop', badge: 'Winter ❄️',   outfitCount: 7, makeupCount: 5, likes: 445, heightVariant: 'medium' },
    ],
};

const SEASONAL_SIDEBAR = [
    { season: 'Xuân 🌸', icon: Flower2,   color: 'bg-[#FFB6C1]/20 border-[#FFB6C1]', tag: '#nhẹnhàng',   poses: ['Hoa anh đào nở rộ', 'Đồng cải vàng', 'Vườn hoa lavender', 'Mưa xuân lãng mạn'] },
    { season: 'Hè ☀️',   icon: Sun,       color: 'bg-[#FFDAC1]/20 border-[#FFDAC1]', tag: '#sunnyday',   poses: ['Biển xanh trong vắt', 'Nắng vàng rực rỡ', 'Pool party vibes', 'Kem trước cổng trường'] },
    { season: 'Thu 🍂',  icon: Leaf,      color: 'bg-[#C7CEEA]/20 border-[#C7CEEA]', tag: '#autumnvibes', poses: ['Lá thu vàng rơi', 'Cà phê mùa lạnh', 'Khoác len ấm áp', 'Rừng lá đỏ Đà Lạt'] },
    { season: 'Đông ❄️', icon: Snowflake, color: 'bg-[#B5EAD7]/20 border-[#B5EAD7]', tag: '#cozyvibes',  poses: ['Khăn len ấm cúng', 'Tuyết trắng Sa Pa', 'Áo khoác dày cộp', 'Hot chocolate mood'] },
    { season: 'Mưa 🌧️', icon: CloudRain, color: 'bg-[#E0BBE4]/20 border-[#E0BBE4]', tag: '#rainyseason', poses: ['Cầm ô đi dưới mưa', 'Nhìn qua cửa sổ mờ', 'Puddle jumping', 'Cafe ngày mưa'] },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function PosePage() {
    const [activeTab, setActiveTab] = useState('selfie');
    const [search, setSearch] = useState('');

    const currentPoses = POSES[activeTab] ?? [];
    const filtered = search.trim()
        ? currentPoses.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        : currentPoses;

    return (
        <div className="min-h-screen bg-[#FFF9F5]">
            <Navbar />
            {/* ── Sub-header: tabs only ────────────────────────────── */}
            <header className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-[#FFB6C1]/20 shadow-[0_2px_20px_rgba(255,182,193,0.12)]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="h-auto bg-transparent p-0 gap-1.5 overflow-x-auto flex w-full justify-start py-3 scrollbar-hide">
                            {TABS.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className={`
                                        shrink-0 h-9 px-4 rounded-full font-poppins font-medium text-sm
                                        transition-all duration-200 border border-transparent
                                        ${tab.color}
                                        data-[state=active]:shadow-sm data-[state=active]:scale-105
                                    `}
                                >
                                    <span className="mr-1.5">{tab.emoji}</span>
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
            </header>

            {/* ── Main Layout ─────────────────────────────────────────── */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 flex gap-6">

                {/* ── Left Sidebar: search + filter ─────────────────────── */}
                <aside className="hidden lg:block w-[240px] shrink-0">
                    <div className="sticky top-[160px] space-y-4">
                        {/* Search */}
                        <div className="bg-white rounded-[20px] shadow-kawaii p-4">
                            <p className="font-comic font-bold text-sm text-[#2C2C2C] mb-3">🔍 Tìm kiếm</p>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FFB6C1]" />
                                <Input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Tìm pose theo mood..."
                                    className="pl-9 pr-4 h-9 rounded-[14px] border-2 border-[#FFB6C1]/40 bg-[#FFF9F5] focus-visible:ring-[#FFB6C1]/40 focus-visible:border-[#FFB6C1] font-poppins text-sm placeholder:text-[#FFB6C1]/60"
                                />
                            </div>
                        </div>

                        {/* Filter */}
                        <div className="bg-white rounded-[20px] shadow-kawaii p-4">
                            <p className="font-comic font-bold text-sm text-[#2C2C2C] mb-3">✨ Bộ lọc</p>
                            <div className="space-y-2">
                                {['Trending', 'Mới nhất', 'Nhiều like nhất', 'Dễ thực hiện'].map((f) => (
                                    <button key={f} className="w-full text-left px-3 py-2 rounded-[10px] font-poppins text-xs text-gray-600 hover:bg-[#FFB6C1]/10 hover:text-[#e07a90] transition-colors">
                                        {f}
                                    </button>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full mt-3 h-9 rounded-[14px] border-[#E0BBE4] text-[#9c5fb5] hover:bg-[#E0BBE4]/20 gap-1.5 font-poppins text-xs">
                                <SlidersHorizontal className="w-3.5 h-3.5" />
                                Lọc nâng cao
                            </Button>
                        </div>

                        {/* Trending count */}
                        <div className="flex items-center gap-2 bg-[#FFB6C1]/10 rounded-[14px] px-4 py-3">
                            <TrendingUp className="w-4 h-4 text-[#FF8FB1]" />
                            <span className="font-poppins text-xs font-medium text-[#e07a90]">300+ pose đang trending</span>
                        </div>
                    </div>
                </aside>

                {/* ── Masonry Grid ──────────────────────────────────────── */}
                <main className="flex-1 min-w-0">
                    {/* Section heading */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="font-comic font-bold text-2xl text-[#2C2C2C]">
                                {TABS.find((t) => t.value === activeTab)?.emoji}{' '}
                                Pose {TABS.find((t) => t.value === activeTab)?.label}
                            </h1>
                            <p className="font-poppins text-sm text-gray-500 mt-0.5">
                                {filtered.length} pose đang chờ bạn thử ✨
                            </p>
                        </div>
                        <Badge className="bg-[#B5EAD7] text-[#1d6b4f] border-0 rounded-full px-3 py-1 font-poppins font-semibold text-xs">
                            Cập nhật tháng 4/2026
                        </Badge>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="text-center py-24 text-gray-400 font-poppins">
                            <p className="text-4xl mb-3">🔍</p>
                            <p className="text-sm">Không tìm thấy pose nào phù hợp~</p>
                        </div>
                    ) : (
                        /* Masonry: 3 columns using CSS columns */
                        <div
                            className="columns-1 sm:columns-2 gap-5"
                            style={{ columnFill: 'balance' }}
                        >
                            {filtered.map((pose) => (
                                <div key={pose.id} className="break-inside-avoid mb-5">
                                    <PoseCard {...pose} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Load more */}
                    <div className="flex justify-center mt-10">
                        <Button className="px-8 h-12 rounded-[24px] bg-[#FFB6C1] hover:bg-[#FF8FB1] text-white font-poppins font-semibold text-sm border-0 shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">
                            Xem thêm pose ✨
                        </Button>
                    </div>
                </main>

                {/* ── Right Sidebar ────────────────────────────────────── */}
                <aside className="hidden lg:block w-[280px] shrink-0">
                    <div className="sticky top-[190px]">
                        <div className="bg-white rounded-[24px] shadow-kawaii overflow-hidden">
                            {/* Sidebar header */}
                            <div className="px-5 py-4 bg-gradient-to-r from-[#FFB6C1]/20 to-[#E0BBE4]/20 border-b border-[#FFB6C1]/10">
                                <h2 className="font-comic font-bold text-base text-[#2C2C2C]">
                                    🌸 Pose theo mùa
                                </h2>
                                <p className="font-poppins text-xs text-gray-500 mt-0.5">Chọn theo thời tiết hôm nay</p>
                            </div>

                            <ScrollArea className="h-[calc(100vh-200px)]">
                                <div className="p-4 space-y-3">
                                    {SEASONAL_SIDEBAR.map(({ season, icon: Icon, color, tag, poses }) => (
                                        <div
                                            key={season}
                                            className={`rounded-[16px] border p-3.5 cursor-pointer hover:scale-[1.02] transition-transform duration-200 ${color}`}
                                        >
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center">
                                                        <Icon className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <span className="font-comic font-bold text-sm text-[#2C2C2C]">{season}</span>
                                                </div>
                                                <Badge className="bg-white/70 text-gray-500 border-0 rounded-full px-2 py-0.5 text-[10px] font-poppins font-medium">
                                                    {tag}
                                                </Badge>
                                            </div>
                                            <ul className="space-y-1">
                                                {poses.map((p) => (
                                                    <li key={p} className="font-poppins text-xs text-gray-600 flex items-center gap-1.5">
                                                        <span className="w-1 h-1 rounded-full bg-[#FFB6C1] shrink-0" />
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Mini CTA */}
                                    <div className="rounded-[16px] bg-gradient-to-br from-[#FFB6C1]/30 to-[#E0BBE4]/30 border border-[#FFB6C1]/20 p-4 text-center mt-2">
                                        <p className="font-comic font-bold text-sm text-[#2C2C2C] mb-1">Lookbook của bạn</p>
                                        <p className="font-poppins text-xs text-gray-500 mb-3">Lưu pose yêu thích vào đây 💖</p>
                                        <Button className="w-full h-8 rounded-[12px] bg-[#FFB6C1] hover:bg-[#FF8FB1] text-white font-poppins font-medium text-xs border-0">
                                            Xem Lookbook
                                        </Button>
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
