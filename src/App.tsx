import React from 'react';
import { Table } from 'choas-react';

const columns = [
  { key: 'ア', title: 'ア', rowSpan: 3 },
  { key: 'イ', title: 'イ', rowSpan: 3 },
  { key: 'ウ', title: 'ウ', rowSpan: 3 },
  {
    key: 'エ', title: 'エ', colSpan: 2,
    children: [
      {
        key: 'エア', title: 'エア', colSpan: 2,
        children: [
          { key: 'エアア', title: 'エアア' },
          { key: 'エアオ', title: 'エアオ' }
        ]
      }
    ]
  },
];

const data = [
  { key: 'ア', value: '1' },
  { key: 'イ', value: '2' },
  { key: 'ウ', value: '3' },
  { key: 'エ', value: '4' },
  { key: 'エア', value: '41' },
  { key: 'エアア', value: '4111' },
  { key: 'エアオ', value: '412' },
];


function App() {
  return (
    <div>
      <Table
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
