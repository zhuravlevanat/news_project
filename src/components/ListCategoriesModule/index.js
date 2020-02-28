import {getCategories} from "../../redux/Categories/selector";
import {getLoadingState} from "../../redux/News/selectors";
import {connect} from "react-redux";
import CategoriesList from "./CategoriesList";

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
        loading: getLoadingState(state),
    }
};

export default connect(mapStateToProps)(CategoriesList);