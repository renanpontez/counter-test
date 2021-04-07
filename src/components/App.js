import React, { useState } from "react";
import Counter from "./Counter";

/*
Your Jira ticket says:
Fix counter so it can operate only in range from 0 to 1000.

You should prepare 'production ready code', the only requirement is that you have to use hooks.
Please make sure that logic of counter can be reused.
*/

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
