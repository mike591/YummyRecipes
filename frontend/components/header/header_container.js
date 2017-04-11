import {connect} from 'react-redux';
import Header from './header';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
