import DashBox from '@/components/DashBox'
import { useGetKpisQuery } from '@/state/api'
import { useMemo } from 'react';
import { AreaChart, LineChart, BarChart, CartesianGrid ,Area, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useTheme } from "@mui/material";
import Boxheader from '@/components/Boxheader';


const Row1 = () => {
    const {palette} = useTheme();
    const { data } = useGetKpisQuery();

    const revenue = useMemo(() => {
      return(
        data && data[0].monthlyData.map(({ month, revenue, expenses}) => {
          return {
            name: month.substring(0,3),
            revenue: revenue,
            expenses: expenses,
          }
        } )
      );
    },[data])

    const revenueExpenses = useMemo(() => {
      return(
        data && data[0].monthlyData.map(({ month, revenue, expenses}) => {
          return {
            name: month.substring(0,3),
            revenue: revenue,
            expenses: expenses,
          }
        } )
      );
    },[data])

    const revenueProfit = useMemo(() => {
      return(
        data && data[0].monthlyData.map(({ month, revenue, expenses}) => {
          return {
            name: month.substring(0,3),
            revenue: revenue,
            profit: (revenue - expenses).toFixed(4),
          }
        })
      );
    },[data])
  return (
    <>
        <DashBox gridArea="a" >
          <Boxheader title='Revenue And Expenses' subtitle='random text' sideText='afsd +4%'/>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={revenueExpenses}
              margin={{
                top: 15,
                right: 25,
                left: -10,
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={palette.primary[800]} stopOpacity={0.5} />
                  <stop offset="85%" stopColor={palette.primary[800]} stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={palette.primary[100]} stopOpacity={0.5} />
                  <stop offset="85%" stopColor={palette.primary[100]} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}/>
              <YAxis tickLine={false} axisLine={{strokeWidth: "0"}} domain={[8000, 23000]} style={{fontSize: "10px"}}/>
              <Tooltip />
              <Area type="monotone" dot={true} dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone"dot={true} dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" />
            </AreaChart>
          </ResponsiveContainer>
        </DashBox>
        <DashBox gridArea="b" >
          <Boxheader title='Revenue And Expenses' subtitle='random text' sideText='afsd +4%'/>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart

              data={revenueProfit}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]} />
              <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}/>
              <YAxis yAxisId="left" tickLine={false} axisLine={false}  style={{fontSize: "10px"}}/>
              <YAxis yAxisId="right" orientation='right' tickLine={false} axisLine={false}  style={{fontSize: "10px"}}/>
              <Tooltip />
              <Legend height={20}  wrapperStyle={{margin: '0 0 10px 0'}}/>
              <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]}/>
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
            </LineChart>
          </ResponsiveContainer>
        </DashBox>
        <DashBox gridArea="c" >
          <Boxheader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[500]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[100]}
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
        </DashBox>
    </>
  )
}

export default Row1