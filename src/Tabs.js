import React from 'react'
import BasicAccordion from './BasicAccordion'
import InnerAccordion from './InnerAccordion'
import ExampleCodeBlock from './ExampleCodeBlock'

export default function Tabs() {

  return (
    <div className='flex gap-4'>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='Printing to Console' details='Show information in your browsers console'>
          <InnerAccordion title='console.log("Hello, world!")' details='print("Hello, world!")'/>
        </BasicAccordion>
        <BasicAccordion title='Variables' details='myVar = 10'/>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='Conditionals' details ='Conditionally run code'>
          <InnerAccordion 
          title='if else if else' 
          details='<pre>if (condition) {
          } else if (condition) {
          } else {
          }</pre>'/>
        </BasicAccordion>
        <BasicAccordion title='Loops' details='for i in range(5):'/>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='Operators' details='Arithmetic, assigment, comparison, and logical operators.'>
          <InnerAccordion 
          title='+' 
          details='Addition operator'
          className='flex flex-col gap-2'>
            <div>Javascript</div>
            <ExampleCodeBlock language='javascript' code='x + y' showLineNumbers={false}/>
            <div className='mt-4'>Python</div>
            <ExampleCodeBlock language='python' code='x + y' showLineNumbers={false}/>
          </InnerAccordion>
          <InnerAccordion 
          title='-' 
          details='Subtraction operator'
          className='flex flex-col gap-2'>
            <div>Javascript</div>
            <ExampleCodeBlock language='javascript' code='x - y' showLineNumbers={false}/>
            <div className='mt-4'>Python</div>
            <ExampleCodeBlock language='python' code='x - y' showLineNumbers={false}/>
          </InnerAccordion>
          <InnerAccordion 
          title='&&' 
          details='AND comparison'
          className='flex flex-col gap-2'>
            <div>Javascript</div>
            <ExampleCodeBlock language='javascript' code='x && y' showLineNumbers={false}/>
            <div className='mt-4'>Python</div>
            <ExampleCodeBlock language='python' code='x and y' showLineNumbers={false}/>
          </InnerAccordion>
          <InnerAccordion 
          title='||' 
          details='OR comparison'
          className='flex flex-col gap-2'>
            <div>Javascript</div>
            <ExampleCodeBlock language='javascript' code='x || y' showLineNumbers={false}/>
            <div className='mt-4'>Python</div>
            <ExampleCodeBlock language='python' code='x or y' showLineNumbers={false}/>
          </InnerAccordion>
          <InnerAccordion 
          title='!' 
          details='NOT comparison'
          className='flex flex-col gap-2'>
            <div>Javascript</div>
            <ExampleCodeBlock language='javascript' code='!x' showLineNumbers={false}/>
            <div className='mt-4'>Python</div>
            <ExampleCodeBlock language='python' code='not(x)' showLineNumbers={false}/>
          </InnerAccordion>
        </BasicAccordion>
      </div>
    </div>
  )
}
