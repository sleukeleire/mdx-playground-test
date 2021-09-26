import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Playground from 'component-playground';

const scope = { React, useState };
const code = `<React.Fragment>
  {(() => {
    const MyComponent = () => {
      const [value, setValue] = useState('');
      return (
        <div style={{ padding: '20px', fontWeight: 700 }}>
          <input value={value} placeholder="Type something!" onChange={(e) => setValue(e.target.value)} />
          <input type="submit" value="Submit" onClick={(e) => { e.preventDefault; alert('submit this value: ' + value); }} />
        </div>
      );
    };
    return <MyComponent />;
  })()}
</React.Fragment>`;

const Something = () => {
  return <Playground codeText={code} scope={scope} />;
};

Something.propTypes = {
  // name: PropTypes.string.isRequired,
};

export default Something;


{/* <React.Fragment>
  {(() => {
    const MyComponent = () => {
      const [value, setValue] = useState('');
      return (
        <div style={{ padding: '20px', fontWeight: 700 }}>
          <input value={value} placeholder="Type something!" onChange={(e) => setValue(e.target.value)} />
          <input type="submit" value="Submit" onClick={(e) => { e.preventDefault; alert('submit this value: ' + value); }} />
        </div>
      );
    };
    return <MyComponent />;
  })()}
</React.Fragment> */}