import { Link } from "react-router-dom";

type Props = {
	cover: string;
	title: string;
	id: string;
	url: string;
};

export const ArtPiece = ({ cover, title, id, url }: Props) => {
	return (
		<Link to={url}>
			<div
				id={id}
				className="relative rounded-lg w-80 aspect-video group overflow-clip hover:ring-1 ring-offset-slate-800 ring-sky-300 ring-offset-2"
			>
				<img
					src={`${cover}`}
					alt={title}
					className="object-cover w-full h-full duration-700 ease-in-out group-hover:scale-110"
				/>
				<div className="absolute inset-0 flex items-end justify-center font-thin text-gray-200 duration-700 ease-in-out cursor-pointer group-hover:items-center group-hover:backdrop-blur-lg group-hover:duration-200 group-hover:underline group-hover:ease-linear group-hover:text-2xl group-hover:font-bold">
					{title}
				</div>
			</div>
		</Link>
	);
};
