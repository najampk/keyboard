
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const CheckKeyboardGhostingRollover = () => {
  return (
    <Layout>
      <SEOHead
        title="Check Keyboard Ghosting and Rollover - Anti-Ghosting Test"
        description="Test keyboard ghosting and N-key rollover capabilities. Check anti-ghosting features and multiple key press detection for gaming keyboards."
        keywords="keyboard ghosting test, n-key rollover test, anti-ghosting test, keyboard rollover check, gaming keyboard ghosting"
        canonicalUrl="https://rapidkeycheck.lovable.app/check-keyboard-ghosting-and-rollover"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Check Keyboard Ghosting and Rollover</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default CheckKeyboardGhostingRollover;
