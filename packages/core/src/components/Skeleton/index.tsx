import { cn } from '../../libs/utils';

const Skeleton = ({ id = 'starterui-default-skeleton', className }: { id?: string; className?: string }) => {
	return <div id={id} className={cn(['starterui-skeleton animate-pulse h-2 w-40 rounded-full bg-muted/25', className])} />;
};

export default Skeleton;
