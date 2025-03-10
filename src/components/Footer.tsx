import { Component } from 'solid-js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: Component = () => {
  return (
    <footer class="footer bg-light text-center py-3" style={{ 'font-family': 'Arial, sans-serif', position: 'fixed', bottom: '0', width: '100%' }}>
      <div class="container d-flex justify-content-center align-items-center" style={{ height: '100%', 'padding-bottom': '10px' }}>
        <p class="fw-normal">© 2025 みりー(Miry). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
