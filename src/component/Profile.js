import React from 'react'

const Profile = ({ user }) => {
    const meta = `${user.gender}/${user.age}/${user.level}`;
    const clubLine = `${user.region}/${user.club}`;

    return (
        <div className="card profile">
            <div className=" ">
                {user.avatar ? (
                    <img src={user.avatar} alt={`${user.name} 프로필 이미지`} />
                ) : (
                    <span className="avatar-icon" aria-hidden="true">👤</span>
                )}
            </div>
            <div className="info">
                <p><span className="name">{user.name}</span> <small className="meta">{meta}</small></p>
                <p className="sub">{clubLine}</p>
            </div>
            <button type="button" className="edit-btn">프로필 수정하기</button>
        </div>
    )
}

export default Profile