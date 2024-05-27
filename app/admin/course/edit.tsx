import { SimpleForm, Edit, TextInput, required } from 'react-admin';

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source='id' validate={[required()]} label='Id'></TextInput>
                <TextInput source='title' validate={[required()]} label='Title'></TextInput>
                <TextInput source='imageSrc' validate={[required()]} label='Image'></TextInput>
            </SimpleForm>
        </Edit>
    );
};
