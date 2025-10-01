import React from 'react'
import Summary from '../component/Summary'
import FitnessRecord from '../component/FitnessRecord'
import icoBadminton from '../assets/ico_badminton.png'
import icoRunning from '../assets/ico_running.png'

const Fitness = () => {
  return (
    <div>
      <Summary />
      <FitnessRecord
        img={icoBadminton}
        title="배드민턴"
        date="2025.09.26 오후 7:00"
        time="2:43:42"
        calories={505}
        memo="여복 게임 위주로 운동함."
      />
      <FitnessRecord
        img={icoRunning}
        title="러닝"
        date="2025.09.22 오후 9:12"
        time="0:24:41"
        distance="4.22km"
        calories={191}
        pace="5’51”/km"
        memo="서울식물원 야간 러닝"
      />
    </div>
  )
}

export default Fitness