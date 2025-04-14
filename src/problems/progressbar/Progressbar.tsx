import './index.css'

const Progressbar = ({ progress }: { progress: number }) => {

  function progressColor(p: number) {
    let color = "lightblue";
    if (p <= 25) color = "red";
    if (p > 25 && p < 50) color = "yellow";
    if (p >= 50 && p < 75) color = "orange";
    if (p >= 75) color = "yellowgreen";
    return color;
  }

  return (
    <>
      <div>Progressbar</div>
      <div className="progress-bar">
        <div className='progress' style={{
          transform: `translateX(${progress - 100}%)`,
          backgroundColor: progressColor(progress),
        }}>
          <div className='progress-percentage'>{progress}%</div>
        </div>
      </div>
    </>
  )
}
export default Progressbar;