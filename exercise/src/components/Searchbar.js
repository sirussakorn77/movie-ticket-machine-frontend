import { Input } from 'antd';

const Search = Input.Search;

const Searchbar =() =>(


  <div>
    
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="small"
      onSearch={value => console.log(value)}
   />
  </div>
  )

  export default Searchbar