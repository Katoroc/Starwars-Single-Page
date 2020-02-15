import React, { useState, useEffect } from "react";
import { Card } from "./card";
//create your first component
export function Home() {
	const [people, setPeople] = useState([2, 3, 4, 5, 6, 7]);
	useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data);
				console.log(data);
			});
	}, []);
	return (
		<>
			<div className="d-flex justify-content-center">
				{people.map((item, index) => {
					return <Card key={index} />;
				})}
			</div>
		</>
	);
}
