import {connect} from 'react-redux';
import AboutUs from '../components/AboutUs';

function mapStateToProps(state) {
	return {
		aboutus: state.aboutus
	};
}

console.log(">>>>>>>>>>>>>>>", AboutUs)
export default connect(mapStateToProps)(AboutUs);
