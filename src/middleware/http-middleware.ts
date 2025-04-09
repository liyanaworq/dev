import https from 'https';
 
export const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // ⚠️ Use only for development/self-signed certs
  });