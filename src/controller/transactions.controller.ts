import dayjs from 'dayjs';
import { getAllTransactions } from '../services/transactions.services';
import { addNumber } from '../middleware/http-middleware';
import { Person } from '../interface/person.interface';
 
export const fetchTransactions = async (req: any, res: any) => {
  try { 
   const department = req.query.department;
  
   //console.log(department)
   console.log(req)
   const { data, startDate, endDate } = await getAllTransactions(department); 
   const docId  = dayjs().format('YYYY-MM-DD'); 
   const p : Person = {name:"ali",age:10, hobbies:["play at playground"],id:"84848"};

    
   // Store to Firestore
  //  const docData = {
  //    startDate,
  //    endDate,
  //    length: data.length,
  //    list: data,
    
  //  };
   // await db.collection('transactions').doc(docId).set(docData);
 
    res.json({
      startDate,
      endDate,
      total: data.length,
      data,
      name: p
    });
  } catch (error: any) {
    console.error('Error in controller:', error.message || error);
    res.status(500).json({ error: error.message });
  }
};
