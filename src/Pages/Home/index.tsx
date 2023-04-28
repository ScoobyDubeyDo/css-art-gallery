import { ArtList } from "../../ArtWorks";
import { ArtPiece, Gallery } from "../../components";

export const Home = () => {
	return (
		<Gallery>
			{ArtList.map(({ id, imgUrl, name }) => (
				<ArtPiece key={id} cover={imgUrl} title={name} id={id} />
			))}
		</Gallery>
	);
};
