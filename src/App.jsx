import { useState } from 'react';
import './App.css'; // นำเข้าไฟล์ CSS


const PigGame = () => {
  const [level, setLevel] = useState(0);
  const [pigImage, setPigImage] = useState('src/05.jpg'); // รูปหมูปกติ
  const maxSize = 500; // ขนาดสูงสุดของรูปภาพ

  const increaseLevel = (amount) => {
    const newLevel = level + amount;
    setLevel(newLevel);

    // เปลี่ยนรูปภาพเมื่อ Level มากกว่า 100
    if (newLevel >= 100) {
      setPigImage('src/3368.jpg'); // เปลี่ยนเป็นรูปหมูใหม่
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
