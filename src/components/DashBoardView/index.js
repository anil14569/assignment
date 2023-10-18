import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

import './index.css'

import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from 'react-icons/ai'

import {
  RiMoneyDollarCircleLine,
  RiFileList2Line,
  RiShoppingBasketLine,
} from 'react-icons/ri'

import {BsClipboardData} from 'react-icons/bs'

import SideDashBoard from '../SideDashBoard'

const data = [
  {
    group_name: 'Jan',
    low_month: 400,
  },
  {
    group_name: 'Feb',
    low_month: 500,
  },
  {
    group_name: 'Mar',
    low_month: 600,
  },
  {
    group_name: 'Apr',
    low_month: 700,
  },
  {
    group_name: 'May',
    low_month: 700,
  },
  {
    group_name: 'Jun',
    low_month: 700,
  },
  {
    group_name: 'Jul',
    low_month: 700,
  },
  {
    group_name: 'Aug',

    High_month: 900,
  },
  {
    group_name: 'Sep',
    low_month: 600,
  },
  {
    group_name: 'Oct',
    low_month: 600,
  },
  {
    group_name: 'Nov',
    low_month: 500,
  },
  {
    group_name: 'Dec',
    low_month: 500,
  },
]

const data1 = [
  {
    count: 4000,
    name: 'customers1',
  },
  {
    count: 5000,
    name: 'customers2',
  },
  {
    count: 17000,
    name: 'customers3',
  },
]

const DataFormatter = number => {
  if (number > 1000) {
    return `${(number / 1000).toString()}k`
  }
  return number.toString()
}

const DashBoardView = () => (
  <>
    <div className="dashboardMainContainer">
      <div>
        <SideDashBoard />
      </div>
      <div className="dashBoardDetailsContainer">
        <div className="searchAndHeadingContainer">
          <h1 className="helloHeading">Hello Shahrukh 👋</h1>
          <div className="searchContainer">
            <AiOutlineSearch className="searchIcon" />
            <input type="search" placeholder="Search" className="input" />
          </div>
        </div>
        <div className="listCardsContainer">
          <div className="cardItem">
            <div className="earningContainer">
              <RiMoneyDollarCircleLine className="icon" />
            </div>
            <div className="detailsContainer">
              <p className="earningHeading">
                Earning
                <br />
                <span className="dolorMoney">
                  $198k <br />
                </span>
                <span className="upArrow">
                  <AiOutlineArrowUp />
                  37.8%
                </span>
                <span className="thisMonth">this month</span>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="OrdersContainer">
              <RiFileList2Line className="icon2" />
            </div>
            <div className="detailsContainer">
              <p className="earningHeading">
                Orders
                <br />
                <span className="dolorMoney">
                  $2.4k <br />
                </span>
                <span className="downArrow">
                  <AiOutlineArrowDown />
                  2%
                </span>
                <span className="thisMonth">this month</span>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="balanceContainer">
              <BsClipboardData className="icon3" />
            </div>
            <div className="detailsContainer">
              <p className="earningHeading">
                Balance
                <br />
                <span className="dolorMoney">
                  $2.4k <br />
                </span>
                <span className="downArrow">
                  <AiOutlineArrowDown />
                  2%
                </span>
                <span className="thisMonth">this month</span>
              </p>
            </div>
          </div>
          <div className="cardItem">
            <div className="totalSalesContainer">
              <RiShoppingBasketLine className="icon4" />
            </div>
            <div className="detailsContainer">
              <p className="earningHeading">
                Total Sales
                <br />
                <span className="dolorMoney">
                  $89k <br />
                </span>
                <span className="upArrow">
                  <AiOutlineArrowUp />
                  11%
                </span>
                <span className="thisMonth">this month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="chartsContainer">
            <div className="overViewContainer">
              <p className="overViewHeading">
                OverView
                <br />
                <span className="monthlyDes">Monthly Earning</span>
              </p>
              <select type="dropdown" className="dropdown">
                <option>Quantity</option>
                <option>height</option>
              </select>
            </div>
            <div className="layoutsContainer">
              <ResponsiveContainer width="90%" height={100}>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                  }}
                >
                  <XAxis
                    dataKey="group_name"
                    tick={{
                      stroke: 'gray',
                      strokeWidth: 0,
                    }}
                  />
                  <YAxis
                    tickFormatter={DataFormatter}
                    tick={{
                      stroke: 'gray',
                      strokeWidth: 1,
                    }}
                  />
                  <Bar
                    dataKey="low_month"
                    name="low_month"
                    fill="#c0c4c2"
                    barSize="20%"
                  />
                  <Bar
                    dataKey="High_month"
                    name="High_month"
                    fill="#085eff"
                    barSize="20%"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="pieChatContainer">
            <p className="overViewHeading">
              Customers <br />
              <span className="monthlyDes">customers that buy products</span>
            </p>

            <ResponsiveContainer width="80%" height={100}>
              <PieChart>
                <Pie
                  cx="50%"
                  cy="40%"
                  data={data1}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="40%"
                  outerRadius="70%"
                  dataKey="count"
                >
                  <Cell name="customers1" fill="#0c2b99" />
                  <Cell name="customers2" fill="#c42191" />
                  <Cell name="customers3" fill="#c0c4c2" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="productSellContainer">
          <div className="firstContainer">
            <p className="helloHeading">Product Sell</p>
            <div className="thirdContainer">
              <div className="searchContainer">
                <AiOutlineSearch className="searchIcon" />
                <input type="search" placeholder="Search" className="input" />
              </div>
              <div>
                <select type="dropdown" className="dropdown">
                  <option>Last 30 days</option>
                  <option>last 7 days</option>
                </select>
              </div>
            </div>
          </div>
          <div className="productNameContainer">
            <p className="earningHeading padding">Product Name</p>
            <div className="stockDetailsContainer">
              <p className="earningHeading">Stock</p>
              <p className="earningHeading">Price</p>
              <p className="earningHeading">Total Sales</p>
            </div>
          </div>
          <hr />
          <div className="lastContainer">
            <div className="imagesAndDes">
              <img
                src="https://res.cloudinary.com/dskw7gnzx/image/upload/v1697563613/images223254543465465654_ytuxx6.jpg"
                alt="cover"
                className="images"
              />
              <p className="abstact">
                Abstract 3D <br />
                <span className="description">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                </span>
              </p>
            </div>
            <div className="stockDetailsContainer">
              <p className="stock">32 in stock</p>
              <p className="price">$ 45.99</p>
              <p className="stock">20</p>
            </div>
          </div>
          <div className="lastContainer">
            <div className="imagesAndDes">
              <img
                src="https://res.cloudinary.com/dskw7gnzx/image/upload/v1697563595/133346580-blue-crystal-background-3d-rendering-3d-illustration_cshkdn.jpg"
                alt="cover"
                className="images"
              />
              <p className="abstact">
                sarphens Illustration <br />
                <span className="description">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                </span>
              </p>
            </div>
            <div className="stockDetailsContainer">
              <p className="stock">32 in stock</p>
              <p className="price">$ 45.99</p>
              <p className="stock">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default DashBoardView
