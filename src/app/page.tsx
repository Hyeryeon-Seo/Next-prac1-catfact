import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<div className="relative flex place-items-center flex-col gap-10 m-5">
				<p className="text-xl">Want to Know about Cats?</p>
				<img
					className="relative"
					src="https://e1.pxfuel.com/desktop-wallpaper/489/255/desktop-wallpaper-cute-kitten-cute-kitties.jpg"
					alt="white-cat"
					width={700}
					height={200}
					// priority
				/>
			</div>
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				<Link
					href="/rendering/ssg"
					className="m-5 group rounded-lg border border-transparent px-3 py-3 transition hover:dark:border-rose-700/10 hover:dark:bg-rose-700/10 hover:delay-100"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						SSG {""}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Static Site Generation (빌드 때만 컴포넌트 생성, 이후 변하지 않음)
					</p>
				</Link>
				<Link
					href="/rendering/isr"
					className="m-5 group rounded-lg border border-transparent px-3 py-3 transition hover:dark:border-rose-700/10 hover:dark:bg-rose-700/10 hover:delay-100"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						ISR {""}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Incremental Site Regeneration (빌드 때 컴포넌트 초기 생성 후 일정
						주기마다 컴포넌트 갱신)
					</p>
				</Link>
				<Link
					href="/rendering/ssr"
					className="m-5 group rounded-lg border border-transparent px-3 py-3 transition hover:dark:border-rose-700/10 hover:dark:bg-rose-700/10 hover:delay-100"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						SSR {""}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						Server Side Rendering (빌드 때 컴포넌트 초기 생성 후 컴포넌트
						요청있을 때 마다 데이터 갱신)
					</p>
				</Link>
				<Link
					href="/rendering/csr"
					className="m-5 group rounded-lg border border-transparent px-3 py-3  transition hover:dark:border-rose-700/10 hover:dark:bg-rose-700/10 hover:delay-100"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						CSR {""}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
						Client Side Rendering (빌드 때 컴포넌트 초기 생성은 X / 컴포넌트
						요청 때마다 데이터 갱신)
					</p>
				</Link>
			</div>
		</main>
	);
}
