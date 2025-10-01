import React from "react";

const ContestList = ({ c = [] }) => {
    const titleOf = (id) => c.find(c => c.id === id)?.title || '';

    const IDS = {
        now: 1, // 진행중
        plan1: 2, // 대회예정
        plan2: 3,  // 대회예정
        plan3: 4, // 대회예정
        done: 21,  // 대회종료
    };

    return (
        <section className="contest-section">
            <div className="title-area">
                <h2>대회 목록</h2>
                <a href="#">더보기 &gt;</a>
            </div>

            <ul className="contest-list">
                <li className="contest-item">
                    <span className="status now">진행중</span>
                    <span className="contest-title">{titleOf(IDS.now)}</span>
                </li>
                <li className="contest-item">
                    <span className="status plan">대회예정</span>
                    <span className="contest-title">{titleOf(IDS.plan1)}</span>
                </li>
                <li className="contest-item">
                    <span className="status plan">대회예정</span>
                    <span className="contest-title">{titleOf(IDS.plan2)}</span>
                </li>
                <li className="contest-item">
                    <span className="status plan">대회예정</span>
                    <span className="contest-title">{titleOf(IDS.plan3)}</span>
                </li>
                <li className="contest-item">
                    <span className="status done">대회종료</span>
                    <span className="contest-title">{titleOf(IDS.done)}</span>
                </li>
            </ul>
        </section>
    )
}

export default ContestList