import { useEffect, useState } from "react";

import { Divider, Button, Loader } from "@mantine/core";

import { CustomInput } from "./custom_input";
import { CustomControl } from "./custom_control";
import { UserProfileCard } from "./user_profile_card";

import "./Contacts.css";

const Contacts = ({ userList }) => {
  const [searchText, setSearchText] = useState("");

  const [selectedTab, setSelectedTab] = useState("all");
  const [filteredUserList, setFilteredUserList] = useState(null);

  const memberCount = {
    all: userList?.length || 0,
    teams: userList?.filter((item) => item.isOwnTeam)?.length || 0,
    members: userList?.filter((item) => item.isMember)?.length || 0,
  };

  useEffect(() => {
    let filteredList = userList;

    if (selectedTab === "teams") {
      filteredList = filteredList?.filter((item) => item?.isOwnTeam);
    } else if (selectedTab === "members") {
      filteredList = filteredList?.filter((item) => item?.isMember);
    }

    if (searchText.length > 0) {
      filteredList = filteredList?.filter((item) =>
        item.name.toLowerCase().trim().includes(searchText)
      );
    }

    setFilteredUserList(filteredList);
  }, [selectedTab, userList, searchText]);

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
      <div className="contacts-user-card-container">
        {Array.isArray(userList) && userList.length > 0 ? (
          filteredUserList?.map((item, index) => (
            <UserProfileCard key={index} userData={item} />
          ))
        ) : (
          <div className="contacts-loader-container">
            <Loader />
          </div>
        )}
      </div>
      <Divider />
      <div className="contacts-footer-container">
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
