<template>
	<div v-bind="$attrs"></div>
</template>

<style scoped lang="scss">
@import '../assets/typed.scss';

$speeds: (
	type: 0.1,
	pause-typed: 1000
);
$options: (
	iterations: 1,
	caret: false
);

#name {
	@include typed('Ted Owen Reyes', $speeds, $options);
}
#projects-header {
	@include typed('My Projects', $speeds, $options);
}
</style>
