
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WindowsKeyboard from "./WindowsKeyboard";
import MacKeyboard from "./MacKeyboard";
import DesktopKeyboard from "./DesktopKeyboard";
import { Monitor, Command, RotateCcw, Keyboard } from "lucide-react";

type KeyboardType = "windows" | "mac" | "desktop";

const KeyboardTester = () => {
  const [keyboardType, setKeyboardType] = useState<KeyboardType>("desktop");
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [totalKeys, setTotalKeys] = useState(0);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const key = event.code || event.key;
    console.log("Key pressed:", key);
    
    setPressedKeys(prev => {
      const newSet = new Set(prev);
      newSet.add(key);
      return newSet;
    });
    
    event.preventDefault();
  }, []);

  const handleMousePress = useCallback((event: MouseEvent) => {
    let mouseKey = "";
    switch (event.button) {
      case 0:
        mouseKey = "MouseLeft";
        break;
      case 1:
        mouseKey = "MouseMiddle";
        break;
      case 2:
        mouseKey = "MouseRight";
        break;
    }
    
    if (mouseKey) {
      console.log("Mouse button pressed:", mouseKey);
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.add(mouseKey);
        return newSet;
      });
    }
    
    event.preventDefault();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleMousePress);
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousedown", handleMousePress);
      window.removeEventListener("contextmenu", (e) => e.preventDefault());
    };
  }, [handleKeyPress, handleMousePress]);

  const handleReset = () => {
    setPressedKeys(new Set());
    console.log("Keyboard test reset");
  };

  const handleTotalKeysUpdate = (total: number) => {
    setTotalKeys(total);
  };

  const progress = totalKeys > 0 ? Math.round((pressedKeys.size / totalKeys) * 100) : 0;

  const getKeyboardTitle = () => {
    switch (keyboardType) {
      case "windows":
        return "Windows Laptop";
      case "mac":
        return "Mac";
      case "desktop":
        return "Desktop Full-Size";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="lg:w-1/4 p-6 bg-slate-800/50 border-slate-700">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Keyboard Layout</h2>
              <div className="grid grid-cols-1 gap-3">
                <Button
                  variant={keyboardType === "desktop" ? "default" : "outline"}
                  onClick={() => setKeyboardType("desktop")}
                  className="justify-start gap-3 h-12"
                >
                  <Keyboard className="w-5 h-5" />
                  Desktop Full-Size
                </Button>
                <Button
                  variant={keyboardType === "windows" ? "default" : "outline"}
                  onClick={() => setKeyboardType("windows")}
                  className="justify-start gap-3 h-12"
                >
                  <Monitor className="w-5 h-5" />
                  Windows Laptop
                </Button>
                <Button
                  variant={keyboardType === "mac" ? "default" : "outline"}
                  onClick={() => setKeyboardType("mac")}
                  className="justify-start gap-3 h-12"
                >
                  <Command className="w-5 h-5" />
                  Mac Layout
                </Button>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Test Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Keys Tested</span>
                  <span className="text-white font-mono">{pressedKeys.size}/{totalKeys}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  {progress}% Complete
                </Badge>
              </div>
            </div>

            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full h-12 gap-2 hover:bg-red-500/10 hover:border-red-500 hover:text-red-400"
            >
              <RotateCcw className="w-5 h-5" />
              Reset Test
            </Button>
          </div>
        </Card>

        <Card className="flex-1 p-6 bg-slate-800/30 border-slate-700">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-white mb-2">
              {getKeyboardTitle()} Keyboard Layout
            </h2>
            <p className="text-slate-400 text-sm">
              Press any key to test. {keyboardType === "desktop" && "Click mouse buttons to test them too. "}
              Tested keys will be highlighted and cannot be pressed again.
            </p>
          </div>
          
          <div className="keyboard-container overflow-x-auto">
            {keyboardType === "windows" ? (
              <WindowsKeyboard 
                pressedKeys={pressedKeys} 
                onTotalKeysUpdate={handleTotalKeysUpdate}
              />
            ) : keyboardType === "mac" ? (
              <MacKeyboard 
                pressedKeys={pressedKeys} 
                onTotalKeysUpdate={handleTotalKeysUpdate}
              />
            ) : (
              <DesktopKeyboard 
                pressedKeys={pressedKeys} 
                onTotalKeysUpdate={handleTotalKeysUpdate}
              />
            )}
          </div>
        </Card>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-slate-400 text-sm mb-2">
          <span className="text-cyan-400 font-semibold">Tip:</span> Make sure your keyboard layout matches the selected type for accurate testing.
        </p>
        <p className="text-slate-500 text-xs">
          Professional keyboard testing tool for Windows, Mac, and desktop keyboards with numpad support
        </p>
      </footer>
    </div>
  );
};

export default KeyboardTester;
