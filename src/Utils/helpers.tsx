export interface ITemplate {
    color: string
    label: string
}

const templates: ITemplate[] = [
    {
        color: '#FF6F61',
        label: 'ソースせんべい',
    },
    {
        color: '#6B5B95',
        label: 'ガリガリくん',
    },
    {
        color: '#F7CAC9',
        label: 'ピラ辛イカ',
    },
    {
        color: '#88B04B',
        label: 'ファミチキん',
    },
    {
        color: '#92A8D1',
        label: 'ポッキ',
    },
    {
        color: '#955251',
        label: 'コアラのマーチ',
    },
    {
        color: '#B565A7',
        label: 'キャベツ太郎',
    },
    {
        color: '#009B77',
        label: 'きのこの山',
    },
    {
        color: '#DD4124',
        label: '柿の種',
    },
    {
        color: '#45B8AC',
        label: 'はいチェ',
    },
]

export const generateRandomTemplate = (): ITemplate =>
    templates[Math.floor(Math.random() * templates.length)]
