import { SquareProps } from './square.props';

export function Square(props: SquareProps) {
	return (
		<button className="square" onClick={() => { props.onClick()}}>
				{props.value}
		</button>
	);
}
