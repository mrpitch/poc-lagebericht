import Link from 'next/link'

import { Cards, Card } from '@/components/card'
import { ComponentIcon, ShieldCheck } from 'lucide-react'

export default function HomePage() {
	const gridColor =
		'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)'

	return (
		<>
			<div
				className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
				style={{
					background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
				}}
			/>

			<main className="relative z-[2] container max-w-[1100px] px-2 py-4 lg:py-8">
				<div className="relative">
					<div className="mt-24 flex flex-col items-center justify-center">
						<Cards>
							<Link href="/docs/lagebericht-2025">
								<Card
									icon={<ShieldCheck />}
									title="Die Lage der IT-Sicherheit in Deutschland 2025"
								>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua.
								</Card>
							</Link>
							<Link href="/docs/lagebericht-2024">
								<Card
									icon={<ShieldCheck />}
									title="Die Lage der IT-Sicherheit in Deutschland 2023"
								>
									At vero eos et accusam et justo duo dolores et ea rebum. Stet
									clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
									dolor sit amet.
								</Card>
							</Link>
							<Link href="/docs/lagebericht-2023">
								<Card
									icon={<ShieldCheck />}
									title="Die Lage der IT-Sicherheit in Deutschland 2023"
								>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua.
								</Card>
							</Link>

							<Link href="/docs/components">
								<Card icon={<ComponentIcon />} title="Components">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua.
								</Card>
							</Link>
						</Cards>
					</div>
				</div>
			</main>
		</>
	)
}
