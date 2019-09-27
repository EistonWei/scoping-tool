import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';
import cookie from '../components/cookie-ops';

const initialUserState = {
    name: cookie.get('uid').fullName,
    email: cookie.get('uid').email,
    company: cookie.get('uid').companyName,
    // member: '',
    member: 'Website',
    // member: 'Software',
    link: '',
    timeline: '',
    inquiry: '',
    issue: '',
    status: '',
    date: '',
    ticket_number: ''
};
const initialSignUpState = {
    firstName: '',
    lastName: '',
    username: '',
    company: '',
    email: '',
    password: '',
    confirm: ''
};
const initialPasswordResetState = {
    password: '',
    confirm: ''
}

const initialChangePasswordState = {
    oldPassword: '',
    password: '',
    confirm: ''
}

const initialForgotPasswordState = {
    'email': ''
}

const store = createStore(combineForms({
  user: initialUserState,
  signup: initialSignUpState,
  passwordReset: initialPasswordResetState,
  forgotPassword: initialForgotPasswordState,
  changePassword: initialChangePasswordState
}));

export default store;