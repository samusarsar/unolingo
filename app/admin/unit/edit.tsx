import { SimpleForm, Edit, TextInput, ReferenceInput, NumberInput, required } from 'react-admin';

export const UnitEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source='id' validate={[required()]} label='Id'></NumberInput>
                <TextInput source='title' validate={[required()]} label='Title'></TextInput>
                <TextInput source='description' validate={[required()]} label='Description'></TextInput>
                <ReferenceInput source='courseId' reference='courses' />
                <NumberInput source='order' validate={[required()]} label='Order'/>
            </SimpleForm>
        </Edit>
    );
};
