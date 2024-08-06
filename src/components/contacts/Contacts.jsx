import { Divider } from "@mantine/core";

import { CustomInput } from "./custom_input";
import { CustomControl } from "./custom_control";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-main-container">
      <CustomInput />
      <Divider />
      <CustomControl />
      <Divider />
    </div>
  );
};

export default Contacts;
