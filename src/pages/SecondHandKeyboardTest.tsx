
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const SecondHandKeyboardTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Second Hand Keyboard Tester - Test Used & Refurbished Keyboards"
        description="Test second-hand keyboards, used keyboards, and refurbished keyboards before purchase. Verify all keys work properly on pre-owned keyboards."
        keywords="second hand keyboard test, used keyboard test, refurbished keyboard test, buying used keyboard, keyboard quality check"
        canonicalUrl="https://rapidkeycheck.lovable.app/second-hand-keyboard-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Second Hand Keyboard Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default SecondHandKeyboardTest;
