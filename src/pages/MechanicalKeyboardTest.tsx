
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { CheckCircle, Settings, Cpu } from "lucide-react";

const MechanicalKeyboardTest = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mechanical Keyboard Tester",
    "description": "Test mechanical keyboards, switches, and key response. Perfect for Cherry MX, Blue, Brown, Red switches and custom mechanical keyboards.",
    "url": "https://rapidkeycheck.lovable.app/mechanical-keyboard-test",
    "applicationCategory": "UtilityApplication",
    "featureList": [
      "Mechanical switch testing",
      "Cherry MX switch testing",
      "Custom keyboard testing",
      "Tactile feedback testing",
      "Actuation point testing"
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Mechanical Keyboard Tester - Test Cherry MX & Custom Switches"
        description="Professional mechanical keyboard tester for Cherry MX, Blue, Brown, Red switches. Test actuation, tactile feedback, and mechanical switch performance."
        keywords="mechanical keyboard test, cherry mx test, blue switch test, brown switch test, red switch test, tactile keyboard test, mechanical switch tester"
        canonicalUrl="https://rapidkeycheck.lovable.app/mechanical-keyboard-test"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Settings className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mechanical Keyboard Tester
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional mechanical keyboard testing for Cherry MX switches, custom keyboards, and tactile feedback verification.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12">
          <Card className="p-8 bg-slate-800/30 border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Mechanical Switch Types</h2>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Blue Switches (Clicky)</h3>
                <p>Tactile bump with audible click. Popular for typing. High actuation force with distinct feedback.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">Brown Switches (Tactile)</h3>
                <p>Tactile bump without click sound. Balance between typing and gaming. Medium actuation force.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Red Switches (Linear)</h3>
                <p>Smooth keystroke without tactile bump. Preferred for gaming. Low actuation force.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MechanicalKeyboardTest;
