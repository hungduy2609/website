import type { Metadata } from 'next';
import { Comic_Neue, Poppins } from 'next/font/google';
import './globals.css';

const comic = Comic_Neue({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-comic',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'PoseKute.vn - Kawaii Fashion & Pose Guide',
    description: '300+ pose + outfit + makeup có link mua ngay 💸',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={`${comic.variable} ${poppins.variable} antialiased`}>{children}</body>
        </html>
    );
}
