export const verifyAllowedMethods = (method, allowedMethods) => {
  if(!allowedMethods.includes(method)){
    return {status: 405, error: 'Method not Allowed'}
  }
  return false;
}