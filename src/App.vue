<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import BackgroundParticles from './components/BackgroundParticles.vue'

import { useStore } from './store/store'

const store = useStore()
store.initImgFileType()
</script>

<template>
	<NavBar />
	<RouterView />
	<BackgroundParticles />
</template>
