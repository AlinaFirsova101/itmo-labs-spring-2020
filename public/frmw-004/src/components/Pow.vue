<template>
	<div>
		<input v-model="base" id="base"/>
		<input v-model="pows" id="pows"/>
		<Result 
			v-for="pow in Number(pows)"
			v-bind:pow="pow"
			v-bind:base="base"
			v-bind:key="pow"
		/>
	</div>
</template>

<script>
import Result from "@/components/Result"

export default {
	components: {
		Result
	},
	data() {
		return { base: 0, pows: 0 }
	}
}
</script>