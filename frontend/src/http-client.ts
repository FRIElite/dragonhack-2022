export function post(url: string, data: any): Promise<Response>{
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    
}

export function get(url: string): Promise<Response> {
    return fetch(url, {
        headers: {
            'Content-type': 'application/json',  
        }
    })
        
}