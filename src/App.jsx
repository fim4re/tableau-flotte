import { useState, useMemo } from "react";

const RAW_DATA = [{"chariot":"ARCA9137","depot":"Maarif Central","batterie":null,"battery_cat":"zero","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0810","date_heure":"19/03/2026 02:11:39","position":"33.575003, -7.639948","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9261","depot":"Oasis","batterie":49.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0690","date_heure":"27/02/2026 13:12:29","position":"33.566990, -7.613738","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA315","depot":"Maarif extenssion","batterie":83.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1032","date_heure":"18/03/2026 14:00:23","position":"33.582140, -7.649947","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA318","depot":"Maarif extenssion","batterie":64.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1039","date_heure":"18/03/2026 19:08:37","position":"33.578378, -7.636918","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA309","depot":"Palmier Derb Ghelef","batterie":35.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1171","date_heure":"18/03/2026 17:50:55","position":"33.573013, -7.639080","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA317","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1177","date_heure":"19/03/2026 02:13:52","position":"33.575038, -7.639933","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA24","depot":"ANFA","batterie":17.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0805","date_heure":"18/03/2026 14:41:11","position":"33.579334, -7.646441","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9118","depot":"Maarif Central","batterie":34.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0818","date_heure":"18/03/2026 14:49:18","position":"33.575039, -7.640119","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9114","depot":"Maarif Central","batterie":3.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0808","date_heure":"19/03/2026 02:10:36","position":"33.574959, -7.640007","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9111","depot":"Maarif Central","batterie":3.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0813","date_heure":"17/03/2026 13:36:10","position":"33.583797, -7.632420","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9115","depot":"Maarif extenssion","batterie":46.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1035","date_heure":"05/03/2026 14:33:14","position":"33.575123, -7.639956","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9132","depot":"MAARIF","batterie":26.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0802","date_heure":"17/03/2026 08:44:55","position":"33.582005, -7.649927","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9193","depot":"Oasis","batterie":68.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12115-1-2-3","date_heure":"18/03/2026 15:05:00","position":"33.577068, -7.596057","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9179","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11120-1-2-3","date_heure":"18/03/2026 13:58:56","position":"33.565180, -7.626150","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9195","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12114-1-2-3","date_heure":"18/03/2026 14:57:58","position":"33.565148, -7.626105","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9131","depot":"ANFA","batterie":null,"battery_cat":"zero","status":null,"statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0801","date_heure":null,"position":null,"date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA314","depot":"Maarif extenssion","batterie":60.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0929","date_heure":"18/03/2026 14:11:08","position":"33.583230, -7.649020","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9275","depot":"Polo Hay Raja","batterie":47.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12116-2","date_heure":"18/03/2026 14:26:46","position":"33.565197, -7.626118","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9214","depot":"Polo Hay Raja","batterie":59.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM06101","date_heure":"18/03/2026 12:17:15","position":"33.566367, -7.617873","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9239","depot":"Hopitaux","batterie":100.0,"battery_cat":"cat1","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0681","date_heure":"17/03/2026 10:58:00","position":"33.576985, -7.596118","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9248","depot":"Hopitaux","batterie":59.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0683","date_heure":"18/03/2026 20:09:57","position":"33.571883, -7.632187","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9159","depot":"Maarif extenssion","batterie":36.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0930","date_heure":"08/03/2026 12:09:17","position":"33.576748, -7.641587","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9173","depot":"Maarif extenssion","batterie":46.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0944","date_heure":"10/03/2026 17:15:08","position":"33.581803, -7.660300","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9156","depot":"Maarif extenssion","batterie":24.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1037","date_heure":"19/03/2026 02:16:00","position":"33.575005, -7.639888","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9162","depot":"Maarif extenssion","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0940","date_heure":"04/02/2026 07:20:46","position":"33.582225, -7.649958","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9166","depot":"Maarif extenssion","batterie":59.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0922","date_heure":"17/03/2026 07:33:04","position":"33.582273, -7.649887","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9117","depot":"Maarif extenssion","batterie":68.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0924","date_heure":"17/03/2026 08:51:10","position":"33.582069, -7.650011","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9172","depot":"Maarif extenssion","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0943","date_heure":"16/02/2026 15:15:58","position":"33.575198, -7.639857","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9171","depot":"Maarif extenssion","batterie":90.0,"battery_cat":"cat2","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0925","date_heure":"17/03/2026 07:44:27","position":"33.582078, -7.649968","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA15","depot":"Maarif Central","batterie":46.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0820","date_heure":"18/03/2026 14:44:54","position":"33.575069, -7.639998","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9145","depot":"Maarif Central","batterie":11.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0816","date_heure":"11/03/2026 11:00:53","position":"33.585492, -7.630725","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9205","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11112-2","date_heure":"17/03/2026 14:27:02","position":"33.576980, -7.596038","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9181","depot":"Oasis","batterie":72.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11113-2","date_heure":"18/03/2026 13:57:03","position":"33.562650, -7.628243","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9182","depot":"Oasis","batterie":80.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12103","date_heure":"18/03/2026 13:55:51","position":"33.565170, -7.626282","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9217","depot":"Polo Hay Raja","batterie":64.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1297","date_heure":"12/02/2026 03:49:08","position":"33.576967, -7.596092","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9210","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12106","date_heure":"18/03/2026 14:06:37","position":"33.561635, -7.626395","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 16:00:00"},{"chariot":"ARCA9208","depot":"Polo Hay Raja","batterie":68.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0692","date_heure":"18/03/2026 19:11:46","position":"33.568430, -7.614150","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9197","depot":"Polo Hay Raja","batterie":43.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0693","date_heure":"14/03/2026 14:02:23","position":"33.567223, -7.613747","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9199","depot":"Polo Hay Raja","batterie":91.0,"battery_cat":"cat2","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0696","date_heure":"07/01/2026 06:50:39","position":"33.567103, -7.613753","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9196","depot":"Polo Hay Raja","batterie":63.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12102","date_heure":"18/03/2026 13:49:51","position":"33.563320, -7.626928","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9186","depot":"Oasis","batterie":64.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0689","date_heure":"18/03/2026 22:01:52","position":"33.568630, -7.615038","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9191","depot":"Oasis","batterie":83.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11119","date_heure":"18/03/2026 13:53:58","position":"33.564763, -7.626922","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9209","depot":"Oasis","batterie":92.0,"battery_cat":"cat2","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12117","date_heure":"18/03/2026 09:01:11","position":"33.556978, -7.643595","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9235","depot":"Palmier Derb Ghelef","batterie":79.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0749","date_heure":"19/01/2026 15:37:23","position":"33.576857, -7.596110","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9260","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1172","date_heure":"19/03/2026 02:09:08","position":"33.575088, -7.639902","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9225","depot":"Hopitaux","batterie":48.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0686","date_heure":"18/03/2026 20:10:42","position":"33.572478, -7.634928","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9231","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1065","date_heure":"14/03/2026 13:31:09","position":"33.572278, -7.640315","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9226","depot":"Palmier Derb Ghelef","batterie":70.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1173","date_heure":"18/03/2026 14:39:02","position":"33.572022, -7.632015","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9251","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1174","date_heure":"18/03/2026 20:05:21","position":"33.571882, -7.632102","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9247","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1176","date_heure":"06/02/2026 12:41:59","position":"33.572012, -7.630193","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9242","depot":"Palmier Derb Ghelef","batterie":63.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0685","date_heure":"18/03/2026 20:09:46","position":"33.571927, -7.632107","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9271","depot":"Palmier Derb Ghelef","batterie":86.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1163","date_heure":"18/03/2026 09:02:56","position":"33.582137, -7.650013","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9228","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1164","date_heure":"18/03/2026 20:06:11","position":"33.572313, -7.632152","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9227","depot":"Palmier Derb Ghelef","batterie":28.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1069","date_heure":"15/03/2026 19:59:45","position":"33.571953, -7.632115","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA311","depot":"Palmier Derb Ghelef","batterie":62.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0759","date_heure":"05/02/2026 13:44:53","position":"33.577005, -7.596122","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9220","depot":"Palmier Derb Ghelef","batterie":43.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0753","date_heure":"18/03/2026 13:45:16","position":"33.578280, -7.630195","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9070","depot":"Palmier Derb Ghelef","batterie":7.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1067","date_heure":"07/03/2026 13:26:57","position":"33.567912, -7.639562","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9245","depot":"Palmier Derb Ghelef","batterie":52.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11122","date_heure":"18/03/2026 20:08:41","position":"33.571887, -7.632115","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9139","depot":"Maarif Central","batterie":3.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0812","date_heure":"19/03/2026 02:15:49","position":"33.575378, -7.639753","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9212","depot":"Oasis","batterie":73.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1298","date_heure":"18/03/2026 14:35:08","position":"33.568390, -7.614187","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9244","depot":"Hopitaux","batterie":61.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0680","date_heure":"02/03/2026 10:44:10","position":"33.568707, -7.627957","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9241","depot":"Hopitaux","batterie":75.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0679","date_heure":"18/03/2026 14:40:20","position":"33.572617, -7.629313","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9238","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1170","date_heure":"16/03/2026 10:39:54","position":"33.574080, -7.635930","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9190","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12109","date_heure":"12/02/2026 13:09:11","position":"33.562375, -7.626848","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9257","depot":"Palmier Derb Ghelef","batterie":37.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0682","date_heure":"19/01/2026 10:09:40","position":"33.577005, -7.596258","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9234","depot":"Hopitaux","batterie":80.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0687","date_heure":"18/03/2026 13:48:44","position":"33.574607, -7.630105","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9255","depot":"Hopitaux","batterie":70.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0688","date_heure":"18/03/2026 17:47:49","position":"33.571877, -7.632233","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9254","depot":"Palmier Derb Ghelef","batterie":41.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0757","date_heure":"18/03/2026 16:38:36","position":"33.571963, -7.632087","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9250","depot":"Palmier Derb Ghelef","batterie":23.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0758","date_heure":"18/03/2026 20:02:49","position":"33.571887, -7.632128","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9240","depot":"Palmier Derb Ghelef","batterie":81.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0760","date_heure":"18/03/2026 13:57:20","position":"33.577447, -7.630652","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9170","depot":"Maarif extenssion","batterie":null,"battery_cat":"zero","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0923","date_heure":"28/01/2026 14:40:47","position":"33.582223, -7.649772","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9168","depot":"Maarif extenssion","batterie":61.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0927","date_heure":"18/03/2026 21:28:47","position":"33.576170, -7.640463","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9175","depot":"Maarif extenssion","batterie":54.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0946","date_heure":"19/03/2026 02:17:34","position":"33.575060, -7.639908","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9155","depot":"Maarif extenssion","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1036","date_heure":"18/03/2026 13:57:04","position":"33.581473, -7.649812","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9157","depot":"Maarif extenssion","batterie":50.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1038","date_heure":"19/03/2026 02:11:38","position":"33.575013, -7.639948","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9259","depot":"Palmier Derb Ghelef","batterie":34.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1066","date_heure":"18/03/2026 20:11:58","position":"33.573707, -7.640510","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9230","depot":"Palmier Derb Ghelef","batterie":55.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1068","date_heure":"18/03/2026 14:43:28","position":"33.572070, -7.631960","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9203","depot":"Oasis","batterie":79.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM11121","date_heure":"18/03/2026 13:54:25","position":"33.564027, -7.627175","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9202","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12123","date_heure":"18/03/2026 14:04:08","position":"33.565143, -7.626633","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9151","depot":"Maarif extenssion","batterie":34.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1034","date_heure":"19/03/2026 02:10:12","position":"33.574892, -7.640003","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9224","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0762","date_heure":"18/03/2026 20:03:47","position":"33.571868, -7.632163","date_debut":"2026-03-19 05:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9252","depot":"Palmier Derb Ghelef","batterie":94.0,"battery_cat":"cat2","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0761-2","date_heure":"19/03/2026 02:11:25","position":"33.575065, -7.640013","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9204","depot":"Oasis","batterie":55.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12107","date_heure":"17/03/2026 14:13:08","position":"33.577033, -7.596100","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9215","depot":"Polo Hay Raja","batterie":65.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0691","date_heure":"18/03/2026 19:24:23","position":"33.568870, -7.615107","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9223","depot":"Hopitaux","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0684","date_heure":"18/03/2026 14:43:34","position":"33.572805, -7.631382","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9233","depot":"Hopitaux","batterie":47.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0678","date_heure":"18/03/2026 12:21:31","position":"33.579098, -7.623748","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9200","depot":"Polo Hay Raja","batterie":79.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0694","date_heure":"18/03/2026 13:54:33","position":"33.566470, -7.616262","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9207","depot":"Polo Hay Raja","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM06100","date_heure":"18/03/2026 20:05:04","position":"33.550508, -7.545467","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9213","depot":"Polo Hay Raja","batterie":61.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0695","date_heure":"18/03/2026 19:21:45","position":"33.568547, -7.615348","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9176","depot":"Maarif extenssion","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0945","date_heure":"18/03/2026 13:44:51","position":"33.584343, -7.650247","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA302","depot":"Maarif extenssion","batterie":76.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0941","date_heure":"18/03/2026 13:46:48","position":"33.576475, -7.649837","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA300","depot":"Maarif extenssion","batterie":76.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1033","date_heure":"18/03/2026 12:47:30","position":"33.573507, -7.645268","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9154","depot":"Maarif extenssion","batterie":11.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1031","date_heure":"07/03/2026 05:53:37","position":"33.575077, -7.640038","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9160","depot":"Maarif extenssion","batterie":79.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1021","date_heure":"13/03/2026 08:39:22","position":"33.581445, -7.649700","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9164","depot":"Maarif extenssion","batterie":41.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1028","date_heure":"19/03/2026 02:13:52","position":"33.574950, -7.640032","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9150","depot":"Maarif Central","batterie":79.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0819","date_heure":"18/03/2026 13:10:33","position":"33.589063, -7.639840","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9134","depot":"Maarif Central","batterie":64.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0804","date_heure":"18/03/2026 20:46:34","position":"33.575230, -7.639828","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9133","depot":"Maarif Central","batterie":61.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0803","date_heure":"18/03/2026 13:18:26","position":"33.584033, -7.639853","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9146","depot":"Maarif Central","batterie":null,"battery_cat":"zero","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0817","date_heure":"19/03/2026 02:11:59","position":"33.574990, -7.639937","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9141","depot":"Maarif Central","batterie":59.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0814","date_heure":"10/03/2026 13:19:21","position":"33.586653, -7.638045","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9142","depot":"Maarif Central","batterie":94.0,"battery_cat":"cat2","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0809","date_heure":"17/03/2026 07:45:39","position":"33.582143, -7.650013","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9243","depot":"Palmier Derb Ghelef","batterie":40.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0752","date_heure":"18/03/2026 15:03:08","position":"33.577012, -7.596083","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9236","depot":"Palmier Derb Ghelef","batterie":36.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0747","date_heure":"18/03/2026 18:16:48","position":"33.583182, -7.622207","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9253","depot":"Palmier Derb Ghelef","batterie":81.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0748","date_heure":"18/03/2026 17:46:31","position":"33.571920, -7.632113","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9237","depot":"Palmier Derb Ghelef","batterie":null,"battery_cat":"zero","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0750","date_heure":"19/03/2026 02:15:13","position":"33.574895, -7.640000","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9249","depot":"Palmier Derb Ghelef","batterie":70.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0754","date_heure":"18/03/2026 17:46:46","position":"33.571930, -7.632110","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9258","depot":"Palmier Derb Ghelef","batterie":62.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0751","date_heure":"18/03/2026 17:52:31","position":"33.575253, -7.639655","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9222","depot":"Palmier Derb Ghelef","batterie":64.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0755","date_heure":"18/03/2026 17:48:45","position":"33.572583, -7.635057","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9229","depot":"Palmier Derb Ghelef","batterie":76.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0756","date_heure":"18/03/2026 16:38:48","position":"33.571917, -7.632085","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9178","depot":"Oasis","batterie":78.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12118","date_heure":"18/03/2026 14:05:18","position":"33.556928, -7.642178","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9216","depot":"Oasis","batterie":81.0,"battery_cat":"cat3","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12110","date_heure":"18/03/2026 14:18:16","position":"33.564485, -7.626552","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9206","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12111","date_heure":"18/03/2026 14:27:15","position":"33.565162, -7.626542","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9192","depot":"Oasis","batterie":60.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12108","date_heure":"18/03/2026 15:10:50","position":"33.576917, -7.596178","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9194","depot":"Polo Hay Raja","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1299","date_heure":"18/03/2026 18:53:30","position":"33.567843, -7.617397","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9180","depot":"Oasis","batterie":null,"battery_cat":"zero","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12104","date_heure":"18/03/2026 12:24:44","position":"33.558082, -7.613090","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9183","depot":"Oasis","batterie":57.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM12105","date_heure":"18/03/2026 13:48:52","position":"33.562818, -7.627032","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"},{"chariot":"ARCA9167","depot":"Maarif extenssion","batterie":53.0,"battery_cat":"cat4","status":"ACTIF EN MOUVEMENT","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0942","date_heure":"19/03/2026 02:12:52","position":"33.574937, -7.639945","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9246","depot":"Palmier Derb Ghelef","batterie":76.0,"battery_cat":"cat4","status":"INACTIF (+24h)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM1175","date_heure":"10/01/2026 08:35:50","position":"33.570108, -7.632440","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA25","depot":"ANFA","batterie":null,"battery_cat":"zero","status":null,"statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0815","date_heure":null,"position":null,"date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA312","depot":"Maarif Central","batterie":35.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0806","date_heure":"18/03/2026 13:52:54","position":"33.585767, -7.645805","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 14:00:00"},{"chariot":"ARCA9174","depot":"Maarif extenssion","batterie":79.0,"battery_cat":"cat4","status":"À L'ARRÊT (15 min)","statut":"En cours","taux_conformite":0.0,"circuit":"CABBM0926","date_heure":"18/03/2026 13:41:13","position":"33.584473, -7.650972","date_debut":"2026-03-19 06:00:00","date_fin":"2026-03-19 13:59:00"}];

const CAT_CONFIG = {
  cat1: { label: "95–100%", color: "#16a34a", bg: "#dcfce7", border: "#bbf7d0" },
  cat2: { label: "90–95%",  color: "#15803d", bg: "#d1fae5", border: "#6ee7b7" },
  cat3: { label: "80–90%",  color: "#d97706", bg: "#fef3c7", border: "#fde68a" },
  cat4: { label: "<80%",    color: "#dc2626", bg: "#fee2e2", border: "#fca5a5" },
  zero: { label: "0%",      color: "#6b7280", bg: "#f3f4f6", border: "#d1d5db" },
};

const CAT_LABELS = {
  cat1: "Excellente (95–100%)",
  cat2: "Bonne (90–95%)",
  cat3: "Correcte (80–90%)",
  cat4: "Faible (<80%)",
  zero: "N/A",
};

function timeAgo(dateStr) {
  if (!dateStr) return null;
  const [d, t] = dateStr.split(" ");
  const [day, month, year] = d.split("/");
  const dt = new Date(`${year}-${month}-${day}T${t}`);
  const now = new Date("2026-03-19T02:30:00");
  const diff = Math.floor((now - dt) / 60000);
  if (diff < 0) return "À l'instant";
  if (diff < 60) return `il y a ${diff} minute${diff > 1 ? "s" : ""}`;
  const h = Math.floor(diff / 60);
  if (h < 24) return `il y a ${h}h`;
  return `il y a ${Math.floor(h / 24)}j`;
}

function formatShift(debut, fin) {
  const start = debut?.split(" ")[1]?.slice(0, 5) || "—";
  const end = fin?.split(" ")[1]?.slice(0, 5) || "—";
  return `${start} – ${fin?.split(" ")[1]?.slice(0, 5) || "—"}`;
}

function StatusBadge({ status }) {
  if (!status) return <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 12, background: "#f3f4f6", color: "#6b7280" }}>Inconnu</span>;
  if (status.includes("MOUVEMENT"))
    return <span style={{ padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#dcfce7", color: "#15803d", border: "1px solid #86efac" }}>Actif</span>;
  if (status.includes("ARR"))
    return <span style={{ padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#fef3c7", color: "#d97706", border: "1px solid #fde68a" }}>À l'arrêt</span>;
  return <span style={{ padding: "3px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: "#fee2e2", color: "#dc2626", border: "1px solid #fca5a5" }}>Inactif</span>;
}

function BatteryBadge({ pct, cat }) {
  if (pct === null) return <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 12, background: "#f3f4f6", color: "#6b7280" }}>N/A</span>;
  const cfg = CAT_CONFIG[cat];
  return (
    <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700, background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}>
      {pct}%
    </span>
  );
}

function ChariotModal({ chariots, title, onClose }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={onClose}>
      <div style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 560, maxHeight: "85vh", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
        onClick={e => e.stopPropagation()}>
        {/* Modal header */}
        <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 2 }}>
            Balayage manuel — {title}
          </div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{chariots.length} chariot{chariots.length > 1 ? "s" : ""}</div>
        </div>

        {/* Scrollable chariot list */}
        <div style={{ overflowY: "auto", flex: 1, padding: "12px 16px" }}>
          {chariots.map((c, i) => (
            <div key={c.chariot} style={{
              background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
              padding: "14px 16px", marginBottom: i < chariots.length - 1 ? 10 : 0
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#111", fontFamily: "monospace" }}>{c.chariot}</span>
                <BatteryBadge pct={c.batterie} cat={c.battery_cat} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 3 }}>Statut</div>
                  <StatusBadge status={c.status} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 3 }}>Dépôt</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{c.depot}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 3 }}>Batterie</div>
                  <div style={{ fontSize: 13, color: "#374151" }}>{c.batterie !== null ? `${c.batterie}%` : "N/A"}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 3 }}>Activité</div>
                  <div style={{ fontSize: 13, color: "#374151" }}>{formatShift(c.date_debut, c.date_fin)}</div>
                </div>
              </div>
              {c.date_heure && (
                <div style={{ marginTop: 8, fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
                  <span>🕐</span> {timeAgo(c.date_heure)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "12px 24px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <button onClick={onClose} style={{ padding: "8px 20px", borderRadius: 8, border: "1px solid #d1d5db", background: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#374151" }}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, bg, borderColor }) {
  return (
    <div className="stat-card-inner" style={{ background: bg || "#f9fafb", border: `1px solid ${borderColor || "#e5e7eb"}`, borderRadius: 12, padding: "12px 10px", borderTop: `3px solid ${color}` }}>
      <div className="stat-label" style={{ fontSize: 10, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.4px", marginBottom: 5, lineHeight: 1.3 }}>{label}</div>
      <div className="stat-val" style={{ fontSize: 28, fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState(null); // { chariots, title }

  const depots = useMemo(() => [...new Set(RAW_DATA.map(d => d.depot))].sort(), []);

  const summary = useMemo(() => {
    const result = {};
    depots.forEach(dep => {
      const items = RAW_DATA.filter(d => d.depot === dep);
      result[dep] = {
        cat1: items.filter(d => d.battery_cat === "cat1"),
        cat2: items.filter(d => d.battery_cat === "cat2"),
        cat3: items.filter(d => d.battery_cat === "cat3"),
        cat4: items.filter(d => d.battery_cat === "cat4"),
        zero: items.filter(d => d.battery_cat === "zero"),
        all: items,
      };
    });
    return result;
  }, [depots]);

  const totals = useMemo(() => ({
    cat1: RAW_DATA.filter(d => d.battery_cat === "cat1"),
    cat2: RAW_DATA.filter(d => d.battery_cat === "cat2"),
    cat3: RAW_DATA.filter(d => d.battery_cat === "cat3"),
    cat4: RAW_DATA.filter(d => d.battery_cat === "cat4"),
    zero: RAW_DATA.filter(d => d.battery_cat === "zero"),
  }), []);

  const openModal = (chariots, label) => {
    if (chariots.length === 0) return;
    setModal({ chariots, title: label });
  };

  const CellBtn = ({ items, cat, depot }) => {
    if (!items || items.length === 0) return <span style={{ color: "#d1d5db" }}>—</span>;
    const cfg = CAT_CONFIG[cat];
    return (
      <button onClick={() => openModal(items, `${depot} — ${CAT_LABELS[cat]} (${items.length})`)}
        style={{ minWidth: 32, height: 32, padding: "0 10px", borderRadius: 8, border: `1px solid ${cfg.border}`, background: cfg.bg, color: cfg.color, fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "all 0.15s" }}
        onMouseEnter={e => { e.target.style.transform = "scale(1.08)"; e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)"; }}
        onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}>
        {items.length}
      </button>
    );
  };

  const TotalBtn = ({ items, depot }) => (
    <button onClick={() => openModal(items, `${depot} — Tous (${items.length})`)}
      style={{ minWidth: 32, height: 32, padding: "0 10px", borderRadius: 8, border: "1px solid #bfdbfe", background: "#eff6ff", color: "#1d4ed8", fontWeight: 800, fontSize: 14, cursor: "pointer", transition: "all 0.15s" }}
      onMouseEnter={e => { e.target.style.transform = "scale(1.08)"; e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}>
      {items.length}
    </button>
  );

  const thStyle = { padding: "10px 14px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "#6b7280", textAlign: "center", background: "#f9fafb", borderBottom: "2px solid #e5e7eb", whiteSpace: "nowrap" };
  const tdStyle = { padding: "11px 14px", textAlign: "center", borderBottom: "1px solid #f3f4f6" };

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* HEADER */}
      <div className="header-pad" style={{ background: "#111827", padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div>
          <div className="header-title" style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "0.5px" }}>⚡ Tableau de bord</div>
          <div className="header-subtitle" style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Surveillance en temps réel de la flotte</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#064e3b", border: "1px solid #10b981", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, color: "#10b981", textTransform: "uppercase" }}>
            <span style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", animation: "pulse 1.5s infinite", display: "inline-block" }} />
            En direct
          </div>
          <button style={{ background: "#1f2937", border: "1px solid #374151", color: "#e5e7eb", padding: "6px 14px", borderRadius: 8, fontSize: 13, cursor: "pointer" }}>
            ↺ Actualiser
          </button>
        </div>
      </div>

      <div className="main-pad" style={{ maxWidth: 1300, margin: "0 auto", padding: "20px 24px" }}>
        {/* STAT CARDS */}
        <div className="stat-grid">
          <StatCard label="Total chariots" value={RAW_DATA.length} color="#1d4ed8" bg="#eff6ff" borderColor="#bfdbfe" />
          <StatCard label="95–100%" value={totals.cat1.length} color="#16a34a" bg="#f0fdf4" borderColor="#bbf7d0" />
          <StatCard label="90–95%" value={totals.cat2.length} color="#15803d" bg="#dcfce7" borderColor="#86efac" />
          <StatCard label="80–90%" value={totals.cat3.length} color="#d97706" bg="#fffbeb" borderColor="#fde68a" />
          <StatCard label="<80%" value={totals.cat4.length} color="#dc2626" bg="#fff1f2" borderColor="#fca5a5" />
          <StatCard label="0% / N/A" value={totals.zero.length} color="#6b7280" bg="#f9fafb" borderColor="#e5e7eb" />
        </div>

        {/* SECTION TITLE */}
        <div className="section-row" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "1px", whiteSpace: "nowrap" }}>Résumé — Balayage manuel</span>
          <div style={{ flex: 1, height: 1, background: "#e5e7eb", minWidth: 10 }} />
          <span className="hint-text">Cliquer sur un nombre pour voir les détails</span>
        </div>

        {/* LEGEND */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
          {Object.entries(CAT_CONFIG).map(([k, v]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6b7280" }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: v.color }} />
              {v.label}
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6b7280" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: "#1d4ed8" }} />Total
          </div>
        </div>

        {/* TABLE */}
        <div className="table-scroll" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", marginBottom: 8 }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ ...thStyle, textAlign: "left", paddingLeft: 20 }}>🏛 Dépôt</th>
                <th style={{ ...thStyle, color: CAT_CONFIG.cat1.color }}>✅ 95–100%</th>
                <th style={{ ...thStyle, color: CAT_CONFIG.cat2.color }}>🟢 90–95%</th>
                <th style={{ ...thStyle, color: CAT_CONFIG.cat3.color }}>🟡 80–90%</th>
                <th style={{ ...thStyle, color: CAT_CONFIG.cat4.color }}>⚠ &lt;80%</th>
                <th style={{ ...thStyle, color: "#6b7280" }}>🔴 0%</th>
                <th style={{ ...thStyle, color: "#1d4ed8" }}>📊 Total</th>
              </tr>
            </thead>
            <tbody>
              {depots.map((dep, i) => {
                const d = summary[dep];
                return (
                  <tr key={dep} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ ...tdStyle, textAlign: "left", paddingLeft: 20, fontWeight: 600, fontSize: 13, color: "#111" }}>{dep}</td>
                    <td style={tdStyle}><CellBtn items={d.cat1} cat="cat1" depot={dep} /></td>
                    <td style={tdStyle}><CellBtn items={d.cat2} cat="cat2" depot={dep} /></td>
                    <td style={tdStyle}><CellBtn items={d.cat3} cat="cat3" depot={dep} /></td>
                    <td style={tdStyle}><CellBtn items={d.cat4} cat="cat4" depot={dep} /></td>
                    <td style={tdStyle}><CellBtn items={d.zero} cat="zero" depot={dep} /></td>
                    <td style={tdStyle}><TotalBtn items={d.all} depot={dep} /></td>
                  </tr>
                );
              })}
              {/* Totals row */}
              <tr style={{ background: "#f0f9ff", borderTop: "2px solid #bfdbfe" }}>
                <td style={{ ...tdStyle, textAlign: "left", paddingLeft: 20, fontWeight: 800, fontSize: 14, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "1px" }}>Somme</td>
                {["cat1","cat2","cat3","cat4","zero"].map(cat => (
                  <td key={cat} style={tdStyle}>
                    <button onClick={() => openModal(totals[cat], `Tous dépôts — ${CAT_LABELS[cat]} (${totals[cat].length})`)}
                      style={{ minWidth: 32, height: 32, padding: "0 10px", borderRadius: 8, border: `1px solid ${CAT_CONFIG[cat].border}`, background: CAT_CONFIG[cat].bg, color: CAT_CONFIG[cat].color, fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                      {totals[cat].length}
                    </button>
                  </td>
                ))}
                <td style={tdStyle}>
                  <button onClick={() => openModal(RAW_DATA, `Tous dépôts — Tous (${RAW_DATA.length})`)}
                    style={{ minWidth: 32, height: 32, padding: "0 10px", borderRadius: 8, border: "1px solid #bfdbfe", background: "#eff6ff", color: "#1d4ed8", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
                    {RAW_DATA.length}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", marginTop: 6 }}>
          Données au 19/03/2026 — 121 chariots en service
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <ChariotModal
          chariots={modal.chariots}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
        * { box-sizing: border-box; }
        button { font-family: inherit; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
        .stat-grid { display: grid; grid-template-columns: repeat(6,1fr); gap: 12px; margin-bottom: 20px; }
        .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; border-radius: 14px; }
        .table-scroll table { min-width: 520px; width: 100%; }
        .hint-text { font-size: 12px; color: #9ca3af; white-space: nowrap; }
        .section-row { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: nowrap; overflow: hidden; }
        @media (max-width: 900px) {
          .stat-grid { grid-template-columns: repeat(3,1fr); gap: 8px; }
          .hint-text { display: none; }
          .main-pad { padding: 14px 12px !important; }
          .header-pad { padding: 12px 14px !important; }
        }
        @media (max-width: 500px) {
          .stat-grid { grid-template-columns: repeat(3,1fr); gap: 6px; }
          .stat-val { font-size: 22px !important; }
          .stat-label { font-size: 9px !important; letter-spacing: 0 !important; }
          .stat-card-inner { padding: 10px 8px !important; }
          .header-title { font-size: 15px !important; }
          .header-subtitle { display: none; }
          .live-badge span.live-label { display: none; }
        }
      `}</style>
    </div>
  );
}
