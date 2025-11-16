import { useState } from "react";

interface FolderAnimationProps {
  onOpen: () => void;
}

const FolderAnimation = ({ onOpen }: FolderAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        isOpening ? "pointer-events-none opacity-0" : ""
      }`}
    >
      <div
        onClick={handleClick}
        className={`cursor-pointer transition-all duration-500 ${
          isOpening ? "animate-folder-open" : "hover:scale-110"
        }`}
      >
        <img
          src="https://www.macworld.com/wp-content/uploads/2023/12/folder-icon-macos.png?w=1024"
          alt="folder"
          className="w-48 h-auto md:w-56 lg:w-64"
        />
      </div>
      <div className="mt-6 text-xl font-medium text-apple-gray-5 animate-pulse">
        click me
      </div>
    </div>
  );
};

export default FolderAnimation;
