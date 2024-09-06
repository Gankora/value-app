//import React, { useState } from "react";
import moment from "moment";

const DateTimeComponent = (props) => {
	//const [dateTime, setDateTime] = useState(moment());

	const formattedDateTime = moment(props.id).format("DD.MM.YYYY HH:mm:ss");

	return <p>добавлено: {formattedDateTime}</p>;
};

export default DateTimeComponent;
