const UserProfileCard = ({ userData }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "var(--white)",
        padding: "1rem 2.3rem 1rem 1.6rem",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--lighter-gray)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--white)")
      }
    >
      <div
        style={{
          gap: "1.1rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            left: "2.98rem",
            width: "0.8rem",
            height: "0.8rem",
            bottom: "0.3rem",
            position: "absolute",
            borderRadius: "10rem",
            backgroundColor: userData?.isActive
              ? "var(--green)"
              : userData?.lastActive < 5
              ? "var(--yellow)"
              : "var(--gray)",
            border: "0.1rem solid var(--white)",
          }}
        />
        <img
          width={60}
          height={60}
          src={userData?.imageUrl}
          alt="user profile"
          style={{ borderRadius: "10rem" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
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
