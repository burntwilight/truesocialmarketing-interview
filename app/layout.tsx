import Header from '@/components/layout/Header';
import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts',
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
                <main className='flex-grow flex flex-col'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
