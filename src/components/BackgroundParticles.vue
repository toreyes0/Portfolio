<script setup lang="ts">
import { loadFull } from 'tsparticles'

async function particlesInit(engine: any) {
	await loadFull(engine)
}
</script>

<template>
	<Particles
		id="tsparticles"
		class="fixed -z-10"
		:particlesInit="particlesInit"
		:options="{
			background: {
				color: '#000000'
			},
			particles: {
				number: {
					value: 100,
					density: {
						enable: true,
						value_area: 800
					}
				},
				color: {
					value: '#FFFFFF'
				},
				shape: {
					type: 'circle'
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false
					}
				},
				size: {
					value: 1,
					random: true,
					anim: {
						enable: false,
						speed: 20,
						size_min: 0.1,
						sync: false
					}
				},
				line_linked: {
					enable: true,
					distance: 200,
					color: '#FFFFFF',
					opacity: 0.4,
					width: 1
				},
				move: {
					enable: true,
					speed: 3,
					direction: 'none',
					random: true,
					straight: false,
					out_mode: 'out',
					bounce: false
				}
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: true,
						mode: 'grab'
					},
					resize: true
				},
				modes: {
					grab: {
						distance: 250,
						line_linked: {
							opacity: 0.8
						}
					}
				}
			},
			retina_detect: false
		}"
	/>
</template>
