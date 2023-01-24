import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
      )
}

const TableBody = (propsi) => {
    console.log('Testing');
    console.log(propsi.characterDataFromTable);
    console.log(typeof propsi.characterDataFromTable);

    const {myName} = propsi
    console.log(myName)

    const rows = propsi.characterDataFromTable.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.firstName}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => propsi.removeCharacterFromTable(index)}>Delete</button>
          </td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => {

  const { characterDataFromApp, removeCharacterFromApp } = props

  console.log('Table - Simple Component');
  console.log({characterDataFromApp});
  console.log({removeCharacterFromApp})

  return (
    <table>
      <TableHeader />
      <TableBody characterDataFromTable={characterDataFromApp} removeCharacterFromTable={removeCharacterFromApp} />
    </table>
  )
}

export default Table