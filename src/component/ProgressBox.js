import React from 'react'

const ProgressBox = ({ name, className, court, matchNumber, time }) => {
  return (
    <div>
        <h4>🟢 <span className="user">{name}</span>님의 다음 경기</h4>
        <div className="progress-game">
          <p className="class">[{className}]</p>
          <p className="game">{court}코트 {matchNumber}번 경기 ({time})</p>
        </div>
    </div>
  )
}

export default ProgressBox