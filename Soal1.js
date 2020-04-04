const myBiodata = () => {
    return {
        'name': 'Maulana Wijayakusuma',
        'age' : 20,
        'address' : 'Jakarta',
        'hobbies' : ['Listening Music', 'Game', 'Reading', 'Cycling', 'Walking'],
        'is_married' : false,
        'list_school' : [
                            {
                                name : 'SMK Assaa'adatul Abadiyah',
                                year_in : 2015,
                                year_out : 2017,
                                major : 'Teknik Komputer dan Jaringan'
                            },

                            {
                                name : 'SMP Assa'adatul Abadiyah',
                                year_in : 2012,
                                year_out : 2014,
                                major : 'null'
                            },

                            {
                                name : 'SDN DURI KEPA 12 Pagi',
                                year_in : 2005,
                                year_out : 2011,
                                major : null
                            }
                        ],
        'skills' :  [
                        {
                            skill_name : 'English',
                            level : 'normal'
                        },

                        {
                            skill_name : 'Installation Software and Hardware Computer',
                            level : 'advanced'
                        }
                    ],
        "interest_in_coding" : true
    }
};

console.log(myBiodata());
