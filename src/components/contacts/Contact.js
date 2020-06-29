import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";
import "./contact.css";
class Contact extends Component {
  state = {
    showContactInfo: true,
  };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          <i className="fa fa-address-card" style={{ color: "crimson" }}></i>{" "}
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-edit"
              style={{
                cursor: "pointer",
                float: "right",
                color: "orange",
                marginRight: "1rem",
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              {" "}
              <strong>Email</strong> : {email}
            </li>
            <li className="list-group-item">
              {" "}
              <strong>Phone</strong>: {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default connect(null, { deleteContact })(Contact);
