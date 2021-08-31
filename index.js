class Formatter {
  static capitalize (string) {
    return string.substring(0,1).toUpperCase() + string.slice(1)
  }
  static sanitize (string) {
    return string.replace(/[^-,'A-Za-z0-9 ]+/g, '');
  }
  
  static titleize (string) {
    let stringArr = string.split(" ")
    let newString = []
    stringArr.forEach(word => {
      if(
        (word !== 'the') && 
        (word !== 'a') && 
        (word !== 'and') && 
        (word !== 'of') && 
        (word !== 'an') && 
        (word !== 'but') && 
        (word !== 'for') && 
        (word !== 'at') && 
        (word !== 'by') && 
        (word !== 'from')) {
        return newString.push(word.substr(0,1).toUpperCase() + word.slice(1))
      }else{
        return newString.push(word)
      }
    })
    string = newString.join(' ')
    return string.substr(0,1).toUpperCase() + string.slice(1)
  }
}