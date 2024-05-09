import React, { useState, useEffect } from "react";
import Calendar from "./userbody/Calendar";
import AddEvent from "./userbody/AddEvent";

function UserBody({ isAddClicked, isSaveClicked, onSaveClicked }) {
  if (isAddClicked && !isSaveClicked) {
    return <AddEvent onSaveClicked={onSaveClicked} />;
  } else {
    return <Calendar />;
  }
}
export default UserBody;
