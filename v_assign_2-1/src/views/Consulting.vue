<template>
	<div class="main">
		<div class="container">
			<form>
				<div class="stepContainer">
					<p class="step">STEP2</p>
					<p class="ask"><font-awesome-icon class="fontAwesome" :icon="['fas', 'file-alt']" />ご相談内容をご記入ください</p>
				</div>
				<div class="questionContent">
					<p>-ご相談内容-</p>
					<label for="detail">
						<textarea name="" id="detail" v-model="detail"></textarea>
					</label>
				</div>
			</form>
			<div class="btnArea">
				<router-link to="/insurance" tag="button" class="btn"
					>前へ戻る&nbsp;&nbsp;➤</router-link
				>
				<router-link to="/consulting" tag="button" class="btn"
					>次へ進む&nbsp;&nbsp;➤</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			detail: "",
		};
	},
	computed: {},
};
</script>

<style scoped>
#detail {
	width: 100%;
	height: 350px;
}
.main {
	margin: auto;
	/* text-align: center; */
}
.ask {
	text-align: center;
	margin: 0;
	padding: 10px;
}
.stepContainer {
	border-bottom: solid 1px;
	background-color: aquamarine;
}
.step {
	position: absolute;
	top: -13px;
	background-color: rgb(61, 139, 228);
	color: #fff;
	font-size: 12px;
	padding: 3px 8px;
	border-radius: 2px;
}
.container {
	padding: 5rem;
}
.questionContent {
	padding: 0 1rem 1rem;
}
form {
	position: relative;
	border: solid 1px black;
}
.btnArea {
	text-align: center;
	margin-top: 1rem;
}
.btn {
	color: #fff;
	background-color: rgb(11, 228, 156);
	padding: 5px 15px;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	margin: 0 1rem;
}
</style>
