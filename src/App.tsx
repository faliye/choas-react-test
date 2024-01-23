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

const data = new Array(100).fill(1).map((item, index) => {
  return [
    { key: 'ア', value: index },
    { key: 'イ', value: index },
    { key: 'ウ', value: index },
    { key: 'エ', value: index },
    { key: 'エア', value: index },
    { key: 'エアア', value: index },
    { key: 'エアオ', value: index },
  ]
});


function App() {
  return (
    <div>
      <Table
        data={data}
        columns={columns}
        width={500}
        renderTFooter={(data, columns) => {
          return (
            <>
              <tr className='abc' onClick={console.log}>
                <td>会計：</td>
                <td colSpan={4}>
                  {
                    data.reduce((a, c) => {
                      return a + c.reduce((f, g) => f + g.value, 0);
                    }, 0)
                  }
                </td>
              </tr>
              <tr>
              <td colSpan={1}>製表日：</td>
                <td colSpan={4}>
                  令和６年１月23日
                </td>
              </tr>
            </>
          )
        }}
      />
    </div>
  );
}

export default App;
