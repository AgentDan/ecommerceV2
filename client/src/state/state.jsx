import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "user@mail.com",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "Auser000",
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
            },
            {
                id: v1(),
                check: false,
                nameProject: "Auser001",
                def: [
                    {file: "kinkiTypeOneDefoult1"},
                    {file: "kinkiTypeOneDefoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
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
        ]
    }
]