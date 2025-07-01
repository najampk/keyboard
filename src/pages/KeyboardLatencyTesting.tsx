
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";
import { Card } from "@/components/ui/card";
import { Timer, Zap, Target, TrendingUp } from "lucide-react";

const KeyboardLatencyTesting = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Latency Testing Program - Measure Input Lag & Response Time"
        description="Professional keyboard latency testing program. Measure input lag, response time, and keyboard performance. Essential for gaming and professional use."
        keywords="keyboard latency testing, input lag test, keyboard response time, keyboard latency program, keyboard performance test"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-latency-testing-program"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Timer className="h-16 w-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Keyboard Latency Testing Program
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Professional keyboard latency and response time testing. Measure input lag, test keyboard performance, and optimize for gaming and professional use.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
            <p className="text-slate-300 text-sm">Measure how quickly your keyboard responds to key presses.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Target className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Input Lag</h3>
            <p className="text-slate-300 text-sm">Detect and measure input lag that affects gaming performance.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
            <p className="text-slate-300 text-sm">Analyze overall keyboard performance and consistency.</p>
          </Card>
          <Card className="p-6 bg-slate-800/50 border-slate-700 text-center">
            <Timer className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
            <p className="text-slate-300 text-sm">High-precision timing measurements for accurate results.</p>
          </Card>
        </div>

        <KeyboardTester />

        <Card className="mt-12 p-8 bg-slate-800/30 border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Understanding Keyboard Latency</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What is Keyboard Latency?</h3>
              <p className="mb-4">
                Keyboard latency is the delay between pressing a key and the computer registering that input. Lower latency means faster response times, crucial for gaming and professional typing.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Gaming Impact</h3>
              <p>
                In competitive gaming, even milliseconds matter. High keyboard latency can mean the difference between winning and losing, especially in fast-paced games requiring quick reactions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Applications</h3>
              <p className="mb-4">
                For professionals like programmers, writers, and data entry specialists, consistent low latency ensures smooth workflow and reduces typing fatigue.
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">Factors Affecting Latency</h3>
              <p>
                Connection type (USB vs wireless), keyboard technology (mechanical vs membrane), and system resources all impact keyboard latency and response times.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default KeyboardLatencyTesting;
