<template>
	<div>
		<div class="container">
			<span>STEP2</span>
			<h3>STEP2</h3>
			<p>-性別-</p>
			<p>
				<input type="radio" name="gender" value="男性" checked="checked" />男性
				<input type="radio" name="gender" value="女性" />女性
			</p>
			<br />
			<br />
			<form>
				<p>-生年月日-</p>
				<select name="dateOfBirth">
					<option value="A">A型</option>
					<option value="B">B型</option>
					<option value="O">O型</option>
					<option value="AB">AB型</option></select
				>年
				<select name="dateOfBirth">
					<option value="A">A型</option>
					<option value="B">B型</option>
					<option value="O">O型</option>
					<option value="AB">AB型</option></select
				>月
				<select name="dateOfBirth">
					<option value="A">A型</option>
					<option value="B">B型</option>
					<option value="O">O型</option>
					<option value="AB">AB型</option></select
				>日
			</form>
		</div>
      <button class="btn">次へ進む</button>
	</div>
</template>
