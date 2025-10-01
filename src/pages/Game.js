// src/pages/Game.js
import { useEffect, useState } from "react";
import presents01 from "../assets/presents01.png"
import presents02 from "../assets/presents02.png"
import presents03 from "../assets/presents03.png"
import presents04 from "../assets/presents04.png"

export default function Game() {
  // 1) 대회 데이터
  const [contest, setContest] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then(r => r.json())
      .then(data => {
        if (data.contest && data.contest.length > 0) {
          setContest(data.contest[0]); // 배열 첫 번째 값만 사용
        }
      })
      .catch(err => console.error("데이터 불러오기 실패:", err));
  }, []);

  // 2) 탭 메뉴 (대회요강만 실제 내용)
  const tabs = ["대회요강", "대진표", "경기시간", "참가클럽", "참가자", "단체순위", "입상자"];
  const [active, setActive] = useState(0); // 0 = 대회요강 (기본 탭)

  // 을/를 간단 처리
  const particle = (label) => {
    const ch = label[label.length - 1];
    const code = ch.charCodeAt(0);
    if (code < 0xac00 || code > 0xd7a3) return "를";
    const hasJong = (code - 0xac00) % 28 !== 0;
    return hasJong ? "을" : "를";
  };

  if (!contest) {
    return <p style={{ padding: 20 }}>대회 정보를 불러오는 중...</p>;
  }

  return (
    <main className="game-page">
      <button className="back" onClick={() => window.history.back()}>&lt; 뒤로가기</button>
      <div className="top-area">
        <span className="status now">진행중</span>
        <span className="status join">참가대회</span>
        <figure className="thumb">
          <img src={contest.img} alt={contest.title} />
        </figure>
      </div>

      <section className="tabs">
        <div className="tablist">
          {tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`tab ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="tabpanel">
          {active === 0 ? (
            <article className="rules">
              <div class="title-area">
                <h4>대회요강</h4>
                <a href="#">대회요강 PDF파일 다운로드 +</a>
              </div>
              <ul>
                <li>
                  <h4>대회명</h4>
                  <p>{contest.title}</p>
                </li>
                {contest.date && <li>
                  <h4>대회기간</h4>
                  {contest.date}
                </li>}
                {contest.place && <li>
                  <h4>대회장소</h4>
                  <p>{contest.place}</p>
                </li>}
                <li>
                  <h4>주최/주관</h4>
                  <p>&middot; 서울특별시 강서구체육회</p>
                  <p>&middot; 서울특별시 강서구배드민턴협회</p>
                </li>
                <li>
                  <h4>협찬</h4>
                  <p>라이더 / 테크니스트</p>
                </li>
                <li>
                  <h4>시상/경품</h4>
                  <p>&middot; 1등 상품: 라이더 신상보스턴 가방<br />
                    &middot; 2등 상품: 테크니스트 라켓 or 삼화블랙 셔틀콕<br />
                    &middot; 3등 상품: 라이더 고급파우치<br />
                    &middot; 4등 상품: 테크니스트 스포츠타월
                  </p>
                  <ul className="presents">
                    <li>
                      <img src={presents01} alt="1등 경품" />
                      <p>1등</p>
                    </li>
                    <li>
                      <img src={presents02} alt="2등 경품" />
                      <p>2등</p>
                    </li>
                    <li>
                      <img src={presents03} alt="3등 경품" />
                      <p>3등</p>
                    </li>
                    <li>
                      <img src={presents04} alt="4등 경품" />
                      <p>4등</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
          ) : (
            // 나머지 탭: 안내 문구
            <div className="notice">
              {tabs[active]}
              {particle(tabs[active])} 조회할 수 없습니다.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
