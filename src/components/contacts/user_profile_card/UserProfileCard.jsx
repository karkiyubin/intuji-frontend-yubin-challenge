import UserImage from "../../../../public/user.jpeg";

const UserProfileCard = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem 0",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "var(--white)",
      }}
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
            backgroundColor: "var(--green)",
            border: "0.1rem solid var(--white)",
          }}
        />
        <img
          width={60}
          height={60}
          src={UserImage}
          alt="user profile"
          style={{ borderRadius: "10rem" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Dave Peterson</span>
          <span style={{ color: "var(--silver)" }}>Active 8 days ago</span>
        </div>
      </div>
      <div>
        <span style={{ color: "var(--silver)" }}>Team</span>
      </div>
    </div>
  );
};

export default UserProfileCard;
