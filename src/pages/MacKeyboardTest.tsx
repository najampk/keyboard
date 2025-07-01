
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { CheckCircle, Command, Laptop } from "lucide-react";

const MacKeyboardTest = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mac Keyboard Tester",
    "description": "Test Mac keyboards, MacBook keyboards, and Apple keyboards online. Check Command key, Option key, and Mac-specific shortcuts.",
    "url": "https://rapidkeycheck.lovable.app/mac-keyboard-test",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "macOS",
    "featureList": [
      "Command key testing",
      "Option key testing",
      "Mac keyboard shortcuts",
      "MacBook keyboard testing",
      "Apple Magic Keyboard testing"
    ]
  };

  const features = [
    "Test Command (⌘) and Option (⌥) keys",
    "Function keys with Mac-specific behaviors",
    "Control, Shift, and Caps Lock testing",
    "Perfect for MacBooks and Apple keyboards",
    "Test Mac shortcuts and key combinations",
    "Touch Bar compatible (for supported models)"
  ];

  return (
    <Layout>
      <SEOHead
        title="Mac Keyboard Tester - Test MacBook & Apple Keyboards Online"
        description="Free online Mac keyboard tester for MacBooks and Apple keyboards. Test Command key, Option key, function keys, and Mac-specific shortcuts."
        keywords="mac keyboard test, macbook keyboard test, apple keyboard test, command key test, option key test, mac keyboard tester"
        canonicalUrl="https://rapidkeycheck.lovable.app/mac-keyboard-test"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Command className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mac Keyboard Tester
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional Mac keyboard testing tool for MacBooks and Apple keyboards. 
            Test Command keys, Option keys, function keys, and Mac-specific shortcuts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Laptop className="h-6 w-6 text-cyan-400" />
              Mac Keyboard Features
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Mac Keyboard Issues
            </h2>
            <div className="space-y-4 text-slate-300">
              <p><strong className="text-white">Command Key Problems:</strong> Test if your ⌘ key works properly for Mac shortcuts and copy/paste operations.</p>
              <p><strong className="text-white">Function Key Behavior:</strong> Verify F1-F12 keys work with system functions like brightness and volume.</p>
              <p><strong className="text-white">Option Key Issues:</strong> Check if Option (⌥) key produces special characters and works in combinations.</p>
              <p><strong className="text-white">Butterfly vs Scissor:</strong> Test different MacBook keyboard mechanisms for consistent response.</p>
            </div>
          </Card>
        </div>

        {/* Keyboard Tester */}
        <KeyboardTester />

        {/* SEO Content */}
        <div className="mt-12">
          <Card className="p-8 bg-slate-800/30 border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Mac Keyboard Testing Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">MacBook Keyboards</h3>
                <p className="mb-4">
                  MacBook keyboards have evolved through different generations - from butterfly mechanisms to the newer Magic Keyboard. Test your specific model to ensure all keys respond correctly and consistently.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Apple Magic Keyboard</h3>
                <p>
                  External Apple Magic Keyboards offer a different typing experience. Test wireless connectivity, battery levels, and key response to ensure optimal performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Mac-Specific Keys</h3>
                <p className="mb-4">
                  The Command (⌘) and Option (⌥) keys are essential for Mac shortcuts. Our tester verifies these modifier keys work properly with other key combinations.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Professional Testing</h3>
                <p>
                  Essential for Mac users, developers, and IT support. Quickly identify keyboard issues that could affect productivity and system navigation.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MacKeyboardTest;
