import React, { useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import insertCss from 'insert-css';

// define the CSS with the id of your menu
insertCss(`
  .g6-component-contextmenu {
    position: absolute;
    list-style-type: none;
    padding: 10px 8px;
    left: -150px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
  }
  .g6-component-contextmenu span {
    cursor: pointer;
		list-style-type:none;
    list-style: none;
    margin-left: 0px;
  }
  .g6-component-contextmenu span:hover {
    color: #5B8FF9;
  }
`);

// const tipDiv = document.createElement('div');
// tipDiv.innerHTML = `Double click to collapse/expand a combo; Context menu with right click to uncombo/re-combo. 双击 Combo 进行展开/收起；右键菜单选择解散/重组`;
// document.getElementById('container').appendChild(tipDiv);

const data = {
    "nodes": [
        {
            "id": "0",
            "comboId": "ams"
        },
        {
            "id": "1",
            "comboId": "ams"
        },
        {
            "id": "2",
            "comboId": "ams"
        },
        {
            "id": "3",
            "comboId": "ams"
        },
        {
            "id": "4",
            "comboId": "ams"
        },
        {
            "id": "5",
            "comboId": "ams"
        },
        {
            "id": "6",
            "comboId": "ams"
        },
        {
            "id": "7",
            "comboId": "ams"
        },
        {
            "id": "8",
            "comboId": "ams"
        },
        {
            "id": "9",
            "comboId": "ah"
        },
        {
            "id": "10",
            "comboId": "ams"
        },
        {
            "id": "11",
            "comboId": "ams"
        },
        {
            "id": "12",
            "comboId": "ams"
        },
        {
            "id": "13",
            "comboId": "mt"
        },
        {
            "id": "14",
            "comboId": "ams"
        },
        {
            "id": "15",
            "comboId": "ams"
        },
        {
            "id": "16",
            "comboId": "ams"
        },
        {
            "id": "17",
            "comboId": "ams"
        },
        {
            "id": "18",
            "comboId": "ut"
        },
        {
            "id": "19",
            "comboId": "hm"
        },
        {
            "id": "20",
            "comboId": "ams"
        },
        {
            "id": "21",
            "comboId": "ams"
        },
        {
            "id": "22",
            "comboId": "ams"
        },
        {
            "id": "23",
            "comboId": "ams"
        },
        {
            "id": "24",
            "comboId": "ams"
        },
        {
            "id": "25",
            "comboId": "ams"
        },
        {
            "id": "26",
            "comboId": "ams"
        },
        {
            "id": "27",
            "comboId": "mt"
        },
        {
            "id": "28",
            "comboId": "ah"
        },
        {
            "id": "29",
            "comboId": "ah"
        },
        {
            "id": "30",
            "comboId": "ah"
        },
        {
            "id": "31",
            "comboId": "ah"
        },
        {
            "id": "32",
            "comboId": "ehv"
        },
        {
            "id": "33",
            "comboId": "ehv"
        },
        {
            "id": "34",
            "comboId": "ehv"
        },
        {
            "id": "35",
            "comboId": "ehv"
        },
        {
            "id": "36",
            "comboId": "nls"
        },
        {
            "id": "37",
            "comboId": "ams"
        },
        {
            "id": "38",
            "comboId": "ams"
        },
        {
            "id": "39",
            "comboId": "ams"
        },
        {
            "id": "40",
            "comboId": "ut"
        },
        {
            "id": "41",
            "comboId": "ut"
        },
        {
            "id": "42",
            "comboId": "hrl"
        },
        {
            "id": "43",
            "comboId": "ut"
        },
        {
            "id": "44",
            "comboId": "nlspl1pe01"
        },
        {
            "id": "45",
            "comboId": "ams"
        },
        {
            "id": "46",
            "comboId": "slr"
        },
        {
            "id": "47",
            "comboId": "ams"
        },
        {
            "id": "48",
            "comboId": "nls"
        },
        {
            "id": "49",
            "comboId": "nls"
        },
        {
            "id": "50",
            "comboId": "zp"
        },
        {
            "id": "51",
            "comboId": "ehv"
        },
        {
            "id": "52",
            "comboId": "ams"
        },
        {
            "id": "53",
            "comboId": "nls"
        },
        {
            "id": "54",
            "comboId": "ams"
        },
        {
            "id": "55",
            "comboId": "hm"
        },
        {
            "id": "56",
            "comboId": "rt"
        },
        {
            "id": "57",
            "comboId": "lls"
        },
        {
            "id": "58",
            "comboId": "hrv"
        },
        {
            "id": "59",
            "comboId": "nm"
        },
        {
            "id": "60",
            "comboId": "nls"
        },
        {
            "id": "61",
            "comboId": "rt"
        },
        {
            "id": "62",
            "comboId": "nls"
        },
        {
            "id": "63",
            "comboId": "re0"
        },
        {
            "id": "64",
            "comboId": "asn"
        },
        {
            "id": "65",
            "comboId": "dv"
        },
        {
            "id": "66",
            "comboId": "tb"
        },
        {
            "id": "67",
            "comboId": "weer"
        },
        {
            "id": "68",
            "comboId": "vnn"
        },
        {
            "id": "69",
            "comboId": "mnd"
        },
        {
            "id": "70",
            "comboId": "gv"
        },
        {
            "id": "71",
            "comboId": "ams"
        },
        {
            "id": "72",
            "comboId": "slr"
        },
        {
            "id": "73",
            "comboId": "ams"
        },
        {
            "id": "74",
            "comboId": "nls"
        },
        {
            "id": "75",
            "comboId": "nls"
        },
        {
            "id": "76",
            "comboId": "re0"
        },
        {
            "id": "77",
            "comboId": "hvs"
        },
        {
            "id": "78",
            "comboId": "gv"
        },
        {
            "id": "79",
            "comboId": "nlspl1pe02"
        },
        {
            "id": "80",
            "comboId": "ams"
        },
        {
            "id": "81",
            "comboId": "nls"
        },
        {
            "id": "82",
            "comboId": "zp"
        },
        {
            "id": "83",
            "comboId": "ams"
        },
        {
            "id": "84",
            "comboId": "hm"
        },
        {
            "id": "85",
            "comboId": "rt"
        },
        {
            "id": "86",
            "comboId": "lls"
        },
        {
            "id": "87",
            "comboId": "hrv"
        },
        {
            "id": "88",
            "comboId": "nm"
        },
        {
            "id": "89",
            "comboId": "rt"
        },
        {
            "id": "90",
            "comboId": "nls"
        },
        {
            "id": "91",
            "comboId": "gn"
        },
        {
            "id": "92",
            "comboId": "zl"
        },
        {
            "id": "93",
            "comboId": "ht"
        },
        {
            "id": "94",
            "comboId": "venls"
        },
        {
            "id": "95",
            "comboId": "amr"
        },
        {
            "id": "96",
            "comboId": "ams"
        },
        {
            "id": "97",
            "comboId": "ams"
        },
        {
            "id": "98",
            "comboId": "ams"
        },
        {
            "id": "99",
            "comboId": "ams"
        },
        {
            "id": "100",
            "comboId": "ams"
        },
        {
            "id": "101",
            "comboId": "ams"
        },
        {
            "id": "102",
            "comboId": "ams"
        },
        {
            "id": "103",
            "comboId": "ams"
        },
        {
            "id": "104",
            "comboId": "ams"
        },
        {
            "id": "105",
            "comboId": "ams"
        },
        {
            "id": "106",
            "comboId": "ams"
        },
        {
            "id": "107",
            "comboId": "ah"
        },
        {
            "id": "108",
            "comboId": "htn"
        },
        {
            "id": "109",
            "comboId": "ah"
        },
        {
            "id": "110",
            "comboId": "htn"
        },
        {
            "id": "111",
            "comboId": "ehv"
        },
        {
            "id": "112",
            "comboId": "ehv"
        },
        {
            "id": "113",
            "comboId": "tb"
        },
        {
            "id": "114",
            "comboId": "tb"
        },
        {
            "id": "115",
            "comboId": "hm"
        },
        {
            "id": "116",
            "comboId": "hm"
        },
        {
            "id": "117",
            "comboId": "hm"
        },
        {
            "id": "118",
            "comboId": "hm"
        },
        {
            "id": "119",
            "comboId": "tb"
        },
        {
            "id": "120",
            "comboId": "tb"
        },
        {
            "id": "121",
            "comboId": "tb"
        },
        {
            "id": "122",
            "comboId": "tb"
        },
        {
            "id": "123",
            "comboId": "tb"
        },
        {
            "id": "124",
            "comboId": "tb"
        },
        {
            "id": "125",
            "comboId": "tb"
        },
        {
            "id": "126",
            "comboId": "tb"
        },
        {
            "id": "127",
            "comboId": "rt"
        },
        {
            "id": "128",
            "comboId": "rt"
        },
        {
            "id": "129",
            "comboId": "slr"
        },
        {
            "id": "130",
            "comboId": "slr"
        },
        {
            "id": "131",
            "comboId": "slr"
        },
        {
            "id": "132",
            "comboId": "slr"
        },
        {
            "id": "133",
            "comboId": "slr"
        },
        {
            "id": "134",
            "comboId": "slr"
        },
        {
            "id": "135",
            "comboId": "ams"
        },
        {
            "id": "136",
            "comboId": "rt"
        },
        {
            "id": "137",
            "comboId": "ams"
        },
        {
            "id": "138",
            "comboId": "ams"
        },
        {
            "id": "139",
            "comboId": "ams"
        },
        {
            "id": "140",
            "comboId": "ams"
        },
        {
            "id": "141",
            "comboId": "ams"
        },
        {
            "id": "142",
            "comboId": "ams"
        },
        {
            "id": "143",
            "comboId": "ams"
        },
        {
            "id": "144",
            "comboId": "ams"
        },
        {
            "id": "145",
            "comboId": "ams"
        },
        {
            "id": "146",
            "comboId": "tb"
        },
        {
            "id": "147",
            "comboId": "tb"
        },
        {
            "id": "148",
            "comboId": "mnd"
        },
        {
            "id": "149",
            "comboId": "mnd"
        },
        {
            "id": "150",
            "comboId": "hm"
        },
        {
            "id": "151",
            "comboId": "hm"
        },
        {
            "id": "152",
            "comboId": "rt"
        },
        {
            "id": "153",
            "comboId": "rt"
        },
        {
            "id": "154",
            "comboId": "nls"
        },
        {
            "id": "155",
            "comboId": "nls"
        },
        {
            "id": "156",
            "comboId": "nls"
        },
        {
            "id": "157",
            "comboId": "nls"
        },
        {
            "id": "158",
            "comboId": "nls"
        },
        {
            "id": "159",
            "comboId": "zp"
        },
        {
            "id": "160",
            "comboId": "zp"
        },
        {
            "id": "161",
            "comboId": "ehv"
        },
        {
            "id": "162",
            "comboId": "ams"
        },
        {
            "id": "163",
            "comboId": "nls"
        },
        {
            "id": "164",
            "comboId": "nls"
        },
        {
            "id": "165",
            "comboId": "nls"
        },
        {
            "id": "166",
            "comboId": "nls"
        },
        {
            "id": "167",
            "comboId": "hm"
        },
        {
            "id": "168",
            "comboId": "hm"
        },
        {
            "id": "169",
            "comboId": "hm"
        },
        {
            "id": "170",
            "comboId": "nls"
        },
        {
            "id": "171",
            "comboId": "nls"
        },
        {
            "id": "172",
            "comboId": "rt"
        },
        {
            "id": "173",
            "comboId": "nls"
        },
        {
            "id": "174",
            "comboId": "nls"
        },
        {
            "id": "175",
            "comboId": "lls"
        },
        {
            "id": "176",
            "comboId": "lls"
        },
        {
            "id": "177",
            "comboId": "nls"
        },
        {
            "id": "178",
            "comboId": "nls"
        },
        {
            "id": "179",
            "comboId": "nls"
        },
        {
            "id": "180",
            "comboId": "nls"
        },
        {
            "id": "181",
            "comboId": "nm"
        },
        {
            "id": "182",
            "comboId": "nm"
        },
        {
            "id": "183",
            "comboId": "nls"
        },
        {
            "id": "184",
            "comboId": "nls"
        },
        {
            "id": "185",
            "comboId": "rt"
        },
        {
            "id": "186",
            "comboId": "weer"
        },
        {
            "id": "187",
            "comboId": "venls"
        },
        {
            "id": "188",
            "comboId": "asn"
        },
        {
            "id": "189",
            "comboId": "gn"
        },
        {
            "id": "190",
            "comboId": "gv"
        },
        {
            "id": "191",
            "comboId": "gv"
        },
        {
            "id": "192",
            "comboId": "vnn"
        },
        {
            "id": "193",
            "comboId": "amr"
        },
        {
            "id": "194",
            "comboId": "mnd"
        },
        {
            "id": "195",
            "comboId": "hvs"
        },
        {
            "id": "196",
            "comboId": "dv"
        },
        {
            "id": "197",
            "comboId": "zl"
        },
        {
            "id": "198",
            "comboId": "tb"
        },
        {
            "id": "199",
            "comboId": "ht"
        },
        {
            "id": "200",
            "comboId": "re0"
        },
        {
            "id": "201",
            "comboId": "re0"
        },
        {
            "id": "202",
            "comboId": "re0"
        },
        {
            "id": "203",
            "comboId": "re0"
        },
        {
            "id": "204",
            "comboId": "re0"
        },
        {
            "id": "205",
            "comboId": "re0"
        },
        {
            "id": "206",
            "comboId": "re0"
        },
        {
            "id": "207",
            "comboId": "re0"
        },
        {
            "id": "208",
            "comboId": "re0"
        },
        {
            "id": "209",
            "comboId": "re0"
        },
        {
            "id": "210",
            "comboId": "re0"
        },
        {
            "id": "211",
            "comboId": "re0"
        },
        {
            "id": "212",
            "comboId": "re0"
        },
        {
            "id": "213",
            "comboId": "re0"
        },
        {
            "id": "214",
            "comboId": "re0"
        },
        {
            "id": "215",
            "comboId": "re0"
        },
        {
            "id": "216",
            "comboId": "re0"
        },
        {
            "id": "217",
            "comboId": "hm"
        },
        {
            "id": "218",
            "comboId": "ams"
        }
    ],
    "edges": [
        {
            "source": "0",
            "target": "1"
        },
        {
            "source": "0",
            "target": "2"
        },
        {
            "source": "3",
            "target": "4"
        },
        {
            "source": "3",
            "target": "5"
        },
        {
            "source": "6",
            "target": "1"
        },
        {
            "source": "6",
            "target": "2"
        },
        {
            "source": "7",
            "target": "4"
        },
        {
            "source": "7",
            "target": "5"
        },
        {
            "source": "8",
            "target": "1"
        },
        {
            "source": "8",
            "target": "2"
        },
        {
            "source": "1",
            "target": "9"
        },
        {
            "source": "1",
            "target": "10"
        },
        {
            "source": "1",
            "target": "11"
        },
        {
            "source": "1",
            "target": "12"
        },
        {
            "source": "1",
            "target": "2"
        },
        {
            "source": "1",
            "target": "13"
        },
        {
            "source": "1",
            "target": "14"
        },
        {
            "source": "1",
            "target": "15"
        },
        {
            "source": "4",
            "target": "5"
        },
        {
            "source": "4",
            "target": "16"
        },
        {
            "source": "4",
            "target": "17"
        },
        {
            "source": "4",
            "target": "18"
        },
        {
            "source": "4",
            "target": "11"
        },
        {
            "source": "4",
            "target": "19"
        },
        {
            "source": "4",
            "target": "20"
        },
        {
            "source": "4",
            "target": "21"
        },
        {
            "source": "4",
            "target": "22"
        },
        {
            "source": "4",
            "target": "23"
        },
        {
            "source": "4",
            "target": "24"
        },
        {
            "source": "4",
            "target": "25"
        },
        {
            "source": "5",
            "target": "9"
        },
        {
            "source": "5",
            "target": "10"
        },
        {
            "source": "5",
            "target": "26"
        },
        {
            "source": "5",
            "target": "20"
        },
        {
            "source": "5",
            "target": "21"
        },
        {
            "source": "5",
            "target": "27"
        },
        {
            "source": "5",
            "target": "24"
        },
        {
            "source": "5",
            "target": "25"
        },
        {
            "source": "16",
            "target": "2"
        },
        {
            "source": "28",
            "target": "29"
        },
        {
            "source": "28",
            "target": "30"
        },
        {
            "source": "29",
            "target": "31"
        },
        {
            "source": "32",
            "target": "33"
        },
        {
            "source": "32",
            "target": "34"
        },
        {
            "source": "33",
            "target": "35"
        },
        {
            "source": "17",
            "target": "2"
        },
        {
            "source": "36",
            "target": "26"
        },
        {
            "source": "10",
            "target": "37"
        },
        {
            "source": "10",
            "target": "38"
        },
        {
            "source": "10",
            "target": "39"
        },
        {
            "source": "10",
            "target": "40"
        },
        {
            "source": "10",
            "target": "41"
        },
        {
            "source": "10",
            "target": "42"
        },
        {
            "source": "39",
            "target": "18"
        },
        {
            "source": "18",
            "target": "40"
        },
        {
            "source": "18",
            "target": "43"
        },
        {
            "source": "18",
            "target": "41"
        },
        {
            "source": "18",
            "target": "42"
        },
        {
            "source": "18",
            "target": "2"
        },
        {
            "source": "11",
            "target": "26"
        },
        {
            "source": "11",
            "target": "44"
        },
        {
            "source": "11",
            "target": "45"
        },
        {
            "source": "11",
            "target": "30"
        },
        {
            "source": "11",
            "target": "34"
        },
        {
            "source": "11",
            "target": "46"
        },
        {
            "source": "11",
            "target": "47"
        },
        {
            "source": "11",
            "target": "48"
        },
        {
            "source": "11",
            "target": "49"
        },
        {
            "source": "11",
            "target": "50"
        },
        {
            "source": "11",
            "target": "51"
        },
        {
            "source": "11",
            "target": "52"
        },
        {
            "source": "11",
            "target": "53"
        },
        {
            "source": "11",
            "target": "54"
        },
        {
            "source": "11",
            "target": "55"
        },
        {
            "source": "11",
            "target": "56"
        },
        {
            "source": "11",
            "target": "57"
        },
        {
            "source": "11",
            "target": "58"
        },
        {
            "source": "11",
            "target": "59"
        },
        {
            "source": "11",
            "target": "60"
        },
        {
            "source": "11",
            "target": "61"
        },
        {
            "source": "11",
            "target": "62"
        },
        {
            "source": "11",
            "target": "63"
        },
        {
            "source": "11",
            "target": "64"
        },
        {
            "source": "11",
            "target": "65"
        },
        {
            "source": "11",
            "target": "66"
        },
        {
            "source": "11",
            "target": "67"
        },
        {
            "source": "11",
            "target": "68"
        },
        {
            "source": "11",
            "target": "69"
        },
        {
            "source": "11",
            "target": "70"
        },
        {
            "source": "26",
            "target": "71"
        },
        {
            "source": "26",
            "target": "31"
        },
        {
            "source": "26",
            "target": "72"
        },
        {
            "source": "26",
            "target": "73"
        },
        {
            "source": "26",
            "target": "74"
        },
        {
            "source": "26",
            "target": "75"
        },
        {
            "source": "26",
            "target": "76"
        },
        {
            "source": "26",
            "target": "77"
        },
        {
            "source": "26",
            "target": "78"
        },
        {
            "source": "26",
            "target": "79"
        },
        {
            "source": "26",
            "target": "35"
        },
        {
            "source": "26",
            "target": "80"
        },
        {
            "source": "26",
            "target": "81"
        },
        {
            "source": "26",
            "target": "82"
        },
        {
            "source": "26",
            "target": "83"
        },
        {
            "source": "26",
            "target": "84"
        },
        {
            "source": "26",
            "target": "85"
        },
        {
            "source": "26",
            "target": "86"
        },
        {
            "source": "26",
            "target": "87"
        },
        {
            "source": "26",
            "target": "88"
        },
        {
            "source": "26",
            "target": "89"
        },
        {
            "source": "26",
            "target": "90"
        },
        {
            "source": "26",
            "target": "91"
        },
        {
            "source": "26",
            "target": "92"
        },
        {
            "source": "26",
            "target": "93"
        },
        {
            "source": "26",
            "target": "94"
        },
        {
            "source": "26",
            "target": "95"
        },
        {
            "source": "26",
            "target": "2"
        },
        {
            "source": "44",
            "target": "79"
        },
        {
            "source": "45",
            "target": "71"
        },
        {
            "source": "45",
            "target": "96"
        },
        {
            "source": "45",
            "target": "97"
        },
        {
            "source": "45",
            "target": "98"
        },
        {
            "source": "45",
            "target": "99"
        },
        {
            "source": "45",
            "target": "100"
        },
        {
            "source": "45",
            "target": "101"
        },
        {
            "source": "45",
            "target": "102"
        },
        {
            "source": "45",
            "target": "103"
        },
        {
            "source": "45",
            "target": "104"
        },
        {
            "source": "45",
            "target": "105"
        },
        {
            "source": "45",
            "target": "106"
        },
        {
            "source": "71",
            "target": "97"
        },
        {
            "source": "71",
            "target": "98"
        },
        {
            "source": "71",
            "target": "99"
        },
        {
            "source": "71",
            "target": "100"
        },
        {
            "source": "71",
            "target": "101"
        },
        {
            "source": "71",
            "target": "102"
        },
        {
            "source": "71",
            "target": "103"
        },
        {
            "source": "71",
            "target": "104"
        },
        {
            "source": "71",
            "target": "105"
        },
        {
            "source": "71",
            "target": "106"
        },
        {
            "source": "30",
            "target": "31"
        },
        {
            "source": "30",
            "target": "107"
        },
        {
            "source": "31",
            "target": "108"
        },
        {
            "source": "31",
            "target": "109"
        },
        {
            "source": "34",
            "target": "35"
        },
        {
            "source": "34",
            "target": "110"
        },
        {
            "source": "34",
            "target": "111"
        },
        {
            "source": "35",
            "target": "112"
        },
        {
            "source": "113",
            "target": "114"
        },
        {
            "source": "113",
            "target": "66"
        },
        {
            "source": "114",
            "target": "93"
        },
        {
            "source": "115",
            "target": "81"
        },
        {
            "source": "115",
            "target": "49"
        },
        {
            "source": "116",
            "target": "81"
        },
        {
            "source": "116",
            "target": "49"
        },
        {
            "source": "117",
            "target": "81"
        },
        {
            "source": "117",
            "target": "49"
        },
        {
            "source": "118",
            "target": "81"
        },
        {
            "source": "118",
            "target": "49"
        },
        {
            "source": "119",
            "target": "90"
        },
        {
            "source": "119",
            "target": "62"
        },
        {
            "source": "120",
            "target": "90"
        },
        {
            "source": "120",
            "target": "62"
        },
        {
            "source": "121",
            "target": "90"
        },
        {
            "source": "121",
            "target": "62"
        },
        {
            "source": "122",
            "target": "90"
        },
        {
            "source": "122",
            "target": "62"
        },
        {
            "source": "123",
            "target": "90"
        },
        {
            "source": "123",
            "target": "62"
        },
        {
            "source": "124",
            "target": "90"
        },
        {
            "source": "124",
            "target": "62"
        },
        {
            "source": "125",
            "target": "90"
        },
        {
            "source": "125",
            "target": "62"
        },
        {
            "source": "126",
            "target": "90"
        },
        {
            "source": "126",
            "target": "62"
        },
        {
            "source": "127",
            "target": "89"
        },
        {
            "source": "127",
            "target": "61"
        },
        {
            "source": "128",
            "target": "89"
        },
        {
            "source": "128",
            "target": "61"
        },
        {
            "source": "46",
            "target": "72"
        },
        {
            "source": "46",
            "target": "129"
        },
        {
            "source": "46",
            "target": "130"
        },
        {
            "source": "46",
            "target": "131"
        },
        {
            "source": "72",
            "target": "132"
        },
        {
            "source": "72",
            "target": "133"
        },
        {
            "source": "72",
            "target": "134"
        },
        {
            "source": "129",
            "target": "132"
        },
        {
            "source": "135",
            "target": "83"
        },
        {
            "source": "135",
            "target": "54"
        },
        {
            "source": "136",
            "target": "89"
        },
        {
            "source": "136",
            "target": "61"
        },
        {
            "source": "110",
            "target": "110"
        },
        {
            "source": "110",
            "target": "108"
        },
        {
            "source": "137",
            "target": "73"
        },
        {
            "source": "137",
            "target": "54"
        },
        {
            "source": "138",
            "target": "52"
        },
        {
            "source": "138",
            "target": "73"
        },
        {
            "source": "139",
            "target": "52"
        },
        {
            "source": "139",
            "target": "73"
        },
        {
            "source": "140",
            "target": "52"
        },
        {
            "source": "140",
            "target": "73"
        },
        {
            "source": "141",
            "target": "52"
        },
        {
            "source": "141",
            "target": "73"
        },
        {
            "source": "130",
            "target": "133"
        },
        {
            "source": "107",
            "target": "109"
        },
        {
            "source": "111",
            "target": "112"
        },
        {
            "source": "142",
            "target": "52"
        },
        {
            "source": "142",
            "target": "143"
        },
        {
            "source": "131",
            "target": "134"
        },
        {
            "source": "144",
            "target": "145"
        },
        {
            "source": "144",
            "target": "74"
        },
        {
            "source": "145",
            "target": "53"
        },
        {
            "source": "146",
            "target": "147"
        },
        {
            "source": "146",
            "target": "90"
        },
        {
            "source": "147",
            "target": "62"
        },
        {
            "source": "148",
            "target": "149"
        },
        {
            "source": "148",
            "target": "69"
        },
        {
            "source": "149",
            "target": "77"
        },
        {
            "source": "47",
            "target": "80"
        },
        {
            "source": "150",
            "target": "151"
        },
        {
            "source": "150",
            "target": "55"
        },
        {
            "source": "151",
            "target": "84"
        },
        {
            "source": "152",
            "target": "153"
        },
        {
            "source": "152",
            "target": "89"
        },
        {
            "source": "153",
            "target": "61"
        },
        {
            "source": "154",
            "target": "60"
        },
        {
            "source": "81",
            "target": "49"
        },
        {
            "source": "155",
            "target": "156"
        },
        {
            "source": "155",
            "target": "83"
        },
        {
            "source": "156",
            "target": "54"
        },
        {
            "source": "50",
            "target": "82"
        },
        {
            "source": "50",
            "target": "157"
        },
        {
            "source": "50",
            "target": "158"
        },
        {
            "source": "50",
            "target": "159"
        },
        {
            "source": "82",
            "target": "157"
        },
        {
            "source": "82",
            "target": "158"
        },
        {
            "source": "82",
            "target": "160"
        },
        {
            "source": "51",
            "target": "84"
        },
        {
            "source": "51",
            "target": "161"
        },
        {
            "source": "52",
            "target": "73"
        },
        {
            "source": "52",
            "target": "162"
        },
        {
            "source": "73",
            "target": "162"
        },
        {
            "source": "73",
            "target": "143"
        },
        {
            "source": "74",
            "target": "53"
        },
        {
            "source": "83",
            "target": "54"
        },
        {
            "source": "83",
            "target": "163"
        },
        {
            "source": "83",
            "target": "164"
        },
        {
            "source": "54",
            "target": "163"
        },
        {
            "source": "54",
            "target": "164"
        },
        {
            "source": "84",
            "target": "55"
        },
        {
            "source": "84",
            "target": "165"
        },
        {
            "source": "84",
            "target": "166"
        },
        {
            "source": "84",
            "target": "167"
        },
        {
            "source": "84",
            "target": "168"
        },
        {
            "source": "55",
            "target": "165"
        },
        {
            "source": "55",
            "target": "166"
        },
        {
            "source": "55",
            "target": "169"
        },
        {
            "source": "85",
            "target": "56"
        },
        {
            "source": "85",
            "target": "170"
        },
        {
            "source": "85",
            "target": "171"
        },
        {
            "source": "56",
            "target": "170"
        },
        {
            "source": "56",
            "target": "171"
        },
        {
            "source": "56",
            "target": "172"
        },
        {
            "source": "86",
            "target": "57"
        },
        {
            "source": "86",
            "target": "173"
        },
        {
            "source": "86",
            "target": "174"
        },
        {
            "source": "86",
            "target": "175"
        },
        {
            "source": "57",
            "target": "173"
        },
        {
            "source": "57",
            "target": "174"
        },
        {
            "source": "57",
            "target": "176"
        },
        {
            "source": "87",
            "target": "58"
        },
        {
            "source": "87",
            "target": "177"
        },
        {
            "source": "87",
            "target": "178"
        },
        {
            "source": "58",
            "target": "177"
        },
        {
            "source": "58",
            "target": "178"
        },
        {
            "source": "88",
            "target": "59"
        },
        {
            "source": "88",
            "target": "179"
        },
        {
            "source": "88",
            "target": "180"
        },
        {
            "source": "88",
            "target": "181"
        },
        {
            "source": "59",
            "target": "179"
        },
        {
            "source": "59",
            "target": "180"
        },
        {
            "source": "59",
            "target": "182"
        },
        {
            "source": "183",
            "target": "89"
        },
        {
            "source": "183",
            "target": "61"
        },
        {
            "source": "184",
            "target": "89"
        },
        {
            "source": "184",
            "target": "61"
        },
        {
            "source": "75",
            "target": "60"
        },
        {
            "source": "89",
            "target": "61"
        },
        {
            "source": "89",
            "target": "185"
        },
        {
            "source": "90",
            "target": "62"
        },
        {
            "source": "172",
            "target": "185"
        },
        {
            "source": "159",
            "target": "160"
        },
        {
            "source": "175",
            "target": "176"
        },
        {
            "source": "167",
            "target": "169"
        },
        {
            "source": "161",
            "target": "168"
        },
        {
            "source": "182",
            "target": "181"
        },
        {
            "source": "186",
            "target": "187"
        },
        {
            "source": "186",
            "target": "67"
        },
        {
            "source": "187",
            "target": "94"
        },
        {
            "source": "188",
            "target": "189"
        },
        {
            "source": "188",
            "target": "64"
        },
        {
            "source": "189",
            "target": "91"
        },
        {
            "source": "190",
            "target": "191"
        },
        {
            "source": "190",
            "target": "70"
        },
        {
            "source": "191",
            "target": "78"
        },
        {
            "source": "192",
            "target": "193"
        },
        {
            "source": "192",
            "target": "68"
        },
        {
            "source": "193",
            "target": "95"
        },
        {
            "source": "194",
            "target": "195"
        },
        {
            "source": "194",
            "target": "69"
        },
        {
            "source": "195",
            "target": "77"
        },
        {
            "source": "196",
            "target": "197"
        },
        {
            "source": "196",
            "target": "65"
        },
        {
            "source": "197",
            "target": "92"
        },
        {
            "source": "198",
            "target": "199"
        },
        {
            "source": "198",
            "target": "66"
        },
        {
            "source": "199",
            "target": "93"
        },
        {
            "source": "200",
            "target": "201"
        },
        {
            "source": "200",
            "target": "69"
        },
        {
            "source": "201",
            "target": "77"
        },
        {
            "source": "202",
            "target": "203"
        },
        {
            "source": "202",
            "target": "66"
        },
        {
            "source": "203",
            "target": "93"
        },
        {
            "source": "76",
            "target": "63"
        },
        {
            "source": "76",
            "target": "204"
        },
        {
            "source": "76",
            "target": "205"
        },
        {
            "source": "63",
            "target": "204"
        },
        {
            "source": "63",
            "target": "205"
        },
        {
            "source": "64",
            "target": "91"
        },
        {
            "source": "64",
            "target": "206"
        },
        {
            "source": "64",
            "target": "207"
        },
        {
            "source": "91",
            "target": "206"
        },
        {
            "source": "91",
            "target": "207"
        },
        {
            "source": "65",
            "target": "92"
        },
        {
            "source": "65",
            "target": "208"
        },
        {
            "source": "92",
            "target": "208"
        },
        {
            "source": "66",
            "target": "93"
        },
        {
            "source": "66",
            "target": "209"
        },
        {
            "source": "66",
            "target": "210"
        },
        {
            "source": "66",
            "target": "211"
        },
        {
            "source": "93",
            "target": "209"
        },
        {
            "source": "93",
            "target": "210"
        },
        {
            "source": "93",
            "target": "211"
        },
        {
            "source": "67",
            "target": "94"
        },
        {
            "source": "67",
            "target": "212"
        },
        {
            "source": "94",
            "target": "212"
        },
        {
            "source": "68",
            "target": "95"
        },
        {
            "source": "68",
            "target": "213"
        },
        {
            "source": "95",
            "target": "213"
        },
        {
            "source": "69",
            "target": "77"
        },
        {
            "source": "69",
            "target": "214"
        },
        {
            "source": "77",
            "target": "214"
        },
        {
            "source": "70",
            "target": "78"
        },
        {
            "source": "70",
            "target": "215"
        },
        {
            "source": "70",
            "target": "216"
        },
        {
            "source": "78",
            "target": "215"
        },
        {
            "source": "78",
            "target": "216"
        },
        {
            "source": "217",
            "target": "19"
        },
        {
            "source": "217",
            "target": "2"
        },
        {
            "source": "218",
            "target": "2"
        },
        {
            "source": "12",
            "target": "2"
        },
        {
            "source": "2",
            "target": "22"
        },
        {
            "source": "2",
            "target": "23"
        },
        {
            "source": "2",
            "target": "14"
        },
        {
            "source": "2",
            "target": "15"
        },
        {
            "source": "13",
            "target": "27"
        }
    ],
    "combos": [
        {
            "id": "ams",
            "label": "Combo AMS"
        },
        {
            "id": "ah",
            "label": "Combo AH"
        },
        {
            "id": "mt",
            "label": "Combo MT"
        },
        {
            "id": "ut",
            "label": "Combo UT"
        },
        {
            "id": "hm",
            "label": "Combo HM"
        },
        {
            "id": "ehv",
            "label": "Combo EHV"
        },
        {
            "id": "nls",
            "label": "Combo NLS"
        },
        {
            "id": "hrl",
            "label": "Combo HRL"
        },
        {
            "id": "nlspl1pe01",
            "label": "Combo NLSPL1PE01"
        },
        {
            "id": "slr",
            "label": "Combo SLR"
        },
        {
            "id": "zp",
            "label": "Combo ZP"
        },
        {
            "id": "rt",
            "label": "Combo RT"
        },
        {
            "id": "lls",
            "label": "Combo LLS"
        },
        {
            "id": "hrv",
            "label": "Combo HRV"
        },
        {
            "id": "nm",
            "label": "Combo NM"
        },
        {
            "id": "re0",
            "label": "Combo RE0"
        },
        {
            "id": "asn",
            "label": "Combo ASN"
        },
        {
            "id": "dv",
            "label": "Combo DV"
        },
        {
            "id": "tb",
            "label": "Combo TB"
        },
        {
            "id": "weer",
            "label": "Combo WEER"
        },
        {
            "id": "vnn",
            "label": "Combo VNN"
        },
        {
            "id": "mnd",
            "label": "Combo MND"
        },
        {
            "id": "gv",
            "label": "Combo GV"
        },
        {
            "id": "hvs",
            "label": "Combo HVS"
        },
        {
            "id": "nlspl1pe02",
            "label": "Combo NLSPL1PE02"
        },
        {
            "id": "gn",
            "label": "Combo GN"
        },
        {
            "id": "zl",
            "label": "Combo ZL"
        },
        {
            "id": "ht",
            "label": "Combo HT"
        },
        {
            "id": "venls",
            "label": "Combo VENLS"
        },
        {
            "id": "amr",
            "label": "Combo AMR"
        },
        {
            "id": "htn",
            "label": "Combo HTN"
        }
    ]
}
//with node labels
const data1 = {
    "nodes": [
        {
            "id": "0",
            "label": "TVF-D1002-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "1",
            "label": "TVF-C9102-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "2",
            "label": "TVF-C9102-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "3",
            "label": "TVF-D1002-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "4",
            "label": "TVF-C9102-AMS-003",
            "comboId": "ams"
        },
        {
            "id": "5",
            "label": "TVF-C9102-AMS-004",
            "comboId": "ams"
        },
        {
            "id": "6",
            "label": "TVF-CSR1000-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "7",
            "label": "TVF-CSR1000-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "8",
            "label": "TVF-D1001-AMS-005",
            "comboId": "ams"
        },
        {
            "id": "9",
            "label": "TVF-C9006-AH-001",
            "comboId": "ah"
        },
        {
            "id": "10",
            "label": "TVF-CCRS1-AMS-200",
            "comboId": "ams"
        },
        {
            "id": "11",
            "label": "ams-dc0001-gr101",
            "comboId": "ams"
        },
        {
            "id": "12",
            "label": "TVF-D1002-AMS-005",
            "comboId": "ams"
        },
        {
            "id": "13",
            "label": "TVF-C9001-MT-001",
            "comboId": "mt"
        },
        {
            "id": "14",
            "label": "TVF-C9001-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "15",
            "label": "TVF-C9006-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "16",
            "label": "TVF-D1006-AMS-004",
            "comboId": "ams"
        },
        {
            "id": "17",
            "label": "TVF-C9901-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "18",
            "label": "TVF-CCRS1-UT-200",
            "comboId": "ut"
        },
        {
            "id": "19",
            "label": "TVF-C9001-HM-002",
            "comboId": "hm"
        },
        {
            "id": "20",
            "label": "TVF-D1002-AMS-004",
            "comboId": "ams"
        },
        {
            "id": "21",
            "label": "TVF-D1002-AMS-006",
            "comboId": "ams"
        },
        {
            "id": "22",
            "label": "TVF-C9006-AMS-003",
            "comboId": "ams"
        },
        {
            "id": "23",
            "label": "TVF-C9901-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "24",
            "label": "TVF-C9006-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "25",
            "label": "TVF-C9001-AMS-003",
            "comboId": "ams"
        },
        {
            "id": "26",
            "label": "ams-tr0021-gr101",
            "comboId": "ams"
        },
        {
            "id": "27",
            "label": "TVF-C9001-MT-002",
            "comboId": "mt"
        },
        {
            "id": "28",
            "label": "TVF-D1004-AH-001",
            "comboId": "ah"
        },
        {
            "id": "29",
            "label": "TVF-D1004-AH-002",
            "comboId": "ah"
        },
        {
            "id": "30",
            "label": "TVF-C9910-AH-001",
            "comboId": "ah"
        },
        {
            "id": "31",
            "label": "TVF-C9910-AH-002",
            "comboId": "ah"
        },
        {
            "id": "32",
            "label": "TVF-D1006-EHV-001",
            "comboId": "ehv"
        },
        {
            "id": "33",
            "label": "TVF-D1006-EHV-002",
            "comboId": "ehv"
        },
        {
            "id": "34",
            "label": "TVF-C9910-EHV-001",
            "comboId": "ehv"
        },
        {
            "id": "35",
            "label": "TVF-C9910-EHV-002",
            "comboId": "ehv"
        },
        {
            "id": "36",
            "label": "nls-ams02a-rt2",
            "comboId": "nls"
        },
        {
            "id": "37",
            "label": "TVF-D1004-AMS-231",
            "comboId": "ams"
        },
        {
            "id": "38",
            "label": "TVF-D1001-AMS-001",
            "comboId": "ams"
        },
        {
            "id": "39",
            "label": "TVF-D1001-AMS-002",
            "comboId": "ams"
        },
        {
            "id": "40",
            "label": "TVF-D1004-UT-231",
            "comboId": "ut"
        },
        {
            "id": "41",
            "label": "TVF-D1001-UT-002",
            "comboId": "ut"
        },
        {
            "id": "42",
            "label": "TVF-D1002-HRL-001",
            "comboId": "hrl"
        },
        {
            "id": "43",
            "label": "TVF-D1001-UT-001",
            "comboId": "ut"
        },
        {
            "id": "44",
            "label": "NLSPL1PE01",
            "comboId": "nlspl1pe01"
        },
        {
            "id": "45",
            "label": "ams-dc0001-dr109",
            "comboId": "ams"
        },
        {
            "id": "46",
            "label": "slr-tr0004-gr103-new",
            "comboId": "slr"
        },
        {
            "id": "47",
            "label": "ams-dc0001-dr149",
            "comboId": "ams"
        },
        {
            "id": "48",
            "label": "nls-ams17b-rt1",
            "comboId": "nls"
        },
        {
            "id": "49",
            "label": "nls-hlm01a-ra60",
            "comboId": "nls"
        },
        {
            "id": "50",
            "label": "zp-dc0100-gr101",
            "comboId": "zp"
        },
        {
            "id": "51",
            "label": "ehv-dc0002-gr101",
            "comboId": "ehv"
        },
        {
            "id": "52",
            "label": "ams-dc0001-gr103-new",
            "comboId": "ams"
        },
        {
            "id": "53",
            "label": "nls-ams02e-ra60",
            "comboId": "nls"
        },
        {
            "id": "54",
            "label": "ams-tr0021-gr103",
            "comboId": "ams"
        },
        {
            "id": "55",
            "label": "hm-dc0100-gr101",
            "comboId": "hm"
        },
        {
            "id": "56",
            "label": "rt-dc0172-gr101",
            "comboId": "rt"
        },
        {
            "id": "57",
            "label": "lls-dc0100-gr101",
            "comboId": "lls"
        },
        {
            "id": "58",
            "label": "hrv-dc0100-gr101",
            "comboId": "hrv"
        },
        {
            "id": "59",
            "label": "nm-dc0100-gr101",
            "comboId": "nm"
        },
        {
            "id": "60",
            "label": "nls-mnd01a-ra60",
            "comboId": "nls"
        },
        {
            "id": "61",
            "label": "rt-dc0173-gr101",
            "comboId": "rt"
        },
        {
            "id": "62",
            "label": "nls-tbg01a-ra60",
            "comboId": "nls"
        },
        {
            "id": "63",
            "label": "re0-ams-tr0042-dr101",
            "comboId": "re0"
        },
        {
            "id": "64",
            "label": "asn-dc0002-gr101",
            "comboId": "asn"
        },
        {
            "id": "65",
            "label": "dv-dc0001-gr101",
            "comboId": "dv"
        },
        {
            "id": "66",
            "label": "tb-dc0001-gr101",
            "comboId": "tb"
        },
        {
            "id": "67",
            "label": "weer-dc0002-gr101",
            "comboId": "weer"
        },
        {
            "id": "68",
            "label": "vnn-dc0001-gr101",
            "comboId": "vnn"
        },
        {
            "id": "69",
            "label": "mnd-dc0001-gr101",
            "comboId": "mnd"
        },
        {
            "id": "70",
            "label": "gv-dc0010-gr101",
            "comboId": "gv"
        },
        {
            "id": "71",
            "label": "ams-tr0021-dr109",
            "comboId": "ams"
        },
        {
            "id": "72",
            "label": "slr-tr0004-gr104-new",
            "comboId": "slr"
        },
        {
            "id": "73",
            "label": "ams-tr0021-gr104-new",
            "comboId": "ams"
        },
        {
            "id": "74",
            "label": "nls-ams02e-ra50",
            "comboId": "nls"
        },
        {
            "id": "75",
            "label": "nls-mnd01a-ra50",
            "comboId": "nls"
        },
        {
            "id": "76",
            "label": "re0-ams-tr0610-dr101",
            "comboId": "re0"
        },
        {
            "id": "77",
            "label": "hvs-dc0001-gr102",
            "comboId": "hvs"
        },
        {
            "id": "78",
            "label": "gv-dc0052-gr102",
            "comboId": "gv"
        },
        {
            "id": "79",
            "label": "NLSPL1PE02",
            "comboId": "nlspl1pe02"
        },
        {
            "id": "80",
            "label": "ams-tr0021-dr149",
            "comboId": "ams"
        },
        {
            "id": "81",
            "label": "nls-hlm01a-ra50",
            "comboId": "nls"
        },
        {
            "id": "82",
            "label": "zp-dc0100-gr102",
            "comboId": "zp"
        },
        {
            "id": "83",
            "label": "ams-tr0021-gr104",
            "comboId": "ams"
        },
        {
            "id": "84",
            "label": "hm-dc0100-gr102",
            "comboId": "hm"
        },
        {
            "id": "85",
            "label": "rt-dc0172-gr102",
            "comboId": "rt"
        },
        {
            "id": "86",
            "label": "lls-dc0100-gr102",
            "comboId": "lls"
        },
        {
            "id": "87",
            "label": "hrv-dc0100-gr102",
            "comboId": "hrv"
        },
        {
            "id": "88",
            "label": "nm-dc0100-gr102",
            "comboId": "nm"
        },
        {
            "id": "89",
            "label": "rt-dc0173-gr102",
            "comboId": "rt"
        },
        {
            "id": "90",
            "label": "nls-tbg01a-ra50",
            "comboId": "nls"
        },
        {
            "id": "91",
            "label": "gn-dc0002-gr102",
            "comboId": "gn"
        },
        {
            "id": "92",
            "label": "zl-dc0001-gr102",
            "comboId": "zl"
        },
        {
            "id": "93",
            "label": "ht-dc0001-gr102",
            "comboId": "ht"
        },
        {
            "id": "94",
            "label": "venls-dc0003-gr102",
            "comboId": "venls"
        },
        {
            "id": "95",
            "label": "amr-dc0010-gr102",
            "comboId": "amr"
        },
        {
            "id": "96",
            "label": "ams-dc0001-dr101",
            "comboId": "ams"
        },
        {
            "id": "97",
            "label": "ams-dc0001-rr101",
            "comboId": "ams"
        },
        {
            "id": "98",
            "label": "ams-dc0001-rr102",
            "comboId": "ams"
        },
        {
            "id": "99",
            "label": "ams-dc0001-rr103",
            "comboId": "ams"
        },
        {
            "id": "100",
            "label": "ams-dc0001-rr104",
            "comboId": "ams"
        },
        {
            "id": "101",
            "label": "ams-dc0001-rr107",
            "comboId": "ams"
        },
        {
            "id": "102",
            "label": "ams-tr0021-rr101",
            "comboId": "ams"
        },
        {
            "id": "103",
            "label": "ams-tr0021-rr102",
            "comboId": "ams"
        },
        {
            "id": "104",
            "label": "ams-tr0021-rr103",
            "comboId": "ams"
        },
        {
            "id": "105",
            "label": "ams-tr0021-rr104",
            "comboId": "ams"
        },
        {
            "id": "106",
            "label": "ams-tr0021-rr107",
            "comboId": "ams"
        },
        {
            "id": "107",
            "label": "AH-TR0009-DR101",
            "comboId": "ah"
        },
        {
            "id": "108",
            "label": "HTN-S03555-CR104",
            "comboId": "htn"
        },
        {
            "id": "109",
            "label": "AH-TR0009-DR102",
            "comboId": "ah"
        },
        {
            "id": "110",
            "label": "HTN-S03555-CR103",
            "comboId": "htn"
        },
        {
            "id": "111",
            "label": "EHV-TR0001-DR101",
            "comboId": "ehv"
        },
        {
            "id": "112",
            "label": "EHV-TR0001-DR102",
            "comboId": "ehv"
        },
        {
            "id": "113",
            "label": "tb-dc0001-dr171",
            "comboId": "tb"
        },
        {
            "id": "114",
            "label": "tb-dc0001-dr172",
            "comboId": "tb"
        },
        {
            "id": "115",
            "label": "hm-dc0100-dr301",
            "comboId": "hm"
        },
        {
            "id": "116",
            "label": "hm-dc0100-dr302",
            "comboId": "hm"
        },
        {
            "id": "117",
            "label": "hm-dc0100-dr303",
            "comboId": "hm"
        },
        {
            "id": "118",
            "label": "hm-dc0100-dr304",
            "comboId": "hm"
        },
        {
            "id": "119",
            "label": "tb-dc0001-dr301",
            "comboId": "tb"
        },
        {
            "id": "120",
            "label": "tb-dc0001-dr302",
            "comboId": "tb"
        },
        {
            "id": "121",
            "label": "tb-dc0001-dr303",
            "comboId": "tb"
        },
        {
            "id": "122",
            "label": "tb-dc0001-dr304",
            "comboId": "tb"
        },
        {
            "id": "123",
            "label": "tb-dc0001-dr305",
            "comboId": "tb"
        },
        {
            "id": "124",
            "label": "tb-dc0001-dr306",
            "comboId": "tb"
        },
        {
            "id": "125",
            "label": "tb-dc0001-dr307",
            "comboId": "tb"
        },
        {
            "id": "126",
            "label": "tb-dc0001-dr308",
            "comboId": "tb"
        },
        {
            "id": "127",
            "label": "rt-dc0173-dr301",
            "comboId": "rt"
        },
        {
            "id": "128",
            "label": "rt-dc0173-dr302",
            "comboId": "rt"
        },
        {
            "id": "129",
            "label": "slr-tr0004-dr371",
            "comboId": "slr"
        },
        {
            "id": "130",
            "label": "SLR-TR0004-DR101",
            "comboId": "slr"
        },
        {
            "id": "131",
            "label": "slr-tr0004-gr303",
            "comboId": "slr"
        },
        {
            "id": "132",
            "label": "slr-tr0004-dr372",
            "comboId": "slr"
        },
        {
            "id": "133",
            "label": "SLR-TR0004-DR102",
            "comboId": "slr"
        },
        {
            "id": "134",
            "label": "slr-tr0004-gr304",
            "comboId": "slr"
        },
        {
            "id": "135",
            "label": "AMS-TR0021-DR107",
            "comboId": "ams"
        },
        {
            "id": "136",
            "label": "RT-RC0173-DR107",
            "comboId": "rt"
        },
        {
            "id": "137",
            "label": "AMS-TR0021-DR103",
            "comboId": "ams"
        },
        {
            "id": "138",
            "label": "ams-tr0006-dr102",
            "comboId": "ams"
        },
        {
            "id": "139",
            "label": "ams-tr0409-dr102",
            "comboId": "ams"
        },
        {
            "id": "140",
            "label": "ams-tr0610-dr102",
            "comboId": "ams"
        },
        {
            "id": "141",
            "label": "ams-tr0042-dr102",
            "comboId": "ams"
        },
        {
            "id": "142",
            "label": "ams-dc0001-dr102",
            "comboId": "ams"
        },
        {
            "id": "143",
            "label": "ams-tr0021-dr102",
            "comboId": "ams"
        },
        {
            "id": "144",
            "label": "ams-tr0021-gr303",
            "comboId": "ams"
        },
        {
            "id": "145",
            "label": "ams-tr0021-gr304",
            "comboId": "ams"
        },
        {
            "id": "146",
            "label": "tb-dc0001-gr303",
            "comboId": "tb"
        },
        {
            "id": "147",
            "label": "tb-dc0001-gr304",
            "comboId": "tb"
        },
        {
            "id": "148",
            "label": "mnd-dc0002-dr171",
            "comboId": "mnd"
        },
        {
            "id": "149",
            "label": "mnd-dc0002-dr172",
            "comboId": "mnd"
        },
        {
            "id": "150",
            "label": "HM-RC0100-DR105",
            "comboId": "hm"
        },
        {
            "id": "151",
            "label": "HM-RC0100-DR106",
            "comboId": "hm"
        },
        {
            "id": "152",
            "label": "RT-RC0173-DR105",
            "comboId": "rt"
        },
        {
            "id": "153",
            "label": "RT-RC0173-DR106",
            "comboId": "rt"
        },
        {
            "id": "154",
            "label": "nls-mnd01a-ra2",
            "comboId": "nls"
        },
        {
            "id": "155",
            "label": "nls-ams02a-rb3",
            "comboId": "nls"
        },
        {
            "id": "156",
            "label": "nls-ams02a-rb4",
            "comboId": "nls"
        },
        {
            "id": "157",
            "label": "nls-zut01a-rb1",
            "comboId": "nls"
        },
        {
            "id": "158",
            "label": "nls-zut01a-rb2",
            "comboId": "nls"
        },
        {
            "id": "159",
            "label": "zp-dc0100-dr101",
            "comboId": "zp"
        },
        {
            "id": "160",
            "label": "zp-dc0100-dr102",
            "comboId": "zp"
        },
        {
            "id": "161",
            "label": "ehv-dc0002-dr102",
            "comboId": "ehv"
        },
        {
            "id": "162",
            "label": "ams-tr0410-dr106",
            "comboId": "ams"
        },
        {
            "id": "163",
            "label": "nls-ams02a-rb1",
            "comboId": "nls"
        },
        {
            "id": "164",
            "label": "nls-ams02a-rb2",
            "comboId": "nls"
        },
        {
            "id": "165",
            "label": "nls-hlm01a-rb1",
            "comboId": "nls"
        },
        {
            "id": "166",
            "label": "nls-hlm01a-rb2",
            "comboId": "nls"
        },
        {
            "id": "167",
            "label": "hm-dc0100-dr102",
            "comboId": "hm"
        },
        {
            "id": "168",
            "label": "hm-dc0100-dr104",
            "comboId": "hm"
        },
        {
            "id": "169",
            "label": "hm-dc0100-dr103",
            "comboId": "hm"
        },
        {
            "id": "170",
            "label": "nls-rtm02a-rb1",
            "comboId": "nls"
        },
        {
            "id": "171",
            "label": "nls-rtm02a-rb2",
            "comboId": "nls"
        },
        {
            "id": "172",
            "label": "rt-lc0100-dr102",
            "comboId": "rt"
        },
        {
            "id": "173",
            "label": "nls-ley01a-rb1",
            "comboId": "nls"
        },
        {
            "id": "174",
            "label": "nls-ley01a-rb2",
            "comboId": "nls"
        },
        {
            "id": "175",
            "label": "lls-dc0100-dr101",
            "comboId": "lls"
        },
        {
            "id": "176",
            "label": "lls-dc0100-dr102",
            "comboId": "lls"
        },
        {
            "id": "177",
            "label": "nls-hrv01a-rb1",
            "comboId": "nls"
        },
        {
            "id": "178",
            "label": "nls-hrv01a-rb2",
            "comboId": "nls"
        },
        {
            "id": "179",
            "label": "nls-nij01a-rb1",
            "comboId": "nls"
        },
        {
            "id": "180",
            "label": "nls-nij01a-rb2",
            "comboId": "nls"
        },
        {
            "id": "181",
            "label": "nm-dc0100-dr102",
            "comboId": "nm"
        },
        {
            "id": "182",
            "label": "nm-dc0100-dr101",
            "comboId": "nm"
        },
        {
            "id": "183",
            "label": "nls-rtm03a-rb1",
            "comboId": "nls"
        },
        {
            "id": "184",
            "label": "nls-rtm03a-rb2",
            "comboId": "nls"
        },
        {
            "id": "185",
            "label": "rt-dc0173-dr102",
            "comboId": "rt"
        },
        {
            "id": "186",
            "label": "weer-dc0002-dr102",
            "comboId": "weer"
        },
        {
            "id": "187",
            "label": "venls-dc0003-dr102",
            "comboId": "venls"
        },
        {
            "id": "188",
            "label": "asn-dc0002-dr102",
            "comboId": "asn"
        },
        {
            "id": "189",
            "label": "gn-dc0002-dr102",
            "comboId": "gn"
        },
        {
            "id": "190",
            "label": "gv-dc0010-dr102",
            "comboId": "gv"
        },
        {
            "id": "191",
            "label": "gv-dc0052-dr102",
            "comboId": "gv"
        },
        {
            "id": "192",
            "label": "vnn-dc0001-dr102",
            "comboId": "vnn"
        },
        {
            "id": "193",
            "label": "amr-dc0010-dr102",
            "comboId": "amr"
        },
        {
            "id": "194",
            "label": "mnd-dc0001-dr102",
            "comboId": "mnd"
        },
        {
            "id": "195",
            "label": "hvs-dc0002-dr102",
            "comboId": "hvs"
        },
        {
            "id": "196",
            "label": "dv-dc0001-dr102",
            "comboId": "dv"
        },
        {
            "id": "197",
            "label": "zl-dc0001-dr102",
            "comboId": "zl"
        },
        {
            "id": "198",
            "label": "tb-dc0001-dr102",
            "comboId": "tb"
        },
        {
            "id": "199",
            "label": "ht-dc0001-dr102",
            "comboId": "ht"
        },
        {
            "id": "200",
            "label": "re0-mnd-dc0002-gr103",
            "comboId": "re0"
        },
        {
            "id": "201",
            "label": "re0-mnd-dc0002-gr104",
            "comboId": "re0"
        },
        {
            "id": "202",
            "label": "re0-tb-dc0001-gr103",
            "comboId": "re0"
        },
        {
            "id": "203",
            "label": "re0-tb-dc0001-gr104",
            "comboId": "re0"
        },
        {
            "id": "204",
            "label": "re0-ams-tr0409-dr101",
            "comboId": "re0"
        },
        {
            "id": "205",
            "label": "re0-ams-tr0410-dr102",
            "comboId": "re0"
        },
        {
            "id": "206",
            "label": "re0-gn-dc0002-dr101",
            "comboId": "re0"
        },
        {
            "id": "207",
            "label": "re0-emn-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "208",
            "label": "re0-zl-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "209",
            "label": "re0-ht-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "210",
            "label": "re0-tb-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "211",
            "label": "re0-bd-dc0002-dr101",
            "comboId": "re0"
        },
        {
            "id": "212",
            "label": "re0-ah-tr0002-dr108",
            "comboId": "re0"
        },
        {
            "id": "213",
            "label": "re0-vnn-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "214",
            "label": "re0-mnd-dc0001-dr101",
            "comboId": "re0"
        },
        {
            "id": "215",
            "label": "re0-gv-dc0010-dr101",
            "comboId": "re0"
        },
        {
            "id": "216",
            "label": "re0-rt-tr0006-dr108",
            "comboId": "re0"
        },
        {
            "id": "217",
            "label": "TVF-C9001-HM-001",
            "comboId": "hm"
        },
        {
            "id": "218",
            "label": "TVF-D1002-AMS-003",
            "comboId": "ams"
        }
    ],
    "edges": [
        {
            "source": "0",
            "target": "1"
        },
        {
            "source": "0",
            "target": "2"
        },
        {
            "source": "3",
            "target": "4"
        },
        {
            "source": "3",
            "target": "5"
        },
        {
            "source": "6",
            "target": "1"
        },
        {
            "source": "6",
            "target": "2"
        },
        {
            "source": "7",
            "target": "4"
        },
        {
            "source": "7",
            "target": "5"
        },
        {
            "source": "8",
            "target": "1"
        },
        {
            "source": "8",
            "target": "2"
        },
        {
            "source": "1",
            "target": "9"
        },
        {
            "source": "1",
            "target": "10"
        },
        {
            "source": "1",
            "target": "11"
        },
        {
            "source": "1",
            "target": "12"
        },
        {
            "source": "1",
            "target": "2"
        },
        {
            "source": "1",
            "target": "13"
        },
        {
            "source": "1",
            "target": "14"
        },
        {
            "source": "1",
            "target": "15"
        },
        {
            "source": "4",
            "target": "5"
        },
        {
            "source": "4",
            "target": "16"
        },
        {
            "source": "4",
            "target": "17"
        },
        {
            "source": "4",
            "target": "18"
        },
        {
            "source": "4",
            "target": "11"
        },
        {
            "source": "4",
            "target": "19"
        },
        {
            "source": "4",
            "target": "20"
        },
        {
            "source": "4",
            "target": "21"
        },
        {
            "source": "4",
            "target": "22"
        },
        {
            "source": "4",
            "target": "23"
        },
        {
            "source": "4",
            "target": "24"
        },
        {
            "source": "4",
            "target": "25"
        },
        {
            "source": "5",
            "target": "9"
        },
        {
            "source": "5",
            "target": "10"
        },
        {
            "source": "5",
            "target": "26"
        },
        {
            "source": "5",
            "target": "20"
        },
        {
            "source": "5",
            "target": "21"
        },
        {
            "source": "5",
            "target": "27"
        },
        {
            "source": "5",
            "target": "24"
        },
        {
            "source": "5",
            "target": "25"
        },
        {
            "source": "16",
            "target": "2"
        },
        {
            "source": "28",
            "target": "29"
        },
        {
            "source": "28",
            "target": "30"
        },
        {
            "source": "29",
            "target": "31"
        },
        {
            "source": "32",
            "target": "33"
        },
        {
            "source": "32",
            "target": "34"
        },
        {
            "source": "33",
            "target": "35"
        },
        {
            "source": "17",
            "target": "2"
        },
        {
            "source": "36",
            "target": "26"
        },
        {
            "source": "10",
            "target": "37"
        },
        {
            "source": "10",
            "target": "38"
        },
        {
            "source": "10",
            "target": "39"
        },
        {
            "source": "10",
            "target": "40"
        },
        {
            "source": "10",
            "target": "41"
        },
        {
            "source": "10",
            "target": "42"
        },
        {
            "source": "39",
            "target": "18"
        },
        {
            "source": "18",
            "target": "40"
        },
        {
            "source": "18",
            "target": "43"
        },
        {
            "source": "18",
            "target": "41"
        },
        {
            "source": "18",
            "target": "42"
        },
        {
            "source": "18",
            "target": "2"
        },
        {
            "source": "11",
            "target": "26"
        },
        {
            "source": "11",
            "target": "44"
        },
        {
            "source": "11",
            "target": "45"
        },
        {
            "source": "11",
            "target": "30"
        },
        {
            "source": "11",
            "target": "34"
        },
        {
            "source": "11",
            "target": "46"
        },
        {
            "source": "11",
            "target": "47"
        },
        {
            "source": "11",
            "target": "48"
        },
        {
            "source": "11",
            "target": "49"
        },
        {
            "source": "11",
            "target": "50"
        },
        {
            "source": "11",
            "target": "51"
        },
        {
            "source": "11",
            "target": "52"
        },
        {
            "source": "11",
            "target": "53"
        },
        {
            "source": "11",
            "target": "54"
        },
        {
            "source": "11",
            "target": "55"
        },
        {
            "source": "11",
            "target": "56"
        },
        {
            "source": "11",
            "target": "57"
        },
        {
            "source": "11",
            "target": "58"
        },
        {
            "source": "11",
            "target": "59"
        },
        {
            "source": "11",
            "target": "60"
        },
        {
            "source": "11",
            "target": "61"
        },
        {
            "source": "11",
            "target": "62"
        },
        {
            "source": "11",
            "target": "63"
        },
        {
            "source": "11",
            "target": "64"
        },
        {
            "source": "11",
            "target": "65"
        },
        {
            "source": "11",
            "target": "66"
        },
        {
            "source": "11",
            "target": "67"
        },
        {
            "source": "11",
            "target": "68"
        },
        {
            "source": "11",
            "target": "69"
        },
        {
            "source": "11",
            "target": "70"
        },
        {
            "source": "26",
            "target": "71"
        },
        {
            "source": "26",
            "target": "31"
        },
        {
            "source": "26",
            "target": "72"
        },
        {
            "source": "26",
            "target": "73"
        },
        {
            "source": "26",
            "target": "74"
        },
        {
            "source": "26",
            "target": "75"
        },
        {
            "source": "26",
            "target": "76"
        },
        {
            "source": "26",
            "target": "77"
        },
        {
            "source": "26",
            "target": "78"
        },
        {
            "source": "26",
            "target": "79"
        },
        {
            "source": "26",
            "target": "35"
        },
        {
            "source": "26",
            "target": "80"
        },
        {
            "source": "26",
            "target": "81"
        },
        {
            "source": "26",
            "target": "82"
        },
        {
            "source": "26",
            "target": "83"
        },
        {
            "source": "26",
            "target": "84"
        },
        {
            "source": "26",
            "target": "85"
        },
        {
            "source": "26",
            "target": "86"
        },
        {
            "source": "26",
            "target": "87"
        },
        {
            "source": "26",
            "target": "88"
        },
        {
            "source": "26",
            "target": "89"
        },
        {
            "source": "26",
            "target": "90"
        },
        {
            "source": "26",
            "target": "91"
        },
        {
            "source": "26",
            "target": "92"
        },
        {
            "source": "26",
            "target": "93"
        },
        {
            "source": "26",
            "target": "94"
        },
        {
            "source": "26",
            "target": "95"
        },
        {
            "source": "26",
            "target": "2"
        },
        {
            "source": "44",
            "target": "79"
        },
        {
            "source": "45",
            "target": "71"
        },
        {
            "source": "45",
            "target": "96"
        },
        {
            "source": "45",
            "target": "97"
        },
        {
            "source": "45",
            "target": "98"
        },
        {
            "source": "45",
            "target": "99"
        },
        {
            "source": "45",
            "target": "100"
        },
        {
            "source": "45",
            "target": "101"
        },
        {
            "source": "45",
            "target": "102"
        },
        {
            "source": "45",
            "target": "103"
        },
        {
            "source": "45",
            "target": "104"
        },
        {
            "source": "45",
            "target": "105"
        },
        {
            "source": "45",
            "target": "106"
        },
        {
            "source": "71",
            "target": "97"
        },
        {
            "source": "71",
            "target": "98"
        },
        {
            "source": "71",
            "target": "99"
        },
        {
            "source": "71",
            "target": "100"
        },
        {
            "source": "71",
            "target": "101"
        },
        {
            "source": "71",
            "target": "102"
        },
        {
            "source": "71",
            "target": "103"
        },
        {
            "source": "71",
            "target": "104"
        },
        {
            "source": "71",
            "target": "105"
        },
        {
            "source": "71",
            "target": "106"
        },
        {
            "source": "30",
            "target": "31"
        },
        {
            "source": "30",
            "target": "107"
        },
        {
            "source": "31",
            "target": "108"
        },
        {
            "source": "31",
            "target": "109"
        },
        {
            "source": "34",
            "target": "35"
        },
        {
            "source": "34",
            "target": "110"
        },
        {
            "source": "34",
            "target": "111"
        },
        {
            "source": "35",
            "target": "112"
        },
        {
            "source": "113",
            "target": "114"
        },
        {
            "source": "113",
            "target": "66"
        },
        {
            "source": "114",
            "target": "93"
        },
        {
            "source": "115",
            "target": "81"
        },
        {
            "source": "115",
            "target": "49"
        },
        {
            "source": "116",
            "target": "81"
        },
        {
            "source": "116",
            "target": "49"
        },
        {
            "source": "117",
            "target": "81"
        },
        {
            "source": "117",
            "target": "49"
        },
        {
            "source": "118",
            "target": "81"
        },
        {
            "source": "118",
            "target": "49"
        },
        {
            "source": "119",
            "target": "90"
        },
        {
            "source": "119",
            "target": "62"
        },
        {
            "source": "120",
            "target": "90"
        },
        {
            "source": "120",
            "target": "62"
        },
        {
            "source": "121",
            "target": "90"
        },
        {
            "source": "121",
            "target": "62"
        },
        {
            "source": "122",
            "target": "90"
        },
        {
            "source": "122",
            "target": "62"
        },
        {
            "source": "123",
            "target": "90"
        },
        {
            "source": "123",
            "target": "62"
        },
        {
            "source": "124",
            "target": "90"
        },
        {
            "source": "124",
            "target": "62"
        },
        {
            "source": "125",
            "target": "90"
        },
        {
            "source": "125",
            "target": "62"
        },
        {
            "source": "126",
            "target": "90"
        },
        {
            "source": "126",
            "target": "62"
        },
        {
            "source": "127",
            "target": "89"
        },
        {
            "source": "127",
            "target": "61"
        },
        {
            "source": "128",
            "target": "89"
        },
        {
            "source": "128",
            "target": "61"
        },
        {
            "source": "46",
            "target": "72"
        },
        {
            "source": "46",
            "target": "129"
        },
        {
            "source": "46",
            "target": "130"
        },
        {
            "source": "46",
            "target": "131"
        },
        {
            "source": "72",
            "target": "132"
        },
        {
            "source": "72",
            "target": "133"
        },
        {
            "source": "72",
            "target": "134"
        },
        {
            "source": "129",
            "target": "132"
        },
        {
            "source": "135",
            "target": "83"
        },
        {
            "source": "135",
            "target": "54"
        },
        {
            "source": "136",
            "target": "89"
        },
        {
            "source": "136",
            "target": "61"
        },
        {
            "source": "110",
            "target": "110"
        },
        {
            "source": "110",
            "target": "108"
        },
        {
            "source": "137",
            "target": "73"
        },
        {
            "source": "137",
            "target": "54"
        },
        {
            "source": "138",
            "target": "52"
        },
        {
            "source": "138",
            "target": "73"
        },
        {
            "source": "139",
            "target": "52"
        },
        {
            "source": "139",
            "target": "73"
        },
        {
            "source": "140",
            "target": "52"
        },
        {
            "source": "140",
            "target": "73"
        },
        {
            "source": "141",
            "target": "52"
        },
        {
            "source": "141",
            "target": "73"
        },
        {
            "source": "130",
            "target": "133"
        },
        {
            "source": "107",
            "target": "109"
        },
        {
            "source": "111",
            "target": "112"
        },
        {
            "source": "142",
            "target": "52"
        },
        {
            "source": "142",
            "target": "143"
        },
        {
            "source": "131",
            "target": "134"
        },
        {
            "source": "144",
            "target": "145"
        },
        {
            "source": "144",
            "target": "74"
        },
        {
            "source": "145",
            "target": "53"
        },
        {
            "source": "146",
            "target": "147"
        },
        {
            "source": "146",
            "target": "90"
        },
        {
            "source": "147",
            "target": "62"
        },
        {
            "source": "148",
            "target": "149"
        },
        {
            "source": "148",
            "target": "69"
        },
        {
            "source": "149",
            "target": "77"
        },
        {
            "source": "47",
            "target": "80"
        },
        {
            "source": "150",
            "target": "151"
        },
        {
            "source": "150",
            "target": "55"
        },
        {
            "source": "151",
            "target": "84"
        },
        {
            "source": "152",
            "target": "153"
        },
        {
            "source": "152",
            "target": "89"
        },
        {
            "source": "153",
            "target": "61"
        },
        {
            "source": "154",
            "target": "60"
        },
        {
            "source": "81",
            "target": "49"
        },
        {
            "source": "155",
            "target": "156"
        },
        {
            "source": "155",
            "target": "83"
        },
        {
            "source": "156",
            "target": "54"
        },
        {
            "source": "50",
            "target": "82"
        },
        {
            "source": "50",
            "target": "157"
        },
        {
            "source": "50",
            "target": "158"
        },
        {
            "source": "50",
            "target": "159"
        },
        {
            "source": "82",
            "target": "157"
        },
        {
            "source": "82",
            "target": "158"
        },
        {
            "source": "82",
            "target": "160"
        },
        {
            "source": "51",
            "target": "84"
        },
        {
            "source": "51",
            "target": "161"
        },
        {
            "source": "52",
            "target": "73"
        },
        {
            "source": "52",
            "target": "162"
        },
        {
            "source": "73",
            "target": "162"
        },
        {
            "source": "73",
            "target": "143"
        },
        {
            "source": "74",
            "target": "53"
        },
        {
            "source": "83",
            "target": "54"
        },
        {
            "source": "83",
            "target": "163"
        },
        {
            "source": "83",
            "target": "164"
        },
        {
            "source": "54",
            "target": "163"
        },
        {
            "source": "54",
            "target": "164"
        },
        {
            "source": "84",
            "target": "55"
        },
        {
            "source": "84",
            "target": "165"
        },
        {
            "source": "84",
            "target": "166"
        },
        {
            "source": "84",
            "target": "167"
        },
        {
            "source": "84",
            "target": "168"
        },
        {
            "source": "55",
            "target": "165"
        },
        {
            "source": "55",
            "target": "166"
        },
        {
            "source": "55",
            "target": "169"
        },
        {
            "source": "85",
            "target": "56"
        },
        {
            "source": "85",
            "target": "170"
        },
        {
            "source": "85",
            "target": "171"
        },
        {
            "source": "56",
            "target": "170"
        },
        {
            "source": "56",
            "target": "171"
        },
        {
            "source": "56",
            "target": "172"
        },
        {
            "source": "86",
            "target": "57"
        },
        {
            "source": "86",
            "target": "173"
        },
        {
            "source": "86",
            "target": "174"
        },
        {
            "source": "86",
            "target": "175"
        },
        {
            "source": "57",
            "target": "173"
        },
        {
            "source": "57",
            "target": "174"
        },
        {
            "source": "57",
            "target": "176"
        },
        {
            "source": "87",
            "target": "58"
        },
        {
            "source": "87",
            "target": "177"
        },
        {
            "source": "87",
            "target": "178"
        },
        {
            "source": "58",
            "target": "177"
        },
        {
            "source": "58",
            "target": "178"
        },
        {
            "source": "88",
            "target": "59"
        },
        {
            "source": "88",
            "target": "179"
        },
        {
            "source": "88",
            "target": "180"
        },
        {
            "source": "88",
            "target": "181"
        },
        {
            "source": "59",
            "target": "179"
        },
        {
            "source": "59",
            "target": "180"
        },
        {
            "source": "59",
            "target": "182"
        },
        {
            "source": "183",
            "target": "89"
        },
        {
            "source": "183",
            "target": "61"
        },
        {
            "source": "184",
            "target": "89"
        },
        {
            "source": "184",
            "target": "61"
        },
        {
            "source": "75",
            "target": "60"
        },
        {
            "source": "89",
            "target": "61"
        },
        {
            "source": "89",
            "target": "185"
        },
        {
            "source": "90",
            "target": "62"
        },
        {
            "source": "172",
            "target": "185"
        },
        {
            "source": "159",
            "target": "160"
        },
        {
            "source": "175",
            "target": "176"
        },
        {
            "source": "167",
            "target": "169"
        },
        {
            "source": "161",
            "target": "168"
        },
        {
            "source": "182",
            "target": "181"
        },
        {
            "source": "186",
            "target": "187"
        },
        {
            "source": "186",
            "target": "67"
        },
        {
            "source": "187",
            "target": "94"
        },
        {
            "source": "188",
            "target": "189"
        },
        {
            "source": "188",
            "target": "64"
        },
        {
            "source": "189",
            "target": "91"
        },
        {
            "source": "190",
            "target": "191"
        },
        {
            "source": "190",
            "target": "70"
        },
        {
            "source": "191",
            "target": "78"
        },
        {
            "source": "192",
            "target": "193"
        },
        {
            "source": "192",
            "target": "68"
        },
        {
            "source": "193",
            "target": "95"
        },
        {
            "source": "194",
            "target": "195"
        },
        {
            "source": "194",
            "target": "69"
        },
        {
            "source": "195",
            "target": "77"
        },
        {
            "source": "196",
            "target": "197"
        },
        {
            "source": "196",
            "target": "65"
        },
        {
            "source": "197",
            "target": "92"
        },
        {
            "source": "198",
            "target": "199"
        },
        {
            "source": "198",
            "target": "66"
        },
        {
            "source": "199",
            "target": "93"
        },
        {
            "source": "200",
            "target": "201"
        },
        {
            "source": "200",
            "target": "69"
        },
        {
            "source": "201",
            "target": "77"
        },
        {
            "source": "202",
            "target": "203"
        },
        {
            "source": "202",
            "target": "66"
        },
        {
            "source": "203",
            "target": "93"
        },
        {
            "source": "76",
            "target": "63"
        },
        {
            "source": "76",
            "target": "204"
        },
        {
            "source": "76",
            "target": "205"
        },
        {
            "source": "63",
            "target": "204"
        },
        {
            "source": "63",
            "target": "205"
        },
        {
            "source": "64",
            "target": "91"
        },
        {
            "source": "64",
            "target": "206"
        },
        {
            "source": "64",
            "target": "207"
        },
        {
            "source": "91",
            "target": "206"
        },
        {
            "source": "91",
            "target": "207"
        },
        {
            "source": "65",
            "target": "92"
        },
        {
            "source": "65",
            "target": "208"
        },
        {
            "source": "92",
            "target": "208"
        },
        {
            "source": "66",
            "target": "93"
        },
        {
            "source": "66",
            "target": "209"
        },
        {
            "source": "66",
            "target": "210"
        },
        {
            "source": "66",
            "target": "211"
        },
        {
            "source": "93",
            "target": "209"
        },
        {
            "source": "93",
            "target": "210"
        },
        {
            "source": "93",
            "target": "211"
        },
        {
            "source": "67",
            "target": "94"
        },
        {
            "source": "67",
            "target": "212"
        },
        {
            "source": "94",
            "target": "212"
        },
        {
            "source": "68",
            "target": "95"
        },
        {
            "source": "68",
            "target": "213"
        },
        {
            "source": "95",
            "target": "213"
        },
        {
            "source": "69",
            "target": "77"
        },
        {
            "source": "69",
            "target": "214"
        },
        {
            "source": "77",
            "target": "214"
        },
        {
            "source": "70",
            "target": "78"
        },
        {
            "source": "70",
            "target": "215"
        },
        {
            "source": "70",
            "target": "216"
        },
        {
            "source": "78",
            "target": "215"
        },
        {
            "source": "78",
            "target": "216"
        },
        {
            "source": "217",
            "target": "19"
        },
        {
            "source": "217",
            "target": "2"
        },
        {
            "source": "218",
            "target": "2"
        },
        {
            "source": "12",
            "target": "2"
        },
        {
            "source": "2",
            "target": "22"
        },
        {
            "source": "2",
            "target": "23"
        },
        {
            "source": "2",
            "target": "14"
        },
        {
            "source": "2",
            "target": "15"
        },
        {
            "source": "13",
            "target": "27"
        }
    ],
    "combos": [
        {
            "id": "ams",
            "label": "Combo AMS"
        },
        {
            "id": "ah",
            "label": "Combo AH"
        },
        {
            "id": "mt",
            "label": "Combo MT"
        },
        {
            "id": "ut",
            "label": "Combo UT"
        },
        {
            "id": "hm",
            "label": "Combo HM"
        },
        {
            "id": "ehv",
            "label": "Combo EHV"
        },
        {
            "id": "nls",
            "label": "Combo NLS"
        },
        {
            "id": "hrl",
            "label": "Combo HRL"
        },
        {
            "id": "nlspl1pe01",
            "label": "Combo NLSPL1PE01"
        },
        {
            "id": "slr",
            "label": "Combo SLR"
        },
        {
            "id": "zp",
            "label": "Combo ZP"
        },
        {
            "id": "rt",
            "label": "Combo RT"
        },
        {
            "id": "lls",
            "label": "Combo LLS"
        },
        {
            "id": "hrv",
            "label": "Combo HRV"
        },
        {
            "id": "nm",
            "label": "Combo NM"
        },
        {
            "id": "re0",
            "label": "Combo RE0"
        },
        {
            "id": "asn",
            "label": "Combo ASN"
        },
        {
            "id": "dv",
            "label": "Combo DV"
        },
        {
            "id": "tb",
            "label": "Combo TB"
        },
        {
            "id": "weer",
            "label": "Combo WEER"
        },
        {
            "id": "vnn",
            "label": "Combo VNN"
        },
        {
            "id": "mnd",
            "label": "Combo MND"
        },
        {
            "id": "gv",
            "label": "Combo GV"
        },
        {
            "id": "hvs",
            "label": "Combo HVS"
        },
        {
            "id": "nlspl1pe02",
            "label": "Combo NLSPL1PE02"
        },
        {
            "id": "gn",
            "label": "Combo GN"
        },
        {
            "id": "zl",
            "label": "Combo ZL"
        },
        {
            "id": "ht",
            "label": "Combo HT"
        },
        {
            "id": "venls",
            "label": "Combo VENLS"
        },
        {
            "id": "amr",
            "label": "Combo AMR"
        },
        {
            "id": "htn",
            "label": "Combo HTN"
        }
    ]
}


// cache the initial combo children infomation
const comboChildrenCache = {};
// cache the initial parent infomation
const itemComboMap = {};
// cache the initial node and combo info
const itemMap = {};
// cache the combo related edges
const comboEdges = {};
(data.nodes.concat(data.combos)).forEach(item => {
  const { id, comboId, parentId } = item;
  const parentComboId = comboId || parentId;
  if (parentComboId) {
    if (!comboChildrenCache[parentComboId]) comboChildrenCache[parentComboId] = [];
    comboChildrenCache[parentComboId].push(id);
    itemComboMap[id] = parentComboId;
  }
  itemMap[id] = { ...item };
});
const comboIds = data.combos.map(combo => combo.id);
data.edges.forEach(edge => {
  const { source, target } = edge;
  [source, target].forEach(endId => {
    if (comboIds.includes(endId)) {
      if (!comboEdges[endId]) comboEdges[endId] = [];
      comboEdges[endId].push(edge);
    }
  })
});

// colorize the nodes and combos
const subjectColors = [
  '#5F95FF', // blue
  '#61DDAA',
  '#65789B',
  '#F6BD16',
  '#7262FD',
  '#78D3F8',
  '#9661BC',
  '#F6903D',
  '#008685',
  '#F08BB4',
];
const backColor = '#fff';
const theme = 'default';
const disableColor = '#777';
const colorSets = G6.Util.getColorSetsBySubjectColors(
  subjectColors,
  backColor,
  theme,
  disableColor,
);
data.combos.forEach((combo, i) => {
  const color = colorSets[i % colorSets.length];
  combo.style = {
    stroke: color.mainStroke,
    fill: color.mainFill,
    opacity: 0.8
  }
  itemMap[combo.id].style = { ...combo.style }
})
data.nodes.forEach(node => {
  const comboId = itemComboMap[node.id];
  const parentCombo = itemMap[comboId];
  if (parentCombo) {
    node.style = {
      stroke: parentCombo.style.stroke,
      fill: parentCombo.style.fill
    }
  }
})



const GraphComponent = () => {
    const graphRef = useRef(null);
  
    useEffect(() => {

        const graphDiv = graphRef.current;
        const width = graphDiv.scrollWidth;
        const height = graphDiv.scrollHeight - 30;
const graph = new G6.Graph({
  container:graphDiv,
  width,
  height,
  fitView: true,
  fitViewPadding: 50,
  animate: true,
  minZoom: 0.00000001,
//   plugins: [contextMenu],
  layout: {
    type: 'comboCombined',
    spacing: 5,
    outerLayout: new G6.Layout['forceAtlas2']({
      kr: 10
    })
  },
  defaultNode: {
    size: 15,
    style: {
      lineWidth: 2,
      fill: '#C6E5FF',
    },
  },
  defaultEdge: {
    size: 2,
    color: '#e2e2e2',
  },
  defaultCombo: {
    collapsedSubstituteIcon: {
      show: true,
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*IEQFS5VtXX8AAAAAAAAAAABkARQnAQ',
      width: 68,
      height: 68
    }
  },
  modes: {
    default: ['drag-combo', 'drag-node', 'drag-canvas', 'zoom-canvas', 'collapse-expand-combo'],
  },
});
graph.data(data);
graph.render();


const contextMenu = new G6.Menu({
    itemTypes: ['combo', 'node'],
    shouldBegin: (evt) => {
      // avoid showing up context menu in some situations
      const type = evt.item.getType();
      const { id, comboId, collapsed } = evt.item.getModel();
      if (collapsed) return false;
  
      const hasOriComboId = Object.values(comboChildrenCache).find(childrenIds => childrenIds.includes(id));
      if (type === 'node' && (comboId || !hasOriComboId)) return false;
      return true;
    },
    getContent: (evt) => {
      const type = evt.item.getType();
      const { id, comboId, parentId, collapsed } = evt.item.getModel();
      const hasOriComboId = Object.values(comboChildrenCache).find(childrenIds => childrenIds.includes(id));
  
      if (type === 'combo') {
        // no context menu for collapsed combo
        if (collapsed) return ''
        // does not have parent currently but had parent at initial
        if (hasOriComboId && !parentId) return `<span id="uncombo">uncombo</span><br/><span id="re-combo">re-combo</span>`;
        // did not have parent at initail
        return `<span id="uncombo">uncombo</span>`;
      }
  
      // has combo currently
      if (comboId) return '';
      // does not have combo but had combo at initial
      if (hasOriComboId) return `<span id="recombo">re-combo</span>`;
      return '';
    },
    handleMenuClick: (target, item) => {
      if (target.innerHTML === 'uncombo') {
        graph.uncombo(item);
        graph.layout();
      } else {
        const id = item.getID();
        const comboId = itemComboMap[id];
        if (comboId) {
          const childrenIds = comboChildrenCache[comboId].filter(cid => !!graph.findById(cid));
          graph.createCombo({
            ...itemMap[comboId]
          }, childrenIds);
          // add the related edges back
          comboEdges[comboId]?.forEach(edge => {
            const { source, target } = edge;
            const otherEnd = source === comboId ? target : source;
            // add it back only when the other end of the edge exist currently
            if (graph.findById(otherEnd)) {
              graph.addItem('edge', edge);
            }
          });
          graph.layout();
        }
      }
    },
  })

  graph.addPlugin(contextMenu);

if (typeof window !== 'undefined')
  window.onresize = () => {
    if (!graph || graph.get('destroyed')) return;
    if (!graphDiv || !graphDiv.scrollWidth || !graphDiv.scrollHeight) return;
    graph.changeSize(graphDiv.scrollWidth, graphDiv.scrollHeight);
  };
  return () => {
    graph.destroy();
  };
}, []);

return (
    <div>
      <div id="description">Reading data & Doing layout......</div>
      <div ref={graphRef} style={{ width: '1430px', height: '700px' }}></div>
    </div>
  );
};

export default GraphComponent;

