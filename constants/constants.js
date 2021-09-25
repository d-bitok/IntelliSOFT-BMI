const screens = {
    main_layout: 'MainLayout',
    home: 'Home',
    profile: 'Profile',
    bmi: 'BMI',
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home
    },
    {
        id: 1,
        label: screens.bmi
    },
    {
        id: 2,
        label: screens.profile
    },
]

export default {
    screens,
    bottom_tabs,
}