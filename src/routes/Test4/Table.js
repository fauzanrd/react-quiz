import DATA from './_data';

const Table = ({ searchKeyword = '' }) => {
  const displayData = DATA.filter(
    ({ name }) => (name || '').indexOf(searchKeyword) !== -1
  );

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
        {displayData.map(({ name, age, address }, idx) => (
          <tr key={idx + name + address}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
