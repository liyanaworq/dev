import https from 'https';
 
export const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // ⚠️ Use only for development/self-signed certs
});

export const addNumber = (num1:number, num2:number) => {
  return num1 + num2;
}
