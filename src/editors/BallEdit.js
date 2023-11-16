import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from '../pitch/Ball';

class BallEdit extends Component {

	ballImage() {
		return (
			<g transform="translate(-30 -30)">
				<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20">
					<path d="m 4.4008 0.1012 c -0.7754 0.125 -1.6855 0.4785 -2.2793 0.8906 c -0.3945 0.2715 -0.916 0.8203 -1.1953 1.2539 c -0.6211 0.959 -0.8848 2.0723 -0.8281 3.4648 c 0.0879 2.0293 0.9355 4.248 2.4355 6.3555 c 1.6758 2.3691 4.1289 4.4316 6.6328 5.584 c 4.2656 1.9727 8.0781 1.2637 9.4648 -1.7578 c 0.6523 -1.4297 0.6465 -3.4238 -0.0215 -5.4062 c -0.7129 -2.1191 -1.8555 -3.9258 -3.7598 -5.9336 c -0.3418 -0.3613 -1.1172 -1.0449 -1.7168 -1.5137 c -1.8516 -1.4414 -3.8848 -2.4219 -5.8926 -2.8398 c -0.584 -0.1191 -2.3008 -0.1816 -2.8398 -0.0977 z m 1.2168 0.7246 c 3.0723 0.8086 6.916 3.7207 9.4863 7.1914 c 2.1094 2.8496 2.8652 5.5527 1.8926 6.7949 c -0.4297 0.5469 -0.9199 0.752 -1.8359 0.752 c -0.7246 0.0039 -1.2109 -0.084 -2.0898 -0.3926 c -3.2324 -1.1211 -7.1074 -4.3633 -9.3828 -7.8438 c -0.5488 -0.8457 -1.127 -1.9727 -1.375 -2.6973 c -0.5332 -1.5605 -0.4297 -2.7969 0.3047 -3.4766 c 0.1699 -0.1621 0.7031 -0.416 0.9883 -0.4805 c 0.4277 -0.0879 1.3594 -0.0195 2.0117 0.1523 z m 3.5684 0.25 c 1.8418 0.6367 3.6426 1.8066 5.2305 3.4082 c 1.1621 1.1699 2.0371 2.375 2.7246 3.7422 c 0.3047 0.6055 0.7344 1.6426 0.7344 1.7695 c 0 0.0195 -0.1914 -0.2461 -0.4297 -0.5898 c -2.166 -3.1426 -5.2441 -6.123 -8.3105 -8.0488 c -0.4141 -0.2598 -0.7871 -0.4941 -0.8281 -0.5215 c -0.0938 -0.0625 0.3457 0.0586 0.8789 0.2402 z m -7.4531 5.2344 c 1.1426 2.2871 2.6992 4.3887 4.8926 6.6016 c 2.2031 2.2285 4.5996 4.0137 6.7656 5.0469 c 0.248 0.1191 0.4512 0.2344 0.4512 0.2559 c 0 0.0723 -0.9883 0.1035 -1.584 0.0469 c -2.6523 -0.2559 -5.3379 -1.6445 -7.5977 -3.9355 c -2.0742 -2.0977 -3.3887 -4.498 -3.8027 -6.9512 c -0.1484 -0.8867 -0.1328 -2.3066 0.0371 -2.8594 c 0.0215 -0.0723 0.1035 0.084 0.2695 0.5215 c 0.1348 0.3398 0.3867 0.9141 0.5684 1.2734 z m 0 0"/>
				</svg>
			</g>
		);
	}

	render() {
		const b = this.props.ball;
		const editID = this.props.isEdit ? b.id : null;
		const editClassName = this.props.isEdit ? 'draggable' : null;
		const className = 'ball bc' + b.color + (this.props.isPrevFrame ? ' transparent': '');
		const transform = 'translate(' + b.pos.x + ' ' + b.pos.y + ')';
		const ball = b.color === 4 ? this.ballImage() : null;
		return (
			<g className={className} transform={transform}>
				<circle r="30" className={editClassName} strokeWidth="5" strokeOpacity="0.5" data-ref={editID} />
				{ball}
			</g>
		);
	}
}

BallEdit.defaultProps = {
	ball: null,
	isEdit: true,
	isPrevFrame: false
}

BallEdit.propTypes = {
	ball: PropTypes.instanceOf(Ball),
	isEdit: PropTypes.bool,
	isPrevFrame: PropTypes.bool
}

export default BallEdit;