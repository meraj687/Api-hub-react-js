import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'

function Jokes() {
  const [users, setUsers] = useState([])

  const loadUser = async () => {
    const result = await axios.get(
      'https://official-joke-api.appspot.com/jokes/programming/random'
    )
    console.log(result.data)
    setUsers(result.data[0])
  }

  useEffect(() => {
    loadUser()
  }, [])
  return (
    <>
      {/* <h1 style={{ textAlign: 'center' }}>Jokes</h1>
      <div
        className='container'
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p>Type : {users.type}</p>
        <p>Setup : {users.setup}</p>
        <p>Punchline : {users.punchline}</p>
      </div> */}
      <Table striped bordered hover size='sm' responsive>
        <thead className='neon'>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Setup</th>
            <th>Punchline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{users.id}</td>
            <td>{users.type}</td>
            <td>{users.setup}</td>
            <td>{users.punchline}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Jokes
