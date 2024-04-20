import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Skills",
          to: "/skills",
        },
        {
          label: "Projects",
          to: "/projects",
        },
        {
          label: "Education",
          to: "/education",
        },
        {
          label: "Hire Me",
          to: "/hireme",
        },
      ],
      showMenuIcon: false,
    };
  }

  onToggleBtn = () => {
    this.setState((prevState) => ({ showMenuIcon: !prevState.showMenuIcon }));
  };

  onLinkClick = () => {
    if (this.state.showMenuIcon) {
      this.setState({ showMenuIcon: false });
    }
  };

  render() {
    const { showMenuIcon } = this.state;
    return (
      <>
        <nav className="nav-container">
          <div>
            <Link to="/" className="link-item">
              <h1 className="nav-header">Portfolio.</h1>
            </Link>
          </div>
          <div className="icon-button-container">
            <button className="icon-btn" onClick={this.onToggleBtn}>
              {showMenuIcon ? (
                <RxCross2 size={25} className="nav-icon" />
              ) : (
                <MdMenuOpen className="nav-icon" size={25} />
              )}
            </button>
          </div>
          <ul className="list-container">
            {this.state.data.map((item, index) => (
              <li key={index} className="list-item">
                <Link
                  to={item.to}
                  className="link-item"
                  onClick={this.onLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {showMenuIcon ? (
          <div className={`sm-nav-links-container ${
            showMenuIcon ? "active" : "hidden"
          }`}>
            <ul className="sm-list-container">
              {this.state.data.map((item, index) => (
                <li key={index} className="sm-list-item">
                  <Link
                    to={item.to}
                    className="link-item"
                    onClick={this.onLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}

export default Navbar;
