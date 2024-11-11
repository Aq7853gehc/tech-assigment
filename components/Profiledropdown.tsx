import { useState } from 'react';
import { FiUser, FiMapPin, FiPhone, FiInfo, FiLogOut, FiEdit2 } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <span className="text-white">user</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-black text-white border border-gray-700 rounded-lg shadow-lg z-50">
          {/* Close Button */}
          <div className="flex justify-end p-2">
            <button onClick={toggleDropdown}>
              <MdClose className="text-white text-xl" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center p-4">
            <div className="relative w-20 h-20 mb-2">
              <Image
                src="/images/infulencer/2.png" // Replace with your image path
                alt="Profile"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <button className="flex items-center space-x-1 text-xs text-green-400 hover:underline mb-2">
              <FiEdit2 className="text-green-400" />
              <span>Change Profile Picture</span>
            </button>
            <h3 className="text-lg font-semibold">Samira Hadid</h3>
            <p className="text-sm text-gray-400">@samirahadid</p>
          </div>

          {/* Menu Options */}
          <div className="p-4 space-y-3">
            <button className="flex items-center w-full text-left text-sm space-x-3 hover:text-gray-300">
              <FiUser />
              <span>Profile</span>
            </button>
            <button className="flex items-center w-full text-left text-sm space-x-3 hover:text-gray-300">
              <FiMapPin />
              <span>Address</span>
            </button>
            <button className="flex items-center w-full text-left text-sm space-x-3 hover:text-gray-300">
              <FiPhone />
              <span>Contact us</span>
            </button>
            <button className="flex items-center w-full text-left text-sm space-x-3 hover:text-gray-300">
              <FiInfo />
              <span>About us</span>
            </button>
          </div>

          {/* Logout Button */}
          <div className="p-4">
            <button className="flex items-center w-full text-left text-sm font-semibold text-white">
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
