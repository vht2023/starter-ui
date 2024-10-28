import { useState } from 'react';
import './app.scss';
import { Switch } from './components';

function App() {
	const [checked, setChecked] = useState(false);
	return (
		<div className='text-base w-full h-screen flex items-center justify-center flex-col gap-6'>
			<div className='font-bold'>@starter-ui/core</div>
			<div>
				<Switch id='1' checked={checked} onChange={(value) => setChecked(value)} label='Label' />
			</div>
		</div>
	);
}

export default App;
