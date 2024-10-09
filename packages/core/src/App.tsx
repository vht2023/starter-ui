import { Accordion } from './components';

function App() {
	return (
		<div className='text-base w-full h-screen flex-center flex-col gap-3'>
			<div>@starter-ui/core</div>
			<div className='min-w-80'>
				<Accordion>
					<Accordion.Item id='1'>
						<Accordion.Header>
							<div>Test 1</div>
						</Accordion.Header>
						<Accordion.Content>Test Content 1</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item id='2'>
						<Accordion.Header>
							<div>Test 2</div>
						</Accordion.Header>
						<Accordion.Content>Test Content 2</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item id='3'>
						<Accordion.Header>
							<div>Test 3</div>
						</Accordion.Header>
						<Accordion.Content>Test Content 3</Accordion.Content>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
}

export default App;
