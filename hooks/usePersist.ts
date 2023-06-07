"use client";
import { useState, useEffect } from "react";

const usePersist = () => {
	let item: string | boolean = "";
	if (typeof window !== "undefined") {
		// Perform localStorage action
		item = JSON.parse(window.localStorage.getItem("persist") || "false");
	}
	const [persist, setPersist] = useState(item);

	useEffect(() => {
		window.localStorage.setItem("persist", JSON.stringify(persist));
	}, [persist]);

	return [persist, setPersist] as const;
};
export default usePersist;
