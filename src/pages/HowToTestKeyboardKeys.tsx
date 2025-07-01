
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { CheckCircle, Monitor, Keyboard, ArrowRight } from "lucide-react";

const HowToTestKeyboardKeys = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Test Keyboard Keys Working",
    "description": "Step-by-step guide to test if your keyboard keys are working properly",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Access Online Keyboard Tester",
        "text": "Open a web browser and navigate to an online keyboard testing tool"
      },
      {
        "@type": "HowToStep", 
        "name": "Press Each Key",
        "text": "Systematically press each key on your keyboard to check if it responds"
      },
      {
        "@type": "HowToStep",
        "name": "Check Key Highlighting",
        "text": "Verify that each pressed key highlights on the virtual keyboard display"
      }
    ]
  };

  const testingSteps = [
    "Open online keyboard tester in your web browser",
    "Press each key systematically starting from function keys",
    "Check if the corresponding key highlights on screen",
    "Test modifier keys (Ctrl, Alt, Shift) combinations",
    "Verify arrow keys, numpad, and special keys work",
    "Test key combinations for shortcuts and hotkeys"
  ];

  return (
    <Layout>
      <SEOHead
        title="How to Test Keyboard Keys Working - Complete Guide & Free Tool"
        description="Learn how to test if your keyboard keys are working properly. Step-by-step guide with free online keyboard tester. Check all keys, shortcuts, and combinations."
        keywords="how to test keyboard keys, keyboard key testing guide, check keyboard keys working, keyboard testing tutorial, test keyboard keys online"
        canonicalUrl="https://rapidkeycheck.lovable.app/how-to-test-keyboard-keys-working"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Keyboard className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Test Keyboard Keys Working
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Complete guide to testing keyboard keys with our free online tool. Learn to identify faulty keys, test combinations, and troubleshoot keyboard issues.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-400" />
              Step-by-Step Testing Guide
            </h2>
            <ol className="space-y-3">
              {testingSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4">
              What to Look For
            </h2>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <strong className="text-white">Key Response:</strong> Each pressed key should immediately highlight on screen
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <strong className="text-white">Stuck Keys:</strong> Keys that remain highlighted after release
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <strong className="text-white">Double Input:</strong> Keys that register multiple presses
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <strong className="text-white">Dead Keys:</strong> Keys that don't respond at all
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-slate-800/30 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Why Test Your Keyboard Keys?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="mb-4">
                Regular keyboard testing helps identify issues before they affect your productivity. Early detection of faulty keys can save time and prevent typing errors.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Buying Second-Hand</h3>
              <p>
                When purchasing used keyboards, thorough testing ensures all keys function properly. This prevents disappointment and ensures you get value for money.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Use</h3>
              <p className="mb-4">
                For professionals who type extensively, keyboard reliability is crucial. Regular testing helps maintain consistent performance and identifies when replacement is needed.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Gaming Performance</h3>
              <p>
                Gamers need responsive keyboards for competitive play. Testing ensures all keys respond quickly and accurately, preventing game-losing moments due to hardware failure.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default HowToTestKeyboardKeys;
