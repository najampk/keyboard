
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyboardKeyPressRecognitionTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Key Press Recognition Test - Input Detection Testing"
        description="Test keyboard key press recognition and input detection accuracy. Verify that all key presses are properly recognized and registered."
        keywords="keyboard key press recognition, input detection test, key press test, keyboard recognition test, key input testing"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-key-press-recognition-test"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Keyboard Key Press Recognition Test</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyboardKeyPressRecognitionTest;
