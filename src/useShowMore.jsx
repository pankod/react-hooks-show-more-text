import React, { useState } from 'react';

const useShowMore = (props) => {
	const [extended, setExtended] = useState(props.extended);

	const isTruncated = (props.text || '').length > props.maxChar;

	return (
		<div>
			{!extended ? props.text.substring(0, props.maxChar) : props.text}
			{isTruncated ? props.ellipsis || renderEllipsis() : ""}
		</div>
	);

	function renderEllipsis() {
		return (
			<a href="javascript:void(0)" onClick={() => setExtended(!extended)}>
				{!extended ? props.more || 'show more' : props.less || 'show less'}
			</a>
		);
	}
}

export default useShowMore;