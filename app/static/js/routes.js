

 axios.get('http://127.0.0.1:5000/launches/')
  .then(function (response) {

    arrayLaunches = response.data;
  })
  .catch(function (error) {
  })
  .finally(function () {

      // Informaçoes do Proximo Lançamento
      var nexShowLaunchs = arrayLaunches.launches[91].flight_number;
      var campo1 = document.getElementById('NexLanch');
      var info1 = undefined;
      campo1.innerHTML = info1;
      info1 = nexShowLaunchs;
      campo1.innerHTML = info1;

      var nexShowMission = arrayLaunches.launches[91].mission_name;
      var campo2 = document.getElementById('NexMission');
      var info2 = undefined;
      campo2.innerHTML = info2;
      info2 = nexShowMission;
      campo2.innerHTML = info2;

      var nexShowYear = arrayLaunches.launches[91].launch_year;
      var campo3 = document.getElementById('NexYear');
      var info3 = undefined;
      campo3.innerHTML = info3;
      info3 = nexShowYear;
      campo3.innerHTML = info3;

      var nexShowRocket = arrayLaunches.launches[91].rocket.rocket_name;
      var campo4 = document.getElementById('NexRockt');
      var info4 = undefined;
      campo4.innerHTML = info4;
      info4 = nexShowRocket;
      campo4.innerHTML = info4;
      // FIM



      // Informaçoes do Ultimo Lançamento
      var lastShowLaunchs = arrayLaunches.launches[90].flight_number;
      var campo7 = document.getElementById('LastLanch');
      var info7 = undefined;
      campo7.innerHTML = info7;
      info7 = lastShowLaunchs;
      campo7.innerHTML = info7;

      var lastShowMission = arrayLaunches.launches[90].mission_name;
      var campo8 = document.getElementById('LastMission');
      var info8 = undefined;
      campo8.innerHTML = info8;
      info8 = lastShowMission;
      campo8.innerHTML = info8;

      var lastShowYear = arrayLaunches.launches[90].launch_year;
      var campo9 = document.getElementById('LastYear');
      var info9 = undefined;
      campo9.innerHTML = info9;
      info9 = lastShowYear;
      campo9.innerHTML = info9;

      var lastShowRocket = arrayLaunches.launches[90].rocket.rocket_name;
      var campo10 = document.getElementById('LastRockt');
      var info10 = undefined;
      campo10.innerHTML = info10;
      info10 = lastShowRocket;
      campo10.innerHTML = info10;
      // FIM

      // Tabela com os 10 Proximos lançamentos
    this.creatTableNext = function (paramLaunch) {
      var template = document.getElementById("tabLanc");
      listTd = template.content.querySelectorAll("td");
      listTd[0].textContent = paramLaunch.flight_number;
      listTd[1].textContent = paramLaunch.mission_name;
      listTd[2].textContent = paramLaunch.rocket.rocket_name;
      listTd[3].textContent = paramLaunch.launch_year;
      var bodTab = document.getElementById("showTabNext");
      var newTd = template.content.cloneNode(true);
      bodTab.appendChild(newTd);
    }
      // FIM

      // Tabela com os 10 ultimos lançamentos
    this.creatTableLast = function (paramLaunch) {
      var template = document.getElementById("tabLanc");
      listTd = template.content.querySelectorAll("td");
      listTd[0].textContent = paramLaunch.flight_number;
      listTd[1].textContent = paramLaunch.mission_name;
      listTd[2].textContent = paramLaunch.rocket.rocket_name;
      listTd[3].textContent = paramLaunch.launch_year;
      var bodTab = document.getElementById("showTabLast");
      var newTd = template.content.cloneNode(true);
      bodTab.appendChild(newTd);
    }
      // FIM

    var launches = arrayLaunches.launches;
        quantLanc = launches.length;
    
    for (var i = 91; i < 101; i++) {
      var launch = launches[i];
      this.creatTableNext(launch);
    }
    
    for (var i = 81; i < 91; i++) {
      var launch = launches[i];
      this.creatTableLast(launch);
    }

 });

