import React from 'react'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import InputQuestion from '../components/InputQuestion/InputQuestion';
import NavButton from '../components/NavButton';
import * as TicketsApi from '../lib/ticketsApi';

const ContactInfo = ({ticket, actions}) => (
  <div>
    <InputQuestion label='What is your name?' value={ticket.get('contactName')} action={actions.setContactName}/>
    <InputQuestion label='What is your email?' value={ticket.get('contactEmail')} action={actions.setContactEmail}/>
    <NavButton url='/ThankYou' action={() => {TicketsApi.create(ticket);}}/>
  </div>
);

function mapStateToProps(state) {
  return {
    ticket: state.ticketReducers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ContactInfo.propTypes = {
  ticket: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);