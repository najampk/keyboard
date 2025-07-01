
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { CheckCircle, Gamepad2, Zap, Target } from "lucide-react";

const GamingKeyboardTest = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Gaming Keyboard Tester",
    "description": "Test gaming keyboards, mechanical switches, RGB keyboards, and gaming key response. Perfect for competitive gaming and esports.",
    "url": "https://rapidkeycheck.lovable.app/gaming-keyboard-test",
    "applicationCategory": "UtilityApplication",
    "audience": "Gamers",
    "featureList": [
      "Gaming keyboard testing",
      "Mechanical switch testing",
      "Key response time testing",
      "Anti-ghosting testing",
      "RGB keyboard testing"
    ]
  };

  const features = [
    "Test key response time and latency",
    "Anti-ghosting and N-key rollover testing",
    "Mechanical switch actuation testing",
    "Gaming macro key verification",
    "RGB and backlight key testing",
    "Perfect for competitive gaming setups"
  ];

  const gamingKeyboards = [
    { brand: "Razer", models: "BlackWidow, Huntsman, DeathStalker" },
    { brand: "Corsair", models: "K95, K70, K65, Strafe" },
    { brand: "Logitech", models: "G915, G815, G613, G Pro X" },
    { brand: "SteelSeries", models: "Apex Pro, Apex 7, Apex 5" },
    { brand: "HyperX", models: "Alloy Elite, Alloy FPS, Origins" },
    { brand: "ASUS", models: "ROG Strix, TUF Gaming" }
  ];

  return (
    <Layout>
      <SEOHead
        title="Gaming Keyboard Tester - Test Mechanical & RGB Gaming Keyboards"
        description="Professional gaming keyboard tester for mechanical switches, RGB keyboards, and gaming setups. Test key response, anti-ghosting, and gaming performance."
        keywords="gaming keyboard test, mechanical keyboard test, rgb keyboard test, gaming key response, anti-ghosting test, esports keyboard test"
        canonicalUrl="https://rapidkeycheck.lovable.app/gaming-keyboard-test"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Gamepad2 className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gaming Keyboard Tester
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional gaming keyboard testing tool for mechanical keyboards, RGB setups, and competitive gaming. 
            Test key response, anti-ghosting, and gaming performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-400" />
              <h2 className="text-xl font-semibold text-white">Performance Testing</h2>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Key response time measurement</li>
              <li>• Input latency detection</li>
              <li>• Switch actuation testing</li>
              <li>• Gaming performance metrics</li>
            </ul>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-red-400" />
              <h2 className="text-xl font-semibold text-white">Anti-Ghosting</h2>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• N-key rollover verification</li>
              <li>• Simultaneous key press testing</li>
              <li>• Gaming combination testing</li>
              <li>• Multi-key accuracy check</li>
            </ul>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Gaming Features</h2>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Macro key testing</li>
              <li>• RGB lighting verification</li>
              <li>• Gaming mode testing</li>
              <li>• Profile switch testing</li>
            </ul>
          </Card>
        </div>

        {/* Gaming Keyboard Brands */}
        <Card className="p-6 bg-slate-800/50 border-slate-700 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Supported Gaming Keyboard Brands</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamingKeyboards.map((keyboard, index) => (
              <div key={index} className="bg-slate-700/50 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">{keyboard.brand}</h3>
                <p className="text-slate-300 text-sm">{keyboard.models}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Keyboard Tester */}
        <KeyboardTester />

        {/* SEO Content */}
        <div className="mt-12">
          <Card className="p-8 bg-slate-800/30 border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Gaming Keyboard Testing Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Mechanical Switch Testing</h3>
                <p className="mb-4">
                  Different mechanical switches (Cherry MX, Razer, Romer-G) have unique characteristics. Test actuation force, travel distance, and response time to ensure your switches perform optimally for gaming.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Anti-Ghosting Verification</h3>
                <p>
                  Gaming requires multiple simultaneous key presses. Our tester verifies N-key rollover and anti-ghosting functionality, essential for competitive gaming and complex key combinations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">RGB and Macro Testing</h3>
                <p className="mb-4">
                  Test RGB lighting zones, macro functionality, and programmable keys. Ensure your gaming setup's advanced features work correctly with your favorite games and applications.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Competitive Gaming</h3>
                <p>
                  Professional esports players and competitive gamers rely on consistent keyboard performance. Use our tester to verify your gaming keyboard meets professional standards.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default GamingKeyboardTest;
