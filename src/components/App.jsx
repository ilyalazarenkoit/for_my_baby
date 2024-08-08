import "./App.css";
import Photos from "./files/Photos";
import React, { useEffect, useRef, useState } from "react";
import Rebus from "./files/Rebus";
function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.muted = false;
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener("click", handleUserInteraction);
    // window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      // window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="App">
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/music/40394906.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает воспроизведение аудио.
      </audio>

      <div className="hero">
        <h1>Кись кись кисюня, с полугодием тебя, моя любимая !</h1>
        <h1>❤️❤️❤️</h1>
      </div>
      <div className="message">
        <div>Кликни разочек куда нибудь, дорогая 😻</div>
      </div>
      <Photos />
      <Rebus />
      <div className="footer">Я тебя очень люблю 💌</div>
      <div style={{ width: "1000px", margin: "auto" }}>
        Зайчонок мой любимый. Ты моя кись кись кисюня, мур мур мур мурка !❤️
        <br></br> Если ты помнишь, любимая, мы с тобой обсуждали когда то тему,
        почему я никого никогда не любил. Раньше я боялся любить. Раньше я
        переживал что это станет моей слабостью, уязвимостью.Но сейчас я
        понимаю, что ты источник моей силы и моя опора.Я понимаю что сейчас,
        ближе чем ты у меня человека нет. Другого такого человека которого я бы
        так сильно любил и кому я бы так сильно доверял как тебе. Ты моя
        мотивация, моя искра, которая умеет запаливать пламя внутри меня,
        которое приводит мой внутренний двигатель в движение.Сейчас мы с тобой
        стоим на пороге действительно значительных изменений в нашей жизни.И я
        рад что ты в этот период рядом со мной и мы можем вместе наслаждаться
        этим. Совсем скоро ты приедешь ко мне. Мы будем вместе двигаться с тобой
        к нашей общей цели - развиться тут и стать богатыми. Не буду лукавить,
        на пути у нас может возникать множество проблем и трудностей. Но я с
        уверенностью могу сказать что мы все преодолеем💪🏻✨ <br />
        Я уверен, что у нас все получиться и удача будет на нашей стороне
        <br /> Ведь везет тем - кто везет!💙 <br />Я тебя очень сильно люблю моя
        кись кись кисюня, мур мур мур мурка!😻 <br /> Лавкаю + чмавкаю💕 <br />
      </div>
    </div>
  );
}

export default App;
