// import * as React from 'react';
//useRef() will be used

import { useRef } from "react";

interface Props {
}

const Example2= ({}: Props) => {

	const textRef = useRef(null); //Se inicializa con null.

	const hideText = () => {
		if (textRef.current) {
			// @ts-ignore
			textRef.current.style.display = "none";
		}

	}

	return (
		<div>
			<p ref={textRef}>Este texto se ocultará</p>
			<button onClick={hideText}>Esconder texto</button>
		</div>
	);
};

export {Example2};
