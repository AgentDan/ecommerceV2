import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "user@mail.com",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "Var1",
                def: [
                    {file: "Var1A"},
                    {file: "Var1B"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    // {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "Var2",
                def: [
                    {file: "Var2A"},
                    {file: "Var2B"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    // {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "Var3",
                def: [
                    {file: "Var3A"},
                    {file: "Var3B"},
                    {file: "Var3C"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    // {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "Var4",
                def: [
                    {file: "Var4A"},
                    {file: "Var4B"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    // {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "user",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "Buser",
                def: [
                    {file: "kinkiTypeOneDefoult1"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "userA@mail.com",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "Cuser",
                def: [
                    {file: "kinkiTypeOneDefoult1"},
                    {file: "kinkiTypeOneDefoult2"},
                    {file: "kinkiTypeOneDefoult3"},
                    {file: "kinkiTypeOneDefoult4"},
                    {file: "kinkiTypeOneDefoult5"},
                    {file: "kinkiTypeOneDefoult6"},
                    {file: "kinkiTypeOneDefoult7"},
                    {file: "kinkiTypeOneDefoult8"},
                    {file: "kinkiTypeOneDefoult9"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                    {id: v1(), groupElements: 1, name: "balka", file: "balka", check: false},
                    {id: v1(), groupElements: 1, name: "balkaFalse", file: "balkaFalse", check: true},
                    {id: v1(), groupElements: 2, name: "bad", file: "bad", check: false},
                    {id: v1(), groupElements: 2, name: "badFalse", file: "badFalse", check: true},
                ]
            }
        ]
    },
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
        name: "gochi",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "gochiWell",
                def: [
                    {file: "gochiWell"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "gochiVodka",
                def: [
                    {file: "gochiVodka"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "konst",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "box",
                def: [
                    {file: "polkaDefoult"},
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
                nameProject: "kinkiBed",
                def: [
                    {file: "kinkiBadVar4Defoult1"},
                    {file: "kinkiBadVar4Defoult2"},
                    {file: "kinkiBadVar4Defoult3"},
                ],
                components: [
                ]
            },
            // {
            //     id: v1(),
            //     check: false,
            //     nameProject: "kinkiCeiling",
            //     def: [
            //         {file: "kinkiCeilingMDF"},
            //         {file: "kinkiCeilingRama"},
            //         {file: "kinkiCeilingRoup"},
            //     ],
            //     components: [
            //     ]
            // },
            // {
            //     id: v1(),
            //     check: false,
            //     nameProject: "kinkiCouch",
            //     def: [
            //         {file: "kinkiCouchDefoult"},
            //     ],
            //     components: [
            //         {id: v1(), groupElements: 0, name: "CouchClosed", file: "kinkiCouchClosed", check: true},
            //         {id: v1(), groupElements: 0, name: "CouchOpen", file: "kinkiCouchOpen", check: false},
            //     ]
            // }
        ]
    }
]