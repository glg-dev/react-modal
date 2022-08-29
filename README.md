# react-modal plugin

A library of React components created using `create-react-app`.

## Installation

Run the following command:```npm install @glg-dev/react-modal```

## How to use

```
import React, { useState } from 'react';
import { Modal } from "@glg-dev/react-modal";

const App = () => {

  const [display, setDisplay] = useState(false)
  const yourTitle = "Write your title"
  cont message = "Your message here

  return (
    <div>
      <button onClick={() => setDisplay(true)}>
        Show modal
      </button>
      <Modal 
        title={yourTitle} 
        content={message} 
        hideModal={() => setDisplay(false)}
        visible={display}
      />

    </div>
  );
};

export default App;
```

## How to custom
If you want add your own style, copy and edit the following snippet:
```
body {
  --modal-font-family: sans-serif;
  --modal-wrapper-bg: rgba(0, 0, 0, 0.7);
  --modal-container-bg: #FFF;
  --modal-container-border-radius: 1rem;
  --modal-close-button-color: black;
  --modal-content-font-size: 1.5rem;
}
```