import { useState, useEffect } from 'react'

const ApplyContest = () => {
    const [applyContest, setApplyContest] = useState(null);

    useEffect(() => {
        fetch("/db.json")
            .then((r) => r.json())
            .then((data) => {
                const list = data?.contest || data?.contests || [];
                const found = list.find((c) => String(c.id) === "2");
                setApplyContest(found || null);
            })
            .catch((err) => console.error("대회 정보를 불러오지 못했어요.", err));
    }, []);

    const buildRange = (c) => {
        if (!c) return "";
        const start = c.startDate || c.start || c.begin;
        const end = c.endDate || c.end || c.finish;
        if (start || end) {
            return [start, end].filter(Boolean).join(" ~ ");
        }
        return c.dateRange || c.date || "";
    };
    return (
        <section className="apply-section">
            <div className="title-area">
                <h2>대회 신청 내역</h2>
                <a href="#">전체보기 &gt;</a>
            </div>

            {applyContest ? (
                <div className="card apply">
                    <div className="title-area">
                        <span className="status apply">신청완료</span>
                        <a href="#">대회 모집요강 &gt;</a>
                    </div>
                    <h3 className="title">🏆 {applyContest.title}</h3>
                    {applyContest.place && <p className="place">📍 {applyContest.place}</p>}
                    <p className="date">🗓️ {buildRange(applyContest)}</p>
                    <p className="apply">신청일: {applyContest.apply}</p>
                </div>
            ) : (
                <div className="card apply">
                    <p className="no-event">신청한 대회가 없습니다.</p>
                </div>
            )}
        </section>
    )
}

export default ApplyContest