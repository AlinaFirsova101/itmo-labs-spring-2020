<template>
    <li>
        <span> 
             <input type="checkbox" v-on:click="$emit('delete-item', index)"/> 
            {{ item  }} 
        </span>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: String,
            required: true,
				},
				index: {
            type: Number,
            required: true,
        }
		}
}
</script>

<style scoped> 
	li {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		font-size: 20px;
		border: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		padding: .5em 2rem;
		margin-bottom: 1rem;
	}
</style>