import React from 'react'

const Summary = () => {
    const sessions = 3
    const totalTime = "5:30"
    const calories = 2750
    return (
        <section className="summary-area">
            <div class="title-area">
                <h2>이번 주 운동 요약</h2>
                <a href="#">+ 월간 요약</a>
            </div>
            <div className="card summary">
                <div className="summary-stat">
                    <p className="summary-label">운동 횟수</p>
                    <div className="summary-valueBox">
                        <strong className="summary-value">{sessions}</strong>
                    </div>
                </div>

                <div className="summary-stat">
                    <p className="summary-label">총 시간</p>
                    <div className="summary-valueBox">
                        <strong className="summary-value">{totalTime}</strong>
                    </div>
                </div>

                <div className="summary-stat">
                    <p className="summary-label">소모 칼로리</p>
                    <div className="summary-valueBox">
                        <strong className="summary-value">
                            {calories.toLocaleString()}
                        </strong>
                        <span className="summary-unit">kcal</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary