import React from "react";
import "./footer.css";

// set the footer with copyright and github link
const Footer = props => (
  <div className="footer">
    <p class="text-muted text-center">Copyright &copy; 2019 | Made <i class="icon-heart" aria-hidden="true" style={{ color: "#9400D3" }}></i> by <a href="https://github.com/ChereeNielson" target="_blank" rel="noreferrer noopener" id="#">Cheree Nielson</a></p>
  </div>
);

export default Footer;