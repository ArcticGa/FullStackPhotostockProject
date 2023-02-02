export const checkValidUrl = (url) => {
  const exp =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

  let regex = new RegExp(exp)

  if (url.match(regex)) {
    return true
  } else {
    return false
  }
}
