import React from 'react'
import resultGraph from '../assets/result_graph.png'

const Result = () => {
  return (
    <section className="result-section">
        <div className="title-area">
            <h2>최근 출전 경기 결과</h2>
            <a href="#">상세보기 &gt;</a>
        </div>
        <div className="card result">
            <img src={resultGraph} alt="제25회 성동구청장기배드민턴대회" />
            <div className="contest-area">
                <h4 className="title">제25회 성동구청장기배드민턴대회</h4>
                <ul>
                    <li>📊 참여한 경기 수 :  4경기</li>
                    <li>✅ 전적 : 3승 1패</li>
                    <li>🏅 입상 : 여복_20_D 3위</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Result