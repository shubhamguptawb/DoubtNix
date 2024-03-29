import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { logout } from "../../../actions/auth";
import { connect } from "react-redux";
function StudentAside(props) {
  let navigate = useNavigate();
  console.log(props);
  return (
    <div
      className='aside-f-list'
      style={{
        borderRadius: "8px",
        height: "70%",
        width: "60%",
        background: "white",
        display: "Flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 10px 1px gray",
      }}
    >
      <ul
        style={{
          height: "65%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          listStyleType: "none",
          padding: "0px",
        }}
      >
        <Tooltip title='Post' placement='right'>
          <Link to='/dashboard'>
            <li style={styles.li}>
              <img
                style={{ height: "30px", width: "30px" }}
                src='https://cdn-icons-png.flaticon.com/512/2311/2311991.png'
                alt=''
              />
            </li>
          </Link>
        </Tooltip>
        <Tooltip title='Courses' placement='right'>
          <Link to='/dashboard/0/courses'>
            <li style={styles.li}>
              <img
                style={{ height: "30px", width: "30px" }}
                src='https://cdn-icons-png.flaticon.com/512/865/865169.png'
                alt=''
              />
            </li>
          </Link>
        </Tooltip>
        <Tooltip title='My Doubts' placement='right'>
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src='https://cdn-icons-png.flaticon.com/512/2097/2097047.png'
              alt=''
            />
          </li>
        </Tooltip>
        <Tooltip title='My Courses' placement='right'>
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src='https://cdn-icons-png.flaticon.com/512/830/830958.png'
              alt=''
            />
          </li>
        </Tooltip>
      </ul>
      <hr />
      <ul
        style={{
          height: "20%",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          listStyleType: "none",
          padding: "0px",
        }}
      >
        <Tooltip title='help' placement='left'>
          <li style={styles.li}>
            <img
              style={{ height: "30px", width: "30px" }}
              src='https://cdn-icons-png.flaticon.com/512/906/906794.png'
              alt=''
            />
          </li>
        </Tooltip>
        <Tooltip title='exit' placement='right'>
          <li
            id='hsdlkfjah'
            style={styles.li}
            onClick={() => {
              props.logout();
              navigate("/", { replace: true });
            }}
          >
            <img
              style={{ height: "30px", width: "30px" }}
              src='https://cdn-icons-png.flaticon.com/512/1286/1286853.png'
              alt=''
            />
          </li>
        </Tooltip>
      </ul>
    </div>
  );
}

const styles = {
  li: {
    borderRadius: "10px",
    height: "40px",
    width: "90%",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const mapStateToProps = (state) => {
  return state.authReducer;
};

export default connect(mapStateToProps, { logout })(StudentAside);
