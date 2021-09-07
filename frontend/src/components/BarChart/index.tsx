import Chart from 'react-apexcharts'


export function BarChart(){
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [48.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return(
        //Chart = biblioteca para graficos prontos; 
        <Chart
         options={{...options, xaxis: mockData.labels}}
         series={mockData.series}
         type="bar"
         heigh="240"
        />
    )
} 