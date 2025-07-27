import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'imprint | florianlammert',
    description: 'A collection of my software development projects and technical work.',
};

export default function ImprintPage() {
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
                <h1 className="text-7xl md:text-7xl pt-4 font-bold text-left my-8">
                    Imprint
                </h1>

                <div className="text-lg text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Florian Benedikt Lammert<br />
                            Helmholtzstraße 9<br />
                            66424 Homburg
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Vertreten durch</h2>
                        <p>Susanne Lammert</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                        <p>
                            E-Mail: hello@florianlammert.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Datenschutz</h2>
                        <p>
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) 
                            erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne 
                            Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                        </p>
                        <p>
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
                            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
                            nicht möglich.
                        </p>
                        <p>
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur 
                            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit 
                            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte 
                            im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Quelle</h2>
                        <p>e-recht24.de</p>
                    </section>
                </div>
            </div>
        </div>
    )
}