import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import classNames from 'classnames';

import './index.scss';
// import testImgSrc from './test-img.jpg';
import MDXDocument /* , {metadata} */ from './test.mdx';

const App = () => {
  // const element = document.createElement('div');
  // element.innerHTML = 'Hello world!';
  // element.className = classNames('test-1', null, 'test-2');

  // const img = new Image();
  // img.src = testImgSrc;

  // element.appendChild(img);

  // console.log(metadata);

  return (
    <div className={classNames(undefined, 'test-1', null, 'test-2')}>
      {/* <img src={testImgSrc} alt="Testing!" /> */}
      <MDXDocument />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <div className={classNames(undefined, 'test-1', null, 'test-2')}>
//         {/* <img src={testImgSrc} alt="Testing!" /> */}
//         <MDXDocument />
//       </div>
//     );
//   }
// }

const HotApp = hot(module)(App);
// const HotApp = hot(module)(() => <App/>);

ReactDOM.render(<HotApp />, document.getElementById('root'));
