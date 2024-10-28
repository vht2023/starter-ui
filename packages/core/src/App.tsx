import './app.scss';
import { Input } from './components';

function App() {
	return (
		<div className='text-base w-full h-screen flex items-center justify-center flex-col gap-6'>
			<div className='font-bold'>@starter-ui/core</div>
			<div>
				<Input />
			</div>
		</div>
	);
}

export default App;
