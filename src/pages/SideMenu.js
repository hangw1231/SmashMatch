import React, { useState } from 'react'

const SideMenu = () => {
  const [active, setActive] = useState(0);

  const tabs = ["대회", "커뮤니티"];
  const items = [
    [
      "대회 리스트",
      "대회 진행 현황",
      "대회 알림",
      "관심팀 보기",
      "지난 경기 보기",
      "대회 라이브 시청법"
    ],
    [
      { title: "클럽", list: ["클럽 리스트", "클럽 홍보"] },
      { title: "소모임", list: ["소모임 리스트", "소모임 홍보", "소모임 만들기"] },
      { title: "선수", list: ["선수 랭킹", "선수 조회", "친구 초대"] }
    ]
  ];

  return (
    <div className="sideMenu">
      <section className="side-tabs">
        <div className="side-tablist">
          {tabs.map((label, i) => (
            <button
              key={i}
              type="button"
              className={`side-tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="side-tabpanel">
          {active === 0 ? (
            <ul className="menu-list">
              {items[0].map((item, idx) => (
                <li key={idx} className="menu-item">
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="menu-group">
              {items[1].map((group, gIdx) => (
                <div key={gIdx} className="menu-section">
                  <h4>{group.title}</h4>
                  <ul className="menu-list">
                    {group.list.map((item, idx) => (
                      <li key={idx} className="menu-item">
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="help-links">
          <p>도움말</p>
          <p>고객센터</p>
        </div>
      </section>
    </div>
  )
}

export default SideMenu
