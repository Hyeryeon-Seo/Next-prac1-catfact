import type { CatFact } from "@/types/catFact-type";

// Incremental Site Regeneration (빌드때 컴포넌트 초기 생성 후 일정 주기마다 컴포넌트 갱신)
const ISR = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		next: { revalidate: 5 },
	});
	const { fact }: CatFact = await response.json();
	return <div>{fact}</div>;
};

export default ISR;
