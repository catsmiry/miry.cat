import { Component } from 'solid-js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Title } from '@solidjs/meta';

export default function Flash() {
  return (
    <>
      <Title>Flash 置き場 - みりーのねこ通信</Title>
      <Header />
      <FlashContent />
      <Footer />
    </>
  );
}

const FlashContent: Component = () => {
  const playFlash = (swfPath: string) => {
    const container = document.querySelector('.container') as HTMLElement;
    container.style.display = 'none';

    const ruffle = (window as any).RufflePlayer.newest();
    const player = ruffle.createPlayer();

    const flashContainer = document.getElementById("flashContent") as HTMLElement;
    flashContainer.style.display = 'block';
    flashContainer.innerHTML = "";
    flashContainer.appendChild(player);

    const deviceWidth = document.body.clientWidth;
    const playerWidth = deviceWidth > 600 ? 600 : deviceWidth * 0.9;
    const playerHeight = playerWidth * 0.75;

    player.style.width = playerWidth + "px";
    player.style.height = playerHeight + "px";

    player.load(swfPath);
  };

  return (
    <>
      <div class="container">
        <div class="content">
          <h2>Flash 置き場</h2>
          <p><a href="#" onClick={() => playFlash('/assets/swf/me.swf')}>とらぶるうぃんどうず</a></p>
          <p><a href="#" onClick={() => playFlash('/assets/swf/ospittan.swf')}>OSぴったん</a></p>
          <p><a href="#" onClick={() => playFlash('/assets/swf/sazae1.swf')}>必殺サザエさん</a></p>
          <p><a href="#" onClick={() => playFlash('/assets/swf/fujiko.swf')}>実戦!qあwせdrftgyふじこlp講座</a></p>
          <p><a href="#" onClick={() => playFlash('/assets/swf/peri-yoshinoya.swf')}>ペリーの吉野家</a></p>
        </div>
      </div>
      <div id="flashContent" style={{ display: 'none', 'text-align': 'center', 'margin-top': '100px' }}></div>
      <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
    </>
  );
};

export { FlashContent };
