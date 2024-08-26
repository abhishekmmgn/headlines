"use client";

import { Separator } from "./ui/separator";
import { useHasData } from "@/lib/store";
import { Analysis, Articles, Summary } from "./sections";

export default function Data() {
	const { hasData } = useHasData();
	return (
		<div className="space-y-8 md:space-y-10 lg:space-y-12">
			{hasData && (
				<>
					<Separator />
					<Summary />
					<Analysis />
					<Articles />
				</>
			)}
		</div>
	);
}
