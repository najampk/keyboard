
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const FunctionKeysTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Function Keys Tester - Test F1-F12 & Media Keys"
        description="Test function keys F1-F12, media keys, and special function combinations. Perfect for testing laptop and desktop function key behavior."
        keywords="function keys test, F1-F12 test, media keys test, function key tester, laptop function keys"
        canonicalUrl="https://rapidkeycheck.lovable.app/function-keys-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Function Keys Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default FunctionKeysTest;
