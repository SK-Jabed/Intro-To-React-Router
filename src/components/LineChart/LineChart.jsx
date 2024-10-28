import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentsMarksData = [
      { student: "Alice", english: 85, physics: 78, chemistry: 82 },
      { student: "Bob", english: 78, physics: 72, chemistry: 75 },
      { student: "Charlie", english: 92, physics: 89, chemistry: 91 },
      { student: "David", english: 67, physics: 65, chemistry: 70 },
      { student: "Eve", english: 88, physics: 85, chemistry: 87 },
      { student: "Frank", english: 74, physics: 79, chemistry: 73 },
      { student: "Grace", english: 91, physics: 93, chemistry: 90 },
      { student: "Hannah", english: 80, physics: 77, chemistry: 78 },
      { student: "Ivy", english: 76, physics: 74, chemistry: 72 },
      { student: "Jack", english: 89, physics: 88, chemistry: 86 }
    ];



    return (
        <div>
            <LChart width={800} height={400} data={studentsMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="english"></Line>
                <Line dataKey="physics" stroke='red'></Line>
                <Line dataKey={"chemistry"} stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;