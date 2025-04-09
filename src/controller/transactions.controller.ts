import dayjs from 'dayjs';
import { getAllTransactions } from '../services/transactions.services';
 
export const fetchTransactions = async (req: any, res: any) => {
  try { 
   const department = "WORQSTAFF";////req.query.department
   const { data, startDate, endDate } = await getAllTransactions(department); 
   const docId = dayjs().format('YYYY-MM-DD');

   // Store to Firestore
   const docData = {
     startDate,
     endDate,
     length: data.length,
     list: data,
   };
   // await db.collection('transactions').doc(docId).set(docData);
 
    res.json({
      startDate,
      endDate,
      total: data.length,
      data,
    });
  } catch (error: any) {
    console.error('Error in controller:', error.message || error);
    res.status(500).json({ error: error.message });
  }
};
