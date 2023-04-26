export type projectType = {
	name: string
	description: string
	className: string
	techs: string[]
	links: {
		source_code: string
		website?: string
	}
}[]
