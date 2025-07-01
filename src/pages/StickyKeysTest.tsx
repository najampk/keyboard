
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const StickyKeysTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Sticky Keys Tester - Detect Stuck & Unresponsive Keys"
        description="Test for sticky keys, stuck keys, and unresponsive keyboard keys. Diagnose keyboard problems and key responsiveness issues."
        keywords="sticky keys test, stuck keys test, keyboard problems, unresponsive keys, keyboard diagnosis"
        canonicalUrl="https://rapidkeycheck.lovable.app/sticky-keys-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Sticky Keys Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default StickyKeysTest;
