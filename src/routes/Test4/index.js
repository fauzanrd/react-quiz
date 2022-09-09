import { useState } from 'react';
import Input from './Input';
import Table from './Table';
import DATA from './_data';

const Test4 = () => {
  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>
          Please filter the table by name search (after press enter or click
          search button)
        </li>
      </ul>
      <Input onKeywordChange={setSearchKeyword} />
      <div>
        <Table searchKeyword={searchKeyword} />
      </div>
    </div>
  );
};

export default Test4;
