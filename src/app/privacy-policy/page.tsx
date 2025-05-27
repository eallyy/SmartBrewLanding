import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center">{`Privacy Policy`}</h1>
          <p className="text-sm text-gray-500 mb-10 text-center">{`Effective Date: 28 May 2025`}</p>

          <section className="mb-8">
            <p>{`SmartBrew.co ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including but not limited to our recipe optimization tools, user profiles, and feedback features.`}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`1. Information We Collect`}</h2>
            <h3 className="text-lg font-medium mb-2">{`a. Personal Information`}</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>{`Name, email address, and password (via Supabase authentication)`}</li>
              <li>{`User preferences, taste profiles, and brewing methods`}</li>
            </ul>
            <h3 className="text-lg font-medium mb-2">{`b. Usage Data`}</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>{`Pages visited, interactions with recipe tools, and optimization feedback`}</li>
              <li>{`IP address, browser type, device information, and cookies`}</li>
            </ul>
            <h3 className="text-lg font-medium mb-2">{`c. Voluntary Information`}</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>{`Feedback submissions, user-generated recipes, and settings preferences`}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`2. How We Use Your Information`}</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>{`Personalize your brewing experience and recipe recommendations`}</li>
              <li>{`Improve our services and user experience through feedback and usage analytics`}</li>
              <li>{`Send targeted email campaigns, such as brewing tips, updates, and re-engagement emails`}</li>
              <li>{`Securely manage user authentication and saved recipes through Supabase`}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`3. How We Share Your Information`}</h2>
            <p className="mb-2">
              {`We do `}
              <strong>{`not`}</strong>
              {` sell or rent your personal information. We may share your data only:`}
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>{`With service providers (e.g., Supabase) for authentication and data storage`}</li>
              <li>{`In anonymized or aggregated form for analytics and marketing`}</li>
              <li>{`When required by law or to protect legal rights`}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`4. Your Rights and Choices`}</h2>
            <p className="mb-2">{`You have the right to:`}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{`Access and update your personal information`}</li>
              <li>{`Delete your account and associated data`}</li>
              <li>{`Opt out of marketing emails at any time`}</li>
            </ul>
            <p className="mt-2">
              {`To exercise these rights, visit your `}
              <strong>{`Settings`}</strong>
              {` page or contact us at `}
              <a href="mailto:hi@smartbrew.co" className="text-blue-600 underline">{`hi@smartbrew.co`}</a>
              {`.`}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`5. Data Retention`}</h2>
            <p>{`We retain your information for as long as your account is active or as needed to provide our services. You may request data deletion at any time.`}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`6. Data Security`}</h2>
            <p>{`We implement industry-standard security practices to protect your information, including:`}</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>{`Encrypted authentication and real-time database protections via Supabase`}</li>
              <li>{`HTTPS for secure data transmission`}</li>
              <li>{`Access controls and regular security audits`}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`7. Children's Privacy`}</h2>
            <p>{`SmartBrew is not intended for users under the age of 13. We do not knowingly collect personal information from children.`}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{`8. Changes to This Policy`}</h2>
            <p>{`We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our platform.`}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{`9. Contact Us`}</h2>
            <p>{`If you have any questions or concerns about this Privacy Policy, please contact us at:`}</p>
            <p className="mt-2">
              <strong>{`SmartBrew.co`}</strong><br />
              <a href="mailto:hi@smartbrew.co" className="text-blue-600 underline">{`hi@smartbrew.co`}</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
