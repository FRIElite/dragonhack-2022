export const devConfig = {
    apiUrl: 'localhost:3000'
}

export const prodConfig = {
    apiUrl: 'http://88.200.89.235:3000'
}

// export const apiUrl = (process.env.NODE_ENV === 'development' ? devConfig.apiUrl : prodConfig.apiUrl)
export const { apiUrl } = prodConfig