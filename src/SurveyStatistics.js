import { useParams } from "react-router";
import {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

const SurveyStatistics = () => {
  const[survey, setSurvey] = useState({}); 
  const { id } = useParams();

const svgRef = useRef();

  useEffect(() => {
    
    fetch('http://localhost:8080/survey/' + id)
    .then(response => {
        return response.json();
    })
    .then(data => {
        setSurvey(data);
        console.log(data)
        const w=500;
        const h=200;
        const svg=d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h)
                    .style('background', '#FFFFFF')
                    .style('color','black')
                    .style('margin-top', '50')
                    .style('overflow', 'visible');

        const xScale =d3.scaleTime()
            .domain([0,data.questions.answers.date.length-1])
            .range([0,w])

       
        const yScale=d3.scaleLinear()
            .domain([0,10]) 
            .range([h,0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)

            
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.questions.answers.date.length)
            .tickValues(data.questions.answers.date.toDateString)
            .tickFormat((d, i) => data.questions.answers.date[i])

        
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        svg.append('g')
            .call(xAxis)
            .attr('transform', 'translate(0,200)');
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.line')
            .data([data.questions.answers])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', '#EF1565');
    }).then({
      
    }) 
}, []);



    


    return (
        
    <div className="question-list">
        
        <h2>{survey.title}</h2>
        
        {survey.questions?.map(q => (
                <div className="question-preview" key={q.id} >
                    
                    
                    <div>
                      <h3>{ q.question }</h3>
                    </div>
                  

                    
   
                    <br/>
                    <div>
                        <svg ref={svgRef}></svg>
                    </div>
                   
         
                    
                </div>
                ))}

                
                
        
        
       
       
        
    </div>
  );
}


export default SurveyStatistics;