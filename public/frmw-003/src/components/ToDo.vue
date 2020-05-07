<template>
    <div>
        <ul>
					<ToDoItem
						v-for="(item, index) of list" 
						v-bind:key="item"
						v-bind:item="item"
						v-bind:index="index"
						v-on:delete-item="deleteItem"
					/>
					<div class="navigation">
						<input v-model="value"/>
						<button id="add-btn" @click="addItem(value)"> Add </button>
					</div>
				</ul>
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'

export default {
    components: {
        ToDoItem
		},
		data() {
      return { value: '', list: ['one', 'two'] }
		},
		methods:{
			deleteItem(index){
				this.list.splice(index, 1);
			},
			addItem(item){
				if (this.list.includes(item)){
					alert('You already have this task!');
				}
				else {
				this.list.push(item);
				}
				this.value = '';
			},
		}
}
</script>

<style scoped> 
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

#add-btn {
	border: 0px;
	background: rgba(21, 185, 57, 0.938);
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: rgb(255, 255, 255);
	font-size: 25px;
	margin: 15px;
}

input {
	width: 300px;
	height: 20px;
	font-size: 13px;
	border: 1px solid #ccc;
	background: #F6F6f6;
	margin: 15px;
	padding: 10px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 20px;
}

.navigation{
	display: flex;
	justify-content: center;
}
</style>