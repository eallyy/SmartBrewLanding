import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function TermsOfServices() {
  return (
    <>
      <Header />
      <main>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10 text-center">Effective Date: 28 May 2025</p>

      {/* Introduction */}
      <section className="mb-8">
        <p>
          These Terms of Service ("Terms") govern your access to and use of SmartBrew.co (the "Service"), operated by SmartBrew ("we", "our", "us"). By accessing or using our platform, you agree to be bound by these Terms and our Privacy Policy.
        </p>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use our service. By using the platform, you represent that you are legally permitted to enter into this agreement.
        </p>
      </section>

      {/* Account Registration */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
        <p>
          When creating an account, you agree to provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and all activity that occurs under your account.
        </p>
      </section>

      {/* Acceptable Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
        <p className="mb-2">
          SmartBrew is designed for individual personal use. Each account is intended for use by a single person only. Account sharing, automation, scraping, or exploiting the service for commercial purposes without a proper agreement is strictly prohibited.
        </p>
        <p className="mt-2">
          To maintain fair and sustainable access, monthly query limits are enforced based on average recipe generation costs for individual users. These are generous enough to accommodate personal use but help prevent abuse.
        </p>
      </section>

      {/* B2B & Enterprise Clause */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Business Use & Enterprise Licensing</h2>
        <p>
          This service is not licensed for business or commercial use under standard accounts. Businesses, teams, or organizations seeking to use SmartBrew (e.g., for menu development, training, or large-scale brewing operations) must contact us for an Enterprise agreement at <a href="mailto:hi@smartbrew.co" className="text-blue-600 underline">hi@smartbrew.co</a>.
        </p>
      </section>

      {/* Subscription & Payments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Subscriptions & Payments</h2>
        <p>
          If and when paid plans are introduced, you will be notified of pricing and billing cycles. All payments will be handled securely through third-party payment processors. Failure to pay may result in suspension or cancellation of access.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
        <p>
          All content, algorithms, branding, and code made available through the Service are the property of SmartBrew or its licensors. You may not copy, reproduce, modify, or distribute any part of the platform without explicit written permission.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access at any time for violating these Terms, including misuse, automation, unauthorized sharing, or unauthorized business use.
        </p>
      </section>

      {/* Disclaimer & Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Disclaimer and Limitation of Liability</h2>
        <p>
          The Service is provided "as is" and without warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted. To the maximum extent permitted by law, SmartBrew is not liable for any indirect, incidental, or consequential damages arising from your use of the Service.
        </p>
      </section>

      {/* Modifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Modifications to the Terms</h2>
        <p>
          We may revise these Terms from time to time. Continued use of the Service after such updates constitutes acceptance of the new Terms. You are responsible for checking the Terms periodically.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your Country or State]. Any legal actions arising out of this agreement shall be resolved in the competent courts of [Jurisdiction].
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
        <p>
          For questions about these Terms, or to inquire about Enterprise access, contact us at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong> <a href="mailto:hi@smartbrew.co" className="text-blue-600 underline">hi@smartbrew.co</a><br />
          <strong>Enterprise:</strong> <a href="mailto:hi@smartbrew.co" className="text-blue-600 underline">hi@smartbrew.co</a>
        </p>
      </section>
    </div>
      </main>
      <Footer />
    </>
  )
}
