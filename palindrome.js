// A palindrome is a word, phrase, number, or another sequence of characters which reads the same backward or forward.
//
// Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
String.prototype.adjustmentsPunctuation = function () {
    return this.toLowerCase()
        .replace(new RegExp('[ÁÀÂÃå]', 'gi'), 'a')
        .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
        .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
        .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
        .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
        .replace(new RegExp('[Ç]', 'gi'), 'c')
        .replace(new RegExp('[ñ]', 'gi'), 'n')
}
module.exports = (txt) => {
    let regex = /[\s+/.,!?\'\;\-:\_]*/g
    let backward = txt.toString()
        .adjustmentsPunctuation() // adjustments punctuation
        .replace(regex, '') // Replace space, + , /, . , ',' , !, ?, ', ;, - , :, _ // adjustments word dividers
        .split('') // trasnform array
        .reverse() // Reverse array
        .join('') // trasnform string
        .toLowerCase() //adjustments to capital letters
    return backward === txt.toString().adjustmentsPunctuation().replace(regex, '').toLowerCase()
}