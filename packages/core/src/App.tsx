import { Button } from './components';

function App() {
	return (
		<div className='text-base w-full h-screen flex-center flex-col gap-6'>
			<div className='font-bold'>@starter-ui/core</div>
			<div className='flex-center w-80 flex-wrap gap-3 overflow-auto rounded-md border p-3'>
				<Button isLoading outline>
					Default
				</Button>
				<Button isLoading outline color='primary'>
					Primary
				</Button>
				<Button isLoading outline color='secondary'>
					Secondary
				</Button>
				<Button isLoading outline color='success'>
					Success
				</Button>
				<Button isLoading outline color='warning'>
					Warning
				</Button>
				<Button isLoading outline color='error'>
					Error
				</Button>
			</div>
		</div>
	);
}

export default App;
