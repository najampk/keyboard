
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyboardTestNoSoftware = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Test No Software Needed - Instant Online Testing"
        description="Test your keyboard without installing any software. Instant online keyboard testing in your browser. No downloads, no installation required."
        keywords="keyboard test no software, online keyboard test, no download keyboard test, browser keyboard test, instant keyboard testing"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-test-no-software-needed"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Keyboard Test - No Software Needed</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyboardTestNoSoftware;
