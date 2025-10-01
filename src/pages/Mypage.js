import React from 'react'
import Profile from '../component/Profile'
import icoAvatar from "../assets/ico_mypage.png"
import ContestResult from '../component/ContestResult'
import MenuList from '../component/MenuList'

const Mypage = () => {
  const user = {
    name: "한지원",
    gender: "여",
    age: 20,
    level: "D",
    region: "서울 강서구",
    club: "OO클럽",
    avatar: icoAvatar
  }

  const menuItems = [
    "내 목표 관리",
    "내 경기 기록",
    "출전 대회 리스트",
    "계정 정보 수정",
    "앱 설정",
    "로그아웃"
  ];

  return (
    <section>
       <Profile user={user} />
       <ContestResult 
          total={5}
          game={18}
          per="66.7"
          prize={3}
          win={1}
        />
        <MenuList items={menuItems} />
    </section>
  )
}

export default Mypage