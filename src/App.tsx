import React from 'react';
import Button from 'choas-react/src/Button';


function App() {
  return (
    <div>
      <div>
        <Button size='large' type='primary' className='abc'>123</Button>
        <Button size='large' type='danger' className='abc'>123</Button>
        <Button size='large' type='ghost' className='abc'>123</Button>
        <Button size='large' type='link' className='abc'>123</Button>
      </div>
      <br />
      <div>
        <Button type='primary' className='abc'>123</Button>
        <Button type='danger' className='abc'>123</Button>
        <Button type='ghost' className='abc'>123</Button>
        <Button type='link' className='abc'>123</Button>
      </div>
      <br />
      <div>
        <Button size='small' type='primary' className='abc'>123</Button>
        <Button size='small' type='danger' className='abc'>123</Button>
        <Button size='small' type='ghost' className='abc'>123</Button>
        <Button size='small' type='link' className='abc'>123</Button>
      </div>
      <br />
      <div>
        <Button type='primary' className='abc' block>123</Button>
        <br />
        <Button type='danger' className='abc' block>123</Button>
        <br />
        <Button type='ghost' className='abc' block>123</Button>
        <br />
        <Button type='link' className='abc' block>123</Button>
      </div>
    </div>
  );
}

export default App;
