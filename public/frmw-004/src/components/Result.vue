<template>
  <div> 
  	{{base**pow}}
  </div>
</template>

<script>
export default {
	props: {
		base:{
			type: Number,
			requred: true
		},
		pow:{
			type: Number,
			requred: true
		}
	},
}
</script>