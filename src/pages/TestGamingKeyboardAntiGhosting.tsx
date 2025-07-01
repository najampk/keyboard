
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const TestGamingKeyboardAntiGhosting = () => {
  return (
    <Layout>
      <SEOHead
        title="Test Gaming Keyboard Anti-Ghosting - N-Key Rollover Test"
        description="Test gaming keyboard anti-ghosting capabilities and N-key rollover. Verify multiple simultaneous key presses for competitive gaming."
        keywords="gaming keyboard anti-ghosting test, n-key rollover gaming, gaming keyboard test, anti-ghosting gaming, gaming keyboard rollover"
        canonicalUrl="https://rapidkeycheck.lovable.app/test-gaming-keyboard-anti-ghosting"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Test Gaming Keyboard Anti-Ghosting</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default TestGamingKeyboardAntiGhosting;
