import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileSearchOutlined,
  LineChartOutlined,
  SolutionOutlined,
  TeamOutlined,
  AreaChartOutlined,
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, message, Space, Table, Tag } from 'antd';
import logo from '../assets/logo.png';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const { Header, Sider, Content } = Layout;

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e: any) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4th menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-container" style={{ padding: '16px 0', textAlign: 'center' }}>
          <img src={logo} alt="Breathe ESG Logo" className="logo" style={{ width: '20%' }} />
          <h1 className="tagline" style={{ fontSize: '16px', margin: '8px 0 0', color: '#fff' }}>BREATHE ESG</h1>
        </div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="entity_manager" icon={<DatabaseOutlined />}>Entity Manager</Menu.Item>
          <Menu.Item key="data_manager" icon={<FileSearchOutlined />}>Data Manager</Menu.Item>
          <Menu.Item key="reporting" icon={<LineChartOutlined />}>Reporting</Menu.Item>
          <Menu.Item key="materiality" icon={<SolutionOutlined />}>Materiality</Menu.Item>
          <Menu.Item key="suppliers" icon={<TeamOutlined />}>Suppliers</Menu.Item>
          <Menu.Item key="analytics" icon={<AreaChartOutlined />}>Analytics</Menu.Item>
          <Menu.Item key="targets" icon={<SolutionOutlined />}>Targets</Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} style={{ color: 'red' }}>Logout</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <img src={logo} alt="Breathe ESG Logo" className="logo" style={{ width: '20px' }} />
            View Name
            <Dropdown overlay={<Menu {...menuProps} />}>
              <Button>
                <Space>
                  North India Region
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '16px' }}>Username</span>
            <img src={logo} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          </div>
        </Header>
        <Content
          style={{
            margin: 0,  // Removed all margins
            padding: '24px 16px',  // Adjusted padding
            minHeight: 'calc(100vh - 64px)',  // Adjusted height calculation
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex' }}>
              <Button type="primary" icon={<DatabaseOutlined />}>
                Data Entry
              </Button>
              <Button type="primary" icon={<LineChartOutlined />} style={{ marginLeft: '16px' }}>
                Tracker
              </Button>
            </div>
            <div style={{ display: 'flex' }}>
              <Dropdown overlay={<Menu {...menuProps} />} trigger={['click']}>
                <Button style={{ marginRight: '16px' }}>
                  <Space>
                    North India Region
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </div>
          <Table columns={columns} dataSource={data} />;
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
