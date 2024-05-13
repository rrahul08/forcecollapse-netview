import React, { useEffect, useState, useRef } from "react";
import G6 from "@antv/g6";

// const data = {
//     "nodes": [
//       {
//         "id": "Myriel"
//       },
//       {
//         "id": "Napoleon"
//       },
//       {
//         "id": "Mlle.Baptistine"
//       },
//       {
//         "id": "Mme.Magloire"
//       },
//       {
//         "id": "CountessdeLo"
//       },
//       {
//         "id": "Geborand"
//       },
//       {
//         "id": "Champtercier"
//       },
//       {
//         "id": "Cravatte"
//       },
//       {
//         "id": "Count"
//       },
//       {
//         "id": "OldMan"
//       },
//       {
//         "id": "Labarre"
//       },
//       {
//         "id": "Valjean"
//       },
//       {
//         "id": "Marguerite"
//       },
//       {
//         "id": "Mme.deR"
//       },
//       {
//         "id": "Isabeau"
//       },
//       {
//         "id": "Gervais"
//       },
//       {
//         "id": "Tholomyes"
//       },
//       {
//         "id": "Listolier"
//       },
//       {
//         "id": "Fameuil"
//       },
//       {
//         "id": "Blacheville"
//       },
//       {
//         "id": "Favourite"
//       },
//       {
//         "id": "Dahlia"
//       },
//       {
//         "id": "Zephine"
//       },
//       {
//         "id": "Fantine"
//       },
//       {
//         "id": "Mme.Thenardier"
//       },
//       {
//         "id": "Thenardier"
//       },
//       {
//         "id": "Cosette"
//       },
//       {
//         "id": "Javert"
//       },
//       {
//         "id": "Fauchelevent"
//       },
//       {
//         "id": "Bamatabois"
//       },
//       {
//         "id": "Perpetue"
//       },
//       {
//         "id": "Simplice"
//       },
//       {
//         "id": "Scaufflaire"
//       },
//       {
//         "id": "Woman1"
//       },
//       {
//         "id": "Judge"
//       },
//       {
//         "id": "Champmathieu"
//       },
//       {
//         "id": "Brevet"
//       },
//       {
//         "id": "Chenildieu"
//       },
//       {
//         "id": "Cochepaille"
//       },
//       {
//         "id": "Pontmercy"
//       },
//       {
//         "id": "Boulatruelle"
//       },
//       {
//         "id": "Eponine"
//       },
//       {
//         "id": "Anzelma"
//       },
//       {
//         "id": "Woman2"
//       },
//       {
//         "id": "MotherInnocent"
//       },
//       {
//         "id": "Gribier"
//       },
//       {
//         "id": "Jondrette"
//       },
//       {
//         "id": "Mme.Burgon"
//       },
//       {
//         "id": "Gavroche"
//       },
//       {
//         "id": "Gillenormand"
//       },
//       {
//         "id": "Magnon"
//       },
//       {
//         "id": "Mlle.Gillenormand"
//       },
//       {
//         "id": "Mme.Pontmercy"
//       },
//       {
//         "id": "Mlle.Vaubois"
//       },
//       {
//         "id": "Lt.Gillenormand"
//       },
//       {
//         "id": "Marius"
//       },
//       {
//         "id": "BaronessT"
//       },
//       {
//         "id": "Mabeuf"
//       },
//       {
//         "id": "Enjolras"
//       },
//       {
//         "id": "Combeferre"
//       },
//       {
//         "id": "Prouvaire"
//       },
//       {
//         "id": "Feuilly"
//       },
//       {
//         "id": "Courfeyrac"
//       },
//       {
//         "id": "Bahorel"
//       },
//       {
//         "id": "Bossuet"
//       },
//       {
//         "id": "Joly"
//       },
//       {
//         "id": "Grantaire"
//       },
//       {
//         "id": "MotherPlutarch"
//       },
//       {
//         "id": "Gueulemer"
//       },
//       {
//         "id": "Babet"
//       },
//       {
//         "id": "Claquesous"
//       },
//       {
//         "id": "Montparnasse"
//       },
//       {
//         "id": "Toussaint"
//       },
//       {
//         "id": "Child1"
//       },
//       {
//         "id": "Child2"
//       },
//       {
//         "id": "Brujon"
//       },
//       {
//         "id": "Mme.Hucheloup"
//       }
//     ],
//     "edges": [
//       {
//         "source": "Napoleon",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Mlle.Baptistine",
//         "target": "Myriel",
//         "value": 8
//       },
//       {
//         "source": "Mme.Magloire",
//         "target": "Myriel",
//         "value": 10
//       },
//       {
//         "source": "Mme.Magloire",
//         "target": "Mlle.Baptistine",
//         "value": 6
//       },
//       {
//         "source": "CountessdeLo",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Geborand",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Champtercier",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Cravatte",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Count",
//         "target": "Myriel",
//         "value": 2
//       },
//       {
//         "source": "OldMan",
//         "target": "Myriel",
//         "value": 1
//       },
//       {
//         "source": "Valjean",
//         "target": "Labarre",
//         "value": 1
//       },
//       {
//         "source": "Valjean",
//         "target": "Mme.Magloire",
//         "value": 3
//       },
//       {
//         "source": "Valjean",
//         "target": "Mlle.Baptistine",
//         "value": 3
//       },
//       {
//         "source": "Valjean",
//         "target": "Myriel",
//         "value": 5
//       },
//       {
//         "source": "Marguerite",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Mme.deR",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Isabeau",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Gervais",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Listolier",
//         "target": "Tholomyes",
//         "value": 4
//       },
//       {
//         "source": "Fameuil",
//         "target": "Tholomyes",
//         "value": 4
//       },
//       {
//         "source": "Fameuil",
//         "target": "Listolier",
//         "value": 4
//       },
//       {
//         "source": "Blacheville",
//         "target": "Tholomyes",
//         "value": 4
//       },
//       {
//         "source": "Blacheville",
//         "target": "Listolier",
//         "value": 4
//       },
//       {
//         "source": "Blacheville",
//         "target": "Fameuil",
//         "value": 4
//       },
//       {
//         "source": "Favourite",
//         "target": "Tholomyes",
//         "value": 3
//       },
//       {
//         "source": "Favourite",
//         "target": "Listolier",
//         "value": 3
//       },
//       {
//         "source": "Favourite",
//         "target": "Fameuil",
//         "value": 3
//       },
//       {
//         "source": "Favourite",
//         "target": "Blacheville",
//         "value": 4
//       },
//       {
//         "source": "Dahlia",
//         "target": "Tholomyes",
//         "value": 3
//       },
//       {
//         "source": "Dahlia",
//         "target": "Listolier",
//         "value": 3
//       },
//       {
//         "source": "Dahlia",
//         "target": "Fameuil",
//         "value": 3
//       },
//       {
//         "source": "Dahlia",
//         "target": "Blacheville",
//         "value": 3
//       },
//       {
//         "source": "Dahlia",
//         "target": "Favourite",
//         "value": 5
//       },
//       {
//         "source": "Zephine",
//         "target": "Tholomyes",
//         "value": 3
//       },
//       {
//         "source": "Zephine",
//         "target": "Listolier",
//         "value": 3
//       },
//       {
//         "source": "Zephine",
//         "target": "Fameuil",
//         "value": 3
//       },
//       {
//         "source": "Zephine",
//         "target": "Blacheville",
//         "value": 3
//       },
//       {
//         "source": "Zephine",
//         "target": "Favourite",
//         "value": 4
//       },
//       {
//         "source": "Zephine",
//         "target": "Dahlia",
//         "value": 4
//       },
//       {
//         "source": "Fantine",
//         "target": "Tholomyes",
//         "value": 3
//       },
//       {
//         "source": "Fantine",
//         "target": "Listolier",
//         "value": 3
//       },
//       {
//         "source": "Fantine",
//         "target": "Fameuil",
//         "value": 3
//       },
//       {
//         "source": "Fantine",
//         "target": "Blacheville",
//         "value": 3
//       },
//       {
//         "source": "Fantine",
//         "target": "Favourite",
//         "value": 4
//       },
//       {
//         "source": "Fantine",
//         "target": "Dahlia",
//         "value": 4
//       },
//       {
//         "source": "Fantine",
//         "target": "Zephine",
//         "value": 4
//       },
//       {
//         "source": "Fantine",
//         "target": "Marguerite",
//         "value": 2
//       },
//       {
//         "source": "Fantine",
//         "target": "Valjean",
//         "value": 9
//       },
//       {
//         "source": "Mme.Thenardier",
//         "target": "Fantine",
//         "value": 2
//       },
//       {
//         "source": "Mme.Thenardier",
//         "target": "Valjean",
//         "value": 7
//       },
//       {
//         "source": "Thenardier",
//         "target": "Mme.Thenardier",
//         "value": 13
//       },
//       {
//         "source": "Thenardier",
//         "target": "Fantine",
//         "value": 1
//       },
//       {
//         "source": "Thenardier",
//         "target": "Valjean",
//         "value": 12
//       },
//       {
//         "source": "Cosette",
//         "target": "Mme.Thenardier",
//         "value": 4
//       },
//       {
//         "source": "Cosette",
//         "target": "Valjean",
//         "value": 31
//       },
//       {
//         "source": "Cosette",
//         "target": "Tholomyes",
//         "value": 1
//       },
//       {
//         "source": "Cosette",
//         "target": "Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Javert",
//         "target": "Valjean",
//         "value": 17
//       },
//       {
//         "source": "Javert",
//         "target": "Fantine",
//         "value": 5
//       },
//       {
//         "source": "Javert",
//         "target": "Thenardier",
//         "value": 5
//       },
//       {
//         "source": "Javert",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Javert",
//         "target": "Cosette",
//         "value": 1
//       },
//       {
//         "source": "Fauchelevent",
//         "target": "Valjean",
//         "value": 8
//       },
//       {
//         "source": "Fauchelevent",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Bamatabois",
//         "target": "Fantine",
//         "value": 1
//       },
//       {
//         "source": "Bamatabois",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Bamatabois",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Perpetue",
//         "target": "Fantine",
//         "value": 1
//       },
//       {
//         "source": "Simplice",
//         "target": "Perpetue",
//         "value": 2
//       },
//       {
//         "source": "Simplice",
//         "target": "Valjean",
//         "value": 3
//       },
//       {
//         "source": "Simplice",
//         "target": "Fantine",
//         "value": 2
//       },
//       {
//         "source": "Simplice",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Scaufflaire",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Woman1",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Woman1",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Judge",
//         "target": "Valjean",
//         "value": 3
//       },
//       {
//         "source": "Judge",
//         "target": "Bamatabois",
//         "value": 2
//       },
//       {
//         "source": "Champmathieu",
//         "target": "Valjean",
//         "value": 3
//       },
//       {
//         "source": "Champmathieu",
//         "target": "Judge",
//         "value": 3
//       },
//       {
//         "source": "Champmathieu",
//         "target": "Bamatabois",
//         "value": 2
//       },
//       {
//         "source": "Brevet",
//         "target": "Judge",
//         "value": 2
//       },
//       {
//         "source": "Brevet",
//         "target": "Champmathieu",
//         "value": 2
//       },
//       {
//         "source": "Brevet",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Brevet",
//         "target": "Bamatabois",
//         "value": 1
//       },
//       {
//         "source": "Chenildieu",
//         "target": "Judge",
//         "value": 2
//       },
//       {
//         "source": "Chenildieu",
//         "target": "Champmathieu",
//         "value": 2
//       },
//       {
//         "source": "Chenildieu",
//         "target": "Brevet",
//         "value": 2
//       },
//       {
//         "source": "Chenildieu",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Chenildieu",
//         "target": "Bamatabois",
//         "value": 1
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Judge",
//         "value": 2
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Champmathieu",
//         "value": 2
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Brevet",
//         "value": 2
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Chenildieu",
//         "value": 2
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Cochepaille",
//         "target": "Bamatabois",
//         "value": 1
//       },
//       {
//         "source": "Pontmercy",
//         "target": "Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Boulatruelle",
//         "target": "Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Eponine",
//         "target": "Mme.Thenardier",
//         "value": 2
//       },
//       {
//         "source": "Eponine",
//         "target": "Thenardier",
//         "value": 3
//       },
//       {
//         "source": "Anzelma",
//         "target": "Eponine",
//         "value": 2
//       },
//       {
//         "source": "Anzelma",
//         "target": "Thenardier",
//         "value": 2
//       },
//       {
//         "source": "Anzelma",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Woman2",
//         "target": "Valjean",
//         "value": 3
//       },
//       {
//         "source": "Woman2",
//         "target": "Cosette",
//         "value": 1
//       },
//       {
//         "source": "Woman2",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "MotherInnocent",
//         "target": "Fauchelevent",
//         "value": 3
//       },
//       {
//         "source": "MotherInnocent",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Gribier",
//         "target": "Fauchelevent",
//         "value": 2
//       },
//       {
//         "source": "Mme.Burgon",
//         "target": "Jondrette",
//         "value": 1
//       },
//       {
//         "source": "Gavroche",
//         "target": "Mme.Burgon",
//         "value": 2
//       },
//       {
//         "source": "Gavroche",
//         "target": "Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Gavroche",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Gavroche",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Gillenormand",
//         "target": "Cosette",
//         "value": 3
//       },
//       {
//         "source": "Gillenormand",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Magnon",
//         "target": "Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "Magnon",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Mlle.Gillenormand",
//         "target": "Gillenormand",
//         "value": 9
//       },
//       {
//         "source": "Mlle.Gillenormand",
//         "target": "Cosette",
//         "value": 2
//       },
//       {
//         "source": "Mlle.Gillenormand",
//         "target": "Valjean",
//         "value": 2
//       },
//       {
//         "source": "Mme.Pontmercy",
//         "target": "Mlle.Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "Mme.Pontmercy",
//         "target": "Pontmercy",
//         "value": 1
//       },
//       {
//         "source": "Mlle.Vaubois",
//         "target": "Mlle.Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "Lt.Gillenormand",
//         "target": "Mlle.Gillenormand",
//         "value": 2
//       },
//       {
//         "source": "Lt.Gillenormand",
//         "target": "Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "Lt.Gillenormand",
//         "target": "Cosette",
//         "value": 1
//       },
//       {
//         "source": "Marius",
//         "target": "Mlle.Gillenormand",
//         "value": 6
//       },
//       {
//         "source": "Marius",
//         "target": "Gillenormand",
//         "value": 12
//       },
//       {
//         "source": "Marius",
//         "target": "Pontmercy",
//         "value": 1
//       },
//       {
//         "source": "Marius",
//         "target": "Lt.Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "Marius",
//         "target": "Cosette",
//         "value": 21
//       },
//       {
//         "source": "Marius",
//         "target": "Valjean",
//         "value": 19
//       },
//       {
//         "source": "Marius",
//         "target": "Tholomyes",
//         "value": 1
//       },
//       {
//         "source": "Marius",
//         "target": "Thenardier",
//         "value": 2
//       },
//       {
//         "source": "Marius",
//         "target": "Eponine",
//         "value": 5
//       },
//       {
//         "source": "Marius",
//         "target": "Gavroche",
//         "value": 4
//       },
//       {
//         "source": "BaronessT",
//         "target": "Gillenormand",
//         "value": 1
//       },
//       {
//         "source": "BaronessT",
//         "target": "Marius",
//         "value": 1
//       },
//       {
//         "source": "Mabeuf",
//         "target": "Marius",
//         "value": 1
//       },
//       {
//         "source": "Mabeuf",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Mabeuf",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Enjolras",
//         "target": "Marius",
//         "value": 7
//       },
//       {
//         "source": "Enjolras",
//         "target": "Gavroche",
//         "value": 7
//       },
//       {
//         "source": "Enjolras",
//         "target": "Javert",
//         "value": 6
//       },
//       {
//         "source": "Enjolras",
//         "target": "Mabeuf",
//         "value": 1
//       },
//       {
//         "source": "Enjolras",
//         "target": "Valjean",
//         "value": 4
//       },
//       {
//         "source": "Combeferre",
//         "target": "Enjolras",
//         "value": 15
//       },
//       {
//         "source": "Combeferre",
//         "target": "Marius",
//         "value": 5
//       },
//       {
//         "source": "Combeferre",
//         "target": "Gavroche",
//         "value": 6
//       },
//       {
//         "source": "Combeferre",
//         "target": "Mabeuf",
//         "value": 2
//       },
//       {
//         "source": "Prouvaire",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Prouvaire",
//         "target": "Enjolras",
//         "value": 4
//       },
//       {
//         "source": "Prouvaire",
//         "target": "Combeferre",
//         "value": 2
//       },
//       {
//         "source": "Feuilly",
//         "target": "Gavroche",
//         "value": 2
//       },
//       {
//         "source": "Feuilly",
//         "target": "Enjolras",
//         "value": 6
//       },
//       {
//         "source": "Feuilly",
//         "target": "Prouvaire",
//         "value": 2
//       },
//       {
//         "source": "Feuilly",
//         "target": "Combeferre",
//         "value": 5
//       },
//       {
//         "source": "Feuilly",
//         "target": "Mabeuf",
//         "value": 1
//       },
//       {
//         "source": "Feuilly",
//         "target": "Marius",
//         "value": 1
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Marius",
//         "value": 9
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Enjolras",
//         "value": 17
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Combeferre",
//         "value": 13
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Gavroche",
//         "value": 7
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Mabeuf",
//         "value": 2
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Feuilly",
//         "value": 6
//       },
//       {
//         "source": "Courfeyrac",
//         "target": "Prouvaire",
//         "value": 3
//       },
//       {
//         "source": "Bahorel",
//         "target": "Combeferre",
//         "value": 5
//       },
//       {
//         "source": "Bahorel",
//         "target": "Gavroche",
//         "value": 5
//       },
//       {
//         "source": "Bahorel",
//         "target": "Courfeyrac",
//         "value": 6
//       },
//       {
//         "source": "Bahorel",
//         "target": "Mabeuf",
//         "value": 2
//       },
//       {
//         "source": "Bahorel",
//         "target": "Enjolras",
//         "value": 4
//       },
//       {
//         "source": "Bahorel",
//         "target": "Feuilly",
//         "value": 3
//       },
//       {
//         "source": "Bahorel",
//         "target": "Prouvaire",
//         "value": 2
//       },
//       {
//         "source": "Bahorel",
//         "target": "Marius",
//         "value": 1
//       },
//       {
//         "source": "Bossuet",
//         "target": "Marius",
//         "value": 5
//       },
//       {
//         "source": "Bossuet",
//         "target": "Courfeyrac",
//         "value": 12
//       },
//       {
//         "source": "Bossuet",
//         "target": "Gavroche",
//         "value": 5
//       },
//       {
//         "source": "Bossuet",
//         "target": "Bahorel",
//         "value": 4
//       },
//       {
//         "source": "Bossuet",
//         "target": "Enjolras",
//         "value": 10
//       },
//       {
//         "source": "Bossuet",
//         "target": "Feuilly",
//         "value": 6
//       },
//       {
//         "source": "Bossuet",
//         "target": "Prouvaire",
//         "value": 2
//       },
//       {
//         "source": "Bossuet",
//         "target": "Combeferre",
//         "value": 9
//       },
//       {
//         "source": "Bossuet",
//         "target": "Mabeuf",
//         "value": 1
//       },
//       {
//         "source": "Bossuet",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Joly",
//         "target": "Bahorel",
//         "value": 5
//       },
//       {
//         "source": "Joly",
//         "target": "Bossuet",
//         "value": 7
//       },
//       {
//         "source": "Joly",
//         "target": "Gavroche",
//         "value": 3
//       },
//       {
//         "source": "Joly",
//         "target": "Courfeyrac",
//         "value": 5
//       },
//       {
//         "source": "Joly",
//         "target": "Enjolras",
//         "value": 5
//       },
//       {
//         "source": "Joly",
//         "target": "Feuilly",
//         "value": 5
//       },
//       {
//         "source": "Joly",
//         "target": "Prouvaire",
//         "value": 2
//       },
//       {
//         "source": "Joly",
//         "target": "Combeferre",
//         "value": 5
//       },
//       {
//         "source": "Joly",
//         "target": "Mabeuf",
//         "value": 1
//       },
//       {
//         "source": "Joly",
//         "target": "Marius",
//         "value": 2
//       },
//       {
//         "source": "Grantaire",
//         "target": "Bossuet",
//         "value": 3
//       },
//       {
//         "source": "Grantaire",
//         "target": "Enjolras",
//         "value": 3
//       },
//       {
//         "source": "Grantaire",
//         "target": "Combeferre",
//         "value": 1
//       },
//       {
//         "source": "Grantaire",
//         "target": "Courfeyrac",
//         "value": 2
//       },
//       {
//         "source": "Grantaire",
//         "target": "Joly",
//         "value": 2
//       },
//       {
//         "source": "Grantaire",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Grantaire",
//         "target": "Bahorel",
//         "value": 1
//       },
//       {
//         "source": "Grantaire",
//         "target": "Feuilly",
//         "value": 1
//       },
//       {
//         "source": "Grantaire",
//         "target": "Prouvaire",
//         "value": 1
//       },
//       {
//         "source": "MotherPlutarch",
//         "target": "Mabeuf",
//         "value": 3
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Thenardier",
//         "value": 5
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Gueulemer",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Babet",
//         "target": "Thenardier",
//         "value": 6
//       },
//       {
//         "source": "Babet",
//         "target": "Gueulemer",
//         "value": 6
//       },
//       {
//         "source": "Babet",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Babet",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Babet",
//         "target": "Javert",
//         "value": 2
//       },
//       {
//         "source": "Babet",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Babet",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Claquesous",
//         "target": "Thenardier",
//         "value": 4
//       },
//       {
//         "source": "Claquesous",
//         "target": "Babet",
//         "value": 4
//       },
//       {
//         "source": "Claquesous",
//         "target": "Gueulemer",
//         "value": 4
//       },
//       {
//         "source": "Claquesous",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Claquesous",
//         "target": "Mme.Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Claquesous",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Claquesous",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Claquesous",
//         "target": "Enjolras",
//         "value": 1
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Babet",
//         "value": 2
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Gueulemer",
//         "value": 2
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Claquesous",
//         "value": 2
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Montparnasse",
//         "target": "Thenardier",
//         "value": 1
//       },
//       {
//         "source": "Toussaint",
//         "target": "Cosette",
//         "value": 2
//       },
//       {
//         "source": "Toussaint",
//         "target": "Javert",
//         "value": 1
//       },
//       {
//         "source": "Toussaint",
//         "target": "Valjean",
//         "value": 1
//       },
//       {
//         "source": "Child1",
//         "target": "Gavroche",
//         "value": 2
//       },
//       {
//         "source": "Child2",
//         "target": "Gavroche",
//         "value": 2
//       },
//       {
//         "source": "Child2",
//         "target": "Child1",
//         "value": 3
//       },
//       {
//         "source": "Brujon",
//         "target": "Babet",
//         "value": 3
//       },
//       {
//         "source": "Brujon",
//         "target": "Gueulemer",
//         "value": 3
//       },
//       {
//         "source": "Brujon",
//         "target": "Thenardier",
//         "value": 3
//       },
//       {
//         "source": "Brujon",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Brujon",
//         "target": "Eponine",
//         "value": 1
//       },
//       {
//         "source": "Brujon",
//         "target": "Claquesous",
//         "value": 1
//       },
//       {
//         "source": "Brujon",
//         "target": "Montparnasse",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Bossuet",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Joly",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Grantaire",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Bahorel",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Courfeyrac",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Gavroche",
//         "value": 1
//       },
//       {
//         "source": "Mme.Hucheloup",
//         "target": "Enjolras",
//         "value": 1
//       }
//     ]
//   }


const data = {
  nodes: [
    { id: 'node0', size: 50 },
    { id: 'node1', size: 30 },
    { id: 'node2', size: 30 },
    { id: 'node3', size: 30 },
    { id: 'node4', size: 30, isLeaf: true },
    { id: 'node5', size: 30, isLeaf: true },
    { id: 'node6', size: 15, isLeaf: true },
    { id: 'node7', size: 15, isLeaf: true },
    { id: 'node8', size: 15, isLeaf: true },
    { id: 'node9', size: 15, isLeaf: true },
    { id: 'node10', size: 15, isLeaf: true },
    { id: 'node11', size: 15, isLeaf: true },
    { id: 'node12', size: 15, isLeaf: true },
    { id: 'node13', size: 15, isLeaf: true },
    { id: 'node14', size: 15, isLeaf: true },
    { id: 'node15', size: 15, isLeaf: true },
    { id: 'node16', size: 15, isLeaf: true },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node1', target: 'node6' },
    { source: 'node1', target: 'node7' },
    { source: 'node2', target: 'node8' },
    { source: 'node2', target: 'node9' },
    { source: 'node2', target: 'node10' },
    { source: 'node2', target: 'node11' },
    { source: 'node2', target: 'node12' },
    { source: 'node2', target: 'node13' },
    { source: 'node3', target: 'node14' },
    { source: 'node3', target: 'node15' },
    { source: 'node3', target: 'node16' },
  ],
};

export default function CollapseForce() {
  const graphRef = React.useRef(null);

  useEffect(() => {
    const container = document.getElementById('App');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 700;

    if (!graphRef.current) {
      graphRef.current = new G6.Graph({
        container: container,
        width,
        height,
        layout: {
          nodeSpacing: 500,
          linkDistance: 100,
          type: 'force',
        },
        modes: {
          default: ["drag-canvas", "zoom-canvas", "drag-node", "click-select"],
        },
        defaultNode: {
          size: 15,
          labelCfg: {
            position: 'center',
            style: {
              fill: '#000',
            },
          },
        },
      });

      const nodesWithLabels = data.nodes.map(node => ({
        ...node,
        label: node.id, // Use node's id as the label
      }));

      graphRef.current.data({
        nodes: nodesWithLabels,
        edges: data.edges.map((edge, i) => {
          edge.id = 'edge' + i;
          return Object.assign({}, edge);
        }),
      });
      graphRef.current.render();

    //   // Node click event
    //   graphRef.current.on('node:click', function (e) {
    //     const clickedNode = e.item;
    //     const model = clickedNode.getModel();
    //     const childrenEdges = data.edges.filter(edge => edge.source === model.id);
        
    //     if (childrenEdges && childrenEdges.length > 0) {
    //       // Toggle children visibility
    //       childrenEdges.forEach(childEdge => {
    //         const childNode = graphRef.current.findById(childEdge.target);
    //         if (childNode) {
    //           const childModel = childNode.getModel();
    //           childModel.visible = !childModel.visible;
    //         }
    //       });
    //       graphRef.current.refresh(); // Refresh graph to reflect changes
    //     }
    //   });
    // }

       // Node click event
    //    graphRef.current.on('node:click', function (e) {
    //     const clickedNode = e.item;
    //     const model = clickedNode.getModel();
        
    //     // Hide clicked node
     
    //     // Hide child nodes
    //     data.edges.forEach(edge => {
    //       if (edge.source === model.id) {
    //         const childNode = data.nodes.find(node => node.id === edge.target);
    //         if (childNode) {
    //           data.nodes = data.nodes.map(node => {
    //             if (node.id === childNode.id) {
    //               return { ...node, visible: false };
    //             }
    //             return node;
    //           });
    //         }
    //       }
    //     });

    //     // Render the graph again
    //     graphRef.current.changeData(data);
    //   });

    function toggleDescendantsVisibility(nodeId, data) {
        // Find the node in the data
        const node = data.nodes.find(node => node.id === nodeId);
        if (!node) return;
      
        // Toggle visibility of its children and grandchildren recursively
        data.edges.forEach(edge => {
          if (edge.source === nodeId) {
            const childId = edge.target;
            const childNode = data.nodes.find(node => node.id === childId);
            if (childNode) {
              // Toggle visibility of the child node
              childNode.visible = !childNode.visible;
              // Toggle visibility of the edge
              edge.visible = !edge.visible;
              // Toggle visibility of its descendants recursively
              toggleDescendantsVisibility(childId, data);
            }
          }
        });
      }
      
      graphRef.current.on('node:click', function (e) {
        const clickedNode = e.item;
        const model = clickedNode.getModel();
      
        // Toggle visibility of descendants of the clicked node
        toggleDescendantsVisibility(model.id, data);
      
        // Render the graph again
        graphRef.current.changeData(data);
      });

    


    }



    if (typeof window !== 'undefined') {
      window.onresize = () => {
        if (!graphRef.current || graphRef.current.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graphRef.current.changeSize(container.scrollWidth, container.scrollHeight);
      };
    }

    // Cleanup function
    return () => {
      graphRef.current?.destroy();
      graphRef.current = null;
    };

  }, [graphRef]);

  return (
    <div id="App"></div>
  );
}
