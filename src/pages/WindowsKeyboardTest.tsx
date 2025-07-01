
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { CheckCircle, Monitor, Keyboard } from "lucide-react";

const WindowsKeyboardTest = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Windows Keyboard Tester",
    "description": "Test Windows laptop and desktop keyboards online. Check all keys, function keys, and Windows-specific shortcuts.",
    "url": "https://rapidkeycheck.lovable.app/windows-keyboard-test",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Windows",
    "featureList": [
      "Windows key testing",
      "Function keys testing",
      "Ctrl+Alt combinations",
      "Windows shortcuts testing",
      "Laptop keyboard testing"
    ]
  };

  const features = [
    "Test all Windows-specific keys including Windows key",
    "Function keys (F1-F12) with Windows shortcuts",
    "Ctrl, Alt, and Shift key combinations",
    "Perfect for Windows laptops and desktop keyboards",
    "Test Windows shortcuts and hotkeys",
    "Real-time key press detection"
  ];

  return (
    <Layout>
      <SEOHead
        title="Windows Keyboard Tester - Test Windows Laptop & Desktop Keyboards"
        description="Free online Windows keyboard tester. Test all Windows keys, function keys, shortcuts, and key combinations. Perfect for Windows laptops and desktop keyboards."
        keywords="windows keyboard test, windows laptop keyboard, windows desktop keyboard, function keys test, windows key test, keyboard tester windows"
        canonicalUrl="https://rapidkeycheck.lovable.app/windows-keyboard-test"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Monitor className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Windows Keyboard Tester
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional Windows keyboard testing tool for laptops and desktop keyboards. 
            Test all Windows-specific keys, function keys, and keyboard shortcuts online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Keyboard className="h-6 w-6 text-cyan-400" />
              Windows Keyboard Features
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
              Common Windows Key Issues
            </h2>
            <div className="space-y-4 text-slate-300">
              <p><strong className="text-white">Windows Key Not Working:</strong> Test if your Windows key responds properly to detect hardware issues.</p>
              <p><strong className="text-white">Function Keys:</strong> Check if F1-F12 keys work correctly with Fn combinations on laptops.</p>
              <p><strong className="text-white">Sticky Keys:</strong> Test if keys are sticking or not responding consistently.</p>
              <p><strong className="text-white">Key Combinations:</strong> Verify Ctrl+Alt+Del and other Windows shortcuts work properly.</p>
            </div>
          </Card>
        </div>

        {/* Keyboard Tester */}
        <KeyboardTester />

        {/* SEO Content */}
        <div className="mt-12 prose prose-invert max-w-none">
          <Card className="p-8 bg-slate-800/30 border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Why Test Your Windows Keyboard?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">For Windows Laptops</h3>
                <p className="mb-4">
                  Windows laptops often have unique key layouts and function key combinations. Our tester helps you verify that all laptop-specific features work correctly, including brightness controls, volume keys, and Fn key combinations.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">For Desktop Keyboards</h3>
                <p>
                  Desktop Windows keyboards come in various layouts. Test full-size, compact, and ergonomic keyboards to ensure all Windows shortcuts and function keys respond properly.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
                <p className="mb-4">
                  Perfect for testing second-hand keyboards, new purchases, or troubleshooting existing keyboards. Identify problematic keys before they affect your productivity.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Professional Use</h3>
                <p>
                  IT professionals and computer technicians use our tool to quickly diagnose keyboard issues and verify repairs. Essential for computer maintenance and troubleshooting.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WindowsKeyboardTest;
