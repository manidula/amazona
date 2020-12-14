import React from "react";
import MessageBox from "./common/MessageBox";

export default function DefaultPage() {
  return (
    <>
      <MessageBox message="Oops! Page not found." variant="danger" />
    </>
  );
}
