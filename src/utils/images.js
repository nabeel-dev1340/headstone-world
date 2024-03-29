const images = [
  {
    id: 1,
    src: require("../assets/images/models/bench/bench01.png"),
    title: "bench01",
    type: "bench",
  },
  {
    id: 2,
    src: require("../assets/images/models/bench/bench02.png"),
    title: "bench02",
    type: "bench",
  },
  {
    id: 3,
    src: require("../assets/images/models/bench/bench03.png"),
    title: "bench03",
    type: "bench",
  },
  {
    id: 4,
    src: require("../assets/images/models/bench/bench04.png"),
    title: "bench04",
    type: "bench",
  },
  {
    id: 5,
    src: require("../assets/images/models/bench/bench05.png"),
    title: "bench05",
    type: "bench",
  },
  {
    id: 6,
    src: require("../assets/images/models/bench/bench06.png"),
    title: "bench06",
    type: "bench",
  },
  {
    id: 7,
    src: require("../assets/images/models/bench/bench07.png"),
    title: "bench07",
    type: "bench",
  },
  {
    id: 8,
    src: require("../assets/images/models/bench/bench08.png"),
    title: "bench08",
    type: "bench",
  },
  {
    id: 9,
    src: require("../assets/images/models/bench/bench09.png"),
    title: "bench09",
    type: "bench",
  },
  {
    id: 10,
    src: require("../assets/images/models/bench/bench10.png"),
    title: "bench10",
    type: "bench",
  },
  {
    id: 11,
    src: require("../assets/images/models/bench/bench11.png"),
    title: "bench11",
    type: "bench",
  },
  {
    id: 12,
    src: require("../assets/images/models/bench/bench12.png"),
    title: "bench12",
    type: "bench",
  },
  {
    id: 13,
    src: require("../assets/images/models/crosses/cross01.png"),
    title: "cross01",
    type: "crosses",
  },
  {
    id: 14,
    src: require("../assets/images/models/crosses/cross01D.png"),
    title: "cross01D",
    type: "crosses",
  },
  {
    id: 15,
    src: require("../assets/images/models/crosses/cross02.png"),
    title: "cross02",
    type: "crosses",
  },
  {
    id: 16,
    src: require("../assets/images/models/crosses/cross03.png"),
    title: "cross03",
    type: "crosses",
  },
  {
    id: 17,
    src: require("../assets/images/models/crosses/cross03D.png"),
    title: "cross03D",
    type: "crosses",
  },
  {
    id: 18,
    src: require("../assets/images/models/crosses/cross04.png"),
    title: "cross04",
    type: "crosses",
  },
  {
    id: 19,
    src: require("../assets/images/models/crosses/cross05.png"),
    title: "cross05",
    type: "crosses",
  },
  {
    id: 20,
    src: require("../assets/images/models/crosses/cross06.png"),
    title: "cross06",
    type: "crosses",
  },
  {
    id: 21,
    src: require("../assets/images/models/crosses/cross07.png"),
    title: "cross07",
    type: "crosses",
  },
  {
    id: 22,
    src: require("../assets/images/models/crosses/cross08.png"),
    title: "cross08",
    type: "crosses",
  },
  {
    id: 23,
    src: require("../assets/images/models/crosses/cross09.png"),
    title: "cross09",
    type: "crosses",
  },
  {
    id: 24,
    src: require("../assets/images/models/crosses/cross10.png"),
    title: "cross10",
    type: "crosses",
  },
  {
    id: 25,
    src: require("../assets/images/models/crosses/cross11.png"),
    title: "cross11",
    type: "crosses",
  },
  {
    id: 26,
    src: require("../assets/images/models/crosses/cross12.png"),
    title: "cross12",
    type: "crosses",
  },
  {
    id: 27,
    src: require("../assets/images/models/crosses/cross13.png"),
    title: "cross13",
    type: "crosses",
  },
  {
    id: 28,
    src: require("../assets/images/models/crosses/cross14.png"),
    title: "cross14",
    type: "crosses",
  },
  {
    id: 29,
    src: require("../assets/images/models/crosses/cross15.png"),
    title: "cross15",
    type: "crosses",
  },
  {
    id: 30,
    src: require("../assets/images/models/crosses/cvb.png"),
    title: "cvb",
    type: "crosses",
  },
  {
    id: 31,
    src: require("../assets/images/models/hearts/H1.png"),
    title: "H1",
    type: "hearts",
  },
  {
    id: 32,
    src: require("../assets/images/models/hearts/h10.png"),
    title: "h10",
    type: "hearts",
  },
  {
    id: 33,
    src: require("../assets/images/models/hearts/h11.png"),
    title: "h11",
    type: "hearts",
  },
  {
    id: 34,
    src: require("../assets/images/models/hearts/h12.png"),
    title: "h12",
    type: "hearts",
  },
  {
    id: 35,
    src: require("../assets/images/models/hearts/h13.png"),
    title: "h13",
    type: "hearts",
  },
  {
    id: 36,
    src: require("../assets/images/models/hearts/h14.png"),
    title: "h14",
    type: "hearts",
  },
  {
    id: 37,
    src: require("../assets/images/models/hearts/h15.png"),
    title: "h15",
    type: "hearts",
  },
  {
    id: 38,
    src: require("../assets/images/models/hearts/h2.png"),
    title: "h2",
    type: "hearts",
  },
  {
    id: 39,
    src: require("../assets/images/models/hearts/h3.png"),
    title: "h3",
    type: "hearts",
  },
  {
    id: 40,
    src: require("../assets/images/models/hearts/h4.png"),
    title: "h4",
    type: "hearts",
  },
  {
    id: 41,
    src: require("../assets/images/models/hearts/h5.png"),
    title: "h5",
    type: "hearts",
  },
  {
    id: 42,
    src: require("../assets/images/models/hearts/h6.png"),
    title: "h6",
    type: "hearts",
  },
  {
    id: 43,
    src: require("../assets/images/models/hearts/h7.png"),
    title: "h7",
    type: "hearts",
  },
  {
    id: 44,
    src: require("../assets/images/models/hearts/h8.png"),
    title: "h8",
    type: "hearts",
  },
  {
    id: 45,
    src: require("../assets/images/models/hearts/h9.png"),
    title: "h9",
    type: "hearts",
  },
  {
    id: 46,
    src: require("../assets/images/models/hearts/heart01.png"),
    title: "heart01",
    type: "hearts",
  },
  {
    id: 47,
    src: require("../assets/images/models/hearts/heart02.png"),
    title: "heart02",
    type: "hearts",
  },
  {
    id: 48,
    src: require("../assets/images/models/hearts/heart03.png"),
    title: "heart03",
    type: "hearts",
  },
  {
    id: 49,
    src: require("../assets/images/models/hearts/heart04.png"),
    title: "heart04",
    type: "hearts",
  },
  {
    id: 50,
    src: require("../assets/images/models/hearts/heart05.png"),
    title: "heart05",
    type: "hearts",
  },
  {
    id: 51,
    src: require("../assets/images/models/hearts/heart06.png"),
    title: "heart06",
    type: "hearts",
  },
  {
    id: 52,
    src: require("../assets/images/models/hearts/heart07.png"),
    title: "heart07",
    type: "hearts",
  },
  {
    id: 53,
    src: require("../assets/images/models/hearts/heart08.png"),
    title: "heart08",
    type: "hearts",
  },
  {
    id: 54,
    src: require("../assets/images/models/hearts/heart09.png"),
    title: "heart09",
    type: "hearts",
  },
  {
    id: 55,
    src: require("../assets/images/models/hearts/heart10.png"),
    title: "heart10",
    type: "hearts",
  },
  {
    id: 56,
    src: require("../assets/images/models/hearts/heart11.png"),
    title: "heart11",
    type: "hearts",
  },
  {
    id: 57,
    src: require("../assets/images/models/hearts/heart12.png"),
    title: "heart12",
    type: "hearts",
  },
  {
    id: 58,
    src: require("../assets/images/models/hearts/heart13.png"),
    title: "heart13",
    type: "hearts",
  },
  {
    id: 59,
    src: require("../assets/images/models/hearts/heart14.png"),
    title: "heart14",
    type: "hearts",
  },
  {
    id: 60,
    src: require("../assets/images/models/hearts/heart15.png"),
    title: "heart15",
    type: "hearts",
  },
  {
    id: 61,
    src: require("../assets/images/models/legacy/l1.png"),
    title: "l1",
    type: "legacy",
  },
  {
    id: 62,
    src: require("../assets/images/models/legacy/l10.png"),
    title: "l10",
    type: "legacy",
  },
  {
    id: 63,
    src: require("../assets/images/models/legacy/l11.png"),
    title: "l11",
    type: "legacy",
  },
  {
    id: 64,
    src: require("../assets/images/models/legacy/l12.png"),
    title: "l12",
    type: "legacy",
  },
  {
    id: 65,
    src: require("../assets/images/models/legacy/l13.png"),
    title: "l13",
    type: "legacy",
  },
  {
    id: 66,
    src: require("../assets/images/models/legacy/l14.png"),
    title: "l14",
    type: "legacy",
  },
  {
    id: 67,
    src: require("../assets/images/models/legacy/l15.png"),
    title: "l15",
    type: "legacy",
  },
  {
    id: 68,
    src: require("../assets/images/models/legacy/l16.png"),
    title: "l16",
    type: "legacy",
  },
  {
    id: 69,
    src: require("../assets/images/models/legacy/l17.png"),
    title: "l17",
    type: "legacy",
  },
  {
    id: 70,
    src: require("../assets/images/models/legacy/l18.png"),
    title: "l18",
    type: "legacy",
  },
  {
    id: 71,
    src: require("../assets/images/models/legacy/l19.png"),
    title: "l19",
    type: "legacy",
  },
  {
    id: 72,
    src: require("../assets/images/models/legacy/l2.png"),
    title: "l2",
    type: "legacy",
  },
  {
    id: 73,
    src: require("../assets/images/models/legacy/l20.png"),
    title: "l20",
    type: "legacy",
  },
  {
    id: 74,
    src: require("../assets/images/models/legacy/l21.png"),
    title: "l21",
    type: "legacy",
  },
  {
    id: 75,
    src: require("../assets/images/models/legacy/l22.png"),
    title: "l22",
    type: "legacy",
  },
  {
    id: 76,
    src: require("../assets/images/models/legacy/l23.png"),
    title: "l23",
    type: "legacy",
  },
  {
    id: 77,
    src: require("../assets/images/models/legacy/l3.png"),
    title: "l3",
    type: "legacy",
  },
  {
    id: 78,
    src: require("../assets/images/models/legacy/l4.png"),
    title: "l4",
    type: "legacy",
  },
  {
    id: 79,
    src: require("../assets/images/models/legacy/l4D.png"),
    title: "l4D",
    type: "legacy",
  },
  {
    id: 80,
    src: require("../assets/images/models/legacy/l5.png"),
    title: "l5",
    type: "legacy",
  },
  {
    id: 81,
    src: require("../assets/images/models/legacy/l6.png"),
    title: "l6",
    type: "legacy",
  },
  {
    id: 82,
    src: require("../assets/images/models/legacy/l7.png"),
    title: "l7",
    type: "legacy",
  },
  {
    id: 83,
    src: require("../assets/images/models/legacy/l8.png"),
    title: "l8",
    type: "legacy",
  },
  {
    id: 84,
    src: require("../assets/images/models/legacy/l9.png"),
    title: "l9",
    type: "legacy",
  },
  {
    id: 85,
    src: require("../assets/images/models/legacy/legacy01.png"),
    title: "legacy01",
    type: "legacy",
  },
  {
    id: 86,
    src: require("../assets/images/models/legacy/legacy02.png"),
    title: "legacy02",
    type: "legacy",
  },
  {
    id: 87,
    src: require("../assets/images/models/legacy/legacy03.png"),
    title: "legacy03",
    type: "legacy",
  },
  {
    id: 88,
    src: require("../assets/images/models/legacy/legacy04.png"),
    title: "legacy04",
    type: "legacy",
  },
  {
    id: 89,
    src: require("../assets/images/models/legacy/legacy04D.png"),
    title: "legacy04D",
    type: "legacy",
  },
  {
    id: 90,
    src: require("../assets/images/models/legacy/legacy05.png"),
    title: "legacy05",
    type: "legacy",
  },
  {
    id: 91,
    src: require("../assets/images/models/legacy/legacy06.png"),
    title: "legacy06",
    type: "legacy",
  },
  {
    id: 92,
    src: require("../assets/images/models/legacy/legacy07.png"),
    title: "legacy07",
    type: "legacy",
  },
  {
    id: 93,
    src: require("../assets/images/models/legacy/legacy08.png"),
    title: "legacy08",
    type: "legacy",
  },
  {
    id: 94,
    src: require("../assets/images/models/legacy/legacy09.png"),
    title: "legacy09",
    type: "legacy",
  },
  {
    id: 95,
    src: require("../assets/images/models/legacy/legacy10.png"),
    title: "legacy10",
    type: "legacy",
  },
  {
    id: 96,
    src: require("../assets/images/models/legacy/legacy11.png"),
    title: "legacy11",
    type: "legacy",
  },
  {
    id: 97,
    src: require("../assets/images/models/legacy/legacy12.png"),
    title: "legacy12",
    type: "legacy",
  },
  {
    id: 98,
    src: require("../assets/images/models/legacy/legacy13.png"),
    title: "legacy13",
    type: "legacy",
  },
  {
    id: 99,
    src: require("../assets/images/models/legacy/legacy14.png"),
    title: "legacy14",
    type: "legacy",
  },
  {
    id: 100,
    src: require("../assets/images/models/legacy/legacy15.png"),
    title: "legacy15",
    type: "legacy",
  },
  {
    id: 101,
    src: require("../assets/images/models/legacy/legacy16.png"),
    title: "legacy16",
    type: "legacy",
  },
  {
    id: 102,
    src: require("../assets/images/models/legacy/legacy17.png"),
    title: "legacy17",
    type: "legacy",
  },
  {
    id: 103,
    src: require("../assets/images/models/legacy/legacy18.png"),
    title: "legacy18",
    type: "legacy",
  },
  {
    id: 104,
    src: require("../assets/images/models/legacy/legacy19.png"),
    title: "legacy19",
    type: "legacy",
  },
  {
    id: 105,
    src: require("../assets/images/models/legacy/legacy20.png"),
    title: "legacy20",
    type: "legacy",
  },
  {
    id: 106,
    src: require("../assets/images/models/legacy/legacy21.png"),
    title: "legacy21",
    type: "legacy",
  },
  {
    id: 107,
    src: require("../assets/images/models/legacy/legacy22.png"),
    title: "legacy22",
    type: "legacy",
  },
  {
    id: 108,
    src: require("../assets/images/models/legacy/legacy23.png"),
    title: "legacy23",
    type: "legacy",
  },
  {
    id: 109,
    src: require("../assets/images/models/markers/ledger 30 x60.jpg"),
    title: "ledger 30 x60",
    type: "markers",
  },
  {
    id: 110,
    src: require("../assets/images/models/markers/ledger 32 x60.jpg"),
    title: "ledger 32 x60",
    type: "markers",
  },
  {
    id: 111,
    src: require("../assets/images/models/markers/ledger 32 x72.jpg"),
    title: "ledger 32 x72",
    type: "markers",
  },
  {
    id: 112,
    src: require("../assets/images/models/markers/ledger 36 x60.jpg"),
    title: "ledger 36 x60",
    type: "markers",
  },
  {
    id: 113,
    src: require("../assets/images/models/markers/ledger 36 x72.jpg"),
    title: "ledger 36 x72",
    type: "markers",
  },
  {
    id: 114,
    src: require("../assets/images/models/markers/ledger 36 x84.jpg"),
    title: "ledger 36 x84",
    type: "markers",
  },
  {
    id: 115,
    src: require("../assets/images/models/markers/marker 20x10.jpg"),
    title: "marker 20x10",
    type: "markers",
  },
  {
    id: 116,
    src: require("../assets/images/models/markers/marker 24x12.jpg"),
    title: "marker 24x12",
    type: "markers",
  },
  {
    id: 117,
    src: require("../assets/images/models/markers/marker 28x16.jpg"),
    title: "marker 28x16",
    type: "markers",
  },
  {
    id: 118,
    src: require("../assets/images/models/markers/marker 30x32.jpg"),
    title: "marker 30x32",
    type: "markers",
  },
  {
    id: 119,
    src: require("../assets/images/models/markers/marker 32x36.jpg"),
    title: "marker 32x36",
    type: "markers",
  },
  {
    id: 120,
    src: require("../assets/images/models/markers/marker 36x36.jpg"),
    title: "marker 36x36",
    type: "markers",
  },
  {
    id: 121,
    src: require("../assets/images/models/plural/PL1.png"),
    title: "PL1",
    type: "plural",
  },
  {
    id: 122,
    src: require("../assets/images/models/plural/PL10.png"),
    title: "PL10",
    type: "plural",
  },
  {
    id: 123,
    src: require("../assets/images/models/plural/PL2.png"),
    title: "PL2",
    type: "plural",
  },
  {
    id: 124,
    src: require("../assets/images/models/plural/PL3.png"),
    title: "PL3",
    type: "plural",
  },
  {
    id: 125,
    src: require("../assets/images/models/plural/PL4.png"),
    title: "PL4",
    type: "plural",
  },
  {
    id: 126,
    src: require("../assets/images/models/plural/PL5.png"),
    title: "PL5",
    type: "plural",
  },
  {
    id: 127,
    src: require("../assets/images/models/plural/PL6.png"),
    title: "PL6",
    type: "plural",
  },
  {
    id: 128,
    src: require("../assets/images/models/plural/PL7.png"),
    title: "PL7",
    type: "plural",
  },
  {
    id: 129,
    src: require("../assets/images/models/plural/PL8.png"),
    title: "PL8",
    type: "plural",
  },
  {
    id: 130,
    src: require("../assets/images/models/plural/PL9.png"),
    title: "PL9",
    type: "plural",
  },
  {
    id: 131,
    src: require("../assets/images/models/plural/plural01.png"),
    title: "plural01",
    type: "plural",
  },
  {
    id: 132,
    src: require("../assets/images/models/plural/plural02.png"),
    title: "plural02",
    type: "plural",
  },
  {
    id: 133,
    src: require("../assets/images/models/plural/plural03.png"),
    title: "plural03",
    type: "plural",
  },
  {
    id: 134,
    src: require("../assets/images/models/plural/plural04.png"),
    title: "plural04",
    type: "plural",
  },
  {
    id: 135,
    src: require("../assets/images/models/plural/plural05.png"),
    title: "plural05",
    type: "plural",
  },
  {
    id: 136,
    src: require("../assets/images/models/plural/plural06.png"),
    title: "plural06",
    type: "plural",
  },
  {
    id: 137,
    src: require("../assets/images/models/plural/plural07.png"),
    title: "plural07",
    type: "plural",
  },
  {
    id: 138,
    src: require("../assets/images/models/plural/plural08.png"),
    title: "plural08",
    type: "plural",
  },
  {
    id: 139,
    src: require("../assets/images/models/plural/plural09.png"),
    title: "plural09",
    type: "plural",
  },
  {
    id: 140,
    src: require("../assets/images/models/plural/plural10.png"),
    title: "plural10",
    type: "plural",
  },
  {
    id: 141,
    src: require("../assets/images/models/slanted/slant1.png"),
    title: "slant1",
    type: "slanted",
  },
  {
    id: 142,
    src: require("../assets/images/models/slanted/slant2png.png"),
    title: "slant2png",
    type: "slanted",
  },
  {
    id: 143,
    src: require("../assets/images/models/slanted/slanted1.png"),
    title: "slanted1",
    type: "slanted",
  },
  {
    id: 144,
    src: require("../assets/images/models/slanted/slanted2.png"),
    title: "slanted2",
    type: "slanted",
  },
  {
    id: 145,
    src: require("../assets/images/models/standard/stan1.png"),
    title: "stan1",
    type: "standard",
  },
  {
    id: 146,
    src: require("../assets/images/models/standard/stan2.png"),
    title: "stan2",
    type: "standard",
  },
  {
    id: 147,
    src: require("../assets/images/models/standard/standard 18x18.jpg"),
    title: "standard 18x18",
    type: "standard",
  },
  {
    id: 148,
    src: require("../assets/images/models/standard/standard 24x24.jpg"),
    title: "standard 24x24",
    type: "standard",
  },
  {
    id: 149,
    src: require("../assets/images/models/standard/standard 24x30.jpg"),
    title: "standard 24x30",
    type: "standard",
  },
  {
    id: 150,
    src: require("../assets/images/models/standard/standard 42x24.jpg"),
    title: "standard 42x24",
    type: "standard",
  },
  {
    id: 151,
    src: require("../assets/images/models/standard/standard 48x24.jpg"),
    title: "standard 48x24",
    type: "standard",
  },
  {
    id: 152,
    src: require("../assets/images/models/standard/standard 60x30.jpg"),
    title: "standard 60x30",
    type: "standard",
  },
  {
    id: 153,
    src: require("../assets/images/models/standard/standard 72x32.jpg"),
    title: "standard 72x32",
    type: "standard",
  },
  {
    id: 154,
    src: require("../assets/images/models/standard/stndrd 18x18.jpg"),
    title: "stndrd 18x18",
    type: "standard",
  },
  {
    id: 155,
    src: require("../assets/images/models/standard/stndrd 24x24.jpg"),
    title: "stndrd 24x24",
    type: "standard",
  },
  {
    id: 156,
    src: require("../assets/images/models/standard/stndrd 24x30.jpg"),
    title: "stndrd 24x30",
    type: "standard",
  },
  {
    id: 157,
    src: require("../assets/images/models/standard/stndrd 42x24.jpg"),
    title: "stndrd 42x24",
    type: "standard",
  },
  {
    id: 158,
    src: require("../assets/images/models/standard/stndrd 48x24.jpg"),
    title: "stndrd 48x24",
    type: "standard",
  },
  {
    id: 159,
    src: require("../assets/images/models/standard/stndrd 60x30.jpg"),
    title: "stndrd 60x30",
    type: "standard",
  },
  {
    id: 160,
    src: require("../assets/images/models/standard/stndrd 72x32.jpg"),
    title: "stndrd 72x32",
    type: "standard",
  },
  {
    id: 161,
    src: require("../assets/images/models/statue/stat1.png"),
    title: "stat1",
    type: "statue",
  },
  {
    id: 162,
    src: require("../assets/images/models/statue/stat10.png"),
    title: "stat10",
    type: "statue",
  },
  {
    id: 163,
    src: require("../assets/images/models/statue/stat11.png"),
    title: "stat11",
    type: "statue",
  },
  {
    id: 164,
    src: require("../assets/images/models/statue/stat12.png"),
    title: "stat12",
    type: "statue",
  },
  {
    id: 165,
    src: require("../assets/images/models/statue/stat13.png"),
    title: "stat13",
    type: "statue",
  },
  {
    id: 166,
    src: require("../assets/images/models/statue/stat14.png"),
    title: "stat14",
    type: "statue",
  },
  {
    id: 167,
    src: require("../assets/images/models/statue/stat15.png"),
    title: "stat15",
    type: "statue",
  },
  {
    id: 168,
    src: require("../assets/images/models/statue/stat16.png"),
    title: "stat16",
    type: "statue",
  },
  {
    id: 169,
    src: require("../assets/images/models/statue/stat17.png"),
    title: "stat17",
    type: "statue",
  },
  {
    id: 170,
    src: require("../assets/images/models/statue/stat18.png"),
    title: "stat18",
    type: "statue",
  },
  {
    id: 171,
    src: require("../assets/images/models/statue/stat19.png"),
    title: "stat19",
    type: "statue",
  },
  {
    id: 172,
    src: require("../assets/images/models/statue/stat19D.png"),
    title: "stat19D",
    type: "statue",
  },
  {
    id: 173,
    src: require("../assets/images/models/statue/stat2.png"),
    title: "stat2",
    type: "statue",
  },
  {
    id: 174,
    src: require("../assets/images/models/statue/stat20.png"),
    title: "stat20",
    type: "statue",
  },
  {
    id: 175,
    src: require("../assets/images/models/statue/stat21.png"),
    title: "stat21",
    type: "statue",
  },
  {
    id: 176,
    src: require("../assets/images/models/statue/stat22.png"),
    title: "stat22",
    type: "statue",
  },
  {
    id: 177,
    src: require("../assets/images/models/statue/stat23.png"),
    title: "stat23",
    type: "statue",
  },
  {
    id: 178,
    src: require("../assets/images/models/statue/stat24.png"),
    title: "stat24",
    type: "statue",
  },
  {
    id: 179,
    src: require("../assets/images/models/statue/stat25.png"),
    title: "stat25",
    type: "statue",
  },
  {
    id: 180,
    src: require("../assets/images/models/statue/stat26.png"),
    title: "stat26",
    type: "statue",
  },
  {
    id: 181,
    src: require("../assets/images/models/statue/stat27.png"),
    title: "stat27",
    type: "statue",
  },
  {
    id: 182,
    src: require("../assets/images/models/statue/stat28.png"),
    title: "stat28",
    type: "statue",
  },
  {
    id: 183,
    src: require("../assets/images/models/statue/stat3.png"),
    title: "stat3",
    type: "statue",
  },
  {
    id: 184,
    src: require("../assets/images/models/statue/stat4.png"),
    title: "stat4",
    type: "statue",
  },
  {
    id: 185,
    src: require("../assets/images/models/statue/stat5.png"),
    title: "stat5",
    type: "statue",
  },
  {
    id: 186,
    src: require("../assets/images/models/statue/stat6.png"),
    title: "stat6",
    type: "statue",
  },
  {
    id: 187,
    src: require("../assets/images/models/statue/stat7.png"),
    title: "stat7",
    type: "statue",
  },
  {
    id: 188,
    src: require("../assets/images/models/statue/stat8.png"),
    title: "stat8",
    type: "statue",
  },
  {
    id: 189,
    src: require("../assets/images/models/statue/stat9.png"),
    title: "stat9",
    type: "statue",
  },
  {
    id: 190,
    src: require("../assets/images/models/statue/statue01.png"),
    title: "statue01",
    type: "statue",
  },
  {
    id: 191,
    src: require("../assets/images/models/statue/statue02.png"),
    title: "statue02",
    type: "statue",
  },
  {
    id: 192,
    src: require("../assets/images/models/statue/statue03.png"),
    title: "statue03",
    type: "statue",
  },
  {
    id: 193,
    src: require("../assets/images/models/statue/statue04.png"),
    title: "statue04",
    type: "statue",
  },
  {
    id: 194,
    src: require("../assets/images/models/statue/statue05.png"),
    title: "statue05",
    type: "statue",
  },
  {
    id: 195,
    src: require("../assets/images/models/statue/statue06.png"),
    title: "statue06",
    type: "statue",
  },
  {
    id: 196,
    src: require("../assets/images/models/statue/statue07.png"),
    title: "statue07",
    type: "statue",
  },
  {
    id: 197,
    src: require("../assets/images/models/statue/statue08.png"),
    title: "statue08",
    type: "statue",
  },
  {
    id: 198,
    src: require("../assets/images/models/statue/statue09.png"),
    title: "statue09",
    type: "statue",
  },
  {
    id: 199,
    src: require("../assets/images/models/statue/statue10.png"),
    title: "statue10",
    type: "statue",
  },
  {
    id: 200,
    src: require("../assets/images/models/statue/statue11.png"),
    title: "statue11",
    type: "statue",
  },
  {
    id: 201,
    src: require("../assets/images/models/statue/statue12.png"),
    title: "statue12",
    type: "statue",
  },
  {
    id: 202,
    src: require("../assets/images/models/statue/statue13.png"),
    title: "statue13",
    type: "statue",
  },
  {
    id: 203,
    src: require("../assets/images/models/statue/statue14.png"),
    title: "statue14",
    type: "statue",
  },
  {
    id: 204,
    src: require("../assets/images/models/statue/statue15.png"),
    title: "statue15",
    type: "statue",
  },
  {
    id: 205,
    src: require("../assets/images/models/statue/statue16.png"),
    title: "statue16",
    type: "statue",
  },
  {
    id: 206,
    src: require("../assets/images/models/statue/statue17.png"),
    title: "statue17",
    type: "statue",
  },
  {
    id: 207,
    src: require("../assets/images/models/statue/statue18.png"),
    title: "statue18",
    type: "statue",
  },
  {
    id: 208,
    src: require("../assets/images/models/statue/statue19.png"),
    title: "statue19",
    type: "statue",
  },
  {
    id: 209,
    src: require("../assets/images/models/statue/statue19D.png"),
    title: "statue19D",
    type: "statue",
  },
  {
    id: 210,
    src: require("../assets/images/models/statue/statue20.png"),
    title: "statue20",
    type: "statue",
  },
  {
    id: 211,
    src: require("../assets/images/models/statue/statue21.png"),
    title: "statue21",
    type: "statue",
  },
  {
    id: 212,
    src: require("../assets/images/models/statue/statue22.png"),
    title: "statue22",
    type: "statue",
  },
  {
    id: 213,
    src: require("../assets/images/models/statue/statue23.png"),
    title: "statue23",
    type: "statue",
  },
  {
    id: 214,
    src: require("../assets/images/models/statue/statue24.png"),
    title: "statue24",
    type: "statue",
  },
  {
    id: 215,
    src: require("../assets/images/models/statue/statue25.png"),
    title: "statue25",
    type: "statue",
  },
  {
    id: 216,
    src: require("../assets/images/models/statue/statue26.png"),
    title: "statue26",
    type: "statue",
  },
  {
    id: 217,
    src: require("../assets/images/models/statue/statue27.png"),
    title: "statue27",
    type: "statue",
  },
  {
    id: 218,
    src: require("../assets/images/models/statue/statue28.png"),
    title: "statue28",
    type: "statue",
  },
  {
    id: 219,
    src: require("../assets/images/models/vases/vase-1.jpg"),
    title: "vase-1",
    type: "vases",
  },
  {
    id: 220,
    src: require("../assets/images/models/vases/vase-10.jpg"),
    title: "vase-10",
    type: "vases",
  },
  {
    id: 221,
    src: require("../assets/images/models/vases/vase-2.jpg"),
    title: "vase-2",
    type: "vases",
  },
  {
    id: 222,
    src: require("../assets/images/models/vases/vase-3.jpg"),
    title: "vase-3",
    type: "vases",
  },
  {
    id: 223,
    src: require("../assets/images/models/vases/vase-4.jpg"),
    title: "vase-4",
    type: "vases",
  },
  {
    id: 224,
    src: require("../assets/images/models/vases/vase-5.jpg"),
    title: "vase-5",
    type: "vases",
  },
  {
    id: 225,
    src: require("../assets/images/models/vases/vase-6.jpg"),
    title: "vase-6",
    type: "vases",
  },
  {
    id: 226,
    src: require("../assets/images/models/vases/vase-7.jpg"),
    title: "vase-7",
    type: "vases",
  },
  {
    id: 227,
    src: require("../assets/images/models/vases/vase-8.jpg"),
    title: "vase-8",
    type: "vases",
  },
  {
    id: 228,
    src: require("../assets/images/models/vases/vase-9.jpg"),
    title: "vase-9",
    type: "vases",
  },
  {
    id: 229,
    src: require("../assets/images/models/ceramics/Heart_6x6.jpg"),
    title: "Heart_6x6",
    type: "ceramics",
  },
  {
    id: 230,
    src: require("../assets/images/models/ceramics/Heart_8x8.jpg"),
    title: "Heart_8x8",
    type: "ceramics",
  },
  {
    id: 231,
    src: require("../assets/images/models/ceramics/Oval_1.75x2.25.jpg"),
    title: "Oval_1.75x2.25",
    type: "ceramics",
  },
  {
    id: 232,
    src: require("../assets/images/models/ceramics/Oval_2.25x2.75.jpg"),
    title: "Oval_2.25x2.75",
    type: "ceramics",
  },
  {
    id: 233,
    src: require("../assets/images/models/ceramics/Oval_2.625x3.375.jpg"),
    title: "Oval_2.625x3.375",
    type: "ceramics",
  },
  {
    id: 234,
    src: require("../assets/images/models/ceramics/Oval_3.25x4.25.jpg"),
    title: "Oval_3.25x4.25",
    type: "ceramics",
  },
  {
    id: 235,
    src: require("../assets/images/models/ceramics/Oval_3.75x5.jpg"),
    title: "Oval_3.75x5",
    type: "ceramics",
  },
  {
    id: 236,
    src: require("../assets/images/models/ceramics/Oval_4.25x6.jpg"),
    title: "Oval_4.25x6",
    type: "ceramics",
  },
  {
    id: 237,
    src: require("../assets/images/models/ceramics/Oval_5x7.jpg"),
    title: "Oval_5x7",
    type: "ceramics",
  },
  {
    id: 238,
    src: require("../assets/images/models/ceramics/Oval_8x10.jpg"),
    title: "Oval_8x10",
    type: "ceramics",
  },
  {
    id: 239,
    src: require("../assets/images/models/ceramics/Rectangle_10x22.jpg"),
    title: "Rectangle_10x22",
    type: "ceramics",
  },
  {
    id: 240,
    src: require("../assets/images/models/ceramics/Rectangle_4x6.jpg"),
    title: "Rectangle_4x6",
    type: "ceramics",
  },
  {
    id: 241,
    src: require("../assets/images/models/ceramics/Rectangle_8x10.jpg"),
    title: "Rectangle_8x10",
    type: "ceramics",
  },
  {
    id: 242,
    src: require("../assets/images/models/ceramics/Round_3.5.jpg"),
    title: "Round_3.5",
    type: "ceramics",
  },
  {
    id: 243,
    src: require("../assets/images/models/ceramics/Round_5.jpg"),
    title: "Round_5",
    type: "ceramics",
  },
  {
    id: 244,
    src: require("../assets/images/models/ceramics/Round_6.jpg"),
    title: "Round_6",
    type: "ceramics",
  },
  {
    id: 245,
    src: require("../assets/images/models/ceramics/Round_8.jpg"),
    title: "Round_8",
    type: "ceramics",
  },
  {
    id: 246,
    src: require("../assets/images/models/ceramics/Square_4x4.jpg"),
    title: "Square_4x4",
    type: "ceramics",
  },
  {
    id: 247,
    src: require("../assets/images/models/ceramics/Square_6x6.jpg"),
    title: "Square_6x6",
    type: "ceramics",
  },
];

export default images;
