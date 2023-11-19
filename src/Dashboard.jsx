import './dashboard.css'

const Dashboard = () => {
  return (
    <div>


      <div className='graph-container'>
        <h1 className='heading'>Social, Hebbal on Dhun Jam</h1>


        <form className="form">

          <div className='que'>
            <div className='que-container'>
              <label htmlFor="">Do you want to charge your customers for requesting songs?</label>
            </div>


            <div className='que-container'>
              <input type="radio" />
              <input type="radio" />
            </div>

          </div>


          <div className='que'>
            <div className='que-container'>
              <label htmlFor="">Custom song request amount-</label>
            </div>


            <div className='que-container'>
              <input type="number" value="300" />
            </div>
            
          </div>


          <div className='que'>
            <div className='que-container'>
              <label htmlFor="">Regular song request amounts, from high to low</label>
            </div>


            <div className='que-container'>
              <input type="number" value="300" />
              <input type="number" value="300" />
              <input type="number" value="300" />
              <input type="number" value="300" />
            </div>
            
          </div>

          <button className='save'>Save</button>
        </form>
      </div>



    </div>
  )
}

export default Dashboard
