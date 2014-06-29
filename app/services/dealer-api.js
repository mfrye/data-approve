
(function() {
  'use strict';

angular.module('data-service', [])

.factory('dealerAPI', ['$http', function($http) {
  var BASE_URL = 'http://localhost:3000';

  var dealerAPI = {};

  // for configuring dealers - matching dealer with 3rd party api data
  dealerAPI.getInfo = function(state) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/dealerships/update/' + state
    });
  };

  dealerAPI.configDealer = function(data) {
    return $http({
      method: 'POST',
      url: BASE_URL + 'dealerships/update/' + data
    });
  };

  return dealerAPI;

}]);

})();

var data = [
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 44.275375,
            "lng": -85.406701
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "da3e1e4cbb4fe080e672765e0a996478d27ee347",
        "name": "Godfrey Chevrolet Buick",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 1536,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAXRHj82upbCrqtvGxB2GLiVzdPVYfQVJIJtgEGteTfrJ052hUnFZozA2gDEqkMC4QfWzBxFf3QnhQiFugOlhV8NYA1ZpuBBNXfsmJKuG9X3EckUquXt9pnR5t5eJ8YaiLT-rkL8me_be6r01E2O16MRIQk1B401Kpr7grepNvAWnv4xoUDn9HdW2AO6F-yYRKo0ezCcrQq6Y",
            "width": 2048
          }
        ],
        "place_id": "ChIJyTx7dVoIH4gRwrskGycFxEQ",
        "reference": "CoQBeAAAAAzGGhzc4Wf9OVMm4KGyqVolbY4CjtVb0nb4I1rBW902z_ZXtESyUdMPuMy0H940kRWnSEPzQQU-4XfI-hrjdN0psTSrHbefb5j4tWMNRo1OALmCgX-8elKnomIpw0cjGKCAK2G1JV1ttSqAnf0Z2EqaUWPByg2csO48mT25LInkEhA2p9vqhGn4EBKkGcnnDTfMGhRmtacXYT9NpJK2Iiag2ey82YhBvA",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "1701 N Mitchell St, Cadillac"
      },
      "assessment": {
        "name": 0.9379310344827586,
        "address.street": 0.9285714285714286
      },
      "average": 0.9332512315270935
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067aba28b2",
      "_rev": "8-b7d09d8916dfc140a0b2fef5c8dc0761",
      "name": "GODFREY CHEVROLET-BUICK, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "1701 N MITCHELL ST",
        "city": "CADILLAC",
        "state": "MI",
        "zip": "49601-1143"
      },
      "phone": "(231) 775-4661",
      "hours": "Mon : 08:30 AM - 06:00 PM, Tue : 08:30 AM - 08:00 PM, Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "44.2754",
        "longitude": "-85.4067"
      },
      "reviews": {
        "google": {
          "count": 2
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 44.275375,
              "lng": -85.406701
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "da3e1e4cbb4fe080e672765e0a996478d27ee347",
          "name": "Godfrey Chevrolet Buick",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1536,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAXRHj82upbCrqtvGxB2GLiVzdPVYfQVJIJtgEGteTfrJ052hUnFZozA2gDEqkMC4QfWzBxFf3QnhQiFugOlhV8NYA1ZpuBBNXfsmJKuG9X3EckUquXt9pnR5t5eJ8YaiLT-rkL8me_be6r01E2O16MRIQk1B401Kpr7grepNvAWnv4xoUDn9HdW2AO6F-yYRKo0ezCcrQq6Y",
              "width": 2048
            }
          ],
          "place_id": "ChIJyTx7dVoIH4gRwrskGycFxEQ",
          "reference": "CoQBeAAAAAzGGhzc4Wf9OVMm4KGyqVolbY4CjtVb0nb4I1rBW902z_ZXtESyUdMPuMy0H940kRWnSEPzQQU-4XfI-hrjdN0psTSrHbefb5j4tWMNRo1OALmCgX-8elKnomIpw0cjGKCAK2G1JV1ttSqAnf0Z2EqaUWPByg2csO48mT25LInkEhA2p9vqhGn4EBKkGcnnDTfMGhRmtacXYT9NpJK2Iiag2ey82YhBvA",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1701 N Mitchell St, Cadillac"
        },
        "assessment": {
          "name": 0.9379310344827586,
          "address.street": 0.9285714285714286
        },
        "average": 0.9332512315270935
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 44.275375,
              "lng": -85.406701
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "c37aeb74984699cfb67a078c145e003dab556aa2",
          "name": "Godfrey Motor Mall Services",
          "place_id": "ChIJyTx7dVoIH4gRgH5Tsj7YusM",
          "reference": "CoQBfQAAAJlsZtygMKV1pLeKs7locvX0J_cFXBpOBiahqF2LZsB8XnCXYohVKbrSwkA-ESUDWYrxiFCB1DrO5a5H5SMXvJEsXQlix-dVMSRkRhzEILCW63IqYgFrGFC9vItc-KkWJFJHmZUbpwlBgpBzOTYGV7r_pjFM8iMkT4eQYmmIy2K7EhCkqXwrOWa1LkmvO69RXJJJGhRYia0bKY92tN0H3lU2KnUO26LEPw",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1701 N Mitchell St, Cadillac"
        },
        "assessment": {
          "name": 0.7218390804597702,
          "address.street": 0.9285714285714286
        },
        "average": 0.8252052545155995
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 44.271066,
              "lng": -85.406261
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "7f3f5a57aad8b8e52ad0f69a880dcd39e82e5306",
          "name": "Fox Ford Lincoln of Cadillac",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 853,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAnsXk5DLddkMkZO97B6wlXI3L0pWIH3qCDZkWmq4WT9MlfX5dfQ0nRZvs34OMy2jPXuTCWGgeLa_D0_OkhHjBrkAx9ohe5zWk6up2PHHA0Q7TZKhb5JU4MtPJG9kPFBLtYtJ4x8a-bZuSksxMUwDbeBIQQbsBehAiBY9RwPSJuOPlbBoU4tnhP9Dlu9cQQf2dbu30p6FvQ1E",
              "width": 1280
            }
          ],
          "place_id": "ChIJ80jtilcIH4gRRhj6wcwhcs4",
          "rating": 4.7,
          "reference": "CoQBfgAAAPtm1wl8mNT5BYLSFf7k4YNVcV5jh1ycRfpJiDZf7-FMKwBn_xusvCteJTrJGLIrga8chkZENdtGSkDnklm1BwdybPuFBkeFFlzRdtKsYqqRaGv6UNxT5Y0CP2sElY9S_S4N5nOXZtHQ3EiHWcLUoTKYUllfG06fDC6sl19qgnPDEhABZFyJBUHOHOnkO0GygLp5GhSbxV8bj1aQJvc78JeKZoTLXRdtVQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1450 N Mitchell St, Cadillac"
        },
        "assessment": {
          "name": 0.6375205254515599,
          "address.street": 0.8380952380952381
        },
        "average": 0.7378078817733991
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 44.271964,
              "lng": -85.404672
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "51a85e302944aeffd23bcdeb8a6a6f28430d5b4b",
          "name": "Fox Toyota of Cadillac",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1536,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CnRlAAAAFiq-DrmDjXPEL945wn_Yl1g6canHY3X1C1JruveOYK6vU-xTCGP5nlnqquUUVfDP1dFMVnilKLyk4oLlIA4pG2WDurssIu5g-PhjxzDRLOpj5fiLF5O7i3Wbw3cr2QfwM9mH-hYSJKHr1iU2pWCgSBIQFiAiwHqu0hGOqUyhDNkL_BoU4094wdp10NFxwXNUz_P1KyxhOXU",
              "width": 2048
            }
          ],
          "place_id": "ChIJ1_5UD1cIH4gRlQju0Iaqmz8",
          "rating": 4.2,
          "reference": "CoQBdwAAANubcLvroUmro8koC05pAZ3RA3pcKjN5zhtuAWlfW2iVFejmH7NFxlLqRiEeYmhq1f7z8WffC1aEg2DZqWwABnYVHoCM8gBWORDOXgrEtI51eXlwy31TJS7c6fBh_DRNWiLLWx0aaDOChb7HYaultbC5xv6WrA5Wi6PbW87sDwM2EhDyCpglMOusi1rNXPXfWhvcGhQp-R_BjSkcbTFm7hXmm18Y0_EDKA",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1490 N Mitchell St, Cadillac"
        },
        "assessment": {
          "name": 0.599791013584117,
          "address.street": 0.8380952380952381
        },
        "average": 0.7189431258396776
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.186062,
            "lng": -84.163048
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "e039bf83a65726357f00a5f9f1d5a561127789d4",
        "name": "LaClair Sales Inc",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 1152,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAPaYEJ7ShqFN2SVYGPLFevz5eypmgKahL7UQOwgq8bjrbcXhX0r4WWb4R6YFAl3-stIiqtp4vcHqLwHBf9p5_xGR2zJ2R6lvsC-pxsbkpdaSv1_ABRi81ds2xzjb2goWalkVg6XvxivxcEi5_ZjEPJRIQx0d06UonEhhKiTNX6K-nmRoUqpe8fb-fxjNWW440mL35ww-uU-c",
            "width": 2048
          }
        ],
        "place_id": "ChIJlRlx7N2xI4gR8sdW28cckMY",
        "reference": "CoQBdAAAAOPW_QblcOf4CDPRSHJTgp_zxQCXD4z0wUMsil6yjGzxWqWSesj5X7MxmqEDfw_tMwNQUHMxeT-x3Vg48ORdV82nJm6bQOuAYRphwoGBIoioGTz1Nx7FwxtKzEhDEbEeshiai7y15iGakOljzy4y66DDOXxkyTiHLU02s9c1yuOHEhBUKGXAyQNiGTULIY7T7AL8GhSDudt8qvli4ii7ACsaOyHwmpPK9w",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "12709 Brady Rd, Chesaning"
      },
      "assessment": {
        "name": 0.934984520123839,
        "address.street": 0.8255
      },
      "average": 0.8802422600619195
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067aba46ac",
      "_rev": "8-0b0e18a70e72ffb8945cf4b729352607",
      "name": "LACLAIR SALES, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "12709 W BRADY RD",
        "city": "CHESANING",
        "state": "MI",
        "zip": "48616-9561"
      },
      "phone": "(989) 845-3057",
      "hours": "Mon : 08:00 AM - 08:00 PM, Tue - Wed : 08:00 AM - 06:00 PM, Thu : 08:00 AM - 08:00 PM, Fri : 08:00 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "43.1865",
        "longitude": "-84.1667"
      },
      "reviews": {
        "google": {
          "count": 3
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.186062,
              "lng": -84.163048
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "e039bf83a65726357f00a5f9f1d5a561127789d4",
          "name": "LaClair Sales Inc",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1152,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAPaYEJ7ShqFN2SVYGPLFevz5eypmgKahL7UQOwgq8bjrbcXhX0r4WWb4R6YFAl3-stIiqtp4vcHqLwHBf9p5_xGR2zJ2R6lvsC-pxsbkpdaSv1_ABRi81ds2xzjb2goWalkVg6XvxivxcEi5_ZjEPJRIQx0d06UonEhhKiTNX6K-nmRoUqpe8fb-fxjNWW440mL35ww-uU-c",
              "width": 2048
            }
          ],
          "place_id": "ChIJlRlx7N2xI4gR8sdW28cckMY",
          "reference": "CoQBdAAAAOPW_QblcOf4CDPRSHJTgp_zxQCXD4z0wUMsil6yjGzxWqWSesj5X7MxmqEDfw_tMwNQUHMxeT-x3Vg48ORdV82nJm6bQOuAYRphwoGBIoioGTz1Nx7FwxtKzEhDEbEeshiai7y15iGakOljzy4y66DDOXxkyTiHLU02s9c1yuOHEhBUKGXAyQNiGTULIY7T7AL8GhSDudt8qvli4ii7ACsaOyHwmpPK9w",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "12709 Brady Rd, Chesaning"
        },
        "assessment": {
          "name": 0.934984520123839,
          "address.street": 0.8255
        },
        "average": 0.8802422600619195
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.186043,
              "lng": -84.163036
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "4896922f9dc8405e5bf96fbb00a10b3245234983",
          "name": "CHEVROLET",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJY67fx92xI4gRAuEeOLSMX50",
          "reference": "CnRsAAAAXK3u1GuarNP1ZjYki4D-ogoTu232-mUBA49KvAWzSs-QQosQlXAzLfUaizfOBd-D1g-9njCVbXPXOPR-wBULFfMBrHf7gcmyGFEh3Ro9_YMHtWCWwiRc6kt2bohaf7d7jpxJbPw6tZTwHvIFMviPwhIQJAshyIG0O9mdXJIbxgUuExoUHSfxRba-BNeN7AETHtnU8hKQ4LA",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "12709 W Brady Rd, Chesaning"
        },
        "assessment": {
          "name": 0.509990253411306,
          "address.street": 0.9185185185185185
        },
        "average": 0.7142543859649122
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.187293,
              "lng": -84.164505
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "38672374fc6413da70a8a18983042171f75d5df7",
          "name": "Showcase Auto Sales",
          "place_id": "ChIJL9KWid2xI4gRC74w6NjqGbM",
          "rating": 2.9,
          "reference": "CoQBdgAAADR_8MxDf1BO1-l2vFsGij3v-VkeqUPiYy_Ttma79kyosint4qBi4Ctnr2YBiDIQnDCELA1H6rgGEwi6Cacg6zqHOGURN0s1x0-rWK7VEkDerSnbzS4_58V5SdvpOXm1dYpr6NOVvmLjMCx9diOf1ZhoRXAs6yjuSdEhxQjpBYZSEhCZ731YZ7vrdx9IgU76uE9OGhRqovUkvhe6kCsuOWWJJ2h2akVSWg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "12750 Brady Rd, Chesaning"
        },
        "assessment": {
          "name": 0.6140350877192983,
          "address.street": 0.7608333333333334
        },
        "average": 0.6874342105263158
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.741119,
            "lng": -84.722043
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "752fce77d643d837e8b854b297f1c9e3274d8e0b",
        "name": "Sundance Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 853,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAsHNy1Na5PjgizouGhIDKPRueE5HhswblxMWMv50D3wxOk1iGoiHn2ptk70U24XhHKRZDQMBikafaqtg2EpkVinc36cfr7KwFLcO4lCQt_CACdB0UVzoTm0V4tmHyB0hjrFO8Owv_mXaA4BS8TuDPxRIQZxS5PoYKXwjMxCVi2JEJchoUmw3EDZFoY2NM8itwe16-CFb-26Q",
            "width": 1280
          }
        ],
        "place_id": "ChIJQRXzw4e9IogRH9zuxioh7eU",
        "rating": 4,
        "reference": "CoQBdAAAAKEdwlThJXH8R0PE5Xhxn3DUYi9ICLyB7Hy52-THXGW2JTCc2T9bCWn6b6neLlH0sZ_dkBK1-eFdFeBmEAAc4gnVTOux494NzdBEJm_5IwlAIC4lR7hMxKrwg7BZjEYiEIRIM5BPoaNVpd_LOTPWZhpP_uTVfZ2Av6qPPpO3QUNkEhA0flucbzeJjW37n7s0a2DyGhRKPzMZiGdHbdsSkB4oyAhr1QPRNg",
        "scope": "GOOGLE",
        "types": [
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "5895 E Saginaw Hwy, Grand Ledge"
      },
      "assessment": {
        "name": 0.9249999999999999,
        "address.street": 0.9161290322580645
      },
      "average": 0.9205645161290322
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067aba82f6",
      "_rev": "8-4e2721ff4a9be4ee1064e51f2fbdf172",
      "name": "SUNDANCE CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "5895 E SAGINAW HWY",
        "city": "GRAND LEDGE",
        "state": "MI",
        "zip": "48837-9199"
      },
      "phone": "(517) 627-4051",
      "hours": "Mon - Thu : 08:00 AM - 09:00 PM, Fri : 08:00 AM - 06:00 PM, Sat : 08:30 AM - 05:00 PM, Sun : 12:00 PM - 05:00 PM",
      "location": {
        "latitude": "42.741",
        "longitude": "-84.722"
      },
      "reviews": {
        "google": {
          "rating": 4,
          "count": 83
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.741119,
              "lng": -84.722043
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "752fce77d643d837e8b854b297f1c9e3274d8e0b",
          "name": "Sundance Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 853,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAsHNy1Na5PjgizouGhIDKPRueE5HhswblxMWMv50D3wxOk1iGoiHn2ptk70U24XhHKRZDQMBikafaqtg2EpkVinc36cfr7KwFLcO4lCQt_CACdB0UVzoTm0V4tmHyB0hjrFO8Owv_mXaA4BS8TuDPxRIQZxS5PoYKXwjMxCVi2JEJchoUmw3EDZFoY2NM8itwe16-CFb-26Q",
              "width": 1280
            }
          ],
          "place_id": "ChIJQRXzw4e9IogRH9zuxioh7eU",
          "rating": 4,
          "reference": "CoQBdAAAAKEdwlThJXH8R0PE5Xhxn3DUYi9ICLyB7Hy52-THXGW2JTCc2T9bCWn6b6neLlH0sZ_dkBK1-eFdFeBmEAAc4gnVTOux494NzdBEJm_5IwlAIC4lR7hMxKrwg7BZjEYiEIRIM5BPoaNVpd_LOTPWZhpP_uTVfZ2Av6qPPpO3QUNkEhA0flucbzeJjW37n7s0a2DyGhRKPzMZiGdHbdsSkB4oyAhr1QPRNg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "5895 E Saginaw Hwy, Grand Ledge"
        },
        "assessment": {
          "name": 0.9249999999999999,
          "address.street": 0.9161290322580645
        },
        "average": 0.9205645161290322
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.740555,
              "lng": -84.720318
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "ed412a1c937541aaaf882ea6e8a68527cd9a02cb",
          "name": "J & A Auto Sales",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJVw025_3pIogRVjJW5HmBZnc",
          "reference": "CoQBcQAAAHAIczTgq0mFbYF7--RmmHQ-4BjTqht_WHN3oONNUl3Q0LRyIuR9Cch6XfNRNhsgy5o8y407Y4lCrro3IjZR5_voqf5ztlQy7mtNFUhwkgY5bKr_92rID7QpBX3GaVNahrWb5Klb64cNfy_9_Uvtb-4xIme6MkLlF_lpB1GWL23rEhDCxBmLKTDXPmO4Wr6f-4i-GhT9z1jsYvYZCdxf9EdpEgpqBD7gCw",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "5970 E Saginaw Hwy, Grand Ledge"
        },
        "assessment": {
          "name": 0.6273148148148148,
          "address.street": 0.821505376344086
        },
        "average": 0.7244100955794504
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.740874,
              "lng": -84.718215
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "aa6c7566dd2fc8f89414143004de3af445b3d1be",
          "name": "Grand Ledge Ford Lincoln",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAuhmENTFsug5aAQiyVpzPsbgCEr2_73wouUo7FfnmO5ApS6864w3EdutDngt2a_atPWijgDBX6x93Ls-J6vEf-yNf_eofFad7yBhGWLIGwg78uZQ1ipPazOlAYpclp2N8Os7Mb-qp0cAE6cpCTGF-IBIQUue3jgiFGZYzp_Nf2faatRoUK7oU4TR0WrtqSb7k-ZVydQbukZE",
              "width": 640
            }
          ],
          "place_id": "ChIJBd1MtIm9IogRka-ruoRpJ8s",
          "rating": 4.7,
          "reference": "CoQBegAAALEw-omBmPEWoWlJUPbEbktkyQ7rlJjw5WljWqVEue3fmb1NiT32zAqYnUgS15DRrEcHC95YDenxz5k2qX2Ai0GiQbIQUaY7QHA9NCXtRougvlvkD-0urYgMrs2mCsB1alAN05jl25WoNP__1RFFs314rO9nDQSpFUGZsS3FwGEKEhDymjFbjhD41ngT7RG0G-g4GhQR31ytpGDo2nJVNl-EIGG-eiTDfg",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "6080 E Saginaw Hwy, Grand Ledge"
        },
        "assessment": {
          "name": 0.6666666666666666,
          "address.street": 0.7724014336917563
        },
        "average": 0.7195340501792115
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 46.092118,
            "lng": -88.655591
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "bb33fd8b36e5ccf9c76bbd873fc64d957b3094b8",
        "name": "Lindwall Motors Inc",
        "opening_hours": {
          "open_now": true
        },
        "place_id": "ChIJ2YfJt9b7U00ROivnGYJPDMQ",
        "reference": "CoQBdgAAALJVcOVzhcHNxOAlY8Z35fXeFh-_DZK1zVNlOGvlEMGLfFmJdY4htAKDW6_UEbL60mqCc70EdkJ1o_KhopAhtzBgzF7SaFrlSd8FeUrrFtc24py_w3LHwennsr2OxvU604_4cUJlb3YRypq1-ad8JDdhahQx-YS50NVWt4vBVi9UEhA_J4XN1_nOwZnpeuLFlkSBGhRRTyPyAyRbcrX9QEvmYJ2EX8EMuQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "1531 W Adams St, Iron River"
      },
      "assessment": {
        "name": 0.9413533834586466,
        "address.street": 0.888888888888889
      },
      "average": 0.9151211361737678
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067abaa77c",
      "_rev": "8-fbf3bae08b312affc9b884c53577f7e2",
      "name": "LINDWALL MOTORS, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "1531 W ADAMS",
        "city": "IRON RIVER",
        "state": "MI",
        "zip": "49935-1266"
      },
      "phone": "(906) 265-2200",
      "hours": "Mon - Fri : 08:00 AM - 05:00 PM, Sat : 09:00 AM - 01:00 PM",
      "location": {
        "latitude": "46.0925",
        "longitude": "-88.6559"
      },
      "reviews": {
        "google": {
          "count": 1
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 46.092118,
              "lng": -88.655591
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "bb33fd8b36e5ccf9c76bbd873fc64d957b3094b8",
          "name": "Lindwall Motors Inc",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJ2YfJt9b7U00ROivnGYJPDMQ",
          "reference": "CoQBdgAAALJVcOVzhcHNxOAlY8Z35fXeFh-_DZK1zVNlOGvlEMGLfFmJdY4htAKDW6_UEbL60mqCc70EdkJ1o_KhopAhtzBgzF7SaFrlSd8FeUrrFtc24py_w3LHwennsr2OxvU604_4cUJlb3YRypq1-ad8JDdhahQx-YS50NVWt4vBVi9UEhA_J4XN1_nOwZnpeuLFlkSBGhRRTyPyAyRbcrX9QEvmYJ2EX8EMuQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1531 W Adams St, Iron River"
        },
        "assessment": {
          "name": 0.9413533834586466,
          "address.street": 0.888888888888889
        },
        "average": 0.9151211361737678
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.266479,
            "lng": -83.52937
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "df10736f684d07876f1b163a43cbf81897b1f5f2",
        "name": "McDonald Chevrolet",
        "photos": [
          {
            "height": 853,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAZjrf735eaSPzYs5CNeTngPfJfySAcudmKAs6CyoKTskkbPFg2VUOhVV_oFkI1Mzp8T9svuf6nXeSSmz0tUI39S89OUURyHgLqB-9lahZqsiJOXds-AO4zZYpO0HK0AuTPyUnapTkB-gFEPfAOmSbcxIQ4W73OvkRr8RR5MR7oF63ahoUpecUYpMbgAOOpQYGXhCL9rPjyF0",
            "width": 1280
          }
        ],
        "place_id": "ChIJrSq3uPR0JIgRrw4RoPnlQwo",
        "rating": 5,
        "reference": "CoQBdAAAADQ0DsDbvOKaaWGDN2rqj0b3n7oMvL0vuOpSVBzPnx90pZ-J_q1tZTf925MXqnLuGQg7F96W1C5mXQcPGE8y3RHDY5prZDaG3RUk61F92QhT563tVtS9-ySS5TnpI_OccKDmH-5cCM01qz7wyMVsnv14So5vYWYVHH01SbneePPuEhC5WSIcz3v8O_wBCAZ0CQICGhSM-CHzoNyJJZyUbxqEqDOfoZ9ElQ",
        "scope": "GOOGLE",
        "types": [
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "9007 State Rd, Millington"
      },
      "assessment": {
        "name": 0.9249999999999999,
        "address.street": 0.904
      },
      "average": 0.9145
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067abadd98",
      "_rev": "8-e188b2b95920418b65b384b0deda93a0",
      "name": "MCDONALD CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "9007 STATE RD",
        "city": "MILLINGTON",
        "state": "MI",
        "zip": "48746-8902"
      },
      "phone": "(989) 871-4531",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "43.2664",
        "longitude": "-83.5294"
      },
      "reviews": {
        "google": {
          "rating": 4.9,
          "count": 20
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.266479,
              "lng": -83.52937
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "df10736f684d07876f1b163a43cbf81897b1f5f2",
          "name": "McDonald Chevrolet",
          "photos": [
            {
              "height": 853,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAZjrf735eaSPzYs5CNeTngPfJfySAcudmKAs6CyoKTskkbPFg2VUOhVV_oFkI1Mzp8T9svuf6nXeSSmz0tUI39S89OUURyHgLqB-9lahZqsiJOXds-AO4zZYpO0HK0AuTPyUnapTkB-gFEPfAOmSbcxIQ4W73OvkRr8RR5MR7oF63ahoUpecUYpMbgAOOpQYGXhCL9rPjyF0",
              "width": 1280
            }
          ],
          "place_id": "ChIJrSq3uPR0JIgRrw4RoPnlQwo",
          "rating": 5,
          "reference": "CoQBdAAAADQ0DsDbvOKaaWGDN2rqj0b3n7oMvL0vuOpSVBzPnx90pZ-J_q1tZTf925MXqnLuGQg7F96W1C5mXQcPGE8y3RHDY5prZDaG3RUk61F92QhT563tVtS9-ySS5TnpI_OccKDmH-5cCM01qz7wyMVsnv14So5vYWYVHH01SbneePPuEhC5WSIcz3v8O_wBCAZ0CQICGhSM-CHzoNyJJZyUbxqEqDOfoZ9ElQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "9007 State Rd, Millington"
        },
        "assessment": {
          "name": 0.9249999999999999,
          "address.street": 0.904
        },
        "average": 0.9145
      }
    ]
  },
  {
    "suggestion": "needs_assessment",
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067abb1871",
      "_rev": "8-37e5059b5bb83f4ceed5a29df54f5627",
      "name": "SEELYE-WRIGHT OF SOUTH HAVEN, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "10159 M-140 HWY",
        "city": "SOUTH HAVEN",
        "state": "MI",
        "zip": "49090-8400"
      },
      "phone": "(269) 637-5246",
      "hours": "Mon - Thu : 09:00 AM - 08:00 PM, Fri : 09:00 AM - 06:00 PM, Sat : 09:00 AM - 04:00 PM, Sun : 10:00 AM - 02:00 PM",
      "location": {
        "latitude": "42.3808",
        "longitude": "-86.2687"
      },
      "reviews": {
        "google": {
          "rating": 4.9,
          "count": 11
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.380874,
              "lng": -86.267458
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "f20ead586ab3436f46d6eadb0a87e1a8032f0e62",
          "name": "Seelye of South Haven",
          "opening_hours": {
            "open_now": false
          },
          "place_id": "ChIJRRRjFZSsEIgR2aLABNpeUXI",
          "reference": "CoQBdwAAAClM9wDIBZKXjyP9zsZshV59DnkJkWneoebuYb1FrA4cuv_Wp5UT6kiSn0YcQJI1bMX108EiRcXUYHtjSrQLhGxhlY_XMw17Qc0qu1qul2OFORqBUuxNgQBlITYidwiYFcDBfZ9TpGOpx0wfmjFr33N1SjfzV5GJSShfx1ZDI8g8EhCODKEdCMaVmSiccE4l3jRGGhRuu40DmuO5b4F9YDZEka-ByCQ3ug",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "10159 M 140 Hwy, South Haven"
        },
        "assessment": {
          "name": 0.8159663865546218,
          "address.street": 0.8866666666666667
        },
        "average": 0.8513165266106443
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.376601,
              "lng": -86.268531
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "a3a026c40116158e0f75f840a756e8fb550d782e",
          "name": "McFadden Friendly Motors In",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJiQIpV9isEIgRIvM8gxx49-U",
          "rating": 4.8,
          "reference": "CoQBfgAAAEcz-iyytHHLuDs6QFm3_E407hiyS6vltmxkBgxDWvZcebGgDmwLlZlAISx5uYTMa14ll_lOzzpy-B2ehAE52spo7XIYSlB5cdTn8jwm6DpCnnC7RBLFV3IxV9_bJwyxobAbOcpjdg4OOfPXfvNtWTGoGzEdeggBZelRzDoL1QEmEhCmgB3GLvJP3MpxGWNOa0P7GhS7s8TEdaMn6_WxJX8tFvgKSjEP4g",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "M-140, South Haven Charter Township"
        },
        "assessment": {
          "name": 0.6877269426289034,
          "address.street": 0.582010582010582
        },
        "average": 0.6348687623197427
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.38033,
              "lng": -86.273597
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "16aad9a40b2540cebaf4f49beb6c1825102f0b83",
          "name": "E & H Auto Repair Inc.",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJIyFN-uH_GYgRMmUAmd_kMqE",
          "reference": "CoQBeQAAAKg4Y_lrbtENfwScm2JVBTCoX12xcJmT-92fxI1j_ksl9nJGSXg52IGou7u3G_ReBZvyWfeZzmqwZzqoDbFLUSnmY-BRSY6LFbex31RoR-s5zIkft2uwdVYwS6LjJ2UixXyL3UAighqo_d1lGeAP2_Li3vOHZtJTShM0uJmKlRaLEhAVw3l73fEu17kdpappdQrqGhR5hbCNjPYzDZRH3i4l8im4gvZ4qg",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "9920 Blue Star Hwy, South Haven Charter Township"
        },
        "assessment": {
          "name": 0.7076648841354723,
          "address.street": 0.5083333333333333
        },
        "average": 0.6079991087344028
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.534946,
            "lng": -83.049058
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "060de1e2f81719fc641b712fa09c2e48e67c4b0d",
        "name": "Hamilton Chevrolet",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 555,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAkjV5YITmnWyFNzzsF00Rrbm-Lc4adYmS3dUtQ3yIkTqb_K5Nt-kunnypOScGReskUVq_ajCHFnTUlV888JCUo87dPoCJpLwiM1tFDE4JciRnmYBn1kQsWClgb6kzawwDwOQ2bOKeob6nE4b-DASmpBIQzIEZlTXux8lzAkARX_imjxoUyeuuTEdWSwOYdKraN_7y6pmf7oo",
            "width": 1280
          }
        ],
        "place_id": "ChIJ2dWbgeLaJIgRpo5GCnIzK00",
        "rating": 4.3,
        "reference": "CoQBcwAAALBhQtO0ztlUGHiwEBFHDtDJ_HXiA1abalyVAFKgad7RGwuOndXlW0RbFfbKsvjqRVmxIjroxrcoFKkhDczw7DmI5QdaAy5tEp89NK_FOY29daRx_IFUxb3kfz79bO5L1vg1A_tPLm_0r8AdaG0RHjuIxmEHZ-uCmn7Rhvhl9rFiEhA0yf_Ih_0SjJvx_pebT3oCGhTZpPsLuqThLO2o6nKtBT7TT6VXfQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "5800 E 14 Mile Rd, Warren"
      },
      "assessment": {
        "name": 0.9249999999999999,
        "address.street": 0.8465641025641026
      },
      "average": 0.8857820512820513
    },
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067abb447d",
      "_rev": "8-0110b96d0eb3e1bf0833d2b9715b354b",
      "name": "HAMILTON CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "5800 14 MILE RD",
        "city": "WARREN",
        "state": "MI",
        "zip": "48092-3199"
      },
      "phone": "(586) 264-1400",
      "hours": "Mon : 09:00 AM - 09:00 PM, Tue - Wed : 09:00 AM - 06:00 PM, Thu : 09:00 AM - 09:00 PM, Fri : 09:00 AM - 06:00 PM",
      "location": {
        "latitude": "42.5351",
        "longitude": "-83.0496"
      },
      "reviews": {
        "google": {
          "rating": 4.3,
          "count": 36
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.534946,
              "lng": -83.049058
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "060de1e2f81719fc641b712fa09c2e48e67c4b0d",
          "name": "Hamilton Chevrolet",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 555,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAkjV5YITmnWyFNzzsF00Rrbm-Lc4adYmS3dUtQ3yIkTqb_K5Nt-kunnypOScGReskUVq_ajCHFnTUlV888JCUo87dPoCJpLwiM1tFDE4JciRnmYBn1kQsWClgb6kzawwDwOQ2bOKeob6nE4b-DASmpBIQzIEZlTXux8lzAkARX_imjxoUyeuuTEdWSwOYdKraN_7y6pmf7oo",
              "width": 1280
            }
          ],
          "place_id": "ChIJ2dWbgeLaJIgRpo5GCnIzK00",
          "rating": 4.3,
          "reference": "CoQBcwAAALBhQtO0ztlUGHiwEBFHDtDJ_HXiA1abalyVAFKgad7RGwuOndXlW0RbFfbKsvjqRVmxIjroxrcoFKkhDczw7DmI5QdaAy5tEp89NK_FOY29daRx_IFUxb3kfz79bO5L1vg1A_tPLm_0r8AdaG0RHjuIxmEHZ-uCmn7Rhvhl9rFiEhA0yf_Ih_0SjJvx_pebT3oCGhTZpPsLuqThLO2o6nKtBT7TT6VXfQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "5800 E 14 Mile Rd, Warren"
        },
        "assessment": {
          "name": 0.9249999999999999,
          "address.street": 0.8465641025641026
        },
        "average": 0.8857820512820513
      }
    ]
  },
  {
    "suggestion": "needs_assessment",
    "saved": {
      "_id": "2e6ae3fdfb15c2106c0fb4067abb5713",
      "_rev": "8-f37838bc2b86325c598f726597dbeb30",
      "name": "DON RYPMA CHEVROLET-BUICK-PONTIAC-GMC, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "8130 WHITEHALL RD",
        "city": "WHITEHALL",
        "state": "MI",
        "zip": "49461-9497"
      },
      "phone": "(231) 894-4044",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "43.4055",
        "longitude": "-86.3135"
      },
      "reviews": {
        "google": {
          "count": 2
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.405911,
              "lng": -86.313776
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "f50a03e3f6ce4058a8a9e620640ff3db5a4b7148",
          "name": "Don Rypma Chevrolet Buick GMC",
          "photos": [
            {
              "height": 240,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAZckhcHaGhXY5paGLCB7SSsv_Dp8YzvpWOOOO0hP4Rps2nw0RCdLuTtXxpGeRK0LZQ7rrr2J9QPgTXfHB2RP_SoBYcGoKzZPg5HfusmMxrML9wrgzvOykQYRbLL55P68KZGNut2ltkquYlbTrwdbKXRIQgve_GVHdrdqPuLrSLgdPJBoUMSLK3aUhLXU1dPwPkxQHP0b18uc",
              "width": 320
            }
          ],
          "place_id": "ChIJHWelaD_eG4gRZ2MjnqUozx0",
          "reference": "CoQBfgAAAJgzFGMjC5vj1Zm3CFH7y9m0xrWHzxvjc7lX3YsL3r6V9jTJqa2LXV6sm3J9yFQ2xzM3U4VzSR41K97lprEiA0kUuYi9pVup_7rNzEmKbOBp3rw3F0Q5QZqTn24aUuwp2yXVYaxgaei-4it2Jpsh32b2RcBvGQS3eJG538fIIU4pEhDEih7EOgoWEeByuQz-CNQKGhQT0wf4AP0sh6GU8w5Ph7sOgTQfpA",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "8130 Whitehall Rd, Whitehall"
        },
        "assessment": {
          "name": 0.8676824378508421,
          "address.street": 0.9214285714285715
        },
        "average": 0.8945555046397068
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.403938,
              "lng": -86.312476
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "1e4e20338d404b402e4bc1f3c398e3a9d95a20d0",
          "name": "Kurt Bonner's Whitehall Motor",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 1536,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CnRqAAAAMWhmv_Mqn5ZXQ3BjFm8JAAWzYuf8tw8nZyetq6_FRmPqXuQnJ50JbaOdDIsCEM_utiVFJBmCYxuYMzIz1YHbg0vSzr8wE5uJg5f4t5GyvqfaDLJoOa7VXSHz_ybs69kuPAbQrvO-30p1JEBbdJMhKxIQmGicsgdARM_lvWKK5W2d5xoUhfHwPZtg8EY9sG-oOT2tqcrrlq8",
              "width": 2048
            }
          ],
          "place_id": "ChIJiZGhykDeG4gRjNvOeN9rbdw",
          "reference": "CoQBfwAAAGf71tCVxaY20MU8_aUe7JGYOxPUWG59YvKDktTtKFUXfK6oquzOApY6Rfb5ywipB_XmKjvrW-HquBRPdKrFvpeaJ57w4FbkNkXWxtRpb1aK4VQUpG16I4Qro4vyfoALeX2LgPxB60ROCJSUsZRHFAdzwufmBchRFi78bb3S4TzFEhAQDpPRURy1yTyKRXwI2oV4GhRhbqawu3ABD4zOPNNkLzEcYc7b9A",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "8061 Whitehall Rd, Whitehall"
        },
        "assessment": {
          "name": 0.6605185779203421,
          "address.street": 0.844406512605042
        },
        "average": 0.7524625452626921
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.583343,
            "lng": -84.805773
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "db752f36c77f9569f3c008d9c68a0fed7e668180",
        "name": "Team One Chevrolet Buick GMC",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 768,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAbxp60uCya5kBmFqf4kgt67VsfEPEeFDUDUVtxXzNQGfZPXdSe9UeXAX13Z0o2YxqgkwSbc9XkAVuYmtxd664AD6YlBg1KZUOH-d-4r6--k6fbSa9pNYeza4AD1-ZMUG5H01tv4nnCzpLtNTytudo9BIQIe7Zm9ZJFSdJXRxKSAO9lxoUStpNN2Ol8nuZOKgQkXgWghrsZ54",
            "width": 1024
          }
        ],
        "place_id": "ChIJeZfLmYWvIogRXJaDoUkRwfw",
        "rating": 4.5,
        "reference": "CoQBfgAAAAOdmPqhE6psD7blxfABurPhJib1r8Fz-LNNLFWXAOJSldQErNqFZtUq-_FvnOCXWeVMOKkkaUtGAXaReK531qLKAFlXc1ZNThJcrh6AeGhX3O-7aN4IOIe2R3gZunJsSumMipvjZONtOKhLspDRUh6IQyJitFEihWRbW_mOM--wEhCV_rejnkClcKrRV_U-E4EaGhSbHVusQByzIGfw5ao-xSozmoeH-w",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "1616 Lansing Rd, Charlotte"
      },
      "assessment": {
        "name": 0.9275210084033613,
        "address.street": 0.9153846153846154
      },
      "average": 0.9214528118939883
    },
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c71d4bc",
      "_rev": "8-e42fe965fa5af7fa085432c131491c73",
      "name": "TEAM ONE CHEVROLET-BUICK-GMC, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "1616 LANSING RD",
        "city": "CHARLOTTE",
        "state": "MI",
        "zip": "48813-8400"
      },
      "phone": "(517) 543-0200",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue : 08:30 AM - 06:00 PM, Wed - Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 04:00 PM, Sun : 10:00 AM - 02:00 PM",
      "location": {
        "latitude": "42.5832",
        "longitude": "-84.8048"
      },
      "reviews": {
        "google": {
          "rating": 4.5,
          "count": 67
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.583343,
              "lng": -84.805773
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "db752f36c77f9569f3c008d9c68a0fed7e668180",
          "name": "Team One Chevrolet Buick GMC",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 768,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAbxp60uCya5kBmFqf4kgt67VsfEPEeFDUDUVtxXzNQGfZPXdSe9UeXAX13Z0o2YxqgkwSbc9XkAVuYmtxd664AD6YlBg1KZUOH-d-4r6--k6fbSa9pNYeza4AD1-ZMUG5H01tv4nnCzpLtNTytudo9BIQIe7Zm9ZJFSdJXRxKSAO9lxoUStpNN2Ol8nuZOKgQkXgWghrsZ54",
              "width": 1024
            }
          ],
          "place_id": "ChIJeZfLmYWvIogRXJaDoUkRwfw",
          "rating": 4.5,
          "reference": "CoQBfgAAAAOdmPqhE6psD7blxfABurPhJib1r8Fz-LNNLFWXAOJSldQErNqFZtUq-_FvnOCXWeVMOKkkaUtGAXaReK531qLKAFlXc1ZNThJcrh6AeGhX3O-7aN4IOIe2R3gZunJsSumMipvjZONtOKhLspDRUh6IQyJitFEihWRbW_mOM--wEhCV_rejnkClcKrRV_U-E4EaGhSbHVusQByzIGfw5ao-xSozmoeH-w",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1616 Lansing Rd, Charlotte"
        },
        "assessment": {
          "name": 0.9275210084033613,
          "address.street": 0.9153846153846154
        },
        "average": 0.9214528118939883
      }
    ]
  },
  {
    "suggestion": "needs_assessment",
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c71e426",
      "_rev": "8-5afe620b7b14071fddc9677ea8aa06ba",
      "name": "ROYAL CHEVROLET BUICK GMC",
      "brand": "Chevrolet",
      "address": {
        "street": "637 E CHICAGO RD",
        "city": "COLDWATER",
        "state": "MI",
        "zip": "49036-9497"
      },
      "phone": "(517) 279-8061",
      "hours": "Mon : 09:00 AM - 08:00 PM, Tue : 09:00 AM - 06:00 PM, Wed : 09:00 AM - 08:00 PM, Thu - Fri : 09:00 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "41.9367",
        "longitude": "-84.954"
      },
      "reviews": {
        "google": {
          "count": 2
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 41.935197,
              "lng": -84.957039
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "431ba1a234e265b907123553f0ca9351e787eef2",
          "name": "Royal Chevrolet Cadillac",
          "place_id": "ChIJ39Bya8_XF4gRxU2ZlZtqRAI",
          "reference": "CoQBeQAAAKEfy3Tf32LzQza9chRCNQ6wW8OTSvlWtAb__8s9NoWbwcxj4Ts7hH1__S76ir5NHOUcQuJjcbYI-JHgyuq3NKCOIEw8gSO4sSZYzW7VEfsNkUp5ueatRja6croB4yGsY_YTjE81v7FYBF1-MqIVp7Cw1U7Zhp-edbBfKk3jRnBYEhA35kxnlAo4IuUb3dx102KZGhQNeovPlP0bOiaI4Q9j2F_7-FlzeQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "637 E Chicago Rd, Coldwater"
        },
        "assessment": {
          "name": 0.841,
          "address.street": 0.9185185185185185
        },
        "average": 0.8797592592592592
      }
    ]
  },
  {
    "suggestion": "not_found",
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c721373",
      "_rev": "8-36e165c1c3eef5f055208b36fb6fce0e",
      "name": "MORAN CHEVROLET",
      "brand": "Chevrolet",
      "address": {
        "street": "4511 24TH AVE",
        "city": "FORT GRATIOT",
        "state": "MI",
        "zip": "48059-3401"
      },
      "phone": "(810) 385-8500",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 PM - 02:00 PM",
      "location": {
        "latitude": "43.0303",
        "longitude": "-82.45812"
      },
      "reviews": {
        "google": {
          "count": 2
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.03304,
              "lng": -82.457578
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "ac3f75dff227fcd424c01ba3864c1e9cc11dfb19",
          "name": "Moran Auto Outlet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1365,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAnulWRXL9Wk0G6P0HA5nOi31AWkhE163RLLIshCRJL82sw5-WLxtsNRk8b6qV7PyhppmZowzR7zCH4s8nL32obPKn-xB97mPgvxlbul8Vp4bi5ueqkjisdBzKjjVtWmxPn6OEEY4eVHtAnQqblwB7ZRIQl4gKXtK40twOIRY7bG3mNBoUldB7FQdN_0f59JbDUPYPVjAAii0",
              "width": 2048
            }
          ],
          "place_id": "ChIJJxzLmMibJYgRYABLNjScwxU",
          "reference": "CoQBcgAAANelUJVQeco2LrfEjcQ9yemagPSynqZCuIBMsRsDUS85i1mlvqP5apLKXfqguFz-GSqht6FVjMuKAtHzbwnGS8ZksFNhPpHke6uCaoNpsdnqLuTtLG3-98trx6j5PZe-v-DfBrZKl1hubn5hJTJ3cajrCmDlvY6cdKtxfbkFjMNwEhB8x2sMuMT50Y3sXzBvlpwqGhSukq8AS5dphAs-VXLGvK1L-xTosQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4281 24th Ave, Fort Gratiot Township"
        },
        "assessment": {
          "name": 0.7764705882352941,
          "address.street": 0.7769230769230769
        },
        "average": 0.7766968325791855
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.026516,
              "lng": -82.455156
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "e802bf90aab4cf16fc9d19616f6640151529bc00",
          "name": "Blue Water Chrysler Jeep Dodge Ram",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 538,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAflEF-5F1xrv4AI22Xo-OBMeyVkh4hpp3nbW5ESO0fvAlFE9PFbtadGiCT8eFD5dYZYfOOi3OVqaNrJp3qhJyd1DFw82VZH9NXBTqnBOEUnUEwxgXwvWMFPsZxyeSupDY8fZ0_EQTbwWpPJKg64nl1xIQ8kBFWQ1KaIm-xTH38uRxlBoUdb73Z0rfD6QTsIMzUHApc9dSBhA",
              "width": 720
            }
          ],
          "place_id": "ChIJUat-6sCbJYgRiH38O0TUN60",
          "reference": "CpQBhAAAAKrAvAvciB1Na3FQMUYtU_DxKBjpIU82Vr7XK6H-M8DBar2F3HC5nUgxY8tG9pwWWzZdSnymbWu0OR7RKxkcmLbOeMK3qc47mkwehWZPckUgofaMovvC74YsfUNwUGS-OzGDqvgYP2X6wkUP5dCFWFgclhu9EelmHufQDRznwTSqiCp-NVsi1HvcEQZdENknMRIQRuBt3Z5McaIio64tYYEK2BoUzMHgEJiTL3DlhLR-8Ads-PKyO8Y",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4080 24th Ave, Fort Gratiot Township"
        },
        "assessment": {
          "name": 0.6535947712418301,
          "address.street": 0.7141025641025641
        },
        "average": 0.6838486676721971
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.515179,
            "lng": -83.608077
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "fa4360ab1abe4321751b34fb8416d3ee71ff8a4b",
        "name": "Liberty Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 255,
            "html_attributions": [],
            "photo_reference": "CnRqAAAAWf__7k_eIvXHkzcJRFVJOMNxq_S5EEqdwY_Ux4LWGIYKDlWwus5JASnoN87hbYARQiiQYYvihZK6U0vjvq0KVgF9Fe9J5YdIZ3tKivqItz6wf32rpF9umBgM3LMyLXesRMQuh6Q-scd45K4qqbAl4xIQet-WQJPxDtzj37zNSOwkLhoULZT58XLINA96WxkIsRsApa2VP58",
            "width": 371
          }
        ],
        "place_id": "ChIJQSrkq-5XI4gRLmYvyJXNSGE",
        "rating": 4.2,
        "reference": "CoQBcwAAABKZu3JgbDC8hha02a7hxGZAN_raTgQ6F26O03KRMhK1B576Uwnppw9zuqpJh4fA5sNz_CUJhRosa33wWIC99yQE3C1suN1devzOgjGsuAnuDZyblm_xsP6Nhhaw_NNwA1eHpJVPMhptRy5_0gh3reWUKeTw3nlCQOwX_Un9sgpQEhB2goe6kVvIA6DNPLIUPvl3GhRUYS5sYvJBfDbgSEYZ_yoBwe4YaQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "30400 Lyon Center Dr, New Hudson"
      },
      "assessment": {
        "name": 0.9217391304347826,
        "address.street": 0.8812500000000001
      },
      "average": 0.9014945652173914
    },
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c728b7f",
      "_rev": "8-231103a35f35f33a11472c899cd76bc8",
      "name": "LIBERTY CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "30400 LYON CENTER DRIVE EAST",
        "city": "NEW HUDSON",
        "state": "MI",
        "zip": "48165-8900"
      },
      "phone": "(248) 486-1900",
      "hours": "Mon : 08:30 AM - 09:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 09:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 10:00 AM - 04:00 PM",
      "location": {
        "latitude": "42.51574",
        "longitude": "-83.61008"
      },
      "reviews": {
        "google": {
          "rating": 4.2,
          "count": 79
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.515179,
              "lng": -83.608077
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "fa4360ab1abe4321751b34fb8416d3ee71ff8a4b",
          "name": "Liberty Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 255,
              "html_attributions": [],
              "photo_reference": "CnRqAAAAWf__7k_eIvXHkzcJRFVJOMNxq_S5EEqdwY_Ux4LWGIYKDlWwus5JASnoN87hbYARQiiQYYvihZK6U0vjvq0KVgF9Fe9J5YdIZ3tKivqItz6wf32rpF9umBgM3LMyLXesRMQuh6Q-scd45K4qqbAl4xIQet-WQJPxDtzj37zNSOwkLhoULZT58XLINA96WxkIsRsApa2VP58",
              "width": 371
            }
          ],
          "place_id": "ChIJQSrkq-5XI4gRLmYvyJXNSGE",
          "rating": 4.2,
          "reference": "CoQBcwAAABKZu3JgbDC8hha02a7hxGZAN_raTgQ6F26O03KRMhK1B576Uwnppw9zuqpJh4fA5sNz_CUJhRosa33wWIC99yQE3C1suN1devzOgjGsuAnuDZyblm_xsP6Nhhaw_NNwA1eHpJVPMhptRy5_0gh3reWUKeTw3nlCQOwX_Un9sgpQEhB2goe6kVvIA6DNPLIUPvl3GhRUYS5sYvJBfDbgSEYZ_yoBwe4YaQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "30400 Lyon Center Dr, New Hudson"
        },
        "assessment": {
          "name": 0.9217391304347826,
          "address.street": 0.8812500000000001
        },
        "average": 0.9014945652173914
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.516065,
              "lng": -83.609011
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "97efa5047ae89a23f3d2d935ce09f17b977711f8",
          "name": "Liberty Hyundai",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 499,
              "html_attributions": [],
              "photo_reference": "CoQBdAAAAMvq_EP9C0_v8-0N09V6cMSK8G5_hffpJ63hY0UB5NySawTUlDXjiVNVP0LZFX4EsCB-SR4DB6Vs-F3hP4HzFsmKDgWdxKglszZt7pZw3kp76KTQTkeoRkBoAhuKBUxC25lI0nSTBCUd0YnVxNZ49hKc8zZMSs37wPs6B6OnhwWmEhAVidC6FzckUkkFHftwPN_AGhQ7eH8dkoEPSFAQi-SQlVoBRhGi3g",
              "width": 499
            }
          ],
          "place_id": "ChIJnbWlF-xXI4gRSOIep0NZlow",
          "rating": 4.2,
          "reference": "CoQBcgAAAJbfzc9xd2G2XdVv4JPtKwLUsv0efH8ih3u0ghrTHMHkJ_LB77QihJj3evigxCfsp7Uj-2acd9LgICcCyp3aXWrNaaiLAoLLHIjr-7PcQJLPsNEKBMNl8rAsK7uyVI2IN6IJ7hhv_SVa7vH39r31ePs6vI6bJbt1a23HZFgiLH31EhBV2bRy47lJXz9bVNIhRUiPGhSXHEzTE5FjnBcsx8lf1fIMxfITCw",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "30492 Lyon Center Dr, New Hudson"
        },
        "assessment": {
          "name": 0.7634782608695652,
          "address.street": 0.7381030701754386
        },
        "average": 0.7507906655225018
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.765877,
            "lng": -83.017423
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "50c489807e4f8c6a730362932fd3d33a28f65ce5",
        "name": "Heidebreicht Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 2448,
            "html_attributions": [],
            "photo_reference": "CnRqAAAAtmkJ-R_43p0Ewz6SnSJiArF2dZBPnyC5vSiKtAeSXQGLKoOF4qq6lYcUx4oVX2Ih5MIcRaLpteBwp3vrbE7InCc_yjwPMT00n-k44aqyKoH1glZ72EW8a7E9YCHFlRV0FlSWYoq6rzzT40T0QIGr3BIQoLpwbhgBTw8O1VZaEKTSoxoUCLFMTTXE99HSkSecO0mrfwzS3kc",
            "width": 3264
          }
        ],
        "place_id": "ChIJQ0J_t1_kJIgRp-955JVCz80",
        "rating": 4.3,
        "reference": "CoQBeQAAAIO2bn5oqZXO1gGjQp6_Ppt_GJYj-Fyf99jkBQbjy4jSjPNN_xoQ3dmiM6vKFIqwxUGXXSagOn0I7E0jK3MdQUKxRm_cbLJqWGSj2o78fAhZkxwSNdQouEvVdSjk1HMPZfs6bfwZcfbRWXbgWkaSigu_qLGEOFyeKfjvSGIzBwyIEhBqoXlFVY0rxlm7qRX2-oeHGhT0YemoimHWieCoxkjVG5qSulADXA",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "64200 Van Dyke, Washington"
      },
      "assessment": {
        "name": 1,
        "address.street": 0.9076923076923077
      },
      "average": 0.9538461538461538
    },
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c72e5a0",
      "_rev": "8-a9a5e4c2a341eacc7f089f2d86560645",
      "name": "HEIDEBREICHT CHEVROLET",
      "brand": "Chevrolet",
      "address": {
        "street": "64200 VAN DYKE",
        "city": "WASHINGTON TOWNSHIP",
        "state": "MI",
        "zip": "48095-2577"
      },
      "phone": "(586) 752-5900",
      "hours": "Mon : 09:00 AM - 08:00 PM, Tue - Wed : 09:00 AM - 06:30 PM, Thu : 09:00 AM - 08:00 PM, Fri : 09:00 AM - 06:00 PM, Sat : 09:00 AM - 03:00 PM",
      "location": {
        "latitude": "42.7664",
        "longitude": "-83.0182"
      },
      "reviews": {
        "google": {
          "rating": 4.3,
          "count": 23
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.765877,
              "lng": -83.017423
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "50c489807e4f8c6a730362932fd3d33a28f65ce5",
          "name": "Heidebreicht Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 2448,
              "html_attributions": [],
              "photo_reference": "CnRqAAAAtmkJ-R_43p0Ewz6SnSJiArF2dZBPnyC5vSiKtAeSXQGLKoOF4qq6lYcUx4oVX2Ih5MIcRaLpteBwp3vrbE7InCc_yjwPMT00n-k44aqyKoH1glZ72EW8a7E9YCHFlRV0FlSWYoq6rzzT40T0QIGr3BIQoLpwbhgBTw8O1VZaEKTSoxoUCLFMTTXE99HSkSecO0mrfwzS3kc",
              "width": 3264
            }
          ],
          "place_id": "ChIJQ0J_t1_kJIgRp-955JVCz80",
          "rating": 4.3,
          "reference": "CoQBeQAAAIO2bn5oqZXO1gGjQp6_Ppt_GJYj-Fyf99jkBQbjy4jSjPNN_xoQ3dmiM6vKFIqwxUGXXSagOn0I7E0jK3MdQUKxRm_cbLJqWGSj2o78fAhZkxwSNdQouEvVdSjk1HMPZfs6bfwZcfbRWXbgWkaSigu_qLGEOFyeKfjvSGIzBwyIEhBqoXlFVY0rxlm7qRX2-oeHGhT0YemoimHWieCoxkjVG5qSulADXA",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "64200 Van Dyke, Washington"
        },
        "assessment": {
          "name": 1,
          "address.street": 0.9076923076923077
        },
        "average": 0.9538461538461538
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.769612,
              "lng": -83.015831
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "6574cff2bb81052206bdaea94d2316ea2eb92cd1",
          "name": "Orchard Chrysler Dodge Jeep Ram",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 581,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAFxfirkriTz6dZ9dtPtID2q3mdr2E7RbzygNcplSTZwFyLFNLxzlL6vrKHicwKvcPBQa0u5tqamKRy_AVdZ406YJHG3CYPtYfDLycKUkOoLjwZAiEnnQ4PoEg8yfQXelqqV9isfPmd_LzepyRNXup6hIQmu7MCk4kme27VwRq-vDvfhoUD9phccWewrAinfL_SVKPd3LjcRI",
              "width": 1032
            }
          ],
          "place_id": "ChIJne8nPfXkJIgRtLSQHrsuTY8",
          "rating": 4,
          "reference": "CpQBggAAABWVZwEo1Ydm4vxg8FhALCPHkk8njStc1Zx9Fl1wfGQY0zdiDdulGL69VHknGR826g6Fe54UySEu-iDcm4wKEb_9m64VqRj4xYOZ98D4rZfM2WtXX6JOe_qDgPHfnkSAlaXDKWQUj6SOUSI-dW28mSd4xe_Hii7XwKm4Cn8eLa-5IK3U_iflCR9JP2ndx5pnkBIQHGRE9wjyZLTwI04Mu59x8RoU8TmuQk-zIebrRy-CDWB3TMzA28Q",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "64600 Van Dyke Rd, Washington"
        },
        "assessment": {
          "name": 0.5479526447268382,
          "address.street": 0.8338259441707717
        },
        "average": 0.690889294448805
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.447494,
            "lng": -85.66123
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "1054dba0f35e1f39ccdbe7d0b15b8a388e4f65fc",
        "name": "Midway Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "place_id": "ChIJdYBN-EB-F4gRCOhTsTxmV_c",
        "reference": "CoQBcwAAAEo5reQb4UcEGpPlpDyBaDEgj71-5J2niiTo9tg9S8-ZXlN-1ctNE-XE8OLC9G3jno4ggKgMcTCxv6Mm067aWiN5ft7frBxoNNMwQ9SbDUS1SMZcGQ_3O07wiGFHLxSi56kGjvwSkji5i5EHhV9qjocu9DIwP_lPJlrtdd-vHMwZEhBBiHYcC8uCRB7PH3X1eulPGhQkZwGkjNtKXkQbt3pWMHKZphVm_w",
        "scope": "GOOGLE",
        "types": [
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "381 12th St, Plainwell"
      },
      "assessment": {
        "name": 1,
        "address.street": 0.9
      },
      "average": 0.95
    },
    "saved": {
      "_id": "7608d3f39c800c9c8ffc8b7f45bd059b",
      "_rev": "8-daad43ac08c5b83234b83544971150ac",
      "name": "MIDWAY CHEVROLET",
      "brand": "Chevrolet",
      "address": {
        "street": "381 12TH ST",
        "city": "PLAINWELL",
        "state": "MI",
        "zip": "49080-1157"
      },
      "phone": "(269) 685-6871",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue : 08:30 AM - 06:00 PM, Wed : 08:30 AM - 08:00 PM, Thu - Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 02:00 PM",
      "location": {
        "latitude": "42.4492",
        "longitude": "-85.6613"
      },
      "reviews": {
        "google": {
          "rating": 4.2,
          "count": 24
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.447494,
              "lng": -85.66123
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "1054dba0f35e1f39ccdbe7d0b15b8a388e4f65fc",
          "name": "Midway Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJdYBN-EB-F4gRCOhTsTxmV_c",
          "reference": "CoQBcwAAAEo5reQb4UcEGpPlpDyBaDEgj71-5J2niiTo9tg9S8-ZXlN-1ctNE-XE8OLC9G3jno4ggKgMcTCxv6Mm067aWiN5ft7frBxoNNMwQ9SbDUS1SMZcGQ_3O07wiGFHLxSi56kGjvwSkji5i5EHhV9qjocu9DIwP_lPJlrtdd-vHMwZEhBBiHYcC8uCRB7PH3X1eulPGhQkZwGkjNtKXkQbt3pWMHKZphVm_w",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "381 12th St, Plainwell"
        },
        "assessment": {
          "name": 1,
          "address.street": 0.9
        },
        "average": 0.95
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.449111,
              "lng": -85.662803
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "94e83b1fadf4275e112066dab606dc04121ab6ba",
          "name": "Midwest Motors",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJkVtShD9-F4gR2xV2SmUq4HQ",
          "rating": 3.9,
          "reference": "CnRwAAAAQIlsath4eKhifvTllY3WouBkxCOdnxHzNK_7FfM-zis40KppuUA8LL2rbADSMkx7iSKsOXR25esJJn8GWNG5XMy2fbG7H5cY_OOHeaiFsn-mVIRgICXdoj3SO3kT4nvYJxGlxFxpUYmVCZyuX0hwJhIQHdMcW5rUjbsmtjtsObl4pRoU-lBzhrBuEX_sKqO8hwncja9824Q",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1208 Michigan 89, Plainwell"
        },
        "assessment": {
          "name": 0.7616071428571428,
          "address.street": 0.5465768799102132
        },
        "average": 0.654092011383678
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.449303,
              "lng": -85.65974
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "c5a8f294244f90d016517f062799dbcf69e2c369",
          "name": "Harold Zeigler Chrysler Dodge Jeep",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1225,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAu5CfIM3oMmuybuFRLV19QoSy89DnKUXBwnCcXu5kzkwXF5eUO_WTBX72zOYOkGfzYjyFbT9aJ20HtAWK6UfJIWC3wgRL_OUQGLIsE0lT-mjzVLLwQMAvWAu72k7EWOWOFcXcS5B_c7iJ55VXvc_DShIQLhTuDyFxWoAcB70xGLVgkRoUWN0A4EmO1SC6nizVoVpAWHqpSJo",
              "width": 2048
            }
          ],
          "place_id": "ChIJBYepo0B-F4gRH4bdle-JcJ0",
          "rating": 3.7,
          "reference": "CpQBhQAAAFomMi5KVMtfXIKlR631JHlO5DqHVJTo4pnXNoqChR8Cwdcnp6bA8Y1pnrQqAp425v9cM5zOCAexzdzEf-K3hAsOjtQsQbqCRmCBZBl89bwHo8cqnxeinI4s_cdy7l2nBi0tHYbZnH6QOrAcAFo3RpANppIMzH-gRf9JfHZHAlNF6oI3cPNZXx0Ay63iOJwn8BIQzSoa_Rv74dmbXacVF0YXWRoUcq92VbMdLI38_RYySjKDaAAvD18",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1186 Michigan 89, Plainwell"
        },
        "assessment": {
          "name": 0.6703431372549019,
          "address.street": 0.5039281705948372
        },
        "average": 0.5871356539248695
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.449786,
              "lng": -85.667219
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "ab87cce9e40055a2a863025a2b45488293df2993",
          "name": "Harold Zeigler Ford Plainwell",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 720,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAJmd72lSG1yT6ONCUhXdjkH1vES9Cb5Whs7zFs5GqrqflknajouagzW2Asbd7KP1gDqv5S-QFxRr_fczNQCiuMIujJbaYIQAHsv0NHfai_2PY3S9BSTY3pnFhbBTZOzGcFqubgFV82OCaG44WZcmrZxIQ-jPq598CsE8J_bsQ4OR_2RoUjCp-0yFu6iJPYxYFQiDannYtjHQ",
              "width": 960
            }
          ],
          "place_id": "ChIJE_PcMGt-F4gRgkBUOUSzsH8",
          "rating": 4.3,
          "reference": "CoQBfwAAADBH7Fh-ViAnc8GI_MsXmBAJ0LM_yFe1d1Yw8fBev_xh9OSBFA8izcIFQ2q4-Q0lgrYsaZOqMlwkHdLTv0TybZBcLhYP1KM0-DkNyApuYKsgFKCbODBm9-pPHqp3qEZqleS4xIHbKd9bz8TK1LMW89iQ8knV9yuFho7JUTnV2HICEhCvQzhRr_D1mw5PF84LREgwGhSk80VO7DvuNlNOf9g1kjh943XJBw",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1260 Michigan 89, Plainwell"
        },
        "assessment": {
          "name": 0.6242816091954023,
          "address.street": 0.5039281705948372
        },
        "average": 0.5641048898951198
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.670855,
            "lng": -83.132076
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "639f8965690caabc8e1ef0cd7992574c51f86d75",
        "name": "Bill Fox Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 763,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAfIUwDTGaNiqmw6BRXxM3NdDEXJcnlfZ7z5Wf5vjxdMmh-cWdMqXyGUR74MkvWC_yRNFIatpACT1kmn_Zj4wfapQPSUOFHLWXLuFd4H21GU0DfRsIzdlw153HllgiEDTvmdJyqFiZK5-m7tuA53VltBIQrd87FNK7RYK1X_2Dx7XE6hoUsai8MlaSWgEJcqVCCVqkgnaX2VI",
            "width": 1280
          }
        ],
        "place_id": "ChIJo-LR88XpJIgRyiWkSPwhfQM",
        "rating": 4,
        "reference": "CoQBcwAAAIXqnXn4OYr1pWBtDq1q6hMwY1HiZObRvqzjqgYLV4fc6E7P1Pra7j6bFlDsnMQTbTpS2RsSHaSdo60HsCpjiky6NjQQrXK0845wt4ETxvl9iCgU8KnPkCegl68po3qKF7sksY0QcNogqLNdxwVBuqKRdcqCv5WpT7TpL5W7XbEYEhDkTtv_QYlv2WRQnyV3ItdbGhS4wbNyMzHp0cwNxkcj8E0xsQumxQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "725 S Rochester Rd, Rochester Hills"
      },
      "assessment": {
        "name": 0.9249999999999999,
        "address.street": 0.8857142857142858
      },
      "average": 0.9053571428571429
    },
    "saved": {
      "_id": "7608d3f39c800c9c8ffc8b7f45bd18ea",
      "_rev": "8-916cf24b7ff470062be0ce715f8c8d3d",
      "name": "BILL FOX CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "725 S ROCHESTER",
        "city": "ROCHESTER HILLS",
        "state": "MI",
        "zip": "48307-2739"
      },
      "phone": "(248) 651-7000",
      "hours": "Mon : 08:30 AM - 09:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 09:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 10:00 AM - 03:00 PM",
      "location": {
        "latitude": "42.6711",
        "longitude": "-83.1332"
      },
      "reviews": {
        "google": {
          "rating": 4,
          "count": 22
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.670855,
              "lng": -83.132076
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "639f8965690caabc8e1ef0cd7992574c51f86d75",
          "name": "Bill Fox Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 763,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAfIUwDTGaNiqmw6BRXxM3NdDEXJcnlfZ7z5Wf5vjxdMmh-cWdMqXyGUR74MkvWC_yRNFIatpACT1kmn_Zj4wfapQPSUOFHLWXLuFd4H21GU0DfRsIzdlw153HllgiEDTvmdJyqFiZK5-m7tuA53VltBIQrd87FNK7RYK1X_2Dx7XE6hoUsai8MlaSWgEJcqVCCVqkgnaX2VI",
              "width": 1280
            }
          ],
          "place_id": "ChIJo-LR88XpJIgRyiWkSPwhfQM",
          "rating": 4,
          "reference": "CoQBcwAAAIXqnXn4OYr1pWBtDq1q6hMwY1HiZObRvqzjqgYLV4fc6E7P1Pra7j6bFlDsnMQTbTpS2RsSHaSdo60HsCpjiky6NjQQrXK0845wt4ETxvl9iCgU8KnPkCegl68po3qKF7sksY0QcNogqLNdxwVBuqKRdcqCv5WpT7TpL5W7XbEYEhDkTtv_QYlv2WRQnyV3ItdbGhS4wbNyMzHp0cwNxkcj8E0xsQumxQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "725 S Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.9249999999999999,
          "address.street": 0.8857142857142858
        },
        "average": 0.9053571428571429
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.671126,
              "lng": -83.133263
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "4de0fb2d0bfbac641f75ebd6633f237913f4937c",
          "name": "Fox Automotive Toyota Inc",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJ9clsZs_pJIgRZcYDWWZ-wNk",
          "rating": 3.2,
          "reference": "CoQBewAAACWFqhJyp53q45UgT7NYckCJfaIEiU9k29U1z6W5IMfvzkrA7G1oj4rJFuyZbD3B6gxFCZ3eBEahxwX7agAlxkRGiAoPbqj1Y6TiQ58ZY1hh8AvJYdYtzAEN6fvPHr5YMSxTkK0jAdF_w4oB_4X97t3AVd4IjQcQeT1-if4ymKRNEhCvsU808Yi1Z-73bALALGWDGhRspHMaagJyhPuBxmCOObGFYTFNMw",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "725 N Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.66,
          "address.street": 0.8190476190476191
        },
        "average": 0.7395238095238096
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.669647,
              "lng": -83.132312
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "4b8f287b27d5c6a893d042aa74bd3a43a93fd021",
          "name": "Fox Volkswagen of Rochester Hills",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [],
              "photo_reference": "CnRnAAAA9F7hkhR9crLQp1E02RfF807GCdnEj8rWaGl9EZu_xCPCN-SVCtzIaJ8nHm0N7e32004aybgg14NY_J_e-jWvom3axAe3IzIc1vrHPVk7bvNWq0Lhxwgsslbb6sPvwwIlpj4HOzYbSq31RU-G4im4qRIQ4RBnC-HBzK7jlNzXOz9mgxoUBH26AytLxiGKHjHxRD9vA328xaM",
              "width": 640
            }
          ],
          "place_id": "ChIJeyVoj8_pJIgRrSCWcaCLhXs",
          "rating": 3.8,
          "reference": "CpQBggAAAFXAWR2ocFR7AeOI6c9u1KgmQSURbpirSKzOOR8ievi1461KxegPV3o3RquLa9DhhniPUGBGNYJ1Qp3sELb-AhN5wci8M3k8otP2fwgQ_VpMp2j7Dy6_gxFLtsFxIsNhyIkbf__sEUmzsN9_6RrTeo1Jex20ex8vE6cjGaE9wdvSjWw4Y_L9dNAtos8kQlhKVxIQlo2zFxwW4m8v0-4NExjDahoUYJ-9_JjGNF4t_aq8uBh3657i8KE",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "773 S Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.6691919191919192,
          "address.street": 0.7714285714285715
        },
        "average": 0.7203102453102453
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.67289,
              "lng": -83.132074
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "23b6b60d31b1e38d5702a9a9a3761caf317c43f6",
          "name": "Crestview Cadillac",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1245,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CqQBnQAAACoQkCgWSCfTkuL3oE-2fUq8DnNkiG3wPTWWKNkfq0-BkBtMbm8LbFHnORmiimrxkGvuEzp8rbJGOjTqew9WOdt1MC3dOAyibElkH_GdKLAqRwmlQ8Aj7WRRkyMb6WIHuCpH3i7i-BaU3OW5BA9mWSBzZlal1SD3eseVR2vBlidIu3NRK1HL82TR9iVLgFKvVyhwNex41-RwUZ6TVFhTaysSEGQN3NNbFy_lHFjKgMEFOeUaFG01yuacKW-ELtgRvRYPyySz4sgk",
              "width": 2048
            }
          ],
          "place_id": "ChIJCeuGrcjpJIgRQHZAJa00wAE",
          "rating": 3.8,
          "reference": "CoQBcwAAAPFKf1zDwe7Uh_JPOQ_KgX6CVP9nPL7wAI9WN9B-reQV56vmM5o3PKJqI_CKNv50daDED4hvxo9P-Xt13NXwmGMr9VAkEqsu1sJNgwAuuA4N7oMQkJGIw-krRS3CogM7ihu7iJLb5oYfjhSR3XV0QUoPjyapjKgUGTx44ucgEwKHEhBLS_B4OQjLyVD6OFtVFxAlGhQrZJKXrV910HacK_W6DsyS3_8j7g",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "555 S Rochester Rd, Rochester"
        },
        "assessment": {
          "name": 0.6574074074074074,
          "address.street": 0.7716475095785441
        },
        "average": 0.7145274584929757
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.670063,
              "lng": -83.132643
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "0ce8e36d85b032a59aadb10ceac501f7d16bef68",
          "name": "Fox Toyota",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [],
              "photo_reference": "CnRnAAAA88MePFPJZJ6yO3SvfrRUyQtxymzssqU01XM3b-fO4aHdvF6Rv7rjXKa02f_uiTDvflBFjr4ec5jmnw6zYNkFQI_rIU-aLowph1lckEtNaFI0vdvvfLoTPWK-SzZWNSSvaLRvtvlh66G9zfBsRSCjexIQF2mBtRm72Vxwv9CR6SrUqxoU0vPg8Dfxr0uizJANLwM-89NKxSA",
              "width": 640
            }
          ],
          "place_id": "ChIJo-LR88XpJIgRPi_mNiE2NNg",
          "rating": 3.5,
          "reference": "CnRsAAAAlQg8WjntI3cPTB2Gdfw9VHJtg1aYvqg4gD5l5Qp-rYenaHsV3rDqbaF2IybEvxmigFcEWGUaeK7Uk46FoiWc2-Ev2sD80jjn_1G1IKVtNiq9FYis1ZMAx67FZ44rKuXJbxc1dmmm3--2I0UDoGnYfxIQ4-wSe5aYgtxkHqHhA14w9xoUtdPtg1FYrfgfJdnaxJa060AM-qg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "755 S Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.6166666666666667,
          "address.street": 0.8
        },
        "average": 0.7083333333333334
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.672386,
              "lng": -83.132813
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "444885aa583eb529646a5dc45c67d047181533e5",
          "name": "Mercedes-Benz of Rochester",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJGT7C_MXpJIgR12hX_KRq7EE",
          "reference": "CoQBewAAAISRjH2PZyNO5pVYGD886QVRD1VhJZlhESxDWra2yWz0dMf1Nk4cRnvbzNE6gTgdqrT8VNJaM7k8cdKO85wPiKCWFsuIus2VqwGKMyyfbKI4lGFbYCC-qJpldCST9fE_j-qzKK2wyOBQ4Q4QK2yKtB1AFYnb_MDtnTDUGxUUC7j7EhAVID6WEDscBY_t6fasA173GhQR2athhNy627hodBa1w0I9xvcQdA",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "595 S Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.6677350427350427,
          "address.street": 0.746031746031746
        },
        "average": 0.7068833943833943
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.668759,
              "lng": -83.131924
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "ca2c95cf31c15fcc852ebd5402ecf2a4fb305c25",
          "name": "Shelton Buick GMC",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1394,
              "html_attributions": [],
              "photo_reference": "CnRnAAAA8Fw7actTKSbtIJoW4EPfus5sg2W3S-7l74HfQxUL60lzrf7SoXtgzulvE7gxq2YFKutdGcW1-s4J8YEEHuZlWFyWspKtXEU8YjPlW8EQ2HafHlp_NyQFWCQPRaNhAbXFM8K_vgfO6U8d5UclyIKkGhIQd7sbjBLlwa1QkZ08noHyfBoUWfV8y1vrwoBsaR2OKf3gvYBiiPI",
              "width": 2048
            }
          ],
          "place_id": "ChIJdTg6WsXpJIgRGAGlGXKXHFU",
          "rating": 3,
          "reference": "CoQBcgAAANukiPPh1hNgAdCOYfu5xDR8tToeHmQqQEPXz-uYPRCozAsn8a2UvQjtmi7Gbg2YZ5JO1cCn1ON19nXlCPizbH5_VbjnlD9wom_yM8QBIRMZV0hBqbPzWkbUNGEq_C_RmDaOq0wg-LMrGUNhVWs_97VIEwNzG1QrT6AHFsPZ3_e6EhB6ZVaCjradZgbWHsozUuUmGhRbddfFwrJIbs4ypy-hKzljylpDjQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "855 S Rochester Rd, Rochester Hills"
        },
        "assessment": {
          "name": 0.5683006535947712,
          "address.street": 0.746031746031746
        },
        "average": 0.6571661998132586
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.289583,
            "lng": -85.073819
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "d0c6036ad67ee4e6bd5b26b60b5dd03e5abc12cd",
        "name": "Bookwalter Motor Sales",
        "opening_hours": {
          "open_now": false
        },
        "place_id": "ChIJ3U08QjCaGIgRHYjf-Dih7qU",
        "reference": "CoQBeQAAAGdWXx8MhCJCTSgnr07fMy-2ukPYmgu0i7wdpPfCR69DOKIgWI61G6hovpCSOwNj-xXoedq8Jvof0TbXTbXbdSXlEHU3a913A1tZw6Txr4jpDGk8ocU65B8XsmIag993EuO-a-DfW2FHg4Xxmf03_lUWJzqi3xqyD3yzFPkb0tgQEhBzraePRVJRq5HdXpvdb-tTGhQpa9ShhPcpUX4ssJ5elErW38V_XA",
        "scope": "GOOGLE",
        "types": [
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "335 S Sheridan Rd, Stanton"
      },
      "assessment": {
        "name": 0.9357142857142856,
        "address.street": 0.8256410256410257
      },
      "average": 0.8806776556776557
    },
    "saved": {
      "_id": "683d6428690f0c0b9b676f601c72cefa",
      "_rev": "9-5c967f1b64402ecfe66caaa6c5d75e8e",
      "name": "BOOKWALTER MOTOR SALES, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "335 SHERIDAN RD SE",
        "city": "STANTON",
        "state": "MI",
        "zip": "48888-9288"
      },
      "phone": "(989) 831-4200",
      "hours": "Mon : 08:00 AM - 08:00 PM, Tue : 08:00 AM - 06:00 PM, Wed : 08:00 AM - 08:00 PM, Thu - Fri : 08:00 AM - 06:00 PM, Sat : 08:00 AM - 01:00 PM",
      "location": {
        "latitude": "43.2896",
        "longitude": "-85.0734"
      },
      "reviews": {
        "google": {
          "count": 0,
          "url": "not found"
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.289583,
              "lng": -85.073819
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "d0c6036ad67ee4e6bd5b26b60b5dd03e5abc12cd",
          "name": "Bookwalter Motor Sales",
          "opening_hours": {
            "open_now": false
          },
          "place_id": "ChIJ3U08QjCaGIgRHYjf-Dih7qU",
          "reference": "CoQBeQAAAGdWXx8MhCJCTSgnr07fMy-2ukPYmgu0i7wdpPfCR69DOKIgWI61G6hovpCSOwNj-xXoedq8Jvof0TbXTbXbdSXlEHU3a913A1tZw6Txr4jpDGk8ocU65B8XsmIag993EuO-a-DfW2FHg4Xxmf03_lUWJzqi3xqyD3yzFPkb0tgQEhBzraePRVJRq5HdXpvdb-tTGhQpa9ShhPcpUX4ssJ5elErW38V_XA",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "335 S Sheridan Rd, Stanton"
        },
        "assessment": {
          "name": 0.9357142857142856,
          "address.street": 0.8256410256410257
        },
        "average": 0.8806776556776557
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.291248,
              "lng": -85.07408
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "7f32ae8af25dc0243cc64b561561fe52bfdb960b",
          "name": "Wetherbrook Auto",
          "place_id": "ChIJeQ_h3y-aGIgRPVCySXKe59s",
          "reference": "CoQBcwAAAAggoumftiMFDZx8RyCgIK0YHztzIK1HMoAik-lEHAjCCAuZeim-vQgEmOgL0mzjIS9C1F3TvcR7V2BPVjtH3pNN-S7X3TNFclyH_CpGNSyPZTofc3-LWx0QVXQTYH2vRrbV-ifJ2vYHOxM32ooWbB2pfuLOSfFGy6Zljfixfd5BEhAoX-YjOp7rOkXLnkNaL4hJGhReKJ24IAb0Ozs4vu-CQst6fXAGoQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "106 S Sheridan Rd, Stanton"
        },
        "assessment": {
          "name": 0.5539021164021164,
          "address.street": 0.6153846153846154
        },
        "average": 0.5846433658933659
      }
    ]
  },
  null,
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.557909,
            "lng": -82.896779
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "63230965f6fe956b7e3b9d2d18724332cfc319ea",
        "name": "Moran Chevrolet",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 480,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAJho14enN2IH110DmzcoSBB8hKfT8RxzXXSfLyD55-6K47SXR0T1ACqO7siNlvlLjnWq6ZF7trSR5dRcHM5UTZR4Kvfa3gLxyUxI2QkI6niTUBLCENAfIHPOVCcUUTIGUhg7COHcsOxuz78TWnW6IKRIQX6F_vS6yjHM_ahxhzOZOvRoUYeZfkgFzBH0VQQen2SOXip5QGjg",
            "width": 640
          }
        ],
        "place_id": "ChIJN4W5oJ3YJIgR0UcT-lYqlFo",
        "rating": 4.2,
        "reference": "CoQBcQAAAA1UPjrk3B35fHzbDnnqBspSc7GolahenpSnzC1Ks6LKrZGvFIZcXqavKz7_8DleQPsvYnMSpzuvgzz4gf7OYNnQhcWDSXZEBp7LcT6TtaHPYZ2dwyHuGy8klKPpjQg-ezjLNTXprJHTSeBGs8zVQj-t-dWEexVWAkq7rYS46N4LEhD3JtdrOFKzHoUpQ3woBj-wGhQPn77DvcsG74WrGcH3flAs9ArlaQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "35500 Gratiot Ave, Charter Township of Clinton"
      },
      "assessment": {
        "name": 0.9142857142857143,
        "address.street": 0.8739130434782608
      },
      "average": 0.8940993788819875
    },
    "saved": {
      "_id": "029b720380a46a341393de41e117ddf8",
      "_rev": "10-b5807d11508f861b8047b03b3a326fa4",
      "name": "MORAN CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "35500 GRATIOT AVE",
        "city": "CLINTON TOWNSHIP",
        "state": "MI",
        "zip": "48035-2847"
      },
      "phone": "(586) 791-1010",
      "hours": "Mon : 08:00 AM - 09:00 PM, Tue - Wed : 08:00 AM - 06:00 PM, Thu : 08:00 AM - 09:00 PM, Fri : 08:00 AM - 06:00 PM",
      "location": {
        "latitude": "42.5576",
        "longitude": "-82.8975"
      },
      "reviews": {
        "google": {
          "rating": 4.3,
          "count": 38
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.557909,
              "lng": -82.896779
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "63230965f6fe956b7e3b9d2d18724332cfc319ea",
          "name": "Moran Chevrolet",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAJho14enN2IH110DmzcoSBB8hKfT8RxzXXSfLyD55-6K47SXR0T1ACqO7siNlvlLjnWq6ZF7trSR5dRcHM5UTZR4Kvfa3gLxyUxI2QkI6niTUBLCENAfIHPOVCcUUTIGUhg7COHcsOxuz78TWnW6IKRIQX6F_vS6yjHM_ahxhzOZOvRoUYeZfkgFzBH0VQQen2SOXip5QGjg",
              "width": 640
            }
          ],
          "place_id": "ChIJN4W5oJ3YJIgR0UcT-lYqlFo",
          "rating": 4.2,
          "reference": "CoQBcQAAAA1UPjrk3B35fHzbDnnqBspSc7GolahenpSnzC1Ks6LKrZGvFIZcXqavKz7_8DleQPsvYnMSpzuvgzz4gf7OYNnQhcWDSXZEBp7LcT6TtaHPYZ2dwyHuGy8klKPpjQg-ezjLNTXprJHTSeBGs8zVQj-t-dWEexVWAkq7rYS46N4LEhD3JtdrOFKzHoUpQ3woBj-wGhQPn77DvcsG74WrGcH3flAs9ArlaQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "35500 Gratiot Ave, Charter Township of Clinton"
        },
        "assessment": {
          "name": 0.9142857142857143,
          "address.street": 0.8739130434782608
        },
        "average": 0.8940993788819875
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.561555,
              "lng": -82.894563
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "209cb4d9c000264880514a50697c1adaf84359aa",
          "name": "Ford Motor Co",
          "place_id": "ChIJJ__g7k0nJYgRX4NbDNnjAoA",
          "reference": "CnRwAAAAJ8pBLXUlRJTm-1GquiI1r3dZGHocG6NMZyg_LUqmw5gokTpbnvU7EGJYc36Q4vLcka99Ge4UV9ugJQLjwpChEoh4uekUMLLWwWe-sarCX33WHMYAL8LdhvhtfxT44fsNn3zndGpKBc_yEv0rj7BTtxIQbZEN1LwlQNVtMbzDByxhvxoU6pJKP_E37pgQgUxs4uHCOUEYXdQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "35900 Gratiot Ave, Charter Township of Clinton"
        },
        "assessment": {
          "name": 0.6237789987789988,
          "address.street": 0.7020673486786019
        },
        "average": 0.6629231737288004
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.561617,
              "lng": -82.895153
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "99cb80fb14fc54453255023362794d4309c1fbf7",
          "name": "Dorian Ford",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 873,
              "html_attributions": [],
              "photo_reference": "CoQBeAAAACkHpUjnFRjymaamS02X9ZLb77i2oKYBip-tc1R6GA0dA8LX7xT6moQ2qIvMMB6CeuQJQ0OvNN92-kZeL3Db4V-Navk_cVi6ek2y36xI4SD6usHklzdLec6Pze8kh7IBjm5SAKcRP7a_lJNt9jxXE9_FzWMqzDX_nAFsrET-c3e3EhCJvhx8K-gpoH-gdPYlJCaIGhQbbSm-aPV7VWHQXtHS8M5tnb_oiw",
              "width": 873
            }
          ],
          "place_id": "ChIJM9R_3E0nJYgR8ufKlnC9bcU",
          "rating": 4,
          "reference": "CnRuAAAAUtq1v70N8lA-5j-g5loRghkrAIyjp2h_6pdjezknHZHgvcTbHc9O9fnRyuRbpdF1_Mm8ds_awTQuRE1HX5_b1giQubWNvexZPNIINUJ-VcgMftG4cS4CYtnKF3btPmOVIPAajGngalW-dsjjaYFFwBIQDVO5NvarGenfh9AUJg99nxoUiT-u0xYgv1UARFXqXeREKw5xc7A",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "35900 Gratiot Avenue, Charter Township of Clinton"
        },
        "assessment": {
          "name": 0.6103896103896104,
          "address.street": 0.6963885554221688
        },
        "average": 0.6533890829058896
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.560971,
              "lng": -82.896597
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "def26087fa61de085cab9ed956155ff64cabd3d0",
          "name": "Extreme Auto Sales",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CnRsAAAADGrUL2RE_K81Y9WynUDtxdepe1trOLPrH1PpN0aW7d0NyrbNJaeLnu2Hijp-6haL9YQDg9mluV2Rm8zzZqhObqxAFj19bPudOGXB7hf_ymuCynQrRIgz8sA4tzMaTlaNgTn3BmRkqvOFqVIcrvbnsxIQ-v2zHFKLxWnLEndWRRqPoRoU8pdef4NBr9PRhV4v_JuzLoJQVbQ",
              "width": 640
            }
          ],
          "place_id": "ChIJxwnSAVInJYgRuuahpBTTsqc",
          "rating": 3.4,
          "reference": "CoQBdQAAANcYZmvzeqoNVsiM53-VR2095R372NUICkdqizQMKJJZ1e83lMJNI_cXh8TrSTtkW2PpDW6MuDM_i-KEMKSpK2jZNK2JcdeXzgKe6Et9z33lyJvhSk-zRbR7Xi6V-6D-lsajsyZ0WqT_TOWvjEvEvUWIusqESoIHZj9Ntl087j0eEhDA5SVrfL79C_GoEbGJ-wslGhQgXSVq5jybnHXcuCt4lddWZ4wxxQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "35825 S Gratiot Ave, Clinton Twp"
        },
        "assessment": {
          "name": 0.6243386243386243,
          "address.street": 0.6339126559714795
        },
        "average": 0.6291256401550519
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.554251,
              "lng": -82.899005
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "ca9a54450d08da06b17c2df4de7f34db986a8cfa",
          "name": "RightWay Auto Sales",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJQ2ES-FonJYgRtLZ_-G2UZKE",
          "rating": 2.9,
          "reference": "CoQBdgAAAJUj4jxY0xyssbgg-EAMpu4ZIKLMMNbOyFntlw2ZaUHo0-smlLFkxloeedy5lMise9XmyJFDovsOrXu_K5hCuSk7cRMqEvcbKueMSlB8JuVsaS27VHHKdg6OBjTTp2mT-v5yAkBiFUslr5P0618gTTQrT984_3T2EFTO899IhvFvEhCeGWv_8k7y1ZRrvghbyu_dGhQ7FFtlMjw15ZCJJNlX4Chw0xAP-A",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "34966 S Gratiot Ave, Charter Township of Clinton"
        },
        "assessment": {
          "name": 0.6006683375104428,
          "address.street": 0.6389705882352941
        },
        "average": 0.6198194628728684
      }
    ]
  },
  {
    "suggestion": "needs_assessment",
    "saved": {
      "_id": "029b720380a46a341393de41e1180b1a",
      "_rev": "10-1871ccdc67ab6402664b6ec8adc40166",
      "name": "MEROLLIS CHEVROLET SALES & SERVICE, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "21800 GRATIOT AVE",
        "city": "EASTPOINTE",
        "state": "MI",
        "zip": "48021-2224"
      },
      "phone": "(586) 775-8300",
      "hours": "Mon : 08:30 AM - 09:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 09:00 PM, Fri : 08:30 AM - 06:00 PM",
      "location": {
        "latitude": "42.4576",
        "longitude": "-82.962"
      },
      "reviews": {
        "google": {
          "rating": 4.1,
          "count": 12
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.458445,
              "lng": -82.961174
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "bc9144b314a04732c1a7b3841720e358110eeec8",
          "name": "Merollis Chevrolet",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 853,
              "html_attributions": [],
              "photo_reference": "CnRnAAAArIOBrnozcR0-qH6jVEW3rqIgLy81R-oVkdDug6yWK0SBDqNdT3Mij5UUFAoXJsRqW5bRxegzKVFxR-PF5TOWdLGuCAt91Xoxiaq3FXo-ZyRmKUpbjnJQocQDoAaTQt2lXoEHkiMDQn-B9WfSH5avkRIQG8lsSKS0zb9QA911fHKkdRoUDOZrmTW2_5FHD8_BxGmj-cjTwvY",
              "width": 1280
            }
          ],
          "place_id": "ChIJ4c0PRxvXJIgREbuZ0hCUVEY",
          "rating": 4,
          "reference": "CoQBdAAAAMlC9q12PueiTuyNxQhCL0rTQKyvtvGJRV9uCYPN5J-TLsAvWzK6lB66GcFZ225Wvrr6pRCx5AigxZJbEXqLkGbc7-8coPB6L9vY0aKfkoNtShrQcTKoEPeYRGeLkapi7cDKKiWUYDeTokK-sLrjeq3dG7FRgqQ56K-vkaLxXI9mEhCfGP3Ovxu1EAtf24u54JS0GhQMBqmXmDk03LTLjtvbsebavYwsVg",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "21800 Gratiot Ave, Eastpointe"
        },
        "assessment": {
          "name": 0.8350000000000001,
          "address.street": 0.9172413793103449
        },
        "average": 0.8761206896551725
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.455791,
              "lng": -82.964364
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "fad5726e4b465edf13eb07773d81b00b64dfcb6d",
          "name": "Auto City Auto Care",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 250,
              "html_attributions": [],
              "photo_reference": "CoQBdgAAADc4jOUCtY6fFimQzzwiTy2O46pylcuoS1ZMDKjfPfUJ_IbH6G9jg_t0nhyKwsyasGYscvlSTrm8C03kZCJEsvCvZ2FziLqHXmcO7PYlXCjI3LnboWqG4DDJACsHBv1BAX7uHffoUcL29M2IueK5Z7CEEnYe2aRmhuye9_zGi9VhEhBu6p8edg_hYKOtTF7rxKlqGhS2q375tjF9O7f9xQaIfHZ5agNQyg",
              "width": 250
            }
          ],
          "place_id": "ChIJ0cNfRRzXJIgR6Qn1FHZnxh8",
          "rating": 4.3,
          "reference": "CoQBdQAAAK8-jfEMc62NZRXCUWEhN19FAKf1Bt2sQFTxPfRRh1-_owonzBatdtLl1SSqo1jZj0YB2B1f8WDKHO2jkridyJr-rKd91Wax0OGVMyBQSN2BwlqwHZtZlHFY-9ZQPsR27zDOiSAF4QQkYWWVV9t4NExZIeHgFFYib27qH-CUMimZEhAIWjDN3NJxF0yG-BcJNU7GGhSChM4m8R66_KL9SRaN1P-uaYX2_Q",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "21427 Gratiot Ave, Eastpointe"
        },
        "assessment": {
          "name": 0.5921052631578947,
          "address.street": 0.8150101419878297
        },
        "average": 0.7035577025728622
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.079748,
            "lng": -83.732603
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "bc65b634288bbdb10baf4e627ff27c3d34108229",
        "name": "Randy Wise Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 400,
            "html_attributions": [],
            "photo_reference": "CoQBeQAAALV7x70ccF7k2iO5ve3zI6XY9dmAzdGia9juUttpkV0LzwyE8kUVJxJRXYb7eh0H8rir4nHspipZ88fWlgWRbB22TJogRMKkBJkeaCPUwIV2BHDDjCgHcEevYCzf7tJ6ATamnDRJSmSP6dDcbab18GtYeofQ6AYyjkyuknUS-HHGEhAFHEe9twp-cfZHV5LiNtZ8GhTsMHyL9lgjDQBwNwnXviMWCRFY7w",
            "width": 600
          }
        ],
        "place_id": "ChIJoU5ZqGKDI4gRrlSLgUdGiQk",
        "rating": 4.5,
        "reference": "CoQBdgAAADn2LWG1Rs3cEyhBUMnlt3TnfiCOajC4gTDMl8V9KRsvFXtPWPq3P-5xIznIxX9j64sel4IEIquRarR3axLIjHL1OM_T2CoYqbLM2N-HTsLXlAcmR0BFwic7sZp2UZAIQtKNOyFDr23mheDop7B3DdiOI6iPiNkSb7FslJpNmQaCEhDAZF7TGKMFAgjXlhUJRcykGhRWtYtHHlUPlqbCXq4snfKAhPrVPQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "5100 Clio Rd, Flint Township"
      },
      "assessment": {
        "name": 1,
        "address.street": 0.7463369963369964
      },
      "average": 0.8731684981684982
    },
    "saved": {
      "_id": "029b720380a46a341393de41e1181aa4",
      "_rev": "10-a855c2bbe8459e36b5c95160b5d37413",
      "name": "RANDY WISE CHEVROLET",
      "brand": "Chevrolet",
      "address": {
        "street": "G5100 CLIO RD",
        "city": "FLINT",
        "state": "MI",
        "zip": "48504-1267"
      },
      "phone": "(810) 785-4011",
      "hours": "Mon : 09:00 AM - 08:00 PM, Tue - Wed : 09:00 AM - 06:00 PM, Thu : 09:00 AM - 08:00 PM, Fri : 09:00 AM - 06:00 PM, Sat : 09:00 AM - 04:00 PM",
      "location": {
        "latitude": "43.07922",
        "longitude": "-83.73323"
      },
      "reviews": {
        "google": {
          "rating": 4.4,
          "count": 12
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.079748,
              "lng": -83.732603
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "bc65b634288bbdb10baf4e627ff27c3d34108229",
          "name": "Randy Wise Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 400,
              "html_attributions": [],
              "photo_reference": "CoQBeQAAALV7x70ccF7k2iO5ve3zI6XY9dmAzdGia9juUttpkV0LzwyE8kUVJxJRXYb7eh0H8rir4nHspipZ88fWlgWRbB22TJogRMKkBJkeaCPUwIV2BHDDjCgHcEevYCzf7tJ6ATamnDRJSmSP6dDcbab18GtYeofQ6AYyjkyuknUS-HHGEhAFHEe9twp-cfZHV5LiNtZ8GhTsMHyL9lgjDQBwNwnXviMWCRFY7w",
              "width": 600
            }
          ],
          "place_id": "ChIJoU5ZqGKDI4gRrlSLgUdGiQk",
          "rating": 4.5,
          "reference": "CoQBdgAAADn2LWG1Rs3cEyhBUMnlt3TnfiCOajC4gTDMl8V9KRsvFXtPWPq3P-5xIznIxX9j64sel4IEIquRarR3axLIjHL1OM_T2CoYqbLM2N-HTsLXlAcmR0BFwic7sZp2UZAIQtKNOyFDr23mheDop7B3DdiOI6iPiNkSb7FslJpNmQaCEhDAZF7TGKMFAgjXlhUJRcykGhRWtYtHHlUPlqbCXq4snfKAhPrVPQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "5100 Clio Rd, Flint Township"
        },
        "assessment": {
          "name": 1,
          "address.street": 0.7463369963369964
        },
        "average": 0.8731684981684982
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.08243,
              "lng": -83.731613
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "620a89df3e541a5903d6541257bfefc2f1cfb838",
          "name": "Us Auto Sales",
          "place_id": "ChIJ8V13ZZuEI4gRhGieNY5vntE",
          "reference": "CnRwAAAAurH-tC0eqevUFs2p6dY9wMZZhV7uy0KhkgKOyWTy01S6Ny2Wa8wCkcjqha2CFFDhQyKTyqsoOWoHbLG-KiihZqPLWv_zBL1QbafJk43m8Esov9Uqx0aus-j02gK-RNKDSFFext3fKQFlq6RSuNxtqxIQRaFkkSkdJnMno4R9nBUHXRoUpBdbQ1T9Wt726-U7uDhEnA85JFc",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "5406 Clio Rd, Flint Township"
        },
        "assessment": {
          "name": 0.5448717948717948,
          "address.street": 0.6712454212454212
        },
        "average": 0.608058608058608
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.933932,
            "lng": -85.073412
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "d80b9bddac617c404990520c5d88bd48fd3c3257",
        "name": "Berger Motor Sales",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 1536,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAzxc1RRV8-g6VhyjWUpctQjhQJVan9zjVUjRb7J9NEU4V9Z-GyTapNpX31AFVFB3hX-nAkNM7CD2jVTNjDTIPq6bpvnkOy2THkKgRxQ15Gix5_-vLCflKKxekmMvnhyduDg2v5-CcnGxV1ySsFF57QxIQqmDD1MRrXq7073Jsu48gERoUD9Osblr1VSDdLElLO2e0bki7BCM",
            "width": 2048
          }
        ],
        "place_id": "ChIJW2pcpfJ6GIgR9tLS6xeFSR4",
        "reference": "CoQBcwAAADPLYZrmTDA897NLuLoHXN3kLNQmwha6BFaeHKpwXVhnGbZkIXGQtvRUE3UdSWasqniIdPxYGl8MPAJF2t3KHjKYTcjriLxC0lpaHV-VUxeL9vSwBjW7TMFzBNuANinUo5pPYg2xySlUz0ms-iC4SWy1elS9s--Jpuu1WBfXUhxEEhDt8lX9UYWFMV_qKBKBSKNMGhSk3NEfyyqBtHX_cPBK1WC8T3gqNg",
        "scope": "GOOGLE",
        "types": [
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "3669 S State Rd, Ionia"
      },
      "assessment": {
        "name": 0.9249999999999999,
        "address.street": 0.9363636363636364
      },
      "average": 0.9306818181818182
    },
    "saved": {
      "_id": "029b720380a46a341393de41e1183983",
      "_rev": "12-f9c6058d065d9ccead1c622c46f32b39",
      "name": "BERGER MOTOR SALES, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "3669 S STATE RD",
        "city": "IONIA",
        "state": "MI",
        "zip": "48846-9477"
      },
      "phone": "(616) 527-4800",
      "hours": "Mon : 09:00 AM - 08:00 PM, Tue - Wed : 09:00 AM - 06:00 PM, Thu : 09:00 AM - 08:00 PM, Fri : 09:00 AM - 06:00 PM, Sat : 10:00 AM - 02:00 PM",
      "location": {
        "latitude": "42.93416",
        "longitude": "-85.07466"
      },
      "reviews": {
        "google": {}
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.933932,
              "lng": -85.073412
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "d80b9bddac617c404990520c5d88bd48fd3c3257",
          "name": "Berger Motor Sales",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 1536,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAzxc1RRV8-g6VhyjWUpctQjhQJVan9zjVUjRb7J9NEU4V9Z-GyTapNpX31AFVFB3hX-nAkNM7CD2jVTNjDTIPq6bpvnkOy2THkKgRxQ15Gix5_-vLCflKKxekmMvnhyduDg2v5-CcnGxV1ySsFF57QxIQqmDD1MRrXq7073Jsu48gERoUD9Osblr1VSDdLElLO2e0bki7BCM",
              "width": 2048
            }
          ],
          "place_id": "ChIJW2pcpfJ6GIgR9tLS6xeFSR4",
          "reference": "CoQBcwAAADPLYZrmTDA897NLuLoHXN3kLNQmwha6BFaeHKpwXVhnGbZkIXGQtvRUE3UdSWasqniIdPxYGl8MPAJF2t3KHjKYTcjriLxC0lpaHV-VUxeL9vSwBjW7TMFzBNuANinUo5pPYg2xySlUz0ms-iC4SWy1elS9s--Jpuu1WBfXUhxEEhDt8lX9UYWFMV_qKBKBSKNMGhSk3NEfyyqBtHX_cPBK1WC8T3gqNg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "3669 S State Rd, Ionia"
        },
        "assessment": {
          "name": 0.9249999999999999,
          "address.street": 0.9363636363636364
        },
        "average": 0.9306818181818182
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.930411,
              "lng": -85.074177
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "0c41a6eb5e2d96887c33683c2258ec70e1cf5405",
          "name": "Randy Merren Auto and RV",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJaeLyeY16GIgR2OceVhNrNSQ",
          "reference": "CoQBeQAAAOfto3UNYBvoq7AYIc3OgtVWbBufYpkffwZOdG7NUiBCp_Jwu-Sj4XrKlLUvfAxiU2pAjZixI_sWYkNz3SF6zFLrQ2v7w9030J3Cz_XGQnPjXqJxA1k3za5_jniH1LtEgh9By78cqYMxIH1hhAl_nfWE_l_XF_cybH6l3pfH4szFEhAIPMawnGbR9Kjf3V8xFmINGhTKwA7g2UPdZddn-c05D0gARZNMdQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "3921 S State Rd, Ionia"
        },
        "assessment": {
          "name": 0.5833333333333334,
          "address.street": 0.8372727272727272
        },
        "average": 0.7103030303030302
      }
    ]
  },
  {
    "suggestion": "needs_assessment",
    "saved": {
      "_id": "029b720380a46a341393de41e11874e8",
      "_rev": "10-c01b8f9f35b16ffc16e6f27c6aac56d7",
      "name": "FOX NEGAUNEE CHEVROLET BUICK GMC",
      "brand": "Chevrolet",
      "address": {
        "street": "705 US HWY 41 EAST",
        "city": "NEGAUNEE",
        "state": "MI",
        "zip": "49866-1018"
      },
      "phone": "(888) 428-8340",
      "hours": "Mon - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:00 AM - 02:00 PM",
      "location": {
        "latitude": "46.5141",
        "longitude": "-87.6"
      },
      "reviews": {
        "google": {
          "rating": 4.2,
          "count": 6
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 46.514492,
              "lng": -87.600058
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "5b11174a1e99854cc157fdbdc007b7b36a5d5c33",
          "name": "Fox Negaunee GM",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1536,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CoQBfgAAALqFBqzV85Vu2pNaWe9JegMhwm8TMbMrWjwBVLc6J__E5sKe5iB7-p_l4QG20sDdhZnLSmi79HdL-fv05bRY52ONEDvuWAVV2wcm5fG6LTwb_Rkpw5xwrHNBHlYPVYrPtipme5UpIfRBhm6nzLnarp7rfQwt2SYEF-KB1XrgXdofEhCX_faqnnCwhqJIleBMQ8prGhSGkDn2y6RrECMfjiyqQzJOfHQ_dQ",
              "width": 2048
            }
          ],
          "place_id": "ChIJIUvBv-3CUU0RSrsAeiTEZMc",
          "rating": 4.1,
          "reference": "CoQBcgAAAEN4EUhksXFfNqqPNqXTA-XKgWmJPGJ_z7ERejE76Z-MRQMLA-_5R-PWOuRgwk-gq0LAvRF289Audg9SuuQR4ZESaKGHDmZzMdoGCv0Ye8yemJTeN3IOsqhZH9Xy__xovMVGPa22G-D5UJ5pgwYOHyVvAoL-waWKBNsVZZRS3VhzEhB1tWCd6XTid1PZNddjUVGpGhS_-JHaXKLUTX45s1lqJn0KDBYUgQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "705 U.S. 41, Negaunee"
        },
        "assessment": {
          "name": 0.781875,
          "address.street": 0.8269841269841269
        },
        "average": 0.8044295634920635
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 46.5153,
              "lng": -87.5992
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "5b32dacdd4d709e99c60a7e5b228798292650af6",
          "name": "Fox Negaunee Chrysler Dodge Jeep Ram",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 853,
              "html_attributions": [],
              "photo_reference": "CnRnAAAA1RmKJDYPpx11YfO4NsUNzu7I_w5r0pdvV5tjopnTJvd7IPqlYVVzgOvYg69xh-b_OyOvBfsCH_DG08KpTTpSz0UTXCsn7strGJVzYUIOWM9QPTSNAvNaSaoGC4soW_1QgD_DvoYpt-y3CpM0qK5ZIxIQXh0azDZO8MN2r40H7QmB4RoU9pK1TY6eal1qUYQtK2iFwLdK_xA",
              "width": 1280
            }
          ],
          "place_id": "ChIJkWMKf-7CUU0RW9fBJOsOT4s",
          "reference": "CpQBhwAAALxCDQpsPWosbL1EHWiV8I5UUBlVWNnfqw4PCPGWdZhkxijvBKkBz9SMNMOo0SUlvviBoZq9yyJ_p8MOBL0fKMfzi_UDnNX9WefHlhnbsHNSeYtst7OFVVX5GgHpzx-7soD3fIjSOq8DCWop7OJaZUQtum3EkQbwWUo9Sp7cMCkIMtGDexzgJ5d-3jymZxAwMRIQSfnxYW_sYAdbuWOoTZz2wxoUmFkMKXwTxaS_sVbvAoGRUpub4Dg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "701 U.S. 41, Negaunee"
        },
        "assessment": {
          "name": 0.728563596491228,
          "address.street": 0.7417989417989418
        },
        "average": 0.735181269145085
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 46.514456,
              "lng": -87.599853
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "2eed1ca72b4c8dd17cfcc3e8d9c4165b53f1669a",
          "name": "Fox Motors",
          "place_id": "ChIJ2xjZw-3CUU0RwsDeNrSgkLc",
          "reference": "CnRtAAAAkY57amkrVT8X_wiW8RJcg1ptqvR0CdoGNgXRxKHD0wlWPgHcBIQbiRB9TPq3AFeEPI9YK7uejWAUrgqxEqf-1enYCVWJoWBP3xG9oS85UxNpnHln0MJzg8EKjcsf7wlBTFxfljtKfMerJSkAkVDFIxIQzH_FRysvPRDGSAxiBLI90BoURErNOBzaYRrsbOrzNeShc6OnSi4",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "701 U.S. 41, Negaunee"
        },
        "assessment": {
          "name": 0.6756249999999999,
          "address.street": 0.7417989417989418
        },
        "average": 0.7087119708994709
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 46.510303,
              "lng": -87.604897
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "a59c75b33c7e6e4ce69f4643451fee184ae49d75",
          "name": "Pouliot's-Us Autos",
          "place_id": "ChIJgbiW1ozCUU0RisRkMNHSUK0",
          "reference": "CoQBdQAAAIkbq2Jtlr1xWUI3k3iLJ1mqzqMLceZa_25Lmz8MKA2yXBQTiAQiuSUkx6WxzaE0Wf4h5IBaFawScTE6dsqXfQHdPV6qVy6uywimgDBFy32juS9eREoh5RZKtW8NQgzqxvD2FM2MoS2F8Y1_e02nQDfNOiMZS_oSg3yVI98yIk4YEhBMJQJ_l3k3at5avw8U_kBPGhQjdtQ11l_b6YDcKETY0g9RIJYBqg",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "358 U.S. 41, Negaunee"
        },
        "assessment": {
          "name": 0.5648148148148148,
          "address.street": 0.6428571428571429
        },
        "average": 0.6038359788359788
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.468392,
            "lng": -83.973947
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "872c44c8343bc3817647bfbcb44a0c1c75012433",
        "name": "Draper Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 691,
            "html_attributions": [
              "From a Google User"
            ],
            "photo_reference": "CoQBcwAAAOodm3Hdc9Dv27f4ZFxlrwuGUTPtNbdPM3ZfTYk07bVTJcT7y8HutwuWpWqWk8YL1yyS802_4eiWYUX-JLdi52EMluanHX0tuH2ArcR0jQu6PCUTvN5zpcCF-PFVbZH1LyIhRxbLEgLA6nu8ncME5oTXLgezaa7eiB2EYkfJu5apEhBbLQTpFEVLBbzSCZWZwmzWGhT-w_40TBfcyTgBfxfTzLXQ4KfMlg",
            "width": 1113
          }
        ],
        "place_id": "ChIJeVSilifDI4gRG9NinZ0LllM",
        "rating": 4.2,
        "reference": "CoQBcgAAAGtjVuqm4eGamwrNT1W5nbGWyuM9Ojwe5fslLIoOcU0a2B6U6sJCAOrrcNVDWAahnErYp91J15EgJSsXau4TNJpEgY_ta57a6fWLjxCiobgZ4-cUWZGKvwOvfzD151mBaLLtCVEB8OBX6D8-25qCGGBAD4unEwDuTIN6uFr8fugCEhAIcmRE6utSiJM5IQoQkvdOGhRDQPNvAuHAYb2Xj6SrQl1m6zp9mQ",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "4200 Bay Rd, Saginaw"
      },
      "assessment": {
        "name": 0.8999999999999999,
        "address.street": 0.91
      },
      "average": 0.905
    },
    "saved": {
      "_id": "029b720380a46a341393de41e1189b78",
      "_rev": "10-abc0733220af73a0e68566646fdd7508",
      "name": "DRAPER CHEVROLET COMPANY",
      "brand": "Chevrolet",
      "address": {
        "street": "4200 BAY RD",
        "city": "SAGINAW",
        "state": "MI",
        "zip": "48603-1297"
      },
      "phone": "(989) 790-0800",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 10:00 AM - 04:00 PM",
      "location": {
        "latitude": "43.46842",
        "longitude": "-83.97515"
      },
      "reviews": {
        "google": {
          "count": 3
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.468392,
              "lng": -83.973947
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "872c44c8343bc3817647bfbcb44a0c1c75012433",
          "name": "Draper Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 691,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CoQBcwAAAOodm3Hdc9Dv27f4ZFxlrwuGUTPtNbdPM3ZfTYk07bVTJcT7y8HutwuWpWqWk8YL1yyS802_4eiWYUX-JLdi52EMluanHX0tuH2ArcR0jQu6PCUTvN5zpcCF-PFVbZH1LyIhRxbLEgLA6nu8ncME5oTXLgezaa7eiB2EYkfJu5apEhBbLQTpFEVLBbzSCZWZwmzWGhT-w_40TBfcyTgBfxfTzLXQ4KfMlg",
              "width": 1113
            }
          ],
          "place_id": "ChIJeVSilifDI4gRG9NinZ0LllM",
          "rating": 4.2,
          "reference": "CoQBcgAAAGtjVuqm4eGamwrNT1W5nbGWyuM9Ojwe5fslLIoOcU0a2B6U6sJCAOrrcNVDWAahnErYp91J15EgJSsXau4TNJpEgY_ta57a6fWLjxCiobgZ4-cUWZGKvwOvfzD151mBaLLtCVEB8OBX6D8-25qCGGBAD4unEwDuTIN6uFr8fugCEhAIcmRE6utSiJM5IQoQkvdOGhRDQPNvAuHAYb2Xj6SrQl1m6zp9mQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4200 Bay Rd, Saginaw"
        },
        "assessment": {
          "name": 0.8999999999999999,
          "address.street": 0.91
        },
        "average": 0.905
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.468356,
              "lng": -83.974993
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "0f0b3c0e2ec6d866ef3c48c3760f3b6932dff9f2",
          "name": "Draper Toyota",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 916,
              "html_attributions": [],
              "photo_reference": "CoQBewAAADf21nmoAtwFkWZm80olyu1Cp9KkRSU984fdFwrDkZDe5OeRDmYOmuURDzzOjcEaWMGlguN5Eaes0zBj6oZUBuWfVnv5mUB6HBpAB6_1hvqY8Rzp6fVn-9278YSbTixVIwqV3qHwmhk9OMQq1-3X55HLp3Y5dqZkj4wlYkYx_fxMEhBOCA7qgSsE0QKYcMwrUWi6GhRBMljt3pHeb3f1YpJc5YcWBe6Zwg",
              "width": 920
            }
          ],
          "place_id": "ChIJeVSilifDI4gRWcd1PxJ7tfI",
          "reference": "CnRwAAAAPmflxiHRazAKzN-2S3tzUscw5ok0CAB4im6GB5Gng-JDwflXVMOjlA4dyGCvk9jAVgaD987Bl170V-0Kuk9IXO_QR_LNwLMAwtqZTI4e29KUBZEpZWvdvrVp4iYKUwX7i0hqdN3oz0ODRIhr0yqcTxIQISm9Uo4Xtmwl8flqvDZHHBoUc7XDLYBNZUL5Py5E2UPh4sRFtNI",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4200 Bay Rd, Saginaw"
        },
        "assessment": {
          "name": 0.7557692307692309,
          "address.street": 0.91
        },
        "average": 0.8328846153846154
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.468424,
              "lng": -83.974059
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "1e92c0d57b58f55c1243039dfae3192bedf4ae2a",
          "name": "Draper Auto Group",
          "photos": [
            {
              "height": 480,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAV9QpH_9IW2OFuxLDhoJnx-4sPsr87u2YCWHwkiZcdvqnWzgT9chSkJ0ish6DYwxjKMvY0Gd3Lg8nojRRN6DBCc66fFxT8Nvh2OyqDO8ypaibrFQEo5muxPY6vq89cwuCyrZJI8IS6bYiEqFjej0hjRIQPW1lsi-XUilPHXKDKIR3thoUQRbuil603cR4qRKP3dw68AM7xo8",
              "width": 640
            }
          ],
          "place_id": "ChIJAQAAAJDEI4gRo5AGt--TI2M",
          "rating": 4,
          "reference": "CoQBcwAAALl02Xe_LoWRAerK0KxsnuQjfGqhZctxjrU3hnz3iow_FHL7SmjJTj9ZGsCFOqoL0x-M_67m-qkJk24CbMMhJbU9Tid3t1eFKVzlGMGpsqI4yPhtDAnW1S4U5818GwQHpFTmxkQckSj7vA3uIPQygw837jiyj2cypmISLsG6sGBJEhA_TbjdlrhI5VyIaJhBLZR-GhTDGo9OlyNoMv8gJCdC31PSz-KaGw",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4200 Bay Rd, Saginaw"
        },
        "assessment": {
          "name": 0.7014705882352941,
          "address.street": 0.91
        },
        "average": 0.805735294117647
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.468451,
              "lng": -83.975636
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "a4e3f22ad23fd90ed89cd373676673e6d50eafde",
          "name": "Saginaw Valley Ford Lincoln",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 295,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAw9mMIZUTqHDNAzcHE5tFDU_vttfrakIOZ514Mmoj3MtGPxPu2EIPHBj2E2gB5K3yobnfry0-gORXolmwHSKmlACCjHOMCiNIni3l8dM7AerX5YVLk3p0ghzTU2sDc7TVrbihV1WGRwCxgoEik4WfLRIQsgDVtUSnYfLegQagsQKs7xoUj0KGeLuR5YHQmwDZarw8iF1w1Rg",
              "width": 519
            }
          ],
          "place_id": "ChIJLyxNNSbDI4gRIww2vJAF3rk",
          "reference": "CoQBfgAAAGrMeLCb7X60S18n8uTItfNjQEvfgtXuw_hbF0xEj7XPJvnm0i0kURTn2Did1LIKeoVm8d39MjOPF2U9Z3cQewKYVaVecM6BjA4hJwML-fbwfjxsXOzNn7QwtouosV_yeTzwMd20Petc-DMERyRQr88O5EpsHRpWSpK27NgXj4suEhBdIwE2X3j3XJ761yNMRSRzGhQBAe9RESPj_NvWgcPA_h2kLby5TQ",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "4201 Bay Rd, Saginaw"
        },
        "assessment": {
          "name": 0.6219135802469136,
          "address.street": 0.7804545454545455
        },
        "average": 0.7011840628507295
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.471315,
              "lng": -83.971075
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "09203151990ada6251d2c4e2759ac052a748379e",
          "name": "Chevrolet Volt",
          "place_id": "ChIJ949aG9fCI4gRU0WQ1p1Ehlc",
          "reference": "CnRwAAAAaYk0_HIihME12YZO5MXdVd0x68B0jlgVP_beV-2a4Zx0ZFYWzgCi5WkMF7Yh41zymO0eAM1OePQKxnBa6eQ2zT0QFANvt3aZwxSH0xW6ZovkYq3vh2CcK1GXKQIA-zvBvwrsHsngIan9V1upKZm6oBIQa07-z5zs7ZF9YDCEJTlORhoUi6XYUMl7TkOMmIhnpD55cUQd2lw",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "2811 Schust Rd, Saginaw"
        },
        "assessment": {
          "name": 0.748015873015873,
          "address.street": 0.5125164690382081
        },
        "average": 0.6302661710270405
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 42.789339,
            "lng": -86.081898
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "08d7dd69226f485d7c8c01326f7b0a30cf6620e3",
        "name": "Robert DeNooyer Chevrolet",
        "opening_hours": {
          "open_now": false
        },
        "photos": [
          {
            "height": 480,
            "html_attributions": [
              "From a Google User"
            ],
            "photo_reference": "CnRqAAAAtsGBlZt3z6M_WKGtd9y37Gfut6KFMajSh0Rr9SR2nHT6uyxlcxPaEqeyk6qG4Zoq5Db7GublpxVsQstPen-JjTYocoQHijhZnV_rpStCUiGGnpx1xzRBgiDOL8zi_myO9cUHSHykJbr0XHyubxESNBIQlIHJMfkNKFRw-L1bM81pZhoUCFpHhKQ5NFCXqJoNlqYxto5LG68",
            "width": 640
          }
        ],
        "place_id": "ChIJu6zjs0_tGYgR_pht5CrzlWk",
        "rating": 3.9,
        "reference": "CoQBegAAAPJwaSpFDlei1g7itAbRhBrkUMAPjROHtzEmRyumpNk9SQ3jTV8ITIEzf0RBhXTM5ltolPvxqj1vdsWCVtyRfG0LWlYTMAo1RXi0CTF6bY9IngQgk5rlugPKhMvlHsGEBM_s4jfE_J791EbSmE23lM6Wz_382F8rzqKOyHaNz5_jEhDAUvCT4B9eHjgghf5CTrFuGhROiE5_jUhCVKPp-NIKtbw8AcDwbw",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "600 E 8th St, Holland"
      },
      "assessment": {
        "name": 0.9419354838709678,
        "address.street": 0.9142857142857143
      },
      "average": 0.928110599078341
    },
    "saved": {
      "_id": "27ab27283ce87c6dc7082d10fa1fb8f2",
      "_rev": "10-66cb2c6354b4d684159352ca07f00431",
      "name": "ROBERT DENOOYER CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "600 E 8TH ST",
        "city": "HOLLAND",
        "state": "MI",
        "zip": "49423-3756"
      },
      "phone": "(616) 396-2333",
      "hours": "Mon : 09:00 AM - 08:00 PM, Tue - Wed : 09:00 AM - 05:30 PM, Thu : 09:00 AM - 08:00 PM, Fri : 09:00 AM - 05:30 PM, Sat : 09:00 AM - 01:00 PM",
      "location": {
        "latitude": "42.7904",
        "longitude": "-86.0812"
      },
      "reviews": {
        "google": {
          "rating": 3.9,
          "count": 11
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.789339,
              "lng": -86.081898
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "08d7dd69226f485d7c8c01326f7b0a30cf6620e3",
          "name": "Robert DeNooyer Chevrolet",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 480,
              "html_attributions": [
                "From a Google User"
              ],
              "photo_reference": "CnRqAAAAtsGBlZt3z6M_WKGtd9y37Gfut6KFMajSh0Rr9SR2nHT6uyxlcxPaEqeyk6qG4Zoq5Db7GublpxVsQstPen-JjTYocoQHijhZnV_rpStCUiGGnpx1xzRBgiDOL8zi_myO9cUHSHykJbr0XHyubxESNBIQlIHJMfkNKFRw-L1bM81pZhoUCFpHhKQ5NFCXqJoNlqYxto5LG68",
              "width": 640
            }
          ],
          "place_id": "ChIJu6zjs0_tGYgR_pht5CrzlWk",
          "rating": 3.9,
          "reference": "CoQBegAAAPJwaSpFDlei1g7itAbRhBrkUMAPjROHtzEmRyumpNk9SQ3jTV8ITIEzf0RBhXTM5ltolPvxqj1vdsWCVtyRfG0LWlYTMAo1RXi0CTF6bY9IngQgk5rlugPKhMvlHsGEBM_s4jfE_J791EbSmE23lM6Wz_382F8rzqKOyHaNz5_jEhDAUvCT4B9eHjgghf5CTrFuGhROiE5_jUhCVKPp-NIKtbw8AcDwbw",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "600 E 8th St, Holland"
        },
        "assessment": {
          "name": 0.9419354838709678,
          "address.street": 0.9142857142857143
        },
        "average": 0.928110599078341
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.790297,
              "lng": -86.079465
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "f115fee84ef8bee5a435bad632c970fd6fb3d194",
          "name": "R E Barber Ford Inc",
          "opening_hours": {
            "open_now": false
          },
          "place_id": "ChIJrTZ0w07tGYgR6hio46xMzzc",
          "rating": 4.1,
          "reference": "CoQBdAAAAAHxRY2f3nddfMivWKxTlInyW9rSM_zhf6FeKwt1wPfi11Twdc2U5Uxg3JEDVLy01YcIkAvnTxIT6_Cb3VgH5Zb5NoQ0-OBLLIszEnlPpWjz66RVi1xMP1o5eOoCXELSYPetIfyQI_siJJULOsGaWK85RCB1wfySkLImEmAJb-csEhDHv64C8gYnT5RUWLYiKqbNGhTwdUkDmE05PpS0uBtu_VGx21o__w",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "640 E 8th St, Holland"
        },
        "assessment": {
          "name": 0.6681027164685908,
          "address.street": 0.7589285714285714
        },
        "average": 0.713515643948581
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.791571,
              "lng": -86.081348
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "f8db04e6bacb1cf89110a55f1e4360aad3e2a6f3",
          "name": "Rent-A-Spot",
          "place_id": "ChIJv2t6e07tGYgRy6bZKyaHV_A",
          "reference": "CnRtAAAACxGrOIdtT4P0QhCmdMwmgnasI1VoDlKSi6o8k0gNNMu44YvzinD69qAaC08yBSxV-83-XONMagoMVpUWNUgOxtc7ZcWzxVaEPnf5_NkAanNGl8E4ywoQIejAxw8KPv1Y-aqtQnX2r-H-lbcf0V0qmhIQS3YKpejdU5o1Dx5aqFxUJhoUYBlENZ4hJPvqgqYtKFdBMx88qkI",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "595 E 8th St, Holland"
        },
        "assessment": {
          "name": 0.5967008797653959,
          "address.street": 0.7261904761904763
        },
        "average": 0.6614456779779361
      },
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 42.794767,
              "lng": -86.084957
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "9d21c4439d0963d587e0d552b9c2f6584fa28abd",
          "name": "Ter Haar Auto Sales & Leasing",
          "place_id": "ChIJVeJP9VLtGYgRw_JFQr6VsLw",
          "reference": "CoQBfwAAAN9uE07AHekSBtnUUlOj5rlHUrq2W0uLww1aNFx10Zpz5RVrGpGU4UFCfsYP7QP6bjX2gPTX6lEVwh0v13PhkR5HKKq-0OK9QqN3DApQnSMcydGMp9YmbNA-PyXLypxhoAVJkMgigRzrIFREneDWkqtet3UfegkWvV1DV77Py4UMEhDy-yXt0vbm-LRBPVxVWJSPGhSZmuN0jJerse12t7mGzW1cAEqQOQ",
          "scope": "GOOGLE",
          "types": [
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "510 Chicago Dr, Holland"
        },
        "assessment": {
          "name": 0.6209809841622967,
          "address.street": 0.5024154589371981
        },
        "average": 0.5616982215497475
      }
    ]
  },
  {
    "suggestion": {
      "dealer": {
        "geometry": {
          "location": {
            "lat": 43.641502,
            "lng": -84.247283
          }
        },
        "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
        "id": "1f5ef609776499f98099cbf93d9803ce3a3904c5",
        "name": "Garber Chevrolet",
        "opening_hours": {
          "open_now": true
        },
        "photos": [
          {
            "height": 1365,
            "html_attributions": [],
            "photo_reference": "CnRnAAAAcUGS7A2knd-LDOn0QvDfOeXFPR0BK_eq7-sskIixTwLkdvVXNVnZHp5VHD8pFiEhBQMUVKitL92V3HcyGknJBgITz3MG4VlDCsmgj25dsWvXNcio3g4ml8PspgVsR-1ZCNxqj0Ne0USuoF3_PSiYIhIQ-3GbmFokNlOUBuM1VNcl3hoUS-dsIeNEXDwdjY6VcwB9g06MWZ8",
            "width": 2048
          }
        ],
        "place_id": "ChIJ6wy8LWfVI4gRq8rFFZ66kJc",
        "rating": 4.3,
        "reference": "CoQBcwAAAF961lOfz4_qLTVDj9DH765YRRy8As5gcDc0TfLbaLsO3Jd3-14zPAZADAfg98J490RB6Y2q1JL3S-7JwMwuanuKIRKzI2QajDVfnKjrpKVyqZI2v1HEePfylWljsAXVIhT6Y_iif5ymjCF3EgPsvuVnmDfnAqegsLLKbetiQKWKEhDwOs_R1wDD7PdUPQyBD3zdGhQEltMD5vBA7cnQSSUEdVMlwwtH0w",
        "scope": "GOOGLE",
        "types": [
          "car_repair",
          "car_dealer",
          "store",
          "establishment"
        ],
        "vicinity": "1700 N Saginaw Rd, Midland"
      },
      "assessment": {
        "name": 0.9181818181818182,
        "address.street": 0.9307692307692308
      },
      "average": 0.9244755244755245
    },
    "saved": {
      "_id": "27ab27283ce87c6dc7082d10fa1ffd22",
      "_rev": "10-7f49a23dfd0ff313f07e72375a4279d7",
      "name": "GARBER CHEVROLET, INC.",
      "brand": "Chevrolet",
      "address": {
        "street": "1700 N SAGINAW RD",
        "city": "MIDLAND",
        "state": "MI",
        "zip": "48640-2693"
      },
      "phone": "(989) 839-9944",
      "hours": "Mon : 08:30 AM - 08:00 PM, Tue - Wed : 08:30 AM - 06:00 PM, Thu : 08:30 AM - 08:00 PM, Fri : 08:30 AM - 06:00 PM, Sat : 09:30 AM - 03:00 PM",
      "location": {
        "latitude": "43.64199",
        "longitude": "-84.24745"
      },
      "reviews": {
        "google": {
          "rating": 4.4,
          "count": 13
        }
      }
    },
    "processed": [
      {
        "dealer": {
          "geometry": {
            "location": {
              "lat": 43.641502,
              "lng": -84.247283
            }
          },
          "icon": "http://maps.gstatic.com/mapfiles/place_api/icons/car_dealer-71.png",
          "id": "1f5ef609776499f98099cbf93d9803ce3a3904c5",
          "name": "Garber Chevrolet",
          "opening_hours": {
            "open_now": true
          },
          "photos": [
            {
              "height": 1365,
              "html_attributions": [],
              "photo_reference": "CnRnAAAAcUGS7A2knd-LDOn0QvDfOeXFPR0BK_eq7-sskIixTwLkdvVXNVnZHp5VHD8pFiEhBQMUVKitL92V3HcyGknJBgITz3MG4VlDCsmgj25dsWvXNcio3g4ml8PspgVsR-1ZCNxqj0Ne0USuoF3_PSiYIhIQ-3GbmFokNlOUBuM1VNcl3hoUS-dsIeNEXDwdjY6VcwB9g06MWZ8",
              "width": 2048
            }
          ],
          "place_id": "ChIJ6wy8LWfVI4gRq8rFFZ66kJc",
          "rating": 4.3,
          "reference": "CoQBcwAAAF961lOfz4_qLTVDj9DH765YRRy8As5gcDc0TfLbaLsO3Jd3-14zPAZADAfg98J490RB6Y2q1JL3S-7JwMwuanuKIRKzI2QajDVfnKjrpKVyqZI2v1HEePfylWljsAXVIhT6Y_iif5ymjCF3EgPsvuVnmDfnAqegsLLKbetiQKWKEhDwOs_R1wDD7PdUPQyBD3zdGhQEltMD5vBA7cnQSSUEdVMlwwtH0w",
          "scope": "GOOGLE",
          "types": [
            "car_repair",
            "car_dealer",
            "store",
            "establishment"
          ],
          "vicinity": "1700 N Saginaw Rd, Midland"
        },
        "assessment": {
          "name": 0.9181818181818182,
          "address.street": 0.9307692307692308
        },
        "average": 0.9244755244755245
      }
    ]
  }
]

