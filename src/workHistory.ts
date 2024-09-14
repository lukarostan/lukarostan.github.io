export type WorkHistoryItem = {
    id: number,
    name: string,
    details: string,
    startDate: string,
    endDate: string
}

export const workHistory: WorkHistoryItem[] = [
    {
        id: 1,
        name: 'Factory',
        details: 'detailss1s',
        startDate: '05-01-2020',
        endDate: '08-01-2020',

    },
    {
        id: 2,
        name: 'Async',
        details: 'detailss2s',
        startDate: '06-23-2021',
        endDate: '01-23-2023',

    },
    {
        id: 3,
        name: 'Undabot',
        details: 'detailss3s',
        startDate: '01-23-2023',
        endDate: '06-30-2024',

    },
    {
        id: 4,
        name: 'True North',
        details: 'detailss3s',
        startDate: '07-01-2024',
        endDate: '09-01-2024',

    }
]