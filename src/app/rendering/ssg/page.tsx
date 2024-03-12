// Static Site Generation (빌드 때만 컴포넌트 생성, 이후 변하지 않음)
const SSG = async () => {
	const response = await fetch(`https://catfact.ninja/fact`, {
		cache: "force-cache",
	});
	const { fact }: { fact: string } = await response.json();
	return <div>{fact}</div>;
};

export default SSG;
