<div class="styleguide admin-widget-laddercomm laddercomm">
	<table width="100%">
		<tbody>
			<tr v-for="(index, item) in list">
				<td>{{ index }}.</td>
				<!-- <td width="20%" v-if="index === 0 || index === (list.length - 1)"></td>
				<td width="20%" v-else><input type="text" readonly v-model="item.start"></td> -->
				<td>
					<template v-if="item.start !== ''">
						<input type="text" readonly v-model="item.start">
						<template v-if="index === 0">
							<span>含</span>
						</template>
						<template v-else>
							<span v-if="leftContain === '1'">含</span>
							<span v-else>不含</span>
						</template>
					</template>
				</td>
				<td width="5%">
					{{{ item.operator }}}
					<span v-if="index === (list.length - 1) && leftContain === '1'">=</span>
				</td>
				<td>
					<div  v-if="index < (list.length - 1)">
						<input type="text" v-model="item.end" @blur="processData(index, item)" v-bind:readonly="disable">
						<span v-if="leftContain === '1'">不含</span>
						<span v-else>含</span>
					</div>
					<div v-else>
						<input type="text" readonly v-model="item.end">
						<span v-if="leftContain === '1'">含</span>
						<span v-else>不含</span>
					</div>
				</td>
				<td width="5%">{{ unit || item.unit }}</td>
				<td>
					<input type="text" v-model="item.proportion" v-bind:readonly="disable">%
				</td>
				<td v-if="floatUpperLimit === '1'" width="5%">-</td>
				<td v-if="floatUpperLimit === '1'">
					<input type="text" v-model="item.upperProportion" v-bind:readonly="disable">%
				</td>
				<td v-if="!disable">
					<div v-if="index > 0 && index < (list.length - 1)">
						<a href="javascript:;" @click="removeRule(index, item)">移除</a>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<button v-if="!disable" class="custom-button mt10" @click="addRule">新增规则</button>
	<textarea v-model="dataCollect" style="display:none"></textarea>
</div>