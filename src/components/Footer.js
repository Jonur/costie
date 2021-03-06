import React from 'react';

const Footer = () => {
  const year = (new Date()).getFullYear();

  return (
    <footer>
      &copy;{year} - <a rel="noopener noreferrer" target="_blank" href="https://github.com/Jonur">Jonur</a> - <a rel="noopener noreferrer" target="_blank" href="https://github.com/Jonur/costie/blob/master/PrivacyPolicy.md">Privacy Policy</a>
    </footer>
  );

};

export default Footer;