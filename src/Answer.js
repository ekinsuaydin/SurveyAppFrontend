import {useState,useRef,useEffect} from 'react';
import * as d3 from 'd3';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

const Answer = () => {
    const[answer, setAnswer]=useState('')
    const[comment, setComment]=useState('')
    const date = null;
    const [cdate,setDate] = useState(date); 
    const[answers,setAnswers]=useState([]);

    const handleClick = (e) => {
        e.preventDefault()
        let date = new Date().toLocaleString();
        setDate(date);
        const survey={answer,comment,date}
        console.log(survey)
        fetch("http://localhost:8080/answer/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(survey)
        }).then(()=>{
            console.log("Answer saved")
        })   
    }

    useEffect(()=>{
        fetch("http://localhost:8080/answer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setAnswers(result);
        }
      )
      },[])

      let names = answers.map((a) => {
        return a.date;
      });

      console.log(names)

    const svgRef = useRef();
    

    /* useEffect(() => {
        
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
            .domain([0, answerss.length - 1])
            .range([0,w])

       
        const yScale=d3.scaleLinear()
            .domain([0,10])
            .range([h,0])
        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)

        const xAxis = d3.axisBottom(xScale)
            .ticks(answers.length)
            .tickFormat(d3.timeFormat('%Y-%m-%dT%H:%M:%S'))
        const yAxis = d3.axisLeft(yScale)
            .ticks(5);
        svg.append('g')
            .call(xAxis)
            .attr('transform', 'translate(0,200)');
        svg.append('g')
            .call(yAxis);

        svg.selectAll('.line')
            .data([answerss])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'orange');

    
    }, [answerss]);  */

    
   
    return (  

        <div className='content'>
            <form noValidate autoComplete="off">
            <h2>Survey</h2>
            <p>How would you rate your morale?</p>
            <input type="radio" name="morale" value="1"  
            onChange={(e)=>setAnswer(e.target.value)} />1
            <input type="radio" name="morale" value="2"
            onChange={(e)=>setAnswer(e.target.value)} />2
            <input type="radio" name="morale" value="3" 
            onChange={(e)=>setAnswer(e.target.value)} />3
            <input type="radio" name="morale" value="4"
            onChange={(e)=>setAnswer(e.target.value)} />4
            <input type="radio" name="morale" value="5" 
            onChange={(e)=>setAnswer(e.target.value)} />5
            <input type="radio" name="morale" value="6" 
            onChange={(e)=>setAnswer(e.target.value)} />6
            <input type="radio" name="morale" value="7"
            onChange={(e)=>setAnswer(e.target.value)} />7
            <input type="radio" name="morale" value="8" 
            onChange={(e)=>setAnswer(e.target.value)}/>8
            <input type="radio" name="morale" value="9"
            onChange={(e)=>setAnswer(e.target.value)} />9
            <input type="radio" name="morale" value="10"
            onChange={(e)=>setAnswer(e.target.value)} />10

            <br/>
            <br/>
            
            <div>
            <TextField id="outlined-basic" label="Comment" variant="outlined"  
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                />
            </div>

            <br/>

            <div>
                <Button variant="contained" color="secondary" onClick={handleClick}>
                SEND ANSWER
                </Button>
            </div>

            
    



            <div>
                <svg ref={svgRef}></svg>
            </div>
            
            
    </form>
            
        </div>
        
    );
}
 
export default Answer;