import { Component } from 'solid-js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: Component = () => {
  return (
    <>
      <Header />
      <div class="container mt-4" style={{ 'font-family': 'Arial, sans-serif' }}>
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title fw-bold">About Me</h3>
            <p class="fw-normal">みりー（Miry）は、2024年10月17日に突如として現れた人物です。</p>
            <p class="fw-normal">Discord上で何度も「ねこ」と呼ばれた結果、今では「ねこの人」として知られています。そんな流れから、この「みりーのねこ通信」が誕生しました。</p>
            <p class="fw-normal">オンラインでは「ねこの人」として親しまれていますが、リアルではフルスタックエンジニアとして働いており、コードを書くことやシステム開発を得意としています。</p>
            <p class="fw-normal">また、オンラインでは 自分のなりたい姿で活動しています。</p>
            <p class="fw-normal">また、Reliwave(Reliwave P.S) という組織の代表でもあります。</p>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title fw-bold">Accounts</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="https://vocaloid.app/@m" target="_blank" class="d-flex align-items-center">
                  <img src="https://simpleicons.org/icons/misskey.svg" alt="Misskey" width="24" height="24" class="me-2" /> @m@vocaloid.app
                </a>
              </li>
              <li class="list-group-item">
                <a href="https://github.com/catsmiry" target="_blank" class="d-flex align-items-center">
                  <img src="https://simpleicons.org/icons/github.svg" alt="GitHub" width="24" height="24" class="me-2" /> @catsmiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
