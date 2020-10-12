<template>
	<div class="main">
		<div class="container">
			<form>
				<div class="stepContainer">
					<!-- <LeapYear></LeapYear> -->
					<p class="step">STEP1</p>

					<p class="ask"><font-awesome-icon class="fontAwesome" :icon="['far', 'id-card']" />お客様の情報を入力してください</p>
				</div>
				<div class="questionContent">
					<p>-性別-</p>
					<p>
						<input
							type="radio"
							name="gender"
							value="男性"
							checked=""
                     id="male"
                     v-model="gender"
						/><label for="male">
                  男性</label> <input type="radio" name="gender" value="女性" id="female" v-model="gender"/><label for="female">女性</label>
					</p>
					<p>-生年月日-</p>
					<DateOfBirth></DateOfBirth>
				</div>
			</form>
			<div class="btnArea">
				<router-link to="/insurance" tag="button" class="btn"
					>次へ進む&nbsp;&nbsp;➤</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import DateOfBirth from '../components/DateOfBirth.vue';

export default {
   components: {
		DateOfBirth,
	},
	data() {
		return {
			year: "1990",
			month: 1,
			date: 1,
         nengoes: [],
         gender:'',
		};
	},
	mounted() {
		this.nengoes = this.genereate();
	},
	methods: {
		genereate() {
			const nengoes = [];
			for (let y = 1912; y <= 2020; y++) {
				if (y <= 1925) {
					nengoes.push({ year: y, label: `${y} (大正${y - 1911}年)` });
				} else if (y <= 1988) {
					nengoes.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
				} else if (y <= 2018) {
					nengoes.push({ year: y, label: `${y} (平成${y - 1988}年)` });
				} else if (2018 <= y) {
					nengoes.push({ year: y, label: `${y} (令和${y - 2018}年)` });
				}
			}
			return nengoes;
		},
	},
	computed: {},
};
</script>

<style scoped>
* {
	/* margin: 0; */
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
}
</style>
