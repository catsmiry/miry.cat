import { Component } from 'solid-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';

const Header: Component = () => {
  return (
    <header class="navbar navbar-expand-lg navbar-light bg-light" style={{ 'font-family': 'Arial, sans-serif' }}>
      <div class="container-fluid">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <img src="https://avatars.githubusercontent.com/u/186817830?v=4" alt="Miry Icon" width="30" height="30" class="logo" />
          <span class="site-title ms-2 fw-bold">みりーのねこ通信</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active fw-normal" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active fw-normal" href="/flash">Flash</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
