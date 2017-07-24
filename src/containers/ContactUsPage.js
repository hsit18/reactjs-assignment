import {connect} from 'react-redux';
import ContactUs from '../components/ContactUs';

function mapStateToProps(state) {
	return {
		aboutus: state.contactus
	};
}

export default connect(mapStateToProps)(ContactUs);
