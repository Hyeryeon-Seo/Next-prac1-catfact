"use client";

import React, { useEffect, useState } from "react";

// Client Side Rendering (빌드 때 컴포넌트 초기 생성은 X / 컴포넌트 요청 때마다 데이터 갱신)
const CSR = () => {
	const [catFact, setCatFact] = useState<string>("");

	useEffect(() => {
		const fetchCatFact = async () => {
			try {
				const response = await fetch(`https://catfact.ninja/fact`);
				const { fact } = await response.json();
				setCatFact(fact);
			} catch (error) {
				console.log("데이터를 가져오는 데 실패했습니다.  ERROR : ", error);
				alert("다시 시도해주세요!");
			}
		};

		fetchCatFact();
	}, []);

	if (!catFact) {
		return <div>로딩 중 ...</div>;
	}
	return <div>{catFact}</div>;
};

export default CSR;
