import { forwardRef, useImperativeHandle, useState } from 'react';
import DATA from './_data';

const Table = forwardRef((_, ref) => {
  const [filtered, setFiltered] = useState([...DATA]);

  const filterTable = (keyword) => {
    setFiltered(DATA.filter((row) => row.name.indexOf(keyword) !== -1));
  };

  useImperativeHandle(ref, () => ({ filterTable }));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((eachrow, idx) => (
          <tr key={idx}>
            <td>{eachrow.name}</td>
            <td>{eachrow.age}</td>
            <td>{eachrow.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default Table;
