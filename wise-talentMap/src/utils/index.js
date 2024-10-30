export const switchEnglishSteamName = (name) => {
    console.log(name)
    switch (name) {
        case 'Ciencia':
            return 'Science'
        case 'Tecnología':
            return 'Technology'
        case 'Ingeniería':
            return 'Engineer'
        case 'Arte':
            return 'Art'
        case 'Matemáticas':
            return 'Math'
        default:
            return 'Science'
    }
}