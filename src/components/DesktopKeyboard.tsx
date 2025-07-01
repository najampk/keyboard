import { useEffect } from "react";
import KeyButton from "./KeyButton";
import { Mouse, Volume2, VolumeX, Volume1, Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface DesktopKeyboardProps {
  pressedKeys: Set<string>;
  onTotalKeysUpdate: (total: number) => void;
}

const DesktopKeyboard = ({ pressedKeys, onTotalKeysUpdate }: DesktopKeyboardProps) => {
  const keyLayout = [
    // Function Keys Row with media controls
    [
      { code: "Escape", label: "Esc" },
      { code: "F1", label: "F1" },
      { code: "F2", label: "F2" },
      { code: "F3", label: "F3" },
      { code: "F4", label: "F4" },
      { code: "F5", label: "F5" },
      { code: "F6", label: "F6" },
      { code: "F7", label: "F7" },
      { code: "F8", label: "F8" },
      { code: "F9", label: "F9" },
      { code: "F10", label: "F10", icon: VolumeX },
      { code: "F11", label: "F11", icon: Volume1 },
      { code: "F12", label: "F12", icon: Volume2 },
      { code: "PrintScreen", label: "PrtSc" },
      { code: "ScrollLock", label: "ScrLk" },
      { code: "Pause", label: "Pause" },
    ],
    // Number Row
    [
      { code: "Backquote", label: "`" },
      { code: "Digit1", label: "1" },
      { code: "Digit2", label: "2" },
      { code: "Digit3", label: "3" },
      { code: "Digit4", label: "4" },
      { code: "Digit5", label: "5" },
      { code: "Digit6", label: "6" },
      { code: "Digit7", label: "7" },
      { code: "Digit8", label: "8" },
      { code: "Digit9", label: "9" },
      { code: "Digit0", label: "0" },
      { code: "Minus", label: "-" },
      { code: "Equal", label: "=" },
      { code: "Backspace", label: "⌫", wide: true },
      { code: "Insert", label: "Ins" },
      { code: "Home", label: "Home" },
      { code: "PageUp", label: "PgUp" },
      { code: "NumLock", label: "Num" },
      { code: "NumpadDivide", label: "/" },
      { code: "NumpadMultiply", label: "*" },
      { code: "NumpadSubtract", label: "-" },
    ],
    // QWERTY Row
    [
      { code: "Tab", label: "Tab", wide: true },
      { code: "KeyQ", label: "Q" },
      { code: "KeyW", label: "W" },
      { code: "KeyE", label: "E" },
      { code: "KeyR", label: "R" },
      { code: "KeyT", label: "T" },
      { code: "KeyY", label: "Y" },
      { code: "KeyU", label: "U" },
      { code: "KeyI", label: "I" },
      { code: "KeyO", label: "O" },
      { code: "KeyP", label: "P" },
      { code: "BracketLeft", label: "[" },
      { code: "BracketRight", label: "]" },
      { code: "Backslash", label: "\\" },
      { code: "Delete", label: "Del" },
      { code: "End", label: "End" },
      { code: "PageDown", label: "PgDn" },
      { code: "Numpad7", label: "7" },
      { code: "Numpad8", label: "8" },
      { code: "Numpad9", label: "9" },
      { code: "NumpadAdd", label: "+", tall: true },
    ],
    // ASDF Row
    [
      { code: "CapsLock", label: "Caps", wide: true },
      { code: "KeyA", label: "A" },
      { code: "KeyS", label: "S" },
      { code: "KeyD", label: "D" },
      { code: "KeyF", label: "F" },
      { code: "KeyG", label: "G" },
      { code: "KeyH", label: "H" },
      { code: "KeyJ", label: "J" },
      { code: "KeyK", label: "K" },
      { code: "KeyL", label: "L" },
      { code: "Semicolon", label: ";" },
      { code: "Quote", label: "'" },
      { code: "Enter", label: "↵", wide: true },
      null, null, null, // spacing
      { code: "Numpad4", label: "4" },
      { code: "Numpad5", label: "5" },
      { code: "Numpad6", label: "6" },
      null, // tall + key continues
    ],
    // ZXCV Row
    [
      { code: "ShiftLeft", label: "⇧", wide: true },
      { code: "KeyZ", label: "Z" },
      { code: "KeyX", label: "X" },
      { code: "KeyC", label: "C" },
      { code: "KeyV", label: "V" },
      { code: "KeyB", label: "B" },
      { code: "KeyN", label: "N" },
      { code: "KeyM", label: "M" },
      { code: "Comma", label: "," },
      { code: "Period", label: "." },
      { code: "Slash", label: "/" },
      { code: "ShiftRight", label: "⇧", wide: true },
      null, // spacing
      { code: "ArrowUp", label: "↑" },
      null, // spacing
      { code: "Numpad1", label: "1" },
      { code: "Numpad2", label: "2" },
      { code: "Numpad3", label: "3" },
      { code: "NumpadEnter", label: "↵", tall: true },
    ],
    // Bottom Row
    [
      { code: "ControlLeft", label: "Ctrl" },
      { code: "MetaLeft", label: "❖" },
      { code: "AltLeft", label: "Alt" },
      { code: "Space", label: "Space", extraWide: true },
      { code: "AltRight", label: "Alt" },
      { code: "MetaRight", label: "❖" },
      { code: "ContextMenu", label: "☰" },
      { code: "ControlRight", label: "Ctrl" },
      { code: "ArrowLeft", label: "←" },
      { code: "ArrowDown", label: "↓" },
      { code: "ArrowRight", label: "→" },
      { code: "Numpad0", label: "0", wide: true },
      { code: "NumpadDecimal", label: "." },
      null, // tall enter continues
    ],
  ];

  // Mouse buttons section
  const mouseButtons = [
    { code: "MouseLeft", label: "L", icon: Mouse },
    { code: "MouseMiddle", label: "M", icon: Mouse },
    { code: "MouseRight", label: "R", icon: Mouse },
  ];

  const totalKeys = keyLayout.flat().filter(key => key !== null).length + mouseButtons.length;

  useEffect(() => {
    onTotalKeysUpdate(totalKeys);
  }, [onTotalKeysUpdate, totalKeys]);

  return (
    <div className="space-y-4">
      {/* Mouse Buttons */}
      <div className="flex justify-center mb-6">
        <div className="bg-slate-800/30 rounded-lg p-4">
          <h4 className="text-white text-sm font-medium mb-3 text-center">Mouse Buttons</h4>
          <div className="flex gap-2">
            {mouseButtons.map((button) => (
              <KeyButton
                key={button.code}
                keyCode={button.code}
                label={button.label}
                icon={button.icon}
                isPressed={pressedKeys.has(button.code)}
                size="lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard Layout */}
      <div className="space-y-1">
        {keyLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center items-start">
            {row.map((key, keyIndex) => {
              if (key === null) {
                return <div key={keyIndex} className="min-w-10 h-10" />;
              }
              
              return (
                <KeyButton
                  key={key.code}
                  keyCode={key.code}
                  label={key.label}
                  icon={key.icon}
                  isPressed={pressedKeys.has(key.code)}
                  className={`
                    ${key.wide ? "min-w-16" : ""}
                    ${key.extraWide ? "min-w-48" : ""}
                    ${key.tall ? "h-20" : ""}
                  `}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopKeyboard;
