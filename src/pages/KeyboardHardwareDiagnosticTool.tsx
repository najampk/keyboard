
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { Wrench, Cpu, AlertTriangle, CheckCircle } from "lucide-react";

const KeyboardHardwareDiagnosticTool = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Hardware Diagnostic Tool - Professional Keyboard Testing"
        description="Professional keyboard hardware diagnostic tool. Test keyboard hardware, circuits, switches, and connections. Identify hardware failures and issues."
        keywords="keyboard hardware diagnostic, keyboard diagnostic tool, keyboard hardware test, keyboard circuit test, keyboard hardware issues"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-hardware-diagnostic-tool"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Cpu className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keyboard Hardware Diagnostic Tool
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional keyboard hardware diagnostic tool. Test keyboard circuits, switches, connections, and identify hardware failures with precision.
          </p>
        </div>

        <KeyboardTester />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Hardware Testing</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                Switch mechanism testing
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                Circuit continuity verification
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                Connection stability testing
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                Matrix scanning diagnostics
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-400" />
              <h2 className="text-2xl font-semibold text-white">Issue Detection</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                Dead key identification
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                Intermittent connection problems
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                Multiple key registration
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                Hardware ghosting detection
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default KeyboardHardwareDiagnosticTool;
