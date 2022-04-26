function change()
{
    var name = document.getElementById('name').value;
    var iclass = document.getElementById('class0').value;
    var teacher = document.getElementById('teacher').value;
    var tel = document.getElementById('tel').value;
	var address=document.getElementById('address-input').value;
	var beginDate=document.getElementById("begin-data-input").value;
	var endDate=document.getElementById("end-data-input").value;
	var beginTime=document.getElementById("begin-time-input").value;
	var endTime=document.getElementById("begin-time-input").value;
	var select1=document.getElementById("begin-day-input");
	var index1=select1.selectedIndex;
	var beginDay=select1[index1].innerHTML;
	var select2=document.getElementById("end-day-input");
	var index2=select2.selectedIndex;
	var endDay=select1[index2].innerHTML;
    document.getElementById('name0').innerHTML=name;
    document.getElementById('name1').innerHTML=name;
    document.getElementById('name2').innerHTML=name;
	document.getElementById('name3').innerHTML=name;
    document.getElementById('teacher1').innerHTML=teacher;
    document.getElementById('tel1').innerHTML=tel;
    document.getElementById('class1').innerHTML = iclass;
	document.getElementById("address").innerHTML = address;
    var temp=document.getElementById('temp');
    //日期
	document.getElementById("time1").innerHTML = beginDate+" "+beginTime+"("+beginDay+")";
	document.getElementById("time2").innerHTML = endDate+" "+endTime+"("+endDay+")";
    // var da = new Date();
    // var y=da.getFullYear();
    // var m=da.getMonth()+1;
    // var d=da.getDate();
    // var yesterday=d-1;
    document.getElementById('data1').innerHTML=beginDate;
    document.getElementById('data2').innerHTML= endDate;
    // var w=da.getDay();
    // var week=["周一","周二","周三","周四","周五","周六","周日"];
    // document.getElementById("time1").innerHTML = y+"-"+m+"-"+d+" 8:00("+week[w]+")";
    // document.getElementById("time2").innerHTML = y+"-"+m+"-"+d+" 22:00("+week[w]+")";
    temp.remove();
}
