import React from 'react'

const FitnessRecord = ({ img, title, date, time, distance, calories, pace, memo }) => {
  return (
    <section>
        <div className="card record">
          <div className="title-area">
            <div className="record-title"> 
              <span className="record-icon"><img src={img} alt={title} /></span>
              <div>
                <h3>{title}</h3>
                <small className="record-date">{date}</small>
              </div>
            </div>
            <a href="#" className="record-all">모든 기록 보기 &gt;</a>
          </div>
          <div className="record-body">
            <div className="record-stats">
              {time && (
                <p>
                  <span className="label">운동 시간</span>
                  <span className="value time">{time}</span>
                </p>
              )}
              {distance && (
                <p>
                  <span className="label">거리</span>
                  <span className="value distance">{distance}</span>
                </p>
              )}
              {calories && (
                <p>
                  <span className="label">소모 칼로리</span>
                  <span className="value calories">{calories}kcal</span>
                </p>
              )}
              {pace && (
                <p>
                  <span className="label">평균 페이스</span>
                  <span className="value pace">{pace}</span>
                </p>
              )}
            </div>
          </div>
          {memo && (
            <div className="record-memo">
              <p>📝 메모</p>
              <span>{memo}</span>
            </div>
          )}
        </div>
    </section>
  )
}

export default FitnessRecord