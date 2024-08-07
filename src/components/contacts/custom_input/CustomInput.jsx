import { Input } from "@mantine/core";

const CustomInput = ({ text, setText }) => {
  const crossIcon = (
    <i
      className="ri-close-line"
      style={{ fontSize: "1.3rem", cursor: "pointer", color: "var(--silver)" }}
      onClick={() => setText("")}
    />
  );

  const searchIcon = (
    <i
      className="ri-search-2-line"
      style={{ fontSize: "1.3rem", color: "var(--silver)" }}
    />
  );

  return (
    <div
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
      }}
    >
      <Input
        size="lg"
        variant="unstyled"
        value={text}
        leftSection={searchIcon}
        rightSection={crossIcon}
        placeholder="Search Contacts"
        rightSectionPointerEvents="all"
        onChange={(event) => setText(event.currentTarget.value.toLowerCase())}
      />
    </div>
  );
};

export default CustomInput;
