function Table({ tableData }) {

  const mapTable = tableData.map((row) => {
    return (
      <tr key={row.id}>
        {/* <td>{}</td> */}
        <td>{row.name}</td>
        <td>{row.address}</td>
        <td>{row.email}</td>
        <td>{row.number}</td>
        <td>{row.gender}</td>
        <td>{row.city}</td>
      </tr>
    );
  })

  return (
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>City</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {mapTable}
        </tbody>
      </table>
  );
}

export default Table;
