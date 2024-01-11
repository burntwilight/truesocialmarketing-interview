import Header from '@/components/layout/Navbars/Header';
import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata = {
    title: 'TSM Starwars Movies',
    description: 'Discover Starwars',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow flex flex-col gap-12 lg:gap-24'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
