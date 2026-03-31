'use client';

import { Facebook, Flower2, Instagram, Mail, Music } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-primary-cream to-white pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Flower2 className="w-8 h-8 text-primary-pink" />
                            <span className="font-comic font-bold text-2xl text-primary-dark">PoseKute.vn</span>
                        </div>
                        <p className="font-poppins text-gray-600 leading-relaxed">Nơi chia sẻ 300+ pose, outfit và makeup xinh xắn cho giới trẻ Việt Nam. Mua sắm dễ dàng với link Shopee affiliate 💕</p>
                        <div className="flex space-x-3">
                            <a href="#" className="p-2 bg-primary-pink/10 rounded-full hover:bg-primary-pink/20 transition-colors">
                                <Instagram className="w-5 h-5 text-primary-pink" />
                            </a>
                            <a href="#" className="p-2 bg-primary-pink/10 rounded-full hover:bg-primary-pink/20 transition-colors">
                                <Facebook className="w-5 h-5 text-primary-pink" />
                            </a>
                            <a href="#" className="p-2 bg-primary-pink/10 rounded-full hover:bg-primary-pink/20 transition-colors">
                                <Music className="w-5 h-5 text-primary-pink" />
                            </a>
                            <a href="#" className="p-2 bg-primary-pink/10 rounded-full hover:bg-primary-pink/20 transition-colors">
                                <Mail className="w-5 h-5 text-primary-pink" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-comic font-bold text-lg text-primary-dark mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Bộ sưu tập Pose
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Gợi ý Outfit
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Tutorial Makeup
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Lookbook
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-comic font-bold text-lg text-primary-dark mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Điều khoản sử dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    Liên hệ hợp tác
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-poppins text-gray-600 hover:text-primary-pink transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-comic font-bold text-lg text-primary-dark mb-4">Đăng ký nhận tin</h3>
                        <p className="font-poppins text-gray-600 mb-4">Nhận thông báo về pose và outfit mới nhất mỗi tuần ✨</p>
                        <div className="space-y-3">
                            <input type="email" placeholder="Email của bạn..." className="w-full px-4 py-3 bg-white border-2 border-primary-pink/30 rounded-2xl font-poppins text-sm focus:outline-none focus:border-primary-pink transition-colors" />
                            <button className="w-full px-4 py-3 bg-primary-pink text-white font-poppins font-semibold rounded-2xl hover:bg-primary-sparkle transition-colors">Đăng ký ngay 💕</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-pink/20 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-poppins text-gray-600 text-center md:text-left">© 2026 PoseKute.vn. Made with 💕 for giới trẻ Việt Nam</p>
                        <div className="flex items-center gap-4">
                            <span className="font-poppins text-sm text-gray-500">Powered by</span>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">S</span>
                                </div>
                                <span className="font-poppins font-semibold text-gray-700">Shopee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
