function getTime(){
    setTimeout(function(){
        var hoy = new Date();
        let mes = hoy.getMonth() + 1;
        var time = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        var date = hoy.getDate() + '/' + mes + '/' + hoy.getFullYear();
        document.getElementById('date').innerHTML=date;
        document.getElementById('time').innerHTML=time;
        getTime();
    }, 100);
}
getTime();
window.onload = getTime();
