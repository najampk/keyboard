
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { Settings, Wrench, CheckCircle, AlertCircle } from "lucide-react";

const HowToTestMechanicalKeyboardSwitches = () => {
  return (
    <Layout>
      <SEOHead
        title="How to Test Mechanical Keyboard Switches - Complete Guide"
        description="Learn how to test mechanical keyboard switches. Complete guide for Cherry MX, tactile, linear, and clicky switches. Professional testing methods and tools."
        keywords="test mechanical keyboard switches, cherry mx switch test, tactile switch testing, linear switch test, clicky switch test, mechanical keyboard testing"
        canonicalUrl="https://rapidkeycheck.lovable.app/how-to-test-mechanical-keyboard-switches"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Settings className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Test Mechanical Keyboard Switches
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Complete guide to testing mechanical keyboard switches. Learn to evaluate Cherry MX, tactile, linear, and clicky switches like a professional.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Switch Response</h3>
            </div>
            <p className="text-slate-300">Test actuation point, tactile feedback, and switch consistency across all keys.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Physical Testing</h3>
            </div>
            <p className="text-slate-300">Evaluate key travel, spring tension, and mechanical durability of switches.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-8 w-8 text-red-400" />
              <h3 className="text-xl font-semibold text-white">Problem Detection</h3>
            </div>
            <p className="text-slate-300">Identify chattering, stuck switches, and inconsistent actuation problems.</p>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-slate-800/30 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Switch Testing Methods</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Tactile Feedback Testing</h3>
              <p className="mb-4">
                Press each key slowly to feel the tactile bump. Consistent tactile feedback indicates healthy switches. Inconsistent or missing tactile response suggests worn or damaged switches.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Actuation Point Testing</h3>
              <p>
                Test the point where the switch registers a key press. Consistent actuation points across all keys indicate proper switch calibration and health.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Switch Chattering Detection</h3>
              <p className="mb-4">
                Chattering occurs when a switch registers multiple inputs from a single press. Use our tester to identify keys that produce double or triple characters.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Spring Tension Evaluation</h3>
              <p>
                Compare the force required to press different keys. Inconsistent spring tension indicates worn switches that may need replacement.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default HowToTestMechanicalKeyboardSwitches;
