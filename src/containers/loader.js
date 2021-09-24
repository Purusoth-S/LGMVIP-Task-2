import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
            <Loader
            type="TailSpin"
            color="rgb(255,255,255)"
            height={200}
            width={480}
            timeout={2500}
            />
       </div>
    );
}
export default LoaderComp
