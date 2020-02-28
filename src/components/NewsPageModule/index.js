import {getLoadingState, getNews, isError} from "../../redux/News/selectors";
import {connect} from "react-redux";
import NewsPage from "./NewsPage";

const mapStateToProps = (state) => {
    return {
        news: getNews(state),
        loading: getLoadingState(state),
        error: isError(state)
    }
};

export default connect(mapStateToProps)(NewsPage);
