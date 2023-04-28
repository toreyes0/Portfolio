<script setup lang="ts">
import TypeAnimation from '../components/TypeAnimation.vue'
</script>

<template>
	<div
		class="flex flex-col justify-center items-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
	>
		<p id="intro" class="text-lg delay-1000 animate-fadeIn">Hello! I'm</p>
		<TypeAnimation id="name" class="text-6xl text-center my-2" />
		<p id="desc" class="text-center sm:w-1/2 my-2 opacity-0 animate-fadeInDelayed">
			4th year Computer Science student interested in web development and data analytics. Also
			dabbled in machine learning and deep learning.
		</p>
		<div id="profiles" class="mt-4 opacity-0 animate-fadeInDelayedMore">
			<a
				class="devicon-github-original text-3xl mx-2 pointer-events-auto hover:text-neutral-100 duration-100"
				href="https://github.com/toreyes0"
				target="_blank"
			></a>
			<a
				class="devicon-linkedin-plain text-3xl mx-2 pointer-events-auto hover:text-neutral-100 duration-100"
				href="https://www.linkedin.com/in/ted-owen-reyes"
				target="_blank"
			></a>
		</div>
	</div>
</template>

<style scoped>
#intro {
	font-family: 'Open Sans';
}
</style>
