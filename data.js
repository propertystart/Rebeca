var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.801563382190989,
          "pitch": -0.08010984907590846,
          "rotation": 5.497787143782138,
          "target": "1-stairs"
        },
        {
          "yaw": -2.562274756173137,
          "pitch": 0.07125351952733361,
          "rotation": 1.5707963267948966,
          "target": "2-powder"
        },
        {
          "yaw": -3.064880656725716,
          "pitch": 0.040678896790319996,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7206047088143155,
          "pitch": -0.04354895056864194,
          "rotation": 1.5707963267948966,
          "target": "0-entry"
        },
        {
          "yaw": 1.1283933096047214,
          "pitch": -0.13090168328257334,
          "rotation": 0.7853981633974483,
          "target": "10-leisure"
        },
        {
          "yaw": -2.584850167838301,
          "pitch": 0.07367826421383938,
          "rotation": 4.71238898038469,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-powder",
      "name": "Powder",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "yaw": -0.5178374510116264,
        "pitch": 0.42723567838657317,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": 3.1401178755915025,
          "pitch": -0.029629931557819233,
          "rotation": 0.7853981633974483,
          "target": "1-stairs"
        },
        {
          "yaw": 2.554759963361432,
          "pitch": 0.12509827455639133,
          "rotation": 4.71238898038469,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "yaw": -0.9622759488374122,
        "pitch": 0.34349764053815335,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": 2.5986709320408092,
          "pitch": 0.1317110878984984,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.39565518820811,
        "pitch": 0.16399005854894355,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -1.2439152812365037,
          "pitch": 0.1292165098392868,
          "rotation": 4.71238898038469,
          "target": "5-living"
        },
        {
          "yaw": 1.9839975141238275,
          "pitch": -0.04818811712652504,
          "rotation": 4.71238898038469,
          "target": "3-laundry"
        },
        {
          "yaw": 2.7523156774501905,
          "pitch": 0.003008529012472394,
          "rotation": 1.5707963267948966,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.185108778803162,
        "pitch": 0.32355855658379795,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -1.698266139436436,
          "pitch": 0.07448635002514692,
          "rotation": 1.5707963267948966,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8836075073393292,
          "pitch": 0.04403340327255556,
          "rotation": 4.71238898038469,
          "target": "10-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom3",
      "name": "Bedroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0267181356594923,
          "pitch": 0.02277242630702858,
          "rotation": 1.5707963267948966,
          "target": "10-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1689328620884503,
          "pitch": -0.038592376513054916,
          "rotation": 7.853981633974483,
          "target": "10-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5054451416135084,
          "pitch": 0.04793411032379069,
          "rotation": 1.5707963267948966,
          "target": "10-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-leisure",
      "name": "Leisure",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.7132453662904545,
        "pitch": 0.05671398032101216,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": -1.7905800882390714,
          "pitch": -0.004571094905688966,
          "rotation": 7.853981633974483,
          "target": "12-master"
        },
        {
          "yaw": -2.09111780822791,
          "pitch": 0.055635482758969346,
          "rotation": 4.71238898038469,
          "target": "9-bedroom1"
        },
        {
          "yaw": -3.134300311532243,
          "pitch": -0.0074449143851644806,
          "rotation": 4.71238898038469,
          "target": "6-bathroom"
        },
        {
          "yaw": 1.9508179240004857,
          "pitch": -0.008773597174776882,
          "rotation": 1.5707963267948966,
          "target": "8-bedroom2"
        },
        {
          "yaw": 1.6215603515224215,
          "pitch": 0.00039473388471655824,
          "rotation": 4.71238898038469,
          "target": "7-bedroom3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3717329658519404,
          "pitch": 0.0008942341578013213,
          "rotation": 4.71238898038469,
          "target": "12-master"
        },
        {
          "yaw": 0.5423721952692944,
          "pitch": 0.252663995181468,
          "rotation": 17.27875959474387,
          "target": "1-stairs"
        },
        {
          "yaw": 2.148303497555281,
          "pitch": 0.003690847231363037,
          "rotation": 1.5707963267948966,
          "target": "9-bedroom1"
        },
        {
          "yaw": 1.3437639809078537,
          "pitch": 0.005829503687165172,
          "rotation": 4.71238898038469,
          "target": "10-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8431412771963984,
          "pitch": 0.020910441777324706,
          "rotation": 1.5707963267948966,
          "target": "13-ensuite"
        },
        {
          "yaw": 1.6985098227066278,
          "pitch": 0.0006400601751064272,
          "rotation": 4.71238898038469,
          "target": "11-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "yaw": 0.8059140546574763,
        "pitch": 0.10892676698736636,
        "fov": 1.307633212018712
      },
      "linkHotspots": [
        {
          "yaw": 2.550829626346407,
          "pitch": 0.08133706245077832,
          "rotation": 1.5707963267948966,
          "target": "12-master"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rebeca",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
