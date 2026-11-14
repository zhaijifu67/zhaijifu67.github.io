function sortTable(e, num) {
	var table = e.parentNode.parentNode;
	var t = [];
	var node = [];
	node[0] = table.children[0];
	for (var i = 1; i < table.children.length; i++) {
		node[i] = table.children[i];
		t[i - 1] = [i, table.children[i].children[num].innerHTML];
	}
	if (e.className != "sort sortDown") {
		e.className = "sort sortDown";
		t.sort(function(a, b) {
			if (parseFloat(a[1].toString()) == parseFloat(a[1])) return b[1] - a[1];
			return a[1].localeCompare(b[1]);
		});
	} else {
		e.className = "sort sortUp";
		t.sort(function(a, b) {
			if (parseFloat(a[1].toString()) == parseFloat(a[1])) return a[1] - b[1];
			return b[1].localeCompare(a[1]);
		});
	}
	table.innerHTML = "";
	table.append(node[0]);
	for (var i = 0; i < t.length; i++) {
		table.append(node[t[i][0]]);
	}
}

function saveSet() {
	var table = document.getElementById("eggDataTable");
	var t = "";
	for (var i = 1; i < table.children.length; i++) {
		if (table.children[i].children[0].children[0].checked) {
			t += "1";
		} else {
			t += "0";
		}
	}
	localStorage.setItem("set", t);
}

function aScroll(id) {
	var div = document.getElementById(id);
	if (div.nodeName == "H2") {
		div.scrollIntoView({
			behavior: 'smooth',
			block: "start",
			inline: "start"
		});
	} else
	if (div.nodeName == "TR") {
		div.previousSibling.scrollIntoView({
			behavior: 'smooth',
			block: "start",
			inline: "end"
		});
	} else {
		div.scrollIntoView({
			behavior: 'smooth',
			block: "start",
			inline: "start"
		});
	}
}


function changeSelect(e) {
	this.value = e.target.value;
}

function searchImg(text) {
	// if (typeof(text) != "string") return "";
	// var img = dataImage[text.replace(/[0-9]/ig, "")] || "";
	// if (img) return "<img src='img/" + img + ".png'>";
	// else return "";
	return "";
}

function tipsOnclick(type, e) {
	var text = "";
	var t = "";
	if (typeof(e) == "object") {
		if (e.children.length == 1) text = e.children[0].innerHTML;
		else if (e.children.length == 2) {
			text = e.children[1].innerHTML;
		} else text = e.innerHTML
	} else {
		text = e;
	}
	if (type == "skill") {
		// 技能
		for (var i = 1; i < dataSkill.length; i++) {
			if (dataSkill[i][0] == text) {
				t += "<strong><a onclick=aScroll('skill" + dataSkill[i][0] + "')>" + dataSkill[i][0] +
					"</a></strong>";
				if (dataSkill[i][1] != "") t += dataSkill[i][1]
				if (dataSkill[i][2] != 0) t += " SP" + dataSkill[i][2];
				t += "<br>";
				t += "<b>效果</b>：" + dataSkill[i][3];
				break;
			}
		}
		for (var i = 0; i < dataJob.length; i++) {
			if (dataJob[i][9] == text) {
				t += "<br>转职<a onclick=tipsOnclick('job','" + dataJob[i][1] + "')>" + dataJob[i][1] + "</a>可学习";
			}
		}
		for (var i = 0; i < dataPet.length; i++) {
			if (dataPet[i][10] == text) {
				t += "<br><a onclick=tipsOnclick('monster','" + dataPet[i][1] + "')>" + dataPet[i][0] + "." + dataPet[
						i][1] +
					"</a>会此技能";
			}
		}
	} else
	if (type == "job") {
		// 职业
		for (var i = 1; i < dataJob.length; i++) {
			if (dataJob[i][1] == text) {
				t += "<strong><a onclick=aScroll('job" + dataJob[i][1] + "')>" + dataJob[i][1] +
					"</a></strong> lv." + dataJob[i][2];
				t += "<br><b>属性</b>："
				for (var j = 3; j < 9; j++) t += dataJob[i][j] + " ";
				t += "<br><b>特性</b>：" + dataJob[i][10];
				t += "<br><b>技能</b>：<a onclick=tipsOnclick('skill','" + dataJob[i][9] + "')>" + dataJob[i][9] +
					"</a>";
				for (var j = 0; j < dataSkill.length; j++) {
					if (dataSkill[j][0] == dataJob[i][9]) {
						t += "（" + dataSkill[j][3] + "）";
					}
				}
				t += "<br><b>转职</b>：";
				for (var j = 11; j < 20; j++) {
					if (dataJob[i][j] != 0) t += dataJob[0][j] + dataJob[i][j] + " ";
				}
				break;
			}
		}
		var t2 = ""
		for (var i = 1; i < dataRecruit.length; i++) {
			for (var j = 3; j < dataRecruit[i].length; j++) {
				if (dataRecruit[i][j] == text) t2 += dataRecruit[i][0] + " ";
			}
		}
		if (t2) t += "<br><b>招募</b>：" + t2;
		else t += "<br><b>招募</b>：不可招募";

		t2 = ""
		for (var i = 0; i < dataIdle.length; i++) {
			for (var j = 4; j < 8; j++) {
				if (dataIdle[i][j] == text) t2 += "<a onclick=tipsOnclick('area','" + dataIdle[i][0] + "')>" +
					dataIdle[i][0] + "</a>";
			}
		}
		if (t2) t += "<br><b>巡游</b>：" + t2;
		else t += "<br><b>巡游</b>：无法获得";
	} else
	if (type == "monster") {
		// 怪物
		for (var i = 1; i < dataPet.length; i++) {
			if (dataPet[i][1] == text) {
				t += "<strong><a onclick=aScroll('pet" + dataPet[i][0] + "')>" + dataPet[i][0] + "." + dataPet[i][1] +
					"</a></strong>";
				if (dataPet[i][2] != "无") t += " " + dataPet[i][2];
				t += " " + dataPet[i][3] + "体型";
				t += "<br><b>属性</b>：";
				for (var j = 4; j < 10; j++) {
					t += dataPet[i][j] + " ";
				}
				t += "<br><b>技能</b>：";
				if (dataPet[i][10] != "无") {
					t += "<a onclick=tipsOnclick('skill','" + dataPet[i][10] + "')>" + dataPet[i][10] +
						"</a>";
					for (var j = 0; j < dataSkill.length; j++) {
						if (dataSkill[j][0] == dataPet[i][10]) {
							t += "（" + dataSkill[j][3] + "）";
						}
					}
				} else {
					t += "无";
				}
				var t2 = "";
				if (dataPet[i][13] != -999) t2 += "绿" + dataPet[i][13] + "~" + dataPet[i][14] + " ";
				if (dataPet[i][15] != -999) t2 += "红" + dataPet[i][15] + "~" + dataPet[i][16] + " ";
				if (dataPet[i][17] != -999) t2 += "蓝" + dataPet[i][17] + "~" + dataPet[i][18] + " ";
				if (dataPet[i][19] != -999) t2 += "紫" + dataPet[i][19] + "~" + dataPet[i][20] + " ";
				if (dataPet[i][21] != -999) t2 += "黄" + dataPet[i][21] + "~" + dataPet[i][22] + " ";
				if (dataPet[i][23] != -999) t2 += "黑" + dataPet[i][23] + "~" + dataPet[i][24] + " ";
				if (t2) t += "<br><b>色素</b>：" + t2;
				if (dataPet[i][11] != "无") t += "<br>25级进化为<a onclick=tipsOnclick('monster','" +
					dataPet[dataPet[i][11]][1] + "')>" + searchImg(dataPet[dataPet[i][11]][1]) +
					dataPet[dataPet[i][11]][0] + "." + dataPet[dataPet[i][11]][1] + "</a>";
				if (dataPet[i][12] != "无") t += "<br>50级进化为<a onclick=tipsOnclick('monster','" +
					dataPet[dataPet[i][12]][1] + "')>" + searchImg(dataPet[dataPet[i][12]][1]) +
					dataPet[dataPet[i][12]][0] + "." + dataPet[dataPet[i][12]][1] + "</a>";
				for (var j = 1; j < dataPet.length; j++) {
					if (dataPet[j][11] == dataPet[i][0]) t += "<br>可由 <a onclick=tipsOnclick('monster','" +
						dataPet[j][1] + "')>" + searchImg(dataPet[j][1]) +
						dataPet[j][0] + "." + dataPet[j][1] + "</a>25级进化";
					if (dataPet[j][12] == dataPet[i][0]) t += "<br>可由 <a onclick=tipsOnclick('monster','" +
						dataPet[j][1] + "')>" + searchImg(dataPet[j][1]) +
						dataPet[j][0] + "." + dataPet[j][1] + "</a>50级进化";
				}
				var t2 = ""
				if (dataPet[i][25] != "") {
					var area = dataPet[i][25].split("、");
					t2 += "<br>分布非常多："
					for (var j = 0; j < area.length; j++) {
						t2 += "<a onclick=tipsOnclick('area','" + area[j] + "')>" + area[j];
						for (var a = 1; a < dataArea.length; a++) {
							if (dataArea[a][1] == area[j]) t2 += dataArea[a][2];
						}
						t2 += "</a>"
					}
				}
				if (dataPet[i][26] != "") {
					var area = dataPet[i][26].split("、");
					t2 += "<br>分布多："
					for (var j = 0; j < area.length; j++) {
						t2 += "<a onclick=tipsOnclick('area','" + area[j] + "')>" + area[j];
						for (var a = 1; a < dataArea.length; a++) {
							if (dataArea[a][1] == area[j]) t2 += dataArea[a][2];
						}
						t2 += "</a>";
					}
				}
				if (dataPet[i][27] != "") {
					var area = dataPet[i][27].split("、");
					t2 += "<br>分布一般："
					for (var j = 0; j < area.length; j++) {
						t2 += "<a onclick=tipsOnclick('area','" + area[j] + "')>" + area[j];
						for (var a = 1; a < dataArea.length; a++) {
							if (dataArea[a][1] == area[j]) t2 += dataArea[a][2];
						}
						t2 += "</a>";
					}
				}
				if (dataPet[i][28] != "") {
					var area = dataPet[i][28].split("、");
					t2 += "<br>分布少："
					for (var j = 0; j < area.length; j++) {
						t2 += "<a onclick=tipsOnclick('area','" + area[j] + "')>" + area[j];
						for (var a = 1; a < dataArea.length; a++) {
							if (dataArea[a][1] == area[j]) t2 += dataArea[a][2];
						}
						t2 += "</a>";
					}
				}
				if (dataPet[i][29] != "") {
					var area = dataPet[i][29].split("、");
					t2 += "<br>分布非常少："
					for (var j = 0; j < area.length; j++) {
						t2 += "<a onclick=tipsOnclick('area','" + area[j] + "')>" + area[j];
						for (var a = 1; a < dataArea.length; a++) {
							if (dataArea[a][1] == area[j]) t2 += dataArea[a][2];
						}
						t2 += "</a>";
					}
				}
				if (t2) t += t2;

				break;
			}
		}
	} else
	if (type == "area") {
		for (var i = 0; i < dataArea.length; i++) {
			if (dataArea[i][1] == text) {
				t += "<strong><a onclick=aScroll('area" + dataArea[i][1] + "')>" + dataArea[i][1] +
					"</a></strong> lv." + dataArea[i][2] + " " + dataArea[i][0];
				t += "<br><b>敌人数量</b>：" + dataArea[i][3];
				t += "<br><b>设施</b>：";
				for (var j = 5; j < dataArea[i].length; j++)
					t += dataArea[i][j] + " ";
				for (var j = 0; j < dataArea[i][4]; j++) {
					t += "[空地] ";
				}
			}
		}
		for (var i = 0; i < dataMaze.length; i++) {
			if (dataMaze[i][0] == text) {
				t += "<br>" + dataMaze[i][1];
				if (dataMaze[i][4] == "是") t += "[无限]";
				t += " " + dataMaze[i][2] + "（" + dataMaze[i][3] + "体力）";
			}
		}
		var tt = [];
		for (var i = 0; i < dataPet.length; i++) {
			var a = dataPet[i][25].split("、");
			for (var j = 0; j < a.length; j++)
				if (a[j] == text) tt.push([dataPet[i][0], dataPet[i][1]]);
			var a = dataPet[i][26].split("、");
			for (var j = 0; j < a.length; j++)
				if (a[j] == text) tt.push([dataPet[i][0], dataPet[i][1]]);
			var a = dataPet[i][27].split("、");
			for (var j = 0; j < a.length; j++)
				if (a[j] == text) tt.push([dataPet[i][0], dataPet[i][1]]);
			var a = dataPet[i][28].split("、");
			for (var j = 0; j < a.length; j++)
				if (a[j] == text) tt.push([dataPet[i][0], dataPet[i][1]]);
			var a = dataPet[i][29].split("、");
			for (var j = 0; j < a.length; j++)
				if (a[j] == text) tt.push([dataPet[i][0], dataPet[i][1]]);
		}
		if (tt.length > 0) {
			t += "<br><b>怪物</b>："
			for (var i = 0; i < tt.length; i++) {
				t += "<a onclick=tipsOnclick('monster','" + tt[i][1] + "')>" + searchImg(tt[i][1]) + tt[i][1] +
					"</a>";
			}
		}
		var t2 = "";
		for (var i = 0; i < dataIdle.length; i++) {
			if (dataIdle[i][0] == text) {
				for (var j = 1; j < dataIdle[i].length; j++) {
					if (dataIdle[i][j] == "") continue;
					if (j <= 3) t2 += "<a onclick=tipsOnclick('room','" + dataIdle[i][j] +
						"')>" + searchImg(dataIdle[i][j]) + dataIdle[i][j] + "</a>";
					else if (j <= 8) t2 += "<a onclick=tipsOnclick('job','" + dataIdle[i][j] +
						"')>" + searchImg(dataIdle[i][j]) + dataIdle[i][j] + "</a>";
					else t2 += "<a onclick=tipsOnclick('item','" + dataIdle[i][j] +
						"')>" + searchImg(dataIdle[i][j]) + dataIdle[i][j] + "</a>";
				}
			}
		}
		if (t2) t += "<br><b>巡游</b>：" + t2;
	} else
	if (type == "item") {
		// 物品
		var t2 = "";
		for (var i = 1; i < dataEquip.length; i++) {
			if (dataEquip[i][0] == text) {
				t2 += "<strong><a onclick=aScroll('equip" + text + "')>" + text + "</a></strong>";
				t2 += " " + dataEquip[i][1] + " 重量" + dataEquip[i][2];
				t2 += "<br><b>满级属性</b>：";
				for (var j = 6; j < dataEquip[i].length; j++) {
					if (dataEquip[i][j] > 0) t2 += dataEquip[0][j] + dataEquip[i][j] + " ";
				}
			}
		}
		t += t2;
		if (!t2) t += "<strong><a onclick=aScroll('egg" + text + "')>" + text + "</a></strong>";
		var t2 = "";
		for (var i = 1; i < dataIdle.length; i++) {
			for (var j = 9; j < dataIdle[i].length; j++) {
				if (dataIdle[i][j] == text) {
					t2 += "<a onclick=tipsOnclick('area','" + dataIdle[i][0] + "')>" + dataIdle[i][0] + "</a>";
				}
			}
		}
		if (t2) t += "<br><b>巡游</b>：" + t2;
		var t2 = [];
		for (var i = 1; i < dataDecompose.length; i++) {
			for (var j = 1; j < dataDecompose[i].length; j++) {
				if (dataDecompose[i][j] == text) {
					t2.push(dataDecompose[i][0]);
					break;
				}
			}
		}
		if (t2.length > 0) {
			t += "<br><b>解析</b>：";
			var last = 0;
			var num = 0;
			var ttt = "";
			for (var i = 0; i < t2.length; i++) {
				if (i == 0) {
					t += "<a onclick=tipsOnclick('decompose','" + t2[i] + "')>" +
						searchImg(t2[i].replace(/[0-9]/ig, "")) + t2[i];
					num = parseInt(t2[i].replace(/[^0-9]/ig, ""));
					last = num;
					ttt = t2[i].replace(/[0-9]/ig, "");
				} else {
					if (ttt == t2[i].replace(/[0-9]/ig, "") && num == parseInt(t2[i].replace(/[^0-9]/ig, "")) - 1) {
						num = parseInt(t2[i].replace(/[^0-9]/ig, ""));
					} else {
						if (last != num) t += "~" + num;
						t += "</a>";
						t += "<a onclick=tipsOnclick('decompose','" + t2[i] + "')>" +
							searchImg(t2[i].replace(/[0-9]/ig, "")) + t2[i];
						num = parseInt(t2[i].replace(/[^0-9]/ig, ""));
						last = num;
						ttt = t2[i].replace(/[0-9]/ig, "");
					}
				}
			}
			if (last != num) t += "~" + num;
			t += "</a>";
		}
		t2 = "";
		for (var i = 1; i < dataShop.length; i++) {
			for (var j = 1; j < dataShop[i].length; j++) {
				if (dataShop[i][j] == text) {
					t2 += "<a onclick=tipsOnclick('shop','" + dataShop[i][0] + "')>" + dataShop[i][0] + "</a>";
				}
			}
		}
		if (t2) t += "<br><b>商店</b>：" + t2;

		for (var i = 1; i < dataEgg.length; i++) {
			if (dataEgg[i][0] == text) {
				t += "<br><b>色素</b>：";
				if (dataEgg[i][1]) t += "绿" + dataEgg[i][1] + " ";
				if (dataEgg[i][2]) t += "红" + dataEgg[i][2] + " ";
				if (dataEgg[i][3]) t += "蓝" + dataEgg[i][3] + " ";
				if (dataEgg[i][4]) t += "紫" + dataEgg[i][4] + " ";
				if (dataEgg[i][5]) t += "黄" + dataEgg[i][5] + " ";
				if (dataEgg[i][6]) t += "黑" + dataEgg[i][6] + " ";
				break;
			}
		}
	} else
	if (type == "decompose") {
		// 物品
		for (var i = 1; i < dataDecompose.length; i++) {
			if (dataDecompose[i][0] == text) {
				t += "<strong><a onclick=aScroll('decompose" + text + "')>" + text + "</a></strong>";
				t += "<br><b>可解析</b>：";
				for (var j = 1; j < dataDecompose[i].length; j++) {
					if (dataDecompose[i][j] != "")
						t += "<a onclick=tipsOnclick('item','" + dataDecompose[i][j] + "')>" + searchImg(
							dataDecompose[i][j]) + dataDecompose[i][j] +
						"</a>";
				}
				break;
			}
		}
	}
	if (type == "shop") {
		// 商店
		for (var i = 1; i < dataShop.length; i++) {
			if (dataShop[i][0] == text) {
				t += "<strong><a onclick=aScroll('shop" + text + "')>" + text + "</a></strong>";
				t += "<br><b>出售</b>：";
				for (var j = 1; j < dataShop[i].length; j++) {
					if (dataShop[i][j] != "")
						t += "<a onclick=tipsOnclick('item','" + dataShop[i][j] + "')>" + searchImg(
							dataShop[i][j]) + dataShop[i][j] +
						"</a>";
				}
				break;
			}
		}
	}
	if (type == "room") {
		// 房间
		for (var i = 1; i < dataRoom.length; i++) {
			if (dataRoom[i][0] == text) {
				t += "<strong><a onclick=aScroll('room" + text + "')>" + text + "</a></strong>";
				t += "<br><b>建设价格</b>：" + dataRoom[i][1] + "G";
				t += "<br><b>大小</b>：";
				if (dataRoom[i][2] == 1) t += "1x1";
				else if (dataRoom[i][2] == 2) t += "2x1";
				else if (dataRoom[i][2] == 3) t += "1x2";
				else if (dataRoom[i][2] == 4) t += "2x2";
				if (dataRoom[i][3]) t += "<br><b>关键属性</b>：" + dataRoom[i][3];
				if (dataRoom[i][4]) t += "<br><b>给周边提供</b>：" + dataRoom[i][4];
				if (dataRoom[i][5]) t += " " + dataRoom[i][5];
				if (dataRoom[i][6]) t += " " + dataRoom[i][6];
				if (dataRoom[i][7]) t += "<br><b>利用获得</b>：" + dataRoom[i][7];
				if (dataRoom[i][8]) t += "<br><b>购买所需开罗点</b>：" + dataRoom[i][8];
				if (dataRoom[i][9]) t += "<br><b>出售获得开罗点</b>：" + dataRoom[i][9];
				break;
			}
		}
		t2 = ""
		for (var i = 1; i < dataIdle.length; i++) {
			for (var j = 1; j < 4; j++) {
				if (dataIdle[i][j] == text) {
					t2 += "<a onclick=tipsOnclick('area','" + dataIdle[i][0] + "')>" + dataIdle[i][0] + "</a>";
				}
			}
		}
		if (t2) t += "<br><b>巡游</b>：" + t2;
	}


	if (t == "") {
		t += "<strong>" + text + "</strong><br>查找失败";
	}
	t = "<div class='close' onclick='this.parentNode.style.display=\"none\"'></div>" + t;
	tipsClick.innerHTML = t;
	tipsClick.style.display = "block";
}