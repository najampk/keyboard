
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const WirelessKeyboardTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Wireless Keyboard Tester - Test Bluetooth & Wireless Keyboards"
        description="Test wireless keyboards, Bluetooth keyboards, and wireless connectivity. Perfect for testing wireless keyboard response and connection quality."
        keywords="wireless keyboard test, bluetooth keyboard test, wireless keyboard tester, bluetooth connectivity test"
        canonicalUrl="https://rapidkeycheck.lovable.app/wireless-keyboard-test"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Wireless Keyboard Tester</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default WirelessKeyboardTest;
