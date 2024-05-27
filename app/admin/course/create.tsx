import { SimpleForm, Create, TextInput, required } from 'react-admin';

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source='title' validate={[required()]} label='Title'></TextInput>
                <TextInput source='imageSrc' validate={[required()]} label='Image'></TextInput>
            </SimpleForm>
        </Create>
    );
};
