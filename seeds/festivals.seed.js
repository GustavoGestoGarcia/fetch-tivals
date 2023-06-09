const mongoose = require('mongoose')

const Festival = require('./../models/Festival.model')
const { formatDate } = require('../utils/date-utils')

const MONGO_URI = 'mongodb+srv://gestogarciagustavo:gestogarciagustavo@zipizape.c8g1pox.mongodb.net/Fetch-tivals'

const festsFromAPI = {
    "count": 704,
    "overflow": false,
    "next": "https://api.predicthq.com/v1/events/?country=ES&label=festival&limit=50&offset=50",
    "previous": null,
    "results": [
        {
            "relevance": 0,
            "id": "4Xjw3Q6BHCBbsPXyk6",
            "title": "Dreambeach at Playa De Villaricos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 56,
            "local_rank": 79,
            "phq_attendance": 2087,
            "entities": [
                {
                    "entity_id": "SevABcfYuwGiNnWEKTDABU",
                    "name": "Playa de Villaricos - Cuevas de Almanzora",
                    "type": "venue",
                    "formatted_address": "AL-7107, 33, 04616 Cuevas del Almanzora, Almería, España Palomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-12T22:00:00Z",
            "end": "2023-08-13T21:59:59Z",
            "updated": "2023-05-03T19:00:51Z",
            "first_seen": "2023-04-17T23:25:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.773495,
                37.246981
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.773495,
                        37.246981
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xgx-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355550",
                    "2509495"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8zcSdBKzHRcDgqxifJ",
            "title": "Malaga Feria",
            "description": "The Malaga fair commemorates the city's capture by the Catholic Monarchs in August 1487, and is celebrated with a range of activities such as competitions, performances and concerts, held in the fairground of El Real.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival",
                "music"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 2000000,
            "entities": [
                {
                    "entity_id": "qqM9WmT6BCAdhVA9ZiGdJL",
                    "name": "Malaga Feria",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "entertainment",
                        "event-group",
                        "family",
                        "food",
                        "music",
                        "recurring"
                    ],
                    "description": "La Feria de Malaga is a nonstop party, known as one of the biggest and best-attended annual celebrations in Andalucía.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150815 DURATION:P9D RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 691199,
            "start": "2023-08-11T22:00:00Z",
            "end": "2023-08-19T21:59:59Z",
            "updated": "2023-04-21T04:10:14Z",
            "first_seen": "2022-09-15T22:47:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.421702559325653,
                36.72122752848146
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.4260414,
                        36.7178112
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DLrNdyJFmCBi5oHeh7",
            "title": "Sal y Música",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 67,
            "phq_attendance": 1210,
            "entities": [
                {
                    "entity_id": "R4QML2iWPkBQb4JwmnZTUx",
                    "name": "San Pedro del Pinatar - Recinto de Fiestas",
                    "type": "venue",
                    "formatted_address": "C/ ALCALDE JOSÉ MARÍA TÁRRAGA Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-11T22:00:00Z",
            "end": "2023-08-12T21:59:59Z",
            "updated": "2023-05-06T07:15:05Z",
            "first_seen": "2023-05-06T02:58:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.79131,
                37.82625
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.79131,
                        37.82625
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-zzh-49z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359539",
                    "2514641"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HMYhu2KxTHdg3Lhwmm",
            "title": "Wave El Palmar",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 78,
            "phq_attendance": 599,
            "entities": [
                {
                    "entity_id": "dBpfVRWKP5NJdDDZFJGa9M",
                    "name": "Wave El Palmar",
                    "type": "venue",
                    "formatted_address": "Cadiz Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-11T22:00:00Z",
            "end": "2023-08-12T21:59:59Z",
            "updated": "2023-05-06T06:31:38Z",
            "first_seen": "2023-05-06T02:55:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.03616,
                36.23031
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.03616,
                        36.23031
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-9xk-yn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356922",
                    "7521735"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Ps53pKHLmdcEsEQx7o",
            "title": "Dreambeach at Playa De Villaricos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 56,
            "local_rank": 79,
            "phq_attendance": 2087,
            "entities": [
                {
                    "entity_id": "SevABcfYuwGiNnWEKTDABU",
                    "name": "Playa de Villaricos - Cuevas de Almanzora",
                    "type": "venue",
                    "formatted_address": "AL-7107, 33, 04616 Cuevas del Almanzora, Almería, España Palomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-11T22:00:00Z",
            "end": "2023-08-12T21:59:59Z",
            "updated": "2023-05-03T16:14:04Z",
            "first_seen": "2023-04-17T23:04:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.773495,
                37.246981
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.773495,
                        37.246981
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xgx-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355550",
                    "2509495"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4rPrazEVo3jKFfJACt",
            "title": "Fondo Flamenco - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-08-11T18:00:00Z",
            "end": "2023-08-11T18:00:00Z",
            "updated": "2023-05-12T23:45:43Z",
            "first_seen": "2023-05-11T00:07:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DUQwyqygpSv2Rk986a",
            "title": "Brunch Electronik Festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 198000,
            "start": "2023-08-11T13:00:00Z",
            "end": "2023-08-13T20:00:00Z",
            "updated": "2023-05-14T15:11:45Z",
            "first_seen": "2023-03-15T02:32:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GYsyqVukDykLiQaxKx",
            "title": "Fiestoron",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 78,
            "phq_attendance": 3453,
            "entities": [],
            "duration": 172799,
            "start": "2023-08-10T23:00:00Z",
            "end": "2023-08-12T22:59:59Z",
            "updated": "2023-04-29T23:36:29Z",
            "first_seen": "2023-04-29T23:36:06Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.52106,
                28.12014
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.52106,
                        28.12014
                    ],
                    "type": "Point"
                },
                "placekey": "@6ym-7fn-3h5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360176",
                    "2521519"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "B4Py7n9bGfXaEiTYcd",
            "title": "Dreambeach",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 73,
            "phq_attendance": 1102,
            "entities": [
                {
                    "entity_id": "357NFeJAYRkzRpA9EP6VJFd",
                    "name": "Dreambeach",
                    "type": "venue",
                    "formatted_address": "04616 Villaricos Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-10T22:00:00Z",
            "end": "2023-08-11T21:59:59Z",
            "updated": "2023-05-03T15:06:39Z",
            "first_seen": "2023-04-18T01:38:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.7702954,
                37.2496018
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.7702954,
                        37.2496018
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xgw-kmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355550",
                    "2509495"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "D36LPf6aSAUkmXM7qD",
            "title": "Sal y Música 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 68,
            "phq_attendance": 1438,
            "entities": [
                {
                    "entity_id": "R4QML2iWPkBQb4JwmnZTUx",
                    "name": "San Pedro del Pinatar - Recinto de Fiestas",
                    "type": "venue",
                    "formatted_address": "C/ ALCALDE JOSÉ MARÍA TÁRRAGA Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-10T22:00:00Z",
            "end": "2023-08-11T21:59:59Z",
            "updated": "2023-04-24T23:23:46Z",
            "first_seen": "2023-04-24T23:23:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.79131,
                37.82625
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.79131,
                        37.82625
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-zzh-49z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359539",
                    "2514641"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E2pRw4Afof4EyUYoFd",
            "title": "Eros Ramazzotti - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-08-10T20:00:00Z",
            "end": "2023-08-10T20:00:00Z",
            "updated": "2023-04-19T00:19:27Z",
            "first_seen": "2023-01-20T00:14:39Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9yn97YVhixhrdBXoD6",
            "title": "Festival Begur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 86,
            "phq_attendance": 1226,
            "entities": [
                {
                    "entity_id": "cBTzjVkx3QsmpGXjHeZzJF",
                    "name": "Begur",
                    "type": "venue",
                    "formatted_address": "Pati de les Escoles Velles Girona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-09T22:00:00Z",
            "end": "2023-08-10T21:59:59Z",
            "updated": "2023-04-24T23:21:34Z",
            "first_seen": "2023-04-24T23:21:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.2085983,
                41.9546308
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.2085983,
                        41.9546308
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-3s6-7t9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534012",
                    "3129007"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Gq86DdffyFRWi3v8ix",
            "title": "Dreambeach at Playa De Villaricos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 53,
            "local_rank": 75,
            "phq_attendance": 1348,
            "entities": [
                {
                    "entity_id": "SevABcfYuwGiNnWEKTDABU",
                    "name": "Playa de Villaricos - Cuevas de Almanzora",
                    "type": "venue",
                    "formatted_address": "AL-7107, 33, 04616 Cuevas del Almanzora, Almería, España Palomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-09T22:00:00Z",
            "end": "2023-08-10T21:59:59Z",
            "updated": "2023-05-03T14:03:54Z",
            "first_seen": "2023-04-17T22:46:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.773495,
                37.246981
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.773495,
                        37.246981
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xgx-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355550",
                    "2509495"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "67U3oJGoU4XsLkJh9P",
            "title": "Medusa Sunbeach Festival",
            "description": "Medusa Sunbeach is a huge electronic music festival held in the Spanish coastal town of Cullera. Across six days, visually spectacular stages play host to a lineup of superstars from the worlds of EDM, house, hardstyle and techno.",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 93,
            "local_rank": 100,
            "phq_attendance": 145000,
            "entities": [
                {
                    "entity_id": "HWhRqLRR98AhUfY95gNtLi",
                    "name": "Valencia",
                    "type": "venue",
                    "formatted_address": "Valencia, Spain 46023 Valencia Spain"
                },
                {
                    "entity_id": "3UC7U3fBZdxa4vWsFD94ih",
                    "name": "Medusa Sunbeach Festival",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "music",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150814 DURATION:P5DT16H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 518399,
            "start": "2023-08-08T22:00:00Z",
            "end": "2023-08-14T21:59:59Z",
            "updated": "2023-04-21T04:11:00Z",
            "first_seen": "2022-11-21T23:02:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.241546295787026,
                39.16101286665284
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.2428911,
                        39.161602
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361970",
                    "2518949"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9MG5Hc8MAnJ7rdQuCf",
            "title": "Leyendas Del Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 71,
            "phq_attendance": 1150,
            "entities": [
                {
                    "entity_id": "4fssHSXqGGemP94DvLq4id",
                    "name": "Leyendas del Rock Festival",
                    "type": "venue",
                    "formatted_address": "Calle San Vicente de Raspeig, 1 Villena Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-08-08T22:00:00Z",
            "end": "2023-08-12T21:59:59Z",
            "updated": "2023-03-15T06:06:53Z",
            "first_seen": "2023-03-15T03:13:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.49171,
                38.38728
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.49171,
                        38.38728
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcf-kfz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2509596"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9twJDDgnr5zBzzUXG9",
            "title": "Sonorama Ribera",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 79,
            "phq_attendance": 2420,
            "entities": [
                {
                    "entity_id": "Y9K3jGmfsevFPvmXebchKs",
                    "name": "Sonarma Ribera,",
                    "type": "venue",
                    "formatted_address": "Aranda de Duero Spain"
                }
            ],
            "duration": 431999,
            "start": "2023-08-08T22:00:00Z",
            "end": "2023-08-13T21:59:59Z",
            "updated": "2023-05-09T23:54:07Z",
            "first_seen": "2023-04-29T23:49:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7019972,
                41.6684646
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7019972,
                        41.6684646
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-yvk-wp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3127460",
                    "6356343",
                    "3129877"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "A24MjP9RdbuSGbPtSz",
            "title": "Dreambeach at Playa De Villaricos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 53,
            "local_rank": 75,
            "phq_attendance": 1348,
            "entities": [
                {
                    "entity_id": "SevABcfYuwGiNnWEKTDABU",
                    "name": "Playa de Villaricos - Cuevas de Almanzora",
                    "type": "venue",
                    "formatted_address": "AL-7107, 33, 04616 Cuevas del Almanzora, Almería, España Palomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-08T22:00:00Z",
            "end": "2023-08-09T21:59:59Z",
            "updated": "2023-05-03T14:03:15Z",
            "first_seen": "2023-04-17T22:53:30Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.773495,
                37.246981
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.773495,
                        37.246981
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xgx-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355550",
                    "2509495"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4CinufE4SR2HBjhxPG",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-08-07T20:00:00Z",
            "end": "2023-08-07T20:00:00Z",
            "updated": "2023-03-15T08:13:08Z",
            "first_seen": "2023-03-15T03:11:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7kkjhNYZpZK4wrSrJ2",
            "title": "La Troya Residency",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 61,
            "phq_attendance": 700,
            "entities": [
                {
                    "entity_id": "Azf9xjfhPaLwLF2Q5Ywg4x",
                    "name": "Club Chinois",
                    "type": "venue",
                    "formatted_address": "Passeig Joan Carles I, 17 Ibiza Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-08-06T22:00:00Z",
            "end": "2023-08-08T21:59:59Z",
            "updated": "2023-04-13T23:50:31Z",
            "first_seen": "2023-04-13T23:50:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.44185,
                38.91671
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.44185,
                        38.91671
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mwp-9xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356034",
                    "6692442"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3J6kb6eKFda7QTkwmY",
            "title": "Moddermass Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 84,
            "phq_attendance": 642,
            "entities": [
                {
                    "entity_id": "F2bgq7as9M6YKVSm4fdBSV",
                    "name": "Casa de Cultura Azagra",
                    "type": "venue",
                    "formatted_address": "Patio Casa de Cultura. C/ Donantes de Sangre Navarra Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-04T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-04-30T23:32:31Z",
            "first_seen": "2023-04-20T23:28:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.67607,
                42.69539
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.67607,
                        42.69539
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-9mq-9xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3115609",
                    "6355235",
                    "6359604",
                    "3127995"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3115609",
                    "6355235",
                    "6359749",
                    "3114472"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Eti5eawhR8mHrHnJWH",
            "title": "Polisònic",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 61,
            "phq_attendance": 783,
            "entities": [
                {
                    "entity_id": "PnyVYdPwRCRgqwxxWdtaga",
                    "name": "Jardins de la Marquesa",
                    "type": "venue",
                    "formatted_address": "Gandía Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-04T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-04-08T01:43:30Z",
            "first_seen": "2023-03-29T01:11:29Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.1818491,
                38.9651489
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.1818491,
                        38.9651489
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-c79-3bk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361996",
                    "2517367"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8PE4VY6wuns2ibiNDb",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-08-04T20:00:00Z",
            "end": "2023-08-04T20:00:00Z",
            "updated": "2023-05-05T23:43:52Z",
            "first_seen": "2022-12-02T00:12:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6HmXoe3MqgiBdFNTD5",
            "title": "Felicia POP Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 91,
            "phq_attendance": 3035,
            "entities": [
                {
                    "entity_id": "37qnjee7TLsEQcwCpyHMbTa",
                    "name": "Parque da Hortiña",
                    "type": "venue",
                    "formatted_address": "Limodre 15520 Fene Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-08-03T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-05-14T01:56:23Z",
            "first_seen": "2023-04-13T23:27:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.1949225,
                43.4459105
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.1949225,
                        43.4459105
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cgt-c5z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357305",
                    "3113481"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "C8wMTJFKxouWvXfEAT",
            "title": "Santander Music Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 76,
            "phq_attendance": 4124,
            "entities": [
                {
                    "entity_id": "32u4uuzGk36XKWz57bk2Lid",
                    "name": "Campa de la Magdalena",
                    "type": "venue",
                    "formatted_address": "Avda. de La Magdalena 39005 Santander Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-08-03T22:00:00Z",
            "end": "2023-08-06T21:59:59Z",
            "updated": "2023-03-02T21:26:36Z",
            "first_seen": "2023-03-02T21:26:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7693794,
                43.468188
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7693794,
                        43.468188
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-k9n-qfz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360720",
                    "3109718"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FSXPqkUseQS5mz7Fo6",
            "title": "Vikin Sons Catoira",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 92,
            "phq_attendance": 2439,
            "entities": [
                {
                    "entity_id": "VEDNaWHynFSbpwpXe2XgVv",
                    "name": "Praia fluvial. Catoira",
                    "type": "venue",
                    "formatted_address": "Praia fluvial, Catoira Pontevedra Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-08-03T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-04-26T23:53:03Z",
            "first_seen": "2023-04-26T23:50:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.7216,
                42.66678
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.7216,
                        42.66678
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-x5q-gkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360213",
                    "3125602"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6v3bdymxXrKv2c9sNt",
            "title": "Brilla Torrevieja",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 66,
            "phq_attendance": 968,
            "entities": [
                {
                    "entity_id": "s43qQqZhecUQ5FchiqJRb5",
                    "name": "Parque Antonio Soria",
                    "type": "venue",
                    "formatted_address": "Avenida Delfina Viudes sn 03183 Torrevieja Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-02T22:00:00Z",
            "end": "2023-08-03T21:59:59Z",
            "updated": "2023-03-15T07:05:12Z",
            "first_seen": "2023-03-15T03:12:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.6793721,
                37.9952213
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.6793721,
                        37.9952213
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-wv3-gzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355506",
                    "2510253"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7UnFyRTNLtt68nsH6F",
            "title": "Festiuet",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 77,
            "phq_attendance": 2180,
            "entities": [
                {
                    "entity_id": "Uw6vudXFeEJnjfRKvLKKxv",
                    "name": "FESTIUET",
                    "type": "venue",
                    "formatted_address": "Platja de Sant Salvador El Vendrell Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-08-02T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-03-15T08:20:43Z",
            "first_seen": "2023-03-15T03:10:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.53448,
                41.18182
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.53448,
                        41.18182
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-gx7-6tv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361405",
                    "6697216"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8ftiWfGjoqR4bvaFTG",
            "title": "Prestoso Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 92,
            "phq_attendance": 2335,
            "entities": [
                {
                    "entity_id": "d9pnsgp2ZM6ehF69tQ5nha",
                    "name": "Recinto Presto Fest en Cangas del Narcea",
                    "type": "venue",
                    "formatted_address": "Cangas Del Narcea Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-08-02T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-05-14T06:53:53Z",
            "first_seen": "2023-03-15T03:10:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.5419053,
                43.1580905
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.5419053,
                        43.1580905
                    ],
                    "type": "Point"
                },
                "placekey": "@4f5-bpd-3t9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359918",
                    "3118423"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DJuDa7F4DBpFJ38p8X",
            "title": "pure pacha",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 63,
            "phq_attendance": 933,
            "entities": [
                {
                    "entity_id": "33L9ZjqfyVWy8ng7YnKTXnT",
                    "name": "Pacha Ibiza",
                    "type": "venue",
                    "formatted_address": "Avenida de Agosto 8 07800 Ibiza Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-02T22:00:00Z",
            "end": "2023-08-03T21:59:59Z",
            "updated": "2023-05-13T23:50:15Z",
            "first_seen": "2023-05-13T23:49:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.4206,
                38.90673
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.4206,
                        38.90673
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mw3-3nq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356034",
                    "6695972"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "s8dJjww3CHrosDijgJ",
            "parent_event": {
                "parent_event_id": "AMNh9Qymy3iHhti26G"
            },
            "title": "Festival Arenal Sound",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 79,
            "phq_attendance": 3412,
            "entities": [
                {
                    "entity_id": "kBsXnVfFiCzu6WbeUrXXNA",
                    "name": "Arenal Sound",
                    "type": "venue",
                    "formatted_address": "Burriana Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-08-02T22:00:00Z",
            "end": "2023-08-06T21:59:59Z",
            "updated": "2023-05-06T14:35:03Z",
            "first_seen": "2023-03-30T23:31:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.0713293,
                39.8810443
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.0713293,
                        39.8810443
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-dyg-psq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356988",
                    "2518445"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AGQ28Tt5nVwHsXeMi9",
            "title": "The Juergas Rock Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 79,
            "phq_attendance": 1053,
            "entities": [
                {
                    "entity_id": "NGPCvLX7at4reDEYjqcUZ4",
                    "name": "Playa de Adra",
                    "type": "venue",
                    "formatted_address": "Camino Ingenio San Nicolás, Adra Almería Spain"
                },
                {
                    "entity_id": "pSyMvbYH6NJ5tFTEwxgKqx",
                    "name": "Juergas Rock Festival",
                    "type": "event-group",
                    "formatted_address": "04770 Adra Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20180801T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 345599,
            "start": "2023-08-01T22:00:00Z",
            "end": "2023-08-05T21:59:59Z",
            "updated": "2023-05-09T17:52:46Z",
            "first_seen": "2023-01-26T21:15:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.01418,
                36.74472
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.01418,
                        36.74472
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-nfm-zzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355520",
                    "2522430"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CPbBsjLq9SowKS3tET",
            "title": "Concert Music Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 76,
            "phq_attendance": 1085,
            "entities": [
                {
                    "entity_id": "p3C38Ze6LyXMdqcuzBEecZ",
                    "name": "Poblado de Sancti Petri",
                    "type": "venue",
                    "formatted_address": "Calle Avenida 11139 Chiclana de la Frontera Poblado Sancti Petri) Cádiz Chiclana De La Frontera Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-08-01T22:00:00Z",
            "end": "2023-08-02T21:59:59Z",
            "updated": "2023-05-05T23:55:06Z",
            "first_seen": "2023-03-20T23:23:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.20735,
                36.39397
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.20735,
                        36.39397
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-bh3-mkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356930",
                    "2511400"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7Ba7vUm6ySm8T9wR8a",
            "title": "Tiempos Nuevos OVD",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 53,
            "phq_attendance": 378,
            "entities": [
                {
                    "entity_id": "bWzDKLEjiMdPwxQyvUp3gE",
                    "name": "Edificio Histórico de la Universidad de Oviedo",
                    "type": "venue",
                    "formatted_address": "Calle San Francisco 3 33003 Oviedo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-31T22:00:00Z",
            "end": "2023-08-01T21:59:59Z",
            "updated": "2023-05-05T05:44:58Z",
            "first_seen": "2023-04-24T23:23:17Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.8467,
                43.36182
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.8467,
                        43.36182
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-8hr-4vz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359947",
                    "3114711"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AMNh9Qymy3iHhti26G",
            "title": "Arenal Sound Festival",
            "description": "The Arenal Sound festival is an independent music festival that has been held on El Arenal beach, in the town of Burriana (province of Castellón, Spain), during the first week of August since 2010. It takes place the first week of August. The Arenal Sound, also called AS , is characterized by its large influx of young people and differs from other festivals by its proximity to the beach, having one of its stages on the sand itself. Due to its affordable price compared to other festivals, it is becoming one of the benchmarks in the national summer season.",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 98,
            "local_rank": 100,
            "phq_attendance": 250000,
            "entities": [
                {
                    "entity_id": "DNYgy5KDk2m3PVyBUBZwgz",
                    "name": "Arenal Sound",
                    "type": "venue",
                    "formatted_address": "Playa del Arenal 12530 Burriana Spain"
                },
                {
                    "entity_id": "YqtCRJFdQHwRBtcGaXxkJE",
                    "name": "Arenal Sound",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "entertainment",
                        "event-group",
                        "music",
                        "recurring",
                        "social"
                    ],
                    "description": "Arenal Sound is a open-air music festival held each summer in the Spanish coastal town of Borianna. It is one of the country's flagship festivals and is hugely popular with young music fans.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150728 DURATION:P4DT16H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 518399,
            "start": "2023-07-31T22:00:00Z",
            "end": "2023-08-06T21:59:59Z",
            "updated": "2023-04-06T04:03:09Z",
            "first_seen": "2022-09-18T23:16:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.06768726115944694,
                39.86450710315258
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.0714608,
                        39.8659692
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356988",
                    "2518208"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ABy6rfSLymDiyfN4ne",
            "title": "Starlite Calatana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-31T20:00:00Z",
            "end": "2023-07-31T20:00:00Z",
            "updated": "2023-03-15T08:21:45Z",
            "first_seen": "2023-03-15T03:13:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AE9b7J9ReV2LYhG6za",
            "title": "Es Jardí 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 72,
            "phq_attendance": 634,
            "entities": [
                {
                    "entity_id": "wWbwiuksU8LFRcV5URxQwk",
                    "name": "Antiguo Aquapark",
                    "type": "venue",
                    "formatted_address": ""
                }
            ],
            "duration": 86399,
            "start": "2023-07-29T22:00:00Z",
            "end": "2023-07-30T21:59:59Z",
            "updated": "2023-05-05T23:54:41Z",
            "first_seen": "2023-03-20T23:31:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.510368699999958,
                39.4909085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.510368699999958,
                        39.4909085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bm6-mrk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356031",
                    "8740851"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5fgh3DF55aMKMmmzgh",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-29T20:00:00Z",
            "end": "2023-07-29T20:00:00Z",
            "updated": "2023-03-15T04:47:31Z",
            "first_seen": "2023-03-15T03:10:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BBriYF6CwL2z7BJ7mi",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Zaz + Luisa Sobral - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 74,
            "phq_attendance": 173,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-29T20:00:00Z",
            "end": "2023-07-29T20:00:00Z",
            "updated": "2023-05-06T03:31:25Z",
            "first_seen": "2023-05-06T00:45:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3pyqBWfTYXASt9UxKs",
            "title": "Festival Enclave de Agua at Festival Enclave De Agua Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 50,
            "local_rank": 66,
            "phq_attendance": 1002,
            "entities": [
                {
                    "entity_id": "S3LHhHhYP3sXJcbB6d6FX5",
                    "name": "Festival Enclave De Agua Grounds",
                    "type": "venue",
                    "formatted_address": "Soria Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-28T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-04-20T07:46:25Z",
            "first_seen": "2023-04-20T07:30:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4547153,
                41.7618124
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4547153,
                        41.7618124
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-vkg-mx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3108680",
                    "6361204",
                    "3108681"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8SZVA8fE3BRKYHbe3c",
            "title": "Barcia Metal Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 80,
            "phq_attendance": 2383,
            "entities": [
                {
                    "entity_id": "3HY8dAJFHJPMGs6AMXtXLv",
                    "name": "Auditorio Torres Oscuras",
                    "type": "venue",
                    "formatted_address": "Las Torres, Torreperogil Jaén Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-28T22:00:00Z",
            "end": "2023-07-30T21:59:59Z",
            "updated": "2022-12-16T21:36:18Z",
            "first_seen": "2022-12-16T21:33:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.2875436,
                38.0323956
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.2875436,
                        38.0323956
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-n9g-kvf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516394",
                    "6358535",
                    "2510270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9VsiUm6Qm67uuyyDYw",
            "title": "Barna 'n' Roll",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-28T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-05-08T20:39:36Z",
            "first_seen": "2023-01-28T20:46:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "D2zB45unawq98ZcvPJ",
            "title": "Monegros",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 86,
            "phq_attendance": 2120,
            "entities": [
                {
                    "entity_id": "G2Yn9GVEiiw2LcdjS7QJBM",
                    "name": "Monegros Desert Festival",
                    "type": "venue",
                    "formatted_address": "Nacional II, KM416 22520 Fraga Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-28T22:00:00Z",
            "end": "2023-07-30T21:59:59Z",
            "updated": "2023-03-15T08:22:29Z",
            "first_seen": "2023-03-15T03:13:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.36537,
                41.5234
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.36537,
                        41.5234
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-bx7-f2k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358344",
                    "3122157"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "gthUrYxpVCtxFxChFi",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Alborosie + JahSta - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 74,
            "phq_attendance": 173,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-28T20:00:00Z",
            "end": "2023-07-28T20:00:00Z",
            "updated": "2023-05-06T04:06:43Z",
            "first_seen": "2023-05-06T00:12:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5R33VYLZETUZdoDqj3",
            "title": "MARINA BEACH",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 55,
            "phq_attendance": 703,
            "entities": [
                {
                    "entity_id": "cJDvnk3QxNdYcVVqx9CDc",
                    "name": "Marina Beach Club",
                    "type": "venue",
                    "formatted_address": "s/n Carrer Marina Real Juan Carlos I 46024 València Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-28T21:59:59Z",
            "updated": "2023-05-13T23:39:03Z",
            "first_seen": "2023-05-13T23:38:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.32576,
                39.46226
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.32576,
                        39.46226
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8gf-835"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2513284"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7EwkMaUGNAneQqa5D3",
            "title": "Mobofest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 67,
            "phq_attendance": 1769,
            "entities": [
                {
                    "entity_id": "CCVU43YBxd9MLpVRbeLLgm",
                    "name": "Parc de n'Hereveta, Porreres",
                    "type": "venue",
                    "formatted_address": "Palma De Mallorca Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-02-10T21:27:07Z",
            "first_seen": "2023-02-10T21:26:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.64663,
                39.57119
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.64663,
                        39.57119
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bp8-tn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8ToaXsSTaRQ7vBK9EY",
            "title": "Idilic Festival (Girona)",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 86,
            "phq_attendance": 2375,
            "entities": [
                {
                    "entity_id": "WCKyD6ZGUXztnHZisqgt8S",
                    "name": "Espai masia Bas",
                    "type": "venue",
                    "formatted_address": "Platja d'Aro, Girona, España Girona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-03-20T23:39:44Z",
            "first_seen": "2023-03-20T23:35:40Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.06513,
                41.8218
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.06513,
                        41.8218
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-5kn-8jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534041",
                    "3125800"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "A8oFiMbjU5SPUE84ez",
            "title": "17º Ribeira Sacra Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 89,
            "phq_attendance": 1412,
            "entities": [
                {
                    "entity_id": "jr6frptrQg2kSvBVt7EWe4",
                    "name": "Festival Ribeira Sacra",
                    "type": "venue",
                    "formatted_address": "Doade S/N, 27424, Lugo Monforte De Lemos Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-30T21:59:59Z",
            "updated": "2023-04-27T00:41:38Z",
            "first_seen": "2023-04-26T23:42:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.48175,
                42.41498
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.48175,
                        42.41498
                    ],
                    "type": "Point"
                },
                "placekey": "@7dm-8dh-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359217",
                    "3123880"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3114964",
                    "6359872",
                    "3114965"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AEuRXxfqRVveRRuygT",
            "title": "Low Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 73,
            "phq_attendance": 1685,
            "entities": [
                {
                    "entity_id": "GpbVQyfbnGEEEtkjjLPjPd",
                    "name": "Ciudad Deportiva Guillermo Amor",
                    "type": "venue",
                    "formatted_address": "C/ Capitán Cortés S/n 03502 Benidorm Spain"
                },
                {
                    "entity_id": "mqvsimgpPaGs2Ymm7uFtLs",
                    "name": "Low Festival Day",
                    "type": "event-group",
                    "formatted_address": "03502 Benidorm Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20160729T120000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 259199,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-30T21:59:59Z",
            "updated": "2023-04-11T23:09:35Z",
            "first_seen": "2022-12-12T21:30:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.1345186,
                38.546756
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.1345186,
                        38.546756
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-bxh-jjv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355407",
                    "2521088"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CEwsd46kpwmWRDJsYe",
            "title": "Festival Enclave de Agua at Festival Enclave De Agua Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 50,
            "local_rank": 66,
            "phq_attendance": 1002,
            "entities": [
                {
                    "entity_id": "S3LHhHhYP3sXJcbB6d6FX5",
                    "name": "Festival Enclave De Agua Grounds",
                    "type": "venue",
                    "formatted_address": "Soria Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-07-28T21:59:59Z",
            "updated": "2023-04-20T07:46:25Z",
            "first_seen": "2023-04-20T07:40:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4547153,
                41.7618124
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4547153,
                        41.7618124
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-vkg-mx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3108680",
                    "6361204",
                    "3108681"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Dpcyfdm2eqxB9AFjmG",
            "title": "Festival Internacional de Música de Cambrils",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 86,
            "phq_attendance": 3864,
            "entities": [
                {
                    "entity_id": "8CTR3gwJi3cJ5cic9V2rV7",
                    "name": "Parc Del Pinaret",
                    "type": "venue",
                    "formatted_address": "2 Carrer Josep Serra i Dalmau 43850 Cambrils Spain"
                }
            ],
            "duration": 863999,
            "start": "2023-07-27T22:00:00Z",
            "end": "2023-08-06T21:59:59Z",
            "updated": "2023-03-15T03:28:40Z",
            "first_seen": "2023-03-15T03:15:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.049531,
                41.0769815
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.049531,
                        41.0769815
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-hh4-pqf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361281",
                    "3126888"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HnYu6VSgfh2EhSqmZz",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-27T20:00:00Z",
            "end": "2023-07-27T20:00:00Z",
            "updated": "2023-03-15T08:17:43Z",
            "first_seen": "2023-03-15T03:11:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FHTNn9BgA8XL4o8Wce",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Abono fin de semana 27-28-29 julio - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 78,
            "phq_attendance": 285,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-27T18:55:00Z",
            "end": "2023-07-27T18:55:00Z",
            "updated": "2023-05-06T03:30:23Z",
            "first_seen": "2023-05-05T23:33:32Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5trwgBGynEGTVrSuNY",
            "title": "Sabatic Urban Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 37,
            "local_rank": 52,
            "phq_attendance": 213,
            "entities": [
                {
                    "entity_id": "sWXsJswgmEZUUN9tWDh9Um",
                    "name": "Autocine Malaga Cesurfp",
                    "type": "venue",
                    "formatted_address": "29004 Málaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-27T18:30:00Z",
            "end": "2023-07-27T18:30:00Z",
            "updated": "2023-05-06T01:19:25Z",
            "first_seen": "2023-05-05T23:51:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.47483,
                36.68195
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.47483,
                        36.68195
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnr-bc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6544402"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DmQMvQ6rcU5jKwVAto",
            "title": "Goran Bregovic+Balkan Paradise Orch- ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-27T18:30:00Z",
            "end": "2023-07-27T18:30:00Z",
            "updated": "2023-05-09T11:13:10Z",
            "first_seen": "2023-03-31T00:09:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4DGnzAEU3vp9o96f5u",
            "title": "Noches Mágicas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 71,
            "phq_attendance": 2011,
            "entities": [
                {
                    "entity_id": "FS3BBifxJZeFttPQh7ns8M",
                    "name": "Jardines De Abril",
                    "type": "venue",
                    "formatted_address": "Alicante Spain"
                }
            ],
            "duration": 1555199,
            "start": "2023-07-26T22:00:00Z",
            "end": "2023-08-13T21:59:59Z",
            "updated": "2023-05-02T02:33:15Z",
            "first_seen": "2023-04-22T02:14:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.4906855,
                38.3459963
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.4906855,
                        38.3459963
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vc8-swk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "SrBietr3dNU77vkSJJ",
            "title": "Enclave De Agua Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 73,
            "phq_attendance": 2359,
            "entities": [
                {
                    "entity_id": "d7ptgv4XqCawKEBgY9UBHM",
                    "name": "Enclave de Agua",
                    "type": "venue",
                    "formatted_address": "P.º San Prudencio, 14 42005 Soria Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-26T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-05-04T01:07:09Z",
            "first_seen": "2023-04-03T23:14:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.45472,
                41.76181
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.45472,
                        41.76181
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-vkg-mx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3108680",
                    "6361204",
                    "3108681"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6HjdVGH7eBgDRfhL5C",
            "title": "M-Clan + Seguridad Social - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-26T18:30:00Z",
            "end": "2023-07-26T18:30:00Z",
            "updated": "2023-05-09T15:00:41Z",
            "first_seen": "2023-03-31T00:05:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "59kxezoZWXaDheTxac",
            "title": "Festival Cabo de Plata",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 83,
            "phq_attendance": 3600,
            "entities": [
                {
                    "entity_id": "FDYSBxrPHbx7k8McTWcNLN",
                    "name": "Cabo de Plata Festival",
                    "type": "venue",
                    "formatted_address": "AV. DE LA MAR, 138, Barbate Cadiz Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-25T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-03-09T21:17:47Z",
            "first_seen": "2023-03-09T21:16:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.92715,
                36.18688
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.92715,
                        36.18688
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-84k-yy9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356922",
                    "2521335"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9keB8cNZJXtyVdK6xW",
            "title": "Toquinho - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-25T19:30:00Z",
            "end": "2023-07-25T19:30:00Z",
            "updated": "2023-05-07T21:11:26Z",
            "first_seen": "2023-03-31T22:46:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EgRBBTofdde2gqNzSK",
            "title": "Festival TerraCeo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 61,
            "phq_attendance": 542,
            "entities": [
                {
                    "entity_id": "qdfu6asYdYYvzUHD3GNM35",
                    "name": "Auditorio Mar de Vigo",
                    "type": "venue",
                    "formatted_address": "Avenida De Beiramar 59 36208 Vigo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-24T22:00:00Z",
            "end": "2023-07-25T21:59:59Z",
            "updated": "2023-05-11T23:53:24Z",
            "first_seen": "2023-05-11T23:52:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.73724,
                42.22828
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.73724,
                        42.22828
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yqh-5mk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360254",
                    "3127742"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5wbM6XV2MtvE9GfDAq",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-24T20:00:00Z",
            "end": "2023-07-24T20:00:00Z",
            "updated": "2023-03-15T06:06:23Z",
            "first_seen": "2023-03-15T03:12:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EKtwmARZadxa2hcF8X",
            "title": "Soft Cell - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-23T19:30:00Z",
            "end": "2023-07-23T19:30:00Z",
            "updated": "2023-05-08T23:03:49Z",
            "first_seen": "2023-03-31T00:15:04Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GDhFMktM3xKmfiTA9i",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Luz Casal + Valeria Castro - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 74,
            "phq_attendance": 164,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-23T18:00:00Z",
            "end": "2023-07-23T18:00:00Z",
            "updated": "2023-05-06T03:34:54Z",
            "first_seen": "2023-05-06T00:12:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4HKaziU9GAJNFYDjjm",
            "title": "Antonio Orozco - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-22T20:00:00Z",
            "end": "2023-07-22T20:00:00Z",
            "updated": "2023-04-26T00:15:08Z",
            "first_seen": "2023-01-25T00:10:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GHqYQ6VbCNHm8knwjZ",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Salif Keita + KOKOKO! - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 78,
            "phq_attendance": 267,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-22T20:00:00Z",
            "end": "2023-07-22T20:00:00Z",
            "updated": "2023-05-06T04:04:32Z",
            "first_seen": "2023-05-05T23:46:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4Dgzzufo9LvvpwHVtT",
            "title": "Karnanfest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 62,
            "phq_attendance": 522,
            "entities": [
                {
                    "entity_id": "iszujchjfYHY8c7YA2Cfmf",
                    "name": "Recinto Ferial El Carmen",
                    "type": "venue",
                    "formatted_address": "Avenida del Carnaval 21410 Isla Cristina Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-21T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-01-19T21:12:56Z",
            "first_seen": "2023-01-19T21:12:32Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.3208009,
                37.197359
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.3208009,
                        37.197359
                    ],
                    "type": "Point"
                },
                "placekey": "@7df-pyv-3h5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516547",
                    "6358218",
                    "2516431"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516547",
                    "6358217",
                    "2516548"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5ZYkz6ZJQAPeVAYDzo",
            "title": "Festival Bombastic Asturia 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 87,
            "phq_attendance": 2153,
            "entities": [
                {
                    "entity_id": "Pgh88SnjZVaGtSeyQYHrDq",
                    "name": "Aerodromo La Morgal",
                    "type": "venue",
                    "formatted_address": "Asturias Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-21T22:00:00Z",
            "end": "2023-07-23T21:59:59Z",
            "updated": "2023-03-21T00:35:33Z",
            "first_seen": "2023-03-20T23:58:39Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.8317068,
                43.4370908
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.8317068,
                        43.4370908
                    ],
                    "type": "Point"
                },
                "placekey": "@4f5-dvv-grk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359938",
                    "3125961"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359947",
                    "3114711"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E3VmbG3higYtzf6fPA",
            "title": "Feria Internacional del Libro - FIL Lima",
            "description": "it is the largest editorial event and most prestigious of Peru.",
            "category": "community",
            "labels": [
                "community",
                "education",
                "festival"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 565000,
            "entities": [],
            "duration": 1468799,
            "start": "2023-07-21T22:00:00Z",
            "end": "2023-08-07T21:59:59Z",
            "updated": "2023-02-22T18:21:02Z",
            "first_seen": "2023-02-22T18:20:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.8616032000000001,
                41.692009
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.8616032000000001,
                        41.692009
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-6p4-c89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362983",
                    "3120059"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362983",
                    "3104324"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "G3UpZaaJhPdw6rTpig",
            "title": "Reggaeton Beach Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-21T22:00:00Z",
            "end": "2023-07-23T21:59:59Z",
            "updated": "2023-05-08T09:00:57Z",
            "first_seen": "2022-12-09T20:44:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HHrXMfGR5MdAVs3gQc",
            "title": "CONCERTS DE VIVERS",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 67,
            "local_rank": 76,
            "phq_attendance": 7000,
            "entities": [
                {
                    "entity_id": "iciCmf6HVisLLMKzSGrSUW",
                    "name": "Jardines del Real o Viveros",
                    "type": "venue",
                    "formatted_address": "1 Carrer de Cavanilles 46010 València Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-21T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-05-05T23:54:15Z",
            "first_seen": "2023-05-05T23:35:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3677178999999999,
                39.4805626
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3677178999999999,
                        39.4805626
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bn-73q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GpHnqDRJmUa95QwWTx",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-21T20:00:00Z",
            "end": "2023-07-21T20:00:00Z",
            "updated": "2023-03-15T03:17:25Z",
            "first_seen": "2023-03-15T03:10:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "fzparkVxYBvXRty7kN",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Kraftwerk - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 73,
            "phq_attendance": 157,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-21T20:00:00Z",
            "end": "2023-07-21T20:00:00Z",
            "updated": "2023-05-06T03:33:21Z",
            "first_seen": "2023-05-05T23:35:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6Ft8dXtA3XLz3RWwLP",
            "title": "NOSINMÚSICA FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 65,
            "phq_attendance": 2480,
            "entities": [
                {
                    "entity_id": "EY6AfVnMzTye53kZAB9RqM",
                    "name": "Puerto de Cádiz",
                    "type": "venue",
                    "formatted_address": "11006 Cádiz Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-23T21:59:59Z",
            "updated": "2023-04-24T02:19:06Z",
            "first_seen": "2023-03-25T01:56:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.2837712,
                36.5358066
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.2837712,
                        36.5358066
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8pf-789"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BipZCq67JYs65kFFFu",
            "title": "Soria Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 67,
            "phq_attendance": 1327,
            "entities": [
                {
                    "entity_id": "C5gk8g8jBbjhFtHAcfFZm3",
                    "name": "Plaza de Toros de Soria",
                    "type": "venue",
                    "formatted_address": "C/San Benito, 0 42001 Soria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-05-01T00:40:01Z",
            "first_seen": "2023-04-21T00:13:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4737293,
                41.7652146
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4737293,
                        41.7652146
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-vkp-7kf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3108680",
                    "6361204",
                    "3108681"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ChevA4Nxd8Tbmba3KW",
            "title": "Alcazaba Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 67,
            "phq_attendance": 957,
            "entities": [
                {
                    "entity_id": "dy9JCjaHzXirWwqKerWp5g",
                    "name": "Alcazaba Árabe De Badajoz",
                    "type": "venue",
                    "formatted_address": "Badajoz Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-21T21:59:59Z",
            "updated": "2023-03-02T21:20:09Z",
            "first_seen": "2023-03-02T21:19:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.96923,
                38.89971
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.96923,
                        38.89971
                    ],
                    "type": "Point"
                },
                "placekey": "@7d9-kws-3nq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593112",
                    "2521419",
                    "6355880",
                    "2511169"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DN2vGKDHEatapEVQbq",
            "title": "58 Jazzaldia - 58th San Sebastian Jazz Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 69,
            "phq_attendance": 2148,
            "entities": [
                {
                    "entity_id": "3AvDZuRAtyB7fsSnf9peZMx",
                    "name": "Jazzaldia Festival",
                    "type": "venue",
                    "formatted_address": "Reina Regente, 8 - 20003 Donostia-san Sebastián San Sebastián Spain"
                }
            ],
            "duration": 431999,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-25T21:59:59Z",
            "updated": "2023-05-04T10:28:21Z",
            "first_seen": "2023-03-15T03:13:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.981292,
                43.3229427
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.981292,
                        43.3229427
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-y7x-4vz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3120935",
                    "6358157",
                    "3110044"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Ffdh6DsPMFuYnjwwpv",
            "title": "Leturalma",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 82,
            "phq_attendance": 2136,
            "entities": [
                {
                    "entity_id": "3AeNGREkKK442p8iYPv9hLd",
                    "name": "Leturalma",
                    "type": "venue",
                    "formatted_address": "Letur Albacete Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-02-03T21:24:24Z",
            "first_seen": "2023-02-03T21:23:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.10146,
                38.36563
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.10146,
                        38.36563
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-ws7-2zf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355333",
                    "2515070"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ZBbAmrMetqA3QShyEx",
            "title": "Tresparock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 87,
            "phq_attendance": 1673,
            "entities": [
                {
                    "entity_id": "35mu8GDt9kpRNEerKcMdUWp",
                    "name": "Plaza de Ricardo Nogal",
                    "type": "venue",
                    "formatted_address": "Trespaderne Burgos Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-20T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-04-06T23:18:22Z",
            "first_seen": "2023-04-06T23:16:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.39433,
                42.80876
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.39433,
                        42.80876
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-f9c-bzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3127460",
                    "6356625",
                    "3107504"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3RXWnLjJvtEaMfr6Hd",
            "title": "Los Palmeras + Chico Trujillo + Guacamayo Tropical DJ's - ALMA | Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-20T18:00:00Z",
            "end": "2023-07-20T18:00:00Z",
            "updated": "2023-05-08T08:55:36Z",
            "first_seen": "2023-03-31T00:24:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6mJv5hHFibfAPMe6YH",
            "title": "Bombastic Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 90,
            "phq_attendance": 3100,
            "entities": [
                {
                    "entity_id": "qkAK6aeZF32hKvgD2isujd",
                    "name": "La Morgal",
                    "type": "venue",
                    "formatted_address": "Asturias Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-19T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-04-20T02:55:40Z",
            "first_seen": "2023-04-20T00:44:52Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.8317068,
                43.4370908
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.8317068,
                        43.4370908
                    ],
                    "type": "Point"
                },
                "placekey": "@4f5-dvv-grk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359938",
                    "3125961"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359947",
                    "3114711"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BTPUpmWiSFQmb37yWv",
            "title": "El Tingladu",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 74,
            "phq_attendance": 2840,
            "entities": [
                {
                    "entity_id": "FXwtAG3if58DvUDRuFJskv",
                    "name": "El Tingladu",
                    "type": "venue",
                    "formatted_address": "Vilanova i la Geltrú Spain"
                },
                {
                    "entity_id": "37hDVYLCTpYkTVjcEm9JRfH",
                    "name": "Tingladu",
                    "type": "event-group",
                    "formatted_address": "Vitoria-Gasteiz Basque Country Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20210722T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 259199,
            "start": "2023-07-19T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-05-09T12:42:28Z",
            "first_seen": "2023-02-14T20:50:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6817918,
                42.8591656
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6817918,
                        42.8591656
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-w9z-b8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129418"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EpVDMFFK3EqJ8aYt2n",
            "title": "NSM Festival de Cádiz",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 67,
            "phq_attendance": 3071,
            "entities": [
                {
                    "entity_id": "tEyUhGDDbpSRCRiew8nejM",
                    "name": "NO SIN MÚSICA",
                    "type": "venue",
                    "formatted_address": "Cadiz Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-19T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-03-09T21:25:24Z",
            "first_seen": "2023-03-09T21:16:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.2908661,
                36.5309117
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.2908661,
                        36.5309117
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8pc-gzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AeCgQLRZHDXhGCoj3a",
            "title": "Melendi - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-19T20:00:00Z",
            "end": "2023-07-19T20:00:00Z",
            "updated": "2023-05-05T00:31:40Z",
            "first_seen": "2023-01-27T00:03:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "64kCx4qkBAaoexYLQa",
            "title": "Guitarricadelafuente - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-19T19:30:00Z",
            "end": "2023-07-19T19:30:00Z",
            "updated": "2023-05-07T18:51:03Z",
            "first_seen": "2023-04-20T01:23:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Cd8BYXSGekoqdyMyE4",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-18T20:00:00Z",
            "end": "2023-07-18T20:00:00Z",
            "updated": "2023-03-15T04:43:58Z",
            "first_seen": "2023-03-15T03:10:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AfaavH8ubN3WncXJSz",
            "title": "Gustavo Santaolalla - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-18T19:30:00Z",
            "end": "2023-07-18T19:30:00Z",
            "updated": "2023-05-09T18:00:40Z",
            "first_seen": "2023-03-31T23:11:04Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "eXqLzfBbFVdrrWqFRa",
            "title": "Ushuaia",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 80,
            "phq_attendance": 3144,
            "entities": [
                {
                    "entity_id": "XiAtRXxnwKueeCRtb53Kum",
                    "name": "Ushuaïa Ibiza Beach Hotel",
                    "type": "venue",
                    "formatted_address": "10 Platja d'en Bossa 07817 Sant Jordi de ses Salines Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-17T22:00:00Z",
            "end": "2023-07-18T21:59:59Z",
            "updated": "2023-05-14T00:30:28Z",
            "first_seen": "2023-05-14T00:20:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.4048018,
                38.8853966
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.4048018,
                        38.8853966
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mw6-6rk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356036",
                    "6544336"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Db7y6WFnr7RpyjsELR",
            "title": "Rubén Blades - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-17T20:00:00Z",
            "end": "2023-07-17T20:00:00Z",
            "updated": "2023-03-15T06:08:08Z",
            "first_seen": "2023-02-08T00:14:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5vp8zDnPjvVPk9p6UN",
            "title": "Bastille - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-17T19:30:00Z",
            "end": "2023-07-17T19:30:00Z",
            "updated": "2023-05-08T00:19:38Z",
            "first_seen": "2023-03-31T00:09:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AHJsChZHxjZqFPgUKU",
            "title": "Anastacia - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-16T19:30:00Z",
            "end": "2023-07-16T19:30:00Z",
            "updated": "2023-05-07T17:49:02Z",
            "first_seen": "2023-03-31T02:19:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FgR2Awe2rWQ6xz9Srz",
            "title": "Dale Argentina Fest - Mallorca",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 75,
            "phq_attendance": 4000,
            "entities": [
                {
                    "entity_id": "XXSTXaChTS3WaaPWBqx79p",
                    "name": "SON FUSTERET",
                    "type": "venue",
                    "formatted_address": "Camí Vell de Bunyola, s/n Palma de Mallorca Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-15T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-02-04T21:18:47Z",
            "first_seen": "2023-02-04T21:18:32Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.6699409,
                39.5913127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.6699409,
                        39.5913127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bp6-26k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2516450"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "H6Proxiy7fgz6xsmBw",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-15T20:00:00Z",
            "end": "2023-07-15T20:00:00Z",
            "updated": "2023-05-12T00:55:35Z",
            "first_seen": "2023-02-08T02:50:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5LgectAqanVLNkruuf",
            "title": "Latin Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 43,
            "phq_attendance": 180,
            "entities": [
                {
                    "entity_id": "ERVM3ZXLeRS4sqnLJ8urEs",
                    "name": "Auditorio Marina Sur",
                    "type": "venue",
                    "formatted_address": "Explanada Marisa Sur - Marina Real Juan Carlos I 46024 Valencia Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-15T16:00:00Z",
            "end": "2023-07-15T16:00:00Z",
            "updated": "2023-05-06T09:02:31Z",
            "first_seen": "2023-05-05T23:46:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3279625,
                39.4626603
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3279625,
                        39.4626603
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8gd-ct9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2513284"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8UV4gTVCTXuJRbJWqQ",
            "title": "Huercasa Country Festival at Huercasa Country Festival Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 75,
            "phq_attendance": 621,
            "entities": [
                {
                    "entity_id": "N9WqkGNnPiYeBteLH3pRPV",
                    "name": "Huercasa Country Festival Grounds",
                    "type": "venue",
                    "formatted_address": "Segovia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-14T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-05-11T06:06:25Z",
            "first_seen": "2023-05-11T02:10:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.4950689,
                41.2702017
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.4950689,
                        41.2702017
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-tyf-h5z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3109254",
                    "6360893",
                    "3111867"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9cnDpzqe2XnkKQ8TGY",
            "title": "Portamerica Festival at Caldas De Reis",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 47,
            "local_rank": 85,
            "phq_attendance": 729,
            "entities": [
                {
                    "entity_id": "seadihEacWt799xbaWFNDv",
                    "name": "Caldas De Reis",
                    "type": "venue",
                    "formatted_address": "Galicia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-14T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-04-18T09:28:49Z",
            "first_seen": "2023-04-17T23:04:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.6380601024,
                42.6353060538
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.6380601024,
                        42.6353060538
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-wp9-jd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360209",
                    "3126233"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FikPMhsZHfju2QaG9a",
            "title": "Salmaya Live Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 69,
            "phq_attendance": 1079,
            "entities": [
                {
                    "entity_id": "MSaA63tvKvEvE62F3pwW6v",
                    "name": "Salmaya Live Festival",
                    "type": "venue",
                    "formatted_address": "Explanada de la UMH de Elche - Av. del Alcalde Vicente Quiles, 90, 03202 Elche, Alicante 03202 Elche Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-14T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-04-22T00:43:00Z",
            "first_seen": "2023-04-22T00:26:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.6942,
                38.27221
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.6942,
                        38.27221
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-x2c-fmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355441",
                    "2518559"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Gcnr675MCfKQ9b99hW",
            "title": "Periféric 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 57,
            "phq_attendance": 412,
            "entities": [
                {
                    "entity_id": "7MKHxfvBmZkxDMuyqDKhxr",
                    "name": "Castillo De Castelldefels",
                    "type": "venue",
                    "formatted_address": "Castelldefels Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-14T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-05-12T00:12:42Z",
            "first_seen": "2023-05-12T00:10:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.9782978,
                41.284194
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.9782978,
                        41.284194
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wh4-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356088",
                    "3125897"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7gDFDbXmTQSFvAT3Lr",
            "title": "Emilia en Sabatic Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 55,
            "phq_attendance": 294,
            "entities": [
                {
                    "entity_id": "sWXsJswgmEZUUN9tWDh9Um",
                    "name": "Autocine Malaga Cesurfp",
                    "type": "venue",
                    "formatted_address": "29004 Málaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-14T20:00:00Z",
            "end": "2023-07-14T20:00:00Z",
            "updated": "2023-05-05T23:55:52Z",
            "first_seen": "2023-05-05T23:41:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.47483,
                36.68195
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.47483,
                        36.68195
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnr-bc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6544402"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GuDCbJ4bsQkxXxy66X",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-14T20:00:00Z",
            "end": "2023-07-14T20:00:00Z",
            "updated": "2023-03-15T08:04:09Z",
            "first_seen": "2023-03-15T03:13:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9PRWKUS4aAu3LKUARs",
            "title": "Jacob Collier - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-14T19:30:00Z",
            "end": "2023-07-14T19:30:00Z",
            "updated": "2023-05-08T12:54:17Z",
            "first_seen": "2023-03-31T00:15:04Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        }, {
            "relevance": 0,
            "id": "5938AWNudr9BH9ryP7",
            "title": "Sardina Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 50,
            "phq_attendance": 500,
            "entities": [
                {
                    "entity_id": "zTAspmtRVQGqpa7erNZftC",
                    "name": "Upload",
                    "type": "venue",
                    "formatted_address": "08100 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-14T21:59:59Z",
            "updated": "2023-05-06T06:12:36Z",
            "first_seen": "2023-04-21T22:48:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482296,
                41.3688035
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482296,
                        41.3688035
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9LvbxYZuHYixPofrFJ",
            "title": "Arrea Majo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 94,
            "phq_attendance": 1948,
            "entities": [
                {
                    "entity_id": "xqbnx4xHvitjNPWCH9pkRM",
                    "name": "Ciruelos de Coca",
                    "type": "venue",
                    "formatted_address": "Segovia Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-04-26T23:55:54Z",
            "first_seen": "2023-04-26T23:50:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.5892444,
                41.223881
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.5892444,
                        41.223881
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-qby-9s5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3109254",
                    "6360797",
                    "3124981"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3106672"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "A7HUfnRNLVVo59YZN2",
            "title": "La Mar De Músicas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 76,
            "phq_attendance": 3738,
            "entities": [
                {
                    "entity_id": "uMTSWdRcywWD9XtyiJDpJx",
                    "name": "Mar De Músicas",
                    "type": "venue",
                    "formatted_address": "Cartagena Spain"
                }
            ],
            "duration": 777599,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-22T21:59:59Z",
            "updated": "2023-04-20T23:39:31Z",
            "first_seen": "2023-04-20T23:38:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.97888,
                37.60951
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.97888,
                        37.60951
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-268-k4v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359521",
                    "2519918"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AuqUUrgAbdo2DQ2UWD",
            "title": "Huercasa Country",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 79,
            "phq_attendance": 988,
            "entities": [
                {
                    "entity_id": "GshCGbY8m9A9ikMg43Jbkm",
                    "name": "Huercasa Country Festival",
                    "type": "venue",
                    "formatted_address": "Av. Madrid, 37, Riaza Segovia Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-05-12T05:50:03Z",
            "first_seen": "2023-04-27T23:25:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.49389,
                41.27122
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.49389,
                        41.27122
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-tyd-wp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3109254",
                    "6360893",
                    "3111867"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BgisVVbg74fNww2ogv",
            "title": "En Tierra de Nadie Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 83,
            "phq_attendance": 3232,
            "entities": [
                {
                    "entity_id": "M8FdTtmv9zPszDKcYEitwn",
                    "name": "Colegio Alto Segura, Santiago de la Espada",
                    "type": "venue",
                    "formatted_address": "Jaén Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-02-21T21:15:00Z",
            "first_seen": "2023-02-21T21:14:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.5521952,
                38.1097366
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.5521952,
                        38.1097366
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-z5b-st9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516394",
                    "6358550",
                    "2511073"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BsB9KV9giTdd73UQhY",
            "title": "Tío Pepe",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 76,
            "phq_attendance": 2908,
            "entities": [
                {
                    "entity_id": "3AnqkBNrJfhdzb5zWeLUHp5",
                    "name": "Bodegas Gonzalez Las Copas",
                    "type": "venue",
                    "formatted_address": "C. Desconsuelo, 1 Cadiz Spain"
                }
            ],
            "duration": 2764799,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-08-14T21:59:59Z",
            "updated": "2023-04-06T23:51:36Z",
            "first_seen": "2023-04-06T23:19:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.15104,
                36.67729
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.15104,
                        36.67729
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8c2-fj9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356935",
                    "2516326"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EHGJ7EsDh3x5daXhQR",
            "title": "Huercasa Music Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 76,
            "local_rank": 94,
            "phq_attendance": 20000,
            "entities": [
                {
                    "entity_id": "nFYhKEnBXdZ7kj2L9enLjd",
                    "name": "Acueducto de Segovia",
                    "type": "venue",
                    "formatted_address": "Segovia Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-04-26T23:54:57Z",
            "first_seen": "2023-04-26T23:50:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.1177913,
                40.9479909
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.1177913,
                        40.9479909
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-2d5-68v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3109254",
                    "6360915",
                    "3109256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ELA8FdxNSD9bwCnwcW",
            "title": "SuperMati Custom",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 77,
            "phq_attendance": 1621,
            "entities": [
                {
                    "entity_id": "eg4ZNXSDrUDd7kkuYXW9gq",
                    "name": "Hollister Rockabilly&Biker",
                    "type": "venue",
                    "formatted_address": "Carrer Vallespir, 7 Poligono Las Salinas 08880 Cubelles Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-03-10T21:23:46Z",
            "first_seen": "2023-03-10T21:23:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.6523,
                41.19951
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.6523,
                        41.19951
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-j6p-2rk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361294",
                    "3124026"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GwQZndEAeNecjUrKwK",
            "title": "Portamerica Festival at Caldas De Reis",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 47,
            "local_rank": 85,
            "phq_attendance": 729,
            "entities": [
                {
                    "entity_id": "seadihEacWt799xbaWFNDv",
                    "name": "Caldas De Reis",
                    "type": "venue",
                    "formatted_address": "Galicia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-14T21:59:59Z",
            "updated": "2023-04-18T03:32:17Z",
            "first_seen": "2023-04-18T01:38:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.6380601024,
                42.6353060538
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.6380601024,
                        42.6353060538
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-wp9-jd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360209",
                    "3126233"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HoVq3X9RkZh3e2uJpw",
            "title": "Sonica Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 76,
            "phq_attendance": 1387,
            "entities": [
                {
                    "entity_id": "WLfE4pF9uvq32f6NirtTt3",
                    "name": "Estadio Riomar",
                    "type": "venue",
                    "formatted_address": "Castro Urdiales Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-03-15T03:15:47Z",
            "first_seen": "2023-03-15T03:14:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.2278119,
                43.3887438
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.2278119,
                        43.3887438
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vg9-vzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360677",
                    "3107233"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360720",
                    "3109718"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "JKmwH9U3TgyHg3ZgfR",
            "title": "Fardelej Festival Arnedo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 71,
            "phq_attendance": 2754,
            "entities": [
                {
                    "entity_id": "xY4R9VFjxdKDjR3FAEHEhM",
                    "name": "Arnedo",
                    "type": "venue",
                    "formatted_address": "Plaza de España 26003 Logroño Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-13T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-05-05T01:27:12Z",
            "first_seen": "2023-05-04T23:21:39Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.44499,
                42.46272
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.44499,
                        42.46272
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-fp8-fj9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336897",
                    "6355232",
                    "6359078",
                    "3118150"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9dvrsQi9W5mT6c2XiS",
            "title": "TINI - festival MURCIA ON",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 74,
            "local_rank": 88,
            "phq_attendance": 15000,
            "entities": [
                {
                    "entity_id": "33cKDmcDmBPACRRGQ7pyqAV",
                    "name": "Plaza de Toros la Condomina",
                    "type": "venue",
                    "formatted_address": "Ronda de Garay, 48 30003 Murcia Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-13T19:30:00Z",
            "end": "2023-07-13T19:30:00Z",
            "updated": "2023-02-14T22:01:32Z",
            "first_seen": "2022-12-23T01:37:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1224516309241448,
                37.98523706387195
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1235148,
                        37.9854651
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9rnWAHmANEWFvxZvLt",
            "title": "LP - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-13T19:30:00Z",
            "end": "2023-07-13T19:30:00Z",
            "updated": "2023-05-08T10:23:04Z",
            "first_seen": "2023-03-31T00:11:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E7TJiboygAYR5hhPMc",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Los Chikos del Maiz + Rapsusklei - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 74,
            "phq_attendance": 182,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-13T19:00:00Z",
            "end": "2023-07-13T19:00:00Z",
            "updated": "2023-05-06T03:34:51Z",
            "first_seen": "2023-05-05T23:32:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6hrHgzHxAcMraRLNVW",
            "title": "Etnosur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 71,
            "phq_attendance": 1756,
            "entities": [
                {
                    "entity_id": "mTu8cnyanP7z2Q5hebRHqA",
                    "name": "EtnoSur Festival",
                    "type": "venue",
                    "formatted_address": "23680 Alcalá la Real Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-05-11T23:48:07Z",
            "first_seen": "2023-05-11T23:46:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.9241021,
                37.4645203
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.9241021,
                        37.4645203
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-xxj-8n5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516394",
                    "6358457",
                    "2522160"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516394",
                    "6358500",
                    "2516395"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9y4ZrYFAW2bT4uom2t",
            "title": "Festival Internacional de Benicasim - FIB",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 68,
            "local_rank": 89,
            "phq_attendance": 7500,
            "entities": [
                {
                    "entity_id": "jX4Q8ht9EmYAGr27SweSzZ",
                    "name": "Festival Internacional de Benicassim (FIB)",
                    "type": "venue",
                    "formatted_address": "Road N-340 Benicassim Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-04-08T21:31:46Z",
            "first_seen": "2022-10-10T21:02:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.0516487,
                40.0485109
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.0516487,
                        40.0485109
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-fkd-8y9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356985",
                    "3128272"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AMYw7XRLxXVS2ps3pT",
            "title": "PORTAMERICA",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 93,
            "phq_attendance": 2658,
            "entities": [
                {
                    "entity_id": "4TfZ3gcVs5SF5qYs8SxiDx",
                    "name": "PortAmerica",
                    "type": "venue",
                    "formatted_address": "Carballeira de Caldas de Reis 36650 Caldas de Reis Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-03-15T03:19:56Z",
            "first_seen": "2023-03-15T03:15:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.63915,
                42.603
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.63915,
                        42.603
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-wq6-sh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360209",
                    "3127034"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AYE9uQDBUf6cLzcWWL",
            "title": "Bahia Sound Latin Urban Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 65,
            "phq_attendance": 1286,
            "entities": [
                {
                    "entity_id": "36Yn7qfz2TkL6kwELkYFuaD",
                    "name": "Bahía Sound",
                    "type": "venue",
                    "formatted_address": "San Fernando Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-13T21:59:59Z",
            "updated": "2023-03-23T21:24:29Z",
            "first_seen": "2023-02-21T21:14:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.212062,
                36.469307
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.212062,
                        36.469307
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8mh-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356946",
                    "2511388"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FUgAP8ynra5GE6WQER",
            "title": "Pirata Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 72,
            "phq_attendance": 2794,
            "entities": [
                {
                    "entity_id": "xicRfy7scRYczzgkZ4paH4",
                    "name": "Poligono Benieto",
                    "type": "venue",
                    "formatted_address": "46701 Gandia Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2022-12-26T21:11:21Z",
            "first_seen": "2022-12-06T21:10:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.1844671,
                38.968032
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.1844671,
                        38.968032
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-c7b-5s5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361996",
                    "2517367"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GF6H78zcsCWqXGdQMA",
            "title": "Acampada Jove",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 78,
            "phq_attendance": 1904,
            "entities": [
                {
                    "entity_id": "B3dDiHxEbH3JkGbSMDuPcE",
                    "name": "Acampada Jove",
                    "type": "venue",
                    "formatted_address": "Sant Sadurní d'Anoia Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-04-20T20:56:43Z",
            "first_seen": "2023-02-09T20:47:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.7898344,
                41.4220657
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.7898344,
                        41.4220657
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-vbm-gc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356292",
                    "3110064"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GRbqhDFeMMgoE4aQyg",
            "title": "FIB Benicassim Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 80,
            "phq_attendance": 2042,
            "entities": [
                {
                    "entity_id": "LgnHiDUZnRn6jH8QCBw8dv",
                    "name": "Recinto De Festivales De Benicassim",
                    "type": "venue",
                    "formatted_address": "Benicásim Comunidad Valenciana España"
                }
            ],
            "duration": 345599,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-16T21:59:59Z",
            "updated": "2023-05-05T15:18:27Z",
            "first_seen": "2022-11-25T21:01:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.0798552,
                40.064906
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.0798552,
                        40.064906
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-fk3-t9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356985",
                    "3128272"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HWBfeDQ2onnuXNqsoJ",
            "title": "Portamerica Festival at Caldas De Reis",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 83,
            "phq_attendance": 604,
            "entities": [
                {
                    "entity_id": "seadihEacWt799xbaWFNDv",
                    "name": "Caldas De Reis",
                    "type": "venue",
                    "formatted_address": "Galicia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-12T22:00:00Z",
            "end": "2023-07-13T21:59:59Z",
            "updated": "2023-04-18T03:57:54Z",
            "first_seen": "2023-04-17T23:04:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.6380601024,
                42.6353060538
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.6380601024,
                        42.6353060538
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-wp9-jd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360209",
                    "3126233"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "J3bYwjH7NZQ9HiwFUC",
            "title": "Chris Isaak - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-12T19:30:00Z",
            "end": "2023-07-12T19:30:00Z",
            "updated": "2023-05-08T01:20:29Z",
            "first_seen": "2023-03-31T02:19:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HGxAUDArMZMPQs2GQj",
            "title": "PIRATA BEACH FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 73,
            "phq_attendance": 2024,
            "entities": [
                {
                    "entity_id": "CR75eZKTCF3imNqfGXqYqD",
                    "name": "Pirata Beach Festival",
                    "type": "venue",
                    "formatted_address": "Gandía Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-11T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-05-13T22:00:40Z",
            "first_seen": "2022-11-14T21:02:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.1705302,
                38.9570958
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.1705302,
                        38.9570958
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-c79-hqz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361913",
                    "2521172"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BJ3iV6fkBkeC52FG2a",
            "title": "Fito Páez - ALMA | Festival Jardins Pedralbes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-11T19:30:00Z",
            "end": "2023-07-11T19:30:00Z",
            "updated": "2023-05-07T20:33:14Z",
            "first_seen": "2023-03-31T00:09:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5j8DHwUF3nUTvMDAwG",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "La Pegatina + Chef'Special - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 37,
            "local_rank": 76,
            "phq_attendance": 224,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-09T18:30:00Z",
            "end": "2023-07-09T18:30:00Z",
            "updated": "2023-05-06T03:36:30Z",
            "first_seen": "2023-05-05T23:35:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AAZ4gz5qM3okhuvyn6",
            "title": "Dale Argentina Fest - Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 53,
            "phq_attendance": 409,
            "entities": [
                {
                    "entity_id": "7PSPikNG5Y7zQrN4p7BMP4",
                    "name": "IFEMA - Feria de Madrid",
                    "type": "venue",
                    "formatted_address": "IFEMA Feria de Madrid, 5 Avenida Partenón 28042 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-08T22:00:00Z",
            "end": "2023-07-09T21:59:59Z",
            "updated": "2023-05-12T03:15:47Z",
            "first_seen": "2023-02-04T20:45:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6165512000000035,
                40.465582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6165512000000035,
                        40.465582
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-czt-8gk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3124964"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8Wjg3hnevoXp73uop8",
            "title": "El Barrio – Cabaret Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 53,
            "phq_attendance": 246,
            "entities": [
                {
                    "entity_id": "HZvZPC6ANz8e3PgcVL5abd",
                    "name": "Teatro Auditorio Roquetas de Mar",
                    "type": "venue",
                    "formatted_address": "Plaza Teniente Arturo Munoz S/N 04740 Roquetas De Mar Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-08T20:30:00Z",
            "end": "2023-07-08T20:30:00Z",
            "updated": "2023-03-15T04:58:01Z",
            "first_seen": "2022-12-22T00:07:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.61543,
                36.7637
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.61543,
                        36.7637
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-bcn-xh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355591",
                    "2511716"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4BFa22T3E5kmYgB7qo",
            "parent_event": {
                "parent_event_id": "5WcS3X9aBLhxySDsJm"
            },
            "title": "Rubén Blades + La Santa Cecilia - Pirineos Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 78,
            "phq_attendance": 267,
            "entities": [
                {
                    "entity_id": "9tE8KCpcxL9PGLrac23Ypr",
                    "name": "Auditorio Natural de Lanuza",
                    "type": "venue",
                    "formatted_address": "Sallent de Gállego Huesca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-08T20:00:00Z",
            "end": "2023-07-08T20:00:00Z",
            "updated": "2023-05-06T04:07:07Z",
            "first_seen": "2023-05-06T02:56:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.33212,
                42.77166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.33212,
                        42.77166
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-kpn-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3111001"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7wLQQXHcTWvB55jAzR",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-08T20:00:00Z",
            "end": "2023-07-08T20:00:00Z",
            "updated": "2023-03-15T04:17:31Z",
            "first_seen": "2023-03-15T03:13:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FU4GHbenAWTktaGH7N",
            "title": "REC Remember Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 52,
            "phq_attendance": 306,
            "entities": [
                {
                    "entity_id": "khyqRDnqs4cw4vMAb7637H",
                    "name": "Recinto Ferial La Roda",
                    "type": "venue",
                    "formatted_address": "Castilla-La Mancha 02001 Albacete Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-08T12:00:00Z",
            "end": "2023-07-08T12:00:00Z",
            "updated": "2023-04-08T00:42:38Z",
            "first_seen": "2023-03-17T23:57:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.86017,
                38.99426
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.86017,
                        38.99426
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-fhd-dgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355295",
                    "2522258"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7RGWks7QKMfprRTbau",
            "title": "Weekend Beach Festival at Torre Del Mar Beach",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 51,
            "local_rank": 72,
            "phq_attendance": 1167,
            "entities": [
                {
                    "entity_id": "jbQjEr8YPuCyKwwgrmfkm3",
                    "name": "Playa de Torre del Mar",
                    "type": "venue",
                    "formatted_address": "29740 Torre del Mar Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-08T02:13:30Z",
            "first_seen": "2023-04-17T15:45:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0885533,
                36.741387
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0885533,
                        36.741387
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-w2p-r49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359498",
                    "2510309"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8aRrJh6GMtEbA5srAe",
            "title": "Terraceo Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 59,
            "phq_attendance": 415,
            "entities": [
                {
                    "entity_id": "dzU9p9mnfyTXTxqMsQHubN",
                    "name": "Auditorio Pazo de Congresos Mar de Vigo",
                    "type": "venue",
                    "formatted_address": "36202 Vigo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-04-25T23:35:05Z",
            "first_seen": "2023-04-25T23:34:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.7341389,
                42.2318053
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.7341389,
                        42.2318053
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yqh-8qf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360254",
                    "3105976"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8ppfaQsJWb9vdUrZ5N",
            "title": "Cruilla: Barcelona Summer Festival at Parc del Forum",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                },
                {
                    "entity_id": "NvgtuE6N2adjWAEWziWJww",
                    "name": "Cruilla Barcelona Season Festival",
                    "type": "event-group",
                    "formatted_address": "08019 Barcelona Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20170707T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-15T03:29:07Z",
            "first_seen": "2023-04-17T21:16:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BUkBtjFL4GfUaWy6eM",
            "title": "Laguna De DueRock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 65,
            "phq_attendance": 599,
            "entities": [
                {
                    "entity_id": "fbvyUvi24RdUGv5wZidw77",
                    "name": "Plaza de Toros Tudela de Duero",
                    "type": "venue",
                    "formatted_address": "Carretera la Parrilla 47320 Tudela de Duero Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-03-22T23:31:40Z",
            "first_seen": "2023-03-22T23:31:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.7292079,
                41.5822358
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.7292079,
                        41.5822358
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-2vk-fpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362203",
                    "3119631"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3106672"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CCuSGT8TsYaiP3iV4Z",
            "title": "Mad Cool Festival at Mad Cool Space",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 49,
            "local_rank": 58,
            "phq_attendance": 863,
            "entities": [
                {
                    "entity_id": "ppSj9bL2tmdEKbBj5psbkm",
                    "name": "Mad Cool Space",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-04-17T22:13:06Z",
            "first_seen": "2023-04-17T21:16:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7036167,
                40.4473127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7036167,
                        40.4473127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cws-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3125239"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DbLvFuE3Pgf3ZfJDN7",
            "title": "Bilbao BBK Live Festival at Kobetamendi",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 53,
            "phq_attendance": 654,
            "entities": [
                {
                    "entity_id": "33ECHALc6hcUGYmUKKZXDmu",
                    "name": "Kobetamendi Park",
                    "type": "venue",
                    "formatted_address": "Calle del Monte Cobetas 48002 Bilbao Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-08T03:02:48Z",
            "first_seen": "2023-04-17T18:36:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.93499,
                43.263
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.93499,
                        43.263
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vbr-fmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Em8az6SvCsEByhnBjp",
            "title": "Barcelona Rocks",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 49,
            "phq_attendance": 469,
            "entities": [
                {
                    "entity_id": "vaqCFiJU3quy4wYHqWL2kv",
                    "name": "Palau Olímpic de Badalona",
                    "type": "venue",
                    "formatted_address": "Avinguda Alfons Xiii, S/n 08912 Badalona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-07T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-04-07T01:41:25Z",
            "first_seen": "2023-04-07T01:29:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2433946,
                41.4470339
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2433946,
                        41.4470339
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wcp-8qf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356051",
                    "3129028"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6BWfH87R4DobNJmv25",
            "title": "David Bisbal - Cabaret Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 56,
            "phq_attendance": 298,
            "entities": [
                {
                    "entity_id": "HZvZPC6ANz8e3PgcVL5abd",
                    "name": "Teatro Auditorio Roquetas de Mar",
                    "type": "venue",
                    "formatted_address": "Plaza Teniente Arturo Munoz S/N 04740 Roquetas De Mar Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-07T20:30:00Z",
            "end": "2023-07-07T20:30:00Z",
            "updated": "2023-03-28T01:06:00Z",
            "first_seen": "2022-12-31T00:06:51Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.61543,
                36.7637
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.61543,
                        36.7637
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-bcn-xh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355591",
                    "2511716"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "35tJ2Uq4hQBzcU2e2Y",
            "title": "Seal - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 98,
            "local_rank": 100,
            "phq_attendance": 241128,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                },
                {
                    "entity_id": "3BdVwMihDDhAFtH38RFe3de",
                    "name": "Starlite Festival",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "food",
                        "music",
                        "recurring"
                    ],
                    "description": "Starlite Festival is the most important boutique festival in Europe. The event not only features concerts, since the public also will have the opportunity to have dance, have dinner and drinks.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20170713 DURATION:P47DT4H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 0,
            "start": "2023-07-07T20:00:00Z",
            "end": "2023-07-07T20:00:00Z",
            "updated": "2023-04-03T01:10:35Z",
            "first_seen": "2023-03-29T00:14:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.921104522775487,
                36.53269662103194
            ],
            "geo": {
                "geometry": {
                    "coordinates":
                        [
                            -4.9209113,
                            36.5330482

                        ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4taVTp3ot3tYmKBEbV",
            "title": "Festival de música electrónica en Málaga",
            "description": "3 DÍAS DE FIESTA AL AIRE LIBRE EN LA COSTA DEL SOL. Musica electrónica, house y música del mundo en Málaga.",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 60,
            "phq_attendance": 462,
            "entities": [],
            "duration": 109800,
            "start": "2023-07-07T19:00:00Z",
            "end": "2023-07-09T01:30:00Z",
            "updated": "2022-11-09T10:01:45Z",
            "first_seen": "2022-11-09T10:00:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.5027947,
                36.7005378
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.5027947,
                        36.7005378
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-khg-mp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6559644"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CaPuBqbgbkmYadkrkq",
            "title": "Granca Live Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 71,
            "phq_attendance": 3491,
            "entities": [
                {
                    "entity_id": "JC6pGYU46jwR7Af8HgMTjm",
                    "name": "Aparcamiento del Estadio de Gran Canaria",
                    "type": "venue",
                    "formatted_address": "35011 Las Palmas de Gran Canaria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-06T23:00:00Z",
            "end": "2023-07-08T22:59:59Z",
            "updated": "2023-05-15T00:56:42Z",
            "first_seen": "2023-03-15T03:13:58Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.4408832,
                28.1131545
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.4408832,
                        28.1131545
                    ],
                    "type": "Point"
                },
                "placekey": "@6ym-7dr-26k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3J8CR36RVK2dwhuw2b",
            "title": "Zurbarán Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 73,
            "phq_attendance": 2232,
            "entities": [
                {
                    "entity_id": "sDi66wPp89uZucebWabbdd",
                    "name": "Parque de San Agustín",
                    "type": "venue",
                    "formatted_address": "Burgos Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-03-16T23:40:50Z",
            "first_seen": "2023-03-16T23:29:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7004574,
                42.3335397
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7004574,
                        42.3335397
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-gz8-hbk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3127460",
                    "6356377",
                    "3127461"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5WcS3X9aBLhxySDsJm",
            "title": "Pirineos Sur",
            "description": "Pirineos Sur is a music and multicultural festival with many concerts plus exhibitions, a market, workshops and more! Festival of diversity, as Luis Lles has called it :  “first of all, the diversity of music, from Battiato to Kase.O; from Tinariwen to El Cigala; from Rozzma to Pascuala Ilabaca",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival"
            ],
            "rank": 86,
            "local_rank": 100,
            "phq_attendance": 60000,
            "entities": [
                {
                    "entity_id": "6PiiS8JniSmBfncLemzKis",
                    "name": "Pirineos Sur",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "food",
                        "music",
                        "performing-arts",
                        "recurring",
                        "social"
                    ],
                    "description": "Pirineos Sur is a music and multicultural festival with many concerts plus exhibitions, a market, workshops and more!",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150717 DURATION:P16DT13H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 1987199,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-29T21:59:59Z",
            "updated": "2023-04-05T04:19:36Z",
            "first_seen": "2023-02-28T00:38:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.31636081055923876,
                42.757974116111875
            ],
            "geo": {
                "geometry": {
                    "coordinates": [


                        -0.3165561,
                        42.7585704

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3120513",
                    "6358406",
                    "3119306"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7XSQd32578TmdftJcn",
            "title": "AMYRIM Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 58,
            "local_rank": 75,
            "phq_attendance": 2517,
            "entities": [],
            "duration": 345599,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-10T21:59:59Z",
            "updated": "2023-03-16T03:32:02Z",
            "first_seen": "2022-07-19T03:04:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.5066994,
                36.7046364
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.5066994,
                        36.7046364
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-khh-9zz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6559644"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7h5XhZs2r3WSkM7Rbi",
            "title": "Mad Cool Festival at Mad Cool Space",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 49,
            "local_rank": 58,
            "phq_attendance": 863,
            "entities": [
                {
                    "entity_id": "ppSj9bL2tmdEKbBj5psbkm",
                    "name": "Mad Cool Space",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-07T21:59:59Z",
            "updated": "2023-04-18T04:57:59Z",
            "first_seen": "2023-04-18T03:07:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7036167,
                40.4473127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7036167,
                        40.4473127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cws-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3125239"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "APj9kzwnbM6cAPjTJq",
            "title": "Weekend Beach Festival at Torre Del Mar Beach",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 51,
            "local_rank": 72,
            "phq_attendance": 1167,
            "entities": [
                {
                    "entity_id": "jbQjEr8YPuCyKwwgrmfkm3",
                    "name": "Playa de Torre del Mar",
                    "type": "venue",
                    "formatted_address": "29740 Torre del Mar Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-07T21:59:59Z",
            "updated": "2023-05-08T02:22:05Z",
            "first_seen": "2023-04-17T13:45:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0885533,
                36.741387
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0885533,
                        36.741387
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-w2p-r49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359498",
                    "2510309"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Bunrfm8rtLm4RAKePh",
            "title": "Simancas Villa de la musica",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 69,
            "phq_attendance": 1259,
            "entities": [
                {
                    "entity_id": "q6yHtxkiSsnwAMXLV3mr3M",
                    "name": "Instalaciones Deportivas Los Pinos",
                    "type": "venue",
                    "formatted_address": "Valladolid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-15T00:41:59Z",
            "first_seen": "2023-03-15T23:41:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.7304095,
                41.6708431
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.7304095,
                        41.6708431
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-2w7-47q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3106672"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CV9vjnRyrPqFYTY8b9",
            "title": "Rockmeria MIM",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 96,
            "phq_attendance": 3494,
            "entities": [
                {
                    "entity_id": "36j69wa4n4QBGMjsycCehkR",
                    "name": "Antiguas Escuelas de Ambrosero",
                    "type": "venue",
                    "formatted_address": "Calle San Ándres s/n Cantabria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-03-01T21:21:12Z",
            "first_seen": "2023-03-01T21:17:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5471,
                43.41616
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5471,
                        43.41616
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-kd4-4y9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360678",
                    "3130162"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360720",
                    "3109718"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CchrA2rSuXEnLsGDVW",
            "title": "Bilbao BBK Live Festival at Kobetamendi",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 47,
            "local_rank": 53,
            "phq_attendance": 702,
            "entities": [
                {
                    "entity_id": "33ECHALc6hcUGYmUKKZXDmu",
                    "name": "Kobetamendi Park",
                    "type": "venue",
                    "formatted_address": "Calle del Monte Cobetas 48002 Bilbao Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-07T21:59:59Z",
            "updated": "2023-05-08T04:08:14Z",
            "first_seen": "2023-04-17T17:39:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.93499,
                43.263
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.93499,
                        43.263
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vbr-fmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CnpbeH4hovHyX3iXd7",
            "title": "Planeta Sound",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 81,
            "phq_attendance": 2731,
            "entities": [],
            "duration": 259199,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-09T21:59:59Z",
            "updated": "2023-03-22T23:35:23Z",
            "first_seen": "2023-03-22T23:32:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.59979,
                42.55508
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.59979,
                        42.55508
                    ],
                    "type": "Point"
                },
                "placekey": "@7dm-2fm-5xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6358656",
                    "3113236"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EWdoArqXtT2TQEaSAd",
            "title": "Festival Jazz Valencia",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 58,
            "phq_attendance": 925,
            "entities": [
                {
                    "entity_id": "fptNa7FQjT3VmJQasREAKN",
                    "name": "Teatro Principale",
                    "type": "venue",
                    "formatted_address": "15 Carrer de les Barques 46002 València Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-07T21:59:59Z",
            "updated": "2023-04-10T23:09:33Z",
            "first_seen": "2023-04-10T23:09:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3744632,
                39.4705931
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3744632,
                        39.4705931
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bm-bc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Ejf85ptUbL5vGyTpMH",
            "title": "Motor and Mountain",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 90,
            "phq_attendance": 1499,
            "entities": [
                {
                    "entity_id": "t8vkzKBKe2h7NgfASwGWU",
                    "name": "Riaño",
                    "type": "venue",
                    "formatted_address": "Castilla y León León Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-09T21:59:59Z",
            "updated": "2023-04-26T23:32:30Z",
            "first_seen": "2023-04-26T23:32:04Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.00785,
                42.97815
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.00785,
                        42.97815
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-9bp-99f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6358669",
                    "3111878"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "G6WXYJk3tEWbdqwK38",
            "title": "Vijazz Vilafranca",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 67,
            "phq_attendance": 1153,
            "entities": [
                {
                    "entity_id": "assZMazBcuuR2GuaTu5w6E",
                    "name": "Vijazz Vilafranca (Plaça Jaume I)",
                    "type": "venue",
                    "formatted_address": "Vilafranca del Penedès Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-09T21:59:59Z",
            "updated": "2023-04-24T22:50:20Z",
            "first_seen": "2023-04-24T22:45:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.6964259,
                41.3472543
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.6964259,
                        41.3472543
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-vn2-n89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356322",
                    "3105600"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GzManeBrgaDg8S9LDc",
            "title": "Dale Argentina Fest - Barcelona",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-08T19:10:57Z",
            "first_seen": "2023-02-04T20:46:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HiiGSndPAC4FzcYSfM",
            "title": "Cruilla: Barcelona Summer Festival at Parc del Forum",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                },
                {
                    "entity_id": "NvgtuE6N2adjWAEWziWJww",
                    "name": "Cruilla Barcelona Season Festival",
                    "type": "event-group",
                    "formatted_address": "08019 Barcelona Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20170707T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 86399,
            "start": "2023-07-06T22:00:00Z",
            "end": "2023-07-07T21:59:59Z",
            "updated": "2023-05-14T05:15:52Z",
            "first_seen": "2023-04-17T16:51:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "eWv96kXHKo8WiM4Kp2",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-06T20:00:00Z",
            "end": "2023-07-06T20:00:00Z",
            "updated": "2023-03-15T07:01:43Z",
            "first_seen": "2023-03-15T03:11:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HznvW8GFDVwJeXCac2",
            "title": "Reve festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 33,
            "local_rank": 52,
            "phq_attendance": 137,
            "entities": [
                {
                    "entity_id": "R6bDVz9AswRmFFHuebzHsL",
                    "name": "Nao Pool Club",
                    "type": "venue",
                    "formatted_address": "Calle los Tilos Malaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-06T16:30:00Z",
            "end": "2023-07-06T16:30:00Z",
            "updated": "2023-05-04T23:54:47Z",
            "first_seen": "2023-05-04T23:22:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.96422,
                36.49427
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.96422,
                        36.49427
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-n3n-tqf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "6691748"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FH2mU2tceXbBhS3LQe",
            "title": "Bilbao BBK Live",
            "description": "Bilbao BBK Live is one of Europe's best-loved music festivals, taking place each summer in the northern Spanish city. Musically diverse, the lineup is comprised of alternative favorites and indie superstars alongside figures from the worlds of pop, hip-hop, and electronic music.",
            "category": "concerts",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 81,
            "local_rank": 87,
            "phq_attendance": 35000,
            "entities": [
                {
                    "entity_id": "rNwEt2aSpsHyx3pp45AjzH",
                    "name": "Bilbao BBK Live",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "concert",
                        "event-group",
                        "festival",
                        "music",
                        "recurring"
                    ],
                    "description": "Bilbao BBK Live is a rock and pop festival situated on the slopes of Mount Cobetas, overlooking the northern Spanish city. With the idyllic town and world-famous surfing spot a stone's throw away, the location is among the best in Europe for a diverse festival experience.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20140710T170000 DURATION:P2DT7H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 129600,
            "start": "2023-07-06T15:00:00Z",
            "end": "2023-07-08T03:00:00Z",
            "updated": "2022-10-06T03:12:40Z",
            "first_seen": "2022-09-20T20:33:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.9349852,
                43.2630126
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.9349852,
                        43.2630126
                    ],
                    "type": "Point"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5ggXxZ8H5j5ffSVKai",
            "title": "Weekend Beach Festival at Torre Del Mar Beach",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 50,
            "local_rank": 70,
            "phq_attendance": 995,
            "entities": [
                {
                    "entity_id": "jbQjEr8YPuCyKwwgrmfkm3",
                    "name": "Playa de Torre del Mar",
                    "type": "venue",
                    "formatted_address": "29740 Torre del Mar Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-06T21:59:59Z",
            "updated": "2023-05-08T00:36:35Z",
            "first_seen": "2023-04-17T23:29:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0885533,
                36.741387
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0885533,
                        36.741387
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-w2p-r49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359498",
                    "2510309"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6QG4D9kQmbRvuHnPHZ",
            "title": "Feslloc",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 84,
            "phq_attendance": 2523,
            "entities": [
                {
                    "entity_id": "35AWiUM3BPFAKUGibXninLU",
                    "name": "Auditori Municipal Benlloc",
                    "type": "venue",
                    "formatted_address": "Mestre Ortega 6 Benlloch Spain"
                },
                {
                    "entity_id": "krBT4MTQXBwU8kTHYRSLKv",
                    "name": "Feslloc",
                    "type": "event-group",
                    "formatted_address": "12181 Bell-lloc Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20200709T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 259199,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-02-07T21:33:31Z",
            "first_seen": "2023-02-07T21:33:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.02971,
                40.20983
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.02971,
                        40.20983
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-xw3-4jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356986",
                    "3128267"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8B6vcUh6Wq8EVgsYyL",
            "title": "Festival of San Fermín",
            "description": "The festival of San Fermín is a weeklong, historically rooted celebration held annually in the city of Pamplona, Navarre, in northern Spain.",
            "category": "festivals",
            "labels": [
                "attraction",
                "community",
                "festival"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 1000000,
            "entities": [
                {
                    "entity_id": "32qd3zUVsxMbQSAknfgQ7Br",
                    "name": "Fiesta de San Fermín",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "animal",
                        "event-group",
                        "recurring"
                    ],
                    "description": "The festival commemorates the martyrdom of San Fermin, the city's patron saint. Secular cattle fairs and bull fighting events have eventually become part of the tradition and now the festival is internationally known for the encierro or the running of the bulls event. Today, the festival of San Fermin attracts over a million visitors each year from all corners of the world.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150706 DURATION:P10D RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 777599,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-14T21:59:59Z",
            "updated": "2023-03-05T22:06:25Z",
            "first_seen": "2022-09-16T00:40:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.6457745,
                42.812526
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.6457745,
                        42.812526
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-bhs-bx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3115609",
                    "6355235",
                    "6359749",
                    "8050889"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3115609",
                    "6355235",
                    "6359749",
                    "3114472"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8aBnHNcsJmuzhSnbT3",
            "title": "Mad Cool Festival at Mad Cool Space",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 47,
            "local_rank": 56,
            "phq_attendance": 690,
            "entities": [
                {
                    "entity_id": "ppSj9bL2tmdEKbBj5psbkm",
                    "name": "Mad Cool Space",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-06T21:59:59Z",
            "updated": "2023-04-17T20:57:49Z",
            "first_seen": "2023-04-17T13:45:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7036167,
                40.4473127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7036167,
                        40.4473127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cws-k75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3125239"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9LTjQsdEkAJ6oLQnPf",
            "title": "Mad Cool Festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 58,
            "local_rank": 72,
            "phq_attendance": 2591,
            "entities": [
                {
                    "entity_id": "8MJiFEWUEwbudDgjimjmTZ",
                    "name": "Mad Cool Festival",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "recurring"
                    ]
                }
            ],
            "duration": 259199,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-04-12T04:32:26Z",
            "first_seen": "2022-11-22T03:00:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.710964422976596,
                40.32927687586232
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.705879426767791,
                        40.33207206497761
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359291",
                    "6544483"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CUAzpEQDKwwrfUrANC",
            "title": "Festival Cruïlla 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 88,
            "local_rank": 93,
            "phq_attendance": 80000,
            "entities": [
                {
                    "entity_id": "cwMkfz6NarFUR4Zi7CAQQ9",
                    "name": "Cruïlla Barcelona",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "recurring"
                    ]
                }
            ],
            "duration": 259199,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-02-13T04:00:28Z",
            "first_seen": "2022-08-02T03:01:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.225390736120816,
                41.410874397924964
            ],
            "geo": {
                "geometry": {
                    "coordinates": [


                        2.222601,
                        41.4106868

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EbG7ZPUXoDj27nr2QE",
            "title": "Brisa Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 76,
            "phq_attendance": 2593,
            "entities": [
                {
                    "entity_id": "32rCvEsLbWNetjaMNguhJBT",
                    "name": "Jardín Botánico La Concepción",
                    "type": "venue",
                    "formatted_address": "Camino del Jardín Botánico, 3 29014 Málaga Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-03-22T23:36:22Z",
            "first_seen": "2023-03-22T23:32:29Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.42593,
                36.76366
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.42593,
                        36.76366
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wmt-5mk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GewD6G4XYYwdxMVVv4",
            "title": "Bahia Sound Latin Urban Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 63,
            "phq_attendance": 955,
            "entities": [
                {
                    "entity_id": "36Yn7qfz2TkL6kwELkYFuaD",
                    "name": "Bahía Sound",
                    "type": "venue",
                    "formatted_address": "San Fernando Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-06T21:59:59Z",
            "updated": "2023-03-22T23:59:21Z",
            "first_seen": "2023-03-22T23:58:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.212062,
                36.469307
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.212062,
                        36.469307
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8mh-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356946",
                    "2511388"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "iFPqmzKs9uWhP2HcUD",
            "title": "FESTIVAL DE LA GUITARRA DE CÓRDOBA",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 70,
            "phq_attendance": 2478,
            "entities": [
                {
                    "entity_id": "FQdUGbgAC2D7rL2attp3aV",
                    "name": "Gran Teatro de Córdoba",
                    "type": "venue",
                    "formatted_address": "3 Avenida del Gran Capitán 14008 Córdoba Spain"
                }
            ],
            "duration": 863999,
            "start": "2023-07-05T22:00:00Z",
            "end": "2023-07-15T21:59:59Z",
            "updated": "2023-04-20T23:58:08Z",
            "first_seen": "2023-04-20T23:57:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.7823914,
                37.8854398
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.7823914,
                        37.8854398
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-x4y-ty9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2519239",
                    "6357216",
                    "2519240"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ARPC2MzifZEknMSgzB",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-05T20:00:00Z",
            "end": "2023-07-05T20:00:00Z",
            "updated": "2023-03-15T04:46:42Z",
            "first_seen": "2023-03-15T03:13:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BZ4oYPSAnNBjobQvmt",
            "title": "Weekend Beach Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 80,
            "phq_attendance": 2447,
            "entities": [
                {
                    "entity_id": "FVhnALBFhGSRTLs7T98Nq",
                    "name": "Weekend Beach Festival",
                    "type": "venue",
                    "formatted_address": "Calle Faro Nuevo 29740 Torre del Mar Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-07-04T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-09T01:50:12Z",
            "first_seen": "2023-01-19T21:20:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.09835,
                36.73413
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.09835,
                        36.73413
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-vv3-ht9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359498",
                    "2510309"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4KjZHnKQXyKBQPDzvu",
            "title": "SuperThings - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-04T18:00:00Z",
            "end": "2023-07-04T18:00:00Z",
            "updated": "2023-03-29T01:19:26Z",
            "first_seen": "2023-03-29T00:12:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GVbxC4JvaU7dHmDdzU",
            "title": "Jazz Vitoria-Gasteiz",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 77,
            "phq_attendance": 3342,
            "entities": [
                {
                    "entity_id": "YRsCdugWLW4Q9XE2yaiGT5",
                    "name": "Festival De Jazz De Vitoria-gasteiz",
                    "type": "venue",
                    "formatted_address": "Plaza Amadeo Garcia de Salaza Vitoria-Gasteiz Spain"
                }
            ],
            "duration": 518399,
            "start": "2023-07-02T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-04-06T23:47:30Z",
            "first_seen": "2023-04-06T23:34:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6870737,
                42.8374354
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6870737,
                        42.8374354
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-wbq-jjv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129502"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4a2BgUNahD8dzLyQGK",
            "title": "Fito Páez - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-01T20:00:00Z",
            "end": "2023-07-01T20:00:00Z",
            "updated": "2023-04-26T23:46:29Z",
            "first_seen": "2023-03-15T00:14:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HxEXJPPM289ba5ev2K",
            "title": "Juan Luis Guerra en Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 72,
            "local_rank": 82,
            "phq_attendance": 12500,
            "entities": [
                {
                    "entity_id": "vGH2UCdEzwuPshyJTgAdfB",
                    "name": "Caja Mágica",
                    "type": "venue",
                    "formatted_address": "The Magic Box, 23 Camino de Perales 28041 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-07-01T19:30:00Z",
            "end": "2023-07-01T19:30:00Z",
            "updated": "2023-05-11T23:35:29Z",
            "first_seen": "2023-05-11T23:27:54Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6844407,
                40.3688321
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6844407,
                        40.3688321
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgj-89z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "A9uQ3uuD68sgQooTuD",
            "title": "Meed Festival 8.0",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 62,
            "phq_attendance": 482,
            "entities": [
                {
                    "entity_id": "39TnXCfSAzLjZrb7DgqTycB",
                    "name": "Centro Cultura Contemporánea L’escorxador De Elche",
                    "type": "venue",
                    "formatted_address": "CURTIDORS, 23 03203 ELX – ALACANT Alicante Spain"
                }
            ],
            "duration": 32400,
            "start": "2023-07-01T16:00:00Z",
            "end": "2023-07-02T01:00:00Z",
            "updated": "2023-05-10T22:21:40Z",
            "first_seen": "2023-05-10T22:21:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.6911892,
                38.2572351
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.6911892,
                        38.2572351
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-x2c-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355441",
                    "2518559"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3cXnMXfjpxUDPUx9Tu",
            "title": "Canet Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 60,
            "phq_attendance": 397,
            "entities": [
                {
                    "entity_id": "7J4md3Y8km9MhudK3KeXhJ",
                    "name": "Canetrock'14",
                    "type": "venue",
                    "formatted_address": "08360 Canet de Mar Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-01-18T20:49:29Z",
            "first_seen": "2023-01-18T20:48:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.5803886,
                41.5889734
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.5803886,
                        41.5889734
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-tk8-qpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6533989",
                    "3126584"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3hNpbnBwLy4NiacXgr",
            "title": "Vida Festival at La Masia d en Cabanyes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 44,
            "local_rank": 64,
            "phq_attendance": 529,
            "entities": [
                {
                    "entity_id": "39g7Fe3UeUstPvJAM8H5FjZ",
                    "name": "Masia d'en Cabanyes",
                    "type": "venue",
                    "formatted_address": "Camí Ral S/N 08800 Vilanova i la Geltrú Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-05-08T03:35:35Z",
            "first_seen": "2023-04-18T03:07:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.71627,
                41.24151
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.71627,
                        41.24151
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-j8k-8sq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356324",
                    "3105184"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4uX3S5QADZhYjxBbmY",
            "title": "Open Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 61,
            "phq_attendance": 674,
            "entities": [
                {
                    "entity_id": "nbiPS8YZrshLYFZB5D947j",
                    "name": "Jardines del Conde",
                    "type": "venue",
                    "formatted_address": "Calle de la Fuente, 8 41940 Tomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-03-24T23:59:42Z",
            "first_seen": "2023-03-24T23:59:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.045553,
                37.3742617
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.045553,
                        37.3742617
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rr5-cwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361048",
                    "2510394"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9aAYhSb6ivaAeUBPn2",
            "parent_event": {
                "parent_event_id": "7cxKK7aRAeBVQVBBts"
            },
            "title": "Madrid Pride Parade",
            "description": "This is the climax of the Madrid Pride. It takes place in the center of Madrid, starting at Atocha Station and ending in Plaza de Colón. It is arranged every year by the FELGTB (National Federation of Lesbians, Gays, Transexuals and Bisexuals) and COGAM (Madrid Association of Lesbians, Gays, Transsexuals and Bisexuals),",
            "category": "festivals",
            "labels": [
                "community",
                "entertainment",
                "festival"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 2000000,
            "entities": [
                {
                    "entity_id": "c3BhbZeMM2EtCTmgjHEC69",
                    "name": "Madrid Pride Parade",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "description": "MADO (Madrid Pride) , is a series of street celebrations that take place during the city´s LGTB (lesbian, gay, transsexual and bisexual) Pride Week. This is the climax of the Madrid Pride.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20140705 DURATION:P1D RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-05T04:16:35Z",
            "first_seen": "2023-01-16T04:35:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.692930851572742,
                40.41413975708005
            ],
            "geo": {
                "geometry": {
                    "coordinates": [

                        -3.6932562186051214,
                        40.41587409049488

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9rDxQ7PtxRXcV5nkdk",
            "title": "GARMIN Mountain Festival - Vall de Boi",
            "description": "",
            "category": "sports",
            "labels": [
                "festival",
                "outdoor",
                "running",
                "sport"
            ],
            "rank": 50,
            "local_rank": 92,
            "phq_attendance": 998,
            "entities": [],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-02-20T22:38:23Z",
            "first_seen": "2022-11-21T00:27:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.9344981,
                42.5750266
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.9344981,
                        42.5750266
                    ],
                    "type": "Point"
                },
                "placekey": "@7f8-5wy-t7q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355231",
                    "6358800",
                    "6544377"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BmGR4JAZgijmwtVtZr",
            "title": "BubblePop",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 53,
            "phq_attendance": 764,
            "entities": [
                {
                    "entity_id": "SZSVUBf9wkiGNyMhrDsKPX",
                    "name": "Fira Montjuic",
                    "type": "venue",
                    "formatted_address": "08002 Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-02T21:59:59Z",
            "updated": "2023-04-23T14:50:02Z",
            "first_seen": "2023-03-11T21:35:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1734035,
                41.3850639
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1734035,
                        41.3850639
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w67-rrk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E7acT2vsU4WY3gL4xb",
            "title": "Resurrection Fest at Resurrection Fest Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 40,
            "local_rank": 68,
            "phq_attendance": 323,
            "entities": [
                {
                    "entity_id": "XKRzRFhA9x4uuzCKCwDgBd",
                    "name": "Resurrection Fest Grounds",
                    "type": "venue",
                    "formatted_address": "Avenida Ramon Canosa 27869 Viveiro Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-18T09:14:22Z",
            "first_seen": "2023-04-17T23:28:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.5942220232,
                43.671692852
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.5942220232,
                        43.671692852
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-bnz-d9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359224",
                    "3104475"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HSNyB7gmBonee5gVTA",
            "title": "Asalto ao Castelo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 66,
            "local_rank": 100,
            "phq_attendance": 6000,
            "entities": [
                {
                    "entity_id": "VQTMkbXtZsb9XyLVPH8PgD",
                    "name": "Asalto ao castelo de Vimianzo",
                    "type": "venue",
                    "formatted_address": "Camino Campo de Fútbol, sn. Vimianzo La Coruna Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-30T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-27T23:30:26Z",
            "first_seen": "2023-04-27T23:25:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.91842,
                43.22693
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.91842,
                        43.22693
                    ],
                    "type": "Point"
                },
                "placekey": "@7dm-x55-2x5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357284",
                    "3115541"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357346",
                    "3109642"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7jNJbfrruyDvojCtAP",
            "title": "Morat en Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 72,
            "local_rank": 82,
            "phq_attendance": 12500,
            "entities": [
                {
                    "entity_id": "vGH2UCdEzwuPshyJTgAdfB",
                    "name": "Caja Mágica",
                    "type": "venue",
                    "formatted_address": "The Magic Box, 23 Camino de Perales 28041 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-30T20:30:00Z",
            "end": "2023-06-30T20:30:00Z",
            "updated": "2023-05-05T23:47:34Z",
            "first_seen": "2023-05-05T23:32:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6844407,
                40.3688321
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6844407,
                        40.3688321
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgj-89z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3uTiiABn4rH4MpGMwg",
            "title": "Río Babel",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 72,
            "local_rank": 82,
            "phq_attendance": 12500,
            "entities": [
                {
                    "entity_id": "vGH2UCdEzwuPshyJTgAdfB",
                    "name": "Caja Mágica",
                    "type": "venue",
                    "formatted_address": "The Magic Box, 23 Camino de Perales 28041 Madrid Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-02T21:59:59Z",
            "updated": "2023-02-21T22:00:36Z",
            "first_seen": "2023-01-26T20:49:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6840855462578066,
                40.36896382031537
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6853784,
                        40.3693587

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4R7EtxXwAtoth3X8t6",
            "title": "WineFest Jumilla",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 76,
            "phq_attendance": 1345,
            "entities": [
                {
                    "entity_id": "UcP64VUz6h6zgcnwSwfwah",
                    "name": "IES Arzobispo Lozano",
                    "type": "venue",
                    "formatted_address": "Av. de Levante, 20 30520 Jumilla Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-13T23:33:58Z",
            "first_seen": "2023-04-13T23:28:04Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.3248903,
                38.4741678
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.3248903,
                        38.4741678
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-zrz-7dv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359527",
                    "2516255"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7WaE6AiUbrDtS28mUW",
            "title": "OASIS SOUND",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 92,
            "phq_attendance": 1061,
            "entities": [
                {
                    "entity_id": "gNemBqW9vCp7duLVvmRTUV",
                    "name": "Recinto Oasis Sound",
                    "type": "venue",
                    "formatted_address": "Camino Pozo de los Carneros S/N Ciudad Real Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-03-15T08:53:49Z",
            "first_seen": "2023-03-15T03:11:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.0835,
                39.72755
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.0835,
                        39.72755
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-7th-r8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2510407",
                    "6361714",
                    "2519221"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7spK7cLd5PPf2bhoZh",
            "title": "Conexión Valladolid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 71,
            "phq_attendance": 1262,
            "entities": [
                {
                    "entity_id": "Ef9tLQBGdsDQ5iGmMe5U95",
                    "name": "Conexión Valladolid",
                    "type": "venue",
                    "formatted_address": "CL-610, 230 47008 Valladolid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-05-03T10:35:38Z",
            "first_seen": "2023-03-15T23:24:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.75692,
                41.59626
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.75692,
                        41.59626
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-2t7-3wk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3123360"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3106672"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8HdZ5mKbmrKvFKmGBL",
            "title": "Salinas Sound Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 69,
            "phq_attendance": 1197,
            "entities": [
                {
                    "entity_id": "HzJ55gk5FL78S8UrURXhWm",
                    "name": "Estadio Mpal. Antonio Peroles",
                    "type": "venue",
                    "formatted_address": "04740 Roquetas de Mar Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-03-15T07:00:59Z",
            "first_seen": "2023-03-15T03:11:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.62885,
                36.76379
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.62885,
                        36.76379
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-bcy-hbk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355591",
                    "2511716"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "93VnUBy8r2P9WQWSAJ",
            "title": "Resurrection Fest at Resurrection Fest Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 42,
            "local_rank": 70,
            "phq_attendance": 385,
            "entities": [
                {
                    "entity_id": "XKRzRFhA9x4uuzCKCwDgBd",
                    "name": "Resurrection Fest Grounds",
                    "type": "venue",
                    "formatted_address": "Avenida Ramon Canosa 27869 Viveiro Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-06-30T21:59:59Z",
            "updated": "2023-04-18T03:41:31Z",
            "first_seen": "2023-04-18T03:28:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.5942220232,
                43.671692852
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.5942220232,
                        43.671692852
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-bnz-d9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359224",
                    "3104475"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AFu6xeYEBaFqSxFSZA",
            "title": "Rompetiño Jump Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 67,
            "phq_attendance": 1448,
            "entities": [
                {
                    "entity_id": "nBnaiXz9WhETGx4GSUsVDu",
                    "name": "Porto Do Son",
                    "type": "venue",
                    "formatted_address": "La Coruna Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-07-02T21:59:59Z",
            "updated": "2023-01-16T21:06:39Z",
            "first_seen": "2023-01-16T21:02:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.40936,
                43.33336
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.40936,
                        43.33336
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cs3-6rk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357300",
                    "3123209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Aa5TDMXryoPdgkGcXE",
            "title": "La Guardia + Los Secretos - Simancas Villa de la Música",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 63,
            "phq_attendance": 700,
            "entities": [
                {
                    "entity_id": "q6yHtxkiSsnwAMXLV3mr3M",
                    "name": "Instalaciones Deportivas Los Pinos",
                    "type": "venue",
                    "formatted_address": "Valladolid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-06-30T21:59:59Z",
            "updated": "2023-05-12T00:04:46Z",
            "first_seen": "2023-05-12T00:02:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.7304095,
                41.6708431
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.7304095,
                        41.6708431
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-2w7-47q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362308",
                    "3106672"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CUSE2e8NryiJPiKMEr",
            "title": "Festival Porta Ferrada",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 83,
            "phq_attendance": 3966,
            "entities": [
                {
                    "entity_id": "sEWcbKESeu8myGzAtU4nF7",
                    "name": "Guixols Arena",
                    "type": "venue",
                    "formatted_address": "Av. de Catalunya 17220 Sant Feliu de Guíxols Spain"
                }
            ],
            "duration": 4492799,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-08-20T21:59:59Z",
            "updated": "2023-04-06T23:46:36Z",
            "first_seen": "2023-04-06T23:33:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.02164,
                41.7928
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.02164,
                        41.7928
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-5mp-wp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534123",
                    "8299564"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DwFVYKMEiNfDLaccWS",
            "title": "León Vive Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 60,
            "phq_attendance": 509,
            "entities": [
                {
                    "entity_id": "aUVz7zFxKkeG8fn4WYkp3V",
                    "name": "Campo Hípico Municipal \"El Parque\"",
                    "type": "venue",
                    "formatted_address": "León Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-06-30T21:59:59Z",
            "updated": "2023-05-06T15:58:48Z",
            "first_seen": "2023-01-23T21:27:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.5693345,
                42.5841586
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.5693345,
                        42.5841586
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-66w-ch5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6362996",
                    "3112746"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6362996",
                    "3118532"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "gqTysoKMSwtyEHJQcg",
            "title": "Vida Festival at La Masia d en Cabanyes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 45,
            "local_rank": 65,
            "phq_attendance": 566,
            "entities": [
                {
                    "entity_id": "39g7Fe3UeUstPvJAM8H5FjZ",
                    "name": "Masia d'en Cabanyes",
                    "type": "venue",
                    "formatted_address": "Camí Ral S/N 08800 Vilanova i la Geltrú Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-29T22:00:00Z",
            "end": "2023-06-30T21:59:59Z",
            "updated": "2023-05-08T08:27:16Z",
            "first_seen": "2023-04-17T19:44:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.71627,
                41.24151
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.71627,
                        41.24151
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-j8k-8sq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356324",
                    "3105184"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7oX4k9Hy2ApmC9mzPa",
            "title": "Observatorio Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 42,
            "phq_attendance": 185,
            "entities": [
                {
                    "entity_id": "Zjw4NQSff8z3qwWCbfBygi",
                    "name": "Auditorio Natural",
                    "type": "venue",
                    "formatted_address": "Balboa Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-29T19:00:00Z",
            "end": "2023-06-29T19:00:00Z",
            "updated": "2023-03-25T03:44:42Z",
            "first_seen": "2022-11-24T21:02:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.93499,
                43.26301
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.93499,
                        43.26301
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vbr-fmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3ZBPcHG8D5XRDLF5bA",
            "title": "Bigsound",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 61,
            "phq_attendance": 1311,
            "entities": [
                {
                    "entity_id": "qQKPPLdfzUTjgRmfKCh2FX",
                    "name": "Ciudad de las Artes y las Ciencias",
                    "type": "venue",
                    "formatted_address": "Avinguda Autopista Del Saler Nº 1, 3, 5, 7 Valencia Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-28T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-22T01:52:14Z",
            "first_seen": "2022-12-19T21:05:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.35487,
                39.4568299
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.35487,
                        39.4568299
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bd-dy9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2517532"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FncQvUJuWukMAamgsP",
            "title": "Vida Festival at La Masia d en Cabanyes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 45,
            "local_rank": 64,
            "phq_attendance": 531,
            "entities": [
                {
                    "entity_id": "39g7Fe3UeUstPvJAM8H5FjZ",
                    "name": "Masia d'en Cabanyes",
                    "type": "venue",
                    "formatted_address": "Camí Ral S/N 08800 Vilanova i la Geltrú Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-28T22:00:00Z",
            "end": "2023-06-29T21:59:59Z",
            "updated": "2023-05-08T06:32:26Z",
            "first_seen": "2022-11-03T20:40:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.71627,
                41.24151
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.71627,
                        41.24151
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-j8k-8sq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356324",
                    "3105184"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GYLMhUzVG8zecUTLpH",
            "parent_event": {
                "parent_event_id": "EYz7Ak64rDpDHHbgCR"
            },
            "title": "Música en Grande",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 66,
            "local_rank": 83,
            "phq_attendance": 6007,
            "entities": [
                {
                    "entity_id": "HQRBEwPmFYFZ2UNSaAwEut",
                    "name": "Estadio el Malecón",
                    "type": "venue",
                    "formatted_address": "39300 Torrelavega Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-28T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-27T00:48:19Z",
            "first_seen": "2023-02-17T21:13:54Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0626787,
                43.3502127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0626787,
                        43.3502127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-hwt-mff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360731",
                    "3107734"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360720",
                    "3109718"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "XetHYZRpiQ8C4JPtXd",
            "title": "Resurrection Fest at Resurrection Fest Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 39,
            "local_rank": 67,
            "phq_attendance": 271,
            "entities": [
                {
                    "entity_id": "XKRzRFhA9x4uuzCKCwDgBd",
                    "name": "Resurrection Fest Grounds",
                    "type": "venue",
                    "formatted_address": "Avenida Ramon Canosa 27869 Viveiro Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-28T22:00:00Z",
            "end": "2023-06-29T21:59:59Z",
            "updated": "2023-04-18T01:33:32Z",
            "first_seen": "2023-04-17T23:28:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.5942220232,
                43.671692852
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.5942220232,
                        43.671692852
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-bnz-d9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359224",
                    "3104475"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "758Uw6MZjkMDt2VCmt",
            "title": "RESURRECTION FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 80,
            "phq_attendance": 2311,
            "entities": [
                {
                    "entity_id": "vEwnrM87gueJQ6AP3xgFQF",
                    "name": "Resurrection Festival",
                    "type": "venue",
                    "formatted_address": "Santiago de Compostela Spain"
                }
            ],
            "duration": 431999,
            "start": "2023-06-27T22:00:00Z",
            "end": "2023-07-02T21:59:59Z",
            "updated": "2023-03-15T03:21:23Z",
            "first_seen": "2023-03-15T03:14:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.5446412,
                42.8805962
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.5446412,
                        42.8805962
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-x3j-g49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357346",
                    "3109642"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9NJz9EfVVQ2KWCHmbh",
            "title": "Resurrection Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 85,
            "phq_attendance": 2170,
            "entities": [
                {
                    "entity_id": "5Sqc6EfMz3nvtRWDrHE3Zb",
                    "name": "Campo de Fútbol Celeiro",
                    "type": "venue",
                    "formatted_address": "Av De Vicente Gradaile Trobo Viveiro Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-06-27T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-05-15T03:21:29Z",
            "first_seen": "2023-03-15T03:13:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.59388,
                43.67579
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.59388,
                        43.67579
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-bp2-2c5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359224",
                    "3125048"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EYz7Ak64rDpDHHbgCR",
            "title": "Música en Grande",
            "description": "EL MALECÓN TORRELAVEGA STADIUM (CANTABRIA) June 28, 29 and 30 and July 1, 2023",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 66,
            "local_rank": 86,
            "phq_attendance": 6000,
            "entities": [
                {
                    "entity_id": "Aj9tQntTgf9iCvk5GfFsKm",
                    "name": "El Malecon Torrelavega",
                    "type": "venue",
                    "formatted_address": "11 Calle Hermanos de Carriedo y Peredo 39300 Torrelavega Spain"
                },
                {
                    "entity_id": "tpzYpcB7YGJUEbg6CkeQHZ",
                    "name": "Musica Grande",
                    "type": "event-group",
                    "formatted_address": "39300 Torrelavega Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20180722T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 345599,
            "start": "2023-06-27T22:00:00Z",
            "end": "2023-07-01T21:59:59Z",
            "updated": "2023-04-27T00:24:32Z",
            "first_seen": "2023-04-27T00:24:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0686271,
                43.3596761
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0686271,
                        43.3596761
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-hx2-gkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360721",
                    "3121634"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336898",
                    "3109716",
                    "6360720",
                    "3109718"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3oi7FqGQ6nU47szctL",
            "title": "Alejandro Fernández - Banco Mediolanum Festival Mil·lenni",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 75,
            "local_rank": 81,
            "phq_attendance": 17960,
            "entities": [
                {
                    "entity_id": "37MBmKGz9ABTWEjzX3UDsLz",
                    "name": "Palau Sant Jordi",
                    "type": "venue",
                    "formatted_address": "5-7 Passeig Olímpic 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-27T19:00:00Z",
            "end": "2023-06-27T19:00:00Z",
            "updated": "2023-03-30T19:01:05Z",
            "first_seen": "2023-03-06T20:53:40Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1525492987366865,
                41.363100825048726
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1518684,
                        41.3641399

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9iSHHbjFyLDVuGjaup",
            "title": "Les Nits de Barcelona",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 61,
            "phq_attendance": 2000,
            "entities": [
                {
                    "entity_id": "Mv8wvzUfRZVSQWnRfFWXcK",
                    "name": "Parc de Pedralbes",
                    "type": "venue",
                    "formatted_address": "686 Avda. Diagonal 08034 Barcelona Spain"
                }
            ],
            "duration": 2591999,
            "start": "2023-06-26T22:00:00Z",
            "end": "2023-07-26T21:59:59Z",
            "updated": "2023-04-25T23:03:00Z",
            "first_seen": "2023-04-25T22:51:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1176991,
                41.3875923
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1176991,
                        41.3875923
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5m-9fz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3122826"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Ar7M6bFjz2jM53m9bU",
            "title": "Poesia i +",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 75,
            "phq_attendance": 1322,
            "entities": [
                {
                    "entity_id": "32kCzLCCaxPDeHLFHeKTaAb",
                    "name": "Parc de Can Muntanyà",
                    "type": "venue",
                    "formatted_address": "La Riera, 54 08393 Caldes d'Estrac Spain"
                }
            ],
            "duration": 1123199,
            "start": "2023-06-26T22:00:00Z",
            "end": "2023-07-09T21:59:59Z",
            "updated": "2023-02-23T20:53:02Z",
            "first_seen": "2023-02-23T20:52:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.52765,
                41.57111
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.52765,
                        41.57111
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-tmb-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6533987",
                    "3127038"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BKcvqkiey7tB5CsY6A",
            "title": "Estival Cuenca",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 70,
            "phq_attendance": 1730,
            "entities": [
                {
                    "entity_id": "jA4VufxHptgxy649P854cV",
                    "name": "Parador de Cuenca",
                    "type": "venue",
                    "formatted_address": "Cuenca Spain"
                }
            ],
            "duration": 1036799,
            "start": "2023-06-26T22:00:00Z",
            "end": "2023-07-08T21:59:59Z",
            "updated": "2023-05-07T02:16:26Z",
            "first_seen": "2023-03-15T03:15:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.1265457,
                40.0789972
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.1265457,
                        40.0789972
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-hkj-8vz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2519034",
                    "6357429",
                    "3124132"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3zmTNcWMdBTnzdph9F",
            "title": "Riverland",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 78,
            "local_rank": 100,
            "phq_attendance": 25000,
            "entities": [
                {
                    "entity_id": "DVePDcieJgJQJqMVFWKHdv",
                    "name": "Valle De La Música, Cangas de Onís",
                    "type": "venue",
                    "formatted_address": "N-634, km 340 Villaviciosa Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-25T22:00:00Z",
            "end": "2023-06-27T21:59:59Z",
            "updated": "2023-04-24T22:06:27Z",
            "first_seen": "2023-04-20T00:40:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.176337460667099,
                43.39456218460539
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.1779749,
                        43.3963118

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359948",
                    "3124294"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DTs5LLJbLc9g2Bu2PH",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-24T20:00:00Z",
            "end": "2023-06-24T20:00:00Z",
            "updated": "2023-03-15T06:05:43Z",
            "first_seen": "2023-03-15T03:12:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HCFLgMsypGesxc7ekJ",
            "title": "El Caribe Summer Festival",
            "description": "¡I Edición de El Caribe Summer Festival!",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 71,
            "phq_attendance": 853,
            "entities": [],
            "duration": 43200,
            "start": "2023-06-24T16:00:00Z",
            "end": "2023-06-25T04:00:00Z",
            "updated": "2023-05-11T20:29:53Z",
            "first_seen": "2023-05-11T20:29:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.1007154,
                38.8375156
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.1007154,
                        38.8375156
                    ],
                    "type": "Point"
                },
                "placekey": "@7d9-w9k-kvf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593112",
                    "2521419",
                    "6355906",
                    "2519105"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593112",
                    "2521419",
                    "6355948",
                    "2513917"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4ZvLC4tcq7SvY3v7JP",
            "title": "Hip-World",
            "description": "Nuevo evento en la isla para recordar esta maravillosa epoca de los 90's, ven y disfruta de Hip-World.",
            "category": "festivals",
            "labels": [
                "festival",
                "performing-arts"
            ],
            "rank": 51,
            "local_rank": 63,
            "phq_attendance": 1134,
            "entities": [],
            "duration": 118800,
            "start": "2023-06-24T09:00:00Z",
            "end": "2023-06-25T18:00:00Z",
            "updated": "2023-05-04T11:52:52Z",
            "first_seen": "2023-05-04T10:33:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.6411001,
                39.5833544
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.6411001,
                        39.5833544
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bpg-zxq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3h88kzcT9Gvenwxkfc",
            "title": "KOBA LIVE",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 60,
            "phq_attendance": 562,
            "entities": [
                {
                    "entity_id": "SW927raYeKvmidPSMkk9fv",
                    "name": "Abadiño",
                    "type": "venue",
                    "formatted_address": "Herriko Plaza 48200 Durango Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-15T06:08:22Z",
            "first_seen": "2023-03-15T03:18:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6313339,
                43.1711864
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6313339,
                        43.1711864
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-rsx-rkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362372",
                    "3123773"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5MWePg4FjHziGm8mXV",
            "title": "Ceba Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 70,
            "phq_attendance": 647,
            "entities": [
                {
                    "entity_id": "uiU9xKBMDGLpacyAxpVANk",
                    "name": "Cebarock",
                    "type": "venue",
                    "formatted_address": "La Pobla de Vallbona Valencia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-24T23:41:14Z",
            "first_seen": "2023-03-24T23:36:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.55178,
                39.5963
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.55178,
                        39.5963
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8sn-9zz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362067",
                    "2512251"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6hHpCxAF2eVANFDvC3",
            "title": "Open Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 60,
            "phq_attendance": 589,
            "entities": [
                {
                    "entity_id": "nbiPS8YZrshLYFZB5D947j",
                    "name": "Jardines del Conde",
                    "type": "venue",
                    "formatted_address": "Calle de la Fuente, 8 41940 Tomares Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-16T21:19:37Z",
            "first_seen": "2023-03-06T21:18:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.045553,
                37.3742617
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.045553,
                        37.3742617
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rr5-cwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361048",
                    "2510394"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7STxCSbU6fENZgDfcz",
            "title": "Ultra Beach Costa Del Sol",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 59,
            "phq_attendance": 643,
            "entities": [
                {
                    "entity_id": "36wH9WeXsMJHM2riEB5dAtY",
                    "name": "Castillo Sohail",
                    "type": "venue",
                    "formatted_address": "C/Tartessos s/n 29640 Fuengirola Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-04-06T23:47:05Z",
            "first_seen": "2023-04-06T23:36:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.6287241,
                36.5253198
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.6287241,
                        36.5253198
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-hvk-xt9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359459",
                    "2517595"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7aWqCwZZjPUitoy8VR",
            "title": "Spring Urban Soria",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 62,
            "phq_attendance": 831,
            "entities": [
                {
                    "entity_id": "XatHyM6T8k4rny3jw54CJD",
                    "name": "Spring Urban Soria",
                    "type": "venue",
                    "formatted_address": "42004 Soria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-25T21:59:59Z",
            "updated": "2023-03-15T05:41:34Z",
            "first_seen": "2023-03-15T03:12:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.47903,
                41.7666
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.47903,
                        41.7666
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-vkn-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3108680",
                    "6361204",
                    "3108681"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "86bni89pT5gFJ5FeCn",
            "title": "Festival Tomavistas at Parque Enrique Tierno Galvan",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 50,
            "local_rank": 69,
            "phq_attendance": 946,
            "entities": [
                {
                    "entity_id": "RbkSK9ghGbTmhG5wm8nd7D",
                    "name": "Enrique Tierno Galván Park",
                    "type": "venue",
                    "formatted_address": "4 Calle Meneses 28045 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-05-08T04:56:13Z",
            "first_seen": "2023-04-18T03:19:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6748238,
                40.1857078
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6748238,
                        40.1857078
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cp3-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359380",
                    "3106868"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "H7uv2jHnXLwGhnpkeC",
            "title": "Love the twenties",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 59,
            "phq_attendance": 849,
            "entities": [
                {
                    "entity_id": "7PSPikNG5Y7zQrN4p7BMP4",
                    "name": "IFEMA - Feria de Madrid",
                    "type": "venue",
                    "formatted_address": "IFEMA Feria de Madrid, 5 Avenida Partenón 28042 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-25T21:59:59Z",
            "updated": "2023-04-10T23:45:45Z",
            "first_seen": "2023-04-10T23:27:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6165512000000035,
                40.465582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6165512000000035,
                        40.465582
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-czt-8gk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3124964"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "H824QqeWrCAWdNBgN9",
            "title": "Murcia Río",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 62,
            "phq_attendance": 694,
            "entities": [
                {
                    "entity_id": "35Th4U2PJU3dT7Cnrf4CyKm",
                    "name": "Murcia Parque",
                    "type": "venue",
                    "formatted_address": "30004 Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-05-04T23:59:49Z",
            "first_seen": "2023-05-04T23:43:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1365014,
                37.9822582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1365014,
                        37.9822582
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2fr-3h5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "J39XCRhc8q7nZi88NK",
            "title": "Ítaca Sant Joan",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 80,
            "phq_attendance": 753,
            "entities": [
                {
                    "entity_id": "WdESGANciBwpNZJ9SFEFn6",
                    "name": "Platja de L'Estartit",
                    "type": "venue",
                    "formatted_address": "Pg. Marítim, 95 L'Estartit Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-23T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-08T21:16:25Z",
            "first_seen": "2023-03-08T21:16:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.1966,
                42.04955
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.1966,
                        42.04955
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-3jm-gx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534154",
                    "3122776"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5g2oxMgTxoBE6gyEZA",
            "title": "Zeporock Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 63,
            "phq_attendance": 185,
            "entities": [
                {
                    "entity_id": "jXDAzKNRu6JXsKwNi2TxX5",
                    "name": "Complejo Deportivo Municipal Lozano Montoya de el Toboso",
                    "type": "venue",
                    "formatted_address": "Cam. Belmonte, 3, El Toboso Toledo Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-23T20:00:00Z",
            "end": "2023-06-23T20:00:00Z",
            "updated": "2023-05-09T23:25:13Z",
            "first_seen": "2023-04-29T23:24:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.99164,
                39.5131
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.99164,
                        39.5131
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-8zk-5vf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2510407",
                    "6361827",
                    "2518078"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9c7PTQ8doC5yYTJFMY",
            "title": "Starlite Catalana Occidente",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-23T20:00:00Z",
            "end": "2023-06-23T20:00:00Z",
            "updated": "2023-03-15T04:54:26Z",
            "first_seen": "2023-03-15T03:10:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6zyHFNqFZ6cAPoyTc2",
            "title": "Mega Silent Disco San Juan Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 57,
            "phq_attendance": 270,
            "entities": [],
            "duration": 27000,
            "start": "2023-06-23T19:30:00Z",
            "end": "2023-06-24T03:00:00Z",
            "updated": "2023-05-03T03:59:59Z",
            "first_seen": "2023-02-15T00:11:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.0190813,
                41.267201
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.0190813,
                        41.267201
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wgw-sdv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356088",
                    "3125897"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7TuJ9cQqyA2jeEU9mN",
            "title": "Starlite Festival",
            "description": "Starlite Festival is an international music festival that take place in a natural outdoor space. Starlite has become the cultural festival of reference in Europe with a daily programme that includes music, fashion, art, film and gastronomy opening its doors every day for a month with shows at the only club in the world inside a quarry. Starlite dedicates one night to philanthropy celebrating Starlite Gala hosted by Antonio Banderas, which has become the largest charity event in Spain.",
            "category": "festivals",
            "labels": [
                "festival",
                "food",
                "music"
            ],
            "rank": 99,
            "local_rank": 100,
            "phq_attendance": 280000,
            "entities": [
                {
                    "entity_id": "3BdVwMihDDhAFtH38RFe3de",
                    "name": "Starlite Festival",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "food",
                        "music",
                        "recurring"
                    ],
                    "description": "Starlite Festival is the most important boutique festival in Europe. The event not only features concerts, since the public also will have the opportunity to have dance, have dinner and drinks.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20170713 DURATION:P47DT4H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 6157800,
            "start": "2023-06-23T15:00:00Z",
            "end": "2023-09-02T21:30:00Z",
            "updated": "2023-05-08T19:06:34Z",
            "first_seen": "2023-05-01T04:18:29Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.913677580791735,
                36.508843904136405
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.914334,
                        36.5088058

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BsePvqSYc8sGnNUXu5",
            "title": "Dream island Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 75,
            "phq_attendance": 4000,
            "entities": [
                {
                    "entity_id": "XXSTXaChTS3WaaPWBqx79p",
                    "name": "SON FUSTERET",
                    "type": "venue",
                    "formatted_address": "Camí Vell de Bunyola, s/n Palma de Mallorca Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-23T15:00:00Z",
            "end": "2023-06-23T15:00:00Z",
            "updated": "2023-05-08T02:19:05Z",
            "first_seen": "2023-03-29T01:12:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.6699409,
                39.5913127
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.6699409,
                        39.5913127
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bp6-26k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2516450"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7xijTrh3dM83Mg56FU",
            "title": "Boombastic Canarias",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 68,
            "phq_attendance": 2000,
            "entities": [
                {
                    "entity_id": "S4tcLTmUq5HTsub6VnFQ4b",
                    "name": "Anexo Estadio de Gran Canaria",
                    "type": "venue",
                    "formatted_address": "s/n Calle Fondos de Segura 35019 Las Palmas de Gran Canaria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-22T23:00:00Z",
            "end": "2023-06-24T22:59:59Z",
            "updated": "2023-03-15T08:15:38Z",
            "first_seen": "2023-03-15T03:13:11Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.4552162,
                28.1024977
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.4552162,
                        28.1024977
                    ],
                    "type": "Point"
                },
                "placekey": "@6ym-7dv-yd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2510667"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5ycg4zRhxMSnRpKbYj",
            "title": "Festival Í-TACA",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 90,
            "phq_attendance": 2375,
            "entities": [
                {
                    "entity_id": "Ga22XxG4U3biFENVmAgUQY",
                    "name": "Ítaca Cultura (Platja Gran)",
                    "type": "venue",
                    "formatted_address": "L'Estartit Spain"
                },
                {
                    "entity_id": "LCnsCmXZxSwnH27VFe2rS",
                    "name": "Festival Itaca",
                    "type": "event-group",
                    "formatted_address": "17258 Torroella de Montgrí Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20210624T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 172799,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2022-12-21T21:04:07Z",
            "first_seen": "2022-12-21T21:03:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.1977272,
                42.0534896
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.1977272,
                        42.0534896
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-3jn-5mk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534154",
                    "3122776"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7cxKK7aRAeBVQVBBts",
            "title": "Madrid Pride",
            "description": "Madrid is one of the best LGBTQ+ destinations in the world and its annual Pride is a must attend for thousands of people from across the world. The festivities then continue for a week with a wide range of political activism, cultural, and fun activities.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 2000000,
            "entities": [
                {
                    "entity_id": "3m52seRtPr82QP5mQG9v4z",
                    "name": "Madrid Pride",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "description": "MADO (Madrid Pride) , is a series of street celebrations that take place during the city´s LGTB (lesbian, gay, transsexual and bisexual) Pride Week.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20140702 DURATION:P8D RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 863999,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-07-02T21:59:59Z",
            "updated": "2023-02-07T19:01:56Z",
            "first_seen": "2023-01-16T04:50:51Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7031839860926885,
                40.42859871476932
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6956153181926874,
                        40.42806066791875

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9kgedw3hAB4qNFFn8B",
            "title": "El Bosque Sonoro",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 82,
            "phq_attendance": 847,
            "entities": [
                {
                    "entity_id": "32xEGMyiknW2H7PRUZNZBzz",
                    "name": "Mozota",
                    "type": "venue",
                    "formatted_address": "Av. Poza Genaro Zaragoza Spain"
                },
                {
                    "entity_id": "3BhQehksg9WBZTFpWh7sYLv",
                    "name": "Bosque Sonoro",
                    "type": "event-group",
                    "formatted_address": "50440 Mozota Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20210701T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 172799,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-17T23:43:59Z",
            "first_seen": "2023-03-17T23:43:44Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.07001,
                41.48337
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.07001,
                        41.48337
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-8db-2zf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362867",
                    "3115968"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362983",
                    "3104324"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "B4xD6vKFHjB6DRV3iQ",
            "title": "A Summer Story",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 85,
            "phq_attendance": 1910,
            "entities": [
                {
                    "entity_id": "tJDRRqRK6dyp9YdtKK9gLR",
                    "name": "Ciudad del Rock",
                    "type": "venue",
                    "formatted_address": "28500 Arganda del Rey Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-03-10T21:25:00Z",
            "first_seen": "2023-03-10T21:24:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.4057714,
                40.2596372
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.4057714,
                        40.2596372
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-crp-xkf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359315",
                    "3116157"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CtumXWmv2m6FMnyqao",
            "title": "Open Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 68,
            "phq_attendance": 1416,
            "entities": [
                {
                    "entity_id": "nbiPS8YZrshLYFZB5D947j",
                    "name": "Jardines del Conde",
                    "type": "venue",
                    "formatted_address": "Calle de la Fuente, 8 41940 Tomares Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-25T21:59:59Z",
            "updated": "2023-03-06T21:33:48Z",
            "first_seen": "2023-03-06T21:19:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.045553,
                37.3742617
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.045553,
                        37.3742617
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rr5-cwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361048",
                    "2510394"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "D94Msr3g4McZU3Arhe",
            "title": "Festival Tomavistas at Parque Enrique Tierno Galvan",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 50,
            "local_rank": 69,
            "phq_attendance": 946,
            "entities": [
                {
                    "entity_id": "RbkSK9ghGbTmhG5wm8nd7D",
                    "name": "Enrique Tierno Galván Park",
                    "type": "venue",
                    "formatted_address": "4 Calle Meneses 28045 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-23T21:59:59Z",
            "updated": "2023-05-08T11:36:02Z",
            "first_seen": "2023-04-17T23:27:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6748238,
                40.1857078
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6748238,
                        40.1857078
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cp3-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359380",
                    "3106868"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DxZuN5ZHdgSdvaadHn",
            "title": "Hoguera de San Juan",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 65,
            "phq_attendance": 650,
            "entities": [
                {
                    "entity_id": "uR5RnsAknf2RPKxR7tERr6",
                    "name": "El Ventorrillo del Cura",
                    "type": "venue",
                    "formatted_address": "Camino de Totalán, s/n 29018 Málaga Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-23T21:59:59Z",
            "updated": "2023-05-04T23:55:14Z",
            "first_seen": "2023-05-04T23:22:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.33224,
                36.72821
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.33224,
                        36.72821
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnc-t9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2518287"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DxpecCY3cHqq8gEMQ3",
            "title": "Rock Imperium Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 68,
            "phq_attendance": 1393,
            "entities": [
                {
                    "entity_id": "fyLF82BYwCQakveKBfdBAD",
                    "name": "Rock Imperium Festival, Cartagena",
                    "type": "venue",
                    "formatted_address": "Parque de la Cuesta del Batel 30202 Cartagena Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-25T21:59:59Z",
            "updated": "2023-03-15T03:53:26Z",
            "first_seen": "2023-03-15T03:13:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.97736,
                37.60139
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.97736,
                        37.60139
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-268-8qf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359521",
                    "2511148"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GjZSrFFaQ9H2HKR8rJ",
            "title": "Mugacu Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 86,
            "phq_attendance": 2815,
            "entities": [
                {
                    "entity_id": "dttpEuKZ63cCtiam644H6W",
                    "name": "Mugacu Fest",
                    "type": "venue",
                    "formatted_address": "Viana Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-22T22:00:00Z",
            "end": "2023-06-25T21:59:59Z",
            "updated": "2023-03-29T23:44:42Z",
            "first_seen": "2023-03-29T23:44:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.3737401,
                42.5148487
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.3737401,
                        42.5148487
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-cyy-bff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3115609",
                    "6355235",
                    "6359798",
                    "3106073"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "C7kcbxKSRDXAbBmigH",
            "title": "Festival Tomavistas at Parque Enrique Tierno Galvan",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 48,
            "local_rank": 68,
            "phq_attendance": 768,
            "entities": [
                {
                    "entity_id": "RbkSK9ghGbTmhG5wm8nd7D",
                    "name": "Enrique Tierno Galván Park",
                    "type": "venue",
                    "formatted_address": "4 Calle Meneses 28045 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-21T22:00:00Z",
            "end": "2023-06-22T21:59:59Z",
            "updated": "2023-05-08T09:47:49Z",
            "first_seen": "2023-04-18T03:19:51Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6748238,
                40.1857078
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6748238,
                        40.1857078
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cp3-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359380",
                    "3106868"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ECys2YRHbUNmZUBLrt",
            "title": "City Festival Huelva",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 65,
            "phq_attendance": 1080,
            "entities": [],
            "duration": 259199,
            "start": "2023-06-21T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-01-11T21:12:10Z",
            "first_seen": "2023-01-11T21:11:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.94738,
                37.2582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.94738,
                        37.2582
                    ],
                    "type": "Point"
                },
                "placekey": "@7df-msh-wff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2516547",
                    "6358217",
                    "2516548"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HVTGV4ourdQwKn2ioo",
            "title": "Antorchas Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 62,
            "phq_attendance": 895,
            "entities": [
                {
                    "entity_id": "3BNy535DQmeSMCDwPAuYMaS",
                    "name": "Recinto Ferial de Albacete ITAP",
                    "type": "venue",
                    "formatted_address": "Albacete Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-21T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2023-01-23T21:18:42Z",
            "first_seen": "2023-01-23T21:18:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.8683332,
                38.9969366
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.8683332,
                        38.9969366
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-fhf-3bk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355295",
                    "2522258"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HYfpHdjNEQHWakCyYg",
            "title": "Tomavistas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 66,
            "phq_attendance": 2100,
            "entities": [
                {
                    "entity_id": "rYV3ZGBDC4hx4aZKw8j9tS",
                    "name": "Parque Enrique Tierno Galván",
                    "type": "venue",
                    "formatted_address": "Av. del Planetario, s/n 28045 Madrid Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-21T22:00:00Z",
            "end": "2023-06-24T21:59:59Z",
            "updated": "2022-12-05T20:46:19Z",
            "first_seen": "2022-12-05T20:44:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.68605,
                40.39098
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.68605,
                        40.39098
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgc-kcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FREkMorNCHJMPcmYqF",
            "title": "Yusuf And Cat Stevens - Festival Starlite",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 82,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "v4u766UVTLSivgeD4NtLki",
                    "name": "Auditorio La Cantera de Nagüeles",
                    "type": "venue",
                    "formatted_address": "Calle Albioni, s/n, 29602 29602 Marbella Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-21T20:00:00Z",
            "end": "2023-06-21T20:00:00Z",
            "updated": "2023-03-29T01:24:05Z",
            "first_seen": "2023-03-29T00:12:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.92221,
                36.52792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.92221,
                        36.52792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-nnz-jgk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "2514169"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EcFJHjee6cM7cqgcTW",
            "title": "León Vive Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 71,
            "phq_attendance": 1821,
            "entities": [
                {
                    "entity_id": "aUVz7zFxKkeG8fn4WYkp3V",
                    "name": "Campo Hípico Municipal \"El Parque\"",
                    "type": "venue",
                    "formatted_address": "León Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-19T22:00:00Z",
            "end": "2023-06-21T21:59:59Z",
            "updated": "2023-05-04T21:29:37Z",
            "first_seen": "2023-03-06T21:20:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.5693345,
                42.5841586
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.5693345,
                        42.5841586
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-66w-ch5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6362996",
                    "3112746"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3118528",
                    "6362996",
                    "3118532"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Azk4EbN2tTvd8N5KKK",
            "title": "XXVII  Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 50,
            "phq_attendance": 300,
            "entities": [
                {
                    "entity_id": "NYmXbtB7tZDtyYM9qDHLMT",
                    "name": "Sala CLAMORES",
                    "type": "venue",
                    "formatted_address": "14 Calle Alburquerque 28010 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-18T14:30:00Z",
            "end": "2023-06-18T14:30:00Z",
            "updated": "2023-03-18T20:56:55Z",
            "first_seen": "2023-03-08T20:53:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.700993,
                40.431188
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.700993,
                        40.431188
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwr-r8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DixqftYgMqz8Lediit",
            "title": "Knaïv x KHIDI + Ombra - OFFWEEK FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 39600,
            "start": "2023-06-18T11:00:00Z",
            "end": "2023-06-18T22:00:00Z",
            "updated": "2023-05-09T07:57:56Z",
            "first_seen": "2023-05-01T05:21:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DWwik97ZTo6hzVadVT",
            "title": "Pachamama Yoga Day",
            "description": "Ven con nosotras a Celebrar el DÍA DEL YOGA ¡Este festival urbano de Yoga te espera!  ¡12h non-stop de yoga, meditación e inspiración!",
            "category": "festivals",
            "labels": [
                "festival",
                "health"
            ],
            "rank": 47,
            "local_rank": 63,
            "phq_attendance": 674,
            "entities": [],
            "duration": 43200,
            "start": "2023-06-18T07:30:00Z",
            "end": "2023-06-18T19:30:00Z",
            "updated": "2023-05-11T22:45:38Z",
            "first_seen": "2023-05-11T22:37:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.6617783,
                43.5384227
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.6617783,
                        43.5384227
                    ],
                    "type": "Point"
                },
                "placekey": "@4f5-dmn-33q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359929",
                    "3121424"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359947",
                    "3114711"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "48xPF2hyk7VooV5Aza",
            "title": "Magnific Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 49,
            "phq_attendance": 460,
            "entities": [
                {
                    "entity_id": "NJrV4XyKWvJ4CBxQqmkPtf",
                    "name": "Lleida",
                    "type": "venue",
                    "formatted_address": "08002 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-17T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-03-09T20:49:26Z",
            "first_seen": "2023-03-09T20:49:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1734035,
                41.3850639
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1734035,
                        41.3850639
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w67-rrk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7s2wxZBcwgJmUk3WtN",
            "title": "FIESTA 2023",
            "description": "Pégate la fiesta del año con nosotros!",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 36,
            "local_rank": 70,
            "phq_attendance": 207,
            "entities": [],
            "duration": 21600,
            "start": "2023-06-17T22:00:00Z",
            "end": "2023-06-18T04:00:00Z",
            "updated": "2023-01-27T23:00:28Z",
            "first_seen": "2023-01-27T23:00:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5132866,
                40.72337630000001
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5132866,
                        40.72337630000001
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-xym-hdv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359364",
                    "3108389"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FmudUWCk3DC8ezUhLS",
            "title": "CIUDAD REAL BEACH FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 60,
            "phq_attendance": 664,
            "entities": [
                {
                    "entity_id": "WFc98kwXkrkafQWcyrpRwB",
                    "name": "Complejo Playapark",
                    "type": "venue",
                    "formatted_address": "Avenida de los Descubrimientos s/n 13005 Ciudad Real Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-17T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-04-10T23:29:22Z",
            "first_seen": "2023-04-10T23:24:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.9194246,
                38.9940924
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.9194246,
                        38.9940924
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-sm9-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2519401",
                    "6357128",
                    "2519402"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3SpxW99SZTEqNh3Kcb",
            "title": "GEUREGATIK JAIALDI SOLIDARIOA",
            "description": "GEU elkartearen jaialdi solidarioa da \"GEUREGATIK\" euskal musika eta euskal kultura sustatzen duena. Animatu zaitez eta parte hartu!",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 50,
            "phq_attendance": 158,
            "entities": [],
            "duration": 0,
            "start": "2023-06-17T16:00:00Z",
            "end": "2023-06-17T16:00:00Z",
            "updated": "2023-02-14T10:39:56Z",
            "first_seen": "2023-02-14T10:39:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.688221,
                42.8370912
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.688221,
                        42.8370912
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-wbq-j7q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129502"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FCd5Yrn8ti2Yx2grgy",
            "title": "Jackies Off Week Beach Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 33,
            "local_rank": 58,
            "phq_attendance": 135,
            "entities": [
                {
                    "entity_id": "FxZhDAHAgXyZwZzbSwXQXv",
                    "name": "Hola Beach Club",
                    "type": "venue",
                    "formatted_address": "cala vallcarca, C-31 08870 Sitges Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-17T12:00:00Z",
            "end": "2023-06-17T12:00:00Z",
            "updated": "2023-03-16T23:42:48Z",
            "first_seen": "2023-03-16T22:56:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.86657,
                41.23987
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.86657,
                        41.23987
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-jb4-ty9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356289",
                    "3106661"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3eKWprqetTP9CRZu7w",
            "title": "HEDKANDY Valencia",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 58,
            "phq_attendance": 984,
            "entities": [
                {
                    "entity_id": "7uAriU6TFspNsW2PD29eFc",
                    "name": "Amstel Art. Veles e vents",
                    "type": "venue",
                    "formatted_address": "Marina Real Juan Carlos I, Muelle de la Aduana, s/n Valencia 46024 València Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-05-14T23:43:57Z",
            "first_seen": "2023-05-14T23:37:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.32796,
                39.46266
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.32796,
                        39.46266
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8gd-ct9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2513284"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        }, {
            "relevance": 0,
            "id": "54fKQm6LwT5io3hdUh",
            "title": "Tronkofest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 72,
            "phq_attendance": 676,
            "entities": [
                {
                    "entity_id": "UePrBVd7Dz22kVNszC5UqF",
                    "name": "Tronco Bar",
                    "type": "venue",
                    "formatted_address": "Av. Matos 36153 Pontevedra Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-11T23:56:00Z",
            "first_seen": "2023-05-11T23:55:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.6601853,
                42.4190918
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.6601853,
                        42.4190918
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yfr-45f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3117900"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BjQNnt7BRDhQrnLhvS",
            "title": "Boombastic",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 63,
            "phq_attendance": 430,
            "entities": [
                {
                    "entity_id": "pU7zpGUsnmcUWbyhfRbyr6",
                    "name": "Auditorio Miguel Ríos",
                    "type": "venue",
                    "formatted_address": "s/n Paseo Alicia Alonso 28521 Rivas-Vaciamadrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-08T03:39:07Z",
            "first_seen": "2023-03-15T03:10:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5129742,
                40.3458047
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5129742,
                        40.3458047
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cdc-gzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359344",
                    "3107112"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "C8bpmjhuKUxQtXipDV",
            "title": "Festival Noceda Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 71,
            "phq_attendance": 421,
            "entities": [
                {
                    "entity_id": "bVRMRJBbXW4qtADSnDZfX5",
                    "name": "Lalín Arena",
                    "type": "venue",
                    "formatted_address": "Avenida José Cuíña, 42, Lalín 36500 Lalín Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-04-26T23:46:45Z",
            "first_seen": "2023-04-26T23:42:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.11741,
                42.66123
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.11741,
                        42.66123
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-y44-x89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "3119535",
                    "3119536"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3114964",
                    "6359872",
                    "3114965"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DW8yEjeq3yn5qTEH3q",
            "title": "Bufalynch",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 84,
            "phq_attendance": 902,
            "entities": [
                {
                    "entity_id": "JKwaqR66Jt8PsapTzTmnRh",
                    "name": "Camp Municipal d'Esports d'Empuriabrava",
                    "type": "venue",
                    "formatted_address": "Castelló d'Empueries Girona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-07T01:26:21Z",
            "first_seen": "2023-05-06T23:51:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.0739,
                42.26049
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.0739,
                        42.26049
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-77r-qzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534040",
                    "3125884"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Datway3eV6JA7Yq4fM",
            "title": "Love the 90´s",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 53,
            "phq_attendance": 401,
            "entities": [
                {
                    "entity_id": "7PSPikNG5Y7zQrN4p7BMP4",
                    "name": "IFEMA - Feria de Madrid",
                    "type": "venue",
                    "formatted_address": "IFEMA Feria de Madrid, 5 Avenida Partenón 28042 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-02-03T20:50:30Z",
            "first_seen": "2023-02-03T20:50:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6165512000000035,
                40.465582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6165512000000035,
                        40.465582
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-czt-8gk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3124964"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Fr5jBTG95accmpdsnE",
            "title": "Azkena Rock Festival at Azkena Rock Festival Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 34,
            "local_rank": 50,
            "phq_attendance": 150,
            "entities": [
                {
                    "entity_id": "3LTuYczXExcMnQn7WbyCmx",
                    "name": "Azkena Rock Festival",
                    "type": "venue",
                    "formatted_address": "Vitoria-Gasteiz Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-04T13:44:54Z",
            "first_seen": "2023-04-17T23:35:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6851371,
                42.8340309
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6851371,
                        42.8340309
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-wbq-jvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129693"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HDdcxG6tGPY6duwHqD",
            "title": "Almanece Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 67,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "qfrBCErrugrjbTxvqKDvFw",
                    "name": "Industrial Copera",
                    "type": "venue",
                    "formatted_address": "Parcela 13 Calle Desmond Tutu 18640 La Zubia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-04-22T00:52:02Z",
            "first_seen": "2023-04-22T00:45:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.583976,
                37.130483
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.583976,
                        37.130483
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-vfq-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357669",
                    "2520592"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "pa9jtodVZLuktN7MFD",
            "title": "BESTIALC Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 79,
            "phq_attendance": 917,
            "entities": [
                {
                    "entity_id": "tMUKV7HVHpFVf3XaLMD3nG",
                    "name": "Recinto Pista Jardin, L'Alcora",
                    "type": "venue",
                    "formatted_address": "Passeig de la Font Nova 2 Castellon De La Plana Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-16T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-05-12T23:29:53Z",
            "first_seen": "2023-05-12T23:29:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.20807,
                40.07996
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.20807,
                        40.07996
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-xyk-bzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356964",
                    "3130567"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "3125881",
                    "6356995",
                    "2519752"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "J6s9NZiRByfuqzdSFg",
            "title": "Maroon 5 - UK + EUROPE",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 75,
            "local_rank": 81,
            "phq_attendance": 17960,
            "entities": [
                {
                    "entity_id": "37MBmKGz9ABTWEjzX3UDsLz",
                    "name": "Palau Sant Jordi",
                    "type": "venue",
                    "formatted_address": "5-7 Passeig Olímpic 08038 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-16T19:30:00Z",
            "end": "2023-06-16T19:30:00Z",
            "updated": "2023-02-07T22:00:41Z",
            "first_seen": "2022-11-15T20:42:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.152569948661124,
                41.36307145624773
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                2.1518341,
                                41.3641787
                            ],
                            [
                                2.1517858,
                                41.3619764
                            ],
                            [
                                2.1532986,
                                41.3619643
                            ],
                            [
                                2.1533629,
                                41.3641586
                            ],
                            [
                                2.1518341,
                                41.3641787
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "373DvTnHHyrauviJLT",
            "title": "OMG! LaLiga Music Experience",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 33,
            "local_rank": 45,
            "phq_attendance": 148,
            "entities": [
                {
                    "entity_id": "YmFSQeZJqxpw9svHxNQucY",
                    "name": "Estadio Cívitas Metropolitano",
                    "type": "venue",
                    "formatted_address": "4 Avenida De Luis Aragonés 28022 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-16T16:00:00Z",
            "end": "2023-06-16T16:00:00Z",
            "updated": "2023-05-07T00:47:34Z",
            "first_seen": "2023-04-06T23:19:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.60166,
                40.43744
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.60166,
                        40.43744
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cg5-p5f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "9829045"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5R72bFyh8s6zPkPHh2",
            "title": "OMG! by La Liga",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 56,
            "phq_attendance": 545,
            "entities": [
                {
                    "entity_id": "YmFSQeZJqxpw9svHxNQucY",
                    "name": "Estadio Cívitas Metropolitano",
                    "type": "venue",
                    "formatted_address": "4 Avenida De Luis Aragonés 28022 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-16T21:59:59Z",
            "updated": "2023-05-07T00:50:09Z",
            "first_seen": "2023-04-25T23:32:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.60166,
                40.43744
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.60166,
                        40.43744
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cg5-p5f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "9829045"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5vUYJ2QpFEeYXhzs5E",
            "title": "Azkena Rock Festival at Azkena Rock Festival Grounds",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 34,
            "local_rank": 50,
            "phq_attendance": 150,
            "entities": [
                {
                    "entity_id": "3LTuYczXExcMnQn7WbyCmx",
                    "name": "Azkena Rock Festival",
                    "type": "venue",
                    "formatted_address": "Vitoria-Gasteiz Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-16T21:59:59Z",
            "updated": "2023-05-04T16:11:35Z",
            "first_seen": "2023-04-17T23:35:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6851371,
                42.8340309
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6851371,
                        42.8340309
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-wbq-jvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129693"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7eqxiSZqNvKRQAsRrr",
            "title": "Listen to the Blues",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 79,
            "phq_attendance": 2383,
            "entities": [
                {
                    "entity_id": "33UhcWUeTJkd5cNiNTzXKa9",
                    "name": "Marbella Arena",
                    "type": "venue",
                    "formatted_address": "29660 Marbella Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-04-18T23:28:16Z",
            "first_seen": "2023-04-18T23:23:43Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.96106,
                36.50111
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.96106,
                        36.50111
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-n3n-x3q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "6691748"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7mgd7basPfrfCkuSFy",
            "title": "Renacer Metal Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 51,
            "phq_attendance": 300,
            "entities": [
                {
                    "entity_id": "CyCYTpFXGDyMXpKhFNisC7",
                    "name": "Revi Live",
                    "type": "venue",
                    "formatted_address": "Calle los Cavilas 28052 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-14T23:44:18Z",
            "first_seen": "2023-05-14T23:43:52Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.58963,
                40.40077
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.58963,
                        40.40077
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cg2-swk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359275",
                    "3124408"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9VJRwrMkWcqyhP35fC",
            "title": "Fiesta Maracuyeah! de AFROBEAT en Granada",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 72,
            "phq_attendance": 700,
            "entities": [
                {
                    "entity_id": "MkVFSbNXFykJQbUrzWPiKa",
                    "name": "Sala El Tren",
                    "type": "venue",
                    "formatted_address": "Carretera Antigua De Malaga 136 Granada Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-04-13T23:34:18Z",
            "first_seen": "2023-04-13T23:31:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.8994,
                36.79309
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.8994,
                        36.79309
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-xd7-xt9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359458",
                    "2517618"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ACF8CgFnUqvbbaFnp9",
            "title": "ENDLESS Off Week/Ender Friday & Saturday",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 53,
            "phq_attendance": 804,
            "entities": [
                {
                    "entity_id": "y5HX6iTd5Hcyq9ymka2DZM",
                    "name": "Draco Disco Club",
                    "type": "venue",
                    "formatted_address": "Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-04-28T22:46:08Z",
            "first_seen": "2023-04-18T22:41:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1610997,
                41.4091129
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1610997,
                        41.4091129
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5j-3t9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BnNUuTcfs5ZL7YSrBB",
            "title": "Cabró Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 72,
            "phq_attendance": 2118,
            "entities": [
                {
                    "entity_id": "AYDLzx7BC2pcdrS3mszSBM",
                    "name": "Cabró Rock",
                    "type": "venue",
                    "formatted_address": "08500 Vic Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-03-15T05:23:09Z",
            "first_seen": "2023-03-15T03:13:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.25443,
                41.93044
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.25443,
                        41.93044
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-yc3-6rk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356315",
                    "3106050"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CLdJTbXpGdie6yjiTg",
            "title": "Festival Fep",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 45,
            "phq_attendance": 174,
            "entities": [
                {
                    "entity_id": "362ftpHnP9fH8KPaBKigvPV",
                    "name": "Sala Vesta",
                    "type": "venue",
                    "formatted_address": "C. del Barquillo, 29 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-04-29T23:33:58Z",
            "first_seen": "2023-04-29T23:33:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6956384,
                40.4229791
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6956384,
                        40.4229791
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-kzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DgvjNXjEYAn6hbkAAe",
            "title": "Festival de los Sentidos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 75,
            "phq_attendance": 1394,
            "entities": [
                {
                    "entity_id": "GQtnxN7dE9BwpNYuhvA2cR",
                    "name": "Festival de los Sentidos",
                    "type": "venue",
                    "formatted_address": "La Roda 02630 La Roda Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-18T21:59:59Z",
            "updated": "2023-04-21T21:24:56Z",
            "first_seen": "2022-11-22T21:01:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.15691,
                39.2071
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.15691,
                        39.2071
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-fjp-mff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355360",
                    "2515555"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355295",
                    "2522258"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FXBSPod5xAtvSpugB2",
            "title": "Offweek",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-05-08T09:11:32Z",
            "first_seen": "2023-02-20T20:53:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GwiwvShtyQNmhyd6U8",
            "title": "BOOMBASTIC MADRID",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 65,
            "phq_attendance": 528,
            "entities": [
                {
                    "entity_id": "pU7zpGUsnmcUWbyhfRbyr6",
                    "name": "Auditorio Miguel Ríos",
                    "type": "venue",
                    "formatted_address": "s/n Paseo Alicia Alonso 28521 Rivas-Vaciamadrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-16T21:59:59Z",
            "updated": "2023-04-10T23:09:48Z",
            "first_seen": "2023-04-10T23:09:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5129742,
                40.3458047
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5129742,
                        40.3458047
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cdc-gzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359344",
                    "3107112"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HikfEAGQQQ9MoKnnyp",
            "title": "Festival VinToro",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 78,
            "phq_attendance": 1036,
            "entities": [
                {
                    "entity_id": "RyNtmNpUP9NWNm9n7UYwjM",
                    "name": "Estadio Polideportivo Municipal de Toro",
                    "type": "venue",
                    "formatted_address": "Camino Ruales 2 Zamora Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-03-15T06:17:11Z",
            "first_seen": "2023-03-15T03:18:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.3846918,
                41.5306686
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.3846918,
                        41.5306686
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-pvs-2ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3104341",
                    "6362642",
                    "3107886"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3104341",
                    "6362695",
                    "3104342"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "JcAWtFXT8oc8RtHP3W",
            "title": "Monkey Week Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 75,
            "phq_attendance": 1374,
            "entities": [
                {
                    "entity_id": "6KyzUNK5BLsx8fwB2eYfsS",
                    "name": "Monkey Week",
                    "type": "venue",
                    "formatted_address": "11500 El Puerto de Santa María Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-15T22:00:00Z",
            "end": "2023-06-17T21:59:59Z",
            "updated": "2023-03-29T23:45:02Z",
            "first_seen": "2023-03-29T23:44:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.2329094,
                36.600595
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.2329094,
                        36.600595
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8nk-qpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356942",
                    "2518207"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "uSZjMgn4jEBJvdKDYs",
            "title": "Maroon 5 - UK + EUROPE",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 74,
            "local_rank": 83,
            "phq_attendance": 15500,
            "entities": [
                {
                    "entity_id": "SE62A35WTFdK95EAnaASyu",
                    "name": "WiZink Centre Madrid",
                    "type": "venue",
                    "formatted_address": "S/N Avenida Felipe II 28009 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-15T19:00:00Z",
            "end": "2023-06-15T19:00:00Z",
            "updated": "2023-02-06T19:01:28Z",
            "first_seen": "2022-11-15T20:42:40Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6718198728522182,
                40.423887356258646
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.670974,
                        40.4245238

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FPDJ83YLSFWjUwwGmS",
            "title": "Azkena Rock Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 51,
            "phq_attendance": 153,
            "entities": [
                {
                    "entity_id": "Xqn6PZTb9S6w799i9hka8M",
                    "name": "Azkena",
                    "type": "venue",
                    "formatted_address": "Coronación, 4 Vitoria-Gasteiz Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-15T15:30:00Z",
            "end": "2023-06-15T15:30:00Z",
            "updated": "2023-05-14T05:33:31Z",
            "first_seen": "2023-03-15T03:14:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6765221,
                42.852251
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6765221,
                        42.852251
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-wbm-vs5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7sKikygS2oWXtv5GFw",
            "title": "Sónar Festival",
            "description": "Sonar Music Festival in Barcelona has grown from strength to strength and is now established as one of Europe's most well-known music festivals. Each year, for one weekend in June, Barcelona is flooded by thousands of music fans from all over Europe. You can usually tell them by their oversized sunglasses, on-trend flip-flops, and urgent march towards the festival site.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival"
            ],
            "rank": 92,
            "local_rank": 98,
            "phq_attendance": 122000,
            "entities": [
                {
                    "entity_id": "32VdSnLfF5iv75XK257cx3x",
                    "name": "Fira de Barcelona - Montjuïc",
                    "type": "venue",
                    "formatted_address": "Fira Barcelona Montjuïc, s/n Avinguda de la Reina Maria Cristina 08004 Barcelona Spain"
                },
                {
                    "entity_id": "4d2i92FmrTDLBFQJQHcbBZ",
                    "name": "Sónar Festival",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "recurring"
                    ]
                }
            ],
            "duration": 201600,
            "start": "2023-06-15T10:00:00Z",
            "end": "2023-06-17T18:00:00Z",
            "updated": "2023-02-06T19:01:33Z",
            "first_seen": "2022-07-03T03:02:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1524129201909274,
                41.37362340080328
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1541011,
                        41.3748697

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6TVspXfpY2nmX3JCAu",
            "title": "Fiesta Maracuyeah! de AFROBEAT en Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 53,
            "phq_attendance": 478,
            "entities": [
                {
                    "entity_id": "YukdSBN9Nud4wCWR4AyFHH",
                    "name": "Chango",
                    "type": "venue",
                    "formatted_address": "42 Calle Covarrubias 28010 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-14T22:00:00Z",
            "end": "2023-06-16T21:59:59Z",
            "updated": "2023-04-23T23:50:02Z",
            "first_seen": "2023-04-13T23:39:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6981995,
                40.4317229
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6981995,
                        40.4317229
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwr-rtv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BUXNyLERgyKGoesvxU",
            "title": "Fiesta Maracuyeah! de AFROBEAT en Barcelona",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 60,
            "phq_attendance": 1608,
            "entities": [
                {
                    "entity_id": "fWshK59vQyheeAwRjnmd5Z",
                    "name": "Sala Apolo",
                    "type": "venue",
                    "formatted_address": "113 Carrer Nou de la Rambla 08004 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-13T22:00:00Z",
            "end": "2023-06-14T21:59:59Z",
            "updated": "2023-04-13T22:43:54Z",
            "first_seen": "2023-04-13T22:43:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1695662,
                41.3743992
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1695662,
                        41.3743992
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w72-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AKgikzXkPUvgNmVQdM",
            "title": "Festival Embotona't",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 64,
            "local_rank": 70,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "sqyhaDCLh5BFxfwRfkiB44",
                    "name": "Poble Espanyol",
                    "type": "venue",
                    "formatted_address": "13 Avinguda de Francesc Ferrer i Guàrdia 08038 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-10T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-05-11T23:35:34Z",
            "first_seen": "2023-05-11T23:34:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1482731999999487,
                41.3688085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1482731999999487,
                        41.3688085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-94v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CCqWtLeyJZTHTwUwX5",
            "title": "Deleste en L´Almodí: Senior i El Cor Brutal (duo acústic)",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 55,
            "phq_attendance": 664,
            "entities": [
                {
                    "entity_id": "RXDBRRVF3gcfwMyNz8Ts9C",
                    "name": "Almudin de Valencia",
                    "type": "venue",
                    "formatted_address": "San Luis Beltrán, 1; 46003 València Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-10T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-05-12T00:31:29Z",
            "first_seen": "2023-05-11T23:55:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.37343,
                39.47642
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.37343,
                        39.47642
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bm-d7q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CfGruKMkENbGurWDCD",
            "title": "Long Weekend Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 56,
            "phq_attendance": 188,
            "entities": [
                {
                    "entity_id": "juef5Nm4SWdBH2A6c3fW4m",
                    "name": "Nuevo Recinto Ferial",
                    "type": "venue",
                    "formatted_address": "Alhama de Murcia Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-10T18:30:00Z",
            "end": "2023-06-10T18:30:00Z",
            "updated": "2023-05-05T23:54:38Z",
            "first_seen": "2023-05-05T23:41:54Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.41931,
                37.83741
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.41931,
                        37.83741
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-yyb-gc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6359513",
                    "2521992"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FjocFqwqfWN2qworCC",
            "title": "Los Hacheros",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 33,
            "local_rank": 45,
            "phq_attendance": 148,
            "entities": [
                {
                    "entity_id": "RrYVnBS43nSffbruC8Zu2R",
                    "name": "Dabadaba",
                    "type": "venue",
                    "formatted_address": "8 Mundaitz Kalea 20012 Donostia Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-10T18:30:00Z",
            "end": "2023-06-10T18:30:00Z",
            "updated": "2023-05-09T00:21:33Z",
            "first_seen": "2023-05-03T23:32:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.9763408,
                43.3155044
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.9763408,
                        43.3155044
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-y7x-8jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3120935",
                    "6358157",
                    "3110044"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7phzJ2od62U4cKHfEX",
            "title": "Nexus Festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 82,
            "phq_attendance": 4000,
            "entities": [
                {
                    "entity_id": "39uXxJLkNhhAbLnaqEhBq7j",
                    "name": "Fabrik",
                    "type": "venue",
                    "formatted_address": "82 Avenida de la Industria 28970 Humanes de Madrid Spain"
                }
            ],
            "duration": 43200,
            "start": "2023-06-10T16:00:00Z",
            "end": "2023-06-11T04:00:00Z",
            "updated": "2023-03-20T01:52:09Z",
            "first_seen": "2023-03-20T01:47:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.8404861,
                40.2654556
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.8404861,
                        40.2654556
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-76q-v2k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359313",
                    "3116191"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GrjM6zKj3SSBsWHKw7",
            "title": "FIRMA DE LIBROS. TXANO Y ÓSCAR. BLA FERIA DEL LIBRO DE BILBAO",
            "description": "Los autores de la colección infantil Las aventuras de Txano y Óscar estarán firmando libros en el stand de Sorgin.",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 36,
            "local_rank": 43,
            "phq_attendance": 201,
            "entities": [],
            "duration": 12600,
            "start": "2023-06-10T15:00:00Z",
            "end": "2023-06-10T18:30:00Z",
            "updated": "2023-05-11T18:57:17Z",
            "first_seen": "2023-05-11T18:56:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.9242578,
                43.2641352
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.9242578,
                        43.2641352
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vbs-ghq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7Pa842vG9m2z3BhzHw",
            "title": "Sonidos Liquidos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 86,
            "phq_attendance": 2431,
            "entities": [
                {
                    "entity_id": "wG6Fk8NDxu9kZQBJZAkeGF",
                    "name": "Bodega La Geria",
                    "type": "venue",
                    "formatted_address": "Carretera La Geria Km 19 Yaiza Lanzarote Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-09T23:00:00Z",
            "end": "2023-06-11T22:59:59Z",
            "updated": "2023-05-09T11:35:55Z",
            "first_seen": "2023-03-15T03:15:13Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -13.6478486,
                28.9610015
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -13.6478486,
                        28.9610015
                    ],
                    "type": "Point"
                },
                "placekey": "@6yk-qp4-syv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360198",
                    "2510485"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "44y8aLaWAU8WtLJEWz",
            "title": "Festimasmumetalhc",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 72,
            "phq_attendance": 1603,
            "entities": [
                {
                    "entity_id": "BiRYycVeEkwCx2ivmAYia6",
                    "name": "Sala Más Música",
                    "type": "venue",
                    "formatted_address": "05004 Ávila Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-04-20T23:28:37Z",
            "first_seen": "2023-04-20T23:28:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.6812086,
                40.656685
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.6812086,
                        40.656685
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-p3p-49z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3129138",
                    "6355632",
                    "3129136"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8EKpYaWVCZ5p2iFFQb",
            "title": "Pompa Open Air",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 66,
            "phq_attendance": 2100,
            "entities": [
                {
                    "entity_id": "rYV3ZGBDC4hx4aZKw8j9tS",
                    "name": "Parque Enrique Tierno Galván",
                    "type": "venue",
                    "formatted_address": "Av. del Planetario, s/n 28045 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-04-18T23:28:24Z",
            "first_seen": "2023-04-18T23:22:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.68605,
                40.39098
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.68605,
                        40.39098
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgc-kcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9ppuLXGoDWjGJbrbPG",
            "title": "NACIDOS PARA DOMINAR",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 47,
            "phq_attendance": 433,
            "entities": [
                {
                    "entity_id": "EU7TdxGJELqNPt6MNdEFTt",
                    "name": "La Deskomunal",
                    "type": "venue",
                    "formatted_address": "Tenor Massini, 5 08028 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-05-11T23:14:27Z",
            "first_seen": "2023-05-11T23:08:21Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.13233,
                41.37584
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.13233,
                        41.37584
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5m-33q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DpVZVCpuTMUNoYJhS6",
            "title": "Summer blast Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 50,
            "phq_attendance": 403,
            "entities": [
                {
                    "entity_id": "jhYppiismmQKssymmpWMbf",
                    "name": "Estraperlo Club del Ritme",
                    "type": "venue",
                    "formatted_address": "9 C/ Isidre Nonell 08911 Badalona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-03-18T23:51:25Z",
            "first_seen": "2023-03-18T23:51:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2612511,
                41.4588004
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2612511,
                        41.4588004
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wcq-mff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356051",
                    "3129028"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FFJkcXj6xtGTEh2ax3",
            "title": "Z! Live Rock Fest at Auditorio Municipal Ruta De La Plata",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 52,
            "local_rank": 67,
            "phq_attendance": 1253,
            "entities": [
                {
                    "entity_id": "gGWJEx4BLW5tmTiUE9Mq2V",
                    "name": "Auditorio Municipal Ruta De La Plata",
                    "type": "venue",
                    "formatted_address": "49004 Zamora Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-04-18T00:36:56Z",
            "first_seen": "2023-04-17T23:55:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.7467882066,
                41.5034690316
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.7467882066,
                        41.5034690316
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-s5m-pd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3104341",
                    "6362695",
                    "3104342"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FRNm9UB3ULMFqVzBDA",
            "title": "25 veces Gracias",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 66,
            "phq_attendance": 847,
            "entities": [
                {
                    "entity_id": "A95CVJzyznT9PWetmzPgDd",
                    "name": "UBU A. Hospital Militar",
                    "type": "venue",
                    "formatted_address": "Bernardino Obregón 24 09001 Burgos Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-09T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-03-15T07:07:41Z",
            "first_seen": "2023-03-15T03:10:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7213,
                42.3386
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7213,
                        42.3386
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-gzg-2x5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3127460",
                    "6356377",
                    "3127461"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "93uwqPk2kmazC8tABf",
            "title": "Sabatic Fest 80,S",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 53,
            "phq_attendance": 239,
            "entities": [
                {
                    "entity_id": "sWXsJswgmEZUUN9tWDh9Um",
                    "name": "Autocine Malaga Cesurfp",
                    "type": "venue",
                    "formatted_address": "29004 Málaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-09T20:00:00Z",
            "end": "2023-06-09T20:00:00Z",
            "updated": "2023-05-06T12:43:32Z",
            "first_seen": "2023-05-06T02:56:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.47483,
                36.68195
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.47483,
                        36.68195
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnr-bc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6544402"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5VR8H2gZzmbHUk4WGb",
            "title": "SDL Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 37,
            "local_rank": 51,
            "phq_attendance": 228,
            "entities": [
                {
                    "entity_id": "svGK5Frzp4ZA76NdAUiX6u",
                    "name": "Baluard De Sant Pere",
                    "type": "venue",
                    "formatted_address": "9 Plaça del Sol Ibiza Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-09T19:00:00Z",
            "end": "2023-06-09T19:00:00Z",
            "updated": "2023-05-06T00:47:31Z",
            "first_seen": "2023-05-05T23:33:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.43363,
                38.90798
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.43363,
                        38.90798
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mwp-nh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356034",
                    "2516479"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9xMqXLj2C2vuU3yoYU",
            "title": "Ekinez Jaialdia",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 83,
            "phq_attendance": 2912,
            "entities": [
                {
                    "entity_id": "9GtQqx63DyqSv6YGBrJqqD",
                    "name": "Polideportivo Labegaraieta",
                    "type": "venue",
                    "formatted_address": "Bergara Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-08T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-04-24T23:24:34Z",
            "first_seen": "2023-04-24T23:24:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.421405,
                43.105962
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.421405,
                        43.105962
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-rz8-xh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3120935",
                    "6358162",
                    "3106090"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CwKCaFVpPWZrXkHsJw",
            "title": "Festival de les Arts",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 69,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "XJhaMjZkCTd3axkRLFmgwv",
                    "name": "Ciudad de las Artes y las Ciencias",
                    "type": "venue",
                    "formatted_address": "7 Avinguda del Professor López Piñero 46013 València Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-08T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2022-12-26T21:11:16Z",
            "first_seen": "2022-09-27T21:01:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3504904,
                39.4548751
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3504904,
                        39.4548751
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bd-kfz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2517532"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DGbFUggcqwiVHYr6dW",
            "title": "Observa",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 53,
            "phq_attendance": 423,
            "entities": [
                {
                    "entity_id": "6uGYGAiSL79qTprqu3TjUV",
                    "name": "Amfiteatre Del Parc Catalunya",
                    "type": "venue",
                    "formatted_address": "104 Carrer Prat de la Riba 08206 Sabadell Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-08T22:00:00Z",
            "end": "2023-06-09T21:59:59Z",
            "updated": "2023-03-15T08:25:18Z",
            "first_seen": "2023-03-15T03:12:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.09255,
                41.55035
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.09255,
                        41.55035
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wqf-4qf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356211",
                    "3111199"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FdfHuAc3sbXvbDPjMZ",
            "title": "Z! Live Rock Fest at Auditorio Municipal Ruta De La Plata",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 52,
            "local_rank": 67,
            "phq_attendance": 1253,
            "entities": [
                {
                    "entity_id": "gGWJEx4BLW5tmTiUE9Mq2V",
                    "name": "Auditorio Municipal Ruta De La Plata",
                    "type": "venue",
                    "formatted_address": "49004 Zamora Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-08T22:00:00Z",
            "end": "2023-06-09T21:59:59Z",
            "updated": "2023-04-18T03:42:22Z",
            "first_seen": "2023-04-18T03:19:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.7467882066,
                41.5034690316
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.7467882066,
                        41.5034690316
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-s5m-pd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3104341",
                    "6362695",
                    "3104342"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5pV9DK4a4UeRBZq2UC",
            "title": "Z! Live Rock Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 71,
            "phq_attendance": 2143,
            "entities": [
                {
                    "entity_id": "MBTfxyhTpPkysachh999CV",
                    "name": "Z! Live Rock Fest",
                    "type": "venue",
                    "formatted_address": "Zamora Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-07T22:00:00Z",
            "end": "2023-06-10T21:59:59Z",
            "updated": "2023-05-13T23:29:08Z",
            "first_seen": "2023-03-15T03:18:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.7186399,
                41.5199435
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.7186399,
                        41.5199435
                    ],
                    "type": "Point"
                },
                "placekey": "@7dq-s5b-3bk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3104341",
                    "6362695",
                    "3104342"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9vnHdyeEe952A6Kf4T",
            "title": "Palencia Sonora",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 76,
            "phq_attendance": 3153,
            "entities": [
                {
                    "entity_id": "hEzYcft67cr6v6QgNGjV7v",
                    "name": "Festival Palencia Sonora",
                    "type": "venue",
                    "formatted_address": "Sotillo de los Canónigos Palencia Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-06-07T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-03-15T05:15:14Z",
            "first_seen": "2023-03-15T03:13:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.54165,
                42.0106
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.54165,
                        42.0106
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-zdc-wkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3114530",
                    "6360072",
                    "3114531"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AHQpYMnuLfBAzFeaCG",
            "title": "SDL Ibiza Festival (Sueños de Libertad",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 66,
            "phq_attendance": 753,
            "entities": [
                {
                    "entity_id": "5yU8hHLTgUb3tY66J3wFsi",
                    "name": "Baluarte De Santa Llucia Dalt Vila",
                    "type": "venue",
                    "formatted_address": "Ibiza Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-07T22:00:00Z",
            "end": "2023-06-08T21:59:59Z",
            "updated": "2023-05-08T01:57:01Z",
            "first_seen": "2023-05-07T23:31:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.4144827,
                38.9269573
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.4144827,
                        38.9269573
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mmg-vj9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356038",
                    "6692596"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HfNG25EeKwPsYGrsPX",
            "title": "Monocicle",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 70,
            "phq_attendance": 1207,
            "entities": [
                {
                    "entity_id": "366bBaNNRz83J5LVNBjbTZT",
                    "name": "Monocicle",
                    "type": "venue",
                    "formatted_address": "Carrer Major 13 08810 Sant Pere de Ribes Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-06-07T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-04-26T22:59:46Z",
            "first_seen": "2023-04-26T22:56:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.7704328,
                41.26174
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.7704328,
                        41.26174
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-vks-wkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356289",
                    "3110143"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HspaKTSgcWjLQdfg5m",
            "parent_event": {
                "parent_event_id": "CcX3Y8P8HSLzPPXv7d"
            },
            "title": "Primavera Sound 2023 Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 57,
            "local_rank": 79,
            "phq_attendance": 2115,
            "entities": [],
            "duration": 345599,
            "start": "2023-06-07T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-04-19T04:26:06Z",
            "first_seen": "2022-07-17T03:03:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.4479063,
                40.3064463
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.4479063,
                        40.3064463
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-ct6-3dv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359240",
                    "3129636"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "tuQU5mmc9sQcDBpGTf",
            "title": "Web3 Music Summit",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 44,
            "phq_attendance": 156,
            "entities": [
                {
                    "entity_id": "KZv4Fxc7bRFPAMY4AeVBSi",
                    "name": "spazio culturale Serrería Belga",
                    "type": "venue",
                    "formatted_address": "Calle Alameda número 15 28014 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-06-07T13:00:00Z",
            "end": "2023-06-07T13:00:00Z",
            "updated": "2023-03-25T02:14:38Z",
            "first_seen": "2023-03-25T01:57:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.69358,
                40.41052
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.69358,
                        40.41052
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-xkf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5okdFETGkU2cAkoSs3",
            "title": "Ls40 Pop Toledo Corpus",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 70,
            "local_rank": 91,
            "phq_attendance": 10150,
            "entities": [
                {
                    "entity_id": "kwV6rikqJLbHw7fGVc8pDG",
                    "name": "Paseo de la Vega",
                    "type": "venue",
                    "formatted_address": "Toledo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-06T22:00:00Z",
            "end": "2023-06-07T21:59:59Z",
            "updated": "2023-05-12T00:45:43Z",
            "first_seen": "2023-05-12T00:31:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.0250288,
                39.8639553
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.0250288,
                        39.8639553
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-6s8-5pv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2510407",
                    "6361828",
                    "2510409"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GbQY5KqFrykuGAMbUi",
            "title": "The Ultimate Getaway",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 64,
            "local_rank": 86,
            "phq_attendance": 5000,
            "entities": [
                {
                    "entity_id": "SKeEXDymzrGq6HsFfEemKe",
                    "name": "The Ultimate Getaway",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group"
                    ]
                }
            ],
            "duration": 518399,
            "start": "2023-06-06T22:00:00Z",
            "end": "2023-06-12T21:59:59Z",
            "updated": "2023-05-08T20:59:20Z",
            "first_seen": "2022-05-19T00:26:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.539682,
                39.529666
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.539682,
                        39.529666
                    ],
                    "type": "Point"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356031",
                    "6355010"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CcX3Y8P8HSLzPPXv7d",
            "title": "Primavera Sound",
            "description": "Primavera Sound 2023 will have two locations, Barcelona and Madrid. Both cities will take the reins in two consecutive weekends with incredible lineups. Coherent, bold and full of surprises but connected in every way with the spirit of what has made Primavera Sound what it is today.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival",
                "music"
            ],
            "rank": 97,
            "local_rank": 100,
            "phq_attendance": 220000,
            "entities": [
                {
                    "entity_id": "tJDRRqRK6dyp9YdtKK9gLR",
                    "name": "Ciudad del Rock",
                    "type": "venue",
                    "formatted_address": "28500 Arganda del Rey Spain"
                }
            ],
            "duration": 604799,
            "start": "2023-06-04T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-04-19T04:18:41Z",
            "first_seen": "2023-01-24T20:48:17Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.447901209408342,
                40.30644949919881
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.4485978,
                        40.3063877

                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359240",
                    "3129636"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DSkBFQU5Ped36pax98",
            "title": "Sabadell Urban Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 54,
            "phq_attendance": 378,
            "entities": [
                {
                    "entity_id": "tqLy8XnnXbgaswai5uB8Dd",
                    "name": "VADE música",
                    "type": "venue",
                    "formatted_address": "Plaça Laietana, 48 08203 Sabadell Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-03T22:00:00Z",
            "end": "2023-06-04T21:59:59Z",
            "updated": "2023-04-29T23:52:03Z",
            "first_seen": "2023-04-29T23:51:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.11876,
                41.54315
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.11876,
                        41.54315
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wv7-pjv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356211",
                    "3111199"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3TC8k82R9CgqF3wRnQ",
            "title": "Youngblood Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 48,
            "phq_attendance": 398,
            "entities": [
                {
                    "entity_id": "qU7eDSHgkTnrsLqtsRZemD",
                    "name": "Marquesina Via Júlia",
                    "type": "venue",
                    "formatted_address": "Vía Júlia 144 08016 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-05-14T02:37:46Z",
            "first_seen": "2023-05-03T22:50:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.17909,
                41.4442
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.17909,
                        41.4442
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w7m-kvf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356154",
                    "3109981"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7s9H55GHQXZVu79fuw",
            "title": "Brunch Electronik Madrid x Zamna Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 54,
            "phq_attendance": 495,
            "entities": [
                {
                    "entity_id": "ppjhXU59iCLT7eTPxcVafF",
                    "name": "Parque Lineal Del Manzanares",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-04-11T23:50:46Z",
            "first_seen": "2023-04-11T23:31:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6865892,
                40.3775309
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6865892,
                        40.3775309
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgc-75z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7sAVY3STmBVYmezSLR",
            "title": "P.O.L Castillo de Peñafiel",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 76,
            "phq_attendance": 909,
            "entities": [
                {
                    "entity_id": "WeKtjK2raF9dVxCaQpbPFa",
                    "name": "Castillo de Peñafiel",
                    "type": "venue",
                    "formatted_address": "Valladolid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-05-03T22:20:51Z",
            "first_seen": "2023-04-13T23:25:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.1143572,
                41.5966344
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.1143572,
                        41.5966344
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-3zb-d7q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3106671",
                    "6362239",
                    "3113957"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "99q4MyK4N9srUtv75b",
            "title": "Rotten Dance @ Rachdingue",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 83,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "DEH8XDUAsbVGyrNAwYDZvM",
                    "name": "Rachdingue",
                    "type": "venue",
                    "formatted_address": "Figueres Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-04T21:59:59Z",
            "updated": "2023-04-16T23:21:14Z",
            "first_seen": "2023-04-16T23:21:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.100934,
                42.323428
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.100934,
                        42.323428
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-6yb-w8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534170",
                    "3105917"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ARKGCqaZj64NeyhBVC",
            "title": "Primavera Sound at Parc del Forum",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-05-15T03:29:12Z",
            "first_seen": "2023-04-18T00:51:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AwLLzaAUQYrzozcoUL",
            "title": "Merendica Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 67,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "qfrBCErrugrjbTxvqKDvFw",
                    "name": "Industrial Copera",
                    "type": "venue",
                    "formatted_address": "Parcela 13 Calle Desmond Tutu 18640 La Zubia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-04-11T00:41:58Z",
            "first_seen": "2023-04-10T23:59:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.583976,
                37.130483
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.583976,
                        37.130483
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-vfq-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357669",
                    "2520592"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GD32DVAPdhUrEnQtef",
            "title": "Lovermut Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 73,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "57rNrFrz6ULbgqXV6rg4gR",
                    "name": "Temps de Terra",
                    "type": "venue",
                    "formatted_address": "Vall de Cabiscol 43870 Amposta Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-03-06T21:16:02Z",
            "first_seen": "2023-03-06T21:15:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.58017,
                40.7068
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.58017,
                        40.7068
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-32n-hkf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361257",
                    "3130131"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "q9fWYgk3VcAwUzqG7p",
            "title": "Blockparty Arganzuela",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 52,
            "phq_attendance": 526,
            "entities": [
                {
                    "entity_id": "xp8FFsXAnkxacjDnhqppcq",
                    "name": "Explanada Multiusos Madrid Río",
                    "type": "venue",
                    "formatted_address": "Paseo de la Chopera, 6, Arganzuela. 28045 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-02T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-04-20T23:39:25Z",
            "first_seen": "2023-04-20T23:38:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7000853,
                40.3945088
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7000853,
                        40.3945088
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cgj-qmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Gjns89jSY7WM2LpD48",
            "title": "Mercadillo del Gato",
            "description": "Pop-up donde podrás encontrar las últimas novedades en moda, joyería, complementos, artesanía, arte y ¡mucho más!",
            "category": "festivals",
            "labels": [
                "fashion",
                "festival"
            ],
            "rank": 46,
            "local_rank": 56,
            "phq_attendance": 629,
            "entities": [],
            "duration": 813600,
            "start": "2023-06-02T09:00:00Z",
            "end": "2023-06-11T19:00:00Z",
            "updated": "2023-05-07T10:34:24Z",
            "first_seen": "2023-02-06T05:58:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.695585,
                40.4154231
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.695585,
                        40.4154231
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-yvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3M7yw65j5JNWPbNiFN",
            "title": "Primavera Sound at Parc del Forum",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-06-01T22:00:00Z",
            "end": "2023-06-02T21:59:59Z",
            "updated": "2023-05-15T03:39:57Z",
            "first_seen": "2023-04-17T19:25:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5yfJywY8NZVGMiKPWZ",
            "title": "PRIMERA FILA FEST MARBELLA",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 77,
            "phq_attendance": 1538,
            "entities": [
                {
                    "entity_id": "NEntFriGiQxPNVMB7LjQBd",
                    "name": "Premiere Club",
                    "type": "venue",
                    "formatted_address": "Los Olivos, 2 29660 Marbella Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-01T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-04-27T23:37:10Z",
            "first_seen": "2023-04-17T23:15:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.95408,
                36.50743
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.95408,
                        36.50743
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-n3p-tvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "6691748"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8sdX4Az4funFAzrBEG",
            "title": "Surforama Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 56,
            "phq_attendance": 828,
            "entities": [
                {
                    "entity_id": "dvggwrH5WipcmXYhrCFpt5",
                    "name": "Sala Repvblicca 2",
                    "type": "venue",
                    "formatted_address": "46920 Mislata Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-06-01T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-05-12T22:29:05Z",
            "first_seen": "2023-04-20T23:29:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.41959,
                39.47792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.41959,
                        39.47792
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-82c-kzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362034",
                    "2513811"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BzZviARQNauYTFURmQ",
            "title": "Alcalá Suena",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 64,
            "phq_attendance": 1099,
            "entities": [
                {
                    "entity_id": "Q59uqcyMXX2LaiFmEPCYBd",
                    "name": "Alcalá Suena",
                    "type": "venue",
                    "formatted_address": "Alcalá de Henares Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-06-01T22:00:00Z",
            "end": "2023-06-04T21:59:59Z",
            "updated": "2023-05-13T07:02:21Z",
            "first_seen": "2023-04-13T23:29:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.3660007,
                40.4860202
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.3660007,
                        40.4860202
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-xgv-5zz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359231",
                    "3130616"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CXC8MdmpNHicpkZk45",
            "title": "Primavera Sound",
            "description": "Primavera Sound 2023 will have two locations, Barcelona and Madrid. Both cities will take the reins in two consecutive weekends with incredible lineups. Coherent, bold and full of surprises but connected in every way with the spirit of what has made Primavera Sound what it is today.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival",
                "music"
            ],
            "rank": 98,
            "local_rank": 100,
            "phq_attendance": 250000,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                },
                {
                    "entity_id": "AYerSXs88XHJGeyTLgpRJh",
                    "name": "Primavera Sound",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "music",
                        "recurring"
                    ],
                    "description": "Primavera Sound is the biggest indie and alternative music festival in the world takes place between the end of May and beginning of June in Barcelona, Catalonia, Spain and Oporto, Portugal.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20150528 DURATION:P5DT1H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 345599,
            "start": "2023-05-31T22:00:00Z",
            "end": "2023-06-04T21:59:59Z",
            "updated": "2023-03-16T20:42:15Z",
            "first_seen": "2022-07-17T05:41:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.225610568195795,
                41.41048744980592
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                2.2218159,
                                41.4097232
                            ],
                            [
                                2.2260216,
                                41.4066332
                            ],
                            [
                                2.2294978,
                                41.4119118
                            ],
                            [
                                2.2272233,
                                41.4133763
                            ],
                            [
                                2.2235969,
                                41.4128774
                            ],
                            [
                                2.2218159,
                                41.4097232
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EKcG99AhdsHF25Q2Vd",
            "title": "Boombastic en Sabatic Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 60,
            "phq_attendance": 504,
            "entities": [
                {
                    "entity_id": "sWXsJswgmEZUUN9tWDh9Um",
                    "name": "Autocine Malaga Cesurfp",
                    "type": "venue",
                    "formatted_address": "29004 Málaga Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-31T22:00:00Z",
            "end": "2023-06-01T21:59:59Z",
            "updated": "2023-05-05T23:54:09Z",
            "first_seen": "2023-05-05T23:34:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.47483,
                36.68195
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.47483,
                        36.68195
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnr-bc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6544402"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HLphgJmeAoSNCzyh4b",
            "title": "Festival Millo Verde",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 77,
            "phq_attendance": 1042,
            "entities": [
                {
                    "entity_id": "38A5JUQyr8U2C54G8aLWXCm",
                    "name": "Área recreativa da Praia de Cesantes",
                    "type": "venue",
                    "formatted_address": "Paseo da Praia, 38, 36693, Pontevedra, España Pontevedra Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-31T22:00:00Z",
            "end": "2023-06-03T21:59:59Z",
            "updated": "2023-05-02T00:53:12Z",
            "first_seen": "2023-03-15T03:13:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.61994,
                42.30946
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.61994,
                        42.30946
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-s9x-fxq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "3112153",
                    "8224303"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AozX4PJRN7Pkm4eqDf",
            "title": "Primavera Pro Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 54,
            "phq_attendance": 1095,
            "entities": [
                {
                    "entity_id": "zWxA6zkawpsLbvaNh5uiyu",
                    "name": "Centre de Cultura Contemporània de Barcelona (CCCB)",
                    "type": "venue",
                    "formatted_address": "5 Carrer de Montalegre 08001 Barcelona Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-30T22:00:00Z",
            "end": "2023-06-02T21:59:59Z",
            "updated": "2023-05-11T22:59:05Z",
            "first_seen": "2023-05-11T22:58:39Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.166775,
                41.383786
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.166775,
                        41.383786
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5n-7t9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Dedn8y4xM5Gp7deERn",
            "title": "primavera in the city",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 51,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "etBSJEgHSXLp5pJHhcBnCk",
                    "name": "Parc del Fòrum",
                    "type": "venue",
                    "formatted_address": "Parc Del Forum, 1 Rambla de Prim 08019 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-30T22:00:00Z",
            "end": "2023-05-31T21:59:59Z",
            "updated": "2023-05-15T04:12:07Z",
            "first_seen": "2022-11-29T20:42:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2186155,
                41.4114531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2186155,
                        41.4114531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-k9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Dn9p4RzrHoRrW2QLeR",
            "title": "Festa Brasileña Quintal D'elas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 40,
            "phq_attendance": 174,
            "entities": [
                {
                    "entity_id": "S4asPFLKNeR2BhY4HXDQmM",
                    "name": "Diobar",
                    "type": "venue",
                    "formatted_address": "27 Avinguda del Marquès de l'Argentera 08003 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-28T18:00:00Z",
            "end": "2023-05-28T18:00:00Z",
            "updated": "2023-05-03T23:30:06Z",
            "first_seen": "2023-05-03T23:00:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.185461,
                41.385504
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.185461,
                        41.385504
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w67-yd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "594bhiG7eQ4vk353xY",
            "title": "Javi Cantero en KANNASUR Sevilla",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 58,
            "phq_attendance": 685,
            "entities": [
                {
                    "entity_id": "qrXLZHfhSmzBLYUM4tc3s2",
                    "name": "Pabellón de la Navegación",
                    "type": "venue",
                    "formatted_address": "Seville Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-27T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-02-03T21:26:31Z",
            "first_seen": "2023-02-03T21:23:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.0080337,
                37.3942209
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.0080337,
                        37.3942209
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rqc-t5f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6360976",
                    "2520477"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AmM3f3CenTdDQZhgiX",
            "title": "La Garriga Jazz Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 74,
            "phq_attendance": 1826,
            "entities": [
                {
                    "entity_id": "YYwfDGnXRKRvtyFhSqR4rp",
                    "name": "Teatre De La Garriga El Patronat",
                    "type": "venue",
                    "formatted_address": "Carrer Del Passeig, 42, (la Garriga) Barcelona Spain"
                }
            ],
            "duration": 691199,
            "start": "2023-05-27T22:00:00Z",
            "end": "2023-06-04T21:59:59Z",
            "updated": "2023-04-19T23:44:14Z",
            "first_seen": "2023-04-19T23:42:38Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2881309,
                41.6794382
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2881309,
                        41.6794382
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-txj-wp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "3118929",
                    "3119694"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AqbrVboUJemSa6fttx",
            "title": "WooMoon Ibiza",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 79,
            "phq_attendance": 835,
            "entities": [
                {
                    "entity_id": "JtQav55gea74RjVkMyezut",
                    "name": "Cova Santa",
                    "type": "venue",
                    "formatted_address": "km 7 PM-803 07817 Eivissa Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-27T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-05-12T23:28:01Z",
            "first_seen": "2023-05-03T23:38:32Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.3314998,
                38.8943763
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.3314998,
                        38.8943763
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mhh-nh5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356036",
                    "2511352"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5NaTWrw5pE8bLGzL2t",
            "title": "Festival Flama Málaga",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 49,
            "phq_attendance": 168,
            "entities": [
                {
                    "entity_id": "dhzyAzBWRk9yhjCACpSCrp",
                    "name": "Castillo De Gibralfaro",
                    "type": "venue",
                    "formatted_address": "Camino De Gibralfaro, 11 Malaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-27T18:00:00Z",
            "end": "2023-05-27T18:00:00Z",
            "updated": "2023-03-30T22:05:09Z",
            "first_seen": "2023-03-10T21:24:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.408009,
                36.7241531
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.408009,
                        36.7241531
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wk9-x89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DBbUqXDtHXNDz8Mun5",
            "title": "IMB Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 37,
            "local_rank": 46,
            "phq_attendance": 215,
            "entities": [
                {
                    "entity_id": "wmHBku9bfRf9RcMgeZdapf",
                    "name": "Varias Salas, Madrid",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-27T13:00:00Z",
            "end": "2023-05-27T13:00:00Z",
            "updated": "2023-04-07T00:20:24Z",
            "first_seen": "2023-04-06T23:48:42Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6826476,
                40.4230343
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6826476,
                        40.4230343
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cft-sbk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4BYP2NAJbGTVeAuJ7b",
            "title": "Metal Bats Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 54,
            "phq_attendance": 606,
            "entities": [
                {
                    "entity_id": "TUS8QuXxpybJEbZ8GnkDKZ",
                    "name": "16 TONELADAS | ROCK CLUB",
                    "type": "venue",
                    "formatted_address": "3 Carrer de Ricardo Micó 46009 València Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-01-23T21:17:16Z",
            "first_seen": "2023-01-23T21:16:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3876192,
                39.4812492
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3876192,
                        39.4812492
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-82d-xyv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2520457"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6aGnoauEa3sxxx3aU8",
            "title": "Tribu Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 74,
            "phq_attendance": 2232,
            "entities": [
                {
                    "entity_id": "cEDbFv5zJjjeryHV7sUKjm",
                    "name": "Cce \"la Parrala\"",
                    "type": "venue",
                    "formatted_address": "Las Infantas, 1 09001 Burgos Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-04-25T22:08:15Z",
            "first_seen": "2023-03-16T23:28:40Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7243083,
                42.33693
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7243083,
                        42.33693
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-gzg-4jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336900",
                    "3127460",
                    "6356377",
                    "3127461"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7J4bitZugCv3BqziLy",
            "title": "Festivalot",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 74,
            "phq_attendance": 2918,
            "entities": [
                {
                    "entity_id": "TvigJP2MZJayQs8N72QPUB",
                    "name": "Auditori de Girona",
                    "type": "venue",
                    "formatted_address": "Passeig de la Devesa, 35 17001 Girona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-04-24T23:21:30Z",
            "first_seen": "2023-04-24T23:21:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.81191,
                41.98571
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.81191,
                        41.98571
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-8wr-3dv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3109892"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ApzAqoptA4mKP57EyU",
            "title": "Entradas de día - Spring Festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 67,
            "phq_attendance": 1086,
            "entities": [
                {
                    "entity_id": "ekzQiHEvkPUxauzY9ddpJx",
                    "name": "Recinto Ferial Rabasa",
                    "type": "venue",
                    "formatted_address": "Calle Xavita s/n Alicante Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-05-12T00:04:23Z",
            "first_seen": "2023-05-12T00:01:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.5065631,
                38.3768943
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.5065631,
                        38.3768943
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcd-7kf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2519405"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Bi7VCRjVipV8Dm64H3",
            "title": "Morrison Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 51,
            "phq_attendance": 396,
            "entities": [
                {
                    "entity_id": "37xsW2ULiVnABCdHhV5DEMc",
                    "name": "Autocine",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-02-23T20:49:21Z",
            "first_seen": "2023-02-23T20:49:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6777766,
                40.4862166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6777766,
                        40.4862166
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cvv-2kz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3125239"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DotAtm3SgXXGFc2DdB",
            "title": "Romaría da Rebullón - VI ANIVERSARIO",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 26,
            "local_rank": 49,
            "phq_attendance": 60,
            "entities": [
                {
                    "entity_id": "dKGEBMLiSzgNZ4EqKUs84V",
                    "name": "Sala Rebullón",
                    "type": "venue",
                    "formatted_address": "Avda. do Rebullón 23, Tameiga Pontevedra Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-04-06T23:49:39Z",
            "first_seen": "2023-04-06T23:44:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.66505,
                42.20385
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.66505,
                        42.20385
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yr2-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360254",
                    "3108353"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EzdkSdddyktJdfs9Au",
            "title": "Heavy Balears Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 64,
            "phq_attendance": 1200,
            "entities": [
                {
                    "entity_id": "6NMpPYQDWmtazDhekgx9FU",
                    "name": "Es Gremi",
                    "type": "venue",
                    "formatted_address": "16 Carrer Gremi de Porgadors 07009 Palma Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-03-15T23:27:29Z",
            "first_seen": "2023-03-15T23:27:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.6700921,
                39.5969532
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.6700921,
                        39.5969532
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bp6-q75"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2516450"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GRWHS2vRRFYJZwffFj",
            "title": "METAL BATTLE SPAIN (FINAL )",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 49,
            "phq_attendance": 250,
            "entities": [
                {
                    "entity_id": "ZtepUavyXef4B3g5xa7ad7",
                    "name": "Sala Even",
                    "type": "venue",
                    "formatted_address": "5 Calle José Díaz 41009 Sevilla Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-26T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-04-06T23:26:52Z",
            "first_seen": "2023-04-06T23:20:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.9897733,
                37.4086489
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.9897733,
                        37.4086489
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rq8-yn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361036",
                    "2511364"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "366eZa3CVMAjWRhhJn",
            "title": "Spring Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 52,
            "local_rank": 68,
            "phq_attendance": 1200,
            "entities": [
                {
                    "entity_id": "ekzQiHEvkPUxauzY9ddpJx",
                    "name": "Recinto Ferial Rabasa",
                    "type": "venue",
                    "formatted_address": "Calle Xavita s/n Alicante Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-05-13T19:10:02Z",
            "first_seen": "2022-11-30T21:10:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.5065631,
                38.3768943
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.5065631,
                        38.3768943
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcd-7kf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2519405"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6cdQxXgd6TVwDtrgzJ",
            "title": "Oh, See! Málaga",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 72,
            "local_rank": 85,
            "phq_attendance": 11935,
            "entities": [
                {
                    "entity_id": "yD2MCg6DzQgQvZmRCRCTMx",
                    "name": "Auditorio Municipal Cortijo de Torres",
                    "type": "venue",
                    "formatted_address": "C/ Paquiro, 9 29006 Málaga Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2022-11-30T11:42:19Z",
            "first_seen": "2022-11-02T21:10:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.47315,
                36.69886
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.47315,
                        36.69886
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnr-n3q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6559644"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8Z8uT66QrBYU7sFtaV",
            "title": "En Clave de Indie Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 45,
            "phq_attendance": 174,
            "entities": [
                {
                    "entity_id": "362ftpHnP9fH8KPaBKigvPV",
                    "name": "Sala Vesta",
                    "type": "venue",
                    "formatted_address": "C. del Barquillo, 29 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-05-05T00:31:58Z",
            "first_seen": "2023-05-05T00:11:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6956384,
                40.4229791
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6956384,
                        40.4229791
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-kzz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9AUuTM4DSRRRtSYVDS",
            "title": "Guadalajara Vive Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 71,
            "phq_attendance": 1938,
            "entities": [
                {
                    "entity_id": "xfDDweT9E94gEiyJPwbK5Z",
                    "name": "Estad. Mpal. Fuente De La Niña",
                    "type": "venue",
                    "formatted_address": "19005 Guadalajara Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-27T21:59:59Z",
            "updated": "2023-05-06T15:10:10Z",
            "first_seen": "2023-03-02T21:20:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.16017,
                40.63249
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.16017,
                        40.63249
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-xmf-cef"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "3121069",
                    "6357912",
                    "3121070"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DVnHz74icw2UZ2mEbA",
            "title": "Festival Strenes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 32,
            "local_rank": 37,
            "phq_attendance": 120,
            "entities": [
                {
                    "entity_id": "8hvnjbLnQfEcufqTeENhHc",
                    "name": "BARTS",
                    "type": "venue",
                    "formatted_address": "62 Avinguda del Paraŀlel 08001 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-26T21:59:59Z",
            "updated": "2023-03-29T00:34:11Z",
            "first_seen": "2023-03-29T00:27:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1696047,
                41.3752
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1696047,
                        41.3752
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w72-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EYiRyrMnSv5TWsxuUm",
            "title": "Kannasur (International Cannabis Expo)",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 74,
            "phq_attendance": 4034,
            "entities": [
                {
                    "entity_id": "qrXLZHfhSmzBLYUM4tc3s2",
                    "name": "Pabellón de la Navegación",
                    "type": "venue",
                    "formatted_address": "Seville Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-25T22:00:00Z",
            "end": "2023-05-28T21:59:59Z",
            "updated": "2023-03-08T21:17:00Z",
            "first_seen": "2023-03-08T21:16:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.0080337,
                37.3942209
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.0080337,
                        37.3942209
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rqc-t5f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6360976",
                    "2520477"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EUWajTFQPvhk5CM2kk",
            "title": "SocaMazza 2023 - Gran Canaria ( Paypal)",
            "description": "EUROPE’S CRAZIEST SOCA HOLIDAY : THEMED PARTIES / POOL PARTIES / BOAT PARTIES / BEACH PARTIES / J’OUVERT",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival"
            ],
            "rank": 42,
            "local_rank": 70,
            "phq_attendance": 420,
            "entities": [],
            "duration": 284400,
            "start": "2023-05-25T20:00:00Z",
            "end": "2023-05-29T03:00:00Z",
            "updated": "2022-11-05T10:29:23Z",
            "first_seen": "2022-11-05T10:29:13Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.5730295,
                27.9249459
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.5730295,
                        27.9249459
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-p9j-5pv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360189",
                    "2511440"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4icHAVDBJrGkRRSpwU",
            "title": "Reve festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 33,
            "local_rank": 52,
            "phq_attendance": 137,
            "entities": [
                {
                    "entity_id": "R6bDVz9AswRmFFHuebzHsL",
                    "name": "Nao Pool Club",
                    "type": "venue",
                    "formatted_address": "Calle los Tilos Malaga Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-25T16:30:00Z",
            "end": "2023-05-25T16:30:00Z",
            "updated": "2023-04-18T23:27:25Z",
            "first_seen": "2023-04-18T23:23:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.96422,
                36.49427
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.96422,
                        36.49427
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-n3n-tqf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359474",
                    "6691748"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8nChpPpgRy2niAkEHi",
            "title": "Mayo Jazzea",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 63,
            "phq_attendance": 962,
            "entities": [
                {
                    "entity_id": "yk3EMUxKeui5yViZ64X5Fw",
                    "name": "Theatre of Bretón de los Herreros",
                    "type": "venue",
                    "formatted_address": "26001 Logroño Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-24T22:00:00Z",
            "end": "2023-05-25T21:59:59Z",
            "updated": "2023-04-20T23:30:17Z",
            "first_seen": "2023-04-10T23:24:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4485155,
                42.4650086
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4485155,
                        42.4650086
                    ],
                    "type": "Point"
                },
                "placekey": "@7dp-fpf-rp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336897",
                    "6355232",
                    "6359078",
                    "3118150"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DswczLyDbJV4tU6WWM",
            "title": "Run Festival Tossa de Mar",
            "description": "",
            "category": "sports",
            "labels": [
                "festival",
                "marathon",
                "outdoor",
                "running",
                "sport"
            ],
            "rank": 31,
            "local_rank": 59,
            "phq_attendance": 117,
            "entities": [],
            "duration": 86399,
            "start": "2023-05-20T22:00:00Z",
            "end": "2023-05-21T21:59:59Z",
            "updated": "2023-02-20T02:13:37Z",
            "first_seen": "2023-02-20T02:06:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.9303675,
                41.7224989
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.9303675,
                        41.7224989
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-5hn-t35"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534156",
                    "3107661"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Kbvjd9cKyBgUqFmeAa",
            "title": "Festa del Centre LGTBI a Paral·lel 62!",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 41,
            "phq_attendance": 188,
            "entities": [
                {
                    "entity_id": "szFWeYuNUXGYqsiez9xfVc",
                    "name": "Paral·lel 62",
                    "type": "venue",
                    "formatted_address": "Av. del Paral.lel, 62 08001 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-20T18:30:00Z",
            "end": "2023-05-20T18:30:00Z",
            "updated": "2023-05-11T23:29:25Z",
            "first_seen": "2023-05-11T23:24:17Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1695894,
                41.375199
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1695894,
                        41.375199
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w72-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "38KACA8ZFt9eGyKV7D",
            "title": "Festa del Centre LGTBI a El Molino!",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 34,
            "local_rank": 39,
            "phq_attendance": 150,
            "entities": [
                {
                    "entity_id": "3AFizti9g9pTW4UCYdYWXvr",
                    "name": "El Molino",
                    "type": "venue",
                    "formatted_address": "99 Carrer de Vila i Vilà 08004 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-20T16:00:00Z",
            "end": "2023-05-20T16:00:00Z",
            "updated": "2023-05-12T01:41:57Z",
            "first_seen": "2023-05-12T00:21:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.167033,
                41.3746143
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.167033,
                        41.3746143
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6z-w6k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Fsqw8umho893QMsYAc",
            "title": "IMB Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 60,
            "phq_attendance": 1608,
            "entities": [
                {
                    "entity_id": "fWshK59vQyheeAwRjnmd5Z",
                    "name": "Sala Apolo",
                    "type": "venue",
                    "formatted_address": "113 Carrer Nou de la Rambla 08004 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-20T13:00:00Z",
            "end": "2023-05-20T13:00:00Z",
            "updated": "2023-04-04T02:30:08Z",
            "first_seen": "2023-04-03T22:31:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1695662,
                41.3743992
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1695662,
                        41.3743992
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w72-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FnrCTEHUHJzbtCBg44",
            "title": "La Noche en Blanco",
            "description": "La Noche en Blanco will once again be a meeting of art and culture for the enjoyment of the citizens of Malaga and visitors. We offer public and private initiatives through cultural proposals coordinated by the City Council's Culture Area.",
            "category": "festivals",
            "labels": [
                "entertainment",
                "festival",
                "performing-arts",
                "social"
            ],
            "rank": 87,
            "local_rank": 100,
            "phq_attendance": 70000,
            "entities": [
                {
                    "entity_id": "VnQ8ZRZM2shGZum9vVeudm",
                    "name": "Malaga",
                    "type": "venue",
                    "formatted_address": "29001 Málaga Spain"
                },
                {
                    "entity_id": "38sqVJJ3KLATR9xrLJTtHxJ",
                    "name": "La Noche en Blanco",
                    "type": "event-group",
                    "category": "festivals",
                    "labels": [
                        "entertainment",
                        "event-group",
                        "festival",
                        "performing-arts",
                        "recurring",
                        "social"
                    ],
                    "description": "La Noche en Blanco is an initiative that allows people to experience culture in a special way. The whole city and its visitors go out that night to visit museums, monuments, listen to concerts and enjoy the hundreds of free activities that are offered during the evening.",
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE:20170517 DURATION:PT6H RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 32400,
            "start": "2023-05-20T08:00:00Z",
            "end": "2023-05-20T17:00:00Z",
            "updated": "2023-04-25T04:09:54Z",
            "first_seen": "2023-02-23T11:38:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.417416077691095,
                36.72328997781857
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                -4.4181326,
                                36.7232303
                            ],
                            [
                                -4.4171455,
                                36.7227466
                            ],
                            [
                                -4.4167512,
                                36.7233163
                            ],
                            [
                                -4.4175666,
                                36.7238559
                            ],
                            [
                                -4.4181326,
                                36.7232303
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6D3V456dccASdkkXyj",
            "title": "Criterio",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 71,
            "phq_attendance": 1011,
            "entities": [
                {
                    "entity_id": "vPsNUcZNpxPZakvMU7emdw",
                    "name": "Medusa Beach Club",
                    "type": "venue",
                    "formatted_address": "Cullera Beach Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-19T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-03-17T23:57:44Z",
            "first_seen": "2023-03-17T23:57:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.2425,
                39.16493
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.2425,
                        39.16493
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-bzw-dqf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361970",
                    "2518949"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DEatW6cSCqVawWAteS",
            "parent_event": {
                "parent_event_id": "GExioghGzzZb6UiebX"
            },
            "title": "Mallorca Live at Antiguo Aquapark",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 49,
            "local_rank": 78,
            "phq_attendance": 922,
            "entities": [
                {
                    "entity_id": "Q5RYF2ncqFsdrsrw7RNnAx",
                    "name": "Aquapark",
                    "type": "venue",
                    "formatted_address": "Calvia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-19T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-05-10T00:13:02Z",
            "first_seen": "2023-03-29T23:47:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.5033683,
                39.5653483
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.5033683,
                        39.5653483
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bjs-yn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356031",
                    "2520493"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FFVYzYXby9ErmT28C5",
            "title": "Armma Metal Fest VI",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 66,
            "phq_attendance": 1350,
            "entities": [
                {
                    "entity_id": "ieBhcxr2jtWtQcTbEiwJDi",
                    "name": "Sala Clandestino",
                    "type": "venue",
                    "formatted_address": "AV España, 47 02002 Albacete Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-19T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-02-18T21:20:32Z",
            "first_seen": "2023-02-18T21:20:11Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.8535127,
                38.9839645
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.8535127,
                        38.9839645
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-fhh-v4v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355295",
                    "2522258"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AUW3r5juqHjiq7YMJN",
            "title": "Yumi Ito",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 28,
            "local_rank": 40,
            "phq_attendance": 80,
            "entities": [
                {
                    "entity_id": "ZL2z2Cfj9mtHPCWzBzFdfb",
                    "name": "Altxerri Jazz club",
                    "type": "venue",
                    "formatted_address": "Erregina Erregentearen Kalea, 2 San Sebastián Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-19T18:30:00Z",
            "end": "2023-05-19T18:30:00Z",
            "updated": "2023-03-24T16:21:52Z",
            "first_seen": "2023-03-15T03:13:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.98182,
                43.32309
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.98182,
                        43.32309
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-y7x-4vz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3120935",
                    "6358157",
                    "3110044"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "fmwJPoSxj7az4SnDeH",
            "title": "Wakana Reunion 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 72,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "9WPVukZVChburTfyCXBcJY",
                    "name": "Wakana",
                    "type": "venue",
                    "formatted_address": "Carretera Benaluz- Casas Viejas  Km 6.5  11190 Benalup  Cádiz"
                }
            ],
            "duration": 306000,
            "start": "2023-05-19T14:00:00Z",
            "end": "2023-05-23T03:00:00Z",
            "updated": "2023-03-29T00:27:31Z",
            "first_seen": "2023-03-29T00:24:19Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.8092195,
                36.3436763
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.8092195,
                        36.3436763
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-88g-bkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356954",
                    "2521134"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8yCc4pA8YAgRYTJTNd",
            "title": "New Era Fest 2023",
            "description": "New Era Fest és el primer festival en posar en valor les masculinitats positives.",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 51,
            "local_rank": 56,
            "phq_attendance": 1087,
            "entities": [],
            "duration": 198000,
            "start": "2023-05-19T13:00:00Z",
            "end": "2023-05-21T20:00:00Z",
            "updated": "2022-12-30T02:58:48Z",
            "first_seen": "2022-12-30T02:53:40Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2246577,
                41.4114594
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2246577,
                        41.4114594
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w66-kpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3110921"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FgfEBMorHn2BrTFRcZ",
            "title": "Iberoexperia",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 49,
            "phq_attendance": 245,
            "entities": [
                {
                    "entity_id": "7PSPikNG5Y7zQrN4p7BMP4",
                    "name": "IFEMA - Feria de Madrid",
                    "type": "venue",
                    "formatted_address": "IFEMA Feria de Madrid, 5 Avenida Partenón 28042 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-19T11:00:00Z",
            "end": "2023-05-19T11:00:00Z",
            "updated": "2023-05-11T23:29:30Z",
            "first_seen": "2023-03-04T20:51:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6165512000000035,
                40.465582
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6165512000000035,
                        40.465582
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-czt-8gk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3124964"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3CW4wJmyT37NCf7yFx",
            "title": "Esmorga",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 86,
            "phq_attendance": 1358,
            "entities": [
                {
                    "entity_id": "WC7Wz2ECzG8ZuiVb64TB8D",
                    "name": "Esmorga Fest",
                    "type": "venue",
                    "formatted_address": "Rúa das Ameneirizas, 2 27619 Sarria Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-04-16T23:26:54Z",
            "first_seen": "2023-04-06T23:23:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.40952,
                42.77837
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.40952,
                        42.77837
                    ],
                    "type": "Point"
                },
                "placekey": "@7dm-8tg-28v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359216",
                    "3109369"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359189",
                    "3117814"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3LAYck3mSuiQkaapxf",
            "title": "Interestelar Sevilla",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 69,
            "phq_attendance": 2205,
            "entities": [
                {
                    "entity_id": "W3RXMad36JmDG6kgu26b9a",
                    "name": "Interestelar Sevilla",
                    "type": "venue",
                    "formatted_address": "Avenida Américo Vespucio, 2 Seville Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-05-11T22:26:10Z",
            "first_seen": "2022-12-24T00:39:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.00772,
                37.39909
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.00772,
                        37.39909
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rqd-s89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6360976",
                    "2520477"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "69h8ZwBRQRhwwf4uwo",
            "title": "Orozkorock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 87,
            "phq_attendance": 1406,
            "entities": [
                {
                    "entity_id": "qQZVqggpibdQUFZk9bBWR5",
                    "name": "Orozko Rock",
                    "type": "venue",
                    "formatted_address": "Calle Ipergorta Vizcaya Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-03-15T05:26:44Z",
            "first_seen": "2023-03-15T03:14:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.90937,
                43.10543
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.90937,
                        43.10543
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-tx5-mp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "3114902",
                    "3104236"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7GQawyDQPDB48EfJYj",
            "title": "Munster Raving Loony Party",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 73,
            "phq_attendance": 2283,
            "entities": [
                {
                    "entity_id": "cH7zHLL3LadqLTVu2ipaMr",
                    "name": "Arc De Bara Camping",
                    "type": "venue",
                    "formatted_address": "43005 Tarragona Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-21T21:59:59Z",
            "updated": "2022-12-25T01:36:18Z",
            "first_seen": "2022-11-30T21:05:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.2444909,
                41.1188827
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.2444909,
                        41.1188827
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-gqt-dd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8zjGCUbVpBUsuVzgFN",
            "title": "Embassa't",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 57,
            "phq_attendance": 691,
            "entities": [
                {
                    "entity_id": "6uGYGAiSL79qTprqu3TjUV",
                    "name": "Amfiteatre Del Parc Catalunya",
                    "type": "venue",
                    "formatted_address": "104 Carrer Prat de la Riba 08206 Sabadell Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-03-15T04:42:51Z",
            "first_seen": "2023-03-15T03:10:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.09255,
                41.55035
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.09255,
                        41.55035
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wqf-4qf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356211",
                    "3111199"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "98qEeW88Bv5cmnEacH",
            "title": "TRAMUNFEST Pre-Party",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 75,
            "phq_attendance": 1500,
            "entities": [
                {
                    "entity_id": "39zgRu6FZjykJr4DCFdVyEz",
                    "name": "La Cabra",
                    "type": "venue",
                    "formatted_address": "Vic Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-19T21:59:59Z",
            "updated": "2023-05-04T23:38:03Z",
            "first_seen": "2023-05-04T23:24:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2436882,
                41.9395491
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2436882,
                        41.9395491
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-yc3-s89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356315",
                    "3106050"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DmtQsw2PtutqxLQ2os",
            "title": "Nit Jove AUP",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 59,
            "phq_attendance": 470,
            "entities": [
                {
                    "entity_id": "zDqbtjG8RSjbrenzm2BcVD",
                    "name": "Nit Jove AUP",
                    "type": "venue",
                    "formatted_address": "Plaça Salvador Allende 08191 Rubí Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-19T21:59:59Z",
            "updated": "2023-05-14T23:44:08Z",
            "first_seen": "2023-05-14T23:33:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.0298,
                41.49025
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.0298,
                        41.49025
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wpn-gp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356209",
                    "3111294"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E8CKf3NjLykeS23sX7",
            "title": "Wakana Reunion",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 94,
            "phq_attendance": 1675,
            "entities": [
                {
                    "entity_id": "8by4iYTncCrZah2CcizpNA",
                    "name": "Wakana Reunion",
                    "type": "venue",
                    "formatted_address": "Cadiz Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-22T21:59:59Z",
            "updated": "2023-04-18T22:02:23Z",
            "first_seen": "2023-03-30T23:57:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.7458841,
                36.3109437
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.7458841,
                        36.3109437
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-86m-mff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356954",
                    "2521134"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EJvsnH5XDGrUpXqpBk",
            "title": "Fiestas de Mayo de Alcantarilla",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 65,
            "phq_attendance": 1162,
            "entities": [
                {
                    "entity_id": "4mgej9CNzRS7JdtVDbWYWA",
                    "name": "Alcantarilla",
                    "type": "venue",
                    "formatted_address": "Murcia Region of Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-19T21:59:59Z",
            "updated": "2023-05-07T23:37:40Z",
            "first_seen": "2023-05-07T23:28:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1306544,
                37.9922399
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1306544,
                        37.9922399
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2fn-p9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GzcGZzrkUoZDQB4MCi",
            "title": "Norai Music & Camp Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 94,
            "phq_attendance": 2048,
            "entities": [
                {
                    "entity_id": "q4VKjb8KHdfBLuxZU3dtCL",
                    "name": "Aiguamolls de l'Empordà",
                    "type": "venue",
                    "formatted_address": "Km 4.2 GIV-6216 17486 Castelló d'Empúries Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-21T21:59:59Z",
            "updated": "2023-05-11T02:39:20Z",
            "first_seen": "2023-02-01T21:19:30Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.08695,
                42.2262208
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.08695,
                        42.2262208
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-769-wtv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534040",
                    "3125884"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Hy5p9nCtwy3D3DQrWx",
            "title": "Polas Bravas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 88,
            "phq_attendance": 1911,
            "entities": [
                {
                    "entity_id": "MJp3UjSGLSyxY4PPQtUg2V",
                    "name": "Chantada",
                    "type": "venue",
                    "formatted_address": "Praza de Galicia, 1 Lugo Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-18T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-04-06T23:54:38Z",
            "first_seen": "2023-04-06T23:20:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -7.76825,
                42.60942
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -7.76825,
                        42.60942
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-xsd-pn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3117813",
                    "6359177",
                    "3125212"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3114964",
                    "6359872",
                    "3114965"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5E33iiWrJBWwjwMJQD",
            "title": "UAMOR",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 57,
            "phq_attendance": 484,
            "entities": [
                {
                    "entity_id": "xTGR6jvuhVMkpQmZRDiJJ9",
                    "name": "Autonomous University of Madrid",
                    "type": "venue",
                    "formatted_address": "Ciudad Universitaria de Cantoblanco 28049 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-17T22:00:00Z",
            "end": "2023-05-18T21:59:59Z",
            "updated": "2023-05-12T00:16:23Z",
            "first_seen": "2023-05-11T23:27:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.694362,
                40.546698
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.694362,
                        40.546698
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cxk-qpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3123477"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "C8kRQt5Xwouv98g6Jt",
            "title": "Girona A Capella Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 67,
            "phq_attendance": 1094,
            "entities": [],
            "duration": 86399,
            "start": "2023-05-17T22:00:00Z",
            "end": "2023-05-18T21:59:59Z",
            "updated": "2023-04-18T01:08:57Z",
            "first_seen": "2023-04-03T23:11:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.82378,
                41.9855
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.82378,
                        41.9855
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-8xb-mx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GExioghGzzZb6UiebX",
            "title": "Mallorca Live Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 86,
            "phq_attendance": 3168,
            "entities": [
                {
                    "entity_id": "wWbwiuksU8LFRcV5URxQwk",
                    "name": "Antiguo Aquapark",
                    "type": "venue",
                    "formatted_address": ""
                }
            ],
            "duration": 259199,
            "start": "2023-05-17T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-05-14T03:45:55Z",
            "first_seen": "2022-11-11T21:22:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.510368699999958,
                39.4909085
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.510368699999958,
                        39.4909085
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-bm6-mrk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356031",
                    "8740851"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Hwaut8B8GN8GhRzCTk",
            "title": "Club 100",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 55,
            "phq_attendance": 627,
            "entities": [
                {
                    "entity_id": "38uivkDx9yCqqdE4VbtJhbE",
                    "name": "Grand Teatro",
                    "type": "venue",
                    "formatted_address": "Calle Cárcel Baja, 10 18010 Granada Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-17T22:00:00Z",
            "end": "2023-05-18T21:59:59Z",
            "updated": "2023-05-11T23:36:04Z",
            "first_seen": "2023-05-11T23:32:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.59776,
                37.17743
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.59776,
                        37.17743
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-z2r-st9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BJJdHxtptVUhQN9usn",
            "title": "Sala Pelicano",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 73,
            "phq_attendance": 3000,
            "entities": [
                {
                    "entity_id": "d3CCQrwCm9uFDwQ5ksbuiU",
                    "name": "Sala Pelícano",
                    "type": "venue",
                    "formatted_address": "3 Avenida do Porto 15003 A Coruña Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-15T22:00:00Z",
            "end": "2023-05-16T21:59:59Z",
            "updated": "2023-04-29T23:32:37Z",
            "first_seen": "2023-04-29T23:31:12Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.3997881,
                43.3682164
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.3997881,
                        43.3682164
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cs5-835"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357300",
                    "3119841"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GexftW6ByZJrzNq2HV",
            "title": "Los40 Santiago Pop",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 61,
            "phq_attendance": 282,
            "entities": [
                {
                    "entity_id": "HVvGGAsQpryhYRBuXnsx7a",
                    "name": "Plaza de Quintana",
                    "type": "venue",
                    "formatted_address": "Plaza de la Quintana, S/n 15704 Santiago de Compostela Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-15T22:00:00Z",
            "end": "2023-05-16T21:59:59Z",
            "updated": "2023-05-12T00:18:02Z",
            "first_seen": "2023-05-11T23:32:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.5437033,
                42.8805737
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.5437033,
                        42.8805737
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-x3h-f4v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357346",
                    "3109642"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5YKzAbk6udGZbKhz5d",
            "title": "Los 40 Urban Party",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 57,
            "phq_attendance": 392,
            "entities": [
                {
                    "entity_id": "kteyEJKCxdKF5bCRFk3v2F",
                    "name": "Parque de la Alameda",
                    "type": "venue",
                    "formatted_address": "45600 Talavera de la Reina Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-14T22:00:00Z",
            "end": "2023-05-15T21:59:59Z",
            "updated": "2023-05-06T00:25:56Z",
            "first_seen": "2023-05-06T00:12:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.8304536,
                39.962884
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.8304536,
                        39.962884
                    ],
                    "type": "Point"
                },
                "placekey": "@7d9-9zd-r8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2510407",
                    "6361825",
                    "2510693"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7gz858ikYmbjA7vBUA",
            "title": "Música contra el olvido - 75 años refugiados de Palestina",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 41,
            "local_rank": 52,
            "phq_attendance": 366,
            "entities": [
                {
                    "entity_id": "8VPKTMG7vxjUMGRyGLw3km",
                    "name": "Sala La Riviera",
                    "type": "venue",
                    "formatted_address": "PASEO VIRGEN DEL PUERTO S/N 28005 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-14T22:00:00Z",
            "end": "2023-05-15T21:59:59Z",
            "updated": "2023-05-11T23:53:16Z",
            "first_seen": "2023-05-11T23:52:52Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.72133,
                40.41151
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.72133,
                        40.41151
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwt-2rk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "gUpXQoASwzDjpSXt6c",
            "title": "Amen meets Mambo Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 48,
            "phq_attendance": 250,
            "entities": [
                {
                    "entity_id": "Ybhicqgn7NLMUQNLd4WiCp",
                    "name": "berlinClub",
                    "type": "venue",
                    "formatted_address": "Costanilla de los Ángeles, 20 28013 Madrid Spain"
                }
            ],
            "duration": 25200,
            "start": "2023-05-14T21:00:00Z",
            "end": "2023-05-15T04:00:00Z",
            "updated": "2023-05-09T22:29:13Z",
            "first_seen": "2023-05-09T22:20:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.70783,
                40.41961
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.70783,
                        40.41961
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-fxq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EmnrzMP5piTtYG7AnK",
            "title": "Festa Brasileña Quintal D'elas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 40,
            "phq_attendance": 174,
            "entities": [
                {
                    "entity_id": "S4asPFLKNeR2BhY4HXDQmM",
                    "name": "Diobar",
                    "type": "venue",
                    "formatted_address": "27 Avinguda del Marquès de l'Argentera 08003 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-14T18:00:00Z",
            "end": "2023-05-14T18:00:00Z",
            "updated": "2023-05-01T22:52:16Z",
            "first_seen": "2023-05-01T22:41:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.185461,
                41.385504
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.185461,
                        41.385504
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w67-yd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "H8RnWt6vzuNQEtNXow",
            "title": "Gay Pride Float Parade Maspalomas 2023",
            "description": "Float Parade Tickets for the Maspalomas Pride Parade 2023",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 58,
            "phq_attendance": 168,
            "entities": [],
            "duration": 0,
            "start": "2023-05-13T16:00:00Z",
            "end": "2023-05-13T16:00:00Z",
            "updated": "2023-04-24T10:30:28Z",
            "first_seen": "2023-04-24T10:30:03Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.5770699,
                27.7490723
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.5770699,
                        27.7490723
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-pd6-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360189",
                    "6354969"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6jFfsCtfABjwE4v4ww",
            "title": "CARROZA GALVANEVENT @ GAY  MASPALOMAS PRIDE",
            "description": "BEST GAY FLOAT - CARROZA MASPALOMAS PRIDE",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 60,
            "phq_attendance": 281,
            "entities": [],
            "duration": 10800,
            "start": "2023-05-13T15:30:00Z",
            "end": "2023-05-13T18:30:00Z",
            "updated": "2023-04-21T15:54:26Z",
            "first_seen": "2023-04-21T15:54:08Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.5790214,
                27.7595661
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.5790214,
                        27.7595661
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-pcm-g8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360189",
                    "6354969"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HDzFcb9L7zAZZhhqEe",
            "title": "Sonoria Festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 54,
            "phq_attendance": 400,
            "entities": [
                {
                    "entity_id": "QXPp5YXBKvHePVbcS63gGt",
                    "name": "Auditorio Rocio Jurado",
                    "type": "venue",
                    "formatted_address": "s/n Camino de los Descubrimientos 41092 Sevilla Spain"
                }
            ],
            "duration": 36000,
            "start": "2023-05-13T14:00:00Z",
            "end": "2023-05-14T00:00:00Z",
            "updated": "2023-05-09T05:57:05Z",
            "first_seen": "2023-03-22T23:26:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.0035347,
                37.4007591
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.0035347,
                        37.4007591
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rqd-rff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6360976",
                    "2520477"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "35GiJWjNnrS7iXqwnu",
            "title": "PIORNO ROCK",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 76,
            "phq_attendance": 947,
            "entities": [],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-05-14T05:36:09Z",
            "first_seen": "2023-02-11T21:18:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.75624,
                37.24925
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.75624,
                        37.24925
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-ths-c3q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357764",
                    "2512509"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6YeJzoZkHVFhunchxw",
            "title": "Bon Creation Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 67,
            "phq_attendance": 643,
            "entities": [
                {
                    "entity_id": "wppDFPnzZbDf5WVXiAiDfP",
                    "name": "Centro Cormecial Bonaire",
                    "type": "venue",
                    "formatted_address": "Autovía del Este, Km. 345, 46960 Valencia Valencia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-05-12T00:07:07Z",
            "first_seen": "2023-05-11T23:32:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.4896,
                39.47047
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.4896,
                        39.47047
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8b8-p35"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361886",
                    "2522077"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8sawr6zV8JiFXdAqUa",
            "title": "IX Ciudad Maldita Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 59,
            "phq_attendance": 611,
            "entities": [
                {
                    "entity_id": "39B4PfaP5PjxDdPMxyvmW3L",
                    "name": "CSA La Purga",
                    "type": "venue",
                    "formatted_address": "Ciudad Real Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-05-04T23:55:40Z",
            "first_seen": "2023-05-04T23:45:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.9222626,
                38.9830219
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.9222626,
                        38.9830219
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-smb-4y9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2519401",
                    "6357128",
                    "2519402"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9Abd37AZAL9bULFcfB",
            "title": "Moska Rock 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 26,
            "local_rank": 49,
            "phq_attendance": 60,
            "entities": [
                {
                    "entity_id": "dKGEBMLiSzgNZ4EqKUs84V",
                    "name": "Sala Rebullón",
                    "type": "venue",
                    "formatted_address": "Avda. do Rebullón 23, Tameiga Pontevedra Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-03-15T04:01:33Z",
            "first_seen": "2023-03-15T03:13:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.66505,
                42.20385
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.66505,
                        42.20385
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yr2-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360254",
                    "3108353"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BFo2eiuJm7fQanFFbu",
            "title": "Concurso de Bandas Pachamama Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 67,
            "phq_attendance": 1008,
            "entities": [
                {
                    "entity_id": "39H8NtqsC6ncBfTqXUddBma",
                    "name": "Pachamama Rock",
                    "type": "venue",
                    "formatted_address": "Mojácar Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-04-29T23:42:33Z",
            "first_seen": "2023-04-29T23:42:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.8611011,
                37.1220313
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.8611011,
                        37.1220313
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-xsb-bp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355576",
                    "2513786"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BV4wERFPYJs9BrMgUk",
            "title": "Fulanita Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 60,
            "phq_attendance": 725,
            "entities": [
                {
                    "entity_id": "36wH9WeXsMJHM2riEB5dAtY",
                    "name": "Castillo Sohail",
                    "type": "venue",
                    "formatted_address": "C/Tartessos s/n 29640 Fuengirola Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-01-28T03:11:42Z",
            "first_seen": "2023-01-02T21:06:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.6287241,
                36.5253198
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.6287241,
                        36.5253198
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-hvk-xt9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359459",
                    "2517595"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BYFVnN9TqrXnhDngE3",
            "title": "Touliña Pop",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 41,
            "local_rank": 71,
            "phq_attendance": 375,
            "entities": [
                {
                    "entity_id": "jUaqq969Q9LSmtANDjgnXD",
                    "name": "Sada (A Coruña)",
                    "type": "venue",
                    "formatted_address": "La Coruna Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-04-18T23:27:35Z",
            "first_seen": "2023-04-18T23:21:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.2623222,
                43.3510326
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.2623222,
                        43.3510326
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cpf-5fz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357343",
                    "3232554"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "C6BQd23hJXsLAdvjHH",
            "title": "Hype Me Fest!",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 53,
            "phq_attendance": 400,
            "entities": [
                {
                    "entity_id": "LvxsmSq9WzjtQMkEBaf9jj",
                    "name": "Sala Malandar",
                    "type": "venue",
                    "formatted_address": "43 Avenida Torneo 41002 Sevilla Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-03-08T21:17:00Z",
            "first_seen": "2023-03-08T21:16:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.00004,
                37.39849
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.00004,
                        37.39849
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rqd-nt9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CiHStqgg2zeJuWWKLN",
            "title": "El Tingladu",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 64,
            "phq_attendance": 953,
            "entities": [
                {
                    "entity_id": "FXwtAG3if58DvUDRuFJskv",
                    "name": "El Tingladu",
                    "type": "venue",
                    "formatted_address": "Vilanova i la Geltrú Spain"
                },
                {
                    "entity_id": "37hDVYLCTpYkTVjcEm9JRfH",
                    "name": "Tingladu",
                    "type": "event-group",
                    "formatted_address": "Vitoria-Gasteiz Basque Country Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20210722T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-04-04T17:03:45Z",
            "first_seen": "2022-12-21T20:41:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6817918,
                42.8591656
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6817918,
                        42.8591656
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-w9z-b8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3129418"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3130717",
                    "6355286",
                    "3104499"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DTawhVf7RXX7WzXKCx",
            "title": "Rivas Sound",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 64,
            "phq_attendance": 460,
            "entities": [
                {
                    "entity_id": "gTj3seQzq9kyZBqLQXr8j3",
                    "name": "Recinto Ferial Auditorio Miguel Ríos",
                    "type": "venue",
                    "formatted_address": "Rivas-Vaciamadrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-05-03T23:00:14Z",
            "first_seen": "2023-04-27T23:39:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5054,
                40.34264
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5054,
                        40.34264
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cjc-rhq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359344",
                    "3123352"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DfpSBRGFxrLukm2tFH",
            "title": "Guadix Gravel Festival",
            "description": "",
            "category": "sports",
            "labels": [
                "festival",
                "outdoor",
                "running",
                "sport"
            ],
            "rank": 31,
            "local_rank": 52,
            "phq_attendance": 109,
            "entities": [],
            "duration": 172799,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-14T21:59:59Z",
            "updated": "2023-01-02T02:24:08Z",
            "first_seen": "2023-01-02T02:23:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.1403256,
                37.3011351
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.1403256,
                        37.3011351
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-s3w-gp9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357711",
                    "2516925"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "F5dz8nDjaHPbVZ9pCo",
            "title": "Strenes Urbanes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 43,
            "phq_attendance": 300,
            "entities": [
                {
                    "entity_id": "8DKVsMFfqaq5pTHaXsWBcW",
                    "name": "Antiga Fàbrica Estrella Damm",
                    "type": "venue",
                    "formatted_address": "515 Carrer del Rosselló 08025 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2022-12-09T20:49:02Z",
            "first_seen": "2022-12-01T20:40:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1778961,
                41.4092959
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1778961,
                        41.4092959
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w65-kj9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HMJgah7eXPc3aaDj5K",
            "title": "Altimira Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 57,
            "phq_attendance": 458,
            "entities": [],
            "duration": 86399,
            "start": "2023-05-12T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-05-13T23:10:49Z",
            "first_seen": "2023-03-15T03:14:05Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1396748,
                41.4900419
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1396748,
                        41.4900419
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wsq-ndv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356285",
                    "3109402"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "EhNkWmfdiv34t2NSBJ",
            "title": "7ª LPA MOTOWN - Feria de la Moto y de la Movilidad Sostenible",
            "description": "Feria de la Moto y la Movilidad Sostenible",
            "category": "festivals",
            "labels": [
                "festival",
                "outdoor"
            ],
            "rank": 41,
            "local_rank": 52,
            "phq_attendance": 361,
            "entities": [],
            "duration": 194400,
            "start": "2023-05-12T09:00:00Z",
            "end": "2023-05-14T15:00:00Z",
            "updated": "2023-04-30T19:26:15Z",
            "first_seen": "2023-04-30T19:25:52Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.4458643,
                28.1070035
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.4458643,
                        28.1070035
                    ],
                    "type": "Point"
                },
                "placekey": "@6ym-7dq-yjv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2510667"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ESBypfLhcRRUpLGckP",
            "title": "Maspalomas Pride",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 72,
            "phq_attendance": 1060,
            "entities": [
                {
                    "entity_id": "EBSj2278ebtPq2S4GPdMts",
                    "name": "Estadio Municipal de Maspalomas",
                    "type": "venue",
                    "formatted_address": "Las Palmas de Gran Canaria Spain"
                },
                {
                    "entity_id": "WmTvn9LUB55G7vE7nXMLpM",
                    "name": "Maspalomas Pride",
                    "type": "event-group",
                    "formatted_address": "35100 Maspalomas Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20180503T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 86399,
            "start": "2023-05-11T23:00:00Z",
            "end": "2023-05-12T22:59:59Z",
            "updated": "2023-03-26T23:23:35Z",
            "first_seen": "2023-03-26T23:21:34Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.57037,
                27.76355
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -15.57037,
                        27.76355
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-pch-6x5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360189",
                    "6354969"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4ufoc6nqhv8fKhFXdi",
            "title": "IndieCool Sessions Vol.2",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 53,
            "phq_attendance": 380,
            "entities": [
                {
                    "entity_id": "yjWpetjdDeXSmFHsvbLg6s",
                    "name": "La Lata de Bombillas",
                    "type": "venue",
                    "formatted_address": "Calle de María Moliner, 7 50007 Zaragoza Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-11T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-04-26T23:54:36Z",
            "first_seen": "2022-11-09T21:46:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.8786393,
                41.6548664
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.8786393,
                        41.6548664
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-6p5-8jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362983",
                    "3104324"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7xXqMab47cgaZfrF4h",
            "title": "Lucas Bun",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 49,
            "phq_attendance": 600,
            "entities": [
                {
                    "entity_id": "XS5B8DMvY5iTnSyKNLSVeb",
                    "name": "Luz de Gas",
                    "type": "venue",
                    "formatted_address": "246 Carrer de Muntaner 08021 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-11T22:00:00Z",
            "end": "2023-05-12T21:59:59Z",
            "updated": "2023-05-11T23:29:29Z",
            "first_seen": "2023-02-08T20:47:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.149056,
                41.394615
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.149056,
                        41.394615
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5n-qfz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8ZjfpJEcqL7e4zVd43",
            "title": "Grimey x Palestina",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 63,
            "phq_attendance": 443,
            "entities": [
                {
                    "entity_id": "pU7zpGUsnmcUWbyhfRbyr6",
                    "name": "Auditorio Miguel Ríos",
                    "type": "venue",
                    "formatted_address": "s/n Paseo Alicia Alonso 28521 Rivas-Vaciamadrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-11T22:00:00Z",
            "end": "2023-05-12T21:59:59Z",
            "updated": "2023-05-07T23:28:24Z",
            "first_seen": "2023-05-07T23:27:30Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.5129742,
                40.3458047
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.5129742,
                        40.3458047
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cdc-gzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359344",
                    "3107112"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BgFpgHTqT9aYqiZhMB",
            "title": "Quinzèsim aniversari Ojalá Estë Mi Bici",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 54,
            "phq_attendance": 768,
            "entities": [
                {
                    "entity_id": "398vrDEVjRSMX2pFGCjjTA4",
                    "name": "Ateneu Popular 9 Barris",
                    "type": "venue",
                    "formatted_address": "11-15 Carrer de Portlligat 08042 Barcelona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-11T22:00:00Z",
            "end": "2023-05-13T21:59:59Z",
            "updated": "2023-04-13T22:43:54Z",
            "first_seen": "2023-04-13T22:43:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1801431,
                41.4487726
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1801431,
                        41.4487726
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w7m-bx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356154",
                    "3109769"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5sdQEpKfCChzRJxSmx",
            "title": "Mercadillo del Gato",
            "description": "Pop-up donde podrás encontrar las últimas novedades en moda, joyería, complementos, artesanía, arte y ¡mucho más!",
            "category": "festivals",
            "labels": [
                "fashion",
                "festival"
            ],
            "rank": 43,
            "local_rank": 53,
            "phq_attendance": 426,
            "entities": [],
            "duration": 381600,
            "start": "2023-05-11T09:00:00Z",
            "end": "2023-05-15T19:00:00Z",
            "updated": "2023-03-10T17:46:19Z",
            "first_seen": "2023-03-10T17:45:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.695585,
                40.4154231
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.695585,
                        40.4154231
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-yvz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3sQDSfUb9szHTFxjwE",
            "title": "Festival Encanta",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 78,
            "phq_attendance": 2551,
            "entities": [
                {
                    "entity_id": "34LgMWXXUHPCmbQCqtb6HTm",
                    "name": "Teatre Eliseu (Roda de Ter)",
                    "type": "venue",
                    "formatted_address": "Barcelona Spain"
                }
            ],
            "duration": 345599,
            "start": "2023-05-10T22:00:00Z",
            "end": "2023-05-14T21:59:59Z",
            "updated": "2023-02-07T21:00:06Z",
            "first_seen": "2023-02-07T20:59:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.3091648,
                41.9813811
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.3091648,
                        41.9813811
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-yf6-ygk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356294",
                    "3111465"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "33BmzXrL7kKcj9XqXS",
            "title": "Maspalomas Pride",
            "description": "Maspalomas Pride is both protest and party, critical and celebratory. Maspalomas Pride is honoring our roots, commemorating our wins, and imagining queer possibilities of the future. Maspalomas Pride is taking a breath to live in the moment – joyous, unapologetic, and taking up space in a world that says we should not exist.",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 300000,
            "entities": [
                {
                    "entity_id": "f28dW4pPfsCeZ9SbEXRHuE",
                    "name": "Maspalomas",
                    "type": "venue",
                    "formatted_address": "Buggy Tour Gran Canaria Maspalomas Spain"
                },
                {
                    "entity_id": "WmTvn9LUB55G7vE7nXMLpM",
                    "name": "Maspalomas Pride",
                    "type": "event-group",
                    "formatted_address": "35100 Maspalomas Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20180503T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 28800,
            "start": "2023-05-10T11:00:00Z",
            "end": "2023-05-10T19:00:00Z",
            "updated": "2023-02-02T22:01:16Z",
            "first_seen": "2022-09-04T20:50:58Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -15.726737017688247,
                27.79129060196408
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                -15.7274646,
                                27.7917325
                            ],
                            [
                                -15.7267109,
                                27.7905816
                            ],
                            [
                                -15.7264695,
                                27.7905959
                            ],
                            [
                                -15.7261906,
                                27.7917348
                            ],
                            [
                                -15.7274646,
                                27.7917325
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360182",
                    "8504747"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2515271",
                    "6360186",
                    "2515270"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3SK6aEjaMfMzw2YwN8",
            "title": "Aloha",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 64,
            "phq_attendance": 831,
            "entities": [
                {
                    "entity_id": "DPxJ79DJLSnncUfuUBNg9a",
                    "name": "Recinto Ferial de Cuenca",
                    "type": "venue",
                    "formatted_address": "Cuenca Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-09T22:00:00Z",
            "end": "2023-05-10T21:59:59Z",
            "updated": "2023-04-20T01:16:08Z",
            "first_seen": "2023-04-20T00:40:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.1422274,
                40.0657043
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.1422274,
                        40.0657043
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-hkn-zfz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2519034",
                    "6357429",
                    "3124132"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BGubZPobUomrojW4Y8",
            "title": "Festa Brasileña Quintal D'elas",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 40,
            "phq_attendance": 174,
            "entities": [
                {
                    "entity_id": "S4asPFLKNeR2BhY4HXDQmM",
                    "name": "Diobar",
                    "type": "venue",
                    "formatted_address": "27 Avinguda del Marquès de l'Argentera 08003 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-07T18:00:00Z",
            "end": "2023-05-07T18:00:00Z",
            "updated": "2023-04-29T22:57:26Z",
            "first_seen": "2023-04-29T22:57:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.185461,
                41.385504
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.185461,
                        41.385504
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w67-yd9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AQPxD2S9rNSMN9ipHr",
            "title": "Ibiza Soca Festival | Day Four",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 59,
            "phq_attendance": 323,
            "entities": [
                {
                    "entity_id": "YMYjPdLLz7PbbPsSPkXF3x",
                    "name": "Ibiza Rocks",
                    "type": "venue",
                    "formatted_address": "07820 Sant Antoni de Portmany Spain"
                }
            ],
            "duration": 25200,
            "start": "2023-05-07T12:00:00Z",
            "end": "2023-05-07T19:00:00Z",
            "updated": "2023-04-23T02:27:20Z",
            "first_seen": "2023-04-23T02:19:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.3001462,
                38.9825666
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.3001462,
                        38.9825666
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mgc-5fz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356035",
                    "2511448"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "KAKdoMZ7MNUgYYkY4g",
            "title": "Taller d’ill·lustració naturalista amb Toni Galmés",
            "description": "a partir de 7anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 32,
            "local_rank": 56,
            "phq_attendance": 131,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-07T10:30:00Z",
            "end": "2023-05-07T11:30:00Z",
            "updated": "2023-05-12T01:25:21Z",
            "first_seen": "2023-05-12T01:24:55Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6Rt8w3bS2qJWkx6veg",
            "title": "‘Taller El còmic impossible’ amb Maria Herreros i Ricardo Cavolo",
            "description": "a partir de 5 anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 35,
            "local_rank": 58,
            "phq_attendance": 174,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-07T10:00:00Z",
            "end": "2023-05-07T11:00:00Z",
            "updated": "2023-05-08T11:36:23Z",
            "first_seen": "2023-05-08T10:15:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CeUcoVkFqCC2DUMwiD",
            "title": "Taller de còmic ‘Fes el teu superpatata’ amb Artur Laperla",
            "description": "a partir de 6 anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 33,
            "local_rank": 56,
            "phq_attendance": 142,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-07T09:00:00Z",
            "end": "2023-05-07T10:00:00Z",
            "updated": "2023-04-30T17:33:07Z",
            "first_seen": "2023-04-30T17:23:47Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4w2Xgxs423Nv5oj7Ss",
            "title": "Taller d'animació amb stop-motion a càrrec de Lyona",
            "description": "a partir de 6 anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 36,
            "local_rank": 59,
            "phq_attendance": 198,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-07T08:30:00Z",
            "end": "2023-05-07T09:30:00Z",
            "updated": "2023-04-30T12:28:17Z",
            "first_seen": "2023-04-30T12:27:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Em7FLQx2AhidkQqmuE",
            "title": "Solar Corona + Ordara",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 47,
            "phq_attendance": 188,
            "entities": [
                {
                    "entity_id": "RrYVnBS43nSffbruC8Zu2R",
                    "name": "Dabadaba",
                    "type": "venue",
                    "formatted_address": "8 Mundaitz Kalea 20012 Donostia Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-06T18:30:00Z",
            "end": "2023-05-06T18:30:00Z",
            "updated": "2023-05-15T04:46:54Z",
            "first_seen": "2023-04-07T01:29:01Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.9763408,
                43.3155044
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.9763408,
                        43.3155044
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-y7x-8jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3120935",
                    "6358157",
                    "3110044"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BcygiRFKYA8ZbNquxJ",
            "title": "AHORA Playday | 6th of May in Buzanada",
            "description": "At our playday we invite you to surrender to your inner child and connect with your playfulness. A day full of laughter, joy and connection!",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 37,
            "local_rank": 56,
            "phq_attendance": 225,
            "entities": [],
            "duration": 25200,
            "start": "2023-05-06T14:00:00Z",
            "end": "2023-05-06T21:00:00Z",
            "updated": "2023-04-30T13:39:45Z",
            "first_seen": "2023-04-30T13:39:21Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -16.6587434,
                28.0735135
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -16.6587434,
                        28.0735135
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-kvn-h89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2511173",
                    "6360622",
                    "2520696"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "MN4J6VbRMWMtuVnJNi",
            "title": "Dj Antoine Music Sessions #2",
            "description": "Dj Antoine Session",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 55,
            "phq_attendance": 292,
            "entities": [],
            "duration": 10800,
            "start": "2023-05-06T14:00:00Z",
            "end": "2023-05-06T17:00:00Z",
            "updated": "2023-04-14T05:12:27Z",
            "first_seen": "2023-04-14T05:12:11Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.4496482,
                39.1169141
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.4496482,
                        39.1169141
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-crf-9xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361948",
                    "2520150"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "35QEwAqsZ7VAZBggxG",
            "title": "Taller ‘Manual per Superherois’ amb OyeMathias",
            "description": "a partir de 5 anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 34,
            "local_rank": 57,
            "phq_attendance": 153,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-06T10:30:00Z",
            "end": "2023-05-06T11:30:00Z",
            "updated": "2023-04-30T12:28:14Z",
            "first_seen": "2023-04-30T12:27:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GsATeMxNC6LcmqY6k8",
            "title": "'Vinyetes Il·lustres' Un taller de còmic amb Laccao i Pato Conde",
            "description": "a partir de 6 anys",
            "category": "festivals",
            "labels": [
                "community",
                "festival"
            ],
            "rank": 36,
            "local_rank": 59,
            "phq_attendance": 203,
            "entities": [],
            "duration": 3600,
            "start": "2023-05-06T09:00:00Z",
            "end": "2023-05-06T10:00:00Z",
            "updated": "2023-04-30T12:57:29Z",
            "first_seen": "2023-04-30T12:57:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.747056299999999,
                39.62133979999999
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.747056299999999,
                        39.62133979999999
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mw2-6p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533957",
                    "2516149"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "68Am5TU7ePobknzfHr",
            "title": "Telegrama",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 50,
            "phq_attendance": 551,
            "entities": [
                {
                    "entity_id": "szFWeYuNUXGYqsiez9xfVc",
                    "name": "Paral·lel 62",
                    "type": "venue",
                    "formatted_address": "Av. del Paral.lel, 62 08001 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-05-08T19:23:00Z",
            "first_seen": "2023-04-21T23:03:20Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1695894,
                41.375199
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1695894,
                        41.375199
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w72-mc5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "72vZ8AVQUYFzH8fLL2",
            "title": "Festival Indie al Descubierto",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 68,
            "phq_attendance": 705,
            "entities": [
                {
                    "entity_id": "ECs9v3J5NmV2VLu8yXJgzM",
                    "name": "Explanada de la Casa de la Cultura de Cullar Vega",
                    "type": "venue",
                    "formatted_address": "Granada Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-05-05T01:49:42Z",
            "first_seen": "2023-04-06T23:48:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6768195,
                37.1580173
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6768195,
                        37.1580173
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-t3s-8jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357687",
                    "2518950"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8zP2GXrLoM3TntPBM5",
            "title": "Collbató Vives Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 67,
            "phq_attendance": 329,
            "entities": [],
            "duration": 86399,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-04-29T01:56:05Z",
            "first_seen": "2023-04-21T01:38:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.82776,
                41.56995
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.82776,
                        41.56995
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-shd-fvf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356108",
                    "3124786"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "A4hckhtctnaScWMdE2",
            "title": "Fiesta de la Primavera en Tokatu",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 65,
            "phq_attendance": 665,
            "entities": [
                {
                    "entity_id": "rdzcZyXFpkUD53iGJ9Ad5v",
                    "name": "Tokatu Music Club",
                    "type": "venue",
                    "formatted_address": "Bellavista, Fuente del Rey. carretera de la Isla km 0, 1 Nave I 41014 Dos Hermanas Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-05-06T00:47:25Z",
            "first_seen": "2023-04-26T23:34:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.9717,
                37.31302
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.9717,
                        37.31302
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-r8s-w6k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6360993",
                    "2514605"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ATziost4P7E2VzkQwy",
            "title": "Flowfest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 59,
            "phq_attendance": 621,
            "entities": [
                {
                    "entity_id": "BeHPW2TP7BTxgNLZKmrPMZ",
                    "name": "Sala Spook",
                    "type": "venue",
                    "formatted_address": "C/Carretera del Río, 399 46012 Pinedo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-04-20T00:48:17Z",
            "first_seen": "2023-04-20T00:42:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3352275,
                39.4105613
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3352275,
                        39.4105613
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-88q-dn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2512543"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HekhR5NsTnkNJot4LL",
            "title": "Festival Alacant Desperta '23",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 70,
            "phq_attendance": 1964,
            "entities": [
                {
                    "entity_id": "t4jvjBJ5fDuvc6LBHPcmSM",
                    "name": "Parque Monte Tossal",
                    "type": "venue",
                    "formatted_address": "Escultor Bañul Alicante Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-07T21:59:59Z",
            "updated": "2023-04-27T22:02:06Z",
            "first_seen": "2023-04-22T00:36:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.49113,
                38.35607
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.49113,
                        38.35607
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcc-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Hkr5shKMfKSbVxrp6a",
            "title": "Flamin'go Beach Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 81,
            "phq_attendance": 3021,
            "entities": [
                {
                    "entity_id": "w3Mt6TrQZRMzPfRzpM24eb",
                    "name": "Camping Los Escullos (Cabo de Gata)",
                    "type": "venue",
                    "formatted_address": "Almería Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-07T21:59:59Z",
            "updated": "2022-11-30T01:19:43Z",
            "first_seen": "2022-11-30T01:05:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.11066,
                36.76869
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.11066,
                        36.76869
                    ],
                    "type": "Point"
                },
                "placekey": "@7b2-mpc-k2k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355578",
                    "2511357"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "fTHvNPrv4HfJGLsoW5",
            "title": "Summer Fuzz",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 78,
            "phq_attendance": 2757,
            "entities": [
                {
                    "entity_id": "Nge7f68JBWByRa3wztkJ6V",
                    "name": "Pabellón Municipal de Villamediana de Iregua",
                    "type": "venue",
                    "formatted_address": "Villamediana de Iregua Logroño Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-05T22:00:00Z",
            "end": "2023-05-07T21:59:59Z",
            "updated": "2023-02-12T21:11:14Z",
            "first_seen": "2023-02-12T21:09:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4196361,
                42.4261346
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4196361,
                        42.4261346
                    ],
                    "type": "Point"
                },
                "placekey": "@7ff-d75-t35"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336897",
                    "6355232",
                    "6359150",
                    "3105381"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336897",
                    "6355232",
                    "6359078",
                    "3118150"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "JFMdwwxUZbCYxEb86K",
            "title": "RIT/MO festival 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 75,
            "phq_attendance": 1000,
            "entities": [
                {
                    "entity_id": "JyNnmDwiJitRA3zc43CpZ5",
                    "name": "Paraje Natural de la Ermita de los Tres Juanes",
                    "type": "venue",
                    "formatted_address": "Camino de la Ermita  s/n  Atarfe  Granada  18230  Spain"
                }
            ],
            "duration": 36000,
            "start": "2023-05-05T15:00:00Z",
            "end": "2023-05-06T01:00:00Z",
            "updated": "2023-03-16T12:31:01Z",
            "first_seen": "2023-03-16T11:59:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6868884,
                37.2362903
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6868884,
                        37.2362903
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-z2g-389"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357657",
                    "2521485"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GYqep4bkR6h7vVFrSw",
            "title": "BhumiFest 5-8 May 2023",
            "description": "Bhumi Fest bridges the gap between celebratory festivals and sitting in peaceful silence in a transformational retreat!",
            "category": "festivals",
            "labels": [
                "festival",
                "health"
            ],
            "rank": 39,
            "local_rank": 68,
            "phq_attendance": 294,
            "entities": [],
            "duration": 255600,
            "start": "2023-05-05T12:00:00Z",
            "end": "2023-05-08T11:00:00Z",
            "updated": "2023-02-20T17:55:43Z",
            "first_seen": "2023-02-20T17:55:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.7519526,
                36.9070007
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.7519526,
                        36.9070007
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-kk2-k2k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359417",
                    "2518544"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6EjT3Y5kVodizosoCy",
            "title": "Beach Riot Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 72,
            "phq_attendance": 1885,
            "entities": [
                {
                    "entity_id": "Nuc8GAPh4duU3xABYJqFKN",
                    "name": "Ku Disco",
                    "type": "venue",
                    "formatted_address": "Avenida Comunidad Valenciana, Km 121, 03501 03501 Benidorm Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2022-10-25T21:14:51Z",
            "first_seen": "2022-10-05T21:10:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.1346344,
                38.5404383
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.1346344,
                        38.5404383
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-ts6-zpv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355407",
                    "2521088"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7DRLLyKAjtRnpfiyGo",
            "title": "Quemando carretera Tour",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 74,
            "local_rank": 89,
            "phq_attendance": 15000,
            "entities": [
                {
                    "entity_id": "mWWaAbQ4Lu7zxFdDU4ukjH",
                    "name": "Plaza de toros de Alicante",
                    "type": "venue",
                    "formatted_address": "7 Plaça d'Espanya 03010 Alacant Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-05T21:59:59Z",
            "updated": "2023-03-03T01:15:11Z",
            "first_seen": "2023-02-20T21:13:17Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.48442811680301606,
                38.3525589446804
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                -0.4852834,
                                38.3532381
                            ],
                            [
                                -0.4847576,
                                38.3517699
                            ],
                            [
                                -0.4838457,
                                38.351732
                            ],
                            [
                                -0.4838028,
                                38.3532549
                            ],
                            [
                                -0.4852834,
                                38.3532381
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BXARji8egpvDxZgCLM",
            "title": "Festival Alacant Desperta",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 56,
            "local_rank": 70,
            "phq_attendance": 1942,
            "entities": [
                {
                    "entity_id": "t4jvjBJ5fDuvc6LBHPcmSM",
                    "name": "Parque Monte Tossal",
                    "type": "venue",
                    "formatted_address": "Escultor Bañul Alicante Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-07T21:59:59Z",
            "updated": "2023-04-15T23:36:48Z",
            "first_seen": "2023-04-15T23:29:36Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.49113,
                38.35607
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.49113,
                        38.35607
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcc-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CQSA8K3scZ8ERf5Rpf",
            "title": "Cicle de Concerts a Palau Robert",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 54,
            "local_rank": 58,
            "phq_attendance": 1548,
            "entities": [
                {
                    "entity_id": "eqETArWt4ybtuDmxr6WYAV",
                    "name": "Jardins del Palau Robert",
                    "type": "venue",
                    "formatted_address": "107 Passeig de Gràcia 08008 Barcelona Spain"
                }
            ],
            "duration": 1814399,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-25T21:59:59Z",
            "updated": "2023-05-05T23:32:36Z",
            "first_seen": "2023-05-05T22:47:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1588387,
                41.3958587
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1588387,
                        41.3958587
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5n-zcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "v2X29KPJ7KMiErdUQe",
            "title": "Festival Música d'Autor/a",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 47,
            "phq_attendance": 458,
            "entities": [
                {
                    "entity_id": "392dAc8V4ctdZQhcjBbJ2Dx",
                    "name": "Heliogàbal",
                    "type": "venue",
                    "formatted_address": "C/ Ramón y Cajal, 80 - Metro L4 Joanic 08012 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-05T21:59:59Z",
            "updated": "2023-04-19T23:36:46Z",
            "first_seen": "2023-04-19T23:36:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.15608,
                41.40235
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.15608,
                        41.40235
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5j-cqz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "z7bY2w4xwTxmUQ76tF",
            "title": "Incendiari Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 51,
            "local_rank": 63,
            "phq_attendance": 1104,
            "entities": [
                {
                    "entity_id": "yYZwnAXdtYGkcUKhKBYKKf",
                    "name": "Auditorio Municipal de Burjassot",
                    "type": "venue",
                    "formatted_address": "José Carsi, 50 46100 Burjassot Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-05-04T22:00:00Z",
            "end": "2023-05-06T21:59:59Z",
            "updated": "2023-03-20T23:21:42Z",
            "first_seen": "2023-03-20T23:21:27Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.41058,
                39.51038
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.41058,
                        39.51038
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-827-zcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6361943",
                    "2520712"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FH8yQ3ECU2zMcjY62K",
            "title": "Enderrock 30 anys",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 57,
            "phq_attendance": 1443,
            "entities": [
                {
                    "entity_id": "eqETArWt4ybtuDmxr6WYAV",
                    "name": "Jardins del Palau Robert",
                    "type": "venue",
                    "formatted_address": "107 Passeig de Gràcia 08008 Barcelona Spain"
                }
            ],
            "duration": 1987199,
            "start": "2023-05-02T22:00:00Z",
            "end": "2023-05-25T21:59:59Z",
            "updated": "2023-04-25T22:08:41Z",
            "first_seen": "2023-04-15T22:56:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1588387,
                41.3958587
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1588387,
                        41.3958587
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5n-zcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FdyeUtmb3RoqGeeVVX",
            "title": "Sesión Vermú",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 41,
            "local_rank": 52,
            "phq_attendance": 361,
            "entities": [
                {
                    "entity_id": "heu6aaz49QidM8WNhTQvWT",
                    "name": "Plaza Mayor",
                    "type": "venue",
                    "formatted_address": "Pl. Mayor 28012 Madrid Madrid España"
                }
            ],
            "duration": 86399,
            "start": "2023-05-01T22:00:00Z",
            "end": "2023-05-02T21:59:59Z",
            "updated": "2023-04-13T23:35:09Z",
            "first_seen": "2023-04-13T23:30:14Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7073525662,
                40.4155455843
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7073525662,
                        40.4155455843
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-st9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6vdGKcLnXbk8oBSdQG",
            "title": "Afrojam - Especial Festivo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 48,
            "phq_attendance": 247,
            "entities": [
                {
                    "entity_id": "m3ebgqxLv3fYJCFZxhHUpa",
                    "name": "El Sótano",
                    "type": "venue",
                    "formatted_address": "6 Calle de las Maldonadas 28005 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-05-01T19:00:00Z",
            "end": "2023-05-01T19:00:00Z",
            "updated": "2023-04-10T23:30:48Z",
            "first_seen": "2023-04-10T23:24:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.707708,
                40.410929
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.707708,
                        40.410929
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-rff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "B9QPe8YKySGYSZDoBs",
            "title": "Beatout",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 58,
            "local_rank": 72,
            "phq_attendance": 2382,
            "entities": [
                {
                    "entity_id": "35LXjKwp8YUaQSPxJDWHurv",
                    "name": "Expocoruña",
                    "type": "venue",
                    "formatted_address": "Avenida De La Universidad La Coruna Spain"
                }
            ],
            "duration": 2678399,
            "start": "2023-04-30T22:00:00Z",
            "end": "2023-05-31T21:59:59Z",
            "updated": "2023-01-23T21:15:43Z",
            "first_seen": "2023-01-23T21:15:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.40963,
                43.33747
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.40963,
                        43.33747
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cs3-7qz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357300",
                    "3123209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CiCnQXCq2XbqnXyvPt",
            "title": "Satèl·lit Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 62,
            "phq_attendance": 795,
            "entities": [
                {
                    "entity_id": "3BkwPmyuKYmKbtrGj7imBFK",
                    "name": "Cuartel General Luque",
                    "type": "venue",
                    "formatted_address": "Inca Islas Baleares España"
                }
            ],
            "duration": 86399,
            "start": "2023-04-29T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-02-10T21:49:46Z",
            "first_seen": "2023-02-10T21:49:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.9075475,
                39.7177743
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.9075475,
                        39.7177743
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-8zb-9s5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533948",
                    "2516452"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FD6e6Pv4tJsUscKJzr",
            "title": "DOMO",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 71,
            "phq_attendance": 709,
            "entities": [
                {
                    "entity_id": "4BHUs3Gk4C3SfPKu8XgthT",
                    "name": "Complejo Embrujo",
                    "type": "venue",
                    "formatted_address": "Granada Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-29T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-03-16T23:41:30Z",
            "first_seen": "2023-03-16T23:41:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7070513,
                37.1184133
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7070513,
                        37.1184133
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-szp-xwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357650",
                    "2514265"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GxEQ9zKadC5Me9n9zA",
            "title": "Warm Up Festival at Recinto Ferial De La Fica",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 55,
            "local_rank": 70,
            "phq_attendance": 1768,
            "entities": [
                {
                    "entity_id": "qSQZCpqWp4xy3decx5zjVc",
                    "name": "Recinto Ferial de la Fica",
                    "type": "venue",
                    "formatted_address": "30003 Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-29T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-05-08T01:39:53Z",
            "first_seen": "2023-04-17T20:30:32Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1102911,
                37.9836716
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1102911,
                        37.9836716
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2ff-f9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "8740718"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HSQ6uNRLmDxgc8p4mv",
            "title": "BlackWorks Festival Bilbao",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 56,
            "phq_attendance": 598,
            "entities": [
                {
                    "entity_id": "NYgUj2HnLcxbxXHckttX8t",
                    "name": "Bilbao Exhibition Centre",
                    "type": "venue",
                    "formatted_address": "1 Azkue Kalea 48902 Barakaldo Spain"
                }
            ],
            "duration": 28800,
            "start": "2023-04-29T21:00:00Z",
            "end": "2023-04-30T05:00:00Z",
            "updated": "2023-05-08T19:03:38Z",
            "first_seen": "2023-02-21T09:06:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.9907706,
                43.2882308
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.9907706,
                        43.2882308
                    ],
                    "type": "Point"
                },
                "placekey": "@4dy-vcj-fcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "3128842",
                    "3109453"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336903",
                    "3104469",
                    "6362368",
                    "3128026"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9K2CYJJN5cSEg2YJ4X",
            "title": "Nerve Agent",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 39,
            "local_rank": 50,
            "phq_attendance": 278,
            "entities": [
                {
                    "entity_id": "79j6bYNLfRYxGhzE6GTyKP",
                    "name": "Gorila",
                    "type": "venue",
                    "formatted_address": "C. del Ciprés, 4 50003 Zaragoza Spain"
                }
            ],
            "duration": 0,
            "start": "2023-04-29T19:30:00Z",
            "end": "2023-04-29T19:30:00Z",
            "updated": "2023-02-01T21:19:22Z",
            "first_seen": "2023-02-01T21:19:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.88239,
                41.65523
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.88239,
                        41.65523
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-6p5-6ff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3104323",
                    "6362983",
                    "3104324"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HwX2RYodtEqgrkox4X",
            "title": "Tríos de Tríos Fest: Flaw Brain + Materia + Q´3",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 49,
            "phq_attendance": 300,
            "entities": [
                {
                    "entity_id": "3AQ5BjdtYkSGCsiR3kS9bRL",
                    "name": "Siroco",
                    "type": "venue",
                    "formatted_address": "28015 Madrid Spain"
                }
            ],
            "duration": 0,
            "start": "2023-04-29T19:00:00Z",
            "end": "2023-04-29T19:00:00Z",
            "updated": "2023-05-05T18:56:43Z",
            "first_seen": "2022-09-13T20:42:18Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7077382,
                40.4268943
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7077382,
                        40.4268943
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cww-4d9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4MhZNyXJcdqoG6yNzx",
            "title": "Devilfest - The Last Edition",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 57,
            "phq_attendance": 537,
            "entities": [
                {
                    "entity_id": "Xex7bizCLQaiu56y3EY7ih",
                    "name": "Mercat Vell",
                    "type": "venue",
                    "formatted_address": "Plaça Prat De La Riba 08100 Mollet del Vallès Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-03-15T04:14:53Z",
            "first_seen": "2023-03-15T03:10:30Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2132771,
                41.5386472
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2132771,
                        41.5386472
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wrj-rx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356154",
                    "3116553"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5LTttY2QS3NgwaUbHF",
            "title": "Punkugat",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 44,
            "local_rank": 62,
            "phq_attendance": 515,
            "entities": [
                {
                    "entity_id": "SiT7geyqVqa9dzjMebPkDV",
                    "name": "Sant Cugat",
                    "type": "venue",
                    "formatted_address": "Sant Cugat del Vallès Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-03-15T04:27:12Z",
            "first_seen": "2023-03-15T03:11:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.0782,
                41.46791
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.0782,
                        41.46791
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-wpg-5vf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356227",
                    "3110718"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5SSsQkZKzsSvMhj4oj",
            "title": "Haze Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 50,
            "phq_attendance": 554,
            "entities": [
                {
                    "entity_id": "SCAZbXvxftsfJidYnDSYWF",
                    "name": "Ceferino",
                    "type": "venue",
                    "formatted_address": "88 Carrer de Pamplona 08018 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-29T23:12:18Z",
            "first_seen": "2022-12-27T20:38:03Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1915097,
                41.3970276
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1915097,
                        41.3970276
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w68-dsq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6bDJsi97yiytUYGQvw",
            "title": "DarkMAD Festival Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 53,
            "local_rank": 62,
            "phq_attendance": 1453,
            "entities": [
                {
                    "entity_id": "37xsW2ULiVnABCdHhV5DEMc",
                    "name": "Autocine",
                    "type": "venue",
                    "formatted_address": "Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-01-24T00:36:46Z",
            "first_seen": "2022-10-24T20:47:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6777766,
                40.4862166
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6777766,
                        40.4862166
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cvv-2kz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735",
                    "3125239"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "73qXHhAgGTtFse96bY",
            "title": "Beach Session Ibiza",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 66,
            "phq_attendance": 616,
            "entities": [
                {
                    "entity_id": "Em8GWeMkTnFcGF9t3cg5ha",
                    "name": "Hotel Garbi",
                    "type": "venue",
                    "formatted_address": "Carrer de la Murtra, 5, San Jorge Ibiza Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-06T23:32:10Z",
            "first_seen": "2023-04-06T23:26:10Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.40822,
                38.89139
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.40822,
                        38.89139
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mw6-vcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356036",
                    "6544336"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7bEFEL3Pm32L6nnENX",
            "title": "Vid Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 61,
            "phq_attendance": 702,
            "entities": [
                {
                    "entity_id": "KSdckcj3g9xHsNtThe5CJX",
                    "name": "Auditorio Municipal de Daimiel",
                    "type": "venue",
                    "formatted_address": "Recinto Ferial, s/n 13002 Ciudad Real Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-13T23:31:44Z",
            "first_seen": "2023-04-03T23:12:52Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.94296,
                38.98045
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.94296,
                        38.98045
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-smf-d9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2519401",
                    "6357128",
                    "2519402"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7pJ4VNVdKQen2wSngK",
            "title": "Club Sonidos Sumergidos",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 59,
            "phq_attendance": 454,
            "entities": [
                {
                    "entity_id": "yLpaWjjyZYuQkBAkMgCSkk",
                    "name": "Café Concierto Boogaloo",
                    "type": "venue",
                    "formatted_address": "10 Avenida de Hernán Cortés 10004 Cáceres Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-03-26T23:22:01Z",
            "first_seen": "2023-03-26T23:21:35Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.378679,
                39.474266
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.378679,
                        39.474266
                    ],
                    "type": "Point"
                },
                "placekey": "@7d8-wnv-6hq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593112",
                    "2520610",
                    "6356734",
                    "7266439"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593112",
                    "2520610",
                    "6356734",
                    "2520611"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8u2DWF4CknVyD7G3Kz",
            "title": "CANCELA FEST",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 73,
            "phq_attendance": 2690,
            "entities": [
                {
                    "entity_id": "PbwVCzachCss2FjfZ4VmQS",
                    "name": "ESPACIO LA JÁBEGA",
                    "type": "venue",
                    "formatted_address": "C/Alcalde Gómez de la Riva 11, Málaga. 29006 Málaga Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-04-30T23:26:29Z",
            "first_seen": "2023-03-20T23:31:07Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.48188,
                36.70984
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.48188,
                        36.70984
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnx-wff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6559644"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AMnez2A5APvUYzWDrr",
            "title": "Acoustic Vell",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 64,
            "phq_attendance": 788,
            "entities": [
                {
                    "entity_id": "u4jHF4VqS867FSXvwnGtVr",
                    "name": "Centre Cívic Barri Vell-Mercadal",
                    "type": "venue",
                    "formatted_address": "Cort Reial 16 17004 Girona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-06T23:21:41Z",
            "first_seen": "2023-04-06T23:16:29Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.8250821,
                41.9850326
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.8250821,
                        41.9850326
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-8xb-mzf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BJJzSw2h3Peejg7YjL",
            "title": "Vinarock Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 64,
            "phq_attendance": 612,
            "entities": [
                {
                    "entity_id": "nwBCwuGDSUGixP8dJSWPMv",
                    "name": "Viñarock",
                    "type": "venue",
                    "formatted_address": "Villarrobledo Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-22T23:45:22Z",
            "first_seen": "2023-04-22T23:27:23Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.6130939,
                39.2719325
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.6130939,
                        39.2719325
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-4v3-85f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355371",
                    "2509491"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CY9dxpSU6HGoSEzzg2",
            "title": "Warm Up festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 65,
            "phq_attendance": 1002,
            "entities": [
                {
                    "entity_id": "bqEEgEK9MfiQQxXWYVYLCE",
                    "name": "FICA Murcia",
                    "type": "venue",
                    "formatted_address": "Murcia Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-05-10T01:01:33Z",
            "first_seen": "2022-09-27T21:01:06Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1122807,
                37.9837875
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1122807,
                        37.9837875
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2ff-5xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "8740718"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "dchFqrSV9ui8JMXbXF",
            "title": "Sons de Ánkar",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 46,
            "local_rank": 70,
            "phq_attendance": 602,
            "entities": [
                {
                    "entity_id": "gf4r6gb9ujt52NLZgrMGf5",
                    "name": "Parque de Ánkar. Poio",
                    "type": "venue",
                    "formatted_address": "Poio Pontevedra Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-28T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-13T23:42:07Z",
            "first_seen": "2023-04-13T23:31:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.65747,
                42.43416
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.65747,
                        42.43416
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-yfr-c3q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360240",
                    "3113036"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3113208",
                    "6360237",
                    "3113209"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5o9eJaacJfnev7Hq5H",
            "title": "INFINITY FESTIVAL 2023",
            "description": "The Best & Biggest Gay Spring Break in Torremolinos (Spain) Meet thousands of boys from all Europe...!",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 60,
            "phq_attendance": 710,
            "entities": [],
            "duration": 320400,
            "start": "2023-04-28T12:00:00Z",
            "end": "2023-05-02T05:00:00Z",
            "updated": "2022-12-27T05:50:38Z",
            "first_seen": "2022-12-06T17:17:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.4994767,
                36.6225541
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.4994767,
                        36.6225541
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-j2x-d9z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359505",
                    "2510281"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6FUzbYpDuxXHaJ7ozu",
            "title": "Tonspiel - IMS Showcase",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 68,
            "phq_attendance": 759,
            "entities": [
                {
                    "entity_id": "Em8GWeMkTnFcGF9t3cg5ha",
                    "name": "Hotel Garbi",
                    "type": "venue",
                    "formatted_address": "Carrer de la Murtra, 5, San Jorge Ibiza Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-04-24T23:31:32Z",
            "first_seen": "2023-04-24T23:24:37Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.40822,
                38.89139
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.40822,
                        38.89139
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mw6-vcq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356036",
                    "6544336"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7LSVHzrGewXEqQeMdX",
            "title": "Solazo Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 73,
            "phq_attendance": 2989,
            "entities": [
                {
                    "entity_id": "35paH7ycwRpQShtexA4222G",
                    "name": "Recinto Ferial De Almería",
                    "type": "venue",
                    "formatted_address": "04007 Almería Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-04-03T23:59:26Z",
            "first_seen": "2023-04-03T23:16:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.4357,
                36.82709
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.4357,
                        36.82709
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-p66-2p9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2518396"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "7VKPYLp2Su2SuVA8mB",
            "title": "WELCOME - WARM UP 2023",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 61,
            "phq_attendance": 723,
            "entities": [
                {
                    "entity_id": "babxVzpBLjSxZ5vWpX75WV",
                    "name": "Recinto Ferial La Fica",
                    "type": "venue",
                    "formatted_address": "Avenida del Primero de Mayo 30003 Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-05-09T18:26:26Z",
            "first_seen": "2022-12-16T21:27:02Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.11571,
                37.9868
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.11571,
                        37.9868
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2ff-49z"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "88dpXQLQKfroNRw5pj",
            "title": "W:O:A Metal Battle Spain Semifinal Sur",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 49,
            "phq_attendance": 250,
            "entities": [
                {
                    "entity_id": "ZtepUavyXef4B3g5xa7ad7",
                    "name": "Sala Even",
                    "type": "venue",
                    "formatted_address": "5 Calle José Díaz 41009 Sevilla Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-10T23:09:48Z",
            "first_seen": "2023-04-10T23:09:25Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.9897733,
                37.4086489
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.9897733,
                        37.4086489
                    ],
                    "type": "Point"
                },
                "placekey": "@7dj-rq8-yn5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361036",
                    "2511364"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BnknHXcTW2sdaUWFbn",
            "title": "Warm Up Festival at Recinto Ferial De La Fica",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 53,
            "local_rank": 69,
            "phq_attendance": 1471,
            "entities": [
                {
                    "entity_id": "qSQZCpqWp4xy3decx5zjVc",
                    "name": "Recinto Ferial de la Fica",
                    "type": "venue",
                    "formatted_address": "30003 Murcia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-05-08T02:31:54Z",
            "first_seen": "2023-04-17T21:35:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1102911,
                37.9836716
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1102911,
                        37.9836716
                    ],
                    "type": "Point"
                },
                "placekey": "@7b4-2ff-f9f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "8740718"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2513413",
                    "6355234",
                    "6362997",
                    "2513416"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CRvNipzLTq6uEJAtP2",
            "title": "Mojo Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 63,
            "phq_attendance": 830,
            "entities": [
                {
                    "entity_id": "7t6ikUBMg3hEpF25AXCLjs",
                    "name": "Mojo Club",
                    "type": "venue",
                    "formatted_address": "Tarragona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-02-17T21:18:35Z",
            "first_seen": "2023-02-17T21:18:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.252204,
                41.1094551
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.252204,
                        41.1094551
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-grn-ch5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FG8fiu7fY59m79bFN2",
            "title": "Unerfest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 64,
            "phq_attendance": 1816,
            "entities": [
                {
                    "entity_id": "35ZBbKHigpKCWXnkCMCwxJb",
                    "name": "Sala Silikona",
                    "type": "venue",
                    "formatted_address": "1 Plaza del Encuentro 28030 Madrid Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-04-03T23:58:01Z",
            "first_seen": "2023-04-03T23:14:33Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.6523348,
                40.405801
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.6523348,
                        40.405801
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cfk-q2k"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "FkMGXPwnJ62ZSU2BsC",
            "title": "Las Noches del Buenavista",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 52,
            "phq_attendance": 385,
            "entities": [
                {
                    "entity_id": "n7bSGdDxDD9H6Q4pgyeGqD",
                    "name": "Madrid Museo Lazaro Galdiano",
                    "type": "venue",
                    "formatted_address": "Calle Serrano 12# 28001 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-04-22T01:59:17Z",
            "first_seen": "2023-04-22T00:45:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.68816,
                40.42215
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.68816,
                        40.42215
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-mff"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "Q8eGVEwPSpkreb8THF",
            "title": "Viña Rock",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 60,
            "local_rank": 79,
            "phq_attendance": 3320,
            "entities": [
                {
                    "entity_id": "ak2ehP8icNWGMAnFQzFJ2D",
                    "name": "Recinto Ferial Villarrobledo",
                    "type": "venue",
                    "formatted_address": "Plaza Pintor García Calero, s/n. Villarrobledo. Albacete 02600 Villarrobledo Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-27T22:00:00Z",
            "end": "2023-04-30T21:59:59Z",
            "updated": "2023-03-15T04:59:36Z",
            "first_seen": "2023-03-15T03:12:00Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.60679,
                39.27389
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.60679,
                        39.27389
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-4v2-5vf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355371",
                    "2509491"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DACdj56NU6iN6yFihh",
            "title": "Unum Festival Launch Party",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 47,
            "local_rank": 61,
            "phq_attendance": 700,
            "entities": [
                {
                    "entity_id": "Azf9xjfhPaLwLF2Q5Ywg4x",
                    "name": "Club Chinois",
                    "type": "venue",
                    "formatted_address": "Passeig Joan Carles I, 17 Ibiza Spain"
                }
            ],
            "duration": 21660,
            "start": "2023-04-27T21:59:00Z",
            "end": "2023-04-28T04:00:00Z",
            "updated": "2023-04-13T06:34:46Z",
            "first_seen": "2023-04-13T06:34:08Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.44185,
                38.91671
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.44185,
                        38.91671
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mwp-9xq"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356034",
                    "6692442"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5pyo8usJLmUXdvHwHw",
            "title": "Sonomav",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 49,
            "phq_attendance": 465,
            "entities": [
                {
                    "entity_id": "rRcxrmLhqeZbKUad8TPGzM",
                    "name": "EMAV",
                    "type": "venue",
                    "formatted_address": "Gran via de les Corts Catalanes, 173-175 08014 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-26T22:00:00Z",
            "end": "2023-04-27T21:59:59Z",
            "updated": "2023-04-18T00:06:19Z",
            "first_seen": "2023-04-17T22:39:22Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.13831,
                41.36756
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.13831,
                        41.36756
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6y-d7q"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "9utM6J5uYw8SmiiEPs",
            "title": "II Jornadas de Ciberseguridad",
            "description": "II Jornadas de Ciberesguridad",
            "category": "festivals",
            "labels": [
                "education",
                "family",
                "festival"
            ],
            "rank": 41,
            "local_rank": 57,
            "phq_attendance": 358,
            "entities": [],
            "duration": 3600,
            "start": "2023-04-26T07:00:00Z",
            "end": "2023-04-26T08:00:00Z",
            "updated": "2023-04-29T13:09:23Z",
            "first_seen": "2023-04-29T13:08:48Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.118639999999999,
                36.684963
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.118639999999999,
                        36.684963
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8dz-nkf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356935",
                    "2516326"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "E3rxKx2JWbSovFhPWQ",
            "title": "International Music Summit",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 60,
            "phq_attendance": 300,
            "entities": [
                {
                    "entity_id": "4m3nHLtARqM7RL3YA7mYyM",
                    "name": "Destino Pacha Ibiza Resort",
                    "type": "venue",
                    "formatted_address": "Carretera a Cap Martinent S-18 Ibiza Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-25T22:00:00Z",
            "end": "2023-04-28T21:59:59Z",
            "updated": "2023-03-24T23:59:47Z",
            "first_seen": "2023-03-24T23:59:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.450121,
                38.931024
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.450121,
                        38.931024
                    ],
                    "type": "Point"
                },
                "placekey": "@7f3-mmh-7wk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6356034",
                    "6691965"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3FrijGf2yQPdLpAh9d",
            "title": "PAJANE @ ABROAD FEST BARCELONA",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 48,
            "phq_attendance": 420,
            "entities": [
                {
                    "entity_id": "xhhn3qW48ytKEEDY9F4769",
                    "name": "Shôko Barcelona",
                    "type": "venue",
                    "formatted_address": "Passeig Maritim, 36 08005 Barcelona Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-23T22:00:00Z",
            "end": "2023-04-24T21:59:59Z",
            "updated": "2023-04-10T23:02:20Z",
            "first_seen": "2023-04-10T23:01:53Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.2021,
                41.39113
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.2021,
                        41.39113
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5w-xdv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "G8sBtGkfKEPNTDvGc3",
            "title": "Piano City Madrid",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 53,
            "phq_attendance": 442,
            "entities": [
                {
                    "entity_id": "KZv4Fxc7bRFPAMY4AeVBSi",
                    "name": "spazio culturale Serrería Belga",
                    "type": "venue",
                    "formatted_address": "Calle Alameda número 15 28014 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-22T22:00:00Z",
            "end": "2023-04-23T21:59:59Z",
            "updated": "2023-04-19T22:28:54Z",
            "first_seen": "2023-02-16T20:48:29Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.69358,
                40.41052
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.69358,
                        40.41052
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-xkf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "GdhHLxabSAeyMuymfN",
            "title": "Feria de Abril in Sevilla",
            "description": "Light, colour, and a lot of joy. Every year, Sevilla is taken over by its 'Feria de Abril', the fair of all fairs, a microcosm where the idiosyncrasy of the city unfolds with all its charm and power of seduction",
            "category": "festivals",
            "labels": [
                "family",
                "festival",
                "religion",
                "social"
            ],
            "rank": 100,
            "local_rank": 100,
            "phq_attendance": 5000000,
            "entities": [
                {
                    "entity_id": "aSj3iwpNGzSDNjfkPNvAed",
                    "name": "Feria Abril Sevilla",
                    "type": "event-group",
                    "formatted_address": "41003 Sevilla Spain",
                    "category": "festivals",
                    "labels": [
                        "event-group",
                        "festival",
                        "recurring"
                    ],
                    "recurring": {
                        "ical": "DTSTART;VALUE=DATE-TIME:20210418T000000 RRULE:FREQ=YEARLY;INTERVAL=1"
                    }
                }
            ],
            "duration": 604799,
            "start": "2023-04-22T22:00:00Z",
            "end": "2023-04-29T21:59:59Z",
            "updated": "2023-02-01T19:01:10Z",
            "first_seen": "2022-09-01T17:41:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.0081457501914235,
                37.371218198623374
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        [
                            [
                                -6.0042834,
                                37.3689335
                            ],
                            [
                                -6.004144,
                                37.3713635
                            ],
                            [
                                -6.0091758,
                                37.3738703
                            ],
                            [
                                -6.0133493,
                                37.3706729
                            ],
                            [
                                -6.0042834,
                                37.3689335
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2515252"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2510910",
                    "6361046",
                    "2510911"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CZiLMW7ZYEZXjSnVym",
            "title": "SEGUNDO FESTIVAL DE POESÍA EDICIONES VITRUVIO EN SANT JORDI",
            "description": "Barcelona acoge el Segundo festival de Poesía `` Ediciones Vitruvio en Sant Jordi´",
            "category": "festivals",
            "labels": [
                "festival",
                "performing-arts"
            ],
            "rank": 37,
            "local_rank": 40,
            "phq_attendance": 213,
            "entities": [],
            "duration": 7200,
            "start": "2023-04-22T16:00:00Z",
            "end": "2023-04-22T18:00:00Z",
            "updated": "2023-04-21T05:01:21Z",
            "first_seen": "2023-04-21T05:00:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.132542,
                41.3867839
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.132542,
                        41.3867839
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5m-hbk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ARGpUk3yS92zUtUhTB",
            "title": "SOUNDMATE31 FERIA ABRIL // 12H FESTIVAL",
            "description": "",
            "category": "festivals",
            "labels": [
                "concert",
                "festival",
                "music"
            ],
            "rank": 42,
            "local_rank": 49,
            "phq_attendance": 400,
            "entities": [
                {
                    "entity_id": "UJQvLwBHUmBDthyvYrANGH",
                    "name": "Atlantic Barcelona",
                    "type": "venue",
                    "formatted_address": "Aveninguda Tibidabo, 56 Sarrià - Sant Gervasi 08035 Barcelona Spain"
                }
            ],
            "duration": 46800,
            "start": "2023-04-22T15:00:00Z",
            "end": "2023-04-23T04:00:00Z",
            "updated": "2023-05-15T01:37:44Z",
            "first_seen": "2023-04-12T21:57:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.13104564,
                41.4154462024
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.13104564,
                        41.4154462024
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5p-qs5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "ChNabDstCdYQYukZWy",
            "title": "Infierno Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 40,
            "local_rank": 64,
            "phq_attendance": 306,
            "entities": [
                {
                    "entity_id": "4BHUs3Gk4C3SfPKu8XgthT",
                    "name": "Complejo Embrujo",
                    "type": "venue",
                    "formatted_address": "Granada Spain"
                }
            ],
            "duration": 0,
            "start": "2023-04-22T13:00:00Z",
            "end": "2023-04-22T13:00:00Z",
            "updated": "2023-04-15T14:11:58Z",
            "first_seen": "2022-11-23T21:03:16Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7070513,
                37.1184133
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7070513,
                        37.1184133
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-szp-xwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357650",
                    "2514265"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HCwUUrxgSr9LTEyDHo",
            "title": "Jazztronica",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 35,
            "local_rank": 41,
            "phq_attendance": 181,
            "entities": [
                {
                    "entity_id": "u8FBXj2Rus9LtdXrgtGjHM",
                    "name": "Cem La Mar Bella",
                    "type": "venue",
                    "formatted_address": "Avinguda Del Litoral 08005 Barcelona Spain"
                }
            ],
            "duration": 0,
            "start": "2023-04-22T10:00:00Z",
            "end": "2023-04-22T10:00:00Z",
            "updated": "2023-04-29T12:04:54Z",
            "first_seen": "2022-12-30T20:37:45Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.19755,
                41.38832
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.19755,
                        41.38832
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w5w-y35"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "dPtrFuFsCqUiRCwZ6Y",
            "title": "Pura Vida Festival Spring Edition",
            "description": "PURA VIDA Festival is a celebration of holistic well-being that will elevate your mind, body, and soul. April 22-23, 2023, Puerto de la Cruz",
            "category": "festivals",
            "labels": [
                "festival",
                "health"
            ],
            "rank": 44,
            "local_rank": 55,
            "phq_attendance": 490,
            "entities": [],
            "duration": 129600,
            "start": "2023-04-22T10:00:00Z",
            "end": "2023-04-23T22:00:00Z",
            "updated": "2023-04-16T02:53:05Z",
            "first_seen": "2023-04-16T02:30:57Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -16.5543814,
                28.4067526
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -16.5543814,
                        28.4067526
                    ],
                    "type": "Point"
                },
                "placekey": "@6y9-qzj-99f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2511173",
                    "6360634",
                    "2512196"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2511173",
                    "6360638",
                    "2511174"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4sk8ztDM8JxKGNVMWG",
            "title": "RetroPixel Málaga 2023",
            "description": "RetroPixel Málaga es una actividad orientada para toda la familia, cultural, solidaria y completamente gratuita",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 52,
            "local_rank": 64,
            "phq_attendance": 1233,
            "entities": [],
            "duration": 118800,
            "start": "2023-04-22T09:00:00Z",
            "end": "2023-04-23T18:00:00Z",
            "updated": "2023-04-27T14:40:09Z",
            "first_seen": "2023-04-27T14:39:50Z",
            "timezone": "Europe/Madrid",
            "location": [
                -4.469633099999999,
                36.7183726
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -4.469633099999999,
                        36.7183726
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-wnv-f4v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "6559644"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2514254",
                    "6359472",
                    "2514256"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HKnkh9xNY9K9YVfumy",
            "title": "School Maker Faire - El Altillo International School",
            "description": "¿Te gusta crear? ¡No te pierdas nuestra School Maker Faire! ¡El 22 de abril te esperamos con talleres, proyectos y mucha diversión!",
            "category": "festivals",
            "labels": [
                "festival",
                "science",
                "technology"
            ],
            "rank": 47,
            "local_rank": 64,
            "phq_attendance": 721,
            "entities": [],
            "duration": 18000,
            "start": "2023-04-22T09:00:00Z",
            "end": "2023-04-22T14:00:00Z",
            "updated": "2023-04-27T19:24:35Z",
            "first_seen": "2023-04-27T19:24:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.1229364,
                36.7052704
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.1229364,
                        36.7052704
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-8f7-gtv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356935",
                    "2520881"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DZBg4ZjyUAaDCua6M9",
            "title": "Curolla Market and Vegan Brunch",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "food"
            ],
            "rank": 35,
            "local_rank": 59,
            "phq_attendance": 180,
            "entities": [],
            "duration": 3600,
            "start": "2023-04-22T08:30:00Z",
            "end": "2023-04-22T09:30:00Z",
            "updated": "2023-04-13T22:03:27Z",
            "first_seen": "2023-04-13T22:01:49Z",
            "timezone": "Europe/Madrid",
            "location": [
                3.0754298,
                39.6691475
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        3.0754298,
                        39.6691475
                    ],
                    "type": "Point"
                },
                "placekey": "@7f6-mws-mkz"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533956",
                    "2514134"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2521383",
                    "6424360",
                    "6533961",
                    "2512989"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DDXdojq4QBbG6Pku3N",
            "title": "IBR SHOW BARCELONA 2023 - BEST BULLY SHOW IN EUROPE",
            "description": "BEST BULLY SHOW IN EUROPE",
            "category": "festivals",
            "labels": [
                "festival"
            ],
            "rank": 40,
            "local_rank": 59,
            "phq_attendance": 328,
            "entities": [],
            "duration": 32400,
            "start": "2023-04-22T08:00:00Z",
            "end": "2023-04-22T17:00:00Z",
            "updated": "2023-03-27T01:47:43Z",
            "first_seen": "2023-03-27T01:47:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.1294278,
                41.1429503
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.1294278,
                        41.1429503
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-hj4-4jv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361365",
                    "3111933"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361390",
                    "3108288"
                ]
            ],
            "state": "active",
            "brand_safe": false,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4vSGmgwafL2auLVENf",
            "title": "Cyberian Technoclub",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 38,
            "local_rank": 43,
            "phq_attendance": 256,
            "entities": [
                {
                    "entity_id": "y7yiFAitdy6LAMT9zDjhmA",
                    "name": "The Garage",
                    "type": "venue",
                    "formatted_address": "Passatge Can Politic 13 08907 L'Hospitalet de Llobregat Spain"
                }
            ],
            "duration": 0,
            "start": "2023-04-21T22:30:00Z",
            "end": "2023-04-21T22:30:00Z",
            "updated": "2023-03-17T22:57:10Z",
            "first_seen": "2023-03-17T22:56:58Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.1071029,
                41.3543464
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.1071029,
                        41.3543464
                    ],
                    "type": "Point"
                },
                "placekey": "@7dx-w6d-8d9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356131",
                    "3120619"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3128759",
                    "6356055",
                    "3128760"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "3rnfpiwTV82kXpzxuo",
            "title": "Distrito Sonoro",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 70,
            "phq_attendance": 2741,
            "entities": [],
            "duration": 2505599,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-05-20T21:59:59Z",
            "updated": "2023-04-21T22:27:25Z",
            "first_seen": "2023-04-13T23:39:46Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.58877,
                37.1792
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.58877,
                        37.1792
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-z2r-cwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5ro4RKwYfncUQCRKHi",
            "title": "Cruïlla DO Terra Alta",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 59,
            "local_rank": 89,
            "phq_attendance": 2729,
            "entities": [
                {
                    "entity_id": "ThMWj92Zp3EiLrCzq5QjUY",
                    "name": "Camp de Futbol de Batea",
                    "type": "venue",
                    "formatted_address": "Tarragona Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-04-23T21:59:59Z",
            "updated": "2023-01-31T21:58:48Z",
            "first_seen": "2023-01-31T21:54:52Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.28079,
                41.09952
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.28079,
                        41.09952
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-dcw-nwk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "3108287",
                    "6361265",
                    "3128482"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8K5oT6DpKr2iXpKtSY",
            "title": "Hortizó País Valencià",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 45,
            "local_rank": 52,
            "phq_attendance": 538,
            "entities": [
                {
                    "entity_id": "teY8J9m8XayXSa2unyD2Jy",
                    "name": "Plaça de Bous",
                    "type": "venue",
                    "formatted_address": "Valencia Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-04-22T21:59:59Z",
            "updated": "2023-02-11T22:14:15Z",
            "first_seen": "2022-12-19T21:04:57Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.3761198,
                39.4666255
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.3761198,
                        39.4666255
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-8bm-nt9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362115",
                    "2509954"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8cmwL9RkkmghMqbgnE",
            "title": "Lo Closcamoll",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 49,
            "local_rank": 71,
            "phq_attendance": 923,
            "entities": [
                {
                    "entity_id": "3AV2HTdGYTe5HMZiT8rumMZ",
                    "name": "Escola Angel Guimerà",
                    "type": "venue",
                    "formatted_address": "Carrer de l'Arquitecte Florensa, 24, 25300 Tàrrega, Lleida 25300 Tàrrega Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-04-22T21:59:59Z",
            "updated": "2023-03-04T21:46:30Z",
            "first_seen": "2023-03-04T21:33:11Z",
            "timezone": "Europe/Madrid",
            "location": [
                1.14184,
                41.65421
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        1.14184,
                        41.65421
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-ctv-x89"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355231",
                    "6358945",
                    "3108285"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355231",
                    "6358863",
                    "3118514"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "AqJ9Q4kHEhNYCexYWt",
            "title": "Festival IsTmo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 41,
            "local_rank": 53,
            "phq_attendance": 338,
            "entities": [
                {
                    "entity_id": "3BtFtbEmKkXL9xBB9JQUwP5",
                    "name": "Parque de Santa Margarida",
                    "type": "venue",
                    "formatted_address": "Parque de Santa Margarita, S/N La Coruna Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-04-22T21:59:59Z",
            "updated": "2023-04-20T02:58:15Z",
            "first_seen": "2023-04-20T01:59:24Z",
            "timezone": "Europe/Madrid",
            "location": [
                -8.41247,
                43.36163
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -8.41247,
                        43.36163
                    ],
                    "type": "Point"
                },
                "placekey": "@7dn-cs9-249"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336902",
                    "3119840",
                    "6357275",
                    "3104580"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "DuRSjns4jgoTcSeAgw",
            "title": "Thrashtornats Metal Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 62,
            "phq_attendance": 789,
            "entities": [
                {
                    "entity_id": "9jhje4UfAZy3iYrRUVZZrP",
                    "name": "Cafe del Teatre",
                    "type": "venue",
                    "formatted_address": "Carrer de Roca Labrador, 4 bis 25003 Lleida Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-21T22:00:00Z",
            "end": "2023-04-22T21:59:59Z",
            "updated": "2023-04-14T22:07:56Z",
            "first_seen": "2023-02-03T21:17:15Z",
            "timezone": "Europe/Madrid",
            "location": [
                0.620015,
                41.6176
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        0.620015,
                        41.6176
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-b66-rx5"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355231",
                    "6358863",
                    "3118514"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "89d8gm4AGLCrXfAdQM",
            "title": "Earth Week",
            "description": "Earth Week is a platform for thinkers and doers from around the world to come together and start reconnecting to the Earth.",
            "category": "festivals",
            "labels": [
                "festival",
                "fundraiser"
            ],
            "rank": 40,
            "local_rank": 64,
            "phq_attendance": 331,
            "entities": [],
            "duration": 651600,
            "start": "2023-04-21T07:00:00Z",
            "end": "2023-04-28T20:00:00Z",
            "updated": "2023-04-20T05:54:08Z",
            "first_seen": "2023-04-20T05:53:28Z",
            "timezone": "Atlantic/Canary",
            "location": [
                -16.7802309,
                28.3570248
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -16.7802309,
                        28.3570248
                    ],
                    "type": "Point"
                },
                "placekey": "@6y6-h7q-qvf"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593110",
                    "2511173",
                    "6360644",
                    "2519073"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "47vZ9BnFypJERouRkR",
            "title": "Festival Música i Lletra",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 57,
            "local_rank": 75,
            "phq_attendance": 2282,
            "entities": [
                {
                    "entity_id": "38aqR7Mf2Lw5KrMedViCdxi",
                    "name": "Gran Teatre de Xàtiva",
                    "type": "venue",
                    "formatted_address": "C/ Acadèmic Maravall, 8 Valencia Spain"
                }
            ],
            "duration": 4492799,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-06-11T21:59:59Z",
            "updated": "2023-04-06T23:50:05Z",
            "first_seen": "2023-04-06T23:44:26Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.51772,
                38.9911
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.51772,
                        38.9911
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-z67-dy9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2509951",
                    "6362010",
                    "2516345"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5hszYosbvZ7ffwRGwb",
            "title": "Homosapiens Fest XV",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 48,
            "local_rank": 59,
            "phq_attendance": 794,
            "entities": [
                {
                    "entity_id": "LHMdkqV9qSuRjS8RPRDkba",
                    "name": "Auditorio Manuel De Falla",
                    "type": "venue",
                    "formatted_address": "Paseo De Los Mártires, S/n 18009 Granada Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-21T21:59:59Z",
            "updated": "2023-03-26T23:20:27Z",
            "first_seen": "2023-03-26T23:20:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.58989,
                37.17421
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.58989,
                        37.17421
                    ],
                    "type": "Point"
                },
                "placekey": "@7dh-z2r-qmk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2517115",
                    "6357709",
                    "2517117"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5vFxkRcFs6P7RLUwdZ",
            "title": "Gijon Sound Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 78,
            "phq_attendance": 3924,
            "entities": [
                {
                    "entity_id": "n95MifJ6MKvBCB4wXgVR7n",
                    "name": "Festival Gijón Sound",
                    "type": "venue",
                    "formatted_address": "Jovellanos, 21 33201 Gijón Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-23T21:59:59Z",
            "updated": "2023-03-15T03:28:35Z",
            "first_seen": "2023-03-15T03:15:34Z",
            "timezone": "Europe/Madrid",
            "location": [
                -5.66221,
                43.54147
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -5.66221,
                        43.54147
                    ],
                    "type": "Point"
                },
                "placekey": "@4f5-f2w-54v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359929",
                    "3121424"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3114710",
                    "6355236",
                    "6359947",
                    "3114711"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "5xrvF9kNBGtgt2B5Nr",
            "title": "San Marcos en Vivo",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 61,
            "local_rank": 84,
            "phq_attendance": 3459,
            "entities": [
                {
                    "entity_id": "UKC8XNGEQkabXzKe8jrjET",
                    "name": "Pabellon Deportivo de El Ejido",
                    "type": "venue",
                    "formatted_address": "Calle Toledo, 160 04700 El Ejido Spain"
                }
            ],
            "duration": 172799,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-22T21:59:59Z",
            "updated": "2023-04-19T22:46:29Z",
            "first_seen": "2023-03-15T03:10:31Z",
            "timezone": "Europe/Madrid",
            "location": [
                -2.810424,
                36.7703408
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -2.810424,
                        36.7703408
                    ],
                    "type": "Point"
                },
                "placekey": "@7b3-nk4-gtv"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2518494"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2521883",
                    "6355530",
                    "2521886"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "6BjMRVBPLudVhnRz2M",
            "title": "Fogueres Fest",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 74,
            "local_rank": 89,
            "phq_attendance": 15000,
            "entities": [
                {
                    "entity_id": "mWWaAbQ4Lu7zxFdDU4ukjH",
                    "name": "Plaza de toros de Alicante",
                    "type": "venue",
                    "formatted_address": "7 Plaça d'Espanya 03010 Alacant Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-21T21:59:59Z",
            "updated": "2023-03-05T21:28:14Z",
            "first_seen": "2023-03-05T21:27:59Z",
            "timezone": "Europe/Madrid",
            "location": [
                -0.4845538,
                38.3525832
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -0.4845538,
                        38.3525832
                    ],
                    "type": "Point"
                },
                "placekey": "@7f4-vcc-7t9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593113",
                    "2521976",
                    "6355390",
                    "2521978"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "8dvXPmnznbwQv42EXy",
            "title": "Festival Strenes",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 55,
            "local_rank": 73,
            "phq_attendance": 1800,
            "entities": [
                {
                    "entity_id": "6nLedRCk5wPVUpstjb7i6V",
                    "name": "Sala La Mirona",
                    "type": "venue",
                    "formatted_address": "Carrer d'Amnistia Internacional 17190 Salt Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-21T21:59:59Z",
            "updated": "2022-12-13T21:07:14Z",
            "first_seen": "2022-12-13T21:04:13Z",
            "timezone": "Europe/Madrid",
            "location": [
                2.773607,
                41.968247
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        2.773607,
                        41.968247
                    ],
                    "type": "Point"
                },
                "placekey": "@7dy-96x-g8v"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534018",
                    "3116292"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336901",
                    "6355230",
                    "6534067",
                    "3121456"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "BUB63nmSAS4bMFSVXh",
            "title": "BANG! Festival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 75,
            "phq_attendance": 4078,
            "entities": [
                {
                    "entity_id": "3BNy535DQmeSMCDwPAuYMaS",
                    "name": "Recinto Ferial de Albacete ITAP",
                    "type": "venue",
                    "formatted_address": "Albacete Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-23T21:59:59Z",
            "updated": "2023-01-23T21:13:19Z",
            "first_seen": "2023-01-23T21:12:56Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.8683332,
                38.9969366
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.8683332,
                        38.9969366
                    ],
                    "type": "Point"
                },
                "placekey": "@7dc-fhf-3bk"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593111",
                    "2522257",
                    "6355295",
                    "2522258"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "HCLFCGgbP42bjNnzuW",
            "title": "Trebufestival",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 62,
            "local_rank": 90,
            "phq_attendance": 3885,
            "entities": [
                {
                    "entity_id": "PwA6T6uta3cJm2C8mZEyyD",
                    "name": "Trebufestival",
                    "type": "venue",
                    "formatted_address": "Trebujena Cadiz Spain"
                }
            ],
            "duration": 259199,
            "start": "2023-04-20T22:00:00Z",
            "end": "2023-04-23T21:59:59Z",
            "updated": "2023-04-02T23:26:24Z",
            "first_seen": "2023-04-02T23:20:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                -6.172372,
                36.869629
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -6.172372,
                        36.869629
                    ],
                    "type": "Point"
                },
                "placekey": "@7dk-csr-st9"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356952",
                    "2510186"
                ],
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "2593109",
                    "2520597",
                    "6356927",
                    "2520600"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "4FFEzAKxad8ghUeY53",
            "title": "Escenario Dial Teruel",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 50,
            "local_rank": 73,
            "phq_attendance": 1043,
            "entities": [
                {
                    "entity_id": "3BfiNXfRJWrziQhhxq2mKLU",
                    "name": "Teatro Marín",
                    "type": "venue",
                    "formatted_address": "Plaza de San Juan, 2 44001 Teruel Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-19T22:00:00Z",
            "end": "2023-04-20T21:59:59Z",
            "updated": "2023-04-19T21:10:12Z",
            "first_seen": "2023-04-18T23:20:09Z",
            "timezone": "Europe/Madrid",
            "location": [
                -1.1064898,
                40.3410295
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -1.1064898,
                        40.3410295
                    ],
                    "type": "Point"
                },
                "placekey": "@7fd-mdd-99f"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3336899",
                    "3108125",
                    "6361616",
                    "3108126"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        },
        {
            "relevance": 0,
            "id": "CYF2vtF8N27uvW3VCR",
            "title": "Sound Isidro",
            "description": "",
            "category": "festivals",
            "labels": [
                "festival",
                "music"
            ],
            "rank": 43,
            "local_rank": 52,
            "phq_attendance": 425,
            "entities": [
                {
                    "entity_id": "qEMtuCU6JuTSq8X63aLk2u",
                    "name": "El Sol",
                    "type": "venue",
                    "formatted_address": "3 Calle Jardines 28013 Madrid Spain"
                }
            ],
            "duration": 86399,
            "start": "2023-04-19T22:00:00Z",
            "end": "2023-04-20T21:59:59Z",
            "updated": "2023-02-20T20:44:00Z",
            "first_seen": "2023-02-20T20:43:41Z",
            "timezone": "Europe/Madrid",
            "location": [
                -3.7016321,
                40.4190629
            ],
            "geo": {
                "geometry": {
                    "coordinates": [
                        -3.7016321,
                        40.4190629
                    ],
                    "type": "Point"
                },
                "placekey": "@7dd-cwv-b49"
            },
            "scope": "locality",
            "country": "ES",
            "place_hierarchies": [
                [
                    "6295630",
                    "6255148",
                    "2510769",
                    "3117732",
                    "6355233",
                    "6359304",
                    "3117735"
                ]
            ],
            "state": "active",
            "brand_safe": true,
            "private": false
        }
    ]
}

const mappedFests = festsFromAPI.results.map((eachFest) => {

    const { geometry } = eachFest.geo
    const { formatted_address } = eachFest.entities[0] || {}
    const { title, category, start, end } = eachFest

    const obj = {
        title: title,
        category: category,
        start: formatDate(start),
        end: formatDate(end),
        venue: formatted_address,
        location: geometry
    }
    return obj
})

mongoose
    .connect(MONGO_URI)
    .then(x => {
        console.log(`Connected to Mongo database: "${x.connections[0].name}"`)
        return Festival.create(mappedFests)
    })
    .then(festivalsFromDB => {
        console.log(`Created ${festivalsFromDB.length} festivals`)
        return mongoose.connection.close()
    })
    .then(() => {
        console.log('DB connection closed!')
    })
    .catch(err => {
        console.log(`An error occurred while creating festivals from the DB: ${err}`)
    })


// module.exports = festivalsData