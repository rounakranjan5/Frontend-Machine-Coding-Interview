import { useEffect, useState } from 'react'
import '../App.css'
const ProgressBar = () => {
    let [progress, setProgress] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setProgress(85)
        }, 3000)
    }, [progress])

    return (
        <div>
            <div className="outer-container">
                <div className="inner-container" style={
                    {
                        // width: progress<0 ? "0%" : progress >100 ? "100%" : `${progress}%` ,
                        transform: progress < 0 ? "translateX(100%)" : progress > 100 ? "translateX(0%)" :
                            `translateX(${progress - 100}%)`,
                        backgroundColor: progress < 4 ? 'black' : progress < 50 ? 'red' : progress < 75 ? 'yellow' : 'green',
                        color: progress < 4 ? 'white' : progress < 75 ? 'black' : 'white'
                    }
                } role='progressbar' aria-valuenow={progress} aria-valuemax={100} aria-valuemin={0} aria-label={`Progress: ${progress}%`}>
                    <div>
                        {progress > 100 ? 100 : progress < 0 ? 0 : progress}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar