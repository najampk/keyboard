
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyboardStuckKeyDetectionOnline = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Stuck Key Detection Online - Find Sticky Keys"
        description="Online stuck key detection tool. Find sticky keys, stuck keys, and unresponsive keys. Diagnose keyboard problems with instant detection."
        keywords="stuck key detection online, sticky key detection, keyboard stuck keys, find stuck keys, keyboard sticky keys test"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-stuck-key-detection-online"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Keyboard Stuck Key Detection Online</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyboardStuckKeyDetectionOnline;
