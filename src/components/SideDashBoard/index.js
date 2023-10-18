import {
  TbHexagonNumber0,
  TbSquareKey,
  TbUserSquareRounded,
} from 'react-icons/tb'

import {FaAngleRight, FaAngleDown} from 'react-icons/fa'

import {GrSquare} from 'react-icons/gr'

import {MdOutlineLiveHelp} from 'react-icons/md'

import {BsClipboardData} from 'react-icons/bs'

import {RiSparklingLine} from 'react-icons/ri'

import './index.css'

const SideDashBoard = () => (
  <div className="sideDashBoardContainer">
    <div className="dashBoardHeadingContainer">
      <TbHexagonNumber0 className="dashBoardIcon" />
      <h1 className="DashBoardHeading">Dashboard</h1>
    </div>
    <ul className="ulList">
      <li className="listItem">
        <TbSquareKey className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading">Dashboard</p>
      </li>
      <li className="listItem background">
        <GrSquare className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading ">Product</p>
        <div className="arrowContainer">
          <FaAngleRight className="DashBoardHeading heading arrow product" />
        </div>
      </li>
      <li className="listItem background">
        <TbUserSquareRounded className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading ">Customers</p>
        <FaAngleRight className="DashBoardHeading heading arrow customer" />
      </li>
      <li className="listItem background">
        <BsClipboardData className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading">Income</p>
        <FaAngleRight className="DashBoardHeading heading arrow income" />
      </li>
      <li className="listItem background">
        <RiSparklingLine className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading">Promote</p>
        <FaAngleRight className="DashBoardHeading heading arrow promote" />
      </li>
      <li className="listItem background">
        <MdOutlineLiveHelp className="dashBoardIcon extra" />
        <p className="DashBoardHeading heading">Help</p>
        <FaAngleRight className="DashBoardHeading heading arrow help" />
      </li>
    </ul>
    <div className="userDescription">
      <img
        src="https://res.cloudinary.com/dskw7gnzx/image/upload/v1697480754/220421-elon-musk-al-1017-a6eece_qltctx.jpg"
        alt="logo"
        className="logo"
      />
      <div className="nameDecContainer">
        <p className="name">Evano</p>
        <p className="des">Project Manager</p>
      </div>
      <FaAngleDown className="DashBoardHeading heading arrow down" />
    </div>
  </div>
)
export default SideDashBoard
