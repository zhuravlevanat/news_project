import {getNewCategory} from "../../redux/Categories/selector";
import {addCategoryInList, addNewCategory} from "../../redux/Categories/actions";
import {connect} from "react-redux";
import AddCategoryForm from "./AddCategory";

const mapStateToProps = (state) => {
    return {
        newCategory: getNewCategory(state),
    }
};

export const mapDispatchToProps = dispatch => ({
    addNewCategory: payload => dispatch(addNewCategory(payload)),
    addCategoryInList: payload => dispatch(addCategoryInList(payload)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryForm);