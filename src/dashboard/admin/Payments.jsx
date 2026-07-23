import React from 'react';
import Card from '../../components/common/Card';
import { formatCurrency } from '../../utils/helper';

const Payments = () => {
  const transactions = [
    { orderId: 'order_MERN_984', email: 'student@edvanta.com', amount: 9999, status: 'captured', date: '2026-07-16' },
    { orderId: 'order_AIML_239', email: 'rahul@example.com', amount: 14999, status: 'captured', date: '2026-07-14' }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Payment Logs</h1>
        <p className="text-gray-400 text-sm">Review transaction statuses, refund queries, and Razorpay captures.</p>
      </div>

      <Card className="bg-primary/25 border-white/5 overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-primary-dark/80 text-xs uppercase tracking-wider text-gray-400">
              <tr>
                <th className="px-6 py-4">Transaction/Order ID</th>
                <th className="px-6 py-4">Student Email</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((t, idx) => (
                <tr key={idx} className="hover:bg-primary/10">
                  <td className="px-6 py-4 font-mono text-white text-xs">{t.orderId}</td>
                  <td className="px-6 py-4 font-mono text-xs">{t.email}</td>
                  <td className="px-6 py-4 font-bold text-white">{formatCurrency(t.amount)}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Payments;
