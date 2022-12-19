db.plans.insertMany ( 
    [
        {
            year: 2020,
            institutes: [
                {
                    name: "Институт фундаментальных наук",
                    departments: [ 
                        {
                            name: "Кафедра фундаментальной и прикладной химии",
                            groups: [
                                {
                                    direction: "Химия",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Рыкова Светлана Юрьевна",
                                            lec_teacher: "Рыкова Светлана Юрьевна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Экология",
                                            lab_teacher: "Панина Дарья Александровна",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Никитин Михаил Артёмович",
                                            lec_teacher: "Лузгарева Валентина Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Денисов Николай Константинович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Карпова",
                                                            last_name: "София",
                                                            patronymic: "Георгиевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Кондратьева Кира Константиновна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Кибернетика",
                                            lab_teacher: "Соколов Богдан Артёмович",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петрова",
                                                            last_name: "Алиса",
                                                            patronymic: "Игоревна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Зайцев",
                                                            last_name: "Борис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Осипов",
                                                            last_name: "Владимир",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Поляков",
                                                            last_name: "Тимур",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Высокомолекулярные соединения",
                                            lab_teacher: "Громова Варвара Александровна",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Самораспространяющийся высокотемпературный синтез",
                                            lab_teacher: "Долгова София Леонидовна",
                                            lec_teacher: "Долгова София Леонидовна",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Материалы со специальными свойствами",
                                            lab_teacher: "Казанцев Вадим Никитич",
                                            lec_teacher: "Королёв Антон Арсентьевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химическое материаловедение",
                                            lab_teacher: "Михайлова Ангелина Егоровна",
                                            lec_teacher: "Сотников Павел Евгеньевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Биология",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Ботаника",
                                            lab_teacher: "Лебедев Тимур Артёмович",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Маркова Валерия Степановна",
                                            lec_teacher: "Кожухов Фёдор Петрович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Кондратьева Кира Константиновна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },

                                            ]
                                        },
                                        {
                                            name: "Зоология",
                                            lab_teacher: "Соколов Богдан Артёмович",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Климов",
                                                            last_name: "Руслан",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Капустин",
                                                            last_name: "Михаил",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Дроздов",
                                                            last_name: "Захар",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чесноков",
                                                            last_name: "Илья",
                                                            patronymic: "Максимович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Ульяна",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Гистология",
                                            lab_teacher: "Осипов Николай Артёмович",
                                            lec_teacher: "Жданов Иван Иванович",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Цитология",
                                            lab_teacher: "Зиновьев Артём Данилович",
                                            lec_teacher: "Долгова София Леонидовна",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Микробиология",
                                            lab_teacher: "Королёв Антон Арсентьевич",
                                            lec_teacher: "Королёв Антон Арсентьевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Вирусология",
                                            lab_teacher: "Михайлова Ангелина Егоровна",
                                            lec_teacher: "Сотников Павел Евгеньевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Кафедра общей и экспериментальной физики",
                            groups: [
                                {
                                    direction: "Физика",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Рыкова Светлана Юрьевна",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Экология",
                                            lab_teacher: "Кононова Надежда Леонидовна",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Лузгарева Валентина Петровна",
                                            lec_teacher: "Лузгарева Валентина Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна"
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна"
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович"
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Агрофизика",
                                            lab_teacher: "Афанасьев Тимур Артемьевич",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биофизика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Харламов",
                                                            last_name: "Никита",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Черкасов",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Пименова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Никулина",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика сплошных сред",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Статистическая физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Электродинамика конденсированных сред",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Щеглова Мария Максимовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Методы математической физики",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Материаловедение",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Рыкова Светлана Юрьевна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Лебедев Тимур Артёмович",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Строение вещества",
                                            lab_teacher: "Козлова Дарья Даниловна",
                                            lec_teacher: "Кожухов Фёдор Петрович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Термодинамика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Оптика",
                                            lab_teacher: "Ковалёва Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Атомная и ядерная физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика частиц",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Астрофизика",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Щеглова Мария Максимовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Методы математической физики",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Кафедра фундаментальной математики",
                            groups: [ 
                                {
                                    direction: "Математика и компьютерные науки",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгебра",
                                            lab_teacher: "Назаров Василий Денисович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        ,
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Теория вероятностей",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Институт цифры",
                    departments: [ 
                        {
                            name: "Кафедра цифровых технологий",
                            groups: [
                                {
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Николаев Александр Степанович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Большакова Камила Фёдоровна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Титов",
                                                            last_name: "Роман",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Уварова",
                                                            last_name: "Василиса",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Смирнов",
                                                            last_name: "Виталий",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лапшин",
                                                            last_name: "Матвей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванова",
                                                            last_name: "Алёна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Администрирование",
                                            lab_teacher: "Рыжова Виктория Валерьевна",
                                            lec_teacher: "Васильев Тимур Всеволодович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Базы данных",
                                            lab_teacher: "Мешков Лев Савельевич",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Николаев Александр Степанович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Большакова Камила Фёдоровна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Демидович Надежда Викторовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Лобанов",
                                                            last_name: "Александр",
                                                            patronymic: "Святославович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кузьмина",
                                                            last_name: "Вера",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Волкова",
                                                            last_name: "Евгения",
                                                            patronymic: "Петровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Морозов",
                                                            last_name: "Руслан",
                                                            patronymic: "Олегович"
                                                        },
                                                        {
                                                            first_name: "Мельников",
                                                            last_name: "Иван",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Машинное обучение",
                                            lab_teacher: "Смирнов Артур Романович",
                                            lec_teacher: "Васильев Тимур Всеволодович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Искусственный интеллект",
                                            lab_teacher: "Смирнов Артур Романович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]           
        },
        {
            year: 2021,
            institutes: [
                {
                    name: "Институт фундаментальных наук",
                    departments: [ 
                        {
                            name: "Кафедра фундаментальной и прикладной химии",
                            groups: [
                                {
                                    direction: "Химия",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Рыкова Светлана Юрьевна",
                                            lec_teacher: "Рыкова Светлана Юрьевна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Тарасов",
                                                            last_name: "Марк",
                                                            patronymic: "Эдуардович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Медведев",
                                                            last_name: "Олег",
                                                            patronymic: "Константинович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Савельева",
                                                            last_name: "Евгения",
                                                            patronymic: "Павловна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Суворова",
                                                            last_name: "Дарья",
                                                            patronymic: "Олеговна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Романов",
                                                            last_name: "Александр",
                                                            patronymic: "Игоревич",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Экология",
                                            lab_teacher: "Панина Дарья Александровна",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Тарасов",
                                                            last_name: "Марк",
                                                            patronymic: "Эдуардович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Медведев",
                                                            last_name: "Олег",
                                                            patronymic: "Константинович",
                                                        },
                                                        {
                                                            first_name: "Савельева",
                                                            last_name: "Евгения",
                                                            patronymic: "Павловна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Суворова",
                                                            last_name: "Дарья",
                                                            patronymic: "Олеговна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Романов",
                                                            last_name: "Александр",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Никитин Михаил Артёмович",
                                            lec_teacher: "Лузгарева Валентина Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Тарасов",
                                                            last_name: "Марк",
                                                            patronymic: "Эдуардович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Медведев",
                                                            last_name: "Олег",
                                                            patronymic: "Константинович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Савельева",
                                                            last_name: "Евгения",
                                                            patronymic: "Павловна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Суворова",
                                                            last_name: "Дарья",
                                                            patronymic: "Олеговна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Романов",
                                                            last_name: "Александр",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Тарасов",
                                                            last_name: "Марк",
                                                            patronymic: "Эдуардович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Медведев",
                                                            last_name: "Олег",
                                                            patronymic: "Константинович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Савельева",
                                                            last_name: "Евгения",
                                                            patronymic: "Павловна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Суворова",
                                                            last_name: "Дарья",
                                                            patronymic: "Олеговна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Романов",
                                                            last_name: "Александр",
                                                            patronymic: "Игоревич",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Денисов Николай Константинович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Тарасов",
                                                            last_name: "Марк",
                                                            patronymic: "Эдуардович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Медведев",
                                                            last_name: "Олег",
                                                            patronymic: "Константинович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Савельева",
                                                            last_name: "Евгения",
                                                            patronymic: "Павловна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Суворова",
                                                            last_name: "Дарья",
                                                            patronymic: "Олеговна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Романов",
                                                            last_name: "Александр",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Кондратьева Кира Константиновна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Кибернетика",
                                            lab_teacher: "Соколов Богдан Артёмович",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Высокомолекулярные соединения",
                                            lab_teacher: "Громова Варвара Александровна",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Самораспространяющийся высокотемпературный синтез",
                                            lab_teacher: "Долгова София Леонидовна",
                                            lec_teacher: "Долгова София Леонидовна",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Материалы со специальными свойствами",
                                            lab_teacher: "Казанцев Вадим Никитич",
                                            lec_teacher: "Королёв Антон Арсентьевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химическое материаловедение",
                                            lab_teacher: "Михайлова Ангелина Егоровна",
                                            lec_teacher: "Сотников Павел Евгеньевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Биология",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Ботаника",
                                            lab_teacher: "Лебедев Тимур Артёмович",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна"
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Маркова Валерия Степановна",
                                            lec_teacher: "Кожухов Фёдор Петрович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Койнов",
                                                            last_name: "Олег",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Борисов",
                                                            last_name: "Сергей",
                                                            patronymic: "Владимирович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Денис",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Иванов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Игоревич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Калинина",
                                                            last_name: "Диана",
                                                            patronymic: "Арсеньевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Кондратьева Кира Константиновна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Кибернетика",
                                            lab_teacher: "Соколов Богдан Артёмович",
                                            lec_teacher: "Соколов Богдан Артёмович",
                                            report: [ 
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Гистология",
                                            lab_teacher: "Осипов Николай Артёмович",
                                            lec_teacher: "Жданов Иван Иванович",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Цитология",
                                            lab_teacher: "Зиновьев Артём Данилович",
                                            lec_teacher: "Долгова София Леонидовна",
                                            report: [ 
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Микробиология",
                                            lab_teacher: "Королёв Антон Арсентьевич",
                                            lec_teacher: "Королёв Антон Арсентьевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Вирусология",
                                            lab_teacher: "Михайлова Ангелина Егоровна",
                                            lec_teacher: "Сотников Павел Евгеньевич",
                                            report: [ 
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Кафедра общей и экспериментальной физики",
                            groups: [
                                {
                                    direction: "Физика",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Рыкова Светлана Юрьевна",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Константин",
                                                            patronymic: "Михайлович"
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Экология",
                                            lab_teacher: "Кононова Надежда Леонидовна",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Лузгарева Валентина Петровна",
                                            lec_teacher: "Лузгарева Валентина Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Максим",
                                                            patronymic: "Артурович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Симонова",
                                                            last_name: "Марина",
                                                            patronymic: "Владимировна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Лаврова",
                                                            last_name: "Полина",
                                                            patronymic: "Дмитриевна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Баранов",
                                                            last_name: "Дмитрий",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Шалоумов",
                                                            last_name: "Денис",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Агрофизика",
                                            lab_teacher: "Афанасьев Тимур Артемьевич",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биофизика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика сплошных сред",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Статистическая физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Электродинамика конденсированных сред",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Щеглова Мария Максимовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Методы математической физики",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Материаловедение",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Рыкова Светлана Юрьевна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Химия",
                                            lab_teacher: "Лебедев Тимур Артёмович",
                                            lec_teacher: "Кононова Надежда Леонидовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Строение вещества",
                                            lab_teacher: "Козлова Дарья Даниловна",
                                            lec_teacher: "Кожухов Фёдор Петрович",
                                            report: [
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Биология",
                                            lab_teacher: "Киселева Ева Давидовна",
                                            lec_teacher: "Васильева Светлана Петровна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Перельман",
                                                            last_name: "Артур",
                                                            patronymic: "Михайлович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Денисов",
                                                            last_name: "Андрей",
                                                            patronymic: "Сергеевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Анисимов",
                                                            last_name: "Марк",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Беляев",
                                                            last_name: "Никита",
                                                            patronymic: "Сергеевич"
                                                        },
                                                        {
                                                            first_name: "Новикова",
                                                            last_name: "Ольга",
                                                            patronymic: "Александровна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Термодинамика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 32,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Оптика",
                                            lab_teacher: "Ковалёва Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Атомная и ядерная физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика частиц",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Астрофизика",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Щеглова Мария Максимовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Методы математической физики",
                                            lab_teacher: "Щеглова Мария Максимовна",
                                            lec_teacher: "Афанасьев Тимур Артемьевич",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Кафедра фундаментальной математики",
                            groups: [ 
                                {
                                    direction: "Математика и компьютерные науки",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгебра",
                                            lab_teacher: "Назаров Василий Денисович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            pass: true
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Дягилев Степан Иванович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Булатова",
                                                            last_name: "Екатерина",
                                                            patronymic: "Григорьевна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Мартынова",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Петров",
                                                            last_name: "Тихон",
                                                            patronymic: "Платонович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Орлов",
                                                            last_name: "Максим",
                                                            patronymic: "Олегович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Чернова",
                                                            last_name: "Ева",
                                                            patronymic: "Николаевна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Теория вероятностей",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Институт цифры",
                    departments: [ 
                        {
                            name: "Кафедра цифровых технологий",
                            groups: [
                                {
                                    direction: "Математическое обеспечение и администрирование информационных систем",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Николаев Александр Степанович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Большакова Камила Фёдоровна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Крюкова",
                                                            last_name: "Анастасия",
                                                            patronymic: "Олеговна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Герасимова",
                                                            last_name: "Татьяна",
                                                            patronymic: "Артёмовна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Круглов",
                                                            last_name: "Максим",
                                                            patronymic: "Степанович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Кашин",
                                                            last_name: "Тимофей",
                                                            patronymic: "Егорович"
                                                        },
                                                        {
                                                            first_name: "Журавлёва",
                                                            last_name: "Василиса",
                                                            patronymic: "Фёдоровна"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Баранов Владимир Львович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Администрирование",
                                            lab_teacher: "Рыжова Виктория Валерьевна",
                                            lec_teacher: "Васильев Тимур Всеволодович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Базы данных",
                                            lab_teacher: "Мешков Лев Савельевич",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    direction: "Фундаментальная информатика и информационные технологии",
                                    disciplines: [
                                        {
                                            name: "Информатика",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Геометрия",
                                            lab_teacher: "Николаев Александр Степанович",
                                            lec_teacher: "Соловьева Алиса Артёмовна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Математика",
                                            lab_teacher: "Большакова Камила Фёдоровна",
                                            lec_teacher: "Степанова Мирослава Павловна",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "exam",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 1,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 5
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Физика",
                                            lab_teacher: "Денисов Николай Константинович",
                                            lec_teacher: "Дягилев Степан Иванович",
                                            report: [
                                                {
                                                    semestre: 1,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            pass: true
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            pass: true
                                                        }
                                                    ]
                                                },
                                                {
                                                    semestre: 2,
                                                    lab_hours: 64,
                                                    lect_hours: 32,
                                                    test: "pass with mark",
                                                    students: [ 
                                                        {
                                                            first_name: "Киселёв",
                                                            last_name: "Александр",
                                                            patronymic: "Борисович",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Барашкина",
                                                            last_name: "Анна",
                                                            patronymic: "Фёдоровна",
                                                            mark: 3
                                                        },
                                                        {
                                                            first_name: "Зайцева",
                                                            last_name: "Алиса",
                                                            patronymic: "Ивановна",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Летов",
                                                            last_name: "Станислав",
                                                            patronymic: "Дмитриевич",
                                                            mark: 4
                                                        },
                                                        {
                                                            first_name: "Рыбников",
                                                            last_name: "Иван",
                                                            patronymic: "Александрович",
                                                            mark: 3
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            name: "Алгоритмизация",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 128,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Функциональный анализ",
                                            lab_teacher: "Демидович Надежда Викторовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 3,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 4,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Численные методы",
                                            lab_teacher: "Одинцов Павел Борисович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "exam"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Моделирование",
                                            lab_teacher: "Кузнецова Александра Денисовна",
                                            lec_teacher: "Демидович Надежда Викторовна",
                                            report: [
                                                {
                                                    semestre: 5,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 6,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Машинное обучение",
                                            lab_teacher: "Смирнов Артур Романович",
                                            lec_teacher: "Васильев Тимур Всеволодович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Искусственный интеллект",
                                            lab_teacher: "Смирнов Артур Романович",
                                            lec_teacher: "Одинцов Павел Борисович",
                                            report: [
                                                {
                                                    semestre: 7,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass"
                                                },
                                                {
                                                    semestre: 8,
                                                    lab_hours: 64,
                                                    lect_hours: 64,
                                                    test: "pass with mark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]           
        }
    ]
)