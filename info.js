db.info.insertMany (
    [
        {
            institutes: [ 
                {
                    name: "Институт фундаментальных наук",
                    phone: "+9-384-25-83-195",
                    email: "ifn@su.org",
                    departments: [
                        {
                            name: "Кафедра фундаментальной и прикладной химии",
                            phone: "+9-903-94-67-013",
                            email: "polymer@su.org",
                            teachers: [
                                {
                                    last_name: "Кононова",
                                    first_name: "Надежда",
                                    patronymic: "Леонидовна",
                                    sex: "f",
                                    birth_year: 1970,
                                    age: 52,
                                    salary: 32768,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("2000-10-10T00:00:00Z"),
                                    doctoral_defended: ISODate("2005-02-10T00:00:00Z")
                                },
                                {
                                    last_name: "Панина",
                                    first_name: "Дарья",
                                    patronymic: "Александровна",
                                    sex: "f",
                                    birth_year: 1995,
                                    age: 27,
                                    salary: 16384,
                                    category: "ассистент"
                                },
                                {
                                    last_name: "Никитин",
                                    first_name: "Михаил",
                                    patronymic: "Артёмович",
                                    sex: "m",
                                    birth_year: 1990,
                                    age: 32,
                                    salary: 20480,
                                    category: "преподаватель",
                                    phd_defended: ISODate("2020-03-03T00:00:00Z"),
                                },
                                {
                                    last_name: "Лузгарева",
                                    first_name: "Валентина",
                                    patronymic: "Петровна",
                                    sex: "f",
                                    birth_year: 1965,
                                    age: 57,
                                    salary: 28480,
                                    children_count: 2,
                                    category: "доцент",
                                    phd_defended: ISODate("1995-11-02T00:00:00Z")
                                },
                                {
                                    last_name: "Соколов",
                                    first_name: "Богдан",
                                    patronymic: "Артёмович",
                                    sex: "m",
                                    birth_year: 1970,
                                    age: 52,
                                    salary: 28480,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("1995-02-02T00:00:00Z")
                                },
                                {
                                    last_name: "Громова",
                                    first_name: "Варвара",
                                    patronymic: "Александровна",
                                    sex: "f",
                                    birth_year: 1996,
                                    age: 26,
                                    salary: 16384,
                                    category: "ассистент"
                                },
                                {
                                    last_name: "Долгова",
                                    first_name: "София",
                                    patronymic: "Леонидовна",
                                    sex: "f",
                                    birth_year: 1965,
                                    age: 57,
                                    salary: 26260,
                                    children_count: 3,
                                    category: "доцент",
                                    phd_defended: ISODate("1997-12-01T00:00:00Z")
                                },
                                {
                                    last_name: "Казанцев",
                                    first_name: "Вадим",
                                    patronymic: "Никитич",
                                    sex: "m",
                                    birth_year: 1989,
                                    age: 33,
                                    salary: 21210,
                                    category: "преподаватель",
                                    phd_defended: ISODate("2019-03-04T00:00:00Z"),
                                },
                                {
                                    last_name: "Королёв",
                                    first_name: "Антон",
                                    patronymic: "Арсентьевич",
                                    sex: "m",
                                    birth_year: 1979,
                                    age: 43,
                                    salary: 31210,
                                    category: "старший преподаватель",
                                    phd_defended: ISODate("2009-10-11T00:00:00Z"),
                                },
                                {
                                    last_name: "Сотников",
                                    first_name: "Павел",
                                    patronymic: "Евгеньевич",
                                    sex: "m",
                                    birth_year: 1955,
                                    age: 67,
                                    salary: 46460,
                                    category: "профессор",
                                    phd_defended: ISODate("1989-10-11T00:00:00Z"),
                                    doctoral_defended: ISODate("1995-01-12T00:00:00Z")
                                }
                            ],
                            students: [
                                {
                                    first_name: "Зайцев",
                                    last_name: "Борис",
                                    patronymic: "Дмитриевич",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Химия",
                                    group: 202
                                },
                                {
                                    first_name: "Осипов",
                                    last_name: "Владимир",
                                    patronymic: "Михайлович",
                                    sex: "m", 
                                    birth_year: 2001,
                                    age: 21,
                                    year: 3,
                                    direction: "Химия",
                                    group: 202
                                },
                                {
                                    first_name: "Поляков",
                                    last_name: "Тимур",
                                    patronymic: "Владимирович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Химия",
                                    group: 202,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Петрова",
                                    last_name: "Алиса",
                                    patronymic: "Игоревна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Химия",
                                    group: 202,
                                    expelled: true
                                },
                                {
                                    first_name: "Карпова",
                                    last_name: "София",
                                    patronymic: "Георгиевна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Химия",
                                    group: 202,
                                    expelled: true
                                },
                                {
                                    first_name: "Климов",
                                    last_name: "Руслан",
                                    patronymic: "Егорович",
                                    sex: "m", 
                                    birth_year: 2001,
                                    age: 21,
                                    year: 3,
                                    direction: "Биология",
                                    group: 203
                                },
                                {
                                    first_name: "Капустин",
                                    last_name: "Михаил",
                                    patronymic: "Александрович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Биология",
                                    group: 203
                                },
                                {
                                    first_name: "Дроздов",
                                    last_name: "Захар",
                                    patronymic: "Дмитриевич",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Биология",
                                    group: 203,
                                    scholarship: [
                                        {
                                            reason: "учёба только на пятёрки",
                                            size: 3351
                                        }
                                    ]
                                },
                                {
                                    first_name: "Чесноков",
                                    last_name: "Илья",
                                    patronymic: "Максимович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Биология",
                                    group: 203
                                },
                                {
                                    first_name: "Кузьмина",
                                    last_name: "Ульяна",
                                    patronymic: "Григорьевна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Биология",
                                    group: 203
                                },
                                {
                                    first_name: "Тарасов",
                                    last_name: "Марк",
                                    patronymic: "Эдуардович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Химия",
                                    group: 211
                                },
                                {
                                    first_name: "Медведев",
                                    last_name: "Олег",
                                    patronymic: "Константинович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Химия",
                                    group: 211
                                },
                                {
                                    first_name: "Савельева",
                                    last_name: "Евгения",
                                    patronymic: "Павловна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Химия",
                                    group: 211
                                },
                                {
                                    first_name: "Суворова",
                                    last_name: "Дарья",
                                    patronymic: "Олеговна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Химия",
                                    group: 211
                                },
                                {
                                    first_name: "Романов",
                                    last_name: "Александр",
                                    patronymic: "Игоревич",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Химия",
                                    group: 211
                                },
                                {
                                    first_name: "Койнов",
                                    last_name: "Олег",
                                    patronymic: "Александрович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Биология",
                                    group: 212
                                },
                                {
                                    first_name: "Борисов",
                                    last_name: "Сергей",
                                    patronymic: "Владимирович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Биология",
                                    group: 212,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ]
                                    
                                },
                                {
                                    first_name: "Петров",
                                    last_name: "Денис",
                                    patronymic: "Михайлович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Биология",
                                    group: 212
                                },
                                {
                                    first_name: "Иванов",
                                    last_name: "Дмитрий",
                                    patronymic: "Игоревич",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Биология",
                                    group: 212,
                                    scholarship: [
                                        {
                                            reason: "учёба только на пятёрки",
                                            size: 3351
                                        }
                                    ]
                                },
                                {
                                    first_name: "Калинина",
                                    last_name: "Диана",
                                    patronymic: "Арсеньевна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Биология",
                                    group: 212
                                }
                            ]
                        },
                        {
                            name: "Кафедра общей и экспериментальной физики",
                            phone: "+9-384-25-83-695",
                            email: "dgep@su.org",
                            teachers: [
                                {
                                    last_name: "Денисов",
                                    first_name: "Николай",
                                    patronymic: "Константинович",
                                    sex: "m",
                                    birth_year: 1971,
                                    age: 51,
                                    salary: 32768,
                                    category: "доцент",
                                    phd_defended: ISODate("1999-12-12T00:00:00Z"),
                                    doctoral_defended: ISODate("2005-02-10T00:00:00Z")
                                },
                                {
                                    last_name: "Дягилев",
                                    first_name: "Степан",
                                    patronymic: "Иванович",
                                    sex: "m",
                                    birth_year: 1972,
                                    age: 50,
                                    salary: 30300,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("2001-05-05T00:00:00Z")
                                },
                                {
                                    last_name: "Афанасьев",
                                    first_name: "Тимур",
                                    patronymic: "Артемьевич",
                                    sex: "m",
                                    birth_year: 1978,
                                    age: 44,
                                    salary: 32210,
                                    category: "старший преподаватель",
                                    phd_defended: ISODate("2010-08-14T00:00:00Z")
                                },
                                {
                                    last_name: "Щеглова",
                                    first_name: "Марина",
                                    patronymic: "Максимовна",
                                    sex: "f",
                                    birth_year: 1974,
                                    age: 48,
                                    salary: 29290,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("2003-08-04T00:00:00Z"),
                                    doctoral_defended: ISODate("2010-11-09T00:00:00Z")
                                }
                            ],
                            students: [
                                {
                                    first_name: "Черкасов",
                                    last_name: "Максим",
                                    patronymic: "Артурович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Физика",
                                    group: 202,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Пименова",
                                    last_name: "Марина",
                                    patronymic: "Владимировна",
                                    sex: "f", 
                                    birth_year: 2001,
                                    age: 21,
                                    year: 3,
                                    direction: "Физика",
                                    group: 202
                                },
                                {
                                    first_name: "Никулина",
                                    last_name: "Полина",
                                    patronymic: "Дмитриевна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Физика",
                                    group: 202
                                },
                                {
                                    first_name: "Петров",
                                    last_name: "Константин",
                                    patronymic: "Михайлович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Физика",
                                    group: 202,
                                    expelled: true
                                },
                                {
                                    first_name: "Харламов",
                                    last_name: "Никита",
                                    patronymic: "Егорович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Физика",
                                    group: 202,
                                    expelled: true
                                },
                                {
                                    first_name: "Беляев",
                                    last_name: "Максим",
                                    patronymic: "Артурович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Физика",
                                    group: 211
                                },
                                {
                                    first_name: "Симонова",
                                    last_name: "Марина",
                                    patronymic: "Владимировна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Физика",
                                    group: 211
                                },
                                {
                                    first_name: "Лаврова",
                                    last_name: "Полина",
                                    patronymic: "Дмитриевна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Физика",
                                    group: 211,
                                    scholarship: [
                                        {
                                            reason: "учёба на четвёрки и пятёрки",
                                            size: 2681
                                        }
                                    ]
                                },
                                {
                                    first_name: "Баранов",
                                    last_name: "Дмитрий",
                                    patronymic: "Сергеевич",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Физика",
                                    group: 211
                                },
                                {
                                    first_name: "Шалоумов",
                                    last_name: "Денис",
                                    patronymic: "Дмитриевич",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Физика",
                                    group: 211
                                }
                            ]
                        },
                        {
                            name: "Кафедра фундаментальной математики",
                            teachers: [
                                {
                                    last_name: "Кузнецова",
                                    first_name: "Александра",
                                    patronymic: "Денисовна",
                                    sex: "f",
                                    birth_year: 1985,
                                    age: 37,
                                    salary: 32250,
                                    children_count: 1,
                                    category: "старший преподаватель",
                                    phd_defended: ISODate("2003-04-03T00:00:00Z"),
                                },
                                {
                                    last_name: "Назаров",
                                    first_name: "Василий",
                                    patronymic: "Денисович",
                                    sex: "m",
                                    birth_year: 1994,
                                    age: 28,
                                    salary: 16384,
                                    category: "ассистент"
                                },
                                {
                                    last_name: "Соловьева",
                                    first_name: "Алиса",
                                    patronymic: "Артёмовна",
                                    sex: "f",
                                    birth_year: 1952,
                                    age: 70,
                                    salary: 44210,
                                    category: "профессор",
                                    phd_defended: ISODate("1982-04-02T00:00:00Z"),
                                    doctoral_defended: ISODate("1986-02-11T00:00:00Z")
                                },
                                {
                                    last_name: "Демидович",
                                    first_name: "Надежда",
                                    patronymic: "Викторовна",
                                    sex: "f",
                                    birth_year: 1977,
                                    age: 45,
                                    salary: 36480,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("1995-12-03T00:00:00Z")
                                },
                                {
                                    last_name: "Степанова",
                                    first_name: "Мирослава",
                                    patronymic: "Павловна",
                                    sex: "f",
                                    birth_year: 1951,
                                    age: 71,
                                    salary: 43640,
                                    category: "профессор",
                                    phd_defended: ISODate("1983-03-01T00:00:00Z"),
                                    doctoral_defended: ISODate("1989-07-12T00:00:00Z")
                                },
                                {
                                    last_name: "Кондратьева",
                                    first_name: "Кира",
                                    patronymic: "Константиновна",
                                    sex: "f",
                                    birth_year: 1995,
                                    age: 27,
                                    salary: 14140,
                                    category: "ассистент"
                                },
                                {
                                    last_name: "Большакова",
                                    first_name: "Камила",
                                    patronymic: "Фёдоровна",
                                    sex: "f",
                                    birth_year: 1993,
                                    age: 29,
                                    salary: 17340,
                                    category: "преподаватель",
                                    phd_defended: ISODate("2019-07-07T00:00:00Z")
                                }
                            ],
                            students: [
                                {
                                    first_name: "Булатова",
                                    last_name: "Екатерина",
                                    patronymic: "Григорьевна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математика и компьютерные науки",
                                    group: 201,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Мартынова",
                                    last_name: "Алиса",
                                    patronymic: "Ивановна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математика и компьютерные науки",
                                    group: 201
                                },
                                {
                                    irst_name: "Петров",
                                    last_name: "Тихон",
                                    patronymic: "Платонович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Математика и компьютерные науки",
                                    group: 201
                                },
                                {
                                    first_name: "Орлов",
                                    last_name: "Максим",
                                    patronymic: "Олегович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математика и компьютерные науки",
                                    group: 201
                                },
                                {
                                    first_name: "Чернова",
                                    last_name: "Ева",
                                    patronymic: "Николаевна",
                                    sex: "f", 
                                    birth_year: 2001,
                                    age: 21,
                                    year: 3,
                                    direction: "Математика и компьютерные науки",
                                    group: 201
                                },
                                {
                                    first_name: "Булатова",
                                    last_name: "Екатерина",
                                    patronymic: "Григорьевна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математика и компьютерные науки",
                                    group: 210,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ]
                                    
                                },
                                {
                                    first_name: "Мартынова",
                                    last_name: "Алиса",
                                    patronymic: "Ивановна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Математика и компьютерные науки",
                                    group: 210
                                },
                                {
                                    first_name: "Петров",
                                    last_name: "Тихон",
                                    patronymic: "Платонович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математика и компьютерные науки",
                                    group: 210
                                },
                                {
                                    first_name: "Орлов",
                                    last_name: "Максим",
                                    patronymic: "Олегович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математика и компьютерные науки",
                                    group: 210
                                },
                                {
                                    first_name: "Чернова",
                                    last_name: "Ева",
                                    patronymic: "Николаевна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математика и компьютерные науки",
                                    group: 210
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Институт цифры",
                    phone: "+9-384-25-82-310",
                    email: "i-digit@su.org",
                    departments: [
                        {
                            name: "Кафедра цифровых технологий",
                            email: "zyn@su.org",
                            teachers: [
                                {
                                    last_name: "Одинцов",
                                    first_name: "Павел",
                                    patronymic: "Борисович",
                                    sex: "m",
                                    birth_year: 1973,
                                    age: 49,
                                    salary: 32236,
                                    children_count: 1,
                                    category: "доцент",
                                    phd_defended: ISODate("1999-05-11T00:00:00Z")
                                },
                                {
                                    last_name: "Баранов",
                                    first_name: "Владимир",
                                    patronymic: "Львович",
                                    sex: "m",
                                    birth_year: 1983,
                                    age: 39,
                                    salary: 29635,
                                    category: "старший преподаватель",
                                    phd_defended: ISODate("2010-11-01T00:00:00Z")
                                },
                                {
                                    last_name: "Рыжова",
                                    first_name: "Виктория",
                                    patronymic: "Валерьевна",
                                    sex: "f",
                                    birth_year: 1993,
                                    age: 29,
                                    salary: 21203,
                                    category: "ассистент",
                                },
                                {
                                    last_name: "Васильев",
                                    first_name: "Тимур",
                                    patronymic: "Всеволодович",
                                    sex: "m",
                                    birth_year: 1947,
                                    age: 75,
                                    salary: 41236,
                                    children_count: 3,
                                    category: "профессор",
                                    phd_defended: ISODate("1983-01-09T00:00:00Z"),
                                    doctoral_defended: ISODate("1990-10-03T00:00:00Z")
                                },
                                {
                                    last_name: "Смирнов",
                                    first_name: "Артур",
                                    patronymic: "Романович",
                                    sex: "m",
                                    birth_year: 1977,
                                    age: 45,
                                    salary: 29965,
                                    children_count: 1,
                                    category: "старший преподаватель",
                                    phd_defended: ISODate("2005-02-12T00:00:00Z")
                                },
                                {
                                    last_name: "Мешков",
                                    first_name: "Лев",
                                    patronymic: "Савельевич",
                                    sex: "m",
                                    birth_year: 1985,
                                    age: 37,
                                    salary: 23256,
                                    children_count: 2,
                                    category: "преподаватель",
                                    phd_defended: ISODate("2012-05-11T00:00:00Z")
                                },
                                {
                                    last_name: "Рыкова",
                                    first_name: "Светлана",
                                    patronymic: "Юрьевна",
                                    sex: "f",
                                    birth_year: 1972,
                                    age: 50,
                                    salary: 29635,
                                    children_count: 2,
                                    category: "доцент",
                                    phd_defended: ISODate("1998-10-09T00:00:00Z"),
                                    doctoral_defended: ISODate("2006-03-03T00:00:00Z")
                                }
                            ],
                            students: [
                                {
                                    first_name: "Титов",
                                    last_name: "Роман",
                                    patronymic: "Владимирович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 205,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Уварова",
                                    last_name: "Василиса",
                                    patronymic: "Артёмовна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 205
                                },
                                {
                                    first_name: "Смирнов",
                                    last_name: "Виталий",
                                    patronymic: "Степанович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 205
                                },
                                {
                                    first_name: "Лапшин",
                                    last_name: "Матвей",
                                    patronymic: "Егорович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 205
                                },
                                {
                                    first_name: "Иванова",
                                    last_name: "Алёна",
                                    patronymic: "Фёдоровна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 205
                                },
                                {
                                    first_name: "Лобанов",
                                    last_name: "Александр",
                                    patronymic: "Святославович",
                                    sex: "m", 
                                    birth_year: 2001,
                                    age: 21,
                                    year: 3,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 204
                                },
                                {
                                    first_name: "Кузьмина",
                                    last_name: "Вера",
                                    patronymic: "Фёдоровна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 204
                                },
                                {
                                    first_name: "Волкова",
                                    last_name: "Евгения",
                                    patronymic: "Петровна",
                                    sex: "f", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 204,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Морозов",
                                    last_name: "Руслан",
                                    patronymic: "Олегович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 20,
                                    year: 3,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 204
                                },
                                {
                                    first_name: "Мельников",
                                    last_name: "Иван",
                                    patronymic: "Игоревич",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 3,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 204,
                                    scholarship: [
                                        {
                                            reason: "учёба на четвёрки и пятёрки",
                                            size: 2681
                                        }
                                    ]
                                },
                                {
                                    first_name: "Крюкова",
                                    last_name: "Анастасия",
                                    patronymic: "Олеговна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 215,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ]
                                    
                                },
                                {
                                    first_name: "Герасимова",
                                    last_name: "Татьяна",
                                    patronymic: "Артёмовна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 215,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ],
                                    children_count: 1
                                },
                                {
                                    first_name: "Круглов",
                                    last_name: "Максим",
                                    patronymic: "Степанович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 215
                                },
                                {
                                    first_name: "Кашин",
                                    last_name: "Тимофей",
                                    patronymic: "Егорович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 215
                                },
                                {
                                    first_name: "Журавлёва",
                                    last_name: "Василиса",
                                    patronymic: "Фёдоровна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    group: 215
                                },
                                {
                                    first_name: "Киселёв",
                                    last_name: "Александр",
                                    patronymic: "Борисович",
                                    sex: "m", 
                                    birth_year: 2002,
                                    age: 19,
                                    year: 2,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 214
                                },
                                {
                                    first_name: "Барашкина",
                                    last_name: "Анна",
                                    patronymic: "Фёдоровна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 214,
                                    scholarship: [
                                        {
                                            reason: "социальная стипендия",
                                            size: 5124
                                        }
                                    ]
                                    
                                },
                                {
                                    first_name: "Зайцева",
                                    last_name: "Алиса",
                                    patronymic: "Ивановна",
                                    sex: "f", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 214
                                },
                                {
                                    first_name: "Летов",
                                    last_name: "Станислав",
                                    patronymic: "Дмитриевич",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 19,
                                    year: 2,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 214
                                },
                                {
                                    first_name: "Рыбников",
                                    last_name: "Иван",
                                    patronymic: "Александрович",
                                    sex: "m", 
                                    birth_year: 2003,
                                    age: 18,
                                    year: 2,
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    group: 214
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
)