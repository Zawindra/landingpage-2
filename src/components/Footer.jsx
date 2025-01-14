const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 relative" id="footer">
      <div className="container mx-auto flex justify-between flex-col md:flex-row gap-10 px-6">
        <div className="max-w-64">
          <h3 className="text-4xl font-bold mb-4">ArchiWeb</h3>
          <p className="text-gray-400">
            ArchiWeb is an architectural consultant based in Berlin, Germany. We provide solutions for your architecture and residential design.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Articles</h4>
          <ul className="text-gray-400">
            <li>7 Tips for Kids Friendly Interior design</li>
            <li>Smart Tips for Changing a Room Eco-friendly design</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Links</h4>
          <ul className="text-gray-400">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">Location</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603759823!2d13.259927885878023!3d52.50693861624993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sid!4v1736238286834!5m2!1sen!2sid" 
            width="300" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className="absolute bottom-4 left-20 flex space-x-4 mb-10 ml-20">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg className="w-8 h-8 text-white hover:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.95c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.55v1.85h2.79l-.45 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg className="w-8 h-8 text-white hover:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.15 6a4.52 4.52 0 00-.11 1.03A12.94 12.94 0 011 2s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-8 h-8 text-white hover:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6.013 4.85.07 1.17.056 1.99.24 2.45.51.5.28.89.67 1.17 1.17.27.46.45 1.27.5 2.45.06 1.26.07 1.66.07 4.85s-.013 3.6-.07 4.85c-.056 1.17-.24 1.99-.51 2.45-.28.5-.67.89-1.17 1.17-.46.27-1.27.45-2.45.5-1.26.06-1.66.07-4.85.07s-3.6-.013-4.85-.07c-1.17-.056-1.99-.24-2.45-.51-.5-.28-.89-.67-1.17-1.17-.27-.46-.45-1.27-.5-2.45C2.213 15.6 2.2 15.2 2.2 12s.013-3.6.07-4.85c.056-1.17.24-1.99.51-2.45.28-.5.67-.89 1.17-1.17.46-.27 1.27-.45 2.45-.5C8.4 2.213 8.8 2.2 12 2.2m0-2.2C8.4 0 8 0 6.73 0 5.48 0 4.38.09 3.46.28 2.12.56 1.02 1.37.22 2.7.06 3.62 0 4.72 0 6.73 0 8.4 0 8.8 0 12c0 3.2.06 3.6.22 4.85.18 1.3.99 2.4 2.25 3.25 1.07.66 2.44.98 3.98.98C8.8 24 12 24 12 24s3.2 0 4.85-.22c1.54-.19 2.91-.52 3.98-1.18 1.26-.85 2.07-1.95 2.25-3.25C24 15.6 24 15.2 24 12c0-3.2 0-3.6-.22-4.85-.18-1.3-.99-2.4-2.25-3.25-.96-.66-2.33-.99-3.98-.99C15.6 0 12 0 12 0z"/>
            <circle cx="12" cy="12" r="3.6"/>
          <circle cx="17.8" cy="6.2" r="1.2"/>
  </svg>
</a>

      </div>
    </footer>
  );
  
  };
  
  export default Footer;