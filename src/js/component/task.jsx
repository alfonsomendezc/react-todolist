import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	return (
		<>
			<div
				className="tasks"
				onClick={() => props.removeTask(props.position)}>
				{props.newTask}
			</div>
		</>
	);
};

Task.propTypes = {
	newTask: PropTypes.string,
	removeTask: PropTypes.string,
	position: PropTypes.number,
};
