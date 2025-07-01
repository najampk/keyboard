
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyResponseTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Key Response Tester - Test Keyboard Response Time & Latency"
        description="Test keyboard key response time, input latency, and typing performance. Perfect for gaming and professional typing assessment."
        keywords="key response test, keyboard latency test, typing speed test, keyboard performance, input lag test"
        canonicalUrl="https://rapidkeycheck.lovable.app/key-response-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Key Response Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyResponseTest;
