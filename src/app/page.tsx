import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PoseCard from '@/components/PoseCard';
import TrendingCarousel from '@/components/TrendingCarousel';

const poseData = [
    {
        id: 1,
        title: 'Peace Sign Đà Lạt',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop',
        badge: 'Trend 2026',
        location: 'Đà Lạt',
        outfitCount: 5,
        makeupCount: 3,
        likes: 234,
    },
    {
        id: 2,
        title: 'Cầm váy bay',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
        badge: 'Hot 🔥',
        location: 'Sài Gòn',
        outfitCount: 4,
        makeupCount: 2,
        likes: 189,
    },
    {
        id: 3,
        title: 'Tay chống má',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
        badge: 'Trend 2026',
        location: 'Hà Nội',
        outfitCount: 6,
        makeupCount: 4,
        likes: 312,
    },
    {
        id: 4,
        title: 'Ngồi ghế đá',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
        badge: 'Viral',
        location: 'Huế',
        outfitCount: 3,
        makeupCount: 2,
        likes: 456,
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-primary-cream">
            <Navbar />
            <Hero />
            <TrendingCarousel />

            {/* Pose Hot Section */}
            <section className="py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="font-comic font-bold text-3xl sm:text-4xl text-primary-dark mb-4">Pose Hot Hôm Nay 🔥</h2>
                        <p className="font-poppins text-gray-600">Những pose đang viral trên mạng xã hội 💕</p>
                    </div>

                    {/* Pose Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {poseData.map((pose) => (
                            <PoseCard key={pose.id} {...pose} />
                        ))}
                    </div>

                    {/* View More Button */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-primary-pink text-white font-poppins font-semibold text-lg rounded-3xl shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">Xem thêm 300+ pose khác ✨</button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 kawaii-gradient">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[40px] shadow-kawaii p-8 sm:p-12 text-center">
                        <h2 className="font-comic font-bold text-3xl sm:text-4xl text-primary-pink mb-4">Sẵn sàng trở nên xinh đẹp hơn? 💕</h2>
                        <p className="font-poppins text-gray-600 mb-8 max-w-2xl mx-auto">Tham gia cộng đồng 50,000+ bạn trẻ Việt Nam đang chia sẻ và khám phá những pose, outfit và makeup xinh xắn nhất mỗi ngày!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-primary-pink text-white font-poppins font-semibold text-lg rounded-3xl shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">Đăng ký miễn phí</button>
                            <button className="px-8 py-4 bg-primary-mint text-primary-dark font-poppins font-semibold text-lg rounded-3xl shadow-kawaii hover:shadow-kawaii-hover hover:scale-105 transition-all duration-300">Xem hướng dẫn</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
