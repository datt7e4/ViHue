import React from "react";

function BackgroundDiv(props) {
  const styles = {
    // width: "33.33%",
    height: "100%",
    flexGrow: "1",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${props.image}")`,
  };
  return <div style={styles} />;
}

export default BackgroundDiv;
