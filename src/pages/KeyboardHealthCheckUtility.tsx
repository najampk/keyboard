
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import KeyboardTester from "@/components/KeyboardTester";

const KeyboardHealthCheckUtility = () => {
  return (
    <Layout>
      <SEOHead
        title="Keyboard Health Check Utility - Complete Keyboard Diagnosis"
        description="Complete keyboard health check utility. Diagnose keyboard problems, test all functions, and assess overall keyboard condition and performance."
        keywords="keyboard health check, keyboard diagnosis utility, keyboard condition test, keyboard performance check, keyboard health diagnostic"
        canonicalUrl="https://rapidkeycheck.lovable.app/keyboard-health-check-utility"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Keyboard Health Check Utility</h1>
        <KeyboardTester />
      </div>
    </Layout>
  );
};

export default KeyboardHealthCheckUtility;
