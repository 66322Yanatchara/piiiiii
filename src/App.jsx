import { useState } from 'react';
import './App.css'; // นำเข้าไฟล์ CSS


const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [pigImage, setPigImage] = useState('https://media.istockphoto.com/id/94973565/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AE%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%9B%E0%B8%AD%E0%B9%89%E0%B8%A7%E0%B8%99.jpg?s=1024x1024&w=is&k=20&c=lYhoVj2ka_wY9Jp0pILTtc0Mur40dvf6QDKa-PnmBG8='); // รูปหมูปกติ
  const maxSize = 500; // ขนาดสูงสุดของรูปภาพ

  const increaseLevel = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);

    // เปลี่ยนรูปภาพเมื่อ Level มากกว่า 100
    if (newLevel >= 100) {
      setPigImage('https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/363408800_953900489226712_4696951969968330867_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF8cIzh5VOoLKL5_VB2utFi50jZm1rtuRTnSNmbWu25FAgztwhLFdW_r4WEnhSwILSdAR71gWDjpxo4WLyT7uX5&_nc_ohc=r8fPP4cPkW8Q7kNvgEbNAhf&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Ana_SG3asw7RwR2OnxmweMB&oh=00_AYClSb0caLycXhLNA-uTaXYsFT8MhaRHoBqZrEm0YJGqRA&oe=670B20DF'); // เปลี่ยนเป็นรูปหมูใหม่
    }
  };

  // คำนวณขนาดของรูปภาพตาม Level
  const imageSize = Math.min(200 + level, maxSize);

  return (
    <div className="game-container">
      <h1 className="game-title">🦛 เกมเลี้ยงเลี้ยงฮิปโป 🦛</h1>

      {/* แสดงระดับ (Level) */}
      <p className="level-display">Level: {level}</p>

      {/* รูปภาพหมู */}
      <img
        src={pigImage}
        alt="Pig"
        className="pig-image"
        style={{
          width: `${imageSize}px`,
          height: `${imageSize}px`,
        }}
      />

      {/* ปุ่มสำหรับป้อนอาหาร */}
      <div className="button-group">
        <button className="food-button watermelon" onClick={() => increaseLevel(5)}>🍉 Watermelon +5</button>
        <button className="food-button pumpkin" onClick={() => increaseLevel(10)}>🎃 Pumpkin +10</button>
        <button className="food-button grass" onClick={() => increaseLevel(20)}>🌿 Grass +20</button>
      </div>
    </div>
  );
};

export default PigGame;
