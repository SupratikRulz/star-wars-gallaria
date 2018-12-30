import React from 'react';
import './../css/ListInfo.css'

const ListInfo = ({headerName = '', displayFormat = '', keysArr = [], jsonArr = [], headerClassName = '', listContainerClassName = '', listClassName = ''}) => {
  const dataPresent = jsonArr.length > 0;
  return dataPresent && (
    <>
      <div className={`info-header ${headerClassName}`}>
        {headerName}
      </div>
      <div className={`info ${listContainerClassName}`}>
        {
          jsonArr.map((obj, index) => {
            let displayString = displayFormat;
            for(let key of keysArr) {
              displayString = displayString.replace('$_' + key, obj[key])
            }
            return (
              <div key={index+displayString} className={listClassName}>
                {displayString}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ListInfo;
