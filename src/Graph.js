import { useParams } from "react-router";
import {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

const Graph = (props) => {
  const[question, setQuestion] = useState({}); 
  const[information, setInformation] = useState('');
  const id = props.id;
  console.log(id)

const svgRef = useRef();
  useEffect(() => {
    
    fetch('http://localhost:8080/question/' + id)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data.answers.length===0){
         setInformation('No one answered yet.')
        }
        else {
        setQuestion(data);
        console.log('answers', data.answers.map(a => a.answer))
        const w=650;
        const h=200;
        const svg=d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h)
                    .style('background', '#FFFFFF')
                    .style('color','black')
                    .style('margin-top', '10')
                    .style('margin-left','40')
                    .style('margin-bottom', '10')
                    .style('overflow', 'visible');

        const xScale =d3.scaleTime()
            .domain([0,data.answers.map(a => a.date).length-1])
            .range([0,w])

       
        const yScale=d3.scaleLinear()
            .domain([0,10]) 
            .range([h,0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)

            
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.answers.map(a => a.date).length)
            .tickValues(data.answers.map(a => a.date).toDateString)
            .tickFormat((d, i) => data.answers.map(a => a.date)[i])

        
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        svg.append('g')
            .call(xAxis)
            .attr('transform', 'translate(0,200)');
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.line')
            .data([data.answers.map(a => a.answer)])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', '#EF1565');
  }})

}, []);



    return (
        
   
    <div>
        <p style={{'fontWeight': 'bold'}}>
           {information} 
        </p>
        <svg ref={svgRef}></svg>
        
    </div>    
                 

  );
}


export default Graph;