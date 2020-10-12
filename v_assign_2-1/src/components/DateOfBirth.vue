<template>
	<div id="dates">
		<select name="year" v-model="year" v-on:change="modify">
			<!-- v-for="year in getYears()" -->
			<option
				v-for="japaneseEra in japaneseEras"
				name="year"
				:value="japaneseEra.year"
				:key="japaneseEra.year"
			>
				{{ japaneseEra.label }}
			</option>
		</select>
		<label>年</label>

		<select name="month" v-model="month" v-on:change="modify">
			<option v-for="month in months" name="month" :value="month" :key="month">
				{{ month }}
			</option>
		</select>
		<label>月</label>

		<select name="date" v-model="date">
			<option
				v-for="date in getDates(year, month)"
				name="date"
				:value="date"
				:key="date"
			>
				{{ date }}
			</option>
		</select>
		<label>日</label>
	</div>
</template>

<script>
// momentというライブラリを使用 "https://momentjs.com/"
// let moment = require("moment");
import moment from "moment";

export default {
	data() {
		return {
			japaneseEras: [],
			months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			year: 1990,
			month: 1,
			date: 1,
		};
	},
	mounted() {
      this.japaneseEras = this.genereate();
	},
	methods: {
		//生年月日欄の西暦と年号を表すメソッド
		genereate() {
			const japaneseEras = [];
			for (let y = 1912; y <= 2020; y++) {
				if (y <= 1925) {
					japaneseEras.push({ year: y, label: `${y} (大正${y - 1911}年)` });
				} else if (y <= 1988) {
					japaneseEras.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
				} else if (y <= 2018) {
					japaneseEras.push({ year: y, label: `${y} (平成${y - 1988}年)` });
				} else if (2018 <= y) {
					japaneseEras.push({ year: y, label: `${y} (令和${y - 2018}年)` });
				}
			}
			return japaneseEras;
		},
		getDates: function (year, month) {
			const maxDate = this.getFinalDate(year, month);
			return [...Array(maxDate).keys()].map((x) => x + 1);
		},
		modify: function () {
			// 年や月が変更されたとき、日が存在しなくなる場合があるので調整する。
			// 例: 2018-12-31 を選択していて月が 12 から 2 に変更された場合、日を 28 にする。
			if (!moment([this.year, this.month - 1, this.date]).isValid()) {
				this.date = this.getFinalDate(this.year, this.month);
			}
		},
		getFinalDate: function (year, month) {
			// 月末日
			return moment([year, month - 1])
				.endOf("month")
				.date();
		},
	},
};
</script>

<style scoped>
#dates {
	padding: 0;
	margin-bottom: 1rem;
}
</style>
