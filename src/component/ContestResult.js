import React from 'react'
import icoTrophy from '../assets/ico_trophy.png'

const ContestResult = ({ total, game, per, prize, win }) => {
  return (
    <div className="card contest-result">
      <div className="result-body">
        <div className="ico-area"><img src={icoTrophy} alt="icon" /></div>
        <div className="result-grid">
          {total && (
            <p>
              <span className="label">총 대회 출전 수</span>
              <span className="value time">{total}회</span>
            </p>
          )}
          {game && (
            <p>
              <span className="label">총 경기 수</span>
              <span className="value distance">{game}경기</span>
            </p>
          )}
          {per && (
            <p>
              <span className="label">전체 승률</span>
              <span className="value calories">{per}%</span>
            </p>
          )}
          {prize && win && (
            <p>
              <span className="label">입상 횟수</span>
              <span className="value pace">{prize}회 <small>(우승 {win}회 포함)</small></span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContestResult