import React, { useState, useEffect } from 'react';
import '../App.css';
import NowGame from '../component/NowGame';
import ContestList from '../component/ContestList';
import Result from '../component/Result';
import Ad from '../component/Ad'

const Home = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        fetch('process.env.PUBLIC_URL/db.json')
            .then(r => r.json())
            .then(data => setContests(data.contest || []))
            .catch(console.error);
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {contests.length > 0 ? (
                <>
                    <NowGame c={contests[0]} />
                    <ContestList c={contests} />
                </>
            ) : (
                <p>로딩중...</p>
            )}
            <Result />
            <Ad />
        </div>
    )
}

export default Home
