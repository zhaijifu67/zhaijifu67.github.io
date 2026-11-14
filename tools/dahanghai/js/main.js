function loadPetData() {
	// 宠物清单
	var table = document.getElementById("petDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataPet.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "pet" + dataPet[i][0];
		if (i == 0) tr.id = "pet0";
		table.append(tr);
		for (var j = 0; j < dataPet[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "pet_" + dataPet[i][j];
			}
			td.innerHTML = dataPet[i][j];
			if (i != 0 && j == 10 && dataPet[i][j] != "无") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("skill", this);
				}
			}
			if (i != 0 && j == 1) {
				td.className = "tipsClick";
				td.innerHTML = searchImg(dataPet[i][j]);
				td.innerHTML += "<span>" + dataPet[i][j] + "</span>";
				td.onclick = function() {
					tipsOnclick("monster", this);
				}
			}
			if (j == 11 || j == 12) td.innerHTML = "";
			if (i != 0 && (j == 11 || j == 12) && dataPet[i][j] != "无") {
				var a = document.createElement("a");
				a.setAttribute("onclick", "aScroll('pet" + dataPet[i][j] + "');");
				a.innerHTML = dataPet[dataPet[i][j]][1];
				td.append(a);
			} else
			if (j >= 13 && (dataPet[i][j] == -999 || dataPet[i][j] == 999)) td.innerHTML = "";
			tr.append(td);
		}
	}
}

function loadEggTable(set = "") {
	// 材料清单
	var table = document.getElementById("eggDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataEgg.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "egg" + dataEgg[i][0];
		table.append(tr);
		if (i == 0) {
			var td = document.createElement("th");
			td.innerHTML = "全选/全否";
			td.onclick = function() {
				var check = !eggDataTable.children[1].children[0].children[0].checked;
				for (var i = 1; i < eggDataTable.children.length; i++) {
					eggDataTable.children[i].children[0].children[0].checked = check;
				}
			}
		} else {
			var td = document.createElement("td");
			var input = document.createElement("input");
			input.type = "checkbox";
			input.className = "form-check-input";
			input.onclick = function() {
				saveSet();
			}
			td.append(input);
			td.style.textAlign = "center";
			if (set == "") {
				if (i < 38) input.checked = "true";
			} else {
				// 根据设置打勾
				if (set[i - 1] == "1") input.checked = "true";
			}
		};
		tr.append(td);
		for (var j = 0; j < dataEgg[i].length; j++) {
			if (i == 0) var td = document.createElement("th");
			else var td = document.createElement("td");
			td.className = "egg_" + dataEgg[i][j];
			if (dataEgg[i][j] != 0) td.innerHTML = dataEgg[i][j];
			tr.append(td);
			if (i != 0 && j == 0) {
				td.innerHTML = searchImg(dataEgg[i][j]);
				td.innerHTML += "<span>" + dataEgg[i][j] + "</span>";
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
		}
	}
}

function loadEggList() {
	// 加载材料选择列表
	var list = document.getElementById("eggList");
	list.innerHTML = "";
	for (var i = 1; i < dataEgg.length; i++) {
		var op = document.createElement("option");
		op.value = dataEgg[i][0];
		var t = "";
		if (dataEgg[i][1] != 0) t += " 绿" + dataEgg[i][1];
		if (dataEgg[i][2] != 0) t += " 红" + dataEgg[i][2];
		if (dataEgg[i][3] != 0) t += " 蓝" + dataEgg[i][3];
		if (dataEgg[i][4] != 0) t += " 紫" + dataEgg[i][4];
		if (dataEgg[i][5] != 0) t += " 黄" + dataEgg[i][5];
		if (dataEgg[i][6] != 0) t += " 黑" + dataEgg[i][6];
		op.innerHTML = t;
		list.append(op);
	}
	// 加载孵化目标列表
	var list = document.getElementById("petList");
	list.innerHTML = "";
	for (var i = 1; i < dataPet.length; i++) {
		var op = document.createElement("option");
		op.value = dataPet[i][1];
		op.innerHTML = dataPet[i][0] + "." + dataPet[i][1];
		if (dataPet[i][11] != "无") op.innerHTML += " > " + dataPet[i][11] + "." +
			document.getElementById("pet" + dataPet[i][11]).children[1].innerHTML;
		if (dataPet[i][12] != "无") op.innerHTML += " > " + dataPet[i][12] + "." +
			document.getElementById("pet" + dataPet[i][12]).children[1].innerHTML;
		list.append(op);
	}
}

function changeIncubate() {
	// 选择孵化目标
	var target = document.getElementById("incubate").value;
	for (var i = 1; i < dataPet.length; i++) {
		if (target == dataPet[i][1]) {
			var a = ["号", "怪物名称", "绿", "绿", "红", "红", "蓝", "蓝", "紫", "紫", "黄", "黄", "黑", "黑"];
			var b = [dataPet[i][0], dataPet[i][1], dataPet[i][13], dataPet[i][14], dataPet[i][15], dataPet[i][16],
				dataPet[i][17], dataPet[i][18], dataPet[i][19], dataPet[i][20], dataPet[i][21], dataPet[i][22],
				dataPet[i][23], dataPet[i][24]
			];
			target = [a, b];
			break;
		}
	}
	var table = document.getElementById("incubateTable");
	table.innerHTML = "";
	for (var i = 0; i < target.length; i++) {
		var tr = document.createElement("tr");
		table.append(tr);
		for (var j = 0; j < target[i].length; j++) {
			if (i == 0) var td = document.createElement("th");
			else var td = document.createElement("td");
			if (i != 0 && j == 1) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("monster", this);
				}
			}
			if (target[i][j] != -999 && target[i][j] != 999) td.innerHTML = target[i][j];
			tr.append(td);
		}
	}
	changeEggSelect();
}

function changeEggSelect() {
	// 计算选择材料的数值和差值
	var table = document.getElementById("eggIncubateTable");
	table.innerHTML = "";
	var title = ["名称", "绿", "红", "蓝", "紫", "黄", "黑", "时间"];
	var valueBase = ["蛋基础数据", parseInt(eggGreen.value),
		parseInt(eggRed.value),
		parseInt(eggBlue.value),
		parseInt(eggPurple.value),
		parseInt(eggYellow.value),
		parseInt(eggBlack.value), 0
	];
	var valueChoose = [];
	var valueChoose1, valueChoose2, valueChoose3, valueChoose4, valueChoose5;
	for (var i = 0; i < dataEgg.length; i++) {
		if (selectEgg1.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg2.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg3.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg4.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg5.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg6.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg7.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg8.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg9.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg10.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg11.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
		if (selectEgg12.value == dataEgg[i][0])
			valueChoose.push([dataEgg[i][0], dataEgg[i][1], dataEgg[i][2], dataEgg[i][3], dataEgg[i][4],
				dataEgg[i][5], dataEgg[i][6], dataEgg[i][7]
			]);
	}
	var valueChooseMix = ["最终结果", valueBase[1], valueBase[2], valueBase[3],
		valueBase[4], valueBase[5], valueBase[6], valueBase[7]
	];
	var fix = [title, valueBase];
	for (var i = 0; i < valueChoose.length; i++) {
		fix.push(valueChoose[i]);
		valueChooseMix[1] += parseInt(valueChoose[i][1]);
		valueChooseMix[2] += parseInt(valueChoose[i][2]);
		valueChooseMix[3] += parseInt(valueChoose[i][3]);
		valueChooseMix[4] += parseInt(valueChoose[i][4]);
		valueChooseMix[5] += parseInt(valueChoose[i][5]);
		valueChooseMix[6] += parseInt(valueChoose[i][6]);
		valueChooseMix[7] += parseInt(valueChoose[i][7]);
	}
	valueChooseMix[1] = Math.max(valueChooseMix[1], 0);
	valueChooseMix[2] = Math.max(valueChooseMix[2], 0);
	valueChooseMix[3] = Math.max(valueChooseMix[3], 0);
	valueChooseMix[4] = Math.max(valueChooseMix[4], 0);
	valueChooseMix[5] = Math.max(valueChooseMix[5], 0);
	valueChooseMix[6] = Math.max(valueChooseMix[6], 0);
	fix.push(valueChooseMix);
	// 推断符合条件的宠物
	var p = PetEligibleDo(valueChooseMix);

	var valueDifference = ["属性差值", 0, 0, 0, 0, 0, 0, ""];
	if (incubateTable.innerHTML != "") {
		var target = incubateTable.children[1];
		// 绿
		var min = parseInt(target.children[2].innerHTML);
		var max = parseInt(target.children[3].innerHTML);
		if (valueChooseMix[1] < min) valueDifference[1] = valueChooseMix[1] - min;
		else if (valueChooseMix[1] > max) valueDifference[1] = valueChooseMix[1] - max;
		else valueDifference[1] = "√";
		// 红
		var min = parseInt(target.children[4].innerHTML);
		var max = parseInt(target.children[5].innerHTML);
		if (valueChooseMix[2] < min) valueDifference[2] = valueChooseMix[2] - min;
		else if (valueChooseMix[2] > max) valueDifference[2] = valueChooseMix[2] - max;
		else valueDifference[2] = "√";
		// 蓝
		var min = parseInt(target.children[6].innerHTML);
		var max = parseInt(target.children[7].innerHTML);
		if (valueChooseMix[3] < min) valueDifference[3] = valueChooseMix[3] - min;
		else if (valueChooseMix[3] > max) valueDifference[3] = valueChooseMix[3] - max;
		else valueDifference[3] = "√";
		// 紫
		var min = parseInt(target.children[8].innerHTML);
		var max = parseInt(target.children[9].innerHTML);
		if (valueChooseMix[4] < min) valueDifference[4] = valueChooseMix[4] - min;
		else if (valueChooseMix[4] > max) valueDifference[4] = valueChooseMix[4] - max;
		else valueDifference[4] = "√";
		// 黄
		var min = parseInt(target.children[10].innerHTML);
		var max = parseInt(target.children[11].innerHTML);
		if (valueChooseMix[5] < min) valueDifference[5] = valueChooseMix[5] - min;
		else if (valueChooseMix[5] > max) valueDifference[5] = valueChooseMix[5] - max;
		else valueDifference[5] = "√";
		// 黑
		var min = parseInt(target.children[12].innerHTML);
		var max = parseInt(target.children[13].innerHTML);
		if (valueChooseMix[6] < min) valueDifference[6] = valueChooseMix[6] - min;
		else if (valueChooseMix[6] > max) valueDifference[6] = valueChooseMix[6] - max;
		else valueDifference[6] = "√";
		fix.push(valueDifference);
	}
	PetEligible.innerHTML = "符合条件的有（" + p.length + "种）<br>";
	for (var i = 0; i < p.length; i++) {
		PetEligible.innerHTML +=
			" <a onclick=tipsOnclick('monster','" + dataPet[p[i]][1] + "')>" +
			dataPet[p[i]][0] + "." + dataPet[p[i]][1] + "</a>";
	}


	// 生成表格
	for (var i = 0; i < fix.length; i++) {
		var tr = document.createElement("tr");
		table.append(tr);
		for (var j = 0; j < fix[i].length; j++) {
			if (i == 0) var td = document.createElement("th");
			else var td = document.createElement("td");
			if (i != 0 && j == 0 && fix[i][j] != "最终结果" && fix[i][j] != "属性差值" && fix[i][j] != "蛋基础数据") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
			td.innerHTML = fix[i][j];
			if (fix[i][j] == "最终结果") tr.className = "tableBlue";
			if (fix[i][j] == "属性差值") tr.className = "tableGreen";
			tr.append(td);
		}
	}
}

function PetEligibleDo(valueChooseMix) {
	var starNum = document.getElementById("eggStar").value * 100;
	valueChooseMix[1] = Math.max(0, valueChooseMix[1]);
	valueChooseMix[1] = Math.min(starNum, valueChooseMix[1]);
	valueChooseMix[2] = Math.max(0, valueChooseMix[2]);
	valueChooseMix[2] = Math.min(starNum, valueChooseMix[2]);
	valueChooseMix[3] = Math.max(0, valueChooseMix[3]);
	valueChooseMix[3] = Math.min(starNum, valueChooseMix[3]);
	valueChooseMix[4] = Math.max(0, valueChooseMix[4]);
	valueChooseMix[4] = Math.min(starNum, valueChooseMix[4]);
	valueChooseMix[5] = Math.max(0, valueChooseMix[5]);
	valueChooseMix[5] = Math.min(starNum, valueChooseMix[5]);
	valueChooseMix[6] = Math.max(0, valueChooseMix[6]);
	valueChooseMix[6] = Math.min(starNum, valueChooseMix[6]);
	// 计算孵化可能性
	var returnText = [];
	for (var i = 1; i < dataPet.length; i++) {
		if (dataPet[i][13] <= valueChooseMix[1] && dataPet[i][14] >= valueChooseMix[1] &&
			dataPet[i][15] <= valueChooseMix[2] && dataPet[i][16] >= valueChooseMix[2] &&
			dataPet[i][17] <= valueChooseMix[3] && dataPet[i][18] >= valueChooseMix[3] &&
			dataPet[i][19] <= valueChooseMix[4] && dataPet[i][20] >= valueChooseMix[4] &&
			dataPet[i][21] <= valueChooseMix[5] && dataPet[i][22] >= valueChooseMix[5] &&
			dataPet[i][23] <= valueChooseMix[6] && dataPet[i][24] >= valueChooseMix[6]) {
			returnText.push(i);
		}
	}

	return returnText;
}

function countIncubate() {
	// 自动计算孵化材料
	var t = document.getElementById("incubateTable").children[1];
	var target = [parseInt(t.children[2].innerHTML) || -999, parseInt(t.children[3].innerHTML || 999),
		parseInt(t.children[4].innerHTML) || -999, parseInt(t.children[5].innerHTML) || 999,
		parseInt(t.children[6].innerHTML) || -999, parseInt(t.children[7].innerHTML) || 999,
		parseInt(t.children[8].innerHTML) || -999, parseInt(t.children[9].innerHTML) || 999,
		parseInt(t.children[10].innerHTML) || -999, parseInt(t.children[11].innerHTML) || 999,
		parseInt(t.children[12].innerHTML) || -999, parseInt(t.children[13].innerHTML) || 999,
	]
	var g, r, b, p, y, black;
	g = target[1] - target[0];
	r = target[3] - target[2];
	b = target[5] - target[4];
	p = target[7] - target[6];
	y = target[9] - target[8];
	black = target[11] - target[10];
	var min = Math.min(g, r, b, p, y, black);
	// 修改蛋星级
	var maxNum = Math.max(target[0], target[2], target[4], target[6], target[8], target[10]);
	var star = 1;
	if (maxNum > 400) star = 5;
	else if (maxNum > 300) star = 4;
	else if (maxNum > 200) star = 3;
	else if (maxNum > 100) star = 2;
	if (parseInt(eggStar.value) < star) {
		// 修改
		console.log("选择的蛋星级过低");
		eggStar.value = star;
		changeEggStar();
	}
	if (min == g) {
		// 绿最严格
		countDo(1, target);
	} else if (min == r) {
		// 绿最严格
		countDo(2, target);
	} else if (min == b) {
		// 绿最严格
		countDo(3, target);
	} else if (min == p) {
		// 绿最严格
		countDo(4, target);
	} else if (min == y) {
		// 绿最严格
		countDo(5, target);
	} else if (min == black) {
		// 绿最严格
		countDo(6, target);
	}

	function countDo(color, target) {
		var base = [eggStar.value + "星蛋", parseInt(eggGreen.value), parseInt(eggRed.value), parseInt(eggBlue.value),
			parseInt(eggPurple.value), parseInt(eggYellow.value), parseInt(eggBlack.value), 0, 0
		];
		var dataEggNew = [
			[""]
		];
		var data = document.getElementById("eggDataTable");
		for (var i = 1; i < data.children.length; i++) {
			if (data.children[i].children[0].children[0].checked) {
				var arr = [];
				arr[0] = data.children[i].children[1].children[data.children[i].children[1].children.length - 1]
					.innerHTML;
				for (var j = 1; j < data.children[i].children.length - 1; j++) {
					arr[j] = parseFloat(data.children[i].children[j + 1].innerHTML) || 0;
				}
				dataEggNew.push(arr);
			};
		}
		dataEggNew.sort(function(x, y) {
			return x[color] - y[color];
		});

		var returnNum = [];
		var max = target[color * 2 - 1];
		var result = [];
		var maxTime = document.getElementById("countTimesMax").value;
		var arr = [];

		var r = 0;
		countDoFor(1, 1, color, 0);

		function countDoFor(ii, times, color) {
			for (var i = ii; i < dataEggNew.length; i++) {
				if (result.length >= maxTime) break;
				var sum = base[color];
				for (var j = 0; j < arr.length; j++) {
					sum += dataEggNew[arr[j]][color];
					if (sum > max) break;
				}
				if (times > parseInt(eggStar.value) + 4) {
					r++;
					// 进行数值判定
					for (var c = 1; c < 7; c++) {
						var sum = base[c];
						for (var j = 0; j < arr.length; j++) {
							sum += dataEggNew[arr[j]][c];
						}
						if (sum > target[2 * c - 1] || sum < target[2 * c - 2]) c = 7;
						if (c == 6) {
							var newArr = [];
							for (var n = 0; n < arr.length; n++) {
								newArr[n] = arr[n];
							}
							result.push(newArr);
						}
					}
					break;
				}
				arr[times - 1] = i;
				countDoFor(i, times + 1, color);
			}
			return
		}

		var resultNum = [];
		for (var i = 0; i < result.length; i++) {
			resultNum[i] = [];
			for (var j = 0; j < result[i].length; j++) {
				if (j == 0) {
					resultNum[i][0] = "";
					resultNum[i][1] = 0;
					resultNum[i][2] = 0;
					resultNum[i][3] = 0;
					resultNum[i][4] = 0;
					resultNum[i][5] = 0;
					resultNum[i][6] = 0;
					resultNum[i][7] = 0;
				}
				// 名称
				resultNum[i][0] += dataEggNew[result[i][j]][0];
				if (j != result[i].length - 1) resultNum[i][0] += "，";
				// 属性
				resultNum[i][1] += dataEggNew[result[i][j]][1];
				resultNum[i][2] += dataEggNew[result[i][j]][2];
				resultNum[i][3] += dataEggNew[result[i][j]][3];
				resultNum[i][4] += dataEggNew[result[i][j]][4];
				resultNum[i][5] += dataEggNew[result[i][j]][5];
				resultNum[i][6] += dataEggNew[result[i][j]][6];
				resultNum[i][7] += dataEggNew[result[i][j]][7];
			}
			resultNum[i][1] += base[1];
			resultNum[i][2] += base[2];
			resultNum[i][3] += base[3];
			resultNum[i][4] += base[4];
			resultNum[i][5] += base[5];
			resultNum[i][6] += base[6];
			resultNum[i][8] = PetEligibleDo(resultNum[i]).length;
		}
		var table = document.getElementById("countTable");
		table.innerHTML = "";
		// 生成表格
		var title = ["计算完成" + r + "，共" + result.length + "种符合条件", "绿", "红", "蓝", "紫", "黄", "黑", "时间", "可孵化"];
		var fix = [title, base];
		// // 根据设置排序
		// var sort = document.getElementById("countSort").value;
		// if (sort == "1") {
		// 	resultNum.sort(function(x, y) {
		// 		return x[8] - y[8];
		// 	})
		// } else if (sort == "2") {
		// 	resultNum.sort(function(x, y) {
		// 		return x[7] - y[7];
		// 	})
		// }
		// 添加入最终数组
		for (var i = 0; i < resultNum.length; i++) {
			fix.push(resultNum[i]);
		}
		for (var i = 0; i < fix.length; i++) {
			var tr = document.createElement("tr");
			table.append(tr);
			for (var j = 0; j < fix[i].length; j++) {
				if (i == 0) {
					var td = document.createElement("th");
					td.className = "sort";
					td.setAttribute("i", j);
					td.onclick = function() {
						sortTable(this, this.getAttribute("i"));
					}
				} else var td = document.createElement("td");
				if (i > 0) {
					tr.onclick = function() {
						// 点击方案，将方案加入到input
						var t = this.children[0].innerHTML.split("，");
						selectEgg1.value = t[0];
						selectEgg2.value = t[1];
						selectEgg3.value = t[2];
						selectEgg4.value = t[3];
						selectEgg5.value = t[4];
						if (t.length >= 6) {
							selectEgg6.value = t[5];
							selectEgg6.disabled = false;
						} else selectEgg6.disabled = true;
						if (t.length >= 7) {
							selectEgg7.value = t[6];
							selectEgg7.disabled = false;
						} else selectEgg7.disabled = true;
						if (t.length >= 6) {
							selectEgg6.value = t[5];
							selectEgg6.disabled = false;
						} else selectEgg6.disabled = true;
						if (t.length >= 8) {
							selectEgg8.value = t[7];
							selectEgg8.disabled = false;
						} else selectEgg8.disabled = true;
						if (t.length >= 9) {
							selectEgg9.value = t[8];
							selectEgg9.disabled = false;
						} else selectEgg9.disabled = true;

						changeEggSelect();
					}
				}
				td.innerHTML = fix[i][j];
				tr.append(td);
			}
		}
	}
}

function changeEggStar() {
	// 更改蛋的星级
	var star = parseInt(eggStar.value);
	if (star >= 2) selectEgg6.disabled = false;
	else {
		selectEgg6.disabled = true;
		selectEgg6.value = "";
	}
	if (star >= 3) selectEgg7.disabled = false;
	else {
		selectEgg7.disabled = true;
		selectEgg7.value = "";
	}
	if (star >= 4) selectEgg8.disabled = false;
	else {
		selectEgg8.disabled = true;
		selectEgg8.value = "";
	}
	if (star >= 5) selectEgg9.disabled = false;
	else {
		selectEgg9.disabled = true;
		selectEgg9.value = "";
	}
	if (star >= 6) {
		selectEgg10.disabled = false;
		selectEgg11.disabled = false;
		selectEgg12.disabled = false;
	} else {
		selectEgg10.disabled = true;
		selectEgg11.disabled = true;
		selectEgg12.disabled = true;
		selectEgg10.value = "";
		selectEgg11.value = "";
		selectEgg12.value = "";
	}
	changeEggSelect();
}

function loadJobTable() {
	// 加载职业表格
	var table = document.getElementById("jobDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataJob.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "job" + dataJob[i][1];
		table.append(tr);
		for (var j = 0; j < dataJob[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "job_" + dataJob[i][j];
				td.innerHTML += searchImg(dataJob[i][j]);
			}
			if (dataJob[i][j] != 0) td.innerHTML += "<span>" + dataJob[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 9) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("skill", this);
				}
			}
			if (i != 0 && j == 1) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("job", this);
				}
			}
		}
	}
}

function loadRecruitTable() {
	// 加载招募表格
	var table = document.getElementById("recruitDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataRecruit.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "recruit" + dataRecruit[i][0];
		table.append(tr);
		for (var j = 0; j < dataRecruit[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "recruit_" + dataRecruit[i][j];
				td.innerHTML += searchImg(dataRecruit[i][j]);
			}
			if (dataRecruit[i][j] != 0) td.innerHTML += "<span>" + dataRecruit[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j > 2 && dataRecruit[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("job", this);
				}
			}
		}
	}
}

function loadSkillTable() {
	// 加载技能表格
	var table = document.getElementById("skillDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataSkill.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "skill" + dataSkill[i][0];
		table.append(tr);
		for (var j = 0; j < dataSkill[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "skill_" + dataSkill[i][j];
				td.innerHTML += searchImg(dataSkill[i][j]);
			}
			if (dataSkill[i][j] != 0) td.innerHTML += "<span>" + dataSkill[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("skill", this);
				}
			}
		}
	}
}

function loadActivity() {
	// 加载活动
	var act = [];
	var week = new Date().getDay();
	var date = new Date().getDate();
	var edd = date.toString()[date.toString().length - 1];
	act = ["周一：迷宫探险所需体力减半", "周二：建造所需金钱减少", "周二：甲板掉落金币增加", "周三：店铺商品半价", "周一至周三：网络对战所需体力减半",
		"周四：体力恢复速度加快", "周五：强化获得经验加倍", "周四至周五：好友对战所需体力减半",
		"周六：迷宫探险获得金钱五倍", "周六：商人收购价格双倍", "周日：船内获得知识双倍", "周日：解析效果增加", "周六至周日：航海体力减半", "周六至周日：蛋的孵化速度5倍",
		"每月3号：宠物牧场神签七折", "每月5号：客栈招募召回九折",
		"尾数为1：双六屋所需奖牌减半", "尾数为2：好友对战可获得1枚奖牌", "尾数为3：开罗中心商品折扣"
	];
	act2 = [];
	if (week == 1) act2[0] = 1;
	if (week == 2) {
		act2[1] = 1;
		act2[2] = 1;
	}
	if (week == 3) act2[3] = 1;
	if (week >= 1 && week <= 3) act2[4] = 1;

	if (week == 4) act2[5] = 1;
	if (week == 5) act2[6] = 1;
	if (week >= 4 && week <= 5) act2[7] = 1;
	if (week == 6) {
		act2[8] = 1;
		act2[9] = 1;
	}
	if (week == 0) {
		act2[10] = 1;
		act2[11] = 1;
	}
	if (week == 6 || week == 0) {
		act2[12] = 1;
		act2[13] = 1;
	}
	if (date == 3) act2[14] = 1;
	if (date == 5) act2[15] = 1;
	if (edd == "1") act2[16] = 1;
	if (edd == "2") act2[17] = 1;
	if (edd == "3") act2[18] = 1;
	activityContent.innerHTML = "";
	for (var i = 0; i < act.length; i++) {
		var div = document.createElement("div");
		div.className = "col-12 col-md-6 col-xxl-4";
		activityContent.append(div);
		var d = document.createElement("div");
		div.append(d);
		d.innerHTML = act[i];
		if (act2[i] == 1) d.className = "btn btn-warning w-100 mt-2";
		else d.className = "btn border w-100 mt-2";
	}
}

function loadAreaTable() {
	// 加载地区表格
	var table = document.getElementById("areaDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataArea.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "area" + dataArea[i][1];
		table.append(tr);
		for (var j = 0; j < dataArea[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "area_" + dataArea[i][j];
				td.innerHTML += searchImg(dataArea[i][j]);
			}
			if (dataArea[i][j] != 0) td.innerHTML += "<span>" + dataArea[i][j] + "</span>";
			tr.append(td);

			if (i != 0 && j == 1) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("area", this);
				}
			}
		}
	}
}

function loadIdleTable() {
	// 加载巡游表格
	var table = document.getElementById("idleDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataIdle.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "idle" + dataIdle[i][0];
		table.append(tr);
		for (var j = 0; j < dataIdle[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "idle_" + dataIdle[i][j];
				td.innerHTML += searchImg(dataIdle[i][j]);
			}
			if (dataIdle[i][j] != 0) td.innerHTML += "<span>" + dataIdle[i][j] + "</span>";
			tr.append(td);

			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("area", this);
				}
			}
			if (i != 0 && j >= 1 && j <= 3 && dataIdle[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("room", this);
				}
			}
			if (i != 0 && j >= 4 && j <= 8 && dataIdle[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("job", this);
				}
			}
			if (i != 0 && j >= 9 && dataIdle[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
		}
	}
}


function loadMazeTable() {
	// 加载迷宫表格
	var table = document.getElementById("mazeDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataMaze.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "maze" + dataMaze[i][0];
		table.append(tr);
		for (var j = 0; j < dataMaze[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.innerHTML += searchImg(dataMaze[i][j]);
				if (j == 2) td.className = "maze_" + dataMaze[i][j][0];
				else td.className = "maze_" + dataMaze[i][j];
			}
			if (dataMaze[i][j] != 0) td.innerHTML += "<span>" + dataMaze[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("area", this);
				}
			}
		}
	}
}


function loadDecomposeTable() {
	// 加载解析表格
	var table = document.getElementById("decomposeDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataDecompose.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "decompose" + dataDecompose[i][0];
		table.append(tr);
		for (var j = 0; j < dataDecompose[i].length; j++) {
			// 表格
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "decompose_" + dataDecompose[i][j];
				td.innerHTML += searchImg(dataDecompose[i][j]);
			}
			if (dataDecompose[i][j] != 0) td.innerHTML += "<span>" + dataDecompose[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0 && dataDecompose[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("decompose", this);
				}
			}
			if (i != 0 && j > 0 && dataDecompose[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
		}
	}
}


function loadEquipTable() {
	// 加载装备表格
	var table = document.getElementById("equipDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataEquip.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "equip" + dataEquip[i][0];
		table.append(tr);
		for (var j = 0; j < dataEquip[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "equip_" + dataEquip[i][j];
				td.innerHTML += searchImg(dataEquip[i][j]);
			}
			if (dataEquip[i][j] != 0) td.innerHTML += "<span>" + dataEquip[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
		}
	}
}

function loadShopTable() {
	// 加载商店表格
	var table = document.getElementById("shopDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataShop.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "shop" + dataShop[i][0];
		table.append(tr);
		for (var j = 0; j < dataShop[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				td.className = "shop_" + dataShop[i][j];
				td.innerHTML += searchImg(dataShop[i][j]);
			}
			if (dataShop[i][j] != 0) td.innerHTML += "<span>" + dataShop[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("shop", this);
				}
			}
			if (i != 0 && j != 0 && dataShop[i][j] != "") {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("item", this);
				}
			}
		}
	}
}


function loadPeopleTable() {
	// 加载建筑列表
	var list = document.getElementById("buildingList");
	list.innerHTML = "";
	for (var i = 1; i < dataBuilding.length - 2; i++) {
		var op = document.createElement("option");
		op.value = dataBuilding[i][0];
		var t = "人数";
		for (var j = 8; j < 13; j++)
			t += dataBuilding[i][j] + " ";
		op.innerHTML = t;
		list.append(op);
	}
	// 表格
	var table = document.getElementById("peopleDataTable");
	var title = ["岛屿", "建筑", "", "", ""];
	var data = [];
	data.push(title);
	for (var i = 1; i < dataArea.length; i++) {
		var d = [];
		d.push(dataArea[i][1]);
		for (var j = 5; j < 8; j++) {
			if (dataArea[i][j] != "") d.push(dataArea[i][j]);
		}
		for (var j = 0; j < dataArea[i][4]; j++) {
			d.push("空地");
		}
		data.push(d);
	}
	// 表格
	for (var i = 0; i < data.length; i++) {
		var tr = document.createElement("tr");
		table.append(tr);
		for (var j = 0; j < 9; j++) {
			if (i != 0 && j == 0) {
				var td = document.createElement("td");
				var input = document.createElement("input");
				input.type = "checkbox";
				input.className = "form-check-input";
				input.checked = "true";
				input.setAttribute("i", i);
				input.onclick = function() {
					changePeople(this.getAttribute("i"));
				}
				td.append(input);
				tr.append(td);
			}
			if (i == 0 && j == 0) {
				var td = document.createElement("th");
				td.innerHTML = "解锁";
				tr.append(td);
			}
			if (i == 0) {
				var td = document.createElement("th");
			} else {
				var td = document.createElement("td");
			}
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("area", this);
				}
			}
			if (data[i][j]) {
				if (data[i][j] == "空地") {
					var input = document.createElement("input");
					td.append(input);
					input.className = "form-control d-inline-block";
					input.style.width = "6em";
					input.setAttribute("list", "buildingList");
					input.setAttribute("i", i);
					input.onchange = function() {
						changePeople(this.getAttribute("i"));
					}
				} else {
					td.innerHTML = "<span class='d-inline-block' style='width:6em;'>" + data[i][j] + "</span>"
				};
				if (i != 0 && j > 0) {
					var input = document.createElement("input");
					input.type = "number";
					input.value = 1;
					input.style.width = "3em";
					input.className = "form-control d-inline-block";
					input.setAttribute("i", i);
					input.onchange = function() {
						changePeople(this.getAttribute("i"));
					}
					td.append(input);
				}
			} else {
				td.innerHTML = "";
			}
			tr.append(td);
		}
		if (i == 0) {
			var td = document.createElement("th");
			td.innerHTML = "总人口";
			td.id = "peopleMax";
		} else {
			var td = document.createElement("td");
			td.innerHTML = "";
			td.id = "people" + i;
		}
		tr.append(td);
	}
	for (var i = 1; i < data.length; i++)
		changePeople(i);
}


function changePeople(num) {
	// 人口变化
	var table = document.getElementById("peopleDataTable");
	var tr = table.children[num];
	var sum = 0;
	if (tr.children[0].children[0].checked) {
		for (var i = 2; i < tr.children.length - 1; i++) {
			if (tr.children[i].children.length != 2) break;
			if (tr.children[i].children[0].nodeName == "SPAN") {
				// 原生
				var name = tr.children[i].children[0].innerHTML;
				var level = parseInt(tr.children[i].children[1].value);
				for (var j = 1; j < dataBuilding.length; j++) {
					if (name == dataBuilding[j][0]) {
						for (var a = 1; a <= level; a++)
							sum += dataBuilding[j][2 + a];
					}
				}
			} else {
				var name = tr.children[i].children[0].value;
				var level = parseInt(tr.children[i].children[1].value);
				for (var j = 1; j < dataBuilding.length; j++) {
					if (name == dataBuilding[j][0]) {
						for (var a = 1; a <= level; a++)
							sum += dataBuilding[j][7 + a];
					}
				}
			}
		}
	}
	document.getElementById("people" + num).innerHTML = sum;
	sum = 0;
	for (var i = 1; i < table.children.length; i++) {
		sum += parseInt(document.getElementById("people" + i).innerHTML);
	}
	peopleMax.innerHTML = "总人口" + sum;
}

function loadRoomTable() {
	// 加载商店表格
	var table = document.getElementById("roomDataTable");
	table.innerHTML = "";
	for (var i = 0; i < dataRoom.length; i++) {
		var tr = document.createElement("tr");
		tr.id = "room" + dataRoom[i][0];
		table.append(tr);
		for (var j = 0; j < dataRoom[i].length; j++) {
			if (i == 0) {
				var td = document.createElement("th");
				td.className = "sort";
				td.setAttribute("i", j);
				td.onclick = function() {
					sortTable(this, this.getAttribute("i"));
				}
			} else {
				var td = document.createElement("td");
				if (j == 6) {
					td.innerHTML += searchImg(dataRoom[i][j].replace(/[0-9\+]/ig, ""));
					td.className = "room_" + dataRoom[i][j].replace(/[0-9\+]/ig, "");
				} else {
					td.innerHTML += searchImg(dataRoom[i][j]);
					td.className = "room_" + dataRoom[i][j];
				}
			}
			if (dataRoom[i][j] != 0) td.innerHTML += "<span>" + dataRoom[i][j] + "</span>";
			tr.append(td);
			if (i != 0 && j == 0) {
				td.className = "tipsClick";
				td.onclick = function() {
					tipsOnclick("room", this);
				}
			}
		}
	}
}