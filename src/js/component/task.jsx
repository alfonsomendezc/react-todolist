import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	return (
		<>
			<p onClick={() => props.removeTask(props.position)}>
				{props.newTask}
			</p>
		</>
	);
};

Task.propTypes = {
	newTask: PropTypes.string,
	removeTask: PropTypes.string,
	position: PropTypes.number,
};
