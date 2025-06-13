//import { useState } from 'react'

const Sts04 = () => {
  const sts = [
    {id: 1, name: "國井"},
    {id: 2, name: "田中"},
    {id: 3, name: "高橋"},
  ];

  return (
    <div>
      <h1>メンバー一覧</h1>
      <hr/>
      <table border="1">
        <tr>
          <th>ID</th><th>名前</th>
        </tr>
        {
          sts.map(member => {
              return (
                <tr>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                </tr>
              )
            }
          )
        }
      </table>
    </div>
  )
}

export default Sts04
