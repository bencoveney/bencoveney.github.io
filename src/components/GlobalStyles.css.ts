export const styles = {
  "@global": {
    ":root": {
      "--font-family-sans-serif":
        "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif",
      "--font-family-serif":
        "Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, serif",
      "--font-family-mono":
        "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
      // Prefer these ones for referencing fonts:
      "--font-family-body": "var(--font-family-sans-serif)",
      "--font-family-heading": "var(--font-family-serif)",
      "--font-family-code": "var(--font-family-mono)",

      "--color-black": "rgb(0, 0, 0)",
      "--color-white": "rgb(255, 255, 255)",
      "--color-blue-50": "rgb(1, 7, 19)",
      "--color-blue-100": "rgb(5, 20, 40)",
      "--color-blue-200": "rgb(15, 43, 77)",
      "--color-blue-300": "rgb(27, 67, 115)",
      "--color-blue-400": "rgb(42, 93, 155)",
      "--color-blue-500": "rgb(61, 120, 194)",
      "--color-blue-600": "rgb(91, 149, 223)",
      "--color-blue-700": "rgb(132, 178, 238)",
      "--color-blue-800": "rgb(175, 205, 245)",
      "--color-blue-900": "rgb(216, 231, 250)",
      "--color-blue-950": "rgb(236, 243, 253)",
      "--color-violet-50": "rgb(6, 4, 24)",
      "--color-violet-100": "rgb(18, 13, 48)",
      "--color-violet-200": "rgb(40, 31, 91)",
      "--color-violet-300": "rgb(62, 50, 133)",
      "--color-violet-400": "rgb(86, 72, 176)",
      "--color-violet-500": "rgb(112, 100, 210)",
      "--color-violet-600": "rgb(139, 133, 229)",
      "--color-violet-700": "rgb(168, 166, 239)",
      "--color-violet-800": "rgb(197, 197, 245)",
      "--color-violet-900": "rgb(226, 227, 250)",
      "--color-violet-950": "rgb(241, 241, 253)",
      // "--color-purple-50": "rgb(13, 2, 19)",
      // "--color-purple-100": "rgb(31, 8, 40)",
      // "--color-purple-200": "rgb(61, 22, 76)",
      // "--color-purple-300": "rgb(92, 38, 113)",
      // "--color-purple-400": "rgb(125, 55, 152)",
      // "--color-purple-500": "rgb(157, 79, 189)",
      // "--color-purple-600": "rgb(185, 111, 216)",
      // "--color-purple-700": "rgb(205, 150, 230)",
      // "--color-purple-800": "rgb(223, 187, 240)",
      // "--color-purple-900": "rgb(239, 222, 248)",
      // "--color-purple-950": "rgb(247, 239, 251)",
      // "--color-pink-50": "rgb(18, 2, 11)",
      // "--color-pink-100": "rgb(38, 6, 26)",
      // "--color-pink-200": "rgb(73, 18, 53)",
      // "--color-pink-300": "rgb(109, 32, 81)",
      // "--color-pink-400": "rgb(147, 47, 111)",
      // "--color-pink-500": "rgb(185, 68, 142)",
      // "--color-pink-600": "rgb(217, 98, 171)",
      // "--color-pink-700": "rgb(232, 141, 194)",
      // "--color-pink-800": "rgb(241, 182, 214)",
      // "--color-pink-900": "rgb(248, 220, 235)",
      // "--color-pink-950": "rgb(252, 238, 245)",
      // "--color-red-50": "rgb(19, 2, 4)",
      // "--color-red-100": "rgb(40, 7, 12)",
      // "--color-red-200": "rgb(76, 21, 29)",
      // "--color-red-300": "rgb(113, 35, 47)",
      // "--color-red-400": "rgb(152, 52, 67)",
      // "--color-red-500": "rgb(192, 73, 89)",
      // "--color-red-600": "rgb(223, 103, 117)",
      // "--color-red-700": "rgb(238, 144, 152)",
      // "--color-red-800": "rgb(245, 184, 188)",
      // "--color-red-900": "rgb(250, 221, 222)",
      // "--color-red-950": "rgb(253, 238, 239)",
      // "--color-orange-50": "rgb(16, 4, 1)",
      // "--color-orange-100": "rgb(35, 13, 4)",
      // "--color-orange-200": "rgb(68, 31, 12)",
      // "--color-orange-300": "rgb(103, 49, 23)",
      // "--color-orange-400": "rgb(139, 70, 36)",
      // "--color-orange-500": "rgb(177, 92, 51)",
      // "--color-orange-600": "rgb(212, 118, 73)",
      // "--color-orange-700": "rgb(235, 151, 113)",
      // "--color-orange-800": "rgb(245, 188, 163)",
      // "--color-orange-900": "rgb(250, 223, 211)",
      // "--color-orange-950": "rgb(253, 239, 233)",
      // "--color-gold-50": "rgb(12, 6, 1)",
      // "--color-gold-100": "rgb(29, 18, 3)",
      // "--color-gold-200": "rgb(57, 39, 10)",
      // "--color-gold-300": "rgb(87, 61, 21)",
      // "--color-gold-400": "rgb(119, 85, 32)",
      // "--color-gold-500": "rgb(152, 110, 45)",
      // "--color-gold-600": "rgb(186, 136, 60)",
      // "--color-gold-700": "rgb(218, 164, 84)",
      // "--color-gold-800": "rgb(240, 194, 129)",
      // "--color-gold-900": "rgb(249, 225, 194)",
      // "--color-gold-950": "rgb(252, 240, 225)",
      // "--color-yellow-50": "rgb(8, 7, 1)",
      // "--color-yellow-100": "rgb(22, 21, 3)",
      // "--color-yellow-200": "rgb(47, 44, 11)",
      // "--color-yellow-300": "rgb(72, 68, 22)",
      // "--color-yellow-400": "rgb(99, 94, 34)",
      // "--color-yellow-500": "rgb(128, 122, 47)",
      // "--color-yellow-600": "rgb(157, 151, 62)",
      // "--color-yellow-700": "rgb(187, 179, 80)",
      // "--color-yellow-800": "rgb(214, 207, 107)",
      // "--color-yellow-900": "rgb(237, 233, 168)",
      // "--color-yellow-950": "rgb(246, 245, 210)",
      // "--color-green-50": "rgb(4, 9, 2)",
      // "--color-green-100": "rgb(12, 24, 6)",
      // "--color-green-200": "rgb(30, 49, 18)",
      // "--color-green-300": "rgb(48, 75, 32)",
      // "--color-green-400": "rgb(68, 103, 47)",
      // "--color-green-500": "rgb(89, 133, 63)",
      // "--color-green-600": "rgb(112, 164, 81)",
      // "--color-green-700": "rgb(136, 195, 101)",
      // "--color-green-800": "rgb(163, 223, 128)",
      // "--color-green-900": "rgb(204, 243, 184)",
      // "--color-green-950": "rgb(230, 249, 221)",
      // "--color-aqua-50": "rgb(2, 9, 5)",
      // "--color-aqua-100": "rgb(5, 24, 16)",
      // "--color-aqua-200": "rgb(16, 50, 37)",
      // "--color-aqua-300": "rgb(29, 77, 58)",
      // "--color-aqua-400": "rgb(42, 106, 81)",
      // "--color-aqua-500": "rgb(57, 136, 105)",
      // "--color-aqua-600": "rgb(74, 167, 131)",
      // "--color-aqua-700": "rgb(94, 198, 157)",
      // "--color-aqua-800": "rgb(122, 227, 184)",
      // "--color-aqua-900": "rgb(181, 246, 217)",
      // "--color-aqua-950": "rgb(220, 251, 236)",
      // "--color-teal-50": "rgb(1, 9, 9)",
      // "--color-teal-100": "rgb(4, 24, 24)",
      // "--color-teal-200": "rgb(12, 49, 49)",
      // "--color-teal-300": "rgb(23, 75, 75)",
      // "--color-teal-400": "rgb(35, 104, 104)",
      // "--color-teal-500": "rgb(49, 134, 134)",
      // "--color-teal-600": "rgb(64, 165, 164)",
      // "--color-teal-700": "rgb(83, 195, 195)",
      // "--color-teal-800": "rgb(115, 223, 223)",
      // "--color-teal-900": "rgb(181, 243, 242)",
      // "--color-teal-950": "rgb(220, 249, 248)",
      "--color-sky-50": "rgb(1, 9, 13)",
      "--color-sky-100": "rgb(3, 23, 30)",
      "--color-sky-200": "rgb(12, 47, 60)",
      "--color-sky-300": "rgb(23, 73, 91)",
      "--color-sky-400": "rgb(35, 101, 124)",
      "--color-sky-500": "rgb(48, 130, 158)",
      "--color-sky-600": "rgb(66, 160, 193)",
      "--color-sky-700": "rgb(94, 189, 224)",
      "--color-sky-800": "rgb(144, 214, 242)",
      "--color-sky-900": "rgb(202, 236, 250)",
      "--color-sky-950": "rgb(229, 245, 252)",
      "--color-night-50": "rgb(5, 7, 11)",
      "--color-night-100": "rgb(16, 20, 26)",
      "--color-night-200": "rgb(36, 44, 54)",
      "--color-night-300": "rgb(56, 67, 82)",
      "--color-night-400": "rgb(79, 93, 111)",
      "--color-night-500": "rgb(104, 121, 141)",
      "--color-night-600": "rgb(132, 149, 170)",
      "--color-night-700": "rgb(162, 177, 195)",
      "--color-night-800": "rgb(193, 204, 217)",
      "--color-night-900": "rgb(224, 230, 237)",
      "--color-night-950": "rgb(240, 242, 246)",
      // "--color-earth-50": "rgb(9, 7, 4)",
      // "--color-earth-100": "rgb(23, 19, 14)",
      // "--color-earth-200": "rgb(49, 42, 32)",
      // "--color-earth-300": "rgb(75, 65, 52)",
      // "--color-earth-400": "rgb(102, 90, 73)",
      // "--color-earth-500": "rgb(131, 117, 97)",
      // "--color-earth-600": "rgb(160, 144, 123)",
      // "--color-earth-700": "rgb(188, 173, 152)",
      // "--color-earth-800": "rgb(212, 201, 185)",
      // "--color-earth-900": "rgb(234, 228, 220)",
      // "--color-earth-950": "rgb(245, 242, 238)",
      // "--color-grey-50": "rgb(7, 7, 7)",
      // "--color-grey-100": "rgb(20, 20, 20)",
      // "--color-grey-200": "rgb(43, 43, 43)",
      // "--color-grey-300": "rgb(66, 66, 66)",
      // "--color-grey-400": "rgb(92, 92, 92)",
      // "--color-grey-500": "rgb(119, 119, 119)",
      // "--color-grey-600": "rgb(147, 147, 147)",
      // "--color-grey-700": "rgb(175, 175, 175)",
      // "--color-grey-800": "rgb(202, 202, 202)",
      // "--color-grey-900": "rgb(229, 229, 229)",
      // "--color-grey-950": "rgb(242, 242, 242)",

      "@media (color-gamut: p3)": {
        "--color-blue-50": "color(display-p3 0.0094 0.0272 0.0723)",
        "--color-blue-100": "color(display-p3 0.0306 0.0770 0.1528)",
        "--color-blue-200": "color(display-p3 0.0877 0.1664 0.2930)",
        "--color-blue-300": "color(display-p3 0.1478 0.2586 0.4370)",
        "--color-blue-400": "color(display-p3 0.2151 0.3583 0.5887)",
        "--color-blue-500": "color(display-p3 0.2961 0.4654 0.7375)",
        "--color-blue-600": "color(display-p3 0.4084 0.5790 0.8515)",
        "--color-blue-700": "color(display-p3 0.5547 0.6933 0.9118)",
        "--color-blue-800": "color(display-p3 0.7087 0.8016 0.9462)",
        "--color-blue-900": "color(display-p3 0.8572 0.9030 0.9736)",
        "--color-blue-950": "color(display-p3 0.9290 0.9518 0.9867)",
        "--color-violet-50": "color(display-p3 0.0228 0.0158 0.0903)",
        "--color-violet-100": "color(display-p3 0.0678 0.0503 0.1820)",
        "--color-violet-200": "color(display-p3 0.1509 0.1219 0.3415)",
        "--color-violet-300": "color(display-p3 0.2368 0.1972 0.5033)",
        "--color-violet-400": "color(display-p3 0.3297 0.2838 0.6655)",
        "--color-violet-500": "color(display-p3 0.4310 0.3930 0.7952)",
        "--color-violet-600": "color(display-p3 0.5413 0.5208 0.8722)",
        "--color-violet-700": "color(display-p3 0.6573 0.6505 0.9155)",
        "--color-violet-800": "color(display-p3 0.7740 0.7736 0.9464)",
        "--color-violet-900": "color(display-p3 0.8881 0.8893 0.9735)",
        "--color-violet-950": "color(display-p3 0.9441 0.9450 0.9867)",
        // "--color-purple-50": "color(display-p3 0.0456 0.0107 0.0706)",
        // "--color-purple-100": "color(display-p3 0.1091 0.0349 0.1500)",
        // "--color-purple-200": "color(display-p3 0.2200 0.0957 0.2882)",
        // "--color-purple-300": "color(display-p3 0.3339 0.1598 0.4298)",
        // "--color-purple-400": "color(display-p3 0.4546 0.2330 0.5777)",
        // "--color-purple-500": "color(display-p3 0.5761 0.3248 0.7189)",
        // "--color-purple-600": "color(display-p3 0.6837 0.4500 0.8230)",
        // "--color-purple-700": "color(display-p3 0.7725 0.5959 0.8837)",
        // "--color-purple-800": "color(display-p3 0.8519 0.7387 0.9264)",
        // "--color-purple-900": "color(display-p3 0.9268 0.8726 0.9636)",
        // "--color-purple-950": "color(display-p3 0.9634 0.9368 0.9818)",
        // "--color-pink-50": "color(display-p3 0.0607 0.0091 0.0396)",
        // "--color-pink-100": "color(display-p3 0.1338 0.0298 0.0993)",
        // "--color-pink-200": "color(display-p3 0.2612 0.0861 0.2036)",
        // "--color-pink-300": "color(display-p3 0.3922 0.1460 0.3110)",
        // "--color-pink-400": "color(display-p3 0.5311 0.2134 0.4257)",
        // "--color-pink-500": "color(display-p3 0.6710 0.2960 0.5443)",
        // "--color-pink-600": "color(display-p3 0.7919 0.4098 0.6571)",
        // "--color-pink-700": "color(display-p3 0.8606 0.5695 0.7495)",
        // "--color-pink-800": "color(display-p3 0.9098 0.7248 0.8346)",
        // "--color-pink-900": "color(display-p3 0.9547 0.8671 0.9174)",
        // "--color-pink-950": "color(display-p3 0.9771 0.9343 0.9585)",
        // "--color-red-50": "color(display-p3 0.0648 0.0109 0.0150)",
        // "--color-red-100": "color(display-p3 0.1405 0.0353 0.0482)",
        // "--color-red-200": "color(display-p3 0.2724 0.0964 0.1180)",
        // "--color-red-300": "color(display-p3 0.4081 0.1603 0.1905)",
        // "--color-red-400": "color(display-p3 0.5521 0.2313 0.2696)",
        // "--color-red-500": "color(display-p3 0.6974 0.3152 0.3580)",
        // "--color-red-600": "color(display-p3 0.8166 0.4313 0.4663)",
        // "--color-red-700": "color(display-p3 0.8825 0.5833 0.6012)",
        // "--color-red-800": "color(display-p3 0.9253 0.7328 0.7401)",
        // "--color-red-900": "color(display-p3 0.9625 0.8708 0.8729)",
        // "--color-red-950": "color(display-p3 0.9810 0.9361 0.9369)",
        // "--color-orange-50": "color(display-p3 0.0562 0.0173 0.0062)",
        // "--color-orange-100": "color(display-p3 0.1266 0.0544 0.0201)",
        // "--color-orange-200": "color(display-p3 0.2492 0.1284 0.0649)",
        // "--color-orange-300": "color(display-p3 0.3755 0.2051 0.1154)",
        // "--color-orange-400": "color(display-p3 0.5106 0.2882 0.1713)",
        // "--color-orange-500": "color(display-p3 0.6509 0.3789 0.2364)",
        // "--color-orange-600": "color(display-p3 0.7836 0.4811 0.3237)",
        // "--color-orange-700": "color(display-p3 0.8749 0.6080 0.4705)",
        // "--color-orange-800": "color(display-p3 0.9248 0.7464 0.6545)",
        // "--color-orange-900": "color(display-p3 0.9628 0.8771 0.8329)",
        // "--color-orange-950": "color(display-p3 0.9812 0.9392 0.9175)",
        // "--color-gold-50": "color(display-p3 0.0432 0.0240 0.0057)",
        // "--color-gold-100": "color(display-p3 0.1053 0.0705 0.0187)",
        // "--color-gold-200": "color(display-p3 0.2137 0.1554 0.0613)",
        // "--color-gold-300": "color(display-p3 0.3254 0.2430 0.1101)",
        // "--color-gold-400": "color(display-p3 0.4454 0.3375 0.1634)",
        // "--color-gold-500": "color(display-p3 0.5723 0.4381 0.2222)",
        // "--color-gold-600": "color(display-p3 0.7014 0.5430 0.2893)",
        // "--color-gold-700": "color(display-p3 0.8234 0.6513 0.3792)",
        // "--color-gold-800": "color(display-p3 0.9128 0.7672 0.5423)",
        // "--color-gold-900": "color(display-p3 0.9610 0.8868 0.7735)",
        // "--color-gold-950": "color(display-p3 0.9806 0.9441 0.8884)",
        // "--color-yellow-50": "color(display-p3 0.0317 0.0292 0.0062)",
        // "--color-yellow-100": "color(display-p3 0.0857 0.0811 0.0202)",
        // "--color-yellow-200": "color(display-p3 0.1808 0.1731 0.0650)",
        // "--color-yellow-300": "color(display-p3 0.2790 0.2681 0.1154)",
        // "--color-yellow-400": "color(display-p3 0.3846 0.3704 0.1703)",
        // "--color-yellow-500": "color(display-p3 0.4966 0.4790 0.2302)",
        // "--color-yellow-600": "color(display-p3 0.6120 0.5913 0.2960)",
        // "--color-yellow-700": "color(display-p3 0.7269 0.7039 0.3714)",
        // "--color-yellow-800": "color(display-p3 0.8359 0.8134 0.4745)",
        // "--color-yellow-900": "color(display-p3 0.9266 0.9144 0.6869)",
        // "--color-yellow-950": "color(display-p3 0.9642 0.9592 0.8379)",
        // "--color-green-50": "color(display-p3 0.0185 0.0348 0.0093)",
        // "--color-green-100": "color(display-p3 0.0575 0.0913 0.0301)",
        // "--color-green-200": "color(display-p3 0.1336 0.1903 0.0866)",
        // "--color-green-300": "color(display-p3 0.2123 0.2923 0.1459)",
        // "--color-green-400": "color(display-p3 0.2972 0.4021 0.2103)",
        // "--color-green-500": "color(display-p3 0.3879 0.5184 0.2800)",
        // "--color-green-600": "color(display-p3 0.4830 0.6381 0.3553)",
        // "--color-green-700": "color(display-p3 0.5815 0.7567 0.4386)",
        // "--color-green-800": "color(display-p3 0.6873 0.8676 0.5435)",
        // "--color-green-900": "color(display-p3 0.8305 0.9488 0.7422)",
        // "--color-green-950": "color(display-p3 0.9170 0.9748 0.8755)",
        // "--color-aqua-50": "color(display-p3 0.0114 0.0360 0.0221)",
        // "--color-aqua-100": "color(display-p3 0.0371 0.0934 0.0663)",
        // "--color-aqua-200": "color(display-p3 0.0994 0.1937 0.1483)",
        // "--color-aqua-300": "color(display-p3 0.1640 0.2972 0.2330)",
        // "--color-aqua-400": "color(display-p3 0.2339 0.4085 0.3242)",
        // "--color-aqua-500": "color(display-p3 0.3092 0.5265 0.4215)",
        // "--color-aqua-600": "color(display-p3 0.3894 0.6479 0.5226)",
        // "--color-aqua-700": "color(display-p3 0.4760 0.7681 0.6256)",
        // "--color-aqua-800": "color(display-p3 0.5800 0.8800 0.7312)",
        // "--color-aqua-900": "color(display-p3 0.7644 0.9581 0.8564)",
        // "--color-aqua-950": "color(display-p3 0.8855 0.9799 0.9285)",
        // "--color-teal-50": "color(display-p3 0.0098 0.0346 0.0351)",
        // "--color-teal-100": "color(display-p3 0.0320 0.0910 0.0918)",
        // "--color-teal-200": "color(display-p3 0.0902 0.1897 0.1910)",
        // "--color-teal-300": "color(display-p3 0.1508 0.2915 0.2934)",
        // "--color-teal-400": "color(display-p3 0.2166 0.4011 0.4035)",
        // "--color-teal-500": "color(display-p3 0.2876 0.5173 0.5202)",
        // "--color-teal-600": "color(display-p3 0.3636 0.6369 0.6404)",
        // "--color-teal-700": "color(display-p3 0.4475 0.7556 0.7593)",
        // "--color-teal-800": "color(display-p3 0.5582 0.8655 0.8685)",
        // "--color-teal-900": "color(display-p3 0.7606 0.9456 0.9456)",
        // "--color-teal-950": "color(display-p3 0.8857 0.9728 0.9721)",
        // "--color-sky-50": "color(display-p3 0.0093 0.0324 0.0491)",
        // "--color-sky-100": "color(display-p3 0.0302 0.0871 0.1148)",
        // "--color-sky-200": "color(display-p3 0.0868 0.1831 0.2296)",
        // "--color-sky-300": "color(display-p3 0.1462 0.2823 0.3479)",
        // "--color-sky-400": "color(display-p3 0.2107 0.3889 0.4749)",
        // "--color-sky-500": "color(display-p3 0.2810 0.5020 0.6089)",
        // "--color-sky-600": "color(display-p3 0.3601 0.6183 0.7437)",
        // "--color-sky-700": "color(display-p3 0.4634 0.7320 0.8642)",
        // "--color-sky-800": "color(display-p3 0.6257 0.8331 0.9378)",
        // "--color-sky-900": "color(display-p3 0.8172 0.9198 0.9724)",
        // "--color-sky-950": "color(display-p3 0.9098 0.9603 0.9862)",
        "--color-night-50": "color(display-p3 0.0214 0.0282 0.0410)",
        "--color-night-100": "color(display-p3 0.0645 0.0790 0.1016)",
        "--color-night-200": "color(display-p3 0.1456 0.1697 0.2072)",
        "--color-night-300": "color(display-p3 0.2297 0.2632 0.3153)",
        "--color-night-400": "color(display-p3 0.3213 0.3638 0.4298)",
        "--color-night-500": "color(display-p3 0.4213 0.4706 0.5471)",
        "--color-night-600": "color(display-p3 0.5299 0.5807 0.6592)",
        "--color-night-700": "color(display-p3 0.6461 0.6905 0.7590)",
        "--color-night-800": "color(display-p3 0.7654 0.7974 0.8465)",
        "--color-night-900": "color(display-p3 0.8836 0.9000 0.9253)",
        "--color-night-950": "color(display-p3 0.9418 0.9501 0.9628)",
        // "--color-earth-50": "color(display-p3 0.0334 0.0265 0.0177)",
        // "--color-earth-100": "color(display-p3 0.0889 0.0757 0.0555)",
        // "--color-earth-200": "color(display-p3 0.1861 0.1641 0.1306)",
        // "--color-earth-300": "color(display-p3 0.2860 0.2555 0.2088)",
        // "--color-earth-400": "color(display-p3 0.3929 0.3540 0.2945)",
        // "--color-earth-500": "color(display-p3 0.5050 0.4590 0.3887)",
        // "--color-earth-600": "color(display-p3 0.6180 0.5682 0.4923)",
        // "--color-earth-700": "color(display-p3 0.7263 0.6790 0.6067)",
        // "--color-earth-800": "color(display-p3 0.8252 0.7887 0.7330)",
        // "--color-earth-900": "color(display-p3 0.9146 0.8956 0.8664)",
        // "--color-earth-950": "color(display-p3 0.9575 0.9479 0.9332)",
        // "--color-grey-50": "color(display-p3 0.0276 0.0276 0.0276)",
        // "--color-grey-100": "color(display-p3 0.0778 0.0778 0.0778)",
        // "--color-grey-200": "color(display-p3 0.1676 0.1676 0.1676)",
        // "--color-grey-300": "color(display-p3 0.2603 0.2603 0.2603)",
        // "--color-grey-400": "color(display-p3 0.3601 0.3601 0.3601)",
        // "--color-grey-500": "color(display-p3 0.4661 0.4661 0.4661)",
        // "--color-grey-600": "color(display-p3 0.5758 0.5758 0.5758)",
        // "--color-grey-700": "color(display-p3 0.6859 0.6859 0.6859)",
        // "--color-grey-800": "color(display-p3 0.7938 0.7938 0.7938)",
        // "--color-grey-900": "color(display-p3 0.8981 0.8981 0.8981)",
        // "--color-grey-950": "color(display-p3 0.9491 0.9491 0.9491)",
      },

      "--background-color-medium": "var(--color-night-100)",
      "--background-color-light": "var(--color-night-200)",
      "--bg-color": "var(--color-night-50)",
      "--bg-color-alternate": "var(--color-night-100)",

      "--foreground-color-dark": "var(--color-night-500)",
      "--foreground-color-medium": "var(--color-night-700)",
      "--fg-color": "var(--color-night-950)",
      "--foreground-color-link": "var(--fg-color)",

      "--highlight-color": "var(--color-sky-500)",
      "--highlight-color-2": "var(--color-violet-500)",

      "--horizontal-padding": "3rem",
      "--vertical-padding": "1.5rem",

      "@media screen and (max-width: 768px)": {
        "--horizontal-padding": "1.5rem",
      },
    },

    /* Reset */
    "*": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
      textDecoration: "none",
      lineHeight: "150%",
    },

    "html, body": {
      width: "100%",
      minHeight: "100%",
      fontFamily: "var(--font-family-body)",
      color: "var(--fg-color)",
      backgroundColor: "var(--bg-color)",
    },

    "a:link, a:visited, a:active, a:hover": {
      color: "var(--foreground-color-link)",
    },
  },
};
