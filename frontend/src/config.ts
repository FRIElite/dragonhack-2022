export const devConfig = {
    apiUrl: 'http://localhost:3001'
}

export const prodConfig = {
    apiUrl: 'http://88.200.89.235:3000'
}

export const leonCongif = {
    apiUrl: 'http://88.200.88.55:3001'
}

export const defaultConfig = {
    apiUrl: ''
}

export const remoteConfig = {
    apiUrl: 'http://lilbunnyrabbit.com:3000'
}

export const remoteNgrokConfig = {
    apiUrl: 'https://6d8a-45-83-41-19.eu.ngrok.io'
}

// export const apiUrl = (process.env.NODE_ENV === 'development' ? devConfig.apiUrl : prodConfig.apiUrl)
export const { apiUrl } = devConfig