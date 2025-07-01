
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Wrench, AlertTriangle, CheckCircle, Settings } from "lucide-react";

const KeyboardRepairGuide = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Repair Guide - Fix Common Keyboard Problems"
        description="Complete keyboard repair guide for fixing stuck keys, cleaning keyboards, and troubleshooting common keyboard issues. DIY keyboard repair tips."
        keywords="keyboard repair, fix keyboard, stuck keys repair, keyboard cleaning, keyboard troubleshooting, DIY keyboard repair"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-repair-guide"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Wrench className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keyboard Repair Guide
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Complete guide to fixing common keyboard problems, cleaning techniques, and DIY repair solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-400" />
              <h2 className="text-2xl font-semibold text-white">Common Problems</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>• Sticky or stuck keys</li>
              <li>• Unresponsive keys</li>
              <li>• Double typing keys</li>
              <li>• Wireless connectivity issues</li>
              <li>• Worn key caps</li>
              <li>• Liquid spill damage</li>
            </ul>
          </Card>

          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-400" />
              <h2 className="text-2xl font-semibold text-white">Repair Solutions</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>• Deep cleaning techniques</li>
              <li>• Key cap replacement</li>
              <li>• Switch replacement</li>
              <li>• Connection troubleshooting</li>
              <li>• Software fixes</li>
              <li>• Preventive maintenance</li>
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-slate-800/30 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Settings className="h-8 w-8 text-cyan-400" />
            Step-by-Step Repair Guide
          </h2>
          
          <div className="space-y-6 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Diagnosis</h3>
              <p>Use our keyboard tester to identify which keys are malfunctioning. This helps determine if the issue is hardware or software related.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Basic Cleaning</h3>
              <p>Disconnect the keyboard and use compressed air to remove debris. For deeper cleaning, remove key caps and clean with isopropyl alcohol.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Key Cap Replacement</h3>
              <p>For worn or damaged key caps, carefully remove with a key cap puller and replace with compatible replacements from the manufacturer.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Switch Issues</h3>
              <p>For mechanical keyboards, individual switches can be replaced. Desolder the faulty switch and install a new one with matching specifications.</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default KeyboardRepairGuide;
