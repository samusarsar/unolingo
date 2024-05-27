import { Datagrid, List, TextField, NumberField } from 'react-admin';

export const CourseList = () => {
    return (
        <List>
            <Datagrid rowClick='edit'>
                <NumberField source='id'></NumberField>
                <TextField source='title'></TextField>
                <TextField source='imageSrc'></TextField>
            </Datagrid>
        </List>
    );
};
