export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-wallet',
        title: ' ₹21k',
        subtitle: 'Yearly Earning'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-coin',
        title: ' 100',
        subtitle: 'Total Service Report'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-basket3',
        title: '456',
        subtitle: 'Yearly Customer'
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        title: ' ₹3210',
        subtitle: 'Weekly Sales'
    },

]