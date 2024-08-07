import React from 'react';
import ReactDOM  from 'react-dom/client';
import {Demo, Demo1} from './Fun'
import Hello from './Hello';
import {Greet} from './Greet';
import {Myclass, Myclass1} from './Myclass';
import Message from './Message';
import './Messagecss.css';
import Counter from './Counter';
import Fun from './Destructing';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './Condition Rendering/UserGreeting';
import NameList from './Condition Rendering/NameList';
import NameList1 from './Condition Rendering/NameList1';

const x = document.getElementById('root');
const root = ReactDOM.createRoot(x);

root.render(

  <div className='demo1'>
    <NameList1 />
  </div>

  // <div className='demo'>
  //   <NameList />
  // </div>

  // <div>
  //   <UserGreeting />
  // </div>

  // <div className='demo'>
  //   <ParentComponent />
  // </div>

  //<div className='demo'>
    //<EventBind />
  //</div>

  // <div className='demo'>
  //   <Counter  />
  // </div>

  // <div className='demo'>
  //   <Fun fn="Anjna" ln="Jagatiya" />
  // </div>

  // <div className='demo'>
  //   <ClassClick />
  // </div>

  // <div className='demo'>
  //     <Message />
  // </div>
    
  // <React.StrictMode>
  //   <h3>Hello</h3>
  //   <Demo />
  //   <Demo1 />
  //   <Hello />

  //   <Greet name="Anjna">
  //     <h4>This is Children props.</h4>
  //   </Greet>

  //   <Greet name="Disha">
  //     <button>Action</button>
  //   </Greet>

  //   <Greet name="Divyesh">
  //     <h4>This is Children props.</h4>
  //   </Greet>

  //   <Myclass />
  //   <Myclass1 name="Anjna" />
  //   <Myclass1 name="Disha" />
  //   <Myclass1 name="Divyesh" />
  // </React.StrictMode>
);