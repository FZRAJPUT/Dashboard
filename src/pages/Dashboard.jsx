import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement)

const DashboardCard = ({ title, value, description, chart }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold mb-4">{value}</div>
      {chart}
    </CardContent>
  </Card>
)

const ModernDashboard = (isDarkMode) => {

  isDarkMode = !isDarkMode

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Users',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const doughnutChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  const areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        fill: true,
        label: 'Revenue',
        data: [1000, 1500, 1300, 1700, 1600, 1800],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <DashboardCard
            title="Total Revenue"
            value="$54,321"
            description="15% increase from last month"
            chart={<Bar data={barChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />}
          />
          <DashboardCard
            title="New Users"
            value="1,234"
            description="5% increase from last week"
            chart={<Line data={lineChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />}
          />
          <DashboardCard
            title="Device Usage"
            value="450 Active Users"
            description="Distribution across devices"
            chart={<Doughnut data={doughnutChartData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <Line 
                data={areaChartData} 
                options={{ 
                  responsive: true, 
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="pb-2">ID</th>
                      <th className="pb-2">Customer</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '001', customer: 'Alice Johnson', amount: '$120.00', status: 'Completed' },
                      { id: '002', customer: 'Bob Smith', amount: '$75.50', status: 'Pending' },
                      { id: '003', customer: 'Charlie Brown', amount: '$200.00', status: 'Completed' },
                      { id: '004', customer: 'Diana Prince', amount: '$50.00', status: 'Failed' },
                    ].map((transaction) => (
                      <tr key={transaction.id} className="border-t">
                        <td className="py-2">{transaction.id}</td>
                        <td className="py-2">{transaction.customer}</td>
                        <td className="py-2">{transaction.amount}</td>
                        <td className="py-2">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default ModernDashboard