import {
	SimpleForm,
	Edit,
	TextInput,
	ReferenceInput,
	NumberInput,
	SelectInput,
	required,
} from 'react-admin';

export const ChallengeEdit = () => {
	return (
		<Edit>
			<SimpleForm>
				<NumberInput
					source='id'
					validate={[required()]}
					label='Id'
				/>
				<TextInput
					source='question'
					validate={[required()]}
					label='Question'
				></TextInput>
				<SelectInput
					source='type'
					validate={[required()]}
					choices={[
						{
							id: 'SELECT',
							name: 'SELECT',
						},
						{
							id: 'ASSIST',
							name: 'ASSIST',
						},
					]}
				/>
				<ReferenceInput
					source='lessonId'
					reference='lessons'
				/>
				<NumberInput
					source='order'
					validate={[required()]}
					label='Order'
				/>
			</SimpleForm>
		</Edit>
	);
};
