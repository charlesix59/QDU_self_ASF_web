function change()
{
    var name = document.getElementById('name').value;
    var iclass = document.getElementById('class0').value;
    var teacher = document.getElementById('teacher').value;
    var tel = document.getElementById('tel').value;
    document.getElementById('name0').innerHTML=name;
    document.getElementById('name1').innerHTML=name;
    document.getElementById('name2').innerHTML=name;
    document.getElementById('teacher1').innerHTML=teacher;
    document.getElementById('tel1').innerHTML=tel;
    document.getElementById('class1').innerHTML = iclass;
    var temp=document.getElementById('temp');
    //日期
    var da = new Date();
    var y=da.getFullYear();
    var m=da.getMonth()+1;
    var d=da.getDate();
    var yesterday=d-1;
    document.getElementById('data1').innerHTML=y+"-"+m+"-"+yesterday;
    document.getElementById('data2').innerHTML=y+"-"+m+"-"+yesterday;
    var w=da.getDay();
    var week=["周一","周二","周三","周四","周五","周六","周日"];
    document.getElementById("time1").innerHTML = y+"-"+m+"-"+d+" 8:00("+week[w]+")";
    document.getElementById("time2").innerHTML = y+"-"+m+"-"+d+" 22:00("+week[w]+")";
    temp.remove();
}
