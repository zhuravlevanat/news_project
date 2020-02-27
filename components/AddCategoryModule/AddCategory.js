import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from "react";
import {connect} from "react-redux";
import { getNewCategory } from "../../redux/Categories/selector";
import { addNewCategory, addCategoryInList } from "../../redux/Categories/actions";

const mapStateToProps = (state) => {
    return {
        newCategory: getNewCategory(state),
    }
}

export const mapDispatchToProps = dispatch => ({
    addNewCategory: payload => dispatch(addNewCategory(payload)),
    addCategoryInList: payload => dispatch(addCategoryInList(payload)),

});

const AddCategoryForm = (props) => {

    const {newCategory, addNewCategory, addCategoryInList } = props;

    const onFormSubmit = (e)  => {
        e.preventDefault();
        addCategoryInList(newCategory);
        addNewCategory('');
    }

    const onChangeCategory = (e)  => {
        addNewCategory(e.target.value)
    }

    return (
        <FormControl component='form' onSubmit={onFormSubmit}>
            <InputLabel htmlFor="my-input">Add your category here...</InputLabel>
            <Input id="my-input" value={newCategory} name="newCategory" required onChange={onChangeCategory}/>
            <FormHelperText>We'll try to find latest news for you....</FormHelperText>
        </FormControl>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryForm);
