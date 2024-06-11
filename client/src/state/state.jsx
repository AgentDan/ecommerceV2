import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "poligon",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "poligonRhino",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "RhinoChrome", file: "poligonRhinoChrome", check: true},
                    {id: v1(), groupElements: 0, name: "RhinoGold", file: "poligonRhinoGold", check: false},
                    {id: v1(), groupElements: 0, name: "RhinoBlack", file: "poligonRhinoBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonFox",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "FoxChrome", file: "poligonFoxChrome", check: true},
                    {id: v1(), groupElements: 0, name: "FoxGold", file: "poligonFoxGold", check: false},
                    {id: v1(), groupElements: 0, name: "FoxBlack", file: "poligonFoxBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonBear",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "BearChrome", file: "poligonBearChrome", check: true},
                    {id: v1(), groupElements: 0, name: "BearGold", file: "poligonBearGold", check: false},
                    {id: v1(), groupElements: 0, name: "BearBlack", file: "poligonBearBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonHorse",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "HorseChrome", file: "poligonHorseChrome", check: true},
                    {id: v1(), groupElements: 0, name: "HorseGold", file: "poligonHorseGold", check: false},
                    {id: v1(), groupElements: 0, name: "HorseBlack", file: "poligonHorseBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonBull",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "BullChrome", file: "poligonBullChrome", check: true},
                    {id: v1(), groupElements: 0, name: "BullGold", file: "poligonBullGold", check: false},
                    {id: v1(), groupElements: 0, name: "BullBlack", file: "poligonBullBlack", check: false},
                ]
            },
        ]
    },
    {
        id: v1(),
        name: "konst",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "1000x150x95 RAL9011",
                def: [
                    {file: "polkaDefoult"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "1800x1600x300 RAL9004",
                def: [
                    {file: "polkaDefoult2"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "lab",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "logo",
                def: [
                    {file: "labDefoult"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "kinki",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "window",
                def: [
                    {file: "kinkiWindowDefoult1"},
                    {file: "kinkiWindowDefoult2"},
                    {file: "kinkiWindowDefoult3"},
                    {file: "kinkiWindowDefoult4"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "jovanova",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "appartment",
                def: [
                    {file: "javanovaDefoult1"},
                    {file: "javanovaDefoult2"},
                    {file: "javanovaDefoult3"},
                    {file: "javanovaDefoult4"},
                    {file: "javanovaDefoult5"},
                    {file: "javanovaDefoult6"},
                    {file: "javanovaDefoult7"},
                    {file: "javanovaDefoult8"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "flowers",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers1",
                def: [
                    {file: "rackFlowersDefoult1"},
                    {file: "rackFlowersDefoult2"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers2",
                def: [
                    {file: "rackFlowersDefoult3"},
                    {file: "rackFlowersDefoult4"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers3",
                def: [
                    {file: "rackFlowersDefoult5"},
                    {file: "rackFlowersDefoult6"},
                    {file: "rackFlowersDefoult7"},
                    {file: "rackFlowersDefoult8"},
                ],
                components: [
                ]
            }
        ]
    },
]