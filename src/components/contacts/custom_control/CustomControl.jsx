import { SegmentedControl } from "@mantine/core";
import { useState } from "react";

const CustomControl = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const controlItem = (label, total, isSelected) => (
    <>
      <div
        style={{
          gap: "0.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "0.8rem",
          color: isSelected ? "var(--blue)" : "var(--silver)",
        }}
      >
        <span>{label}</span>
        <span
          style={{
            padding: "0 0.3rem",
            borderRadius: "0.3rem",
            backgroundColor: "var(--lighter-gray)",
          }}
        >
          {total}
        </span>
      </div>
      <div
        style={{
          height: "0.15rem",
          backgroundColor: isSelected ? "var(--blue)" : "transparent",
        }}
      />
    </>
  );

  return (
    <div style={{ padding: "0rem 1rem", marginTop: "0.4rem" }}>
      <SegmentedControl
        color="var(--white)"
        value={selectedOption}
        onChange={setSelectedOption}
        style={{
          border: "none",
          marginBottom: "0",
          paddingBottom: "0",
          backgroundColor: "var(--white)",
        }}
        data={[
          {
            value: "all",
            label: controlItem(
              "All",
              24,
              selectedOption === "all" ? true : false
            ),
          },
          {
            value: "teams",
            label: controlItem(
              "Teams",
              24,
              selectedOption === "teams" ? true : false
            ),
          },
          {
            value: "members",
            label: controlItem(
              "Members",
              24,
              selectedOption === "members" ? true : false
            ),
          },
        ]}
      />
    </div>
  );
};

export default CustomControl;
