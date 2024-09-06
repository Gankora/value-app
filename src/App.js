import styles from "./App.module.css";
import { useState } from "react";
import DateTimeComponent from "../src/Date.js";

function App() {
	const [value, setValue] = useState("");
	const [list, setList] = useState([]);
	const [error, setError] = useState("");

	const isValueVaild = value.length >= 3;

	const onInputButtonClick = () => {
		const promtValue = prompt("Введите значение").trim();
		if (promtValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа");
		} else {
			setValue(promtValue);
			setError("");
		}
	};

	const onAddButtonClick = () => {
		if (value !== "") {
			const newItem = {
				id: Date.now(),
				value: value,
			};
			setValue("");
			setError("");
			setList([...list, newItem]);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>:
				<output className={styles["current-value"]}> {value}</output>
			</p>
			{error !== "" && <div className={styles.error}>{error}</div>}
			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>
				{list.length <= 0 && (
					<p className={styles["no-margin-text"]}>
						Нет добавленных элементов
					</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li className={styles["list-item"]} key={id}>
							{value} <DateTimeComponent {...list} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
