
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyboardMatrixTestingTutorial = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Matrix Testing Tutorial - Learn Matrix Scanning"
        description="Learn keyboard matrix testing and scanning techniques. Complete tutorial on keyboard matrix circuits, ghosting, and rollover testing methods."
        keywords="keyboard matrix testing, keyboard matrix tutorial, matrix scanning keyboard, keyboard matrix circuit, keyboard matrix ghosting"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-matrix-testing-tutorial"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Keyboard Matrix Testing Tutorial</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyboardMatrixTestingTutorial;
