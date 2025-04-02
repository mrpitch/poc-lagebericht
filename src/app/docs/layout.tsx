import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import { baseOptions } from '@/app/layout.config'
import { source } from '@/lib/source'

const docsOptions: DocsLayoutProps = {
	...baseOptions,
	tree: source.pageTree,
	sidebar: {
		tabs: {
			transform(option, node) {
				const meta = source.getNodeMeta(node)
				if (!meta) return option

				const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`

				return {
					...option,
					icon: (
						<div
							className="rounded-md p-1 ring-2 shadow-lg [&_svg]:size-5"
							style={
								{
									color,
									border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
									'--tw-ring-color': `color-mix(in oklab, ${color} 20%, transparent)`,
								} as object
							}
						>
							{node.icon}
						</div>
					),
				}
			},
		},
	},
}

export default function Layout({ children }: { children: ReactNode }) {
	return <DocsLayout {...docsOptions}>{children}</DocsLayout>
}
