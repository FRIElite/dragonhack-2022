export const devConfig = {
    apiUrl: 'http://localhost:3000'
}

export const prodConfig = {
    apiUrl: 'http://88.200.89.235:3000'
}

export const leonCongif = {
    apiUrl: 'http://88.200.88.55:3000'
}

// export const apiUrl = (process.env.NODE_ENV === 'development' ? devConfig.apiUrl : prodConfig.apiUrl)
export const { apiUrl } = devConfig