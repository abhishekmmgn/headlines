import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export function BaisCard({ bullets }: { bullets: Array<string> }) {
	return (
		<div className="w-full p-4 space-y-1 shadow-sm">
			{bullets.map((bullet, index) => (
				<ul key={index} className="text-secondary-foreground pl-4">
					<li className="list-disc">{bullet}</li>
				</ul>
			))}
		</div>
	);
}

type NewsCardProps = {
	destination: string;
};
export function NewsCard(props: NewsCardProps) {
	return (
		<div className="bg-secondary rounded-[var(--radius)] w-full h-full shadow-sm">
			{/* <div className="relative w-full h-auto aspect-[4/3]">
        <Image
          src=""
          alt=""
          fill
          className="rounded-t-[var(--radius)] object-cover bg-secondary"
        />
      </div> */}
			<div className="h-full p-5 flex flex-col gap-4 justify-between">
				<div className="space-y-3">
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<Image
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAqUlEQVR4AWJwL/ABtFvHNgCCQBSGK3t74gbswSbswUpMwwaOQIlncpXmESTkxaDFXxnzGVE4ah8H921bJCd5KXTmqqBCqxSlMqAAQcVM5WavD7NcMvomYg+YAOZa1kjx3ATKRQuwghG4JE2gB2DGAERDCxhGgLquKwG8wZkNJjZozgggaDpQfzM39UdTOKBuk+ytLTI3b8s8nuw7D2D+iMEfojD6D8JPOgD3hgaEjDQqGgAAAABJRU5ErkJggg=="
								alt=""
								height={24}
								width={24}
								className="rounded-t-[var(--radius)] object-cover bg-secondary/20"
							/>
							<p className="font-medium text-sm md:text-sm+ text-secondary-foreground">
								CNET
							</p>
						</div>
						<p className="text-xs+ md:text-sm text-muted-foreground">
							12/2/2024
						</p>
					</div>
					<p className="md:text-base+ text-secondary-foreground">
						Budget 2024: In her 7th record Union Budget, Nirmala Sitharaman
						announced key employment schemes and also revised the tax structure
						in the new tax regime, while the slabs in old regime remain
						unchanged. PM Modi later congratulated her for a balanced budget.
					</p>
				</div>
				<a
					href={props.destination}
					className="w-fit flex items-center gap-1 text-primary"
				>
					<span>Read</span>
					<FiExternalLink className="-mt-1 w-4 h-4" />
				</a>
			</div>
		</div>
	);
}
