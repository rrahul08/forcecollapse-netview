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
    { id: 'node17', size: 15, isLeaf: true },
    { id: 'node18', size: 15, isLeaf: true },
    { id: 'node19', size: 15, isLeaf: true },
    { id: 'node20', size: 15, isLeaf: true },
    { id: 'node21', size: 15, isLeaf: true },
    { id: 'node22', size: 15, isLeaf: true },
    { id: 'node23', size: 15, isLeaf: true },
    { id: 'node24', size: 15, isLeaf: true },
    { id: 'node25', size: 15, isLeaf: true },
    { id: 'node26', size: 15, isLeaf: true },
    { id: 'node27', size: 15, isLeaf: true },
    { id: 'node28', size: 15, isLeaf: true },
    { id: 'node29', size: 15, isLeaf: true },
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
    { source: 'node15', target: 'node17' },
    { source: 'node15', target: 'node18' },
    { source: 'node15', target: 'node19' },
    { source: 'node18', target: 'node23' },
    { source: 'node19', target: 'node20' },
    { source: 'node19', target: 'node21' },
    { source: 'node19', target: 'node22' },
    { source: 'node11', target: 'node24' },
    { source: 'node11', target: 'node25' },
    { source: 'node11', target: 'node26' },
    { source: 'node25', target: 'node27' },
    { source: 'node25', target: 'node28' },
    { source: 'node28', target: 'node29' },
  ],
};

const data1 = {
  nodes: [
    {
      id: "TVF-D1002-AMS-001",
      isLeaf: false,
    },
    {
      id: "TVF-C9102-AMS-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9102-AMS-001",
      isLeaf: true,
    },
    {
      id: "TVF-D1002-AMS-002",
      isLeaf: false,
    },
    {
      id: "TVF-C9102-AMS-003",
      isLeaf: true,
    },
    {
      id: "TVF-C9102-AMS-004",
      isLeaf: true,
    },
    {
      id: "TVF-CSR1000-AMS-001",
      isLeaf: false,
    },
    {
      id: "TVF-CSR1000-AMS-002",
      isLeaf: false,
    },
    {
      id: "TVF-D1001-AMS-005",
      isLeaf: false,
    },
    {
      id: "TVF-C9006-AH-001",
      isLeaf: true,
    },
    {
      id: "TVF-CCRS1-AMS-200",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-gr101",
      isLeaf: true,
    },
    {
      id: "TVF-D1002-AMS-005",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-MT-001",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-AMS-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9006-AMS-001",
      isLeaf: true,
    },
    {
      id: "TVF-D1006-AMS-004",
      isLeaf: true,
    },
    {
      id: "TVF-C9901-AMS-001",
      isLeaf: true,
    },
    {
      id: "TVF-CCRS1-UT-200",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-HM-002",
      isLeaf: true,
    },
    {
      id: "TVF-D1002-AMS-004",
      isLeaf: true,
    },
    {
      id: "TVF-D1002-AMS-006",
      isLeaf: true,
    },
    {
      id: "TVF-C9006-AMS-003",
      isLeaf: true,
    },
    {
      id: "TVF-C9901-AMS-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9006-AMS-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-AMS-003",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-gr101",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-MT-002",
      isLeaf: true,
    },
    {
      id: "TVF-D1004-AH-001",
      isLeaf: false,
    },
    {
      id: "TVF-D1004-AH-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9910-AH-001",
      isLeaf: true,
    },
    {
      id: "TVF-C9910-AH-002",
      isLeaf: true,
    },
    {
      id: "TVF-D1006-EHV-001",
      isLeaf: false,
    },
    {
      id: "TVF-D1006-EHV-002",
      isLeaf: true,
    },
    {
      id: "TVF-C9910-EHV-001",
      isLeaf: true,
    },
    {
      id: "TVF-C9910-EHV-002",
      isLeaf: true,
    },
    {
      id: "nls-ams02a-rt2",
      isLeaf: false,
    },
    {
      id: "TVF-D1004-AMS-231",
      isLeaf: true,
    },
    {
      id: "TVF-D1001-AMS-001",
      isLeaf: true,
    },
    {
      id: "TVF-D1001-AMS-002",
      isLeaf: true,
    },
    {
      id: "TVF-D1004-UT-231",
      isLeaf: true,
    },
    {
      id: "TVF-D1001-UT-002",
      isLeaf: true,
    },
    {
      id: "TVF-D1002-HRL-001",
      isLeaf: true,
    },
    {
      id: "TVF-D1001-UT-001",
      isLeaf: true,
    },
    {
      id: "NLSPL1PE01",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-dr109",
      isLeaf: true,
    },
    {
      id: "slr-tr0004-gr103-new",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-dr149",
      isLeaf: true,
    },
    {
      id: "nls-ams17b-rt1",
      isLeaf: true,
    },
    {
      id: "nls-hlm01a-ra60",
      isLeaf: true,
    },
    {
      id: "zp-dc0100-gr101",
      isLeaf: true,
    },
    {
      id: "ehv-dc0002-gr101",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-gr103-new",
      isLeaf: true,
    },
    {
      id: "nls-ams02e-ra60",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-gr103",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-gr101",
      isLeaf: true,
    },
    {
      id: "rt-dc0172-gr101",
      isLeaf: true,
    },
    {
      id: "lls-dc0100-gr101",
      isLeaf: true,
    },
    {
      id: "hrv-dc0100-gr101",
      isLeaf: true,
    },
    {
      id: "nm-dc0100-gr101",
      isLeaf: true,
    },
    {
      id: "nls-mnd01a-ra60",
      isLeaf: true,
    },
    {
      id: "rt-dc0173-gr101",
      isLeaf: true,
    },
    {
      id: "nls-tbg01a-ra60",
      isLeaf: true,
    },
    {
      id: "re0-ams-tr0042-dr101",
      isLeaf: true,
    },
    {
      id: "asn-dc0002-gr101",
      isLeaf: true,
    },
    {
      id: "dv-dc0001-gr101",
      isLeaf: true,
    },
    {
      id: "tb-dc0001-gr101",
      isLeaf: true,
    },
    {
      id: "weer-dc0002-gr101",
      isLeaf: true,
    },
    {
      id: "vnn-dc0001-gr101",
      isLeaf: true,
    },
    {
      id: "mnd-dc0001-gr101",
      isLeaf: true,
    },
    {
      id: "gv-dc0010-gr101",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-dr109",
      isLeaf: true,
    },
    {
      id: "slr-tr0004-gr104-new",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-gr104-new",
      isLeaf: true,
    },
    {
      id: "nls-ams02e-ra50",
      isLeaf: true,
    },
    {
      id: "nls-mnd01a-ra50",
      isLeaf: true,
    },
    {
      id: "re0-ams-tr0610-dr101",
      isLeaf: true,
    },
    {
      id: "hvs-dc0001-gr102",
      isLeaf: true,
    },
    {
      id: "gv-dc0052-gr102",
      isLeaf: true,
    },
    {
      id: "NLSPL1PE02",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-dr149",
      isLeaf: true,
    },
    {
      id: "nls-hlm01a-ra50",
      isLeaf: true,
    },
    {
      id: "zp-dc0100-gr102",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-gr104",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-gr102",
      isLeaf: true,
    },
    {
      id: "rt-dc0172-gr102",
      isLeaf: true,
    },
    {
      id: "lls-dc0100-gr102",
      isLeaf: true,
    },
    {
      id: "hrv-dc0100-gr102",
      isLeaf: true,
    },
    {
      id: "nm-dc0100-gr102",
      isLeaf: true,
    },
    {
      id: "rt-dc0173-gr102",
      isLeaf: true,
    },
    {
      id: "nls-tbg01a-ra50",
      isLeaf: true,
    },
    {
      id: "gn-dc0002-gr102",
      isLeaf: true,
    },
    {
      id: "zl-dc0001-gr102",
      isLeaf: true,
    },
    {
      id: "ht-dc0001-gr102",
      isLeaf: true,
    },
    {
      id: "venls-dc0003-gr102",
      isLeaf: true,
    },
    {
      id: "amr-dc0010-gr102",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-rr101",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-rr102",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-rr103",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-rr104",
      isLeaf: true,
    },
    {
      id: "ams-dc0001-rr107",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-rr101",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-rr102",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-rr103",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-rr104",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-rr107",
      isLeaf: true,
    },
    {
      id: "AH-TR0009-DR101",
      isLeaf: true,
    },
    {
      id: "HTN-S03555-CR104",
      isLeaf: true,
    },
    {
      id: "AH-TR0009-DR102",
      isLeaf: true,
    },
    {
      id: "HTN-S03555-CR103",
      isLeaf: true,
    },
    {
      id: "EHV-TR0001-DR101",
      isLeaf: true,
    },
    {
      id: "EHV-TR0001-DR102",
      isLeaf: true,
    },
    {
      id: "tb-dc0001-dr171",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr172",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-dr301",
      isLeaf: false,
    },
    {
      id: "hm-dc0100-dr302",
      isLeaf: false,
    },
    {
      id: "hm-dc0100-dr303",
      isLeaf: false,
    },
    {
      id: "hm-dc0100-dr304",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr301",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr302",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr303",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr304",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr305",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr306",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr307",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-dr308",
      isLeaf: false,
    },
    {
      id: "rt-dc0173-dr301",
      isLeaf: false,
    },
    {
      id: "rt-dc0173-dr302",
      isLeaf: false,
    },
    {
      id: "slr-tr0004-dr371",
      isLeaf: true,
    },
    {
      id: "SLR-TR0004-DR101",
      isLeaf: true,
    },
    {
      id: "slr-tr0004-gr303",
      isLeaf: true,
    },
    {
      id: "slr-tr0004-dr372",
      isLeaf: true,
    },
    {
      id: "SLR-TR0004-DR102",
      isLeaf: true,
    },
    {
      id: "slr-tr0004-gr304",
      isLeaf: true,
    },
    {
      id: "AMS-TR0021-DR107",
      isLeaf: false,
    },
    {
      id: "RT-RC0173-DR107",
      isLeaf: false,
    },
    {
      id: "AMS-TR0021-DR103",
      isLeaf: false,
    },
    {
      id: "ams-tr0006-dr102",
      isLeaf: false,
    },
    {
      id: "ams-tr0409-dr102",
      isLeaf: false,
    },
    {
      id: "ams-tr0610-dr102",
      isLeaf: false,
    },
    {
      id: "ams-tr0042-dr102",
      isLeaf: false,
    },
    {
      id: "ams-dc0001-dr102",
      isLeaf: false,
    },
    {
      id: "ams-tr0021-dr102",
      isLeaf: true,
    },
    {
      id: "ams-tr0021-gr303",
      isLeaf: false,
    },
    {
      id: "ams-tr0021-gr304",
      isLeaf: true,
    },
    {
      id: "tb-dc0001-gr303",
      isLeaf: false,
    },
    {
      id: "tb-dc0001-gr304",
      isLeaf: true,
    },
    {
      id: "mnd-dc0002-dr171",
      isLeaf: false,
    },
    {
      id: "mnd-dc0002-dr172",
      isLeaf: true,
    },
    {
      id: "HM-RC0100-DR105",
      isLeaf: false,
    },
    {
      id: "HM-RC0100-DR106",
      isLeaf: true,
    },
    {
      id: "RT-RC0173-DR105",
      isLeaf: false,
    },
    {
      id: "RT-RC0173-DR106",
      isLeaf: true,
    },
    {
      id: "nls-mnd01a-ra2",
      isLeaf: false,
    },
    {
      id: "nls-ams02a-rb3",
      isLeaf: false,
    },
    {
      id: "nls-ams02a-rb4",
      isLeaf: true,
    },
    {
      id: "nls-zut01a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-zut01a-rb2",
      isLeaf: true,
    },
    {
      id: "zp-dc0100-dr101",
      isLeaf: true,
    },
    {
      id: "zp-dc0100-dr102",
      isLeaf: true,
    },
    {
      id: "ehv-dc0002-dr102",
      isLeaf: true,
    },
    {
      id: "ams-tr0410-dr106",
      isLeaf: true,
    },
    {
      id: "nls-ams02a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-ams02a-rb2",
      isLeaf: true,
    },
    {
      id: "nls-hlm01a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-hlm01a-rb2",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-dr102",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-dr104",
      isLeaf: true,
    },
    {
      id: "hm-dc0100-dr103",
      isLeaf: true,
    },
    {
      id: "nls-rtm02a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-rtm02a-rb2",
      isLeaf: true,
    },
    {
      id: "rt-lc0100-dr102",
      isLeaf: true,
    },
    {
      id: "nls-ley01a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-ley01a-rb2",
      isLeaf: true,
    },
    {
      id: "lls-dc0100-dr101",
      isLeaf: true,
    },
    {
      id: "lls-dc0100-dr102",
      isLeaf: true,
    },
    {
      id: "nls-hrv01a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-hrv01a-rb2",
      isLeaf: true,
    },
    {
      id: "nls-nij01a-rb1",
      isLeaf: true,
    },
    {
      id: "nls-nij01a-rb2",
      isLeaf: true,
    },
    {
      id: "nm-dc0100-dr102",
      isLeaf: true,
    },
    {
      id: "nm-dc0100-dr101",
      isLeaf: true,
    },
    {
      id: "nls-rtm03a-rb1",
      isLeaf: false,
    },
    {
      id: "nls-rtm03a-rb2",
      isLeaf: false,
    },
    {
      id: "rt-dc0173-dr102",
      isLeaf: true,
    },
    {
      id: "weer-dc0002-dr102",
      isLeaf: false,
    },
    {
      id: "venls-dc0003-dr102",
      isLeaf: true,
    },
    {
      id: "asn-dc0002-dr102",
      isLeaf: false,
    },
    {
      id: "gn-dc0002-dr102",
      isLeaf: true,
    },
    {
      id: "gv-dc0010-dr102",
      isLeaf: false,
    },
    {
      id: "gv-dc0052-dr102",
      isLeaf: true,
    },
    {
      id: "vnn-dc0001-dr102",
      isLeaf: false,
    },
    {
      id: "amr-dc0010-dr102",
      isLeaf: true,
    },
    {
      id: "mnd-dc0001-dr102",
      isLeaf: false,
    },
    {
      id: "hvs-dc0002-dr102",
      isLeaf: true,
    },
    {
      id: "dv-dc0001-dr102",
      isLeaf: false,
    },
    {
      id: "zl-dc0001-dr102",
      isLeaf: true,
    },
    {
      id: "tb-dc0001-dr102",
      isLeaf: false,
    },
    {
      id: "ht-dc0001-dr102",
      isLeaf: true,
    },
    {
      id: "re0-mnd-dc0002-gr103",
      isLeaf: false,
    },
    {
      id: "re0-mnd-dc0002-gr104",
      isLeaf: true,
    },
    {
      id: "re0-tb-dc0001-gr103",
      isLeaf: false,
    },
    {
      id: "re0-tb-dc0001-gr104",
      isLeaf: true,
    },
    {
      id: "re0-ams-tr0409-dr101",
      isLeaf: true,
    },
    {
      id: "re0-ams-tr0410-dr102",
      isLeaf: true,
    },
    {
      id: "re0-gn-dc0002-dr101",
      isLeaf: true,
    },
    {
      id: "re0-emn-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-zl-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-ht-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-tb-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-bd-dc0002-dr101",
      isLeaf: true,
    },
    {
      id: "re0-ah-tr0002-dr108",
      isLeaf: true,
    },
    {
      id: "re0-vnn-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-mnd-dc0001-dr101",
      isLeaf: true,
    },
    {
      id: "re0-gv-dc0010-dr101",
      isLeaf: true,
    },
    {
      id: "re0-rt-tr0006-dr108",
      isLeaf: true,
    },
    {
      id: "TVF-C9001-HM-001",
      isLeaf: false,
    },
    {
      id: "TVF-D1002-AMS-003",
      isLeaf: false,
    },
  ],
  //parsed edges with only one link between nodes
  edges : [

    {
      id: "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-002",
      source: "TVF-D1002-AMS-001",
      target: "TVF-C9102-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-001",
      source: "TVF-D1002-AMS-001",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-003",
      source: "TVF-D1002-AMS-002",
      target: "TVF-C9102-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-004",
      source: "TVF-D1002-AMS-002",
      target: "TVF-C9102-AMS-004",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-002",
      source: "TVF-CSR1000-AMS-001",
      target: "TVF-C9102-AMS-002",
      label: ["16777214"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-001",
      source: "TVF-CSR1000-AMS-001",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-003",
      source: "TVF-CSR1000-AMS-002",
      target: "TVF-C9102-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-004",
      source: "TVF-CSR1000-AMS-002",
      target: "TVF-C9102-AMS-004",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-002",
      source: "TVF-D1001-AMS-005",
      target: "TVF-C9102-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-001",
      source: "TVF-D1001-AMS-005",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-C9006-AH-001",
      source: "TVF-C9102-AMS-002",
      target: "TVF-C9006-AH-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-CCRS1-AMS-200",
      source: "TVF-C9102-AMS-002",
      target: "TVF-CCRS1-AMS-200",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-ams-dc0001-gr101",
      source: "TVF-C9102-AMS-002",
      target: "ams-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-D1002-AMS-005",
      source: "TVF-C9102-AMS-002",
      target: "TVF-D1002-AMS-005",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-C9102-AMS-001",
      source: "TVF-C9102-AMS-002",
      target: "TVF-C9102-AMS-001",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-C9001-MT-001",
      source: "TVF-C9102-AMS-002",
      target: "TVF-C9001-MT-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-C9001-AMS-002",
      source: "TVF-C9102-AMS-002",
      target: "TVF-C9001-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-002-TVF-C9006-AMS-001",
      source: "TVF-C9102-AMS-002",
      target: "TVF-C9006-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9102-AMS-004",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9102-AMS-004",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-D1006-AMS-004",
      source: "TVF-C9102-AMS-003",
      target: "TVF-D1006-AMS-004",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-001",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9901-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-CCRS1-UT-200",
      source: "TVF-C9102-AMS-003",
      target: "TVF-CCRS1-UT-200",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-ams-dc0001-gr101",
      source: "TVF-C9102-AMS-003",
      target: "ams-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9001-HM-002",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9001-HM-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-004",
      source: "TVF-C9102-AMS-003",
      target: "TVF-D1002-AMS-004",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-006",
      source: "TVF-C9102-AMS-003",
      target: "TVF-D1002-AMS-006",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-003",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9006-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-002",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9901-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-002",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9006-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-003-TVF-C9001-AMS-003",
      source: "TVF-C9102-AMS-003",
      target: "TVF-C9001-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-C9006-AH-001",
      source: "TVF-C9102-AMS-004",
      target: "TVF-C9006-AH-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-CCRS1-AMS-200",
      source: "TVF-C9102-AMS-004",
      target: "TVF-CCRS1-AMS-200",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-ams-tr0021-gr101",
      source: "TVF-C9102-AMS-004",
      target: "ams-tr0021-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-004",
      source: "TVF-C9102-AMS-004",
      target: "TVF-D1002-AMS-004",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-006",
      source: "TVF-C9102-AMS-004",
      target: "TVF-D1002-AMS-006",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-C9001-MT-002",
      source: "TVF-C9102-AMS-004",
      target: "TVF-C9001-MT-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-C9006-AMS-002",
      source: "TVF-C9102-AMS-004",
      target: "TVF-C9006-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-004-TVF-C9001-AMS-003",
      source: "TVF-C9102-AMS-004",
      target: "TVF-C9001-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1006-AMS-004-TVF-C9102-AMS-001",
      source: "TVF-D1006-AMS-004",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1004-AH-001-TVF-D1004-AH-002",
      source: "TVF-D1004-AH-001",
      target: "TVF-D1004-AH-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1004-AH-001-TVF-C9910-AH-001",
      source: "TVF-D1004-AH-001",
      target: "TVF-C9910-AH-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1004-AH-002-TVF-C9910-AH-002",
      source: "TVF-D1004-AH-002",
      target: "TVF-C9910-AH-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1006-EHV-001-TVF-D1006-EHV-002",
      source: "TVF-D1006-EHV-001",
      target: "TVF-D1006-EHV-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1006-EHV-001-TVF-C9910-EHV-001",
      source: "TVF-D1006-EHV-001",
      target: "TVF-C9910-EHV-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1006-EHV-002-TVF-C9910-EHV-002",
      source: "TVF-D1006-EHV-002",
      target: "TVF-C9910-EHV-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9901-AMS-001-TVF-C9102-AMS-001",
      source: "TVF-C9901-AMS-001",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-ams02a-rt2-ams-tr0021-gr101",
      source: "nls-ams02a-rt2",
      target: "ams-tr0021-gr101",
      label: ["63"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1004-AMS-231",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1004-AMS-231",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-001",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1001-AMS-001",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-002",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1001-AMS-002",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1004-UT-231",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1004-UT-231",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1001-UT-002",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1001-UT-002",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-AMS-200-TVF-D1002-HRL-001",
      source: "TVF-CCRS1-AMS-200",
      target: "TVF-D1002-HRL-001",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1001-AMS-002-TVF-CCRS1-UT-200",
      source: "TVF-D1001-AMS-002",
      target: "TVF-CCRS1-UT-200",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-UT-200-TVF-D1004-UT-231",
      source: "TVF-CCRS1-UT-200",
      target: "TVF-D1004-UT-231",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-001",
      source: "TVF-CCRS1-UT-200",
      target: "TVF-D1001-UT-001",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-002",
      source: "TVF-CCRS1-UT-200",
      target: "TVF-D1001-UT-002",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-UT-200-TVF-D1002-HRL-001",
      source: "TVF-CCRS1-UT-200",
      target: "TVF-D1002-HRL-001",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-CCRS1-UT-200-TVF-C9102-AMS-001",
      source: "TVF-CCRS1-UT-200",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ams-tr0021-gr101",
      source: "ams-dc0001-gr101",
      target: "ams-tr0021-gr101",
      label: ["100"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-NLSPL1PE01",
      source: "ams-dc0001-gr101",
      target: "NLSPL1PE01",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ams-dc0001-dr109",
      source: "ams-dc0001-gr101",
      target: "ams-dc0001-dr109",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-TVF-C9910-AH-001",
      source: "ams-dc0001-gr101",
      target: "TVF-C9910-AH-001",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-TVF-C9910-EHV-001",
      source: "ams-dc0001-gr101",
      target: "TVF-C9910-EHV-001",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-slr-tr0004-gr103-new",
      source: "ams-dc0001-gr101",
      target: "slr-tr0004-gr103-new",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ams-dc0001-dr149",
      source: "ams-dc0001-gr101",
      target: "ams-dc0001-dr149",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nls-ams17b-rt1",
      source: "ams-dc0001-gr101",
      target: "nls-ams17b-rt1",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nls-hlm01a-ra60",
      source: "ams-dc0001-gr101",
      target: "nls-hlm01a-ra60",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-zp-dc0100-gr101",
      source: "ams-dc0001-gr101",
      target: "zp-dc0100-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ehv-dc0002-gr101",
      source: "ams-dc0001-gr101",
      target: "ehv-dc0002-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ams-dc0001-gr103-new",
      source: "ams-dc0001-gr101",
      target: "ams-dc0001-gr103-new",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nls-ams02e-ra60",
      source: "ams-dc0001-gr101",
      target: "nls-ams02e-ra60",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-ams-tr0021-gr103",
      source: "ams-dc0001-gr101",
      target: "ams-tr0021-gr103",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-hm-dc0100-gr101",
      source: "ams-dc0001-gr101",
      target: "hm-dc0100-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-rt-dc0172-gr101",
      source: "ams-dc0001-gr101",
      target: "rt-dc0172-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-lls-dc0100-gr101",
      source: "ams-dc0001-gr101",
      target: "lls-dc0100-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-hrv-dc0100-gr101",
      source: "ams-dc0001-gr101",
      target: "hrv-dc0100-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nm-dc0100-gr101",
      source: "ams-dc0001-gr101",
      target: "nm-dc0100-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nls-mnd01a-ra60",
      source: "ams-dc0001-gr101",
      target: "nls-mnd01a-ra60",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-rt-dc0173-gr101",
      source: "ams-dc0001-gr101",
      target: "rt-dc0173-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-nls-tbg01a-ra60",
      source: "ams-dc0001-gr101",
      target: "nls-tbg01a-ra60",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-re0-ams-tr0042-dr101",
      source: "ams-dc0001-gr101",
      target: "re0-ams-tr0042-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-asn-dc0002-gr101",
      source: "ams-dc0001-gr101",
      target: "asn-dc0002-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-dv-dc0001-gr101",
      source: "ams-dc0001-gr101",
      target: "dv-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-tb-dc0001-gr101",
      source: "ams-dc0001-gr101",
      target: "tb-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-weer-dc0002-gr101",
      source: "ams-dc0001-gr101",
      target: "weer-dc0002-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-vnn-dc0001-gr101",
      source: "ams-dc0001-gr101",
      target: "vnn-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-mnd-dc0001-gr101",
      source: "ams-dc0001-gr101",
      target: "mnd-dc0001-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr101-gv-dc0010-gr101",
      source: "ams-dc0001-gr101",
      target: "gv-dc0010-gr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-ams-tr0021-dr109",
      source: "ams-tr0021-gr101",
      target: "ams-tr0021-dr109",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-TVF-C9910-AH-002",
      source: "ams-tr0021-gr101",
      target: "TVF-C9910-AH-002",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-slr-tr0004-gr104-new",
      source: "ams-tr0021-gr101",
      target: "slr-tr0004-gr104-new",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-ams-tr0021-gr104-new",
      source: "ams-tr0021-gr101",
      target: "ams-tr0021-gr104-new",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-nls-ams02e-ra50",
      source: "ams-tr0021-gr101",
      target: "nls-ams02e-ra50",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-nls-mnd01a-ra50",
      source: "ams-tr0021-gr101",
      target: "nls-mnd01a-ra50",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-re0-ams-tr0610-dr101",
      source: "ams-tr0021-gr101",
      target: "re0-ams-tr0610-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-hvs-dc0001-gr102",
      source: "ams-tr0021-gr101",
      target: "hvs-dc0001-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-gv-dc0052-gr102",
      source: "ams-tr0021-gr101",
      target: "gv-dc0052-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-NLSPL1PE02",
      source: "ams-tr0021-gr101",
      target: "NLSPL1PE02",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-TVF-C9910-EHV-002",
      source: "ams-tr0021-gr101",
      target: "TVF-C9910-EHV-002",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-ams-tr0021-dr149",
      source: "ams-tr0021-gr101",
      target: "ams-tr0021-dr149",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-nls-hlm01a-ra50",
      source: "ams-tr0021-gr101",
      target: "nls-hlm01a-ra50",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-zp-dc0100-gr102",
      source: "ams-tr0021-gr101",
      target: "zp-dc0100-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-ams-tr0021-gr104",
      source: "ams-tr0021-gr101",
      target: "ams-tr0021-gr104",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-hm-dc0100-gr102",
      source: "ams-tr0021-gr101",
      target: "hm-dc0100-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-rt-dc0172-gr102",
      source: "ams-tr0021-gr101",
      target: "rt-dc0172-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-lls-dc0100-gr102",
      source: "ams-tr0021-gr101",
      target: "lls-dc0100-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-hrv-dc0100-gr102",
      source: "ams-tr0021-gr101",
      target: "hrv-dc0100-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-nm-dc0100-gr102",
      source: "ams-tr0021-gr101",
      target: "nm-dc0100-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-rt-dc0173-gr102",
      source: "ams-tr0021-gr101",
      target: "rt-dc0173-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-nls-tbg01a-ra50",
      source: "ams-tr0021-gr101",
      target: "nls-tbg01a-ra50",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-gn-dc0002-gr102",
      source: "ams-tr0021-gr101",
      target: "gn-dc0002-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-zl-dc0001-gr102",
      source: "ams-tr0021-gr101",
      target: "zl-dc0001-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-ht-dc0001-gr102",
      source: "ams-tr0021-gr101",
      target: "ht-dc0001-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-venls-dc0003-gr102",
      source: "ams-tr0021-gr101",
      target: "venls-dc0003-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-amr-dc0010-gr102",
      source: "ams-tr0021-gr101",
      target: "amr-dc0010-gr102",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr101-TVF-C9102-AMS-001",
      source: "ams-tr0021-gr101",
      target: "TVF-C9102-AMS-001",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-NLSPL1PE01-NLSPL1PE02",
      source: "NLSPL1PE01",
      target: "NLSPL1PE02",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-dr109",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-dr109",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-dr101",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-dr101",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-rr101",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-rr101",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-rr102",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-rr102",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-rr103",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-rr103",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-rr104",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-rr104",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-dc0001-rr107",
      source: "ams-dc0001-dr109",
      target: "ams-dc0001-rr107",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-rr101",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-rr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-rr102",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-rr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-rr103",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-rr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-rr104",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-rr104",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr109-ams-tr0021-rr107",
      source: "ams-dc0001-dr109",
      target: "ams-tr0021-rr107",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-dc0001-rr101",
      source: "ams-tr0021-dr109",
      target: "ams-dc0001-rr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-dc0001-rr102",
      source: "ams-tr0021-dr109",
      target: "ams-dc0001-rr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-dc0001-rr103",
      source: "ams-tr0021-dr109",
      target: "ams-dc0001-rr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-dc0001-rr104",
      source: "ams-tr0021-dr109",
      target: "ams-dc0001-rr104",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-dc0001-rr107",
      source: "ams-tr0021-dr109",
      target: "ams-dc0001-rr107",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-tr0021-rr101",
      source: "ams-tr0021-dr109",
      target: "ams-tr0021-rr101",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-tr0021-rr102",
      source: "ams-tr0021-dr109",
      target: "ams-tr0021-rr102",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-tr0021-rr103",
      source: "ams-tr0021-dr109",
      target: "ams-tr0021-rr103",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-tr0021-rr104",
      source: "ams-tr0021-dr109",
      target: "ams-tr0021-rr104",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-dr109-ams-tr0021-rr107",
      source: "ams-tr0021-dr109",
      target: "ams-tr0021-rr107",
      label: ["1500"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-AH-001-TVF-C9910-AH-002",
      source: "TVF-C9910-AH-001",
      target: "TVF-C9910-AH-002",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-AH-001-AH-TR0009-DR101",
      source: "TVF-C9910-AH-001",
      target: "AH-TR0009-DR101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-AH-002-HTN-S03555-CR104",
      source: "TVF-C9910-AH-002",
      target: "HTN-S03555-CR104",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-AH-002-AH-TR0009-DR102",
      source: "TVF-C9910-AH-002",
      target: "AH-TR0009-DR102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-EHV-001-TVF-C9910-EHV-002",
      source: "TVF-C9910-EHV-001",
      target: "TVF-C9910-EHV-002",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-EHV-001-HTN-S03555-CR103",
      source: "TVF-C9910-EHV-001",
      target: "HTN-S03555-CR103",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-EHV-001-EHV-TR0001-DR101",
      source: "TVF-C9910-EHV-001",
      target: "EHV-TR0001-DR101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9910-EHV-002-EHV-TR0001-DR102",
      source: "TVF-C9910-EHV-002",
      target: "EHV-TR0001-DR102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr171-tb-dc0001-dr172",
      source: "tb-dc0001-dr171",
      target: "tb-dc0001-dr172",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr171-tb-dc0001-gr101",
      source: "tb-dc0001-dr171",
      target: "tb-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr172-ht-dc0001-gr102",
      source: "tb-dc0001-dr172",
      target: "ht-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr301-nls-hlm01a-ra50",
      source: "hm-dc0100-dr301",
      target: "nls-hlm01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr301-nls-hlm01a-ra60",
      source: "hm-dc0100-dr301",
      target: "nls-hlm01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr302-nls-hlm01a-ra50",
      source: "hm-dc0100-dr302",
      target: "nls-hlm01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr302-nls-hlm01a-ra60",
      source: "hm-dc0100-dr302",
      target: "nls-hlm01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr303-nls-hlm01a-ra50",
      source: "hm-dc0100-dr303",
      target: "nls-hlm01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr303-nls-hlm01a-ra60",
      source: "hm-dc0100-dr303",
      target: "nls-hlm01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr304-nls-hlm01a-ra50",
      source: "hm-dc0100-dr304",
      target: "nls-hlm01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr304-nls-hlm01a-ra60",
      source: "hm-dc0100-dr304",
      target: "nls-hlm01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr301-nls-tbg01a-ra50",
      source: "tb-dc0001-dr301",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr301-nls-tbg01a-ra60",
      source: "tb-dc0001-dr301",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr302-nls-tbg01a-ra50",
      source: "tb-dc0001-dr302",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr302-nls-tbg01a-ra60",
      source: "tb-dc0001-dr302",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr303-nls-tbg01a-ra50",
      source: "tb-dc0001-dr303",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr303-nls-tbg01a-ra60",
      source: "tb-dc0001-dr303",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr304-nls-tbg01a-ra50",
      source: "tb-dc0001-dr304",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr304-nls-tbg01a-ra60",
      source: "tb-dc0001-dr304",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr305-nls-tbg01a-ra50",
      source: "tb-dc0001-dr305",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr305-nls-tbg01a-ra60",
      source: "tb-dc0001-dr305",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr306-nls-tbg01a-ra50",
      source: "tb-dc0001-dr306",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr306-nls-tbg01a-ra60",
      source: "tb-dc0001-dr306",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr307-nls-tbg01a-ra50",
      source: "tb-dc0001-dr307",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr307-nls-tbg01a-ra60",
      source: "tb-dc0001-dr307",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr308-nls-tbg01a-ra50",
      source: "tb-dc0001-dr308",
      target: "nls-tbg01a-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr308-nls-tbg01a-ra60",
      source: "tb-dc0001-dr308",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-dr301-rt-dc0173-gr102",
      source: "rt-dc0173-dr301",
      target: "rt-dc0173-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-dr301-rt-dc0173-gr101",
      source: "rt-dc0173-dr301",
      target: "rt-dc0173-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-dr302-rt-dc0173-gr102",
      source: "rt-dc0173-dr302",
      target: "rt-dc0173-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-dr302-rt-dc0173-gr101",
      source: "rt-dc0173-dr302",
      target: "rt-dc0173-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr103-new-slr-tr0004-gr104-new",
      source: "slr-tr0004-gr103-new",
      target: "slr-tr0004-gr104-new",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr103-new-slr-tr0004-dr371",
      source: "slr-tr0004-gr103-new",
      target: "slr-tr0004-dr371",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr103-new-SLR-TR0004-DR101",
      source: "slr-tr0004-gr103-new",
      target: "SLR-TR0004-DR101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr103-new-slr-tr0004-gr303",
      source: "slr-tr0004-gr103-new",
      target: "slr-tr0004-gr303",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr104-new-slr-tr0004-dr372",
      source: "slr-tr0004-gr104-new",
      target: "slr-tr0004-dr372",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr104-new-SLR-TR0004-DR102",
      source: "slr-tr0004-gr104-new",
      target: "SLR-TR0004-DR102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr104-new-slr-tr0004-gr304",
      source: "slr-tr0004-gr104-new",
      target: "slr-tr0004-gr304",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-dr371-slr-tr0004-dr372",
      source: "slr-tr0004-dr371",
      target: "slr-tr0004-dr372",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-AMS-TR0021-DR107-ams-tr0021-gr104",
      source: "AMS-TR0021-DR107",
      target: "ams-tr0021-gr104",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-AMS-TR0021-DR107-ams-tr0021-gr103",
      source: "AMS-TR0021-DR107",
      target: "ams-tr0021-gr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-RT-RC0173-DR107-rt-dc0173-gr102",
      source: "RT-RC0173-DR107",
      target: "rt-dc0173-gr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-RT-RC0173-DR107-rt-dc0173-gr101",
      source: "RT-RC0173-DR107",
      target: "rt-dc0173-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-HTN-S03555-CR103-HTN-S03555-CR103",
      source: "HTN-S03555-CR103",
      target: "HTN-S03555-CR103",
      label: ["10000"],
      edgeId: "1",
      type: "loop",
  },
  {
      id: "edge-HTN-S03555-CR103-HTN-S03555-CR104",
      source: "HTN-S03555-CR103",
      target: "HTN-S03555-CR104",
      label: ["0"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-AMS-TR0021-DR103-ams-tr0021-gr104-new",
      source: "AMS-TR0021-DR103",
      target: "ams-tr0021-gr104-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-AMS-TR0021-DR103-ams-tr0021-gr103",
      source: "AMS-TR0021-DR103",
      target: "ams-tr0021-gr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0006-dr102-ams-dc0001-gr103-new",
      source: "ams-tr0006-dr102",
      target: "ams-dc0001-gr103-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0006-dr102-ams-tr0021-gr104-new",
      source: "ams-tr0006-dr102",
      target: "ams-tr0021-gr104-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0409-dr102-ams-dc0001-gr103-new",
      source: "ams-tr0409-dr102",
      target: "ams-dc0001-gr103-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0409-dr102-ams-tr0021-gr104-new",
      source: "ams-tr0409-dr102",
      target: "ams-tr0021-gr104-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0610-dr102-ams-dc0001-gr103-new",
      source: "ams-tr0610-dr102",
      target: "ams-dc0001-gr103-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0610-dr102-ams-tr0021-gr104-new",
      source: "ams-tr0610-dr102",
      target: "ams-tr0021-gr104-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0042-dr102-ams-dc0001-gr103-new",
      source: "ams-tr0042-dr102",
      target: "ams-dc0001-gr103-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0042-dr102-ams-tr0021-gr104-new",
      source: "ams-tr0042-dr102",
      target: "ams-tr0021-gr104-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-SLR-TR0004-DR101-SLR-TR0004-DR102",
      source: "SLR-TR0004-DR101",
      target: "SLR-TR0004-DR102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-AH-TR0009-DR101-AH-TR0009-DR102",
      source: "AH-TR0009-DR101",
      target: "AH-TR0009-DR102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-EHV-TR0001-DR101-EHV-TR0001-DR102",
      source: "EHV-TR0001-DR101",
      target: "EHV-TR0001-DR102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr102-ams-dc0001-gr103-new",
      source: "ams-dc0001-dr102",
      target: "ams-dc0001-gr103-new",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr102-ams-tr0021-dr102",
      source: "ams-dc0001-dr102",
      target: "ams-tr0021-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-slr-tr0004-gr303-slr-tr0004-gr304",
      source: "slr-tr0004-gr303",
      target: "slr-tr0004-gr304",
      label: ["2200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr303-ams-tr0021-gr304",
      source: "ams-tr0021-gr303",
      target: "ams-tr0021-gr304",
      label: ["2200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr303-nls-ams02e-ra50",
      source: "ams-tr0021-gr303",
      target: "nls-ams02e-ra50",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr304-nls-ams02e-ra60",
      source: "ams-tr0021-gr304",
      target: "nls-ams02e-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr303-tb-dc0001-gr304",
      source: "tb-dc0001-gr303",
      target: "tb-dc0001-gr304",
      label: ["2200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr303-nls-tbg01a-ra50",
      source: "tb-dc0001-gr303",
      target: "nls-tbg01a-ra50",
      label: ["1999"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr304-nls-tbg01a-ra60",
      source: "tb-dc0001-gr304",
      target: "nls-tbg01a-ra60",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0002-dr171-mnd-dc0002-dr172",
      source: "mnd-dc0002-dr171",
      target: "mnd-dc0002-dr172",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0002-dr171-mnd-dc0001-gr101",
      source: "mnd-dc0002-dr171",
      target: "mnd-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0002-dr172-hvs-dc0001-gr102",
      source: "mnd-dc0002-dr172",
      target: "hvs-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-dr149-ams-tr0021-dr149",
      source: "ams-dc0001-dr149",
      target: "ams-tr0021-dr149",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-HM-RC0100-DR105-HM-RC0100-DR106",
      source: "HM-RC0100-DR105",
      target: "HM-RC0100-DR106",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-HM-RC0100-DR105-hm-dc0100-gr101",
      source: "HM-RC0100-DR105",
      target: "hm-dc0100-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-HM-RC0100-DR106-hm-dc0100-gr102",
      source: "HM-RC0100-DR106",
      target: "hm-dc0100-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-RT-RC0173-DR105-RT-RC0173-DR106",
      source: "RT-RC0173-DR105",
      target: "RT-RC0173-DR106",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-RT-RC0173-DR105-rt-dc0173-gr102",
      source: "RT-RC0173-DR105",
      target: "rt-dc0173-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-RT-RC0173-DR106-rt-dc0173-gr101",
      source: "RT-RC0173-DR106",
      target: "rt-dc0173-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-mnd01a-ra2-nls-mnd01a-ra60",
      source: "nls-mnd01a-ra2",
      target: "nls-mnd01a-ra60",
      label: ["327691"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-hlm01a-ra50-nls-hlm01a-ra60",
      source: "nls-hlm01a-ra50",
      target: "nls-hlm01a-ra60",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-ams02a-rb3-nls-ams02a-rb4",
      source: "nls-ams02a-rb3",
      target: "nls-ams02a-rb4",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-ams02a-rb3-ams-tr0021-gr104",
      source: "nls-ams02a-rb3",
      target: "ams-tr0021-gr104",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-ams02a-rb4-ams-tr0021-gr103",
      source: "nls-ams02a-rb4",
      target: "ams-tr0021-gr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr101-zp-dc0100-gr102",
      source: "zp-dc0100-gr101",
      target: "zp-dc0100-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr101-nls-zut01a-rb1",
      source: "zp-dc0100-gr101",
      target: "nls-zut01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr101-nls-zut01a-rb2",
      source: "zp-dc0100-gr101",
      target: "nls-zut01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr101-zp-dc0100-dr101",
      source: "zp-dc0100-gr101",
      target: "zp-dc0100-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr102-nls-zut01a-rb1",
      source: "zp-dc0100-gr102",
      target: "nls-zut01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr102-nls-zut01a-rb2",
      source: "zp-dc0100-gr102",
      target: "nls-zut01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-gr102-zp-dc0100-dr102",
      source: "zp-dc0100-gr102",
      target: "zp-dc0100-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ehv-dc0002-gr101-hm-dc0100-gr102",
      source: "ehv-dc0002-gr101",
      target: "hm-dc0100-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ehv-dc0002-gr101-ehv-dc0002-dr102",
      source: "ehv-dc0002-gr101",
      target: "ehv-dc0002-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr103-new-ams-tr0021-gr104-new",
      source: "ams-dc0001-gr103-new",
      target: "ams-tr0021-gr104-new",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-dc0001-gr103-new-ams-tr0410-dr106",
      source: "ams-dc0001-gr103-new",
      target: "ams-tr0410-dr106",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr104-new-ams-tr0410-dr106",
      source: "ams-tr0021-gr104-new",
      target: "ams-tr0410-dr106",
      label: ["1000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr104-new-ams-tr0021-dr102",
      source: "ams-tr0021-gr104-new",
      target: "ams-tr0021-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-ams02e-ra50-nls-ams02e-ra60",
      source: "nls-ams02e-ra50",
      target: "nls-ams02e-ra60",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr104-ams-tr0021-gr103",
      source: "ams-tr0021-gr104",
      target: "ams-tr0021-gr103",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr104-nls-ams02a-rb1",
      source: "ams-tr0021-gr104",
      target: "nls-ams02a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr104-nls-ams02a-rb2",
      source: "ams-tr0021-gr104",
      target: "nls-ams02a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr103-nls-ams02a-rb1",
      source: "ams-tr0021-gr103",
      target: "nls-ams02a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ams-tr0021-gr103-nls-ams02a-rb2",
      source: "ams-tr0021-gr103",
      target: "nls-ams02a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr102-hm-dc0100-gr101",
      source: "hm-dc0100-gr102",
      target: "hm-dc0100-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr102-nls-hlm01a-rb1",
      source: "hm-dc0100-gr102",
      target: "nls-hlm01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr102-nls-hlm01a-rb2",
      source: "hm-dc0100-gr102",
      target: "nls-hlm01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr102-hm-dc0100-dr102",
      source: "hm-dc0100-gr102",
      target: "hm-dc0100-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr102-hm-dc0100-dr104",
      source: "hm-dc0100-gr102",
      target: "hm-dc0100-dr104",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr101-nls-hlm01a-rb1",
      source: "hm-dc0100-gr101",
      target: "nls-hlm01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr101-nls-hlm01a-rb2",
      source: "hm-dc0100-gr101",
      target: "nls-hlm01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-gr101-hm-dc0100-dr103",
      source: "hm-dc0100-gr101",
      target: "hm-dc0100-dr103",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr102-rt-dc0172-gr101",
      source: "rt-dc0172-gr102",
      target: "rt-dc0172-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr102-nls-rtm02a-rb1",
      source: "rt-dc0172-gr102",
      target: "nls-rtm02a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr102-nls-rtm02a-rb2",
      source: "rt-dc0172-gr102",
      target: "nls-rtm02a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr101-nls-rtm02a-rb1",
      source: "rt-dc0172-gr101",
      target: "nls-rtm02a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr101-nls-rtm02a-rb2",
      source: "rt-dc0172-gr101",
      target: "nls-rtm02a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0172-gr101-rt-lc0100-dr102",
      source: "rt-dc0172-gr101",
      target: "rt-lc0100-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr102-lls-dc0100-gr101",
      source: "lls-dc0100-gr102",
      target: "lls-dc0100-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr102-nls-ley01a-rb1",
      source: "lls-dc0100-gr102",
      target: "nls-ley01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr102-nls-ley01a-rb2",
      source: "lls-dc0100-gr102",
      target: "nls-ley01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr102-lls-dc0100-dr101",
      source: "lls-dc0100-gr102",
      target: "lls-dc0100-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr101-nls-ley01a-rb1",
      source: "lls-dc0100-gr101",
      target: "nls-ley01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr101-nls-ley01a-rb2",
      source: "lls-dc0100-gr101",
      target: "nls-ley01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-gr101-lls-dc0100-dr102",
      source: "lls-dc0100-gr101",
      target: "lls-dc0100-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hrv-dc0100-gr102-hrv-dc0100-gr101",
      source: "hrv-dc0100-gr102",
      target: "hrv-dc0100-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hrv-dc0100-gr102-nls-hrv01a-rb1",
      source: "hrv-dc0100-gr102",
      target: "nls-hrv01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hrv-dc0100-gr102-nls-hrv01a-rb2",
      source: "hrv-dc0100-gr102",
      target: "nls-hrv01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hrv-dc0100-gr101-nls-hrv01a-rb1",
      source: "hrv-dc0100-gr101",
      target: "nls-hrv01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hrv-dc0100-gr101-nls-hrv01a-rb2",
      source: "hrv-dc0100-gr101",
      target: "nls-hrv01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr102-nm-dc0100-gr101",
      source: "nm-dc0100-gr102",
      target: "nm-dc0100-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr102-nls-nij01a-rb1",
      source: "nm-dc0100-gr102",
      target: "nls-nij01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr102-nls-nij01a-rb2",
      source: "nm-dc0100-gr102",
      target: "nls-nij01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr102-nm-dc0100-dr102",
      source: "nm-dc0100-gr102",
      target: "nm-dc0100-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr101-nls-nij01a-rb1",
      source: "nm-dc0100-gr101",
      target: "nls-nij01a-rb1",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr101-nls-nij01a-rb2",
      source: "nm-dc0100-gr101",
      target: "nls-nij01a-rb2",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-gr101-nm-dc0100-dr101",
      source: "nm-dc0100-gr101",
      target: "nm-dc0100-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-rtm03a-rb1-rt-dc0173-gr102",
      source: "nls-rtm03a-rb1",
      target: "rt-dc0173-gr102",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-rtm03a-rb1-rt-dc0173-gr101",
      source: "nls-rtm03a-rb1",
      target: "rt-dc0173-gr101",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-rtm03a-rb2-rt-dc0173-gr102",
      source: "nls-rtm03a-rb2",
      target: "rt-dc0173-gr102",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-rtm03a-rb2-rt-dc0173-gr101",
      source: "nls-rtm03a-rb2",
      target: "rt-dc0173-gr101",
      label: ["5000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-mnd01a-ra50-nls-mnd01a-ra60",
      source: "nls-mnd01a-ra50",
      target: "nls-mnd01a-ra60",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-gr102-rt-dc0173-gr101",
      source: "rt-dc0173-gr102",
      target: "rt-dc0173-gr101",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-dc0173-gr102-rt-dc0173-dr102",
      source: "rt-dc0173-gr102",
      target: "rt-dc0173-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nls-tbg01a-ra50-nls-tbg01a-ra60",
      source: "nls-tbg01a-ra50",
      target: "nls-tbg01a-ra60",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-rt-lc0100-dr102-rt-dc0173-dr102",
      source: "rt-lc0100-dr102",
      target: "rt-dc0173-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zp-dc0100-dr101-zp-dc0100-dr102",
      source: "zp-dc0100-dr101",
      target: "zp-dc0100-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-lls-dc0100-dr101-lls-dc0100-dr102",
      source: "lls-dc0100-dr101",
      target: "lls-dc0100-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hm-dc0100-dr102-hm-dc0100-dr103",
      source: "hm-dc0100-dr102",
      target: "hm-dc0100-dr103",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ehv-dc0002-dr102-hm-dc0100-dr104",
      source: "ehv-dc0002-dr102",
      target: "hm-dc0100-dr104",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-nm-dc0100-dr101-nm-dc0100-dr102",
      source: "nm-dc0100-dr101",
      target: "nm-dc0100-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-weer-dc0002-dr102-venls-dc0003-dr102",
      source: "weer-dc0002-dr102",
      target: "venls-dc0003-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-weer-dc0002-dr102-weer-dc0002-gr101",
      source: "weer-dc0002-dr102",
      target: "weer-dc0002-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-venls-dc0003-dr102-venls-dc0003-gr102",
      source: "venls-dc0003-dr102",
      target: "venls-dc0003-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-asn-dc0002-dr102-gn-dc0002-dr102",
      source: "asn-dc0002-dr102",
      target: "gn-dc0002-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-asn-dc0002-dr102-asn-dc0002-gr101",
      source: "asn-dc0002-dr102",
      target: "asn-dc0002-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gn-dc0002-dr102-gn-dc0002-gr102",
      source: "gn-dc0002-dr102",
      target: "gn-dc0002-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0010-dr102-gv-dc0052-dr102",
      source: "gv-dc0010-dr102",
      target: "gv-dc0052-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0010-dr102-gv-dc0010-gr101",
      source: "gv-dc0010-dr102",
      target: "gv-dc0010-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0052-dr102-gv-dc0052-gr102",
      source: "gv-dc0052-dr102",
      target: "gv-dc0052-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-vnn-dc0001-dr102-amr-dc0010-dr102",
      source: "vnn-dc0001-dr102",
      target: "amr-dc0010-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-vnn-dc0001-dr102-vnn-dc0001-gr101",
      source: "vnn-dc0001-dr102",
      target: "vnn-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-amr-dc0010-dr102-amr-dc0010-gr102",
      source: "amr-dc0010-dr102",
      target: "amr-dc0010-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0001-dr102-hvs-dc0002-dr102",
      source: "mnd-dc0001-dr102",
      target: "hvs-dc0002-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0001-dr102-mnd-dc0001-gr101",
      source: "mnd-dc0001-dr102",
      target: "mnd-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hvs-dc0002-dr102-hvs-dc0001-gr102",
      source: "hvs-dc0002-dr102",
      target: "hvs-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-dv-dc0001-dr102-zl-dc0001-dr102",
      source: "dv-dc0001-dr102",
      target: "zl-dc0001-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-dv-dc0001-dr102-dv-dc0001-gr101",
      source: "dv-dc0001-dr102",
      target: "dv-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zl-dc0001-dr102-zl-dc0001-gr102",
      source: "zl-dc0001-dr102",
      target: "zl-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr102-ht-dc0001-dr102",
      source: "tb-dc0001-dr102",
      target: "ht-dc0001-dr102",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-dr102-tb-dc0001-gr101",
      source: "tb-dc0001-dr102",
      target: "tb-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ht-dc0001-dr102-ht-dc0001-gr102",
      source: "ht-dc0001-dr102",
      target: "ht-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-mnd-dc0002-gr103-re0-mnd-dc0002-gr104",
      source: "re0-mnd-dc0002-gr103",
      target: "re0-mnd-dc0002-gr104",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-mnd-dc0002-gr103-mnd-dc0001-gr101",
      source: "re0-mnd-dc0002-gr103",
      target: "mnd-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-mnd-dc0002-gr104-hvs-dc0001-gr102",
      source: "re0-mnd-dc0002-gr104",
      target: "hvs-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-tb-dc0001-gr103-re0-tb-dc0001-gr104",
      source: "re0-tb-dc0001-gr103",
      target: "re0-tb-dc0001-gr104",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-tb-dc0001-gr103-tb-dc0001-gr101",
      source: "re0-tb-dc0001-gr103",
      target: "tb-dc0001-gr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-tb-dc0001-gr104-ht-dc0001-gr102",
      source: "re0-tb-dc0001-gr104",
      target: "ht-dc0001-gr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0042-dr101",
      source: "re0-ams-tr0610-dr101",
      target: "re0-ams-tr0042-dr101",
      label: ["400"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0409-dr101",
      source: "re0-ams-tr0610-dr101",
      target: "re0-ams-tr0409-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-ams-tr0610-dr101-re0-ams-tr0410-dr102",
      source: "re0-ams-tr0610-dr101",
      target: "re0-ams-tr0410-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-ams-tr0042-dr101-re0-ams-tr0409-dr101",
      source: "re0-ams-tr0042-dr101",
      target: "re0-ams-tr0409-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-re0-ams-tr0042-dr101-re0-ams-tr0410-dr102",
      source: "re0-ams-tr0042-dr101",
      target: "re0-ams-tr0410-dr102",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-asn-dc0002-gr101-gn-dc0002-gr102",
      source: "asn-dc0002-gr101",
      target: "gn-dc0002-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-asn-dc0002-gr101-re0-gn-dc0002-dr101",
      source: "asn-dc0002-gr101",
      target: "re0-gn-dc0002-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-asn-dc0002-gr101-re0-emn-dc0001-dr101",
      source: "asn-dc0002-gr101",
      target: "re0-emn-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gn-dc0002-gr102-re0-gn-dc0002-dr101",
      source: "gn-dc0002-gr102",
      target: "re0-gn-dc0002-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gn-dc0002-gr102-re0-emn-dc0001-dr101",
      source: "gn-dc0002-gr102",
      target: "re0-emn-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-dv-dc0001-gr101-zl-dc0001-gr102",
      source: "dv-dc0001-gr101",
      target: "zl-dc0001-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-dv-dc0001-gr101-re0-zl-dc0001-dr101",
      source: "dv-dc0001-gr101",
      target: "re0-zl-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-zl-dc0001-gr102-re0-zl-dc0001-dr101",
      source: "zl-dc0001-gr102",
      target: "re0-zl-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr101-ht-dc0001-gr102",
      source: "tb-dc0001-gr101",
      target: "ht-dc0001-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr101-re0-ht-dc0001-dr101",
      source: "tb-dc0001-gr101",
      target: "re0-ht-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr101-re0-tb-dc0001-dr101",
      source: "tb-dc0001-gr101",
      target: "re0-tb-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-tb-dc0001-gr101-re0-bd-dc0002-dr101",
      source: "tb-dc0001-gr101",
      target: "re0-bd-dc0002-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ht-dc0001-gr102-re0-ht-dc0001-dr101",
      source: "ht-dc0001-gr102",
      target: "re0-ht-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ht-dc0001-gr102-re0-tb-dc0001-dr101",
      source: "ht-dc0001-gr102",
      target: "re0-tb-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-ht-dc0001-gr102-re0-bd-dc0002-dr101",
      source: "ht-dc0001-gr102",
      target: "re0-bd-dc0002-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-weer-dc0002-gr101-venls-dc0003-gr102",
      source: "weer-dc0002-gr101",
      target: "venls-dc0003-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-weer-dc0002-gr101-re0-ah-tr0002-dr108",
      source: "weer-dc0002-gr101",
      target: "re0-ah-tr0002-dr108",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-venls-dc0003-gr102-re0-ah-tr0002-dr108",
      source: "venls-dc0003-gr102",
      target: "re0-ah-tr0002-dr108",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-vnn-dc0001-gr101-amr-dc0010-gr102",
      source: "vnn-dc0001-gr101",
      target: "amr-dc0010-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-vnn-dc0001-gr101-re0-vnn-dc0001-dr101",
      source: "vnn-dc0001-gr101",
      target: "re0-vnn-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-amr-dc0010-gr102-re0-vnn-dc0001-dr101",
      source: "amr-dc0010-gr102",
      target: "re0-vnn-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0001-gr101-hvs-dc0001-gr102",
      source: "mnd-dc0001-gr101",
      target: "hvs-dc0001-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-mnd-dc0001-gr101-re0-mnd-dc0001-dr101",
      source: "mnd-dc0001-gr101",
      target: "re0-mnd-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-hvs-dc0001-gr102-re0-mnd-dc0001-dr101",
      source: "hvs-dc0001-gr102",
      target: "re0-mnd-dc0001-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0010-gr101-gv-dc0052-gr102",
      source: "gv-dc0010-gr101",
      target: "gv-dc0052-gr102",
      label: ["200"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0010-gr101-re0-gv-dc0010-dr101",
      source: "gv-dc0010-gr101",
      target: "re0-gv-dc0010-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0010-gr101-re0-rt-tr0006-dr108",
      source: "gv-dc0010-gr101",
      target: "re0-rt-tr0006-dr108",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0052-gr102-re0-gv-dc0010-dr101",
      source: "gv-dc0052-gr102",
      target: "re0-gv-dc0010-dr101",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-gv-dc0052-gr102-re0-rt-tr0006-dr108",
      source: "gv-dc0052-gr102",
      target: "re0-rt-tr0006-dr108",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9001-HM-001-TVF-C9001-HM-002",
      source: "TVF-C9001-HM-001",
      target: "TVF-C9001-HM-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9001-HM-001-TVF-C9102-AMS-001",
      source: "TVF-C9001-HM-001",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1002-AMS-003-TVF-C9102-AMS-001",
      source: "TVF-D1002-AMS-003",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-D1002-AMS-005-TVF-C9102-AMS-001",
      source: "TVF-D1002-AMS-005",
      target: "TVF-C9102-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-003",
      source: "TVF-C9102-AMS-001",
      target: "TVF-C9006-AMS-003",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-001-TVF-C9901-AMS-002",
      source: "TVF-C9102-AMS-001",
      target: "TVF-C9901-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-001-TVF-C9001-AMS-002",
      source: "TVF-C9102-AMS-001",
      target: "TVF-C9001-AMS-002",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-001",
      source: "TVF-C9102-AMS-001",
      target: "TVF-C9006-AMS-001",
      label: ["2000"],
      edgeId: "1",
      type: "quadratic",
  },
  {
      id: "edge-TVF-C9001-MT-001-TVF-C9001-MT-002",
      source: "TVF-C9001-MT-001",
      target: "TVF-C9001-MT-002",
      label: ["4000"],
      edgeId: "1",
      type: "quadratic",
  }
  

  ]
 
};

export default function CollapseForce() 
{
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
    function toggleDescendantsVisibility(nodeId, data, visibilityState, parentVisibility) {
      // Find the node in the data
      const node = data.nodes.find(node => node.id === nodeId);
      if (!node) return;
  
      // Determine the new visibility state for descendants
      const newVisibility = parentVisibility !== undefined ? parentVisibility : !visibilityState[nodeId];
      
      // Set the visibility state of the node's descendants
      visibilityState[nodeId] = newVisibility;
  
      // Toggle visibility of its children and grandchildren recursively
      data.edges.forEach(edge => {
          if (edge.source === nodeId) {
              const childId = edge.target;
              const childNode = data.nodes.find(node => node.id === childId);
              if (childNode) {
                  // Set the visibility of the child node based on the new visibility state
                  childNode.visible = newVisibility;
                  // Toggle visibility of the edge
                  edge.visible = newVisibility;
                  // Toggle visibility of its descendants recursively
                  toggleDescendantsVisibility(childId, data, visibilityState, newVisibility);
              }
          }
      });
  }
  
  graphRef.current.on('node:click', function (e) {
      const clickedNode = e.item;
      const model = clickedNode.getModel();
  
      // Initialize the visibility state if it doesn't exist
      if (!graphRef.current.visibilityState) {
          graphRef.current.visibilityState = {};
          data.nodes.forEach(node => {
              graphRef.current.visibilityState[node.id] = node.visible !== false; // default visible to true
          });
      }
  
      // Toggle visibility of descendants of the clicked node, but keep the clicked node itself visible
      const currentVisibility = graphRef.current.visibilityState[model.id];
      toggleDescendantsVisibility(model.id, data, graphRef.current.visibilityState, !currentVisibility);
  
      // Ensure the clicked node remains visible
      model.visible = true;
  
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
