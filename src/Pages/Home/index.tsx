import { ArtList } from "../../ArtWorks";
import { ArtPiece, Gallery } from "../../components";

export const Home = () => {
	return (
		<Gallery>
			{ArtList.map(({ id, imgUrl, name, path }) => (
				<ArtPiece
					key={id}
					cover={imgUrl}
					title={name}
					id={id}
					url={path}
				/>
			))}
		</Gallery>
	);
};
