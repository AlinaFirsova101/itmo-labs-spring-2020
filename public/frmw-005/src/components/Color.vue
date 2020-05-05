<template>
	<div>
   {{ color }}: 
	 <input type="range" min="0" max="255" v-model="value" v-on:click="$emit('color-change', color, value)"/> 
	 <input type="number" min="0" max="255" v-model="value" v-on:keydown="onKeydown" v-on:click="$emit('color-change', color, value)"/>
	 </div>
</template>

<script>
export default {
	props: {
			color: {
					type: String,
					required: true
			}
	},
	data(){
		return { value: 255 }
	},
	methods: {
		onKeydown(e){
				e.preventDefault();
		}
	}
}
</script>

<style>
	input{
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}
</style>