import { useEffect, useState } from 'react';

const useFileUpload = () => {
	const [file, setFile] = useState<File | null>(null);
	const [srcImg, setSrcImg] = useState<string>('');

	useEffect(() => {
		if (file) {
			loadPreviewAvatar();
		}
	}, [file]);

	const uploadFileHandler = (cb: any) => {
		const reader = new FileReader();

		reader.readAsDataURL(file as any);
		reader.onerror = function (error) {
			console.log('Error uploadFileHandler: ', error);
		};
		reader.onload = () => {
			cb(reader.result as string);
		};
	};

	const loadPreviewAvatar = async () => {
		await new Promise(uploadFileHandler).then((res) => {
			setSrcImg(res as string);
		});
	};

	return {
		srcImg,
		setSrcImg,
		file,
		setFile,
	};
};

export default useFileUpload;
