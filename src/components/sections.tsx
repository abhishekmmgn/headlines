import React, { Fragment } from "react";
import { Separator } from "./ui/separator";
import { BaisCard, NewsCard } from "./cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bais } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type SectionWrapperProps = {
	children: React.ReactNode;
	title: string;
	className?: string;
};

function SectionWrapper(props: SectionWrapperProps) {
	return (
		<div className="space-y-5">
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-fontBold capitalize">
				{props.title}
			</h2>
			{props.children}
		</div>
	);
}

export function Summary() {
	const baises = [
		{
			type: "left",
			bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
		},
		{
			type: "center",
			bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
		},
		{
			type: "right",
			bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
		},
	];
	return (
		<SectionWrapper title="Summary">
			<div className="bg-secondary p-6 rounded-[var(--radius)] grid gap-4 shadow-sm">
				{baises.map((bais, index) => {
					return (
						<Fragment key={index}>
							<div className="space-y-">
								<h4 className="text-lg+ sm:text-xl md:text-2xl font-medium capitalize">
									{bais.type}
								</h4>
								<BaisCard bullets={bais.bullets} />
								{index !== baises.length - 1 && (
									<Separator orientation="horizontal" />
								)}
							</div>
						</Fragment>
					);
				})}
			</div>
		</SectionWrapper>
	);
}

export function Analysis() {
	const coverage: Map<string, string> = new Map([
		["total news sources", "10"],
		["Leaning Left", "4"],
		["Leaning Right", "2"],
		["Leaning center", "4"],
		["last updated", "2023-01-01"],
		["bais distribution", "43% left"],
	]);
	return (
		<SectionWrapper title="Analysis">
			<div className="bg-secondary p-6 rounded-[var(--radius)] space-y-6 shadow-sm">
				<div className="grid sm:grid-cols-2 gap-4">
					{Array.from(coverage.entries()).map(([key, value]) => (
						<p className="capitalize" key={key}>
							{key}: <span className="font-medium"> {value}</span>
						</p>
					))}
				</div>
				<div className="flex h-6 w-full rounded-sm">
					<div className="flex items-center justify-center h-full w-1/3 bg-leftLean rounded-l-sm text-sm">
						L (32.1%)
					</div>
					<div className="flex items-center justify-center w-1/3 h-full bg-centerLean text-secondary text-sm">
						C (34%)
					</div>
					<div className="flex items-center justify-center h-full w-1/3 bg-rightLean rounded-r-sm text-sm">
						R (33.3%)
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}

export function Articles() {
	return (
		<SectionWrapper title="Articles">
			<Tabs defaultValue="center" className="w-full">
				<TabsList className="mb-4 grid w-full grid-cols-3 max-w-md">
					{bais.map((item, index) => (
						<TabsTrigger className="capitalize" value={item} key={index}>
							{item}
						</TabsTrigger>
					))}
				</TabsList>
				{bais.map((item, index) => (
					<TabsContent value={item} key={index}>
						<Carousel orientation="horizontal">
							<CarouselContent key={index}>
								{Array.from({ length: 5 }).map((_, index) => (
									<CarouselItem
										className="basis-[92%] sm:basis-[72%] md:basis-[48.5%] lg:basis-[40%]"
										key={index}
									>
										<NewsCard destination="" />
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</TabsContent>
				))}
			</Tabs>
		</SectionWrapper>
	);
}
