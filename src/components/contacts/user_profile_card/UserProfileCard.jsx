import "./UserProfileCard.css";

const UserProfileCard = ({ userData }) => {
  return (
    <div className="user-profile-card-main">
      <div className="user-profile-card-right">
        <div
          className={`user-profile-card-status ${
            userData?.isActive
              ? "active"
              : userData?.lastActive < 5
              ? "inactive"
              : ""
          }`}
        />
        <img
          width={60}
          height={60}
          alt="user profile"
          src={userData?.imageUrl}
          style={{ borderRadius: "10rem" }}
        />
        <div className="user-profile-card-name">
          <span>{userData?.name || "Dave Peterson"}</span>
          <span style={{ color: "var(--silver)" }}>
            {" "}
            {userData?.isActive
              ? "Active now"
              : `Active ${userData?.lastActive} days ago`}
          </span>
        </div>
      </div>
      <div>
        <span style={{ color: "var(--silver)" }}>
          {userData?.isOwnTeam
            ? "Team"
            : userData?.isMember
            ? "Member"
            : "Default"}
        </span>
      </div>
    </div>
  );
};

export default UserProfileCard;
