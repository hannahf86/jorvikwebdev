// STYLES
import "./privacy.scss";

const PrivacyPolicy = () => {
  const styles = {
    background: "flex flex-col text-black mx-10",
  };

  return (
    <div id="privacyPolicy" className={styles.background}>
      <h1>Privacy Policy</h1>
      <strong>Last updated: 03/07/2024</strong>
      <p>
        Welcome to Jorvik Web Dev (&apos;we,&apos; &apos;our,&apos; or
        &apos;us&apos;). We are committed to protecting and respecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you visit our website [yourwebsite.com]
        (the &apos;Site&apos;). Please read this policy carefully to understand
        our views and practices regarding your personal data and how we will
        treat it.
      </p>

      {/* COLLECTION */}
      <h2>1. Information We Collect</h2>
      <p>We may collect and process the following data about you:</p>
      <h3>1.1. Personal Data</h3>
      <li>
        Contact Information: Such as name, email address, phone number, and
        postal address.
      </li>
      <li>
        Professional Information: Such as job title, company name, and industry.
      </li>
      <h3>1.2. Technical Data</h3>
      <li>
        Usage Data: Includes information about how you use our website,
        products, and services.
      </li>
      <li>
        Technical Data: Includes internet protocol (IP) address, your login
        data, browser type and version, time zone setting and location, browser
        plug-in types and versions, operating system and platform, and other
        technology on the devices you use to access this website.
      </li>

      {/* USE */}
      <h2>2. How We Use Your Information</h2>
      <p>We may collect and process the following data about you:</p>
      <li>
        To provide and manage our services: Including managing your requests and
        responding to your inquiries.
      </li>
      <li>
        To personalize your experience: Tailoring our website and services to
        better suit your interests and needs.
      </li>
      <li>
        To improve our website: Analyzing data to enhance our website&apos;s
        performance and content.
      </li>
      <li>
        To communicate with you: Sending administrative information, including
        information about our services, and changes to our terms, conditions,
        and policies.
      </li>
      <li>
        For marketing purposes: Providing you with information about services we
        offer that are similar to those you have already enquired about or that
        we feel may interest you.
      </li>

      {/* SHARING */}
      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal data to third parties. We may share
        your information in the following circumstances:
      </p>
      <li>
        Service Providers: We may share your information with third-party
        service providers that perform services on our behalf, such as payment
        processing, data analysis, email delivery, hosting services, customer
        service, and marketing assistance.
      </li>
      <li>
        Legal Obligations: If required to do so by law or in response to valid
        requests by public authorities (e.g., a court or a government agency).
      </li>

      {/* DATA PROTECTION */}
      <h2>4. Your Data Protection Rights</h2>
      <p>You have the following rights regarding your personal data:</p>
      <li>
        Access: You have the right to request access to the personal data we
        hold about you.
      </li>
      <li>
        Rectification: You have the right to request that we correct any
        inaccuracies in your personal data.
      </li>
      <li>
        Erasure: You have the right to request that we delete your personal
        data.
      </li>
      <li>
        Restriction of Processing: You have the right to request that we
        restrict the processing of your personal data.
      </li>
      <li>
        Data Portability: You have the right to receive your personal data in a
        structured, commonly used, and machine-readable format.
      </li>
      <li>
        Objection: You have the right to object to the processing of your
        personal data.
      </li>
      <p>
        To exercise any of these rights, please contact us at
        hello@jorvikweb.dev.
      </p>

      {/* SECURITY */}
      <h2>5. Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help
        protect your personal data. While we have taken reasonable steps to
        secure the personal data you provide to us, please be aware that despite
        our efforts, no security measures are perfect or impenetrable, and no
        method of data transmission can be guaranteed against any interception
        or other type of misuse.
      </p>

      {/* DATA RETENTION */}
      <h2>6. Data Retention</h2>
      <p>
        We will retain your personal data only for as long as necessary to
        fulfill the purposes for which we collected it, including for the
        purposes of satisfying any legal, accounting, or reporting requirements.
      </p>

      {/* DATA RETENTION */}
      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>

      {/* CONTACT US */}
      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <li>Jorvik Web Dev</li>
      <li>42 Seebohm Mews, York</li>
      <li>YO31 0SJ</li>
      <li>hello@jorvikweb.dev</li>
      <li>07548957500</li>
    </div>
  );
};

export default PrivacyPolicy;
