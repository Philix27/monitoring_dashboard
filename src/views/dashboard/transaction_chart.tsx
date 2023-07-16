"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./transaction_chart.module.scss";
import { getFullMonthName } from "helper/fullMonthName";

interface ITransactionChartData {
  month: string;
  "Money in": number;
  "Money out": number;
  "Net change": number;
}

const transData: ITransactionChartData[] = [
  { month: "FEB", "Money in": 36000, "Money out": 22000, "Net change": 14000 },
  { month: "MAR", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "APR", "Money in": 56000, "Money out": 23000, "Net change": 28000 },
  { month: "MAY", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "JUN", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "JUL", "Money in": 86000, "Money out": 28500, "Net change": 28000 },
  { month: "AUG", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "SEP", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "NOV", "Money in": 42000, "Money out": 8000, "Net change": 28000 },
  { month: "DEC", "Money in": 46000, "Money out": 18000, "Net change": 28000 },
  { month: "JAN", "Money in": 6000, "Money out": 18000, "Net change": 28000 },
];

export const TransactionChart = () => {
  const renderLegend = () => {
    return (
      <div
        style={{
          //   background: "red",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
          borderRadius: 10,
          padding: "5px 10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#088000",
            }}
          />
          <p style={{ fontSize: 12, color: "#555" }}> Money in</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#ff0000",
            }}
          />
          <p style={{ fontSize: 12, color: "#555" }}> Money out</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderWidth: 2,
              borderRadius: "50%",
              borderColor: "#000",
            }}
          />
          <p style={{ fontSize: 12, color: "#555" }}> Net change</p>
        </div>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    const net_change = payload[1]?.value - payload[0]?.value;
    if (active && payload && payload.length) {
      return (
        <div className={styles.custom_tooltip}>
          <p className={styles.header}>{`${getFullMonthName(label)}, 2023`}</p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#088000",
                }}
              />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>
                Money in
              </p>
            </div>
            <p style={{ fontSize: "13px", color: "#999" }}>
              {`$${payload[1].value}`}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ff0000",
                }}
              />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>
                Money out
              </p>
            </div>
            <p style={{ fontSize: "13px", color: "#999" }}>
              {`$${payload[0].value}`}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: "#000",
                }}
              />
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#555" }}>
                Net change
              </p>
            </div>
            <p style={{ fontSize: "13px", color: "#999" }}>{`${
              net_change < 0 ? "-" : ""
            }$${Math.abs(net_change)}`}</p>
          </div>
        </div>
      );
    }

    return null;
  };

  const yaxis_formatter = (value) => {
    // format he value to multiples of 1000

    if (value === 0) {
      return `${value}`;
    }
    return `${value / 1000}k`;
  };

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        width={500}
        height={300}
        data={transData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid /> */}
        <Legend wrapperStyle={{ top: 10, left: 10 }} content={renderLegend} />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={yaxis_formatter} />
        <Tooltip content={CustomTooltip} />
        <Bar
          dataKey="Money out"
          stackId="a"
          fill="#ff0000"
          width={10}
          barSize={20}
        />
        <Bar dataKey="Money in" stackId="a" fill="#088000" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionChart;
