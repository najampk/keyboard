
import { useEffect } from "react";
import KeyButton from "./KeyButton";

interface WindowsKeyboardProps {
  pressedKeys: Set<string>;
  onTotalKeysUpdate: (total: number) => void;
}

const WindowsKeyboard = ({ pressedKeys, onTotalKeysUpdate }: WindowsKeyboardProps) => {
  const keyLayout = [
    // Function Keys Row
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
      { code: "F10", label: "F10" },
      { code: "F11", label: "F11" },
      { code: "F12", label: "F12" },
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
      { code: "ArrowUp", label: "↑" },
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
    ],
  ];

  const totalKeys = keyLayout.flat().length;

  useEffect(() => {
    onTotalKeysUpdate(totalKeys);
  }, [onTotalKeysUpdate, totalKeys]);

  return (
    <div className="space-y-2">
      {keyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center">
          {row.map((key) => (
            <KeyButton
              key={key.code}
              keyCode={key.code}
              label={key.label}
              isPressed={pressedKeys.has(key.code)}
              className={`
                ${key.wide ? "min-w-16" : ""}
                ${key.extraWide ? "min-w-48" : ""}
              `}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WindowsKeyboard;
