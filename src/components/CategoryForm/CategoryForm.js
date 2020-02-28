import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from "react";

const AddCategoryForm = ({newCategory, addNewCategory, addCategoryInList }) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        addCategoryInList(newCategory);
        addNewCategory('');
    };

    const onChangeCategory = e => addNewCategory(e.target.value);

    return (
        <FormControl component='form' onSubmit={onFormSubmit}>
            <InputLabel htmlFor="my-input">Add your category here...</InputLabel>
            <Input id="my-input" value={newCategory} required onChange={onChangeCategory}/>
            <FormHelperText>We'll try to find latest news for you....</FormHelperText>
        </FormControl>
    );
};

export default AddCategoryForm;
