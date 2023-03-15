
import PageHeading from '../components/PageHeading';
import Navbar from '../components/Navbar';
import "./Home.css"
import Watched from '../components/Watched';


import ChangePages from '../components/ChangePages';
const WatchLater = (props) => {


  return (
<div>
  <div>
    
  <Navbar/>
  </div>

<div className='my-20'>

  <PageHeading heading={"Watched"} className='my-30'/>
</div>
<Watched/>
</div>

  );
}

export default WatchLater;
