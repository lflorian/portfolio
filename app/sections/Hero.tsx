import { AnimatedElement } from "../components/AnimatedElement"

export const HeroSection = () => {
    return <div className="w-full bg-gradient-to-b from-white to-gray-100">
                <div className="py-40 md:py-32">
            <div className="container mx-auto px-4">
                <AnimatedElement>
                    <h1 className="font-bold text-center rainbow-text tracking-tighter">
                        Hello.
                    </h1>
                </AnimatedElement>
            </div>
        </div>
    </div>
}