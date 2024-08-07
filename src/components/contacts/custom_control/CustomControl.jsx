import { SegmentedControl } from "@mantine/core";

const CustomControl = ({ count, selectedTab, setSelectedTab }) => {
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
            width: "2rem",
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
        value={selectedTab}
        onChange={setSelectedTab}
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
              count.all || 0,
              selectedTab === "all" ? true : false
            ),
          },
          {
            value: "teams",
            label: controlItem(
              "Teams",
              count.teams || 0,
              selectedTab === "teams" ? true : false
            ),
          },
          {
            value: "members",
            label: controlItem(
              "Members",
              count.members || 0,
              selectedTab === "members" ? true : false
            ),
          },
        ]}
      />
    </div>
  );
};

export default CustomControl;
