import {Menu } from 'antd';

const Headerbar = () =>(
<Header><div className="header" >
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="product">
          <h3>Product</h3>
        </Menu.Item>
        <Menu.Item key="About">
          <h3>About</h3>
        </Menu.Item>
      </Menu>
      </div>
      </Header>
      
    )

    export default Headerbar


