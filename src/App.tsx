import React, { useState } from 'react';

import './App.css';

import {
  beta_Button as Button,
  AppletIcon,
  canvas
} from '@workday/canvas-kit-react';

import {anniversariesIcon} from '@workday/canvas-applet-icons-web';

const App: React.FC = () => {
  const [wobbling, setWobbling] = useState(true);

  const clearWobbling = () => { setWobbling(false); }

  return (
    <div className="App">
      <AppletIcon
        className={wobbling ? "wobble-hor-bottom" : ""}
        onAnimationEnd={clearWobbling}
        size={128}
        icon={anniversariesIcon}
      />
      <Button buttonType={Button.Types.Primary} onClick={() => setWobbling(true)}>We're Live!*</Button>
    </div>
  );
}

export default App;
