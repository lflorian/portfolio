import { AnimatedElement } from "../components/AnimatedElement"

export const HeroSection = () => {
    return <div className="w-full bg-gradient-to-b from-white to-gray-100">
        <div className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <AnimatedElement>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
                        Hello, I am Florian.
                    </h1>
                </AnimatedElement>
                <AnimatedElement animation="fade" delay={150}>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                        <a
                            href="mailto:hello@florianlammert.com"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            hello@florianlammert.com
                        </a>
                        <a
                            href="https://github.com/lflorian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            github.com/lflorian
                        </a>
                    </div>
                </AnimatedElement>
            </div>
        </div>
    </div>
}
