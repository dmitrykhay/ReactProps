import { Star } from "./Star";
import "./Stars.css";

interface IProps {
	count?: number;
}

export const Stars = ({ count = 0 }: IProps) => {

	if (count < 1 || count > 5 || isNaN(count)) {
		return (
			<ul className="ul-stars">
				<li>
					null
				</li>
			</ul>
		)
	}
	
	return (
		<ul className="card-body-stars u-clearfix ul-stars">
			{Array.from({ length: count }, (_, index) => <Star key={index}/>)}
		</ul>
	)
}
