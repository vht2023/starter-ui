import { cn } from '../../libs/utils';

const Skeleton = ({ className }: { className?: string }) => {
	return <div className={cn(['animate-pulse h-2 w-40 rounded-full bg-muted/25'], className)} />;
};

export default Skeleton;
