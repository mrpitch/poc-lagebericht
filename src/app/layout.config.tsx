import Image from 'next-export-optimize-images/image'
import Logo from '@/public/images/logo-bsi.svg'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

import { ShieldCheck, ComponentIcon } from 'lucide-react'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const logo = (
	<>
		<Image
			alt="Bundesamt für Sicherheit in der Informationstechnik"
			src={Logo}
			width={40}
			height={40}
			className="hidden w-10 md:block"
			aria-label="Bundesamt für Sicherheit in der Informationstechnik"
		/>
	</>
)
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				{logo}
				<span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
					Bundesamt für Sicherheit in der Informationstechnik
				</span>
			</>
		),
	},
	links: [
		{
			type: 'menu',
			text: 'Lageberichte',
			url: '/docs',
			items: [
				{
					icon: <ShieldCheck />,
					text: 'Die Lage der IT-Sicherheit in Deutschland 2025',
					description: 'Einfache Erstellung von Dokumentationen',
					url: '/docs/lagebericht-2025',
				},
				{
					icon: <ShieldCheck />,
					text: 'Die Lage der IT-Sicherheit in Deutschland 2024',
					description:
						'Generate interactive playgrounds and docs for your OpenAPI schema.',
					url: '/docs/lagebericht-2024',
				},
				{
					icon: <ShieldCheck />,
					text: 'Die Lage der IT-Sicherheit in Deutschland 2034',
					description:
						'Generate interactive playgrounds and docs for your OpenAPI schema.',
					url: '/docs/lagebericht-2023',
				},
				{
					icon: <ComponentIcon />,
					text: 'Components',
					description: 'Übersicht über alle UI Komponenten',
					url: '/docs/components',
				},
			],
		},
	],
}
