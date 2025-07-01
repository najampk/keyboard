
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Professional Keyboard Tester",
    "description": "Online keyboard testing tool for Windows, Mac, and desktop keyboards",
    "url": "https://rapidkeycheck.lovable.app/",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Windows keyboard testing",
      "Mac keyboard testing", 
      "Desktop keyboard with numpad testing",
      "Mouse button testing",
      "Real-time key highlighting",
      "Progress tracking",
      "Gaming keyboard anti-ghosting test",
      "Mechanical keyboard switch testing",
      "Laptop keyboard testing",
      "Wireless keyboard testing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://rapidkeycheck.lovable.app/" },
    { name: "Keyboard Tester", url: "https://rapidkeycheck.lovable.app/" }
  ];

  return (
    <Layout>
      <SEOHead
        title="Professional Keyboard Tester - Test Windows, Mac & Desktop Keyboards Online"
        description="Free online keyboard tester for Windows, Mac, and desktop keyboards with numpad. Test all keys, mouse buttons, and function keys. Perfect for testing second-hand keyboards."
        keywords="keyboard tester, online keyboard test, Windows keyboard, Mac keyboard, desktop keyboard, numpad test, mouse button test, keyboard checker, key test"
        canonicalUrl="https://rapidkeycheck.lovable.app/"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        pageType="website"
      />
      
      <KeyboardTester />
    </Layout>
  );
};

export default Index;
