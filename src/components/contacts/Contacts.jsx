import { useEffect, useState } from "react";

import { Divider, Button, Loader } from "@mantine/core";

import { CustomInput } from "./custom_input";
import { CustomControl } from "./custom_control";
import { UserProfileCard } from "./user_profile_card";

import "./Contacts.css";

const Contacts = ({ userList }) => {
  const [searchText, setSearchText] = useState("");

  const [selectedTab, setSelectedTab] = useState("all");

  const memberCount = {
    all: userList?.length || 0,
    teams: userList?.filter((item) => item.isOwnTeam)?.length || 0,
    members: userList?.filter((item) => item.isMember)?.length || 0,
  };

  return (
    <div className="contacts-main-container">
      <CustomInput text={searchText} setText={setSearchText} />
      <Divider />
      <CustomControl
        count={memberCount}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Divider />
      <div
        style={{
          height: "25rem",
          maxHeight: "25rem",
          overflowX: "scroll",
        }}
      >
        <UserProfileCard />
      </div>
      <Divider />
      <div
        style={{
          gap: "1.4rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: "1.4rem 2.3rem 1.4rem 0",
        }}
      >
        <Button
          size="sm"
          variant="outline"
          onMouseUp={() => alert("You pressed cancel")}
          style={{ width: "7rem", borderRadius: "0.6rem", fontWeight: "500" }}
        >
          Cancel
        </Button>
        <Button
          size="sm"
          onMouseUp={() => alert("You pressed invite")}
          style={{ width: "7rem", borderRadius: "0.6rem", fontWeight: "500" }}
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
