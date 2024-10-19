// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-400">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} LSFilm. All rights reserved.
        </p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
