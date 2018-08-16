import { Input } from 'antd';

const Search = Input.Search;

const Searchbar =() =>(


 
    
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="small"
      onSearch={value => console.log(value)}
   />
 
  )

  export default Searchbar