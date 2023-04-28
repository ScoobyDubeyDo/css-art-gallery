type Props = {
	cover: string;
	title: string;
	id: string;
};

export const ArtPiece = ({ cover, title, id }: Props) => {
	return (
		<div
			id={id}
			className="relative rounded-lg w-80 aspect-video group overflow-clip"
		>
			<img
				src={`${cover}`}
				alt={title}
				className="object-cover w-full h-full duration-700 ease-in-out group-hover:scale-110"
			/>
			<div className="absolute inset-0 font-thin text-center text-gray-200 duration-700 ease-in-out group-hover:backdrop-blur-sm group-hover:duration-200 group-hover:ease-linear group-hover:text-2xl group-hover:font-light">
				{title}
			</div>
		</div>
	);
};
