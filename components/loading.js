"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
export function ProgressBar({ value }) {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {value}%
      </div>
    </div>
  );
}

export function Loading(props) {
  if(props.isloading){
      return(
        <div className='container text-center'>
            <div className="spinner-border text-light" ></div>
           <h3>Не закрывайте страницу до окончания загрузки!</h3>
        </div>
         );
  }
}