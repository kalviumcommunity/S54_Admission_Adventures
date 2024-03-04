export function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
  
    return null;
  }

  
 export  function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;;
  `}