import React from 'react'

import './main.css';

export const Main = () => {
  return (
    <div>

     
  <div className='firstbox'>


<div className='left'>
<div className='ts'>
    Top Stories
   <hr></hr>
</div>

<div className='l1'>
    <div className='imgl1'></div>
    <p id='amz'>Amazon Activist Arrested in Capital City </p>
   <div className='amz1'>
    <p>International support for well-known trailblazer continues.</p>
    <hr></hr>
   </div>
</div>

<div className='l2'>
<div className='imgl2'></div>
<p id='amz'>Heatwave or Unprecedented Highs</p>
<div className='amz1'>
    <p>Hottest day in South Asia since 1904.</p>
   </div>
</div>


</div>
<div className='cm'>
<div className='center'>
{/* <p id='cent'>Coastal Cities to Be Inundated by 2050</p> */}
<div className='cimg'></div>
<div className='ctext'>Coastal Cities to Be Inundated by 2050</div>
</div>

</div>


<div className='right'>

Views
<hr></hr>
<div className='r1'>
    <p id='amz'>Unknown</p>
    <hr></hr>
    <p id='view'>Non-profitable news page in 2023 means alot</p>
   
</div>

<div className='r2'>
    <p id='amz'>Unknown</p>
   <hr></hr>
    <p id='view'>Always updated</p>
    
</div>


</div>


</div>
<div className='climate'>
  <p id='cc'>Climate Change</p>
 

  <div className='ci1'>
    <div className='cim1'></div>
  <p id='c1'>Ocean Sewage Pollution Persists</p>

<p id='cc1'>Beachgoers warned to stay clear of popular summer destination.</p>
</div>
  <div className='ci2'>
<div className='cim2'></div>
<p id='c2'>Deep-Sea Sharks Spotted Near Popular Resort Town</p>

<p id='cc2'>Scientists from the Aquatic Marine Institute stunned by new migration patterns.</p>


  </div>
  <div className='ci3'>
<div className='cim3'></div>
<p id='c3'>Carbon Tax Draft Plan Made Public</p>

<p id='cc3'>Long-awaited European initiative faces tough opposition from a number of key nations.</p>



  </div>
</div>
</div>

  

  )
}

export default Main;