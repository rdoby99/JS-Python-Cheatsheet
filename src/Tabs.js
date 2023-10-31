import React from 'react'
import BasicAccordion from './BasicAccordion'
import InnerAccordion from './InnerAccordion'

export default function Tabs() {
  return (
    <div className='flex gap-4'>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='Printing to Console' details='Show information in your browsers console'>
          <InnerAccordion title='console.log("Hello, world!")' details='print("Hello, world!")'/>
        </BasicAccordion>
        <BasicAccordion title='let myVar = 10' details='myVar = 10'/>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='Conditionals' details ='Conditionally run code'>
          <InnerAccordion title='if else if else' details='if elif else'/>
        </BasicAccordion>
        <BasicAccordion title='for (let i = 0; i < 5; i++)' details='for i in range(5):'/>
      </div>
      <div className="w-1/3 flex flex-col gap-4">
        <BasicAccordion title='for (let i = 0; i < 5; i++)' details='for i in range(5):'/>
      </div>
    </div>
  )
}
