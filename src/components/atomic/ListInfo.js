import React from 'react';
import PropTypes from 'prop-types';
import './../css/ListInfo.css'

const ListInfo = ({headerName, displayFormat, keysArr, jsonArr, separator, headerClassName, listContainerClassName, listClassName}) => {
  const dataPresent = jsonArr.length > 0;
  // Display the list only if data is present
  return dataPresent && (
    <>
      <div className={`info-header ${headerClassName}`}>
        {headerName}
      </div>
      <div className={`info ${listContainerClassName}`}>
        {
          jsonArr.map((obj, index) => {
            let displayString = displayFormat;
            // Extract the keys and put the value of he key in the format specified.
            for(let key of keysArr) {
              displayString = displayString.replace(separator + key, obj[key])
            }
            // Display the text in the format specified.
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

ListInfo.defaultProps = {
  headerName: '',
  displayFormat: '',
  keysArr: [],
  jsonArr: [],
  separator: '$_',
  headerClassName: '',
  listContainerClassName: '',
  listClassName: ''
}

ListInfo.propTypes = {
  headerName: PropTypes.string,
  displayFormat: PropTypes.string,
  keysArr: PropTypes.array,
  jsonArr: PropTypes.array,
  separator: PropTypes.string,
  headerClassName: PropTypes.string,
  listContainerClassName: PropTypes.string,
  listClassName: PropTypes.string
}

export default ListInfo;
