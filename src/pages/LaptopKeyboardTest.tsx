
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { Laptop, Wifi, Battery } from "lucide-react";

const LaptopKeyboardTest = () => {
  return (
    <Layout>
      <SEOHead
        title="Laptop Keyboard Tester - Test Laptop Keys & Function Keys"
        description="Test laptop keyboards, function keys, Fn combinations, and laptop-specific keys. Perfect for Windows laptops, MacBooks, and Chromebooks."
        keywords="laptop keyboard test, function keys test, fn key test, laptop key tester, macbook keyboard test, chromebook keyboard test"
        canonicalUrl="https://rapidkeycheck.lovable.app/laptop-keyboard-test"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Laptop className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Laptop Keyboard Tester
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive laptop keyboard testing for all brands. Test function keys, Fn combinations, and laptop-specific features.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12">
          <Card className="p-8 bg-slate-800/30 border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Laptop Keyboard Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Wifi className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Function Keys</h3>
                <p className="text-slate-300">Test F1-F12 keys with Fn combinations for brightness, volume, and connectivity controls.</p>
              </div>
              <div className="text-center">
                <Battery className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Power Controls</h3>
                <p className="text-slate-300">Verify power button, sleep mode keys, and energy management functions work correctly.</p>
              </div>
              <div className="text-center">
                <Laptop className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Layout Testing</h3>
                <p className="text-slate-300">Test compact layouts, arrow keys, and laptop-specific key arrangements.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LaptopKeyboardTest;
