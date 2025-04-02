export const OverviewCards = async ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{children}
		</div>
	)
}
