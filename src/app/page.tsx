import Data from "@/components/data";
import Finder from "@/components/finder";

export default function Home() {
	return (
		<div className="pt-5 pb-10 sm:pb-14 md:pb-20 space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10">
			<Finder />
			<Data />
		</div>
	);
}
