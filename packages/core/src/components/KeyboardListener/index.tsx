import React, { useEffect } from 'react';

interface KeyboardListenerProps {
	id: string;
	portals: HTMLElement;
	onClose: () => void;
	children: React.ReactNode;
}

const KeyboardListener: React.FC<KeyboardListenerProps> = ({ id, portals, onClose, children }) => {
	useEffect(() => {
		const closeOnEscapeKey = (e: any) => {
			if (e.key === 'Escape' || e.keyCode === 27) {
				if (portals.children && portals.children[portals.children.length - 1]?.id === id) {
					onClose();
				}
			}
		};
		document.body.addEventListener('keydown', closeOnEscapeKey);

		return () => document.body.removeEventListener('keydown', closeOnEscapeKey);
	}, [id, onClose, portals]);

	return children;
};

export default KeyboardListener;
