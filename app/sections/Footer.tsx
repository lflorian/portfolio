import Link from 'next/link';
import { AnimatedElement } from '../components/AnimatedElement';

export const Footer = () => {
    return (
        <footer className="w-full bg-black border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex justify-between items-end">
                    <div>
                        <AnimatedElement>
                            <h2 className="text-white text-xl">florianlammert</h2>
                            <div className="text-gray-400">Made in Europe 🇪🇺</div>
                        </AnimatedElement>
                    </div>
                    <AnimatedElement>
                    <div className="flex gap-6 text-sm">
                        <Link href="/imprint" className="text-gray-500 hover:text-gray-300 transition-colors">
                            Imprint
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors">
                            Contact
                        </Link>
                    </div>
                    </AnimatedElement>
                </div>
            </div>
        </footer>
    );
}