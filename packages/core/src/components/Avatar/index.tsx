import { ReactNode } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../libs/utils';

interface Props {
	id?: string;
	src?: string;
	name?: string;
	alt?: string;
	color?: string;
	size?: number;
	radius?: string;
	bordered?: boolean;
	disabled?: boolean;
	fallback?: ReactNode;
	className?: string;
	onClick?: () => void;
}

const getAvatarRadius = (radius: string) => {
	switch (radius) {
		case 'sm':
			return 'rounded-md';
		case 'md':
			return 'rounded-lg';
		case 'lg':
			return 'rounded-xl';
		case 'full':
			return 'rounded-full';
		case 'none':
			return 'rounded-none';
		default:
			return '';
	}
};

const getAvatarColor = (color: string) => {
	switch (color) {
		case 'default':
			return 'border-default ring-default';
		case 'primary':
			return 'border-primary ring-primary';
		case 'secondary':
			return 'border-secondary ring-secondary';
		case 'success':
			return 'border-success ring-success';
		case 'warning':
			return 'border-warning ring-warning';
		case 'error':
			return 'border-error ring-error';
		default:
			return 'border-default ring-default';
	}
};

const AvatarDefault: React.FC<{
	color: string;
	size: number;
	radius: string;
	bordered: boolean;
	disabled: boolean;
	className: string;
	onClick?: () => void;
}> = ({ color, size, radius, bordered, disabled, className, onClick }) => {
	return (
		<div
			className={cn([
				'starterui-avatar bg-gray-100 rounded-full flex items-center justify-center',
				bordered ? 'border-[1.5px]' : '',
				getAvatarColor(color),
				getAvatarRadius(radius),
				disabled ? 'opacity-50 cursor-not-allowed' : '',
				className,
			])}
			onClick={() => {
				if (disabled) return;
				onClick?.();
			}}
			style={{
				width: size,
				height: size,
			}}
		>
			<User size={size - 12} className='flex-1' />
		</div>
	);
};

const AvatarWithName: React.FC<{
	name: string;
	color: string;
	size: number;
	radius: string;
	bordered: boolean;
	disabled: boolean;
	className: string;
	onClick?: () => void;
}> = ({ name, color, size, radius, bordered, disabled, className, onClick }) => {
	return (
		<div
			className={cn([
				'bg-gray-100 rounded-full inline-flex items-center justify-center p-2 w-fit h-fit',
				bordered ? 'border' : '',
				getAvatarColor(color),
				getAvatarRadius(radius),
				disabled ? 'opacity-50 cursor-not-allowed' : '',
				className,
			])}
			onClick={() => {
				if (disabled) return;
				onClick?.();
			}}
			style={{
				width: size,
				height: size,
			}}
		>
			<span className='flex-1 text-center leading-none'>{name.toUpperCase().slice(0, 1)}</span>
		</div>
	);
};

const Avatar: React.FC<Props> = ({
	id = 'starterui-default-avatar',
	src,
	name,
	alt = 'alt-avatar',
	color = 'default',
	size = 32,
	radius = 'full',
	bordered = false,
	disabled = false,
	className = '',
	onClick,
}) => {
	if (!src && !name) return <AvatarDefault color={color} size={size} radius={radius} bordered={bordered} disabled={disabled} className={className} />;

	if (!src && name) return <AvatarWithName name={name} color={color} size={size} radius={radius} bordered={bordered} disabled={disabled} className={className} />;

	return (
		<img
			id={id}
			style={{
				width: size,
				height: size,
			}}
			src={src}
			alt={alt}
			className={cn([
				'rounded-full object-cover object-center',
				bordered && 'ring-1 p-0.5',
				getAvatarColor(color),
				getAvatarRadius(radius),
				disabled ? 'opacity-50 cursor-not-allowed' : '',
				className,
			])}
			onClick={() => {
				if (disabled) return;
				onClick?.();
			}}
		/>
	);
};

export default Avatar;
