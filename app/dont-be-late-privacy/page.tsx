import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Don&apos;t be late! | florianlammert',
    description: 'Privacy policy for the Don&apos;t be late! iOS app.',
};

export default function DontBeLatePrivacyPage() {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
                <h1 className="text-7xl md:text-7xl pt-4 font-bold text-left my-8">
                    Privacy Policy
                </h1>

                <div className="text-3xl font-medium text-gray-700 space-y-1 mb-8">
                    We believe in privacy and do not collect personal data.
                </div>

                <div className="text-lg text-gray-700 space-y-6">
                    <section>
                        <p>
                            Last updated on July 27, 2025
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                        <p>
                            We do not gather any personal data through our application. Any personal information you provide will never be shared with third parties under any circumstances. Additionally, we will not use your data for any purpose without your explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Children&apos;s Privacy</h2>
                        <p>
                            Our products and services are not designed for children under the age of 13. We do not knowingly collect any personal information from individuals in this age group.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Third-Party Links</h2>
                        <p>
                            Our website or app may contain links to external sites that are not operated by us. Please be aware that we do not control these third-party websites and are not responsible for their content, policies, or privacy practices. We encourage you to review their privacy policies before engaging with them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
                        <p>
                            We may update this privacy policy from time to time to reflect changes in our business operations, industry standards, or legal requirements. Any modifications will be posted at this same location. If the law requires, we will obtain your consent or provide you with the option to opt in or out of any new data usage practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding this policy, please reach out via email at contact.lflorian@icloud.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
