# react-modal plugin

A library of React components created using `create-react-app`.

## Installation

Run the following command:```npm install @glg-dev/react-modal```

## How to use

```
import React, { useState } from 'react';
import Modal from './lib/Modal'

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

