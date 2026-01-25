import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Fruitful Box",
  description: "Read Fruitful Box's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Fruitful Box (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the website. This page
              informs you of our policies regarding the collection, use, and disclosure of
              personal data when you use our Service and the choices you have associated with
              that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection and Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and
              improve our Service to you.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  While using our Service, we may ask you to provide us with certain personally
                  identifiable information that can be used to contact or identify you (&quot;Personal
                  Data&quot;). This may include, but is not limited to:
                </p>
                <ul className="mt-2 space-y-2 ml-4 text-gray-700">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Address and delivery location</li>
                  <li>• Cookies and Usage Data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Data</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may also collect information on how the Service is accessed and used (&quot;Usage
                  Data&quot;). This may include information such as your computer&apos;s Internet Protocol
                  address, browser type, browser version, pages you visit, and the time and date
                  of your visit.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fruitful Box uses the collected data for various purposes:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• To provide and maintain our Service</li>
              <li>• To notify you about changes to our Service</li>
              <li>• To provide customer care and support</li>
              <li>• To gather analysis or valuable information so that we can improve our Service</li>
              <li>• To monitor the usage of our Service</li>
              <li>• To detect, prevent and address technical and security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Data</h2>
            <p className="text-gray-700 leading-relaxed">
              The security of your data is important to us, but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your Personal Data,
              we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@fruitfulbox.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7558535953
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Pune, Maharashtra, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
