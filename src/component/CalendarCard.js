import { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./reactCalendar.css";

const events = [
    {
        date: "2025-09-27",
        contest: "제35회 강서구청장기배드민턴대회",
        category: "여복_20_D",
        group: "예선 3조",
        time: "13:30",
        court: "4코트",
        match: "21번 경기",
        teamA: "위스매쉬",
        teamB: "하이콕",
    },
    {
        date: "2025-10-04",
        contest: "제12회 송파구청장기배드민턴대회",
        category: "혼복_20_D",
        group: "예선 5조",
        time: "08:00",
        court: "2코트",
        match: "8번 경기",
        teamA: "스매싱즈",
        teamB: "파워콕",
    },
];

const CalendarCard = () => {
    const [value, setValue] = useState(new Date(2025, 8, 27));

    const ymd = (d) => {
        const yy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${yy}-${mm}-${dd}`;
    };

    const selectedDate = ymd(value);
    const todayEvents = events.filter((e) => e.date === selectedDate);
    return (
        <div className="card calendar">
            <Calendar
                onChange={setValue}
                onClickDay={(d) => setValue(d)}
                value={value}
                locale="en"
                defaultActiveStartDate={new Date(2025, 8, 1)}
                formatMonthYear={(locale, date) =>
                    `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`
                }
                tileClassName={({ date, view }) =>
                    view === "month" && date.getDay() === 6 ? "is-sat" : undefined
                }
                tileContent={({ date, view }) => {
                    if (view === "month") {
                        const dateStr = ymd(date);
                        if (events.find(e => e.date === dateStr)) {
                            return <div className="dot"></div>;
                        }
                    }
                    return null;
                }}
            />

            {todayEvents.length > 0 ? (
                todayEvents.map((e, idx) => (
                    <div key={idx} className="event-card">
                        <div className="event-header">
                            <p>
                                TODAY <span className="contest-title">🏆 {e.contest}</span>
                            </p>
                        </div>
                        <div className="event-body">
                            <h4>한지원님의 다음 경기</h4>
                            <p>👯 {e.category} | {e.group}</p>
                            <div className="match-info">
                                <p className="time">
                                    {e.time} {e.court} {e.match}
                                </p>
                                <p>
                                    <b>TEAM {e.teamA}</b> VS <b>TEAM {e.teamB}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-event">선택된 날짜에는 경기가 없습니다.</p>
            )}
        </div>
    )
}

export default CalendarCard