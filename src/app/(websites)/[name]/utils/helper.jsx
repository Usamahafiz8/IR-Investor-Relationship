
function toURLFriendly(str) {
    return str?.replace(/\s+/g, '-');
  }
  function fromURLFriendly(str) {
    return str?.replace(/-+/g, ' ');
  }
  
  export {
    toURLFriendly,
    fromURLFriendly,
    
  }