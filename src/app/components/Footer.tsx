import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
