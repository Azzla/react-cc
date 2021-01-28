import React, { Component } from 'react';

function ListView(list) {
    return (
			<div>
			{list.map(el => {
				return <li key={Math.random(1, 10)}>{el}</li>;
			})}
			</div>
    )
}


export default ListView;
