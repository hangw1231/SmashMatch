import { useState, useEffect } from 'react';
import ProgressBox from './ProgressBox';
import { Link } from 'react-router-dom';

const NowGame = ({ c }) => {
  const [nextGame, setNextGame] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setNextGame({
        name: "한지원",
        className: "여복_20_D : 예선 3조",
        court: 4,
        matchNumber: 21,
        time: "13:30"
      })
    }, 700)
  }, [])

  if (!nextGame) {
    return <p style={{
      display: "inline-block",
      margin: "70px auto 30px",
      padding: "10px",
      boxSizing: "border-box",
      background: "var(--bg-card)",
      borderRadius: "var(--radius2)",
      textAlign: "center"
    }}>
      경기 불러오는 중...
    </p>
  }

  return (
    <Link to='/game'>
      <div className="card contest">
        <span className="status now">진행중</span><span className="status join">참가대회</span>
        <figure>
          <img src={c.img} alt={c.title} />
        </figure>
        <h3 className="title">{c.title}</h3>
        <p className="place">📍 {c.place}</p>
        <p className="date">🗓️ {c.date}</p>
        <div className="progress-box">
          <ProgressBox {...nextGame} />
        </div>
      </div>
    </Link>
  )
}

export default NowGame