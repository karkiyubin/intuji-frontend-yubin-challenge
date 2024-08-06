import { useState } from "react";

import { Input } from "@mantine/core";

const CustomInput = () => {
  const [inputValue, setInputValue] = useState("");

  const crossIcon = (
    <i
      className="ri-close-line"
      style={{ fontSize: "1.3rem", cursor: "pointer", color: "var(--silver)" }}
      onClick={() => setInputValue("")}
    />
  );

  const searchIcon = (
    <i
      className="ri-search-2-line"
      style={{ fontSize: "1.3rem", color: "var(--silver)" }}
    />
  );

  return (
    <div style={{ padding: "0 1rem" }}>
      <Input
        size="lg"
        variant="unstyled"
        value={inputValue}
        leftSection={searchIcon}
        rightSection={crossIcon}
        placeholder="Search Contacts"
        rightSectionPointerEvents="all"
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default CustomInput;
