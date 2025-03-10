import { Component } from 'solid-js';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: Component = () => {
  return (
    <>
      <Header />
      <div class="container">
        <div class="content">
          <h2>404 - ページが見つかりません</h2>
          <p>お探しのページは存在しないか、移動した可能性があります。</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
