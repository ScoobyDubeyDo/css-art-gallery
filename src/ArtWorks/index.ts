import { ColorBombDisplay } from "./ColorBombDisplay";
import { nanoid } from "nanoid";
export const ArtList = [
	{
		id: nanoid(),
		name: "Color Bomb Display",
		imgUrl: "../../public/colorBomdDisplay.gif",
		path: "/color-bomb-display",
		Element: ColorBombDisplay
	}
];
