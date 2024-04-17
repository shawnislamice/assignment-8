import React from "react";
import { getBooks } from "../utilities/localStorage";
import ListedBookError from "../components/ListedBookError";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const PagesToRead = () => {
  const readBooks = getBooks();
  if (readBooks.length === 0) {
    return <ListedBookError></ListedBookError>;
  }
  const colors = [
    "#0085F6",
    "#00C29C",
    "#FBB929",
    "#FC8042",
    "#FB0100",
    "red",
    "yellow",
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const data = readBooks.map((book, index) => ({
    name: book.bookName,
    pages: book.totalPages,
    pv: index,
    amt: book.totalPages,
  }));

  return (
    <div
      className="rounded-xl bg-base-300 md:my-5"
      style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          width={1200} 
          height={800}
          data={data}
          margin={{
            top: 50,
            right: 50,
            left: 50,
            bottom: 50,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 8 }} />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
