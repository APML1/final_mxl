import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Component({
  selector: 'app-vehicleissue',
  templateUrl: './vehicleissue.component.html',
  styleUrls: ['./vehicleissue.component.scss']
})
export class VehicleissueComponent implements OnInit {
  fileName = 'Enroute_For_PIckup.csv';
  LOW = 'LOW';
  high = 'high';
  multiple = ['LOW', 'high'];
  li: any;
  lis!: any[];
  ab: any;
  cd: any
  class: string = '';
  qwe!: [];
  qqq!: any;
  xc: any;
  x: string = '';
  z: string = '';
  y: any[] = [];
  yab: string = '';
  distance!: any;
  searchText: any;
  now!: any;
  cvy: any;
  b!: any;
  nibba: any;
  offduty: any;
  offduty1: any;
  loading1: any
  yy: any;
  gd: any;
  loading: any
  title = 'Driver Issue';
  placeId: any
  listData: any;
  sort: any;
  available: any;
  unloading: any;
  unloading1: any;
  all: any;
  available1: any;
  available2: any;
  maintenance: any;
  intransit: any;
  enrouteforpickup: any;
  Empty_Run: any;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router,) {
  }

  ngOnInit(): void {
    setTimeout(function () {

      document.getElementById('kt1')?.click();
      document.getElementById('ck1')?.click();
      document.getElementById('ck2')?.click();
      document.getElementById('mk1')?.click();

      document.getElementById('mk2')?.click();

      document.getElementById('mk3')?.click();

      document.getElementById('mk4')?.click();

      document.getElementById('mk5')?.click();

      document.getElementById('mk6')?.click();

      console.log("CLICK HOGAYAAAAAAAAAAAAAAAAAAAAAAAA")
    }, 15000);
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w`,
    };
    // this.http
    //   .get<any>('https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Driver Issue","Gaadi Malik Issue"],"status.keyword":["Open"]}',{headers}
    //   )
    //   .subscribe((Response) => {

    //     this.li = Response;
    //     this.lis = this.li;

    //   });
    this.http
      .get<any>(
        'https://apis.fretron.com/partner-fleet/v2/allVehiclesList/',
        { headers }
      )
      .subscribe((XYZQ) => {

        this.ab = XYZQ.data;
        this.qwe = this.ab;
      });

    this.http
      .get<any>(
        'https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={} &tab=ALL VEHICLES',
        { headers }
      )

      .subscribe((Response) => {

        this.li = Response.data.records['NO GROUPING'];
        this.offduty
          = this.li;

      });
    this.http
      .get<any>(
        'https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={} &tab=AVAILABLE',
        { headers }
      )

      .subscribe((Response) => {

        this.li = Response.data.records['NO GROUPING'];
        this.available
          = this.li;
        this.searchText = 'LINE_MXL'
      });


  }

  tgt(_a: any) {
    var y;
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == 'Loaded By') {
        //console.log("hellllp",_a[i]['fieldKey'])
        y = _a[i]['value'];
        // console.log(this.y)
        break;
      }
    }

    return y;
  }
  hubsplit(_a: any) {
    var abc = ""
    if (_a.includes("APML") || _a.includes("Apml")) {
      return _a.substring(4)

    } else {
      return _a
    }


  }
  kdd(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Driver Mobile Number") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];
        break
      }
    }
    return this.x
  }
  vec(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Vehicle Number") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];

        break
      }
    }
    // return this.x
    return this.x.replace(/[^0-9]/g, '').substring(2)

  }
  vac(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Vehicle Number") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];

        break
      }
    }
    // return this.x
    return this.x

  }
  remark(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "REMARK") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];

        break
      }
    }
    // return this.x
    return this.x

  }
  vehicle() {
    this.router.navigate(['./']);
  }
  vehicleissue() {
    this.router.navigate(['./hisab']);
  }
  gaadm() {
    this.router.navigate(['./gaadimailk']);
  }
  myFunc(num1: any) {
    this.searchText = "LINE_MXL"
  }
  myFunc1(num1: any) {
    this.searchText = "LINE_SXL"
  }
  myFunc2(num1: any) {
    this.searchText = "LINE_TRAILER"
  }
  myFunc3(num1: any) {
    this.searchText = "LINE_AS"
  }
  myFunc5(num1: any) {
    this.searchText = "LINE_SP"
  }
  myFunc6(num1: any) {
    this.searchText = "ERF"
  }
  myFunc7(num1: any) {
    this.searchText = "LOCAL"
  }
  myFunc4() {
    this.searchText = ""
  }
  hub(_a: any) {
    return _a.split(" ")[0]
  }

  hub1(_a: any) {
    return _a.split(" ")[1]
  }
  loc(_a: any) {
    if (_a == "APML") {
      return '🚩'
    }
    else {
      return _a
    }
  }
  lin(_a: any) {

    var xz;
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == 'VehicleDescription') {

        xz = _a[i]['value'];

        break;
      }
      else {
        xz = "-"
      }
    }

    this.z = xz
    if (this.z.includes("MXL")) {
      this.z = '🚛'
    }
    else if (this.z.includes("SXL") || this.z == "SXL") {
      this.z = '🚚'
    }
    else if (this.z.includes("TRAILER") || this.z == 'TRAILER') {
      this.z = '🚍'
    } else {
      this.z = '🚜'
    }
    return this.z
  }

  abcdefg = setInterval(() => {
    this.gd = $('.sortable td:nth-child(3):contains("🟪")').length;
    this.cd = $('.sortable td:nth-child(3):contains("🟨")').length;
    this.loading1 = $('.loading tr:visible').length - 1;
    this.available1 = $('.avi-table1 tr:visible').length - 1;
    this.available2 = $('.avi-table2 tr:visible').length - 1;
    this.unloading1 = $('.unloading tr:visible').length - 1;
    this.offduty1 = $('.offduty tr:visible').length - 1;
    this.maintenance = $('.maintenance tr:visible').length - 1;
    this.Empty_Run = $('.Empty_Run tr:visible').length - 1;
    this.intransit = $('.intransit tr:visible').length - 1;
    this.enrouteforpickup = $('.enrouteforpickup tr:visible').length - 1;
    this.nibba = $('.sortable tr:visible').length - 1;
    this.all = this.loading1 + this.available1 + this.available2 + this.unloading1 + this.offduty1 + this.maintenance + this.intransit + this.Empty_Run;
  }, 1000);
  gad(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "FleetZoneResponsiblePerson") {

        this.x = _a[i]['indexedValue'][0].split("_")[1];
        var op = ""
        for (let j = 0; j < _a[i]['value'].split(" ").length; j++) {
          op = op + _a[i]['value'].split(" ")[j].substring(0, 1)
        }

        this.x = op
        //       if(this.x.includes('Amit Mishra')){
        // this.x='https://i.postimg.cc/pyzJ55Kr/AMIT.png'
        //       }
        //       else if(this.x.includes('Avanish sharma')){
        //         this.x='https://i.postimg.cc/3dhCXrZB/AVANISH.png'
        //                }
        //         else if(this.x.includes('Ravinder Mandal')){
        //                 this.x='https://i.postimg.cc/WqGGBxsg/RAVINDER.png'
        //                        }
        //                        else if(this.x.includes('Santosh Mandal')){
        //                         this.x='https://i.postimg.cc/HkYcFnGT/IMG-20220919-123957-removebg-preview.png'
        //                                }
        //                                else if(this.x.includes('Sumit Mishra')){
        //                                 this.x='https://i.postimg.cc/Sxg244qC/IMG-20220919-124026-removebg-preview.png'
        //                                        }
        //                                        else if(this.x.includes('Vikas Kumar')){
        //                                         this.x='https://i.postimg.cc/SN7YZ8vZ/IMG-20220919-124035-removebg-preview.png'
        //                                                }



        // else{
        // this.x=this.x
        // }
        break
      }
    }
    // substring(0, 1)
    return this.x
  }
  kcd(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Issue Type") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];
        break
      }
    }
    return this.x
  }
  roundofkms(_a: any) {
    var abc = Math.floor(_a / 1000)
    var classs = abc >= -1 && abc < 100 ? 'kmsless' : abc >= 100 && abc <= 500 ? 'kmsmore' : 'kmsmore1';
    return { abc, classs }
  }

  // pct(_a:any){


  //   var classs = _a< 0.01 ? 'kmsless':'kmsmore'
  // return classs
  // }
  adt(_a: any) {
    if (_a == 'Driver Issue') {
      return '🟨 '
    } if (_a == 'Gaadi Malik Issue') {
      return ' 🟪 '
    } else {
      return
    }
  }
  kad(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Vehicle Status Bot") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];
        if (this.x == 'Loaded' || this.x == 'Loadedvehicle' || this.x == 'LOADED') {
          return '🔴'
        } if (this.x == 'Empty' || this.x == 'Emptyvehicle') {
          return '⭕'
        }
        break
      }

    }
    return this.x
  }
  kbd(_a: any) {
    for (let i = 0; i < _a.length; i++) {
      if (_a[i]['fieldKey'] == "Problem Is") {
        //console.log("hellllp",_a[i]['fieldKey'])
        this.x = _a[i]['indexedValue'][0].split("_")[1];
        break
      }
    }
    return this.x
  }
  a = setInterval(() => { }, 1000);

  color2(_u: any) {
    var countFrom = new Date(_u).getTime();
    this.now = new Date();
    this.b = new Date(countFrom);
    this.distance = (this.now - this.b);
    this.class = Math.floor(((this.distance % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1) < 15 ? 'myStyle' : 'newStyle';
    return this.class;
  }

  GetFullName(_a: any): string {
    var countFrom = new Date(_a).getTime();
    this.now = new Date();
    this.b = new Date(countFrom);
    this.distance = (this.now - this.b);

    var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

    let days = Math.floor(this.distance / (secondsInADay) * 1);
    let hours = Math.floor((this.distance % (secondsInADay)) / (secondsInAHour) * 1);
    let mins = Math.floor(((this.distance % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    let secs = Math.floor((((this.distance % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
    let xyz = days + " d " + hours + " h"
    if (days > 1924) {
      return '-'
    }
    return xyz;
  }
  millisToMinutesAndSeconds(millis: any) {
    var countFrom = new Date(millis).getTime();
    var now = new Date();

    var distance = (now.getTime() - countFrom);
    var minutes = Math.floor(distance / 60000);
    var seconds = Number(((distance % 60000) / 1000).toFixed(0));
    var gg = seconds < 10 ? '0' : ''
    var xyz = minutes + "m " + gg + seconds + 's';
    var classs = minutes < 1440 ? 'myStyle' : 'newStyle';
    return { xyz, classs }
  }
  millisToMinutesAndSeconds1(millis: any) {
    var countFrom = new Date(millis).getTime();
    var now = new Date();

    var distance = (now.getTime() - countFrom);
    var minutes = Math.floor(distance / 60000);
    var seconds = Number(((distance % 60000) / 1000).toFixed(0));
    var gg = seconds < 10 ? '0' : ''
    var xyz = minutes + "m " + gg + seconds + 's';
    var classs = minutes < 2880 ? 'myStyle' : 'newStyle';
    return { xyz, classs }
  }
  vehno(_a: any) {
    this.x = _a
    return _a.replace(/[^0-9]/g, '').substring(2)
  }
  name(_a: any) {
    if (_a === 'ASHOK') {
      return "No assignee"
    }
    else {
      return _a
    }

  }
  searchfun1(_a: any) {

    let filter = _a
    let myTable1 = (<HTMLInputElement>document.getElementById('myTableee1'))
    let myTable2 = (<HTMLInputElement>document.getElementById('myTableee2'))
    let tr1 = myTable1?.getElementsByTagName('tr')
    let tr2 = myTable2?.getElementsByTagName('tr')
    for (var i = 0; i < tr1.length; i++) {

      let td0 = tr1[i].getElementsByTagName('td');
      for (var j = 0; j < td0.length - 1; j++) {
        var cell = tr1[i].getElementsByTagName("td")[j];
        if (cell) {
          console.log(cell.innerText.toUpperCase())
          if (cell.innerText.toUpperCase().indexOf(filter) > -1) {
            tr1[i].style.display = "";
            break;
          } else {
            tr1[i].style.display = "none";
          }
        }
      }
    }
    for (var i = 0; i < tr2.length; i++) {

      let td1 = tr2[i].getElementsByTagName('td');

      for (var j = 0; j < td1.length - 1; j++) {
        var cell = tr2[i].getElementsByTagName("td")[j];
        console.log(cell)
        if (cell) {
          // console.log(cell.innerText.toUpperCase())
          if (cell.innerText.toUpperCase().indexOf(filter) > -1) {
            tr2[i].style.display = "";
            break;
          } else {
            tr2[i].style.display = "none";
          }
        }
      }
    }
    return filter
  }


  myFunction() {
    const columns = [

      { name: '.', index: 26, isFilter: true }
    ]

    const filterColumns = columns.filter((c: any) => c.isFilter).map(c => c.index)

    const trs = document.querySelectorAll(`#myTableee1 tr:not(.header1)`)
    console.log(trs, "trs")
    const filter = (document.querySelector('#s') as HTMLInputElement).value
    const regex = new RegExp(escape(filter), 'i')
    const isFoundInTds = (td: any) => regex.test(td.innerHTML)
    const isFound = (childrenArr: any) => childrenArr.some(isFoundInTds)
    const setTrStyleDisplay = ({ style, children }: any) => {

      style.display = isFound([

        ...filterColumns.map(c => children[c]) // <-- filter Columns
      ]) ? '' : 'none'
    }

    trs.forEach(setTrStyleDisplay)
  }


}


function sortTableByColumn(table: any, column: any, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a: any, b: any) => {
    var aColText = a.querySelector(`td:nth-child(${column + 1})`)?.innerText.trim();
    var bColText = b.querySelector(`td:nth-child(${column + 1})`)?.innerText.trim();
    // console.log(aColText,".table-sortable th",bColText,column+1)
    if (column == 4 || column == 6) {
      var ahr;
      var ad
      if (aColText != "-") {
        ahr = Number(aColText.slice(
          aColText.indexOf('D') + 1,
          aColText.lastIndexOf('H'),
        ));
        ad = Number(aColText.split('D')[0])

      } else {

        ahr = -1;
        ad = -1
      }
      var bhr;
      var bd
      if (bColText != "-") {
        bhr = Number(bColText.slice(
          bColText.indexOf('D') + 1,
          bColText.lastIndexOf('H'),
        ));
        bd = Number(bColText.split('D')[0])
      } else {
        bhr = -1;
        bd = -1
      }



      console.log(ahr, "HOLAAAA")
      const aValue = ad * 60 * 60 * 24 + ahr * 60 * 60
      const bValue = bd * 60 * 60 * 24 + bhr * 60 * 60

      return aValue > bValue ? (1 * dirModifier) : (-1 * dirModifier)

    }
    else {
      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
    }

  });
  tBody.append(...sortedRows);
  table.querySelectorAll("th").forEach((th: any) => {
    th.classList.remove("th-sort-asc", "th-sort-desc");
  });
  table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle("th-sort-desc", !asc);
}
// sdfhgodsfo
function sortTableByColumnDate(table: any, column: any, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a: any, b: any) => {
    var aColText;
    var bColText;
    if (a.querySelector(`td:nth-child(${column + 1})`)?.children[0] == undefined) {
      aColText = 1111111111111111111111111110
    } else {
      aColText = a.querySelector(`td:nth-child(${column + 1})`)?.children[0].children[0].children[1].value
    };
    // const bColText =b.querySelector(`td:nth-child(${column+1})`)?.children[0];

    if (b.querySelector(`td:nth-child(${column + 1})`)?.children[0] == undefined) {
      bColText = 11111111111111111111111111111110
    } else {
      bColText = b.querySelector(`td:nth-child(${column + 1})`)?.children[0].children[0].children[1].value
    };
    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
  });
  tBody.append(...sortedRows);
  table.querySelectorAll("th").forEach((th: any) => {
    th.classList.remove("th-sort-asc", "th-sort-desc");
  });
  table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle("th-sort-desc", !asc);
}
// odshfgjko
setTimeout(function () {

  document.querySelectorAll(".table-sortable th")
    .forEach((headerCell: any) => {
      headerCell.addEventListener("click", () => {

        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc")

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending)

      })
    })
}, 100)

setTimeout(function () {

  document.querySelectorAll(".table-sortable11 th")
    .forEach((headerCell: any) => {
      headerCell.addEventListener("click", () => {

        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc")
        sortTableByColumn(tableElement, headerIndex, !currentIsAscending)

      })
    })
}, 100)



