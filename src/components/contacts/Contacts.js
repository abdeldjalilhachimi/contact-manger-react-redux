import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";
class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-4 text-center">
          <strong className="" style={{ color: "crimson" }}>
            Contacts
          </strong>{" "}
          List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.myCcontact.contacts,
  };
};

export default connect(mapStateToProps, { getContacts })(Contacts);
