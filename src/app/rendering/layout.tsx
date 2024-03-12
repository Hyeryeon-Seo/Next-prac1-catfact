import React from "react";

const RenderingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="text-xl flex flex-col h-screen justify-center items-center text-neutral-800">
			<img
				className="relative"
				src="/Lovepik_cartoonCat.png" // public 폴더명 제외하고 src쓰기
				alt="white-cat"
				width={300}
			/>
			<div className="bg-rose-900/30 p-10 rounded-3xl">{children}</div>
		</div>
	);
};

export default RenderingLayout;
