export type WorkHistoryItem = {
    id: number,
    name: string,
    details: string,
    startDate: string,
    endDate: string,
    logo: string
}

export const workHistory: WorkHistoryItem[] = [
    {
        id: 1,
        name: 'Factory',
        details: 'details',
        startDate: '05-01-2020',
        endDate: '08-01-2020',
        logo: '/factoryhr_logo.jpg'


    },
    {
        id: 2,
        name: 'Async Labs',
        details: 'details',
        startDate: '06-23-2021',
        endDate: '01-23-2023',
        logo: '/async_labs_logo.jpg'

    },
    {
        id: 3,
        name: 'Undabot',
        details: 'details',
        startDate: '01-23-2023',
        endDate: '06-30-2024',
        logo: '/undabot_logo.jpg'

    },
    {
        id: 4,
        name: 'True North',
        details: 'details',
        startDate: '07-01-2024',
        endDate: '09-01-2024',
        logo: '/tn_hr_logo.jpg'

    }
]