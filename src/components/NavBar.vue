<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="fixed w-full py-1 z-10 backdrop-contrast-600 backdrop-blur-sm">
		<RouterLink
			to="/projects"
			class="nav-link relative p-3 mr-4 text-sm font-semibold uppercase tracking-wider float-right"
			><p>Projects</p></RouterLink
		>
		<RouterLink
			to="/"
			class="nav-link relative p-3 mr-4 text-sm font-semibold uppercase tracking-wider float-right"
			><p>Home</p></RouterLink
		>
	</div>
</template>

<style scoped>
p:after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #d4d4d4;
	transform-origin: bottom;
	transition: transform 0.2s ease-out;
}
.nav-link:hover p:after {
	transform: scaleX(1);
}
</style>
