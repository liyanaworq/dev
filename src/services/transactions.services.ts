import axios from 'axios';
import dayjs from 'dayjs';  
import https from 'https';
const BASE_URL = 'https://121.121.228.193:8088/api/transaction/list';
const access_token : any = process.env.ACCESS_TOKEN || "12EB7601B713419E27DD68DC0BA080E8F88AE318469803FB4386EAFB6642B05F";

export const getAllTransactions = async (department:string) => { 
  const pageSize = 1000;
  const startDate = dayjs().subtract(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss');
  const endDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  let pageNo = 1;
  let allData: any[] = []; 
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // ⚠️ Use only for development/self-signed certs
  });
  while (true) {
    const params = new URLSearchParams({
      access_token,
      startDate,
      endDate,
      pageNo: pageNo.toString(),
      pageSize: pageSize.toString(),
    });

    const url = `${BASE_URL}?${params.toString()}`; 
    const response = await axios.get(url, {
      headers: { Accept: 'application/json' },
      httpsAgent,
    });

    const data = response.data?.data || [];

    if (data.length === 0) break;

    allData.push(...data);
    console.log(`Fetched page ${pageNo} with ${data.length} records.`);
    pageNo++;
  }

  const finalData = allData.filter(i=> i.deptName === department)
  console.log("finalData",finalData)
  return { data: finalData, startDate, endDate };
};
