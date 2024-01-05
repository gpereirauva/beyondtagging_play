// use https://svg2p5.com/ to convert
// then https://arraytext.com/ to make array

let timer = 0;
let turn = 0; 
let array = ["beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "endShape()", "beginShape();", "vertex(69,522);", "vertex(69,521);", "endShape()", "beginShape();", "vertex(69,521);", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "endShape()", "beginShape();", "vertex(69,520);", "vertex(70,520);", "endShape()", "beginShape();", "vertex(70,520);", "vertex(71,520);", "endShape()", "beginShape();", "vertex(71,520);", "endShape()", "beginShape();", "vertex(71,520);", "endShape()", "beginShape();", "vertex(71,520);", "vertex(73,520);", "endShape()", "beginShape();", "vertex(73,520);", "vertex(76,519);", "endShape()", "beginShape();", "vertex(76,519);", "vertex(84,514);", "endShape()", "beginShape();", "vertex(84,514);", "vertex(94,507);", "endShape()", "beginShape();", "vertex(94,507);", "vertex(106,497);", "endShape()", "beginShape();", "vertex(106,497);", "vertex(112,493);", "endShape()", "beginShape();", "vertex(112,493);", "vertex(123,490);", "endShape()", "beginShape();", "vertex(123,490);", "vertex(149,483);", "endShape()", "beginShape();", "vertex(149,483);", "vertex(160,481);", "endShape()", "beginShape();", "vertex(160,481);", "endShape()", "beginShape();", "vertex(160,481);", "vertex(170,481);", "endShape()", "beginShape();", "vertex(170,481);", "vertex(198,482);", "endShape()", "beginShape();", "vertex(198,482);", "vertex(221,476);", "endShape()", "beginShape();", "vertex(221,476);", "vertex(245,442);", "endShape()", "beginShape();", "vertex(245,442);", "vertex(256,393);", "endShape()", "beginShape();", "vertex(256,393);", "vertex(254,360);", "endShape()", "beginShape();", "vertex(254,360);", "vertex(221,337);", "endShape()", "beginShape();", "vertex(221,337);", "vertex(193,335);", "endShape()", "beginShape();", "vertex(193,335);", "vertex(178,356);", "endShape()", "beginShape();", "vertex(178,356);", "vertex(162,383);", "endShape()", "beginShape();", "vertex(162,383);", "vertex(155,417);", "endShape()", "beginShape();", "vertex(155,417);", "vertex(160,439);", "endShape()", "beginShape();", "vertex(160,439);", "vertex(171,455);", "endShape()", "beginShape();", "vertex(171,455);", "vertex(180,465);", "endShape()", "beginShape();", "vertex(180,465);", "vertex(184,468);", "endShape()", "beginShape();", "vertex(184,468);", "vertex(190,470);", "endShape()", "beginShape();", "vertex(190,470);", "vertex(193,470);", "endShape()", "beginShape();", "vertex(193,470);", "vertex(192,470);", "endShape()", "beginShape();", "vertex(192,470);", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "endShape()", "beginShape();", "vertex(189,469);", "vertex(190,468);", "endShape()", "beginShape();", "vertex(190,468);", "vertex(199,463);", "endShape()", "beginShape();", "vertex(199,463);", "vertex(207,457);", "endShape()", "beginShape();", "vertex(207,457);", "vertex(213,451);", "endShape()", "beginShape();", "vertex(213,451);", "vertex(223,442);", "endShape()", "beginShape();", "vertex(223,442);", "vertex(240,426);", "endShape()", "beginShape();", "vertex(240,426);", "vertex(246,420);", "endShape()", "beginShape();", "vertex(246,420);", "endShape()", "beginShape();", "vertex(246,420);", "endShape()", "beginShape();", "vertex(246,420);", "endShape()", "beginShape();", "vertex(246,420);", "vertex(246,417);", "endShape()", "beginShape();", "vertex(246,417);", "vertex(255,392);", "endShape()", "beginShape();", "vertex(255,392);", "vertex(270,372);", "endShape()", "beginShape();", "vertex(270,372);", "vertex(281,357);", "endShape()", "beginShape();", "vertex(281,357);", "endShape()", "beginShape();", "vertex(281,357);", "endShape()", "beginShape();", "vertex(281,357);", "endShape()", "beginShape();", "vertex(281,357);", "vertex(313,338);", "endShape()", "beginShape();", "vertex(313,338);", "vertex(340,323);", "endShape()", "beginShape();", "vertex(340,323);", "vertex(379,315);", "endShape()", "beginShape();", "vertex(379,315);", "vertex(421,314);", "endShape()", "beginShape();", "vertex(421,314);", "vertex(464,320);", "endShape()", "beginShape();", "vertex(464,320);", "vertex(467,324);", "endShape()", "beginShape();", "vertex(467,324);", "endShape()", "beginShape();", "vertex(467,324);", "vertex(482,324);", "endShape()", "beginShape();", "vertex(482,324);", "vertex(534,327);", "endShape()", "beginShape();", "vertex(534,327);", "vertex(572,331);", "endShape()", "beginShape();", "vertex(572,331);", "vertex(610,338);", "endShape()", "beginShape();", "vertex(610,338);", "vertex(640,348);", "endShape()", "beginShape();", "vertex(640,348);", "vertex(662,365);", "endShape()", "beginShape();", "vertex(662,365);", "vertex(674,387);", "endShape()", "beginShape();", "vertex(674,387);", "vertex(677,396);", "endShape()", "beginShape();", "vertex(677,396);", "endShape()", "beginShape();", "vertex(677,396);", "endShape()", "beginShape();", "vertex(677,396);", "vertex(687,412);", "endShape()", "beginShape();", "vertex(687,412);", "vertex(692,423);", "endShape()", "beginShape();", "vertex(692,423);", "vertex(692,430);", "endShape()", "beginShape();", "vertex(692,430);", "vertex(692,434);", "endShape()", "beginShape();", "vertex(692,434);", "vertex(691,438);", "endShape()", "beginShape();", "vertex(691,438);", "vertex(686,444);", "endShape()", "beginShape();", "vertex(686,444);", "vertex(679,449);", "endShape()", "beginShape();", "vertex(679,449);", "vertex(676,453);", "endShape()", "beginShape();", "vertex(676,453);", "vertex(674,455);", "endShape()", "beginShape();", "vertex(674,455);", "vertex(671,460);", "endShape()", "beginShape();", "vertex(671,460);", "vertex(669,462);", "endShape()", "beginShape();", "vertex(669,462);", "vertex(668,463);", "endShape()", "beginShape();", "vertex(668,463);", "vertex(663,465);", "endShape()", "beginShape();", "vertex(663,465);", "vertex(638,473);", "endShape()", "beginShape();", "vertex(638,473);", "vertex(604,480);", "endShape()", "beginShape();", "vertex(604,480);", "vertex(584,484);", "endShape()", "beginShape();", "vertex(584,484);", "vertex(572,486);", "endShape()", "beginShape();", "vertex(572,486);", "endShape()", "beginShape();", "vertex(572,486);", "endShape()", "beginShape();", "vertex(572,486);", "vertex(526,492);", "endShape()", "beginShape();", "vertex(526,492);", "vertex(440,501);", "endShape()", "beginShape();", "vertex(440,501);", "vertex(423,502);", "endShape()", "beginShape();", "vertex(423,502);", "vertex(414,502);", "endShape()", "beginShape();", "vertex(414,502);", "vertex(404,501);", "endShape()", "beginShape();", "vertex(404,501);", "vertex(403,501);", "endShape()", "beginShape();", "vertex(403,501);", "endShape()", "beginShape();", "vertex(403,501);", "endShape()", "beginShape();", "vertex(403,501);", "endShape()", "beginShape();", "vertex(403,501);", "vertex(397,500);", "endShape()", "beginShape();", "vertex(397,500);", "vertex(386,496);", "endShape()", "beginShape();", "vertex(386,496);", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "endShape()", "beginShape();", "vertex(381,495);", "vertex(383,491);", "endShape()", "beginShape();", "vertex(383,491);", "vertex(429,471);", "endShape()", "beginShape();", "vertex(429,471);", "vertex(501,465);", "endShape()", "beginShape();", "vertex(501,465);", "vertex(540,473);", "endShape()", "beginShape();", "vertex(540,473);", "vertex(564,482);", "endShape()", "beginShape();", "vertex(564,482);", "vertex(571,485);", "endShape()", "beginShape();", "vertex(571,485);", "vertex(568,485);", "endShape()", "beginShape();", "vertex(568,485);", "vertex(474,473);", "endShape()", "beginShape();", "vertex(474,473);", "vertex(492,441);", "endShape()", "beginShape();", "vertex(492,441);", "vertex(566,463);", "endShape()", "beginShape();", "vertex(566,463);", "vertex(496,487);", "endShape()", "beginShape();", "vertex(496,487);", "vertex(360,447);", "endShape()", "beginShape();", "vertex(360,447);", "vertex(315,442);", "endShape()", "beginShape();", "vertex(315,442);", "vertex(307,442);", "endShape()", "beginShape();", "vertex(307,442);", "vertex(306,442);", "endShape()", "beginShape();", "vertex(306,442);", "endShape()", "beginShape();", "vertex(306,442);", "endShape()", "beginShape();", "vertex(306,442);", "endShape()", "beginShape();", "vertex(306,442);", "vertex(304,443);", "endShape()", "beginShape();", "vertex(304,443);", "vertex(304,446);", "endShape()", "beginShape();", "vertex(304,446);", "vertex(315,452);", "endShape()", "beginShape();", "vertex(315,452);", "vertex(328,462);", "endShape()", "beginShape();", "vertex(328,462);", "vertex(330,463);", "endShape()", "beginShape();", "vertex(330,463);", "vertex(326,462);", "endShape()", "beginShape();", "vertex(326,462);", "vertex(324,449);", "endShape()", "beginShape();", "vertex(324,449);", "vertex(439,394);", "endShape()", "beginShape();", "vertex(439,394);", "vertex(513,431);", "endShape()", "beginShape();", "vertex(513,431);", "vertex(514,442);", "endShape()", "beginShape();", "vertex(514,442);", "vertex(451,470);", "endShape()", "beginShape();", "vertex(451,470);", "vertex(378,480);", "endShape()", "beginShape();", "vertex(378,480);", "vertex(368,477);", "endShape()", "beginShape();", "vertex(368,477);", "endShape()", "beginShape();", "vertex(368,477);", "endShape()", "beginShape();", "vertex(368,477);", "endShape()", "beginShape();", "vertex(368,477);", "vertex(363,470);", "endShape()", "beginShape();", "vertex(363,470);", "vertex(355,463);", "endShape()", "beginShape();", "vertex(355,463);", "vertex(353,462);", "endShape()", "beginShape();", "vertex(353,462);", "vertex(338,462);", "endShape()", "beginShape();", "vertex(338,462);", "vertex(240,449);", "endShape()", "beginShape();", "vertex(240,449);", "vertex(207,436);", "endShape()", "beginShape();", "vertex(207,436);", "vertex(199,431);", "endShape()", "beginShape();", "vertex(199,431);", "vertex(191,426);", "endShape()", "beginShape();", "vertex(191,426);", "vertex(177,405);", "endShape()", "beginShape();", "vertex(177,405);", "vertex(178,368);", "endShape()", "beginShape();", "vertex(178,368);", "vertex(192,363);", "endShape()", "beginShape();", "vertex(192,363);", "vertex(210,362);", "endShape()", "beginShape();", "vertex(210,362);", "vertex(235,374);", "endShape()", "beginShape();", "vertex(235,374);", "vertex(258,405);", "endShape()", "beginShape();", "vertex(258,405);", "vertex(260,423);", "endShape()", "beginShape();", "vertex(260,423);", "vertex(250,433);", "endShape()", "beginShape();", "vertex(250,433);", "vertex(230,437);", "endShape()", "beginShape();", "vertex(230,437);", "vertex(204,425);", "endShape()", "beginShape();", "vertex(204,425);", "vertex(197,411);", "endShape()", "beginShape();", "vertex(197,411);", "vertex(199,378);", "endShape()", "beginShape();", "vertex(199,378);", "vertex(227,345);", "endShape()", "beginShape();", "vertex(227,345);", "vertex(395,332);", "endShape()", "beginShape();", "vertex(395,332);", "vertex(460,352);", "endShape()", "beginShape();", "vertex(460,352);", "vertex(468,357);", "endShape()", "beginShape();", "vertex(468,357);", "endShape()", "beginShape();", "vertex(468,357);", "vertex(502,355);", "endShape()", "beginShape();", "vertex(502,355);", "vertex(665,390);", "endShape()", "beginShape();", "vertex(665,390);", "vertex(673,400);", "endShape()", "beginShape();", "vertex(673,400);", "vertex(539,452);", "endShape()", "beginShape();", "vertex(539,452);", "vertex(503,455);", "endShape()", "beginShape();", "vertex(503,455);", "endShape()", "beginShape();", "vertex(503,455);", "endShape()", "beginShape();", "vertex(503,455);", "endShape()", "beginShape();", "vertex(503,455);", "vertex(424,438);", "endShape()", "beginShape();", "vertex(424,438);", "vertex(200,312);", "endShape()", "beginShape();", "vertex(200,312);", "vertex(188,304);", "endShape()", "beginShape();", "vertex(188,304);", "vertex(167,311);", "endShape()", "beginShape();", "vertex(167,311);", "vertex(142,319);", "endShape()", "beginShape();", "vertex(142,319);", "vertex(140,321);", "endShape()", "beginShape();", "vertex(140,321);", "endShape()", "beginShape();", "vertex(140,321);", "vertex(130,312);", "endShape()", "beginShape();", "vertex(130,312);", "vertex(47,191);", "endShape()", "beginShape();", "vertex(47,191);", "vertex(46,188);", "endShape()", "beginShape();", "vertex(46,188);", "endShape()", "beginShape();", "vertex(46,188);", "endShape()", "beginShape();", "vertex(46,188);", "vertex(46,186);", "endShape()", "beginShape();", "vertex(46,186);", "vertex(46,184);", "endShape()", "beginShape();", "vertex(46,184);", "vertex(44,177);", "endShape()", "beginShape();", "vertex(44,177);", "vertex(43,175);", "endShape()", "beginShape();", "vertex(43,175);", "vertex(53,178);", "endShape()", "beginShape();", "vertex(53,178);", "vertex(125,192);", "endShape()", "beginShape();", "vertex(125,192);", "vertex(317,223);", "endShape()", "beginShape();", "vertex(317,223);", "vertex(331,224);", "endShape()", "beginShape();", "vertex(331,224);", "endShape()", "beginShape();", "vertex(331,224);", "vertex(436,233);", "endShape()", "beginShape();", "vertex(436,233);", "vertex(459,236);", "endShape()", "beginShape();", "vertex(459,236);", "vertex(457,232);", "endShape()", "beginShape();", "vertex(457,232);", "vertex(671,170);", "endShape()", "beginShape();", "vertex(671,170);", "vertex(729,167);", "endShape()", "beginShape();", "vertex(729,167);", "endShape()", "beginShape();", "vertex(729,167);", "vertex(753,127);", "endShape()", "beginShape();", "vertex(753,127);", "vertex(761,72);", "endShape()", "beginShape();", "vertex(761,72);", "vertex(671,-6);", "endShape()", "beginShape();", "vertex(671,-6);", "endShape()", "beginShape();", "vertex(671,-6);", "vertex(318,33);", "endShape()", "beginShape();", "vertex(318,33);", "vertex(245,75);", "endShape()", "beginShape();", "vertex(245,75);", "vertex(197,84);", "endShape()", "beginShape();", "vertex(197,84);", "vertex(189,85);", "endShape()", "beginShape();", "vertex(189,85);", "endShape()", "beginShape();", "vertex(189,85);", "vertex(184,85);", "endShape()", "beginShape();", "vertex(184,85);", "vertex(120,125);", "endShape()", "beginShape();", "vertex(120,125);", "vertex(103,135);", "endShape()", "beginShape();", "vertex(103,135);", "endShape()", "beginShape();", "vertex(103,135);", "endShape()", "beginShape();", "vertex(103,135);", "endShape()", "beginShape();", "vertex(103,135);", "vertex(129,250);", "endShape()", "beginShape();", "vertex(129,250);", "vertex(147,291);", "endShape()", "beginShape();", "vertex(147,291);", "vertex(144,291);", "endShape()", "beginShape();", "vertex(144,291);", "vertex(142,289);", "endShape()", "beginShape();", "vertex(142,289);", "endShape()", "beginShape();", "vertex(142,289);", "endShape()", "beginShape();", "vertex(142,289);", "vertex(103,209);", "endShape()", "beginShape();", "vertex(103,209);", "vertex(75,96);", "endShape()", "beginShape();", "vertex(75,96);", "vertex(74,92);", "endShape()", "beginShape();", "vertex(74,92);", "vertex(69,74);", "endShape()", "beginShape();", "vertex(69,74);", "vertex(68,57);", "endShape()", "beginShape();", "vertex(68,57);", "vertex(151,-6);", "endShape()", "beginShape();", "vertex(151,-6);", "vertex(550,16);", "endShape()", "beginShape();", "vertex(550,16);", "vertex(700,105);", "endShape()", "beginShape();", "vertex(700,105);", "vertex(644,304);", "endShape()", "beginShape();", "vertex(644,304);", "vertex(576,320);", "endShape()", "beginShape();", "vertex(576,320);", "vertex(454,300);", "endShape()", "beginShape();", "vertex(454,300);", "vertex(355,256);", "endShape()", "beginShape();", "vertex(355,256);", "vertex(340,252);", "endShape()", "beginShape();", "vertex(340,252);", "endShape()", "beginShape();", "vertex(340,252);", "endShape()", "beginShape();", "vertex(340,252);", "endShape()", "beginShape();", "vertex(340,252);", "endShape()", "beginShape();", "vertex(340,252);", "vertex(341,252);", "endShape()", "beginShape();", "vertex(341,252);", "endShape()", "beginShape();", "vertex(341,252);", "vertex(342,252);", "endShape()", "beginShape();", "vertex(342,252);", "vertex(349,254);", "endShape()", "beginShape();", "vertex(349,254);", "vertex(437,280);", "endShape()", "beginShape();", "vertex(437,280);", "vertex(594,320);", "endShape()", "beginShape();", "vertex(594,320);", "vertex(601,323);", "endShape()", "beginShape();", "vertex(601,323);", "endShape()", "beginShape();", "vertex(601,323);", "vertex(631,325);", "endShape()", "beginShape();", "vertex(631,325);", "vertex(687,343);", "endShape()", "beginShape();", "vertex(687,343);", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "endShape()", "beginShape();", "vertex(688,343);", "vertex(689,345);", "endShape()", "beginShape();", "vertex(689,345);", "vertex(694,349);", "endShape()", "beginShape();", "vertex(694,349);", "vertex(702,360);", "endShape()", "beginShape();", "vertex(702,360);", "vertex(706,379);", "endShape()", "beginShape();", "vertex(706,379);", "vertex(689,388);", "endShape()", "beginShape();", "vertex(689,388);", "vertex(618,414);", "endShape()", "beginShape();", "vertex(618,414);", "vertex(584,423);", "endShape()", "beginShape();", "vertex(584,423);", "endShape()", "beginShape();", "vertex(584,423);", "endShape()", "beginShape();", "vertex(584,423);", "vertex(459,414);", "endShape()", "beginShape();", "vertex(459,414);", "vertex(202,350);", "endShape()", "beginShape();", "vertex(202,350);", "vertex(194,349);", "endShape()", "beginShape();", "vertex(194,349);", "vertex(191,351);", "endShape()", "beginShape();", "vertex(191,351);", "vertex(169,358);", "endShape()", "beginShape();", "vertex(169,358);", "vertex(160,361);", "endShape()", "beginShape();", "vertex(160,361);", "endShape()", "beginShape();", "vertex(160,361);", "endShape()", "beginShape();", "vertex(160,361);", "endShape()", "beginShape();", "vertex(160,361);", "vertex(149,361);", "endShape()", "beginShape();", "vertex(149,361);", "vertex(101,360);", "endShape()", "beginShape();", "vertex(101,360);", "vertex(98,361);", "endShape()", "beginShape();", "vertex(98,361);", "vertex(97,363);", "endShape()", "beginShape();", "vertex(97,363);", "vertex(98,381);", "endShape()", "beginShape();", "vertex(98,381);", "vertex(121,416);", "endShape()", "beginShape();", "vertex(121,416);", "vertex(161,434);", "endShape()", "beginShape();", "vertex(161,434);", "vertex(213,438);", "endShape()", "beginShape();", "vertex(213,438);", "vertex(256,434);", "endShape()", "beginShape();", "vertex(256,434);", "vertex(269,430);", "endShape()", "beginShape();", "vertex(269,430);", "endShape()", "beginShape();", "vertex(269,430);", "vertex(283,430);", "endShape()", "beginShape();", "vertex(283,430);", "vertex(367,432);", "endShape()", "beginShape();", "vertex(367,432);", "vertex(394,433);", "endShape()", "beginShape();", "vertex(394,433);", "vertex(396,431);", "endShape()", "beginShape();", "vertex(396,431);", "vertex(399,428);", "endShape()", "beginShape();", "vertex(399,428);", "vertex(505,380);", "endShape()", "beginShape();", "vertex(505,380);", "vertex(546,383);", "endShape()", "beginShape();", "vertex(546,383);", "endShape()", "beginShape();", "vertex(546,383);", "vertex(549,383);", "endShape()", "beginShape();", "vertex(549,383);", "vertex(659,405);", "endShape()", "beginShape();", "vertex(659,405);", "vertex(683,417);", "endShape()", "beginShape();", "vertex(683,417);", "vertex(336,449);", "endShape()", "beginShape();", "vertex(336,449);", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "endShape()", "beginShape();", "vertex(260,441);", "vertex(268,447);", "endShape()", "beginShape();", "vertex(268,447);", "vertex(287,458);", "endShape()", "beginShape();", "vertex(287,458);", "endShape()", "beginShape();", "vertex(287,458);", "vertex(273,457);", "endShape()", "beginShape();", "vertex(273,457);", "vertex(242,457);", "endShape()", "beginShape();", "vertex(242,457);", "vertex(233,455);", "endShape()", "beginShape();", "vertex(233,455);", "vertex(249,456);", "endShape()", "beginShape();", "vertex(249,456);", "vertex(295,482);", "endShape()", "beginShape();", "vertex(295,482);", "vertex(283,476);", "endShape()", "beginShape();", "vertex(283,476);", "vertex(241,442);", "endShape()", "beginShape();", "vertex(241,442);", "vertex(295,448);", "endShape()", "beginShape();", "vertex(295,448);", "vertex(300,451);", "endShape()", "beginShape();", "vertex(300,451);", "vertex(292,451);", "endShape()", "beginShape();", "vertex(292,451);", "vertex(291,450);", "endShape()", "beginShape();", "vertex(291,450);", "endShape()", "beginShape();", "vertex(291,450);", "vertex(292,451);", "endShape()", "beginShape();", "vertex(292,451);", "vertex(293,451);", "endShape()", "beginShape();", "vertex(293,451);", "endShape()", "beginShape();", "vertex(293,451);", "endShape()", "beginShape();", "vertex(293,451);", "endShape()", "beginShape();", "vertex(293,451);", "vertex(293,454);", "endShape()", "beginShape();", "vertex(293,454);", "vertex(283,513);", "endShape()", "beginShape();", "vertex(283,513);", "vertex(260,542);", "endShape()", "beginShape();", "vertex(260,542);", "vertex(244,559);", "endShape()", "beginShape();", "vertex(244,559);", "vertex(235,567);", "endShape()", "beginShape();", "vertex(235,567);", "vertex(219,550);", "endShape()", "beginShape();", "vertex(219,550);", "vertex(205,531);", "endShape()", "beginShape();", "vertex(205,531);", "vertex(194,516);", "endShape()"];
let result = array[0];

function preload(){
img = loadImage('img.jpg'); // Load the image
audio = loadSound('assets/withaudio.mp3');

}



function setup() {
  createCanvas(800, 500);
  stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(ROUND);
fill("rgba(0, 0, 0, 0)")
stroke("#C5BA8D")
strokeWeight(5)
strokeCap(ROUND);

  background(img);

audio.play();

  
}

function draw() {
  
  
    if (millis() >= 100+timer) {
      
      beginShape();
      turn++;
      
      if (array[turn] == "beginShape();"){
        turn++;
      }

      let result = array[turn].replace("vertex(",'');
      let result2 = result.replace(");",'');
      console.log("result 2 for" +  turn + " is = " + result2);
      result3 = result2.split(",");
      vertex(result3[0], result3[1]);
      turn++

      if (array[turn] == "endShape()"){
        endShape();
        turn++
      }
      else {
        let result = array[turn].replace("vertex(",'');
        let result2 = result.replace(");",'');
        console.log("result 2 for" +  turn + " is = " + result2);
        result3 = result2.split(",");
        vertex(result3[0], result3[1]);
        turn++

        endShape();
        turn++
      }
    
      if (array[turn] == "FINAL"){
      noLoop();
      }
      
      timer = millis();

    

    }

}

