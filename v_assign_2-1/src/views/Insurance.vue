<template>
	<div class="main">
		<div class="container">
			<form>
				<div class="stepContainer">
					<p class="step">STEP2</p>
					<p class="ask"><font-awesome-icon class="fontAwesome" :icon="['fas', 'hand-sparkles']" />以下にお答えください</p>
				</div>
				<div class="questionContent">
					<p>現在、生命保険に加入されていますか？</p>
					<label for="insAnswerYes">
						<input
							type="radio"
							id="insAnswerYes"
							value="はい"
							v-model="insuranceAnswer"
						/>はい
					</label>

					<label for="insAnswerNo">
						<input
							type="radio"
							id="insAnswerNo"
							value="いいえ"
							v-model="insuranceAnswer"
						/>いいえ
					</label>

					<transition name="fadeIn">
						<div v-if="insuranceAnswer">
							<p>
								現在入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？
							</p>
							<label for="hosAnswerYes">
								<input
									type="radio"
									id="hosAnswerYes"
									value="はい"
									v-model="hospitalAnswer"
								/>はい
							</label>

							<label for="hosAnswerNo">
								<input
									type="radio"
									id="hosAnswerNo"
									value="いいえ"
									v-model="hospitalAnswer"
								/>いいえ
							</label>
						</div>
					</transition>

					<transition name="fadeIn">
						<div v-if="hospitalAnswer">
							<p>
								過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありますか？
							</p>
							<label for="pastAnswerYes">
								<input
									type="radio"
									id="pastAnswerYes"
									value="はい"
									v-model="pastAnswer"
								/>はい
							</label>

							<label for="pastAnswerNo">
								<input
									type="radio"
									id="pastAnswerNo"
									value="いいえ"
									v-model="pastAnswer"
								/>いいえ
							</label>
						</div>
					</transition>
				</div>
			</form>
			<div class="btnArea">
				<router-link to="/" tag="button" class="btn"
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
			insuranceAnswer: null,
			hospitalAnswer: null,
			pastAnswer: null,
		};
	},
	computed: {},
};
</script>

<style scoped>
.fadeIn-enter,
.fadeIn-leave-to {
	opacity: 0;
}
.fadeIn-enter-active {
	transition: opacity 2s;
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
