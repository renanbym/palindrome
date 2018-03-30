module.exports = (txt) => {
    let regex = /[\s+/.,!?\'\;\-:\_]*/g
    let backward = txt.toString().replace(regex, '') // Replace space, + , /, . , ',' , !, ?, ', ;, - , :, _
        .split('') // trasnform array
        .reverse() // Reverse array
        .join('') // trasnform string
        .toLowerCase()
    return backward === txt.toString().replace(regex, '').toLowerCase()
}