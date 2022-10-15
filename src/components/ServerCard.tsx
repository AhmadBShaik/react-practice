import  React from 'react'

export const ServerCard = () => {
    const [showBlinker, setShowBlinker] = React.useState<boolean>(false);
    const [isServerOn, setServerOn] = React.useState<boolean>(true);
    React.useEffect(() => {
      const handler = setInterval(() => {
        if (isServerOn) {
          setShowBlinker(!showBlinker);
        }
      }, 1000);
      return () => clearInterval(handler);
    });
    return (
        <div className="container">
      <div className="card">
        
        {
          isServerOn ?
          showBlinker && <div className="status-on">&#9679; Active</div>
          :
          <div className="status-off">- Offline</div>
        
        }
        <img src="data:image/jpeg;base64,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" />
        <div className="location">Mumbai/IN</div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          repellat delectus ea incidunt necessitatibus assumenda velit
          consequatur iusto cupiditate architecto, totam laborum nemo, eaque
          voluptas maxime expedita ipsa fugit a.
        </div>
        <div className="action-btns">
          <button className="on-btn" onClick={() => setServerOn(true)}>ON</button>
          <button className="off-btn" onClick={() => setServerOn(false)}>OFF</button>
        </div>
      </div>
    </div>
    )
}