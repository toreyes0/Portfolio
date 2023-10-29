<script setup lang="ts">
import type { projectType } from '@/types'
import { useStore } from '../store/store'
import TypeAnimation from '../components/TypeAnimation.vue'
import gsap from 'gsap'

const store = useStore()

const projects: projectType = [
	{
		name: 'Frontend Mentor Solutions',
		description:
			'My solutions in Frontend Mentor challenges. All written in pure HTML, CSS, and JavaScript.',
		className: 'fms',
		techs: ['react-original', 'materialui-plain'],
		links: {
			source_code: 'https://github.com/toreyes0/Frontend-Mentor-Solutions',
			website: 'https://frontend-mentor-solutions-tor.vercel.app'
		}
	},
	{
		name: 'Devicon',
		description:
			'Icons about programming languages, software development, and graphic design tools.',
		className: 'di',
		techs: ['angularjs-plain', 'tailwindcss-plain'],
		links: {
			source_code: 'https://github.com/risbi0/devicon-new-ui',
			website: 'https://risbi0.github.io/devicon-new-ui'
		}
	},
	{
		name: 'Bus Reservation Demo App',
		description:
			'Online bus reservation website. Demo web app for my 3rd year Computer Science course, Human Computer Interaction.',
		className: 'brda',
		techs: ['rails-plain', 'bootstrap-plain', 'sqlite-plain'],
		links: {
			source_code: 'https://github.com/risbi0/Bus-Reservation-Demo-App'
		}
	},
	{
		name: 'YouTube Comment Spam Reporter',
		description:
			'Undergraduate thesis output. Uses a developed machine learning model to detect spam comments in YouTube.',
		className: 'ycsr',
		techs: ['flask-plain', 'tensorflow-original', 'jquery-plain', 'tailwindcss-plain'],
		links: {
			source_code: 'https://github.com/toreyes0/YouTube-Comment-Spam-Reporter'
		}
	},
	{
		name: 'Elysian Realm Guide',
		description: 'Recommended teams and builds in Elysian Realm of Honkai Impact 3rd.',
		className: 'errb',
		techs: ['typescript-plain', 'webpack-plain', 'jest-plain'],
		links: {
			source_code: 'https://github.com/risbi0/Elysian-Realm',
			website: 'https://risbi0.github.io/Elysian-Realm'
		}
	},
	{
		name: 'Azur Lane Guessing Game',
		description:
			'A game about guessing the characters in a game by its silhouette',
		className: 'algg',
		techs: ['react-original', 'firebase-plain'],
		links: {
			source_code: 'https://github.com/risbi0/al-guess-game',
			website: 'https://al-guess-game.web.app'
		}
	},
	{
		name: 'HoloPro Livestream Activity Statistics',
		description:
			"Visualization of HoloPro talents' YouTube streaming activity through timeseries heatmaps and related statistics.",
		className: 'hylas',
		techs: ['python-plain', 'pandas-original'],
		links: {
			source_code: 'https://github.com/risbi0/Hololive-Production-Livestream-Activity-Statistics',
			website: 'https://holopro-yt-livestream-activity-statistics.streamlit.app'
		}
	},
	{
		name: 'HoloCure Build Maker',
		description: 'Generate and share builds for HoloCure (Hololive fan-made game).',
		className: 'hcbm',
		techs: ['svelte-plain', 'redis-plain'],
		links: {
			source_code: 'https://github.com/risbi0/HoloCure-Build-Maker',
			website: 'https://holocure-build-maker.vercel.app'
		}
	}
]

function onEnter(el: any): void {
	gsap.to(el, {
		opacity: 1,
		y: 0,
		duration: 1,
		delay: el.dataset.index * 0.15
	})
}
</script>

<template>
	<div class="pt-24 flex justify-center">
		<TypeAnimation id="projects-header" class="text-5xl w-max h-full" />
	</div>
	<div class="pt-16 m-auto sm:w-2/3 flex flex-wrap justify-center">
		<TransitionGroup appear @enter="onEnter">
			<div
				v-for="(project, index) in projects"
				:key="project.name"
				:data-index="index"
				class="-translate-y-24 opacity-0 group card w-96 sm:mx-12 mx-4 mb-12 backdrop-blur-sm backdrop-contrast-75 hover:cursor-pointer"
			>
				<div :class="store.imgFileType" class="relative aspect-[384/230.4]">
					<div class="absolute h-full"></div>
					<img :id="project.className" />
					<div
						class="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full backdrop-blur-sm backdrop-brightness-75 duration-300 flex justify-center items-center"
					>
						<div
							v-for="tech in project.techs"
							:key="tech"
							class="tooltip"
							:data-tip="tech.split('-')[0]"
						>
							<i :class="`devicon-${tech} text-5xl mx-6`"> </i>
						</div>
					</div>
				</div>
				<div class="card-body px-6 py-5">
					<h2
						class="card-title relative w-max"
						:style="{ 'font-size': project.name.length < 25 ? '1.25rem' : '1.05rem' }"
					>
						{{ project.name }}
					</h2>
					<p>{{ project.description }}</p>
					<div class="flex justify-evenly w-full">
						<a
							v-for="(link, link_type) in project.links"
							:key="link"
							class="bg-neutral-900 text-neutral-300 flex items-center rounded-md p-3 capitalize hover:bg-neutral-300 hover:text-neutral-800 duration-100"
							:href="link"
							target="_blank"
							>{{ link_type?.replace('_', ' ') }}
						</a>
					</div>
				</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<style lang="scss">
.card-title {
	font-size: 1rem;
}
.card-title:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #d4d4d4;
	transform-origin: bottom right;
	transition: transform 0.3s ease-out;
}
.group:hover .card-title:after {
	transform: scaleX(1);
	transform-origin: bottom left;
}

$imgFormats: avif, png;
$imgs: (
	'fms': 'frontend_mentor_solutions',
	'di': 'devicon',
	'brda': 'bus_reservation_demo_app',
	'ycsr': 'youtube_comment_spam_reporter',
	'errb': 'elysian_realm_recommended_builds',
	'algg': 'al-guess-game',
	'hylas': 'holopro_yt_livestream_activity_statistics',
	'hcbm': 'holocure_build_maker'
);

@each $imgFormat in $imgFormats {
	.#{$imgFormat} {
		@each $className, $fullName in $imgs {
			##{$className} {
				content: url('../assets/img/#{$imgFormat}/#{$fullName}.#{$imgFormat}');
			}
		}
	}
}
</style>
