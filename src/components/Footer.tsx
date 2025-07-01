
import { Link } from "react-router-dom";
import { Keyboard, ExternalLink } from "lucide-react";

const Footer = () => {
  const keyboardTestPages = [
    { name: "Windows Keyboard Test", path: "/windows-keyboard-test" },
    { name: "Mac Keyboard Test", path: "/mac-keyboard-test" },
    { name: "Gaming Keyboard Test", path: "/gaming-keyboard-test" },
    { name: "Mechanical Keyboard Test", path: "/mechanical-keyboard-test" },
    { name: "Laptop Keyboard Test", path: "/laptop-keyboard-test" },
    { name: "Wireless Keyboard Test", path: "/wireless-keyboard-test" }
  ];

  const toolsAndGuides = [
    { name: "How to Test Keyboard Keys", path: "/how-to-test-keyboard-keys-working" },
    { name: "Free Testing Software", path: "/keyboard-testing-software-free-download" },
    { name: "Mac Keyboard Tester Online", path: "/online-keyboard-tester-for-mac" },
    { name: "Windows 10 Testing Tool", path: "/best-keyboard-testing-tool-for-windows-10" },
    { name: "Keyboard Latency Testing", path: "/keyboard-latency-testing-program" },
    { name: "Test Mechanical Switches", path: "/how-to-test-mechanical-keyboard-switches" }
  ];

  const diagnosticTools = [
    { name: "Hardware Diagnostic Tool", path: "/keyboard-hardware-diagnostic-tool" },
    { name: "Ghosting & Rollover Check", path: "/check-keyboard-ghosting-and-rollover" },
    { name: "No Software Needed Test", path: "/keyboard-test-no-software-needed" },
    { name: "Anti-Ghosting Gaming Test", path: "/test-gaming-keyboard-anti-ghosting" },
    { name: "Health Check Utility", path: "/keyboard-health-check-utility" },
    { name: "Stuck Key Detection", path: "/keyboard-stuck-key-detection-online" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Keyboard className="h-8 w-8 text-cyan-400" />
              <div>
                <span className="text-xl font-bold">KeyTest Pro</span>
                <span className="block text-xs text-slate-400">Professional Testing</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Professional online keyboard testing tools for Windows, Mac, gaming, mechanical, and all keyboard types. Test your keyboard for free instantly.
            </p>
            <div className="flex space-x-4">
              <a 
                href="/sitemap.xml" 
                className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-1"
                title="View Sitemap"
              >
                Sitemap <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Keyboard Tests */}
          <div>
            <h3 className="text-white font-semibold mb-4">Keyboard Tests</h3>
            <ul className="space-y-2">
              {keyboardTestPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Guides */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools & Guides</h3>
            <ul className="space-y-2">
              {toolsAndGuides.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagnostic Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Diagnostic Tools</h3>
            <ul className="space-y-2">
              {diagnosticTools.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KeyTest Pro. All rights reserved. Professional keyboard testing tools.
          </div>
          <div className="flex space-x-6 text-sm">
            <span className="text-slate-400">
              Free Online Keyboard Tester
            </span>
            <span className="text-slate-400">
              No Software Required
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
