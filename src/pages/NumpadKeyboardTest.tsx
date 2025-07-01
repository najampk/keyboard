
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const NumpadKeyboardTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Numpad Keyboard Tester - Test Number Pad & Numeric Keys"
        description="Test numeric keypad, number keys, and calculator functions. Perfect for testing desktop keyboards with numpad and external numpads."
        keywords="numpad test, number pad test, numeric keypad test, calculator keys test, desktop keyboard numpad"
        canonicalUrl="https://rapidkeycheck.lovable.app/numpad-keyboard-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Numpad Keyboard Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default NumpadKeyboardTest;
