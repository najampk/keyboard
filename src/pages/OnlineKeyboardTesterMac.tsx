
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { Apple, Command, Option } from "lucide-react";

const OnlineKeyboardTesterMac = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Online Keyboard Tester for Mac",
    "description": "Free online keyboard tester specifically designed for Mac keyboards and MacBook testing",
    "operatingSystem": "macOS",
    "applicationCategory": "UtilityApplication"
  };

  return (
    <Layout>
      <SEOHead
        title="Online Keyboard Tester for Mac - Test MacBook & Mac Keyboards Free"
        description="Free online keyboard tester for Mac and MacBook keyboards. Test Command, Option, function keys, and Mac-specific key combinations. No download required."
        keywords="online keyboard tester mac, macbook keyboard test, mac keyboard tester online, test mac keyboard keys, macbook pro keyboard test"
        canonicalUrl="https://rapidkeycheck.lovable.app/online-keyboard-tester-for-mac"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Apple className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Online Keyboard Tester for Mac
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional keyboard testing tool designed for Mac and MacBook keyboards. Test Command, Option, function keys, and all Mac-specific features online.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Command className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Command Key Testing</h3>
            <p className="text-slate-300 text-sm">Test Command (⌘) key functionality and all Command key combinations used in macOS.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Option className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Option Key Testing</h3>
            <p className="text-slate-300 text-sm">Verify Option (⌥) key works properly for special characters and Mac shortcuts.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Apple className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">MacBook Specific</h3>
            <p className="text-slate-300 text-sm">Test Touch Bar, function keys, and MacBook-specific keyboard layouts and features.</p>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-slate-800/30 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Mac Keyboard Testing Features</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">macOS Keyboard Shortcuts</h3>
              <p className="mb-4">
                Test essential Mac keyboard shortcuts like ⌘+C, ⌘+V, ⌘+Z, and system-wide shortcuts. Ensure your Command and Option keys work properly for productivity.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Function Key Behavior</h3>
              <p>
                Mac function keys have dual purposes - media controls and traditional F-keys. Test both modes and verify the Fn key switches between them correctly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">MacBook Butterfly & Scissor Keys</h3>
              <p className="mb-4">
                Different MacBook generations use different key mechanisms. Our tester works with butterfly keyboards, scissor switches, and the latest Magic Keyboard designs.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">External Mac Keyboards</h3>
              <p>
                Test Apple Magic Keyboard, wired keyboards, and third-party Mac-compatible keyboards. Verify all Mac-specific keys function correctly.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default OnlineKeyboardTesterMac;
