import './app.scss';
import { Tooltip } from './components';

function App() {
	return (
		<div className='text-base w-full h-screen flex items-center justify-center flex-col gap-6'>
			<div className='font-bold'>@starter-ui/core</div>
			<div className='w-96 flex justify-center'>
				<Tooltip content='Tooltip Content'>
					<div>Tooltip Content</div>
				</Tooltip>
			</div>
		</div>
	);
}

export default App;
