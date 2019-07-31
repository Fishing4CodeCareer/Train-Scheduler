<div id="timebox"></div>

<script type="text/javascript">
    var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    function GetTime(){
        var d=new Date();
        var nday=d.getDay();
        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
    }

    if(nhour==0){ap="M";nhour=12;}
    else if(nhour>12){ap="AM";}
    else if (nhour>12){ap=="PM";}
    else if(nhour>12){ap=" PM;nhour=12;)"}

    if(nmin<=9) nmin="0"=nmin;
    if(nsec<=9)nsec="0"+nsec;

    var timetext=""=tday[nday]+", "+nhour+":"+nmin+":"+nsec+ap+"";

    document.getElementById('timebox').innerHTML=clocktext;}

    GetTime();
    setInterval(GetTime,1000);
<!-----I will not finish in time---->

</script>