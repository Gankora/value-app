import React, { useState } from "react";
import moment from "moment";

const DateTimeComponent = () => {
	const [dateTime, setDateTime] = useState(moment());

	const formattedDateTime = moment(dateTime).format("DD.MM.YYYY HH:mm:ss");

	return <p>добавлено: {formattedDateTime}</p>;
};

export default DateTimeComponent;
