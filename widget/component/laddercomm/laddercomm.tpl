<div class="styleguide admin-widget-laddercomm">
	<table width="100%">
		<tbody>
			<tr v-for="(index, item) in list">
				<td width="5%">{{ index }}.</td>
				<td width="20%" v-if="index === 0 || index === (list.length - 1)"></td>
				<td width="20%" v-else><input type="text" readonly v-model="item.start"></td>
				<td width="5%">
					<span v-if="index === 0">&lt;</span>
					<span v-if="index === (list.length - 1)">&gt;</span>
					<span v-if="index > 0 && index < (list.length - 1)">-</span>
				</td>
				<td width="20%">
					<div  v-if="index < (list.length - 1)">
						<input type="text" v-model="item.end" @blur="processData(index, item)" v-bind:readonly="readonly">
						<span>含<span>
					</div>
					<div v-else>
						<input type="text" readonly v-model="item.end">
					</div>
				</td>
				<td width="10%">{{ unit }}</td>
				<td width="20%"><input type="text" v-model="item.proportion"></td>
				<td width="5%">%</td>
				<td width="15%" v-if="!readonly">
					<div v-if="index > 0 && index < (list.length - 1)">
						<a href="javascript:;" @click="removeRule(index, item)">移除</a>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<button v-if="!readonly" class="custom-button mt10" @click="addRule">新增规则</button>
</div>