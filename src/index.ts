
import express from 'express'; 
import transactionRoutes from './routes/transactions.routes'
// import { onRequest } from 'firebase-functions/v2/https'; 
// import { scheduledFetchTransactions } from './functions/scheduled';
const app = express(); 

const PORT = process.env.PORT || 3000; 

app.use(express.json());
app.use('/api', transactionRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


// export const api = onRequest(app);
// export { scheduledFetchTransactions };

// NEXT STEP
/*
1. Initialize Google Cloud Function
2. Store response as a document in Firestore Collection
3. Schedule automation every 1am
4. Deploy cloud function



*/