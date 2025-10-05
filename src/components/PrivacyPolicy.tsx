// ClientApp/src/components/PrivacyPolicy.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-md">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Last Updated: October 26, 2025
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
              <p>
                Welcome to Sorad Dynamics ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, and access times.
                </li>
                <li>
                  <strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you make a purchase.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
              </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                <address className="mt-4 not-italic">
                    <strong className="block">Sorad Dynamics</strong>
                    <span className="block">Kathmandu Nepal</span>
                    <a href="mailto:soraddynamics@gmail.com" className="text-blue-600 hover:underline">soraddynamics@gmail.com</a><br />
                </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;