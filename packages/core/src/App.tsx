import './app.scss';
import { Select } from './components';

const options = [
	{
		value: 'value-1',
		name: 'Value 1',
	},
	{
		value: 'value-2',
		name: 'Value 2',
	},
	{
		value: 'value-3',
		name: 'Value 3',
	},
];
function App() {
	return (
		<div className='text-base w-full h-screen flex items-center justify-center flex-col gap-6'>
			<div className='font-bold'>@starter-ui/core</div>
			<div>
				<Select options={options} label='Select One' />
			</div>
		</div>
	);
}

export default App;
