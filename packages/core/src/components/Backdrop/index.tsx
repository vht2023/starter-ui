import { cn } from '../../libs/utils';

interface Props {
	className?: string;
	onClick?: () => void;
}

const Backdrop: React.FC<Props> = ({ className, onClick }) => {
	return <div onClick={onClick} className={cn(['fixed z-50 top-0 left-0 h-screen w-screen bg-[#00000080] opacity-50', className])} />;
};

export default Backdrop;
