import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WindowsKeyboardTest from "./pages/WindowsKeyboardTest";
import MacKeyboardTest from "./pages/MacKeyboardTest";
import GamingKeyboardTest from "./pages/GamingKeyboardTest";
import MechanicalKeyboardTest from "./pages/MechanicalKeyboardTest";
import LaptopKeyboardTest from "./pages/LaptopKeyboardTest";
import WirelessKeyboardTest from "./pages/WirelessKeyboardTest";
import NumpadKeyboardTest from "./pages/NumpadKeyboardTest";
import FunctionKeysTest from "./pages/FunctionKeysTest";
import StickyKeysTest from "./pages/StickyKeysTest";
import KeyResponseTest from "./pages/KeyResponseTest";
import SecondHandKeyboardTest from "./pages/SecondHandKeyboardTest";
import KeyboardRepairGuide from "./pages/KeyboardRepairGuide";
import HowToTestKeyboardKeys from "./pages/HowToTestKeyboardKeys";
import KeyboardTestingSoftwareFree from "./pages/KeyboardTestingSoftwareFree";
import OnlineKeyboardTesterMac from "./pages/OnlineKeyboardTesterMac";
import BestKeyboardTestingToolWindows10 from "./pages/BestKeyboardTestingToolWindows10";
import KeyboardLatencyTesting from "./pages/KeyboardLatencyTesting";
import HowToTestMechanicalKeyboardSwitches from "./pages/HowToTestMechanicalKeyboardSwitches";
import KeyboardHardwareDiagnosticTool from "./pages/KeyboardHardwareDiagnosticTool";
import CheckKeyboardGhostingRollover from "./pages/CheckKeyboardGhostingRollover";
import KeyboardTestNoSoftware from "./pages/KeyboardTestNoSoftware";
import TestGamingKeyboardAntiGhosting from "./pages/TestGamingKeyboardAntiGhosting";
import KeyboardHealthCheckUtility from "./pages/KeyboardHealthCheckUtility";
import KeyboardMatrixTestingTutorial from "./pages/KeyboardMatrixTestingTutorial";
import KeyboardKeyPressRecognitionTest from "./pages/KeyboardKeyPressRecognitionTest";
import KeyboardStuckKeyDetectionOnline from "./pages/KeyboardStuckKeyDetectionOnline";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
             
            <Route path="/windows-keyboard-test" element={<WindowsKeyboardTest />} />
            <Route path="/mac-keyboard-test" element={<MacKeyboardTest />} />
            <Route path="/gaming-keyboard-test" element={<GamingKeyboardTest />} />
            <Route path="/mechanical-keyboard-test" element={<MechanicalKeyboardTest />} />
            <Route path="/laptop-keyboard-test" element={<LaptopKeyboardTest />} />
            <Route path="/wireless-keyboard-test" element={<WirelessKeyboardTest />} />
            <Route path="/numpad-keyboard-test" element={<NumpadKeyboardTest />} />
            <Route path="/function-keys-test" element={<FunctionKeysTest />} />
            <Route path="/sticky-keys-test" element={<StickyKeysTest />} />
            <Route path="/key-response-test" element={<KeyResponseTest />} />
            <Route path="/second-hand-keyboard-test" element={<SecondHandKeyboardTest />} />
            <Route path="/keyboard-repair-guide" element={<KeyboardRepairGuide />} />
            <Route path="/how-to-test-keyboard-keys-working" element={<HowToTestKeyboardKeys />} />
            <Route path="/keyboard-testing-software-free-download" element={<KeyboardTestingSoftwareFree />} />
            <Route path="/online-keyboard-tester-for-mac" element={<OnlineKeyboardTesterMac />} />
            <Route path="/best-keyboard-testing-tool-for-windows-10" element={<BestKeyboardTestingToolWindows10 />} />
            <Route path="/keyboard-latency-testing-program" element={<KeyboardLatencyTesting />} />
            <Route path="/how-to-test-mechanical-keyboard-switches" element={<HowToTestMechanicalKeyboardSwitches />} />
            <Route path="/keyboard-hardware-diagnostic-tool" element={<KeyboardHardwareDiagnosticTool />} />
            <Route path="/check-keyboard-ghosting-and-rollover" element={<CheckKeyboardGhostingRollover />} />
            <Route path="/keyboard-test-no-software-needed" element={<KeyboardTestNoSoftware />} />
            <Route path="/test-gaming-keyboard-anti-ghosting" element={<TestGamingKeyboardAntiGhosting />} />
            <Route path="/keyboard-health-check-utility" element={<KeyboardHealthCheckUtility />} />
            <Route path="/keyboard-matrix-testing-tutorial" element={<KeyboardMatrixTestingTutorial />} />
            <Route path="/keyboard-key-press-recognition-test" element={<KeyboardKeyPressRecognitionTest />} />
            <Route path="/keyboard-stuck-key-detection-online" element={<KeyboardStuckKeyDetectionOnline />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
