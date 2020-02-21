function calculator() {
    let selectmonth=parseInt(document.getElementById("chonsothang").value);
    let ketluan;
if (selectmonth>=1 && selectmonth<=12) {
    switch (selectmonth) {
        case 2:
            ketluan = " co 28 hoac 29 ngay";
            break;
        case 2:
        case 4:
        case 6:
        case 11:
        case 9:
            ketluan = " co 30 ngay";
            break;
        default:
            ketluan = ' co 31 ngay';
    }
}else{
    alert('so nhap vao khong thoa man')
}
    document.getElementById("ketqua").innerHTML="Thang "+selectmonth+ketluan
}