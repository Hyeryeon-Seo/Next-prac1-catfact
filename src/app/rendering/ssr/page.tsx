import type { CatFact } from "@/types/catFact-type";

// Server Side Rendering (빌드때 컴포넌트 초기 생성 후 컴포넌트 요청있을 때 마다 데이터 갱신)
const SSR = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		cache: "no-cache",
	});
	const { fact }: CatFact = await response.json();
	return <div>{fact}</div>;
};

export default SSR;
