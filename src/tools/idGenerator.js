
export const generateRandomKey = prefix => {
    const key1 = Math.random().toString(36).substring(8)
    const key2 = Math.random().toString(36).substring(8)
    return prefix + "_" + key1 + "_" + key2
}